package org.collectiveone.modules.activity;

import java.util.List;
import java.util.UUID;

import org.collectiveone.common.dto.GetResult;
import org.collectiveone.common.dto.PostResult;
import org.collectiveone.modules.users.AppUser;
import org.collectiveone.modules.users.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/1")
public class ActivityController {
	
	@Autowired
	private AppUserService appUserService;
	
	@Autowired
	private ActivityService activityService;
	
	
	@RequestMapping(path = "/secured/user/notifications", method = RequestMethod.GET)
	public GetResult<List<NotificationDto>> getNotifications() {
		return activityService.getUserNotifications(getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/user/notifications/read", method = RequestMethod.PUT)
	public PostResult notificationsRead() {
		return activityService.notificationsRead(getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/user/notifications/subscriber/{initiativeId}", method = RequestMethod.GET)
	public GetResult<SubscriberDto> getSubscriber(@PathVariable("initiativeId") String initiativeId) {
		return activityService.getSubscriber(getLoggedUser().getC1Id(), UUID.fromString(initiativeId));
	}
	
	@RequestMapping(path = "/secured/user/notifications/subscriber/{initiativeId}", method = RequestMethod.PUT)
	public PostResult editSubscriber(@PathVariable("initiativeId") String initiativeId, @RequestBody SubscriberDto subscriber) {
		activityService.editSubscriberState(getLoggedUser().getC1Id(), UUID.fromString(initiativeId), SubscriberState.valueOf(subscriber.getState()));
		activityService.editSubscriberEmailNotificationsState(getLoggedUser().getC1Id(), UUID.fromString(initiativeId), SubscriberEmailNotificationsState.valueOf(subscriber.getEmailNotificationsState()));
		
		return new PostResult("success", "success", "");
	}
	
	@RequestMapping(path = "/secured/notifications/unsubscribeFromInitiative/{initiativeId}", method = RequestMethod.PUT)
	public PostResult unsuscribeFromInitiative(@PathVariable("initiativeId") String initiativeId) {
		return activityService.editSubscriberState(getLoggedUser().getC1Id(), UUID.fromString(initiativeId), SubscriberState.UNSUBSCRIBED);
	}
	
	@RequestMapping(path = "/secured/notifications/unsubscribeFromAll", method = RequestMethod.PUT)
	public PostResult unsuscribeFromInitiative() {
		return appUserService.disableEmailNotifications(getLoggedUser().getC1Id());
	}
	
	private AppUser getLoggedUser() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		return appUserService.getFromAuth0Id(auth.getName());
	}
	
}