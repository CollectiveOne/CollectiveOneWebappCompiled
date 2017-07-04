package org.collectiveone.modules.initiatives;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.collectiveone.modules.tokens.AssetsDto;
import org.collectiveone.modules.users.AppUserDto;

public class InitiativeDto {
	
	private String id;
	private String name;
	private String driver;
	private Timestamp creationDate;
	private AppUserDto creator;
		
	private AssetsDto ownTokens;
	private List<AssetsDto> otherAssets = new ArrayList<AssetsDto>();
	private List<InitiativeDto> subInitiatives = new ArrayList<InitiativeDto>();
	private InitiativeMembersDto initiativeMembers;
	private MemberDto loggedMember;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDriver() {
		return driver;
	}
	public void setDriver(String driver) {
		this.driver = driver;
	}
	public Timestamp getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Timestamp creationDate) {
		this.creationDate = creationDate;
	}
	public AppUserDto getCreator() {
		return creator;
	}
	public void setCreator(AppUserDto creator) {
		this.creator = creator;
	}
	public List<InitiativeDto> getSubInitiatives() {
		return subInitiatives;
	}
	public void setSubInitiatives(List<InitiativeDto> subInitiatives) {
		this.subInitiatives = subInitiatives;
	}
	public AssetsDto getOwnTokens() {
		return ownTokens;
	}
	public void setOwnTokens(AssetsDto ownTokens) {
		this.ownTokens = ownTokens;
	}
	public List<AssetsDto> getOtherAssets() {
		return otherAssets;
	}
	public void setOtherAssets(List<AssetsDto> otherAssets) {
		this.otherAssets = otherAssets;
	}
	public InitiativeMembersDto getInitiativeMembers() {
		return initiativeMembers;
	}
	public void setInitiativeMembers(InitiativeMembersDto members) {
		this.initiativeMembers = members;
	}
	public MemberDto getLoggedMember() {
		return loggedMember;
	}
	public void setLoggedMember(MemberDto loggedMember) {
		this.loggedMember = loggedMember;
	}
	
}
