(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34bcb61e"],{1730:function(t,e,i){"use strict";var n=i("9220"),o=i.n(n);o.a},"1a0f":function(t,e,i){t.exports=i.p+"img/move-icon.9b0de57f.svg"},"1a58":function(t,e,i){"use strict";var n=i("ab81"),o=i.n(n);o.a},2408:function(t,e,i){t.exports=i.p+"img/shared-icon.d5d5abf1.svg"},"278f":function(t,e,i){},"3e72":function(t,e,i){"use strict";var n=i("278f"),o=i.n(n);o.a},"41fa":function(t,e,i){"use strict";var n=i("6de2"),o=i.n(n);o.a},"4be1":function(t,e,i){t.exports=i.p+"img/private-icon.22d22dcb.svg"},"63dd":function(t,e,i){},"6de2":function(t,e,i){},9220:function(t,e,i){},"9a5a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-row section-content-tab"},[i("div",{staticClass:"section-nav-container",on:{touchstart:function(e){t.touchStart(e)},touchend:function(e){t.touchEnd(e)}}},[i("transition",{attrs:{name:"slideRightLeft"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.expandModelNav,expression:"expandModelNav"}],staticClass:"vision-nav-cell light-grey drop-shadow-br w3-border-top"},[i("app-model-nav",{on:{"section-selected":function(e){t.sectionSelected()}}})],1)])],1),i("div",{staticClass:"hide-nav-div-container"},[i("div",{staticClass:"hide-nav-div drop-shadow-br",on:{click:function(e){t.expandModelNavClicked()}}},[t.expandModelNav?i("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}):i("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])]),i("div",{staticClass:"vision-content"},[i("router-view"),i("div",{staticClass:"touch-area",on:{touchstart:function(e){t.touchStart(e)},touchend:function(e){t.touchEnd(e)}}})],1)])},o=[],s=(i("a481"),i("7f7f"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"model-nav-container-large"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showSectionModal?i("app-model-section-modal",{attrs:{isNew:!0,initiativeId:t.initiative.id,inInitiative:!0,inElementId:t.initiative.id,inElementTitle:t.initiative.meta.name},on:{close:function(e){t.showSectionModal=!1}}}):t._e()],1),i("div",{staticClass:"model-nav-container"},[t.$store.state.user.authenticated?i("div",{staticClass:"w3-row w3-right dark-gray controls-row cursor-pointer",on:{click:function(e){t.showControls=!t.showControls}}},[i("i",{staticClass:"fa",class:{"fa-chevron-down":!t.showControls,"fa-chevron-up":t.showControls},attrs:{"aria-hidden":"true"}})]):t._e(),i("div",{staticClass:"slider-container w3-left control-btns-slider"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showControls?i("div",{staticClass:"controls-btns w3-row"},[i("app-model-nav-control-buttons")],1):t._e()])],1),i("div",{staticClass:"w3-row"},[i("app-model-section-nav-item",{attrs:{sectionData:t.sectionData},on:{"section-selected":function(e){t.$emit("section-selected",e)}}})],1)])],1)}),a=[],c=i("cfb6"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-row section-nav-item-container"},[n("div",{staticClass:"w3-row section-nav-item-first-row",class:t.rowClass,attrs:{draggable:t.$store.state.support.triggerSectionDraggingState},on:{dragstart:function(e){t.dragStart(e)},dragover:function(e){e.preventDefault(),t.draggingOver(e)},dragleave:function(e){e.preventDefault(),t.draggingLeave()},drop:function(e){e.preventDefault(),t.dragDroped(e)}}},[t.draggingOverWithSectionSameLevelFlag?n("div",{staticClass:"dragging-same-level-clue"}):t._e(),n("div",{staticClass:"arrow-and-title",class:t.arrowAndTitleClass},[n("div",{staticClass:"circle-div cursor-pointer",on:{click:function(e){t.toggleSubsections()}}},[t.hasSubsections?n("div",[t.showSubsections?n("i",{staticClass:"fa fa-chevron-circle-down",attrs:{"aria-hidden":"true"}}):n("i",{staticClass:"fa fa-chevron-circle-right",attrs:{"aria-hidden":"true"}})]):n("div",[n("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"},on:{click:function(e){t.sectionSelected()}}})])]),n("div",{staticClass:"title-div cursor-pointer noselect",class:t.titleClass,on:{click:function(e){t.sectionSelected()},dblclick:function(e){t.toggleSubsections()},mouseover:function(e){t.hoveringOnTitle=!0},mouseenter:function(e){t.hoveringOnTitle=!0},mouseleave:function(e){t.hoveringOnTitle=!1}}},[t._v("\n        "+t._s(t.sectionTitle)+"\n      ")])]),t.isSelected&&t.isCardsView?n("div",{staticClass:"zoom-controls"},[n("div",{staticClass:"w3-left cursor-pointer arrow-div",on:{click:function(e){t.levelDown()}}},[n("img",{attrs:{src:i("ee1d"),alt:""}})]),n("div",{staticClass:"w3-left cursor-pointer arrow-div",on:{click:function(e){t.levelUp()}}},[n("img",{attrs:{src:i("e35d"),alt:""}})]),n("div",{staticClass:"levels-div-container"},[n("transition",{attrs:{name:"slideDownUp"}},[t.showLevel?n("div",{staticClass:"levels-div noselect"},[t._v("\n            "+t._s(t.levels)+"\n          ")]):t._e()])],1)]):t._e(),t.$store.state.user.authenticated&&t.section?n("div",{staticClass:"notification-div"},[n("app-notifications-list",{key:t.section.id,attrs:{element:t.section,forceUpdate:t.forceUpdateNotifications,isSelected:t.isSelected,parentIsSelected:t.parentIsSelected}})],1):t._e(),t.$store.state.user.authenticated&&!t.draggingEnabled?n("div",{staticClass:"control-div",class:{"fa-button":!t.parentIsSelected,"fa-button-dark":t.parentIsSelected||t.highlight}},[n("app-section-control-buttons",{attrs:{section:t.section,inSection:t.inSection,draggable:t.$store.state.support.triggerSectionDraggingState,showDetach:t.alsoInSections.length>0},on:{"section-removed":function(e){t.sectionRemoved()},"section-detached":function(e){t.sectionDetached(e)},addCard:t.addCard}})],1):t._e(),t.draggingEnabled?n("div",{staticClass:"drag-message-div"},[t._m(0)]):t._e()]),n("div",{class:{"slider-container":t.animating}},[n("transition",{attrs:{name:"slideDownUp"},on:{"before-enter":function(e){t.animating=!0},"after-enter":function(e){t.animating=!1},"before-leave":function(e){t.animating=!0},"after-leave":function(e){t.animating=!1}}},[t.showSubsections&&t.subsectionsDataFiltered.length>0?n("div",{staticClass:"w3-row subsections-container",class:{"subsection-container-selected":t.highlight}},t._l(t.subsectionsDataFiltered,function(e,i){return n("app-model-section-nav-item",{key:e.section.id,staticClass:"subsection-row",attrs:{inSection:t.section,sectionData:e,highlightLevel:t.highlightLevelUse-1,parentIsSelected:t.isSelected||t.parentIsSelected},on:{"section-selected":function(e){t.$emit("section-selected",e)}}})})):t._e()])],1)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("i",{staticClass:"fa fa-arrows",attrs:{"aria-hidden":"true"}})])}],d=(i("c5f6"),i("cadf"),i("551c"),i("097d"),i("f868")),u=i("d364"),h={name:"app-model-section-nav-item",components:{"app-section-control-buttons":u["a"],"app-model-section-modal":c["a"],"app-notifications-list":d["a"]},props:{sectionData:{type:Object,default:null},inSection:{type:Object,default:null},highlightLevel:{type:Number,default:0},parentIsSelected:{type:Boolean,default:!1}},data:function(){return{showSubsections:!1,subsectionsDataFiltered:[],animating:!1,draggingOverWithCardFlag:!1,draggingOverWithSectionSameLevelFlag:!1,draggingOverWithSectionInsideFlag:!1,resetIntervalId:0,forceUpdateNotifications:!1,subscription:null,hoveringOnTitle:!1,showLevel:!1}},watch:{"$store.state.sectionsTree.triggerUpdateExpands":function(){this.checkExpandSubsections(),this.updateSubsectionsDataFiltered()},levels:function(){this.checkExpandSubsections()},section:function(){this.subscribeSocket()},sectionData:function(){this.updateSubsectionsDataFiltered(),null==this.inSection&&null!=this.sectionData&&(console.log("autoepanding first level subsections"),this.expandSubsections())}},computed:{section:function(){return this.sectionData?this.sectionData.section:null},showPrivate:function(){return this.$store.state.viewParameters.showPrivateSections},showShared:function(){return this.$store.state.viewParameters.showSharedSections},showCommon:function(){return this.$store.state.viewParameters.showCommonSections},highlight:function(){return this.highlightLevelUse>0},rowClass:function(){var t={"section-selected":this.highlight,"dragging-over-with-card":this.draggingOverWithCardFlag,"dragging-over-with-section-same-level":this.draggingOverWithSectionSameLevelFlag,"dragging-over-with-section-inside":this.draggingOverWithSectionInsideFlag};if(this.section)switch(this.section.scope){case"PRIVATE":t["border-red"]=!0;break;case"SHARED":t["border-yellow"]=!0;break;default:t["border-blue"]=!0;break}return t},arrowAndTitleClass:function(){var t={};return this.highlight?t["title-selected"]=!0:this.parentIsSelected&&(t["title-inside-section-selected"]=!0),t},titleClass:function(){return{"title-hover":this.hoveringOnTitle&&!this.highlight}},sectionTitle:function(){return this.section?this.section.title:""},hasSubsections:function(){return this.subsectionsDataFiltered.length>0},alsoInSections:function(){var t=this;return this.section?this.section.inSections.filter(function(e){return t.inSection?t.inSection.id!==e.id:[]}):[]},isSelected:function(){return!!this.section&&this.$route.params.sectionId===this.section.id},levels:function(){return this.$store.getters.getActualLevels},infiniteLevels:function(){return 999===this.levels},highlightLevelUse:function(){return this.isSelected?this.levels:this.highlightLevel},draggingEnabled:function(){return this.$store.state.support.triggerSectionDraggingState},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!0,boundariesElement:"viewport"}}}},isCardsView:function(){return"ModelSectionCards"===this.$route.name}},methods:{addCard:function(){this.isSelected||this.$router.push({name:"ModelSectionCards",params:{sectionId:this.section.id},query:{createCard:this.section.id}})},updateSubsectionsDataFiltered:function(){var t=this;if(this.sectionData){var e=this.sectionData.subsectionsData.filter(function(e){switch(e.section.scope){case"PRIVATE":return t.showPrivate;case"SHARED":return t.showShared;case"COMMON":return t.showCommon}return!0});this.subsectionsDataFiltered=e}else this.subsectionsDataFiltered=[]},toggleSubsections:function(){this.showSubsections?this.collapseSubsections():this.expandSubsections()},expandSubsections:function(){this.showSubsections=!0,this.$store.dispatch("expandSubsection",this.sectionData.coordinate)},collapseSubsections:function(){this.showSubsections=!1,this.$store.dispatch("collapseSubsection",this.sectionData.coordinate)},checkExpandSubsections:function(){this.highlightLevelUse>1?this.infiniteLevels||(console.log("expanding subsections of "+this.section.title+" id: "+this.section.id+" due to levels"),this.expandSubsections()):this.sectionData&&this.sectionData.expand&&!this.showSubsections&&(console.log("expanding subsections of "+this.section.title+" id: "+this.section.id+" due to expand flag"),this.expandSubsections())},sectionSelected:function(){this.$emit("section-selected",this.section),this.section&&this.$router.push({name:"ModelSectionContent",params:{sectionId:this.section.id}})},levelDown:function(){var t=this;this.showLevel=!0,setTimeout(function(){t.showLevel=!1},1e3),this.$store.commit("levelDown")},levelUp:function(){var t=this;this.showLevel=!0,setTimeout(function(){t.showLevel=!1},1e3),this.$store.commit("levelUp")},updateInTree:function(){this.section&&this.$store.dispatch("updateSectionDataInTree",{sectionId:this.section.id})},updateParentInTree:function(){this.inSection&&this.$store.dispatch("updateSectionDataInTree",{sectionId:this.inSection.id})},sectionRemoved:function(){this.isSelected&&this.$router.push({name:"ModelSectionContent",params:{sectionId:this.inSection.id}}),this.updateParentInTree()},sectionDetached:function(t){this.$router.push({name:"ModelSectionContent",params:{sectionId:t}}),this.updateParentInTree()},subscribeSocket:function(){var t=this;null===this.subscription&&(this.subscription=this.$store.dispatch("subscribe",{url:"/channel/activity/model/section/"+this.section.id,onMessage:function(e){var i=e.body;"UPDATE_CONTENTS"===i&&t.updateInTree()}}))},dragStart:function(t){var e={type:"MOVE_SECTION",scope:this.section.scope,sectionId:this.section.id,fromSectionId:this.inSection.id};t.dataTransfer.setData("text/plain",JSON.stringify(e));var i={type:"MOVE_SECTION",scope:this.section.scope,section:this.section,fromSection:this.inSection};this.$store.commit("setDraggingElement",i)},draggingOver:function(t){var e=this.$store.state.support.draggingElement;if(null!==e&&("MOVE_CARD"===e.type&&(this.draggingOverWithCardFlag=!0),"MOVE_SECTION"===e.type)){var i=(t.clientX-t.currentTarget.offsetLeft)/t.currentTarget.offsetWidth;i<.5?(this.draggingOverWithSectionInsideFlag=!1,this.draggingOverWithSectionSameLevelFlag=!0):(this.draggingOverWithSectionSameLevelFlag=!1,this.draggingOverWithSectionInsideFlag=!0)}},draggingLeave:function(){var t=this;clearTimeout(this.resetIntervalId),this.resetIntervalId=setTimeout(function(){t.draggingOverWithCardFlag=!1,t.draggingOverWithSectionSameLevelFlag=!1,t.draggingOverWithSectionInsideFlag=!1},100)},dragDroped:function(t){var e=this;this.draggingOverWithCardFlag=!1,this.draggingOverWithSectionSameLevelFlag=!1,this.draggingOverWithSectionInsideFlag=!1;var i=JSON.parse(t.dataTransfer.getData("text/plain")),n=!1;if("MOVE_CARD"===i.type&&(n=!t.ctrlKey&&""!==i.fromSectionId,n?this.axios.put("/1/model/section/"+i.fromSectionId+"/moveCard/"+i.cardWrapperId,{},{params:{onSectionId:this.section.id,scope:i.scope}}).then(function(t){e.$store.commit("triggerUpdateSectionCards")}):this.axios.put("/1/model/section/"+this.section.id+"/cardWrapper/"+i.cardWrapperId,{},{params:{scope:i.scope}}).then(function(t){e.$store.commit("triggerUpdateSectionCards")})),"MOVE_SECTION"===i.type){n=!t.ctrlKey&&""!==i.fromSectionId;var o=!1,s=(t.clientX-t.currentTarget.offsetLeft)/t.currentTarget.offsetWidth;s>.5&&(o=!0);var a="",c="";o?(a=this.section.id,c=""):(a=this.inSection.id,c=this.section.id),n?this.axios.put("/1/model/section/"+i.fromSectionId+"/moveSubsection/"+i.sectionId,{},{params:{toSectionId:a,onSectionId:c,isBefore:!1}}).then(function(t){e.$store.dispatch("updateSectionDataInTree",{sectionId:i.fromSectionId}),e.$store.dispatch("updateSectionDataInTree",{sectionId:a})}):this.axios.put("/1/model/section/"+a+"/subsection/"+i.sectionId,{},{params:{scope:i.scope,onSubsectionId:c,isBefore:!1}}).then(function(t){e.$store.dispatch("updateSectionDataInTree",{sectionId:a}),e.$store.dispatch("updateSectionDataInTree",{sectionId:i.fromSectionId})})}this.$store.commit("setDraggingElement",null)}},created:function(){this.section&&this.subscribeSocket()},mounted:function(){this.checkExpandSubsections(),this.updateSubsectionsDataFiltered()},beforeDestroy:function(){this.subscription&&this.$store.dispatch("unsubscribe",this.subscription)}},p=h,g=(i("b6b35"),i("2877")),f=Object(g["a"])(p,r,l,!1,null,"b128c374",null);f.options.__file="ModelSectionNavItem.vue";var v=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-row nav-controls-row small-scroll"},[this.$store.state.user.authenticated?n("div",{staticClass:"control-group"},[n("div",{},[n("popper",{key:t.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:t.$store.state.support.isTouchScreen?"long-press":"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[n("app-help-popper",{attrs:{title:(t.showPrivate?t.$t("general.HIDE"):t.$t("general.SHOW"))+" "+t.$t("help.PRIVATE-SECTIONS-TT"),details:t.$t("help.PRIVATE-SECTIONS-DET")}}),n("div",{staticClass:"w3-left control-btn border-red",class:{"control-btn-selected":t.showPrivate,"w3-bottombar":t.showPrivate},attrs:{slot:"reference"},on:{click:function(e){t.showPrivateClick()}},slot:"reference"},[n("img",{attrs:{src:i("4be1"),alt:""}})])],1),n("popper",{key:t.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:t.$store.state.support.isTouchScreen?"long-press":"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[n("app-help-popper",{attrs:{title:(t.showShared?t.$t("general.HIDE"):t.$t("general.SHOW"))+" "+t.$t("help.SHARED-SECTIONS-TT"),details:t.$t("help.SHARED-SECTIONS-DET")}}),n("div",{staticClass:"w3-left control-btn border-yellow",class:{"control-btn-selected":t.showShared,"w3-bottombar":t.showShared},attrs:{slot:"reference"},on:{click:function(e){t.showSharedClick()}},slot:"reference"},[n("img",{attrs:{src:i("2408"),alt:""}})])],1),n("popper",{key:t.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:t.$store.state.support.isTouchScreen?"long-press":"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[n("app-help-popper",{attrs:{title:(t.showCommon?t.$t("general.HIDE"):t.$t("general.SHOW"))+" "+t.$t("help.COMMON-SECTIONS-TT"),details:t.$t("help.COMMON-SECTIONS-DET")}}),n("div",{staticClass:"w3-left control-btn border-blue",class:{"control-btn-selected":t.showCommon,"w3-bottombar":t.showCommon},attrs:{slot:"reference"},on:{click:function(e){t.showCommonClick()}},slot:"reference"},[n("img",{attrs:{src:i("bce9"),alt:""}})])],1)],1)]):t._e(),n("div",{staticClass:"control-group"},[n("popper",{key:t.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:t.$store.state.support.isTouchScreen?"long-press":"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[n("app-help-popper",{attrs:{title:(t.isDraggable?t.$t("general.DISABLE"):t.$t("general.ENABLE"))+" "+t.$t("help.ENABLE-DRAG-AND-DROP-TT"),details:t.$t("help.ENABLE-DRAG-AND-DROP-SECTIONS-DET")}}),n("div",{staticClass:"w3-right control-btn",class:{"control-btn-selected":t.isDraggable},attrs:{slot:"reference"},on:{click:function(e){t.toggleDraggable()}},slot:"reference"},[n("img",{attrs:{src:i("1a0f"),alt:""}})])],1)],1)])},S=[],w={components:{},props:{},data:function(){return{}},computed:{isDraggable:function(){return this.$store.state.support.triggerSectionDraggingState},showPrivate:function(){return this.$store.state.viewParameters.showPrivateSections},showShared:function(){return this.$store.state.viewParameters.showSharedSections},showCommon:function(){return this.$store.state.viewParameters.showCommonSections},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!1},flip:{enabled:!1}}}}},methods:{toggleDraggable:function(){this.$store.commit("triggerSectionDraggingState")},showPrivateClick:function(){this.$store.commit("toggleShowPrivateSections")},showSharedClick:function(){this.$store.commit("toggleShowSharedSections")},showCommonClick:function(){this.$store.commit("toggleShowCommonSections")}}},b=w,C=(i("1730"),Object(g["a"])(b,m,S,!1,null,"b11fc9aa",null));C.options.__file="ModelNavControlButtons.vue";var I=C.exports,$={components:{"app-model-section-modal":c["a"],"app-model-section-nav-item":v,"app-model-nav-control-buttons":I},data:function(){return{showSectionModal:!1,showControls:!1}},computed:{sectionData:function(){return this.$store.getters.getSectionDataAtCoord([0])},section:function(){return this.sectionData?this.sectionData.section:null},initiative:function(){return this.$store.state.initiative.initiative},levels:function(){return this.$store.state.viewParameters.levels}},methods:{},created:function(){}},E=$,D=(i("1a58"),Object(g["a"])(E,s,a,!1,null,"05bcf994",null));D.options.__file="ModelNav.vue";var O=D.exports,T={components:{"app-model-nav":O},data:function(){return{touchStartX:0,touchStartY:0}},computed:{initiative:function(){return this.$store.state.initiative.initiative},windowIsSmall:function(){return this.$store.state.support.windowIsSmall},expandModelNav:function(){return this.$store.state.support.expandModelNav}},methods:{expandModelNavClicked:function(){this.$store.commit("toggleExpandModelNav")},sectionSelected:function(){this.windowIsSmall&&(this.showNavBar=!1)},redirect:function(){if("InitiativeModel"===this.$route.name){var t=this.$store.state.model.currentSection;null!==t?(console.log("redirecting to ModelSectionContent with sectionId: "+t.id),this.$router.replace({name:"ModelSectionContent",params:{sectionId:t.id}})):(console.log("redirecting to ModelSectionContent with sectionId: "+this.initiative.topModelSection.id),this.$router.replace({name:"ModelSectionContent",params:{sectionId:this.initiative.topModelSection.id}}))}},touchStart:function(t){this.touchStartX=t.changedTouches[0].clientX,this.touchStartY=t.changedTouches[0].clientY},touchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStartX,i=t.changedTouches[0].clientY-this.touchStartY,n=30;Math.abs(i)<2*n&&(e>n?this.$store.commit("setExpandModelNav",!0):e<-1*n&&this.$store.commit("setExpandModelNav",!1))}},created:function(){console.log("ModelSectionTab created"),this.redirect()}},M=T,_=(i("41fa"),Object(g["a"])(M,n,o,!1,null,"0cf493c0",null));_.options.__file="ModelSectionTab.vue";e["default"]=_.exports},ab81:function(t,e,i){},b6b35:function(t,e,i){"use strict";var n=i("63dd"),o=i.n(n);o.a},bce9:function(t,e,i){t.exports=i.p+"img/common-icon.72135e6c.svg"},d364:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{},[i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showNewCardModal?i("app-model-card-modal",{attrs:{isNew:!0,inSectionId:t.section.id,inSectionTitle:t.section.title},on:{close:function(e){t.showNewCardModal=!1},updateCards:function(e){t.$store.commit("triggerUpdateSectionCards")}}}):t._e()],1),i("transition",{attrs:{name:"slideDownUp"}},[t.showNewSubsectionModal?i("app-model-section-modal",{attrs:{isNew:!0,inSection:t.section},on:{close:function(e){t.showNewSubsectionModal=!1}}}):t._e()],1),i("transition",{attrs:{name:"slideDownUp"}},[t.showNewSectionModal?i("app-model-section-modal",{attrs:{isNew:!0,inSection:t.inSection,onSection:t.section,isBefore:t.isNewSectionBefore},on:{close:function(e){t.showNewSectionModal=!1}}}):t._e()],1),i("transition",{attrs:{name:"slideDownUp"}},[t.showSectionModal?i("app-model-section-modal",{attrs:{isNew:!1,sectionId:t.section.id,inSection:t.inSection},on:{close:function(e){t.showSectionModal=!1}}}):t._e()],1)],1)]),i("popper",{attrs:{"append-to-body":!0,trigger:"click",options:t.popperOptions,toggleShow:t.toggleMenu}},[i("div",{staticClass:"append-to-body-popper"},[i("app-drop-down-menu",{staticClass:"drop-menu",attrs:{items:t.menuItems},on:{addCard:function(e){t.addCard()},addSubsection:function(e){t.addSubsection()},addSectionBefore:function(e){t.addSection(!0)},addSectionAfter:function(e){t.addSection(!1)},edit:function(e){t.edit()},detach:function(e){t.detachIntent=!0},remove:function(e){t.remove()},delete:function(e){t.deleteSection()},configNotifications:function(e){t.configNotifications()},resetSubsectionsOrder:function(e){t.resetSubsectionsOrder()},resetCardsOrder:function(e){t.resetCardsOrder()}}}),null!==t.inSection?i("div",{staticClass:"w3-card w3-white drop-menu"},[t.detachIntent?i("div",{staticClass:"w3-row w3-center delete-intent-div"},[i("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[i("p",{domProps:{innerHTML:t._s(t.$t("model.DETACH_CARD_WARNING"))}})]),i("button",{staticClass:"w3-button light-grey",on:{click:function(e){t.detachIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n          ")]),i("button",{staticClass:"w3-button button-blue",on:{click:function(e){t.detachConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n          ")])]):t._e(),t.removeIntent?i("div",{staticClass:"w3-row w3-center delete-intent-div"},[i("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[i("p",{domProps:{innerHTML:t._s(t.$t("model.REMOVE_SECTION_WARNING",{sectionTitle:t.section.title,inSectionTitle:t.inSection.title}))}})]),i("button",{staticClass:"w3-button light-grey",on:{click:function(e){t.removeIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n          ")]),i("button",{staticClass:"w3-button button-blue",on:{click:function(e){t.removeConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n          ")])]):t._e(),t.deleteIntent?i("div",{staticClass:"w3-row w3-center delete-intent-div"},[i("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[i("p",{domProps:{innerHTML:t._s(t.$t("model.DELETE_SECTION_WARNING",{sectionTitle:t.section.title}))}})]),i("button",{staticClass:"w3-button light-grey",on:{click:function(e){t.deleteIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n          ")]),i("button",{staticClass:"w3-button danger-btn",on:{click:function(e){t.deleteConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n          ")])]):t._e()]):t._e()],1),i("div",{staticClass:"expand-btn cursor-pointer",attrs:{slot:"reference"},slot:"reference"},[i("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])])],1)},o=[],s=(i("cadf"),i("551c"),i("097d"),{components:{},props:{section:{type:Object,default:null},inSection:{type:Object,deafult:null},showDetach:{type:Boolean,default:!1}},data:function(){return{showSectionModal:!1,showNewSubsectionModal:!1,showNewSectionModal:!1,isNewSectionBefore:!1,showNewCardModal:!1,showEditNotificationsModal:!1,detachIntent:!1,deleteIntent:!1,removeIntent:!1,toggleMenu:!1}},computed:{isLoggedAnEditor:function(){return this.$store.getters.isLoggedAnEditor},menuItems:function(){var t=[];return this.isLoggedAnEditor&&(t.push({text:this.$t("general.EDIT"),value:"edit",faIcon:"fa-pencil"}),this.showDetach&&t.push({text:this.$t("model.DETACH_LC"),value:"detach",faIcon:"fa-chain-broken"})),this.isLoggedAnEditor&&(t.push({text:this.$t("model.ADD_SUBSECTION"),value:"addSubsection",faIcon:"fa-plus"}),null!==this.inSection&&(t.push({text:this.$t("model.ADD_SECTION_BEFORE"),value:"addSectionBefore",faIcon:"fa-plus"}),t.push({text:this.$t("model.ADD_SECTION_AFTER"),value:"addSectionAfter",faIcon:"fa-plus"}))),this.isLoggedAnEditor&&null!==this.inSection&&t.push({text:this.$t("general.REMOVE"),value:"remove",faIcon:"fa-times"}),this.isLoggedAnEditor&&null!==this.inSection&&t.push({text:this.$t("general.DELETE"),value:"delete",faIcon:"fa-times"}),this.isLoggedAnEditor&&t.push({text:this.$t("model.RESET_SUBSECTIONS_ORDER"),value:"resetSubsectionsOrder",faIcon:"fa-exclamation-triangle"}),this.isLoggedAnEditor&&t.push({text:this.$t("model.RESET_CARDS_ORDER"),value:"resetCardsOrder",faIcon:"fa-exclamation-triangle"}),t},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!1}}}}},methods:{addCard:function(){this.toggleMenu=!this.toggleMenu,this.$emit("addCard")},addSubsection:function(){this.toggleMenu=!this.toggleMenu,this.showNewSubsectionModal=!0},addSection:function(t){this.toggleMenu=!this.toggleMenu,this.isNewSectionBefore=t,this.showNewSectionModal=!0},edit:function(){this.toggleMenu=!this.toggleMenu,this.showSectionModal=!0},configNotifications:function(){this.toggleMenu=!this.toggleMenu,this.showEditNotificationsModal=!0},remove:function(){this.removeIntent=!0},deleteSection:function(){this.deleteIntent=!0},detachConfirmed:function(){var t=this;this.axios.put("/1/model/section/"+this.inSection.id+"/detachSubsection/"+this.section.id,{}).then(function(e){console.log(e),"success"===e.data.result?(t.detachIntent=!1,t.$emit("section-removed")):t.showOutputMessage(e.data.message)}).catch(function(t){console.log(t)})},removeConfirmed:function(){var t=this;this.expanded=!1,this.axios.put("/1/model/section/"+this.inSection.id+"/removeSubsection/"+this.section.id,{}).then(function(e){"success"===e.data.result?(t.removeIntent=!1,t.toggleMenu=!t.toggleMenu,t.$emit("section-detached",e.data.data)):t.showOutputMessage(e.data.message)}).catch(function(t){console.log(t)})},deleteConfirmed:function(){var t=this;this.expanded=!1,this.axios.delete("/1/model/section/"+this.section.id).then(function(e){t.deleteIntent=!1,t.toggleMenu=!t.toggleMenu,t.$store.commit("triggerUpdateSectionsTree")}).catch(function(t){console.log(t)})},resetSubsectionsOrder:function(){var t=this;this.axios.delete("/1/model/section/"+this.section.id+"/resetSubsectionsOrder").then(function(e){t.toggleMenu=!t.toggleMenu,t.$store.commit("triggerUpdateExpands")}).catch(function(t){console.log(t)})},resetCardsOrder:function(){var t=this;this.axios.delete("/1/model/section/"+this.section.id+"/resetCardWrappersOrder").then(function(e){t.toggleMenu=!t.toggleMenu,t.$store.commit("triggerUpdateSectionCards")}).catch(function(t){console.log(t)})},clickOutsideMenu:function(){this.expanded=!1}},mounted:function(){},destroyed:function(){}}),a=s,c=(i("3e72"),i("2877")),r=Object(c["a"])(a,n,o,!1,null,"67e5aed2",null);r.options.__file="SectionControlButtons.vue";e["a"]=r.exports},e35d:function(t,e,i){t.exports=i.p+"img/zoom-out-icon.cde391e8.svg"},ee1d:function(t,e,i){t.exports=i.p+"img/zoom-in-icon.b62aed56.svg"}}]);
//# sourceMappingURL=chunk-34bcb61e.a8adea59.js.map