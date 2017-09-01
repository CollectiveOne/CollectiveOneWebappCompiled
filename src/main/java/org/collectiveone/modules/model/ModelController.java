package org.collectiveone.modules.model;

import java.util.UUID;

import org.collectiveone.common.dto.GetResult;
import org.collectiveone.common.dto.PostResult;
import org.collectiveone.modules.governance.DecisionVerdict;
import org.collectiveone.modules.governance.GovernanceService;
import org.collectiveone.modules.model.dto.ModelCardDto;
import org.collectiveone.modules.model.dto.ModelCardWrapperDto;
import org.collectiveone.modules.model.dto.ModelDto;
import org.collectiveone.modules.model.dto.ModelSectionDto;
import org.collectiveone.modules.model.dto.ModelViewDto;
import org.collectiveone.modules.users.AppUser;
import org.collectiveone.modules.users.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/1")
public class ModelController { 
	
	@Autowired
	private AppUserService appUserService;
	
	@Autowired
	private ModelService modelService;

	@Autowired
	private GovernanceService governanceService;
	
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model", method = RequestMethod.GET) 
	public GetResult<ModelDto> getModel(
			@PathVariable("initiativeId") String initiativeIdStr,
			@RequestParam(defaultValue = "1") Integer level) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		return modelService.getModel(initiativeId, level, getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/view", method = RequestMethod.POST) 
	public PostResult createView(
			@PathVariable("initiativeId") String initiativeIdStr,
			@RequestBody ModelViewDto viewDto) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.createView(initiativeId, viewDto, getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/view/{viewId}", method = RequestMethod.GET) 
	public GetResult<ModelViewDto> getView(
			@PathVariable("initiativeId") String initiativeIdStr,
			@PathVariable("viewId") String viewIdStr, 
			@RequestParam(defaultValue = "1") Integer level) {
		
		return modelService.getView(UUID.fromString(viewIdStr), getLoggedUser().getC1Id(), level);
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/view", method = RequestMethod.PUT) 
	public PostResult editView(
			@PathVariable("initiativeId") String initiativeIdStr,
			@RequestBody ModelViewDto viewDto) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.editView(initiativeId, viewDto, getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/view/{viewId}", method = RequestMethod.DELETE) 
	public PostResult deleteView(
			@PathVariable("initiativeId") String initiativeIdStr,
			@PathVariable("viewId") String viewIdStr) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.deleteView(UUID.fromString(viewIdStr), getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/section", method = RequestMethod.POST)
	public PostResult createSection(
			@PathVariable("initiativeId") String initiativeIdStr,
			@RequestBody ModelSectionDto sectionDto) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.createSection(sectionDto, getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/section", method = RequestMethod.PUT) 
	public PostResult editSection(
			@PathVariable("initiativeId") String initiativeIdStr,
			@RequestBody ModelSectionDto sectionDto) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.editSection(initiativeId, sectionDto, getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/section/{sectionId}", method = RequestMethod.GET) 
	public GetResult<ModelSectionDto> getSection(
			@PathVariable("initiativeId") String initiativeIdStr,
			@PathVariable("sectionId") String sectionIdStr,
			@RequestParam(defaultValue = "1") Integer level) {
		
		return modelService.getSection(UUID.fromString(sectionIdStr), getLoggedUser().getC1Id(), level);
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/section/{sectionId}", method = RequestMethod.DELETE) 
	public PostResult deleteSection(
			@PathVariable("initiativeId") String initiativeIdStr,
			@PathVariable("sectionId") String sectionIdStr) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.deleteSection(UUID.fromString(sectionIdStr), getLoggedUser().getC1Id());
	}
	
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/cardWrapper", method = RequestMethod.POST)
	public PostResult createCardWrapper(
			@PathVariable("initiativeId") String initiativeIdStr,
			@RequestBody ModelCardDto cardDto) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateCard(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.createCardWrapper(cardDto, getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/cardWrapper/{cardWrapperId}", method = RequestMethod.GET) 
	public GetResult<ModelCardWrapperDto> getCardWrapper(
			@PathVariable("initiativeId") String initiativeIdStr,
			@PathVariable("cardWrapperId") String cardWrapperIdStr) {
		
		return modelService.getCardWrapper(UUID.fromString(cardWrapperIdStr), getLoggedUser().getC1Id());
	}
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/cardWrapper/{cardWrapperId}", method = RequestMethod.PUT) 
	public PostResult editCardWrapper(
			@PathVariable("initiativeId") String initiativeIdStr,
			@PathVariable("cardWrapperId") String cardIdWrapperStr,
			@RequestBody ModelCardDto cardDto) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.editCardWrapper(initiativeId, UUID.fromString(cardIdWrapperStr), cardDto, getLoggedUser().getC1Id());
	}
	
	
	@RequestMapping(path = "/secured/initiative/{initiativeId}/model/cardWrapper/{cardWrapperId}", method = RequestMethod.DELETE) 
	public PostResult deleteCardWrapper(
			@PathVariable("initiativeId") String initiativeIdStr,
			@PathVariable("cardWrapperId") String cardIdWrapperStr) {
		
		UUID initiativeId = UUID.fromString(initiativeIdStr);
		
		if (governanceService.canCreateView(initiativeId, getLoggedUser().getC1Id()) == DecisionVerdict.DENIED) {
			return new PostResult("error", "not authorized", "");
		}
		
		return modelService.deleteCardWrapper(UUID.fromString(cardIdWrapperStr), getLoggedUser().getC1Id());
	}
	
	private AppUser getLoggedUser() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		return appUserService.getFromAuth0Id(auth.getName());
	}
}
