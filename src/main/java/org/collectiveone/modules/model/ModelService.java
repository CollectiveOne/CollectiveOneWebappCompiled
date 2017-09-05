package org.collectiveone.modules.model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;

import org.collectiveone.common.dto.GetResult;
import org.collectiveone.common.dto.PostResult;
import org.collectiveone.modules.initiatives.Initiative;
import org.collectiveone.modules.initiatives.InitiativeRepositoryIf;
import org.collectiveone.modules.model.dto.ModelCardDto;
import org.collectiveone.modules.model.dto.ModelCardWrapperDto;
import org.collectiveone.modules.model.dto.ModelDto;
import org.collectiveone.modules.model.dto.ModelSectionDto;
import org.collectiveone.modules.model.dto.ModelViewDto;
import org.collectiveone.modules.model.repositories.ModelCardRepositoryIf;
import org.collectiveone.modules.model.repositories.ModelCardWrapperRepositoryIf;
import org.collectiveone.modules.model.repositories.ModelSectionRepositoryIf;
import org.collectiveone.modules.model.repositories.ModelViewRepositoryIf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelService {
	
	@Autowired
	private InitiativeRepositoryIf initiativeRepository;
	
	@Autowired
	private ModelViewRepositoryIf modelViewRepository;
	
	@Autowired
	private ModelSectionRepositoryIf modelSectionRepository;
	
	@Autowired
	private ModelCardWrapperRepositoryIf modelCardWrapperRepository;
	
	@Autowired
	private ModelCardRepositoryIf modelCardRepository;
	
	
	@Transactional
	public GetResult<ModelDto> getModel(UUID initiativeId, Integer level, UUID requestById) {
		Initiative initiative = initiativeRepository.findById(initiativeId);
		if (initiative == null) return new GetResult<ModelDto>("error", "initiative not found", null);
		
		List<ModelViewDto> viewsDto = new ArrayList<ModelViewDto>();
		
		List<ModelView> views = initiative.getModelViews(); 
		for (ModelView view : views) {
			viewsDto.add(view.toDto(level)); 
		}
		
		ModelDto modelDto = new ModelDto();
		modelDto.setViews(viewsDto);
		
		return new GetResult<ModelDto> ("success", "model found", modelDto);
	}
	
	@Transactional
	public PostResult createView (UUID initiativeId, ModelViewDto viewDto, UUID creatorId) {
		
		Initiative initiative = initiativeRepository.findById(initiativeId);
		if (initiative == null) return new PostResult("error", "initiative not found", "");
		
		ModelView view = viewDto.toEntity(null, viewDto, initiative);
		view = modelViewRepository.save(view);
		
		return new PostResult("success", "view created", view.getId().toString());
	}
	
	@Transactional
	public PostResult editView (UUID initiativeId, ModelViewDto viewDto, UUID creatorId) {
		
		Initiative initiative = initiativeRepository.findById(initiativeId);
		if (initiative == null) return new PostResult("error", "initiative not found", "");
		
		ModelView view = modelViewRepository.findById(UUID.fromString(viewDto.getId()));
		
		view = viewDto.toEntity(view, viewDto, initiative);
		view = modelViewRepository.save(view);
		
		return new PostResult("success", "view edited", view.getId().toString());
	}
	
	@Transactional
	public GetResult<ModelViewDto> getView (UUID viewId, UUID requestById, Integer level) {
		return new GetResult<ModelViewDto>("success", "view retrieved", modelViewRepository.findById(viewId).toDto(level));
	}
	
	
	@Transactional
	public PostResult deleteView (UUID viewId, UUID creatorId) {
		
		ModelView view = modelViewRepository.findById(viewId);
		modelViewRepository.delete(view);
		
		return new PostResult("success", "view deleted", "");
	}
	
	@Transactional
	public PostResult createSection(ModelSectionDto sectionDto, UUID creatorId) {
		
		ModelSection section = sectionDto.toEntity(null, sectionDto);
		section = modelSectionRepository.save(section);
		
		if(sectionDto.getIsSubsection()) {
			ModelSection parent = modelSectionRepository.findById(UUID.fromString(sectionDto.getParentSectionId()));
			if (parent == null) return new PostResult("error", "parent section not found", "");
			
			parent.getSubsections().add(section);
			modelSectionRepository.save(parent);
			
		} else {
			ModelView view = modelViewRepository.findById(UUID.fromString(sectionDto.getViewId()));
			if (view == null) return new PostResult("error", "view not found", "");
			
			view.getSections().add(section);
			modelViewRepository.save(view);
		}
		
		
		return new PostResult("success", "section created", section.getId().toString());
	}
	
	@Transactional
	public PostResult editSection (UUID sectionId, ModelSectionDto sectionDto, UUID creatorId) {
		
		ModelSection section = modelSectionRepository.findById(sectionId);
		
		section = sectionDto.toEntity(section, sectionDto);
		section = modelSectionRepository.save(section);
		
		return new PostResult("success", "section edited", section.getId().toString());
	}
	
	@Transactional
	public GetResult<ModelSectionDto> getSection(UUID sectionId, UUID requestById, Integer level) {
		ModelSectionDto sectionDto = modelSectionRepository.findById(sectionId).toDto(level);
		
		/* set parent section data */
		List<ModelSection> parents = modelSectionRepository.findParentSections(sectionId);
		
		if (parents.size() > 0) {
			sectionDto.setIsSubsection(true);
			sectionDto.setParentSectionId(parents.get(0).getId().toString());
			sectionDto.setParentSectionTitle(parents.get(0).getTitle());
		}
		
		return new GetResult<ModelSectionDto>("success", "section retrieved", sectionDto);
	}
	
	@Transactional
	public PostResult deleteSection (UUID sectionId, UUID creatorId) {
		
		ModelSection section = modelSectionRepository.findById(sectionId);
		
		/* remove references to views */
		List<ModelView> views = modelSectionRepository.findParentViews(sectionId);
		if (views.size() > 0) {
			for (ModelView view : views) {
				view.getSections().remove(section);
			}
		}
		
		/* remove references to parent sections */
		List<ModelSection> parents = modelSectionRepository.findParentSections(sectionId);
		if (parents.size() > 0) {
			for (ModelSection parent : parents) {
				parent.getSubsections().remove(section);
			}
		}
		
		modelSectionRepository.delete(section);
		
		return new PostResult("success", "section deleted", "");
	}
	
	@Transactional
	public PostResult createCardWrapper(ModelCardDto cardDto, UUID creatorId) {
		
		ModelSection section = modelSectionRepository.findById(UUID.fromString(cardDto.getSectionId()));
		if (section == null) return new PostResult("error", "view not found", "");
		
		ModelCard card = cardDto.toEntity(null, cardDto);
		card = modelCardRepository.save(card);
		
		ModelCardWrapper cardWrapper = new ModelCardWrapper();
		cardWrapper.setCard(card);
		cardWrapper.setOtherProperties(cardDto);
		
		cardWrapper = modelCardWrapperRepository.save(cardWrapper);
		
		section.getCardsWrappers().add(cardWrapper);
		modelSectionRepository.save(section);
		
		return new PostResult("success", "card created", card.getId().toString());
	}
	
	@Transactional
	public PostResult editCardWrapper(UUID initiativeId, UUID cardWrapperId, ModelCardDto cardDto, UUID creatorId) {
		
		Initiative initiative = initiativeRepository.findById(initiativeId);
		if (initiative == null) return new PostResult("error", "initiative not found", "");
		
		ModelCardWrapper cardWrapper = modelCardWrapperRepository.findById(cardWrapperId);
		if (cardWrapper == null) return new PostResult("error", "card wrapper not found", "");
		
		cardWrapper.getOldVersions().add(cardWrapper.getCard());
		
		ModelCard card = cardDto.toEntity(null, cardDto);
		card = modelCardRepository.save(card);
		
		cardWrapper.setCard(card);
		cardWrapper.setOtherProperties(cardDto);
		
		return new PostResult("success", "section edited", cardWrapper.getId().toString());
	}
	
	@Transactional
	public GetResult<ModelCardWrapperDto> getCardWrapper(UUID cardWrapperId, UUID requestById) {
		return new GetResult<ModelCardWrapperDto>("success", "card retrieved", modelCardWrapperRepository.findById(cardWrapperId).toDto());
	}
	
	@Transactional
	public PostResult deleteCardWrapper (UUID cardWrapperId, UUID creatorId) {
		
		List<ModelSection> parents = modelCardWrapperRepository.findParentSections(cardWrapperId);
		ModelCardWrapper card = modelCardWrapperRepository.findById(cardWrapperId);
		
		/* remove references */
		if (parents.size() > 0) {
			for (ModelSection parent : parents) {
				parent.getCardsWrappers().remove(card);
				modelSectionRepository.save(parent);
			}
		}
		
		modelCardWrapperRepository.delete(card);
		
		return new PostResult("success", "section deleted", "");
	}
	
	
}
