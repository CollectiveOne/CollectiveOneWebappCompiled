package org.collectiveone.modules.users;

import java.util.UUID;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface AppUserProfileRepositoryIf extends CrudRepository<AppUserProfile, UUID> {
	AppUserProfile findByUser_C1Id(UUID c1Id);
	
	AppUserProfile findByUsername(String username);
	
	@Query("SELECT subs.endpoint FROM AppUserProfile profile "
			+ "JOIN profile.subscriptions subs "
			+ "WHERE profile.user.c1Id = :userId "
			+ "AND subs.endpoint = :endpoint")
	String getEndpoint(
			@Param("userId") UUID userId,
			@Param("endpoint") String endpoint);
	
	default Boolean endpointExists(UUID userId, String endpoint) {
		String endpointCheck = getEndpoint(userId, endpoint);
		return endpointCheck != null;
	} 
}
