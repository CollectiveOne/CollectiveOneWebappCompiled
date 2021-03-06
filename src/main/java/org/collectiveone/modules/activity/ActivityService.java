package org.collectiveone.modules.activity;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.UUID;

import javax.transaction.Transactional;

import org.collectiveone.common.dto.GetResult;
import org.collectiveone.common.dto.PostResult;
import org.collectiveone.modules.activity.dto.NotificationsPackDto;
import org.collectiveone.modules.activity.dto.SubscriberDto;
import org.collectiveone.modules.activity.enums.ActivityType;
import org.collectiveone.modules.activity.enums.NotificationContextType;
import org.collectiveone.modules.activity.enums.NotificationState;
import org.collectiveone.modules.activity.enums.SubscriberEmailNowConfig;
import org.collectiveone.modules.activity.enums.SubscriberEmailSummaryConfig;
import org.collectiveone.modules.activity.enums.SubscriberEmailSummaryPeriodConfig;
import org.collectiveone.modules.activity.enums.SubscriberInAppConfig;
import org.collectiveone.modules.activity.enums.SubscriberInheritConfig;
import org.collectiveone.modules.activity.enums.SubscriberPushConfig;
import org.collectiveone.modules.activity.enums.SubscriptionElementType;
import org.collectiveone.modules.activity.repositories.ActivityRepositoryIf;
import org.collectiveone.modules.activity.repositories.NotificationRepositoryIf;
import org.collectiveone.modules.activity.repositories.SubscriberRepositoryIf;
import org.collectiveone.modules.assignations.Assignation;
import org.collectiveone.modules.conversations.Message;
import org.collectiveone.modules.conversations.MessageThreadContextType;
import org.collectiveone.modules.crypto.CryptoService;
import org.collectiveone.modules.initiatives.Initiative;
import org.collectiveone.modules.initiatives.InitiativeService;
import org.collectiveone.modules.initiatives.Member;
import org.collectiveone.modules.initiatives.dto.InitiativeDto;
import org.collectiveone.modules.initiatives.repositories.InitiativeRepositoryIf;
import org.collectiveone.modules.model.GraphNode;
import org.collectiveone.modules.model.ModelCardWrapper;
import org.collectiveone.modules.model.ModelCardWrapperAddition;
import org.collectiveone.modules.model.ModelSection;
import org.collectiveone.modules.model.ModelService;
import org.collectiveone.modules.model.ModelSubsection;
import org.collectiveone.modules.model.enums.ElementConsentPositionColor;
import org.collectiveone.modules.model.repositories.ModelCardWrapperAdditionRepositoryIf;
import org.collectiveone.modules.model.repositories.ModelCardWrapperRepositoryIf;
import org.collectiveone.modules.model.repositories.ModelSectionRepositoryIf;
import org.collectiveone.modules.tokens.InitiativeTransfer;
import org.collectiveone.modules.tokens.TokenBurn;
import org.collectiveone.modules.tokens.TokenMint;
import org.collectiveone.modules.tokens.TokenType;
import org.collectiveone.modules.users.AppUser;
import org.collectiveone.modules.users.AppUserRepositoryIf;
import org.collectiveone.modules.users.PushSubscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.PageRequest;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import nl.martijndwars.webpush.PushService;

@Service
public class ActivityService {
	
	@Autowired
	private Environment env;
	
	@Autowired
	private InitiativeService initiativeService;
	
	@Autowired
	private ModelService modelService;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private TimeService timeService;
		
	@Autowired
	private NotificationDtoBuilder notificationDtoBuilder;
	
	
	@Autowired
	private AppUserRepositoryIf appUserRepository;
	
	@Autowired
	private ActivityRepositoryIf activityRepository;
	
	@Autowired
	private NotificationRepositoryIf notificationRepository;
	
	@Autowired
	private SubscriberRepositoryIf subscriberRepository;
	
	@Autowired
	private InitiativeRepositoryIf initiativeRepository;
	
	@Autowired
	private ModelSectionRepositoryIf modelSectionRepository;
	
	@Autowired
	private ModelCardWrapperRepositoryIf modelCardWrapperRepository;
	
	@Autowired
	private ModelCardWrapperAdditionRepositoryIf modelCardWrapperAdditionRepository;
	
	
	@Autowired
	private SimpMessagingTemplate template;
	
	@Autowired
	private PushService pushService;
	
	@Autowired
	private CryptoService cryptoService;
	
	
	
	@Transactional
	public void sendWantToContributeEmails() throws IOException {
	}
	
	@Transactional
	public void sendNotificationEmailsSendNow() throws IOException {
		
		System.out.println("cheking notifications to send now");
		
		List<Notification> notifications = 
				notificationRepository.findByEmailNowStateOrderedByUser(NotificationState.PENDING);
		
		if (notifications.size() > 0) {
			emailService.sendNotificationsGrouped(notifications, "Very recent activity on your initiatives");
		}
	}
	
	@Transactional
	public void sendNotificationEmailsOnceADay() throws IOException {
		
		System.out.println("cheking notifications to send daily");
		
		List<Notification> notifications = 
				notificationRepository.findByPeriodConfigAndEmailSummaryStateOrderedByUser(
						SubscriberEmailSummaryPeriodConfig.DAILY, NotificationState.PENDING);
		
		if (notifications.size() > 0) {
			emailService.sendNotificationsGrouped(notifications, "Summary of activity in the last day");
		}
	}
	
	@Transactional
	public void sendNotificationEmailsOnceAWeek() throws IOException {
		
		System.out.println("cheking notifications to send weekly");
		
		List<Notification> notifications = 
				notificationRepository.findByPeriodConfigAndEmailSummaryStateOrderedByUser(
						SubscriberEmailSummaryPeriodConfig.WEEKLY, NotificationState.PENDING);
		
		if (notifications.size() > 0) {
			emailService.sendNotificationsGrouped(notifications, "Summary of activity in the last week");
		}
	}
	
	@Transactional
	public void deleteOldNotifications() throws IOException {
		
		System.out.println("deleting old notifications");
		
		Date now = new Date();
		Calendar c = Calendar.getInstance();
		c.setTime(now);
		c.add(Calendar.MONTH, -1);
		
		notificationRepository.deleteOlderThan(new Timestamp(c.getTimeInMillis()));
	}
	
	private NotificationsPack userNotifications(
			UUID userId, 
			NotificationContextType contextType, 
			UUID elementId,
			PageRequest page,
			Boolean onlyUnread) {
		
		List<UUID> allSectionIds = null;
		List<UUID> cardsIds = null;
		boolean isModel = false;
		
		switch (contextType) {
			case MODEL_SECTION:
				allSectionIds = modelService.getAllSubsectionsIds(elementId, userId, null);
				cardsIds = allSectionIds.size() > 0 ? modelCardWrapperAdditionRepository.findAllCardWrapperIdsOfSections(allSectionIds) : new ArrayList<UUID>();
				isModel = true;
				break;
				
			case MODEL_CARD:
				allSectionIds = new ArrayList<UUID>();
				cardsIds = new ArrayList<UUID>();
				cardsIds.add(elementId);
				isModel = true;
				break;
				
			case INITIATIVE:
				isModel = false;
				break;
				
			default:
				break;
		
		}
		
		List<NotificationState> states = new ArrayList<NotificationState>();
		states.add(NotificationState.PENDING);
		
		if (!onlyUnread) {
			states.add(NotificationState.DELIVERED);
		}
		
		List<Notification> notifications = null;
		Integer totalUnread = 0;
		
		if(isModel == true) {
			if (allSectionIds.size() == 0) {
				allSectionIds.add(UUID.randomUUID());
			}
			
			if (cardsIds.size() == 0) {
				cardsIds.add(UUID.randomUUID());
			}
			
			notifications = notificationRepository.findOfUserInSections(userId, states, allSectionIds, cardsIds, page);
			totalUnread = notificationRepository.countPendingOfUserInSections(userId, allSectionIds, cardsIds);
			
		} else {
			if (contextType == NotificationContextType.INITIATIVE) {
				UUID topModelSectionId = initiativeRepository.findTopModelSectionIdById(elementId);
				
				allSectionIds = modelService.getAllSubsectionsIds(topModelSectionId, userId, null);
				
				if (allSectionIds.size() == 0) {
					allSectionIds.add(UUID.randomUUID());
				}
				
				cardsIds = new ArrayList<UUID>();
				cardsIds.add(topModelSectionId);
				cardsIds = modelCardWrapperAdditionRepository.findAllCardWrapperIdsOfSections(allSectionIds);
				
				if (cardsIds.size() == 0) {
					cardsIds.add(UUID.randomUUID());
				}
				
				List<InitiativeDto> subinitiativesTree = initiativeService.getSubinitiativesTree(elementId, null);
				
				List<UUID> allInitiativesIds = new ArrayList<UUID>();
				
				allInitiativesIds.add(elementId);
				allInitiativesIds.addAll(extractAllIdsFromInitiativesTree(subinitiativesTree, new ArrayList<UUID>()));
				
				notifications = notificationRepository.findOfUserInInitiativesAndSection(userId, states, allInitiativesIds, allSectionIds, cardsIds, page);
				totalUnread = notificationRepository.countPendingOfUserInInitiativesAndSection(userId, allInitiativesIds, allSectionIds, cardsIds);	
			} else {
				/* all notifications of user */
				notifications = notificationRepository.findOfUser(userId, states, page);
				totalUnread = notificationRepository.countPendingOfUser(userId);	
			}
		}
		
		NotificationsPack notificationsPack = new NotificationsPack();
		
		notificationsPack.setNotifications(notifications);
		notificationsPack.setTotalUnread(totalUnread != null ? totalUnread : 0);
		
		return notificationsPack;
	}
	
	
	private List<UUID> extractAllIdsFromInitiativesTree(List<InitiativeDto> initiativeTree, List<UUID> list) {
		
		for (InitiativeDto initiativeDto : initiativeTree) {
			list.add(UUID.fromString(initiativeDto.getId()));
		}
		
		for (InitiativeDto initiativeDto : initiativeTree) {
			extractAllIdsFromInitiativesTree(initiativeDto.getSubInitiatives(), list);
		}
		
		return list;
	}

	@Transactional
	public GetResult<NotificationsPackDto> getUserNotifications(
			UUID userId, 
			NotificationContextType contextType, 
			UUID elementId,
			PageRequest page,
			Boolean isHtml,
			Boolean onlyUnread) {
		
		
		NotificationsPack notificationsPack = userNotifications(userId, contextType, elementId, page, onlyUnread);
		NotificationsPackDto notificationsPackDto = new NotificationsPackDto();
		
		for(Notification notification : notificationsPack.getNotifications()) {
			notificationsPackDto.getNotifications().add(notificationDtoBuilder.getNotificationDto(notification, isHtml));
		}
		
		notificationsPackDto.setTotalUnread(notificationsPack.getTotalUnread());
		
		return new GetResult<NotificationsPackDto>("success", "notifications found", notificationsPackDto);
	}
	
	@Transactional
	public PostResult notificationsRead(
			UUID userId, 
			NotificationContextType contextType, 
			UUID elementId ) {
		
		NotificationsPack notificationsPack = userNotifications(userId, contextType, elementId, null, true);
		
		for(Notification notification: notificationsPack.getNotifications()) {
			
			notification.setInAppState(NotificationState.DELIVERED);
			notification.setPushState(NotificationState.DELIVERED);
			notification.setEmailNowState(NotificationState.DELIVERED);
			notification.setEmailSummaryState(NotificationState.DELIVERED);
			
			notificationRepository.save(notification);
		}
		
		return new PostResult("success", "success", "");
	}
	
	@Transactional
	public PostResult notificationsListRead(
			UUID userId,
			List<UUID> notificationIds) {
		
		if (notificationIds.size() == 0) {
			notificationIds.add(UUID.randomUUID());
		}
		List<Notification> notifications = notificationRepository.findByIdIn(userId, notificationIds);
		
		for(Notification notification: notifications) {
			
			notification.setInAppState(NotificationState.DELIVERED);
			notification.setPushState(NotificationState.DELIVERED);
			notification.setEmailNowState(NotificationState.DELIVERED);
			notification.setEmailSummaryState(NotificationState.DELIVERED);
			
			notificationRepository.save(notification);
		}
		
		return new PostResult("success", "success", "");
	}
	
	@Transactional
	public PostResult notificationPushed(
			UUID notificationId ) {
		
		Notification notification = notificationRepository.findById(notificationId).get();
		
		if (notification == null) {
			return new PostResult("error", "notification not found", "");
		}
		
		notification.setPushState(NotificationState.DELIVERED);
		notificationRepository.save(notification);
		
		return new PostResult("success", "notification updated", "");
	}
	
	@Transactional
	public void addSubscriber(UUID elementId, UUID userId, SubscriptionElementType type) {
		if (subscriberRepository.findByElementIdAndTypeAndUser_C1Id(elementId, type, userId) == null) {
			Subscriber subscriber = new Subscriber();
			
			subscriber.setElementId(elementId);
			subscriber.setType(type);
			subscriber.setUser(appUserRepository.findByC1Id(userId));
			
			subscriber.setInheritConfig(SubscriberInheritConfig.INHERIT);
			
			initDefaultSubscriber(subscriber);
			
			subscriberRepository.save(subscriber);
		}
	}
	
	@Transactional
	public void removeSubscriber(UUID elementId, SubscriptionElementType type, UUID userId) {
		Subscriber subscriber = type == 
				SubscriptionElementType.COLLECTIVEONE ? 
						subscriberRepository.findByUser_C1IdAndType(userId, type) :
						subscriberRepository.findByElementIdAndTypeAndUser_C1Id(elementId, type, userId);
						
		subscriberRepository.delete(subscriber);
	}
	
	
	@Transactional
	public PostResult editSubscriber(UUID userId, UUID elementId, SubscriptionElementType type, SubscriberDto subscriberDto) {
		Subscriber subscriber = getOrCreateSubscriber(elementId, type, userId);
				
		subscriber.setInheritConfig(SubscriberInheritConfig.valueOf(subscriberDto.getInheritConfig()));
		
		subscriber.setInAppConfig(SubscriberInAppConfig.valueOf(subscriberDto.getInAppConfig()));
		subscriber.setPushConfig(SubscriberPushConfig.valueOf(subscriberDto.getPushConfig()));
		subscriber.setEmailNowConfig(SubscriberEmailNowConfig.valueOf(subscriberDto.getEmailNowConfig()));
		subscriber.setEmailSummaryConfig(SubscriberEmailSummaryConfig.valueOf(subscriberDto.getEmailSummaryConfig()));
		subscriber.setEmailSummaryPeriodConfig(SubscriberEmailSummaryPeriodConfig.valueOf(subscriberDto.getEmailSummaryPeriodConfig()));
				
		subscriberRepository.save(subscriber);
		
		return new PostResult("success", "member notifications changed", "");
	}
	
	/* central DTO conversion to add context element logic */
	private SubscriberDto getSubscriberDto(Subscriber subscriber) {
		
		SubscriberDto subscriberDto = subscriber.toDto();
		
		/* add dto of the context element */
		switch (subscriber.getType()) {
			case SECTION:
				subscriberDto.setSection(modelSectionRepository.findById(subscriber.getElementId()).get().toDto());
				break;
			
			case INITIATIVE:
				subscriberDto.setInitiative(initiativeRepository.findById(subscriber.getElementId()).get().toDto());
				break;
				
			default: 
				break;
		}
		
		if (subscriber.getInheritConfig() == SubscriberInheritConfig.INHERIT) {
			Subscriber applicableSubscriber = getApplicableSubscriber(
					subscriber.getUser().getC1Id(), 
					subscriber.getType(), 
					subscriber.getElementId(),
					false);
			
			SubscriberDto applicableSubscriberDto = applicableSubscriber.toDto();
			
			switch (applicableSubscriber.getType()) {
				case SECTION:
					applicableSubscriberDto.setSection(modelSectionRepository.findById(applicableSubscriber.getElementId()).get().toDto());
					break;
				
				case INITIATIVE:
					applicableSubscriberDto.setInitiative(initiativeRepository.findById(applicableSubscriber.getElementId()).get().toDto());
					break;
					
				default: 
					break;
			}
			
			subscriberDto.setApplicableSubscriber(applicableSubscriberDto);
		}
		
		return subscriberDto; 
	}
	
	@Transactional
	public GetResult<SubscriberDto> getSubscriberInheritFrom(UUID userId, UUID elementId, SubscriptionElementType type) {
		Subscriber applicableSubscriber = getApplicableSubscriber(userId, type, elementId, true);
		return new GetResult<SubscriberDto>("success", "success", getSubscriberDto(applicableSubscriber));
	}
	
	@Transactional
	public GetResult<SubscriberDto> getSubscriber(UUID userId, UUID elementId, SubscriptionElementType type) {
		Subscriber subscriber = type == 
			SubscriptionElementType.COLLECTIVEONE ? 
					subscriberRepository.findByUser_C1IdAndType(userId, type) :
					subscriberRepository.findByElementIdAndTypeAndUser_C1Id(elementId, type, userId);
					
		SubscriberDto subscriberDto = null;
		
		if (subscriber == null) {
			
			/* this is a dummy subscriber element that is 
			 * compatible with the dto conversion function */
			subscriber = new Subscriber();
			
			subscriber.setType(type);
			subscriber.setElementId(elementId);
			subscriber.setInheritConfig(SubscriberInheritConfig.INHERIT);
			subscriber.setUser(appUserRepository.findByC1Id(userId));
			
			subscriberDto = getSubscriberDto(subscriber);
			
		} else {
			subscriberDto = getSubscriberDto(subscriber);
		}
		
		return new GetResult<SubscriberDto>("success", "success", subscriberDto);
		
	}
	
	/** Each user have one general purposed Susbscriber element used to send general notifications
	 * not associated to any initiative or element */
	@Transactional
	private Subscriber getOrCreateSubscriber(UUID elementId, SubscriptionElementType type, UUID userId) {
		Subscriber subscriber = type == 
				SubscriptionElementType.COLLECTIVEONE ? 
						subscriberRepository.findByUser_C1IdAndType(userId, type) :
						subscriberRepository.findByElementIdAndTypeAndUser_C1Id(elementId, type, userId);

		if (subscriber != null) {
			return subscriber;
		}
		
		subscriber = new Subscriber();
		
		subscriber.setUser(appUserRepository.findByC1Id(userId));
		subscriber.setElementId(elementId);
		subscriber.setType(type);
		
		initDefaultSubscriber(subscriber);
		
		return subscriberRepository.save(subscriber);
	}
	
	public void initDefaultSubscriber(Subscriber subscriber) {
		
		/* this MUST coincide with one of the prototype configurations on the frontend */
		subscriber.setInAppConfig(SubscriberInAppConfig.ALL_EVENTS);
		subscriber.setPushConfig(SubscriberPushConfig.ONLY_MENTIONS);
		subscriber.setEmailNowConfig(SubscriberEmailNowConfig.ONLY_MENTIONS);
		subscriber.setEmailSummaryConfig(SubscriberEmailSummaryConfig.ALL_EVENTS);
		subscriber.setEmailSummaryPeriodConfig(SubscriberEmailSummaryPeriodConfig.WEEKLY);
	}
	
	/**
	 * 
	 * First Step
	 * 
	 * */
	
	
	@Transactional
	public void newInitiativeCreated(Initiative initiative, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, initiative); 
		
		activity.setType(ActivityType.INITIATIVE_CREATED);
		activity = activityRepository.save(activity);
		
		addNewInitiativeNotifications(activity);
	}
	
	@Transactional
	public void newTokenCreated(Initiative initiative, AppUser triggerUser, TokenType token, TokenMint mint) {
		Activity activity = getBaseActivity(triggerUser, initiative); 
		
		activity.setType(ActivityType.TOKEN_CREATED);
		activity.setTokenType(token);
		activity.setMint(mint);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
		
	@Transactional
	public void newSubinitiativeCreated(Initiative initiative, AppUser triggerUser, Initiative subinitiative, List<InitiativeTransfer> transfers) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.SUBINITIATIVE_CREATED);
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(initiative);
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setSubInitiative(subinitiative);
		for (InitiativeTransfer transfer : transfers) {
			activity.getInitiativeTransfers().add(transfer);
		}
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void initiativeEdited(Initiative initiative, AppUser triggerUser, String oldName, String oldDriver) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.INITIATIVE_EDITED);
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(initiative);
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setOldName(oldName);
		activity.setOldDriver(oldDriver);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void tokensMinted(Initiative initiative, TokenMint mint) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.TOKENS_MINTED);
		activity.setTriggerUser(mint.getOrderedBy());
		activity.setInitiative(initiative);
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setMint(mint);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void tokensBurnt(Initiative initiative, TokenBurn burn) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.TOKENS_BURNT);
		activity.setTriggerUser(burn.getOrderedBy());
		activity.setInitiative(initiative);
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setBurn(burn);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	
	
	@Transactional
	public void peerReviewedAssignationCreated(Assignation assignation, AppUser triggerUser) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.PR_ASSIGNATION_CREATED);
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(assignation.getInitiative());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setAssignation(assignation);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void peerReviewedAssignationDone(Assignation assignation) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.PR_ASSIGNATION_DONE);
		activity.setTriggerUser(assignation.getCreator());
		activity.setInitiative(assignation.getInitiative());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setAssignation(assignation);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void directAssignationCreated(Assignation assignation, AppUser triggerUser) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.D_ASSIGNATION_CREATED);
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(assignation.getInitiative());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setAssignation(assignation);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void transferToSubinitiative(InitiativeTransfer transfer) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.INITIATIVE_TRANSFER);
		activity.setTriggerUser(transfer.getOrderedBy());
		activity.setInitiative(transfer.getFrom());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setInitiativeTransfer(transfer);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void assignationRevertOrdered(Assignation assignation, AppUser triggerUser) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.ASSIGNATION_REVERT_ORDERED);
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(assignation.getInitiative());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setAssignation(assignation);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void assignationRevertCancelled(Assignation assignation) {
		Activity revertOrder = activityRepository.findTop1ByAssignation_IdAndTypeOrderByTimestampDesc(assignation.getId(), ActivityType.ASSIGNATION_REVERT_ORDERED);
		
		Activity activity = new Activity();
		
		activity.setType(ActivityType.ASSIGNATION_REVERT_CANCELLED);
		activity.setTriggerUser(revertOrder.getTriggerUser());
		activity.setInitiative(assignation.getInitiative());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setAssignation(assignation);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void assignationReverted(Assignation assignation) {
		Activity revertOrder = activityRepository.findTop1ByAssignation_IdAndTypeOrderByTimestampDesc(assignation.getId(), ActivityType.ASSIGNATION_REVERT_ORDERED);
		
		Activity activity = new Activity();
		
		activity.setType(ActivityType.ASSIGNATION_REVERTED);
		activity.setTriggerUser(revertOrder.getTriggerUser());
		activity.setInitiative(assignation.getInitiative());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setAssignation(assignation);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void assignationDeleted(Assignation assignation, AppUser triggerUser) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.ASSIGNATION_DELETED);
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(assignation.getInitiative());
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity.setAssignation(assignation);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void initiativeDeleted(Initiative initiative, AppUser triggerUser) {
		Activity activity = new Activity();
		
		activity.setType(ActivityType.INITIATIVE_DELETED);
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(initiative);
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelSectionCreatedOnSection(ModelSubsection subsection, ModelSection onSection, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_SECTION_CREATED);
		activity.setModelSubsection(subsection);
		activity.setOnSection(onSection);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelSectionEdited(ModelSubsection subsection, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_SECTION_EDITED);
		activity.setModelSubsection(subsection);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelSectionRemovedFromSection(ModelSubsection subsection, ModelSection fromSection, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_SECTION_REMOVED);
		activity.setModelSubsection(subsection);
		activity.setFromSection(fromSection);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelSubsectionRemoved(ModelSubsection subsection, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_SECTION_REMOVED);
		activity.setModelSubsection(subsection);
		activity.setFromSection(subsection.getParentSection());
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelSubsectionMoved(ModelSubsection subsection, ModelSection fromSection, ModelSection onSection, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_SECTION_MOVED);
		activity.setModelSubsection(subsection);
		activity.setFromSection(fromSection);
		activity.setOnSection(onSection);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelSubsectionAdded(ModelSubsection subsection, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_SECTION_ADDED);
		activity.setModelSubsection(subsection);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	
	
	@Transactional
	public void modelCardWrapperCreated(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_CREATED);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelCardWrapperMadeShared(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_MADE_SHARED);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelCardWrapperMadeCommon(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_MADE_COMMON);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelCardWrapperAdded(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_ADDED);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelCardWrapperEdited(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_EDITED);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelCardWrapperMoved(ModelCardWrapperAddition cardWrapperAddition, ModelSection fromSection, ModelSection onSection, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_MOVED);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity.setFromSection(fromSection);
		activity.setOnSection(onSection);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelCardWrapperRemoved(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_REMOVED);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity.setFromSection(cardWrapperAddition.getSection());
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void modelCardWrapperDeleted(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MODEL_CARDWRAPPER_DELETED);
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void consentStatusStarted(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.CONSENT_STATUS_OPENED);
		
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void consentStatusClosed(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.CONSENT_STATUS_CLOSED);
		
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void consentStatusReopened(ModelCardWrapperAddition cardWrapperAddition, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.CONSENT_STATUS_REOPENED);
		
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void consentPositionStated(ModelCardWrapperAddition cardWrapperAddition, ElementConsentPositionColor positionColor, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.CONSENT_POSITION_STATED);
		activity.setPositionColor(positionColor);
		
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public void consentPositionChanged(ModelCardWrapperAddition cardWrapperAddition, ElementConsentPositionColor positionColor, AppUser triggerUser) {
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.CONSENT_POSITION_CHANGED);
		activity.setPositionColor(positionColor);
		
		activity.setModelCardWrapperAddition(cardWrapperAddition);
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	
	
	@Transactional
	public void messagePosted(
			Message message, 
			AppUser triggerUser, 
			MessageThreadContextType contextType, 
			UUID elementId, 
			UUID contextOfContextElementId,
			List<AppUser> mentionedUsers) {
		
		Activity activity = getBaseActivity(triggerUser, null); 
		
		activity.setType(ActivityType.MESSAGE_POSTED);
		activity.setMessage(message);
		activity.getMentionedUsers().addAll(mentionedUsers);
		setMessageLocation(activity, contextType, elementId, contextOfContextElementId);
		
		activity = activityRepository.save(activity);
		
		addInitiativeActivityNotifications(activity);
	}
	
	@Transactional
	public PostResult moveMessage(
			UUID messageId,
			UUID toElementId,
			MessageThreadContextType toContextType, 
			UUID contextOfContextElementId) {
		
		Activity activity = activityRepository.findOfMessagePosted(messageId);
		setMessageLocation(activity, toContextType, toElementId, contextOfContextElementId);
		activity = activityRepository.save(activity);
		
		return new PostResult("success", "messaged moved", messageId.toString());
	}
	
	private void setMessageLocation(
			Activity activity, 
			MessageThreadContextType contextType, 
			UUID elementId,
			UUID contextOfContextElementId) {
		
		ModelSection section = null;
		switch (contextType) {
			
			case MODEL_CARD:
				ModelCardWrapper cardWrapper = modelCardWrapperRepository.findById(elementId).get();
				activity.setModelCardWrapper(cardWrapper);
				
				/* store also the section in which the card was when the comment was made */
				if(contextOfContextElementId != null) {
					section = modelSectionRepository.findById(contextOfContextElementId).get();
				} else {
					ModelCardWrapperAddition cardAddition = 
							modelCardWrapperAdditionRepository.findFirstOfCardWrapper(elementId);
					
					if(cardAddition != null) {
						section = cardAddition.getSection();
					}
				}
				
				activity.setOnSection(section);
				
				/* remove model section reference */
				activity.setModelSection(null);
				
				break;
			
			case MODEL_SECTION:
				section = modelSectionRepository.findById(elementId).get();
				activity.setModelSection(section);

				/* remove model card reference */
				activity.setModelCardWrapper(null);
				
				break;
				
			case INITIATIVE:
				activity.setInitiative(initiativeRepository.findById(elementId).get());
				break;
				
		}
	}
	
	private Activity getBaseActivity(AppUser triggerUser, Initiative initiative) {
		Activity activity = new Activity();
		
		activity.setTriggerUser(triggerUser);
		activity.setInitiative(initiative);
		activity.setTimestamp(new Timestamp(System.currentTimeMillis()));

		return activity;
	}
	
	
	
	/**
	 * 
	 * Second Step
	 * 
	 * */
	
	/** To be called within an activity transaction, modifies the notifications property of the
	 * input activity */
	
	/* Special case of new initiative created. ALl members are notified, not the subscribers */
	private void addNewInitiativeNotifications (Activity activity) {
		SortedSet<Member> members = activity.getInitiative().getMembers();
		
		for (Member member : members) {
			if(activity.getTriggerUser().getC1Id() != member.getUser().getC1Id()) {
				/* add a notification only if the trigger user is not the subscriber */
				Subscriber subscriber = subscriberRepository.findByUser_C1IdAndType(member.getUser().getC1Id(), SubscriptionElementType.COLLECTIVEONE);
				createSubscriberNotification(subscriber, activity);
			}
		}
	}
	
	private Boolean isInModel(Activity activity) {
		Boolean isInModel = false;
		/* subscribers are derived from the sections if activity is on a card or section*/
		switch (activity.getType()) {
			case MODEL_CARDWRAPPER_ADDED:
			case MODEL_CARDWRAPPER_DELETED:
			case MODEL_CARDWRAPPER_CREATED:
			case MODEL_CARDWRAPPER_EDITED:
			case MODEL_CARDWRAPPER_MOVED:
			case MODEL_CARDWRAPPER_REMOVED:
			case MODEL_CARDWRAPPER_MADE_COMMON:
			case MODEL_CARDWRAPPER_MADE_SHARED:
			case MODEL_SECTION_ADDED:
			case MODEL_SECTION_CREATED:
			case MODEL_SECTION_DELETED:
			case MODEL_SECTION_EDITED:
			case MODEL_SECTION_MOVED:
			case MODEL_SECTION_REMOVED:
				
			case CONSENT_STATUS_OPENED:
			case CONSENT_STATUS_CLOSED:
			case CONSENT_STATUS_REOPENED:
			case CONSENT_POSITION_STATED:
			case CONSENT_POSITION_CHANGED:
				
				isInModel = true;
				break;
				
			case MESSAGE_POSTED:
				isInModel = (activity.getModelCardWrapper() != null) 
					|| (activity.getModelSection() != null);
				break;
			
			default:
				break;			
		}
		return isInModel;
	}
	
	private List<UUID> changesSectionTree(Activity activity) {
		List<UUID> changes = new ArrayList<UUID>();
		/* subscribers are derived from the sections if activity is on a card or section*/
		switch (activity.getType()) {
			case MODEL_SECTION_ADDED:
			case MODEL_SECTION_CREATED:
			case MODEL_SECTION_REMOVED:
				changes.add(activity.getModelSubsection().getParentSection().getId());
				break;
				
			case MODEL_SECTION_MOVED:
				changes.add(activity.getModelSubsection().getParentSection().getId());
				changes.add(activity.getFromSection().getId());
				break;
				
			default:
				break;			
		}
		return changes;
	}
	
	private void addInitiativeActivityNotifications (Activity activity) {
		
		createNotifications(activity);
		
		/* broadcast the event to connected websockets */
		broadcastMessage(activity);
	}
	
	private List<UUID> directlyAffectedSectionsIds(Activity activity) {
		List<ModelSection> sections = null;
		switch (activity.getType()) {
			case MODEL_CARDWRAPPER_ADDED:
			case MODEL_CARDWRAPPER_DELETED:
			case MODEL_CARDWRAPPER_CREATED:
			case MODEL_CARDWRAPPER_EDITED:
			case MODEL_CARDWRAPPER_MOVED:
			case MODEL_CARDWRAPPER_REMOVED:
				
				/* activity in cards is considered as occurring on the sections these card is placed */
				UUID cardWrapperId = activity.getModelCardWrapperAddition().getCardWrapper().getId();	
				sections = modelCardWrapperAdditionRepository.findParentSections(cardWrapperId);
				
				/* add this addition section in case its not there (just removed) */
				if (activity.getModelCardWrapperAddition() != null && !sections.contains(activity.getModelCardWrapperAddition().getSection())) {
					sections.add(activity.getModelCardWrapperAddition().getSection());	
				}
				
				/* add from and to sections in case they are not there */
				if (activity.getFromSection() != null && !sections.contains(activity.getFromSection())) {
					sections.add(activity.getFromSection());
				}
				
				if (activity.getOnSection() != null && !sections.contains(activity.getOnSection())) {
					sections.add(activity.getOnSection());
				}
				
				break;
				
			/* these activities occur at the section level, because scope is a section + card characteristic, not a card one. */
			case MODEL_CARDWRAPPER_MADE_COMMON:
			case MODEL_CARDWRAPPER_MADE_SHARED:
				sections = new ArrayList<ModelSection>();
				sections.add(activity.getModelCardWrapperAddition().getSection());
				break;
				
			case CONSENT_STATUS_OPENED:
			case CONSENT_STATUS_CLOSED:
			case CONSENT_STATUS_REOPENED:
			case CONSENT_POSITION_STATED:
			case CONSENT_POSITION_CHANGED:
				sections = new ArrayList<ModelSection>();
				sections.add(activity.getModelCardWrapperAddition().getSection());
				break;
				
				
			case MESSAGE_POSTED:
				sections = new ArrayList<ModelSection>();
				
				/* message context is derived from the existence or not of the associated section */
				if (activity.getModelSection() != null) {
					sections.add(activity.getModelSection());	
				} 
				
				if (activity.getModelCardWrapper() != null) {
					sections.addAll(modelCardWrapperAdditionRepository.findParentSections(activity.getModelCardWrapper().getId()));
				}
				
				break;
				
			default: 
				/* activity in section applies to that section only */
				sections = new ArrayList<ModelSection>();
				sections.add(activity.getModelSubsection().getSection());
				break;
		}
		
		List<UUID> sectionsIds = new ArrayList<UUID>();
		
		for (ModelSection section : sections) {
			sectionsIds.add(section.getId());
		}
		
		return sectionsIds;
	}
	
	/* this method must be consistent with the create notification method below. Otherwise the user wont know
	 * what the hell is going on... */
	private Subscriber getApplicableSubscriber(UUID userId, SubscriptionElementType elementType, UUID elementId, Boolean skipOne) {
		Subscriber applicableSubscriber = null; 
		
		
		
		/* check if start on section */
		if (elementType == SubscriptionElementType.SECTION) {
			applicableSubscriber = findSubscriberOnSectionsRec(userId, elementId, new HashSet<UUID>(), skipOne);
			skipOne = false;
			
			/* if found in sections */
			if (applicableSubscriber != null) {
				return applicableSubscriber;
			}
		}
		
		/* get applicable initiative */
		UUID initiativeId = null;
		switch (elementType) {
			case SECTION:
				initiativeId = modelSectionRepository.findById(elementId).get().getInitiative().getId();
				break;
				
			case INITIATIVE:
				initiativeId = elementId;
				break;
				
			default:
				break;
		}
		
		if (initiativeId != null) {
			/* if not found in section or not relative to section, look on initiatives */
			applicableSubscriber = findSubscriberOnInitiatives(userId, initiativeId, skipOne);	
		}
		
		/* if not found a CUSTOM subscriber in any section or initiative, use the user global subscriber */
		if (applicableSubscriber == null) {
			applicableSubscriber = subscriberRepository.findByUser_C1IdAndType(userId, SubscriptionElementType.COLLECTIVEONE);
		}
		
		return applicableSubscriber;		
	}
	
	private Subscriber findSubscriberOnSectionsRec(UUID userId, UUID sectionId, Set<UUID> readIds, Boolean skipOne) {
		
		if (!skipOne) {
			Subscriber subscriber = subscriberRepository.findByElementIdAndTypeAndUser_C1Id(sectionId, SubscriptionElementType.SECTION, userId);
			readIds.add(sectionId);
			
			/* if found, return it, otherwise look for it recursively in the parent sections*/
			if (subscriber != null) {
				if (subscriber.getInheritConfig() == SubscriberInheritConfig.CUSTOM) {
					return subscriber;	
				}
			}	
		}
		
		GraphNode sectionNode = modelService.getSectionNode(sectionId, true, false, 2);
		
		for (GraphNode parent : sectionNode.getParents()) {
			/* recursively add parent subscribers*/
			Subscriber parentSubscriber = findSubscriberOnSectionsRec(userId, parent.getElementId(), readIds, false);
			
			/* return (and stop searching other parents) if not null only */
			if (parentSubscriber != null) {
				return parentSubscriber;
			}
		}
		
		/* if no parents, return null*/
		return null;
		
	}
	
	private Subscriber findSubscriberOnInitiatives(UUID userId, UUID initiativeId, Boolean skipOne) {
		
		Subscriber subscriber = null; 
		
		if (!skipOne) {
			subscriber = subscriberRepository.findByElementIdAndTypeAndUser_C1Id(initiativeId, SubscriptionElementType.INITIATIVE, userId);
			
			if (subscriber != null) {
				if (subscriber.getInheritConfig() == SubscriberInheritConfig.CUSTOM) {
					return subscriber;	
				}
			}	
		}
		
		List<Initiative> parents = initiativeService.getParentGenealogyInitiatives(initiativeId);
		
		for (Initiative parent : parents) {
			subscriber = subscriberRepository.findByElementIdAndTypeAndUser_C1Id(parent.getId(), SubscriptionElementType.INITIATIVE, userId);
			if (subscriber != null) {
				if (subscriber.getInheritConfig() == SubscriberInheritConfig.CUSTOM) {
					return subscriber;
				}
			}
		}
		
		/* this should not occur, at least one subscriber CUSTOM subscriber should exist */
		return null;
		
	}
	
	private void createNotifications (Activity activity) {
		
		/* this method build the full list of subscribers and add a notification for each of them */
		/* a separate set of user ids is used to make sure only one subscriber entity per user is added 
		 * This logic means that the first subscriber that is found and that is not whose type is not 'inherited'
		 * will be the applicable subscriber */
		
		Map<UUID, Subscriber> subscribersMap = new HashMap<UUID, Subscriber>();
		
		Boolean isInModel = isInModel(activity);
		
		/* if the activity occurs in the model, search for subscribers based on sections */
		if (isInModel) {
			
			for (UUID sectionId : directlyAffectedSectionsIds(activity)) {
				/* append the subscribers of this section and all its parents */
				appendSectionSubscribers(sectionId, subscribersMap);
			}
		}
		
		/* then search for subscribers based on initiatives */
		if (activity.getInitiative() != null) {
			appendInitiativeSubscribers(activity.getInitiative().getId(), subscribersMap);	
		}
		
		/* now check if there are subscribers with INHERIT config, if so, use the personal
		 * config of each user at CollectiveOne global level */
		for (Map.Entry<UUID, Subscriber> entry : subscribersMap.entrySet()) {
			Subscriber thisSubscriber = entry.getValue();
			if (thisSubscriber.getInheritConfig() == SubscriberInheritConfig.INHERIT) {
				Subscriber globalSubscriber = subscriberRepository.findByUser_C1IdAndType(thisSubscriber.getUser().getC1Id(), SubscriptionElementType.COLLECTIVEONE); 
				subscribersMap.put(entry.getKey(), globalSubscriber);
			}
		}
		
		/* now prepare a notification for each subscriber */
		for (Map.Entry<UUID, Subscriber> entry : subscribersMap.entrySet()) {
			createSubscriberNotification(entry.getValue(), activity);
		}
		
	}
	
	private void createSubscriberNotification(Subscriber subscriber, Activity activity) {
		/* only if subscriber has enabled notifications and its different from the trigger user */
		if ((subscriber.getInAppConfig() != SubscriberInAppConfig.DISABLED) && (
				!activity.getTriggerUser().getC1Id().equals(subscriber.getUser().getC1Id()))) {
			
			AppUser user = subscriber.getUser();
			
			Notification notification = new Notification();
			notification = notificationRepository.save(notification);
			
			notification.setCreationDate(new Timestamp(System.currentTimeMillis()));
			notification.setActivity(activity);
			notification.setSubscriber(subscriber);
			
			Boolean isOnline = false;
			
			if (user.getLastSeen() != null) {
				isOnline = user.getLastSeen().getTime() > timeService.fiveMinutesAgo().getTime();	
			}
			
			if (isOnline) {
				/* if the user is online, notification are only shown in app */
				notification.setInAppState(NotificationState.PENDING);
				notification.setPushState(NotificationState.DELIVERED);
				notification.setEmailNowState(NotificationState.DELIVERED);
				notification.setEmailSummaryState(NotificationState.DELIVERED);
				
			} else {
				notification.setInAppState(NotificationState.PENDING);
				notification.setPushState(NotificationState.PENDING);
				notification.setEmailNowState(NotificationState.PENDING);
				notification.setEmailSummaryState(NotificationState.PENDING);
				
				/* mark as delivered in some scenarios */
				Boolean isMentioned = activity.getMentionedUsers().contains(user);
				Boolean isMessage = activity.getType() == ActivityType.MESSAGE_POSTED;
				
				switch (subscriber.getInAppConfig()) {
				
					case DISABLED:
						/* this should never be the case  due to conditional some above */
						notification.setInAppState(NotificationState.DELIVERED);
						break;
					
					case ONLY_MENTIONS:
						if (!isMentioned) {
							notification.setInAppState(NotificationState.DELIVERED);
						}
						break;
						
					case ONLY_MESSAGES:
						if (!isMessage) {
							notification.setInAppState(NotificationState.DELIVERED);
						}
						break;	
						
					case ALL_EVENTS:
						break;
				}
				
				switch (subscriber.getPushConfig()) {
					case DISABLED:
						/* this should never be the case  due to conditional some above */
						notification.setPushState(NotificationState.DELIVERED);
						break;
					
					case ONLY_MENTIONS:
						if (!isMentioned) {
							notification.setPushState(NotificationState.DELIVERED);
						}
						break;
						
					case ONLY_MESSAGES:
						if (!isMessage) {
							notification.setPushState(NotificationState.DELIVERED);
						}
						break;	
						
					case ALL_EVENTS:
						break;
				}
				
				switch (subscriber.getEmailNowConfig()) {
					case DISABLED:
						/* this should never be the case  due to conditional some above */
						notification.setEmailNowState(NotificationState.DELIVERED);
						break;
					
					case ONLY_MENTIONS:
						if (!isMentioned) {
							notification.setEmailNowState(NotificationState.DELIVERED);
						}
						break;
						
					case ONLY_MESSAGES:
						if (!isMessage) {
							notification.setEmailNowState(NotificationState.DELIVERED);
						}
						break;	
						
					case ALL_EVENTS:
						break;
				}
				
				switch (subscriber.getEmailSummaryConfig()) {
					case DISABLED:
						/* this should never be the case  due to conditional some above */
						notification.setEmailSummaryState(NotificationState.DELIVERED);
						break;
					
					case ONLY_MENTIONS:
						if (!isMentioned) {
							notification.setEmailSummaryState(NotificationState.DELIVERED);
						}
						break;
						
					case ONLY_MESSAGES:
						if (!isMessage) {
							notification.setEmailSummaryState(NotificationState.DELIVERED);
						}
						break;	
						
					case ALL_EVENTS:
						break;
				}
				
				/* push notification to user endpoint */
				if (notification.getPushState() == NotificationState.PENDING
						&& env.getProperty("collectiveone.webapp.send-push-enabled").equalsIgnoreCase("true")) {
					
					byte[] payload = {};
					
					ObjectMapper mapper = new ObjectMapper();
					try {
						payload = mapper.writeValueAsString(notificationDtoBuilder.getNotificationDto(notification, false)).getBytes();
					} catch (JsonProcessingException e1) {
						e1.printStackTrace();
					}
					
					if (!isOnline) {
						for (PushSubscription subscription : notification.getSubscriber().getUser().getProfile().getSubscriptions()) {
							nl.martijndwars.webpush.Notification pushNotification;
							try {
								pushNotification = new nl.martijndwars.webpush.Notification(
										subscription.getEndpoint(),
										cryptoService.decrypt(subscription.getP256dh()),
										cryptoService.decrypt(subscription.getAuth()),
										payload);
								
								pushService.sendAsync(pushNotification);
								
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					}
				}
			}
			
			/* send a socket message to update the user notifications list */
			template.convertAndSend("/channel/activity/user/" + user.getC1Id(), "UPDATE");
			
			notification = notificationRepository.save(notification);
			
			activity.getNotifications().add(notification);
			
		}
	}
	
	/* update the input subscribers list */
	private void appendSectionSubscribers(UUID sectionId, Map<UUID, Subscriber> subscribersMap) {
		List<Subscriber> thisSubscribers = subscriberRepository.findByElementId(sectionId);
		
		for (Subscriber subscriber : thisSubscribers) {
			
			if (!subscribersMap.containsKey(subscriber.getUser().getC1Id())) {
				/* if the user has not been added, then just add him */
				subscribersMap.put(subscriber.getUser().getC1Id(), subscriber);
				
			} else {
				/* else, if this subscriber is CUSTOM, get the current subscriber and replace him if INHERIT */
				if (subscriber.getInheritConfig() == SubscriberInheritConfig.CUSTOM) {
					Subscriber existingSubscriber = subscribersMap.get(subscriber.getUser().getC1Id());
					if (existingSubscriber.getInheritConfig() == SubscriberInheritConfig.INHERIT) {
						subscribersMap.put(subscriber.getUser().getC1Id(), subscriber);
					}
				}
			}
		}
		
		/* get section immediate parents */
		GraphNode sectionNode = modelService.getSectionNode(sectionId, true, false, 2);
		
		if (sectionNode.getParents().size() > 0) {
			for (GraphNode parent : sectionNode.getParents()) {
				/* recursively add parent subscribers*/
				appendSectionSubscribers(parent.getElementId(), subscribersMap);
			}	
		} else {
			/* this is a top level subsection associated to an initiative, get that initiative subscribers */
			UUID initiativeId = initiativeRepository.findByTopLevelSectionId(sectionId);
			if (initiativeId != null) {
				List<Subscriber> initSubscribers = subscriberRepository.findByElementId(initiativeId);
				
				for (Subscriber subscriber : initSubscribers) {
					
					if (!subscribersMap.containsKey(subscriber.getUser().getC1Id())) {
						/* if the user has not been added, then just add him */
						subscribersMap.put(subscriber.getUser().getC1Id(), subscriber);
						
					} else {
						/* else, if this subscriber is CUSTOM, get the current subscriber and replace him if INHERIT */
						if (subscriber.getInheritConfig() == SubscriberInheritConfig.CUSTOM) {
							Subscriber existingSubscriber = subscribersMap.get(subscriber.getUser().getC1Id());
							if (existingSubscriber.getInheritConfig() == SubscriberInheritConfig.INHERIT) {
								subscribersMap.put(subscriber.getUser().getC1Id(), subscriber);
							}
						}
					}
				}
			}
		}		
	}
	
	@Transactional
	private void appendInitiativeSubscribers (UUID initiativeId, Map<UUID, Subscriber> subscribersMap) {
		
		/* example https://docs.google.com/drawings/d/1PqPhefzrGVlWVfG-SRGS56l_e2qpNEsajLbnsAWcTfA/edit,
		 * assume initiativeId = C */
		/* start with this initiative subscribers (S3 and S6 in example). Take into account that 
		 * a subscriber state may be SUBSCRIPTION_DISABLED */
		List<Subscriber> thisSubscribers = subscriberRepository.findByElementId(initiativeId);
		
		for (Subscriber subscriber : thisSubscribers) {
			if (!subscribersMap.containsKey(subscriber.getUser().getC1Id())) {
				subscribersMap.put(subscriber.getUser().getC1Id(), subscriber);
			} else {
				/* else, if this subscriber is CUSTOM, get the current subscriber and replace him if INHERIT */
				if (subscriber.getInheritConfig() == SubscriberInheritConfig.CUSTOM) {
					Subscriber existingSubscriber = subscribersMap.get(subscriber.getUser().getC1Id());
					if (existingSubscriber.getInheritConfig() == SubscriberInheritConfig.INHERIT) {
						subscribersMap.put(subscriber.getUser().getC1Id(), subscriber);
					}
				}
			}
		}
		
		/* then add the subscribers of all parent initiatives 2(B and A, in that order) */
		List<Initiative> parents = initiativeService.getParentGenealogyInitiatives(initiativeId);
		for (Initiative parent : parents) {
			List<Subscriber> parentSubscribers = subscriberRepository.findByElementId(parent.getId());
			
			for (Subscriber parentSubscriber : parentSubscribers) {
				
				if (!subscribersMap.containsKey(parentSubscriber.getUser().getC1Id())) {
					subscribersMap.put(parentSubscriber.getUser().getC1Id(), parentSubscriber);
				} else {
					/* else, if this subscriber is CUSTOM, get the current subscriber and replace him if INHERIT */
					if (parentSubscriber.getInheritConfig() == SubscriberInheritConfig.CUSTOM) {
						Subscriber existingSubscriber = subscribersMap.get(parentSubscriber.getUser().getC1Id());
						if (existingSubscriber.getInheritConfig() == SubscriberInheritConfig.INHERIT) {
							subscribersMap.put(parentSubscriber.getUser().getC1Id(), parentSubscriber);
						}
					}
				}
				
			}
		}
	}
	
	public void broadcastMessage (Activity activity) {
		
		/* message is broadcasted to all parent sections (if is in Model) and all parent initiatives */
		
		Boolean isInModel = isInModel(activity);
		
		if (isInModel) {
			
			/* card wrapper derived from card wrapper or card wrapper addition, whatever is not null... */
			UUID cardWrapperId = activity.getModelCardWrapper() != null ? activity.getModelCardWrapper().getId() : null;
			cardWrapperId = (cardWrapperId == null) ? 
					((activity.getModelCardWrapperAddition() != null) ? activity.getModelCardWrapperAddition().getCardWrapper().getId() : null) :
					cardWrapperId;
			
			if (cardWrapperId != null) {
				template.convertAndSend("/channel/activity/model/card/" + cardWrapperId, "UPDATE");
			}
					
			/* sections in which the activity took place. Activity on cards can be in many sections at the same time */
			List<UUID> sectionIds = directlyAffectedSectionsIds(activity);
			
			/* parent sections of these affected sections */
			/* using a Set forces each UUID to be unique */
			Set<UUID> allIncumbentSectionsIds = new HashSet<UUID>();
			
			/* add directly affected sections */
			allIncumbentSectionsIds.addAll(sectionIds);
			
			/* add all parents of all sections */
			for (UUID sectionId : sectionIds) {
				allIncumbentSectionsIds.addAll(modelService.getSectionNode(sectionId, true, false, null).toList());
			}
			
			/* send messages to all of them */
			for (UUID sectionId : allIncumbentSectionsIds) {
				template.convertAndSend("/channel/activity/model/section/" + sectionId, "UPDATE");
			}
			
			/* initiative is not saved in the activity of model sections anymore */
			List<UUID> initiativesIds = initiativeRepository.findByTopLevelSectionIds(allIncumbentSectionsIds);
			
			for (UUID id : initiativesIds) {
	            template.convertAndSend("/channel/activity/model/initiative/" + id, "UPDATE");
	        }
		}
		
		/* send a websocket message to update the section content in the nav tree */
		List<UUID> changesSectionTree = changesSectionTree(activity);
		
		for (UUID sectionId : changesSectionTree) {
			template.convertAndSend("/channel/activity/model/section/" + sectionId, "UPDATE_CONTENTS");
		}
		
		/* all events are broadcasted to their initaitive channel and their parents */
		if (activity.getInitiative() != null) {
			List<Initiative> parentInits = initiativeService.getParentGenealogyInitiatives(activity.getInitiative().getId());
			parentInits.add(activity.getInitiative()); //add parent initiative of activity to broadcast list
	        for (Initiative init : parentInits) {
	            template.convertAndSend("/channel/activity/model/initiative/" + init.getId(), "UPDATE");
	        }
		}		
	}
}
