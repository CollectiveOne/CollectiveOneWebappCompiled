package org.collectiveone.modules.activity.repositories;

import java.util.List;
import java.util.UUID;

import org.collectiveone.modules.activity.Activity;
import org.collectiveone.modules.activity.enums.ActivityType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ActivityRepositoryIf extends CrudRepository<Activity, UUID> {
	
	Activity findTop1ByAssignation_IdAndTypeOrderByTimestampDesc(UUID assignationId, ActivityType type);
	
	@Query("SELECT act FROM Activity act WHERE act.modelView.id = ?1 OR act.modelSection.id IN ?2 OR act.modelCardWrapper.id IN ?3 ORDER BY act.timestamp DESC")
	Page<Activity> findOfViewSectionsAndCards(UUID viewId, List<UUID> sectionIds, List<UUID> cardsWrappersIds, Pageable pageable);
	
	@Query("SELECT act FROM Activity act WHERE act.modelView.id = ?1 OR act.modelSection.id IN ?2 ORDER BY act.timestamp DESC")
	Page<Activity> findOfViewAndSections(UUID viewId, List<UUID> sectionIds, Pageable pageable);
	
	@Query("SELECT act FROM Activity act WHERE act.modelView.id = ?1 ORDER BY act.timestamp DESC")
	Page<Activity> findOfView(UUID viewId, Pageable pageable);
	
	@Query("SELECT act FROM Activity act WHERE act.modelSection.id IN ?1 OR act.modelCardWrapper.id IN ?2 ORDER BY act.timestamp DESC")
	Page<Activity> findOfSectionsAndCards(List<UUID> sectionIds, List<UUID> cardsWrappersIds, Pageable pageable);
	
	@Query("SELECT act FROM Activity act WHERE act.modelSection.id IN ?1 ORDER BY act.timestamp DESC")
	Page<Activity> findOfSections(List<UUID> sectionIds, Pageable pageable);
	
	@Query("SELECT act FROM Activity act WHERE act.modelCardWrapper.id = ?1 ORDER BY act.timestamp DESC")
	Page<Activity> findOfCard(UUID cardsWrappersId, Pageable pageable);
	
	@Query("SELECT act FROM Activity act WHERE act.initiative.id IN ?1 ORDER BY act.timestamp DESC")
	Page<Activity> findOfInitiatives(List<UUID> initiativesId, Pageable pageable);
	
}
