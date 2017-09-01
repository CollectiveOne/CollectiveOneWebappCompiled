package org.collectiveone.modules.model.dto;

import java.util.ArrayList;
import java.util.List;

import org.collectiveone.modules.initiatives.Initiative;
import org.collectiveone.modules.model.ModelView;

public class ModelViewDto {

	private String id;
	private String initiativeId;
	private String title;
	private String description;
	private List<ModelSectionDto> sections = new ArrayList<ModelSectionDto>();
	private Boolean sectionsLoaded;
	private Integer nSections;
	
	public ModelView toEntity(ModelView view, ModelViewDto viewDto, Initiative initiative) {
		
		if (view == null) view = new ModelView();
		
		view.setInitiative(initiative);
		view.setTitle(viewDto.getTitle());
		view.setDescription(viewDto.getDescription());
		
		return view;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getInitiativeId() {
		return initiativeId;
	}
	public void setInitiativeId(String initiativeId) {
		this.initiativeId = initiativeId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<ModelSectionDto> getSections() {
		return sections;
	}
	public void setSections(List<ModelSectionDto> sections) {
		this.sections = sections;
	}
	public Boolean getSectionsLoaded() {
		return sectionsLoaded;
	}
	public void setSectionsLoaded(Boolean sectionsLoaded) {
		this.sectionsLoaded = sectionsLoaded;
	}
	public Integer getnSections() {
		return nSections;
	}
	public void setnSections(Integer nSections) {
		this.nSections = nSections;
	}
	
}
