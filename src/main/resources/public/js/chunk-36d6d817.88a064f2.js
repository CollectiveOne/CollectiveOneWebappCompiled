(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36d6d817"],{"31a4":function(t,e,n){"use strict";var i=n("bc93"),o=n.n(i);o.a},"4f60":function(t,e,n){"use strict";var i=n("ae8b"),o=n.n(i);o.a},"8a3e":function(t,e,n){"use strict";var i=n("9619"),o=n.n(i);o.a},9619:function(t,e,n){},ae8b:function(t,e,n){},bc93:function(t,e,n){},d364:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{},[n("div",{staticClass:"slider-container"},[n("transition",{attrs:{name:"slideDownUp"}},[t.showNewCardModal?n("app-model-card-modal",{attrs:{isNew:!0,inSectionId:t.section.id,inSectionTitle:t.section.title},on:{close:function(e){t.showNewCardModal=!1},updateCards:function(e){t.$store.commit("triggerUpdateSectionCards")}}}):t._e()],1),n("transition",{attrs:{name:"slideDownUp"}},[t.showNewSubsectionModal?n("app-model-section-modal",{attrs:{isNew:!0,inSection:t.section},on:{close:function(e){t.showNewSubsectionModal=!1}}}):t._e()],1),n("transition",{attrs:{name:"slideDownUp"}},[t.showNewSectionModal?n("app-model-section-modal",{attrs:{isNew:!0,inSection:t.inSection,onSection:t.section,isBefore:t.isNewSectionBefore},on:{close:function(e){t.showNewSectionModal=!1}}}):t._e()],1),n("transition",{attrs:{name:"slideDownUp"}},[t.showSectionModal?n("app-model-section-modal",{attrs:{isNew:!1,sectionId:t.section.id,inSection:t.inSection},on:{close:function(e){t.showSectionModal=!1}}}):t._e()],1),n("transition",{attrs:{name:"slideDownUp"}},[t.showEditNotificationsModal?n("app-edit-notifications-modal",{attrs:{section:t.section},on:{close:function(e){t.showEditNotificationsModal=!1}}}):t._e()],1)],1)]),n("popper",{attrs:{"append-to-body":!0,trigger:"click",options:t.popperOptions,toggleShow:t.toggleMenu}},[n("div",{staticClass:"append-to-body-popper"},[n("app-drop-down-menu",{staticClass:"drop-menu",attrs:{items:t.menuItems},on:{addCard:function(e){t.addCard()},addSubsection:function(e){t.addSubsection()},addSectionBefore:function(e){t.addSection(!0)},addSectionAfter:function(e){t.addSection(!1)},edit:function(e){t.edit()},detach:function(e){t.detachIntent=!0},remove:function(e){t.remove()},delete:function(e){t.deleteSection()},configNotifications:function(e){t.configNotifications()},resetSubsectionsOrder:function(e){t.resetSubsectionsOrder()},resetCardsOrder:function(e){t.resetCardsOrder()}}}),null!==t.inSection?n("div",{staticClass:"w3-card w3-white drop-menu"},[t.detachIntent?n("div",{staticClass:"w3-row w3-center delete-intent-div"},[n("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[n("p",{domProps:{innerHTML:t._s(t.$t("model.DETACH_CARD_WARNING"))}})]),n("button",{staticClass:"w3-button light-grey",on:{click:function(e){t.detachIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n          ")]),n("button",{staticClass:"w3-button button-blue",on:{click:function(e){t.detachConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n          ")])]):t._e(),t.removeIntent?n("div",{staticClass:"w3-row w3-center delete-intent-div"},[n("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[n("p",{domProps:{innerHTML:t._s(t.$t("model.REMOVE_SECTION_WARNING",{sectionTitle:t.section.title,inSectionTitle:t.inSection.title}))}})]),n("button",{staticClass:"w3-button light-grey",on:{click:function(e){t.removeIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n          ")]),n("button",{staticClass:"w3-button button-blue",on:{click:function(e){t.removeConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n          ")])]):t._e(),t.deleteIntent?n("div",{staticClass:"w3-row w3-center delete-intent-div"},[n("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[n("p",{domProps:{innerHTML:t._s(t.$t("model.DELETE_SECTION_WARNING",{sectionTitle:t.section.title}))}})]),n("button",{staticClass:"w3-button light-grey",on:{click:function(e){t.deleteIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n          ")]),n("button",{staticClass:"w3-button danger-btn",on:{click:function(e){t.deleteConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n          ")])]):t._e()]):t._e()],1),n("div",{staticClass:"expand-btn cursor-pointer",attrs:{slot:"reference"},slot:"reference"},[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])])],1)},o=[],s=(n("cadf"),n("551c"),n("097d"),n("46c4")),a={components:{"app-edit-notifications-modal":s["a"]},props:{section:{type:Object,default:null},inSection:{type:Object,deafult:null},showDetach:{type:Boolean,default:!1}},data:function(){return{showSectionModal:!1,showNewSubsectionModal:!1,showNewSectionModal:!1,isNewSectionBefore:!1,showNewCardModal:!1,showEditNotificationsModal:!1,detachIntent:!1,deleteIntent:!1,removeIntent:!1,toggleMenu:!1}},computed:{isLoggedAnEditor:function(){return this.$store.getters.isLoggedAnEditor},menuItems:function(){var t=[];return this.isLoggedAnEditor&&(t.push({text:this.$t("general.EDIT"),value:"edit",faIcon:"fa-pencil"}),this.showDetach&&t.push({text:this.$t("model.DETACH_LC"),value:"detach",faIcon:"fa-chain-broken"})),this.isLoggedAnEditor&&(t.push({text:this.$t("model.ADD_SUBSECTION"),value:"addSubsection",faIcon:"fa-plus"}),null!==this.inSection&&(t.push({text:this.$t("model.ADD_SECTION_BEFORE"),value:"addSectionBefore",faIcon:"fa-plus"}),t.push({text:this.$t("model.ADD_SECTION_AFTER"),value:"addSectionAfter",faIcon:"fa-plus"}))),t.push({text:this.$t("general.NOTIFICATIONS"),value:"configNotifications",faIcon:"fa-cog"}),this.isLoggedAnEditor&&null!==this.inSection&&t.push({text:this.$t("general.REMOVE"),value:"remove",faIcon:"fa-times"}),this.isLoggedAnEditor&&null!==this.inSection&&t.push({text:this.$t("general.DELETE"),value:"delete",faIcon:"fa-times"}),this.isLoggedAnEditor&&t.push({text:this.$t("model.RESET_SUBSECTIONS_ORDER"),value:"resetSubsectionsOrder",faIcon:"fa-exclamation-triangle"}),this.isLoggedAnEditor&&t.push({text:this.$t("model.RESET_CARDS_ORDER"),value:"resetCardsOrder",faIcon:"fa-exclamation-triangle"}),t},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!1}}}}},methods:{addCard:function(){this.toggleMenu=!this.toggleMenu,this.$emit("addCard")},addSubsection:function(){this.toggleMenu=!this.toggleMenu,this.showNewSubsectionModal=!0},addSection:function(t){this.toggleMenu=!this.toggleMenu,this.isNewSectionBefore=t,this.showNewSectionModal=!0},edit:function(){this.toggleMenu=!this.toggleMenu,this.showSectionModal=!0},configNotifications:function(){this.toggleMenu=!this.toggleMenu,this.showEditNotificationsModal=!0},remove:function(){this.removeIntent=!0},deleteSection:function(){this.deleteIntent=!0},detachConfirmed:function(){var t=this;this.axios.put("/1/model/section/"+this.inSection.id+"/detachSubsection/"+this.section.id,{}).then(function(e){console.log(e),"success"===e.data.result?(t.detachIntent=!1,t.$emit("section-removed")):t.showOutputMessage(e.data.message)}).catch(function(t){console.log(t)})},removeConfirmed:function(){var t=this;this.expanded=!1,this.axios.put("/1/model/section/"+this.inSection.id+"/removeSubsection/"+this.section.id,{}).then(function(e){"success"===e.data.result?(t.removeIntent=!1,t.toggleMenu=!t.toggleMenu,t.$emit("section-detached",e.data.data)):t.showOutputMessage(e.data.message)}).catch(function(t){console.log(t)})},deleteConfirmed:function(){var t=this;this.expanded=!1,this.axios.delete("/1/model/section/"+this.section.id).then(function(e){t.deleteIntent=!1,t.toggleMenu=!t.toggleMenu,t.$store.commit("triggerUpdateSectionsTree")}).catch(function(t){console.log(t)})},resetSubsectionsOrder:function(){var t=this;this.axios.delete("/1/model/section/"+this.section.id+"/resetSubsectionsOrder").then(function(e){t.toggleMenu=!t.toggleMenu,t.$store.commit("triggerUpdateExpands")}).catch(function(t){console.log(t)})},resetCardsOrder:function(){var t=this;this.axios.delete("/1/model/section/"+this.section.id+"/resetCardWrappersOrder").then(function(e){t.toggleMenu=!t.toggleMenu,t.$store.commit("triggerUpdateSectionCards")}).catch(function(t){console.log(t)})},clickOutsideMenu:function(){this.expanded=!1}},mounted:function(){},destroyed:function(){}},c=a,r=(n("4f60"),n("2877")),d=Object(r["a"])(c,i,o,!1,null,"5801c00e",null);d.options.__file="SectionControlButtons.vue";e["a"]=d.exports},dc4f:function(t,e,n){t.exports=n.p+"img/shareable-view.746a9a45.svg"},e3b8:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"section-content-fixed":t.isMessages,"section-content-scroll":!t.isMessages}},[n("div",{staticClass:"w3-row control-row w3-border-bottom"},[n("app-section-info")],1),n("div",{staticClass:"w3-row section-elements"},[n("transition",{attrs:{name:"fadeenter"}},[n("router-view")],1)],1)])},o=[],s=(n("a481"),n("7f7f"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"w3-row"},[i("transition",{attrs:{name:"fadeenter"}},[t.currentSection?i("div",{key:t.currentSectionId,staticClass:"this-section-title small-scroll"},[i("div",{staticClass:"title-div"},[t._v("\n          "+t._s(t.sectionTitle)+"\n        ")]),i("div",{staticClass:"title-buttons"},[i("popper",{key:t.$store.state.support.isTouchScreen,staticClass:"btn-div",attrs:{trigger:t.$store.state.support.isTouchScreen?"long-press":"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[i("app-help-popper",{attrs:{title:(t.showIn?t.$t("general.HIDE"):t.$t("general.SHOW"))+" "+t.$t("help.SECTION-DETAILS-TT"),details:t.$t("help.SECTION-DETAILS-DET")}}),i("div",{staticClass:"fa-button",attrs:{slot:"reference"},on:{click:function(e){t.showIn=!t.showIn}},slot:"reference"},[t.showIn?i("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}):i("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])],1),t.isLoggedAnEditor?i("div",{staticClass:"btn-div fa-button"},[i("app-section-control-buttons",{attrs:{section:t.currentSection,inSection:null,showDetach:!1}})],1):t._e(),i("popper",{key:t.$store.state.support.isTouchScreen,staticClass:"btn-div",attrs:{trigger:t.$store.state.support.isTouchScreen?"long-press":"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[i("app-help-popper",{attrs:{title:t.$t("help.READ-FRIENDLY-URL-TT"),details:t.$t("help.READ-FRIENDLY-URL-DET")}}),i("div",{staticClass:"fa-button",attrs:{slot:"reference"},slot:"reference"},[i("router-link",{attrs:{to:{name:"ModelSectionRead",params:{sectionId:this.currentSection.id}}}},[i("img",{attrs:{src:n("dc4f"),alt:""}})])],1)],1)],1),t.hasOrigin?i("div",{staticClass:"title-origin"},[i("div",{staticClass:"origin-label w3-row"},[i("i",[t._v(t._s(t.$t("model.ORIGIN"))+":")]),i("app-model-section-link",{attrs:{section:t.originSubsections[0].section}}),t._v("\n            "+t._s(t.$t("general.IN"))+"\n          ")],1),i("div",{staticClass:"origin-section-tags w3-row"},t._l(t.originSubsections,function(t){return i("app-model-section-tag",{key:t.id,staticClass:"origin-section-tag",attrs:{section:t.parentSection}})}))]):t._e()]):t._e()])],1),i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showIn&&t.currentSection&&t.currentSectionPaths.length>0?i("div",{staticClass:"w3-row breadcrumb"},[i("div",{staticClass:"w3-row description-container light-grey"},[null!==t.currentSection.description&&""!==t.currentSection.description?i("span",[t._v(t._s(t.currentSection.description))]):i("span",[t._v(t._s(t.$t("general.EMPTY")))])]),t.currentSectionPaths[0].length>0?i("div",{staticClass:"w3-row"},[i("small",[t._v(t._s(t.$t("model.SECTION_IS_UNDER"))+":")])]):t._e(),t._l(t.currentSectionPaths,function(e){return t.currentSectionPaths[0].length>0?i("div",{staticClass:"w3-row"},[i("div",{staticClass:"w3-left fa-container"},[i("i",{staticClass:"fa fa-circle ",attrs:{"aria-hidden":"true"}})]),t._l(e,function(n,o){return i("div",{staticClass:"w3-left"},[i("div",{staticClass:"w3-left"},[i("router-link",{attrs:{to:{name:"ModelSectionContent",params:{sectionId:n.id,initiativeId:n.initiativeId}}}},[t._v("\n                "+t._s(n.title)+"\n              ")])],1),o<e.length-1?i("div",{staticClass:"w3-left fa-container"},[i("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})]):t._e()])})],2):t._e()})],2):t._e()])],1)])}),a=[],c=(n("cadf"),n("551c"),n("097d"),n("d364")),r=n("8925"),d={components:{"app-section-control-buttons":c["a"],"app-model-section-link":r["a"]},data:function(){return{showIn:!1}},computed:{originSubsections:function(){return null!=this.currentSection?this.currentSection.originSubsections:null},hasOrigin:function(){return this.originSubsections.length>0},isLoggedAnEditor:function(){return this.$store.getters.isLoggedAnEditor},menuItems:function(){return[{text:"add card",value:"addCard",faIcon:"fa-plus"},{text:"add subsection",value:"addSubsection",faIcon:"fa-plus"},{text:"edit",value:"edit",faIcon:"fa-pencil"},{text:"remove",value:"remove",faIcon:"fa-times"}]},sectionTitle:function(){return this.currentSection?this.currentSection.title:""},currentSectionId:function(){return this.$route.params.sectionId},currentSection:function(){return this.$store.state.model.currentSection},currentSectionGenealogy:function(){return this.$store.state.model.currentSectionGenealogy},currentSectionPaths:function(){return null!==this.$store.getters.currentSectionPaths?this.$store.getters.currentSectionPaths:[]},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!1}}}}},watch:{"$route.params.sectionId":function(){this.$store.dispatch("updateCurrentSection",this.$route.params.sectionId)}},methods:{clickOutsideMenu:function(){this.showSubmenu=!1}}},l=d,u=(n("8a3e"),n("2877")),h=Object(u["a"])(l,s,a,!1,null,"5dd2de1e",null);h.options.__file="SectionInfo.vue";var f=h.exports,p={components:{"app-section-info":f},computed:{isMessages:function(){return"ModelSectionMessages"===this.$route.name}},methods:{redirect:function(){"ModelSectionContent"===this.$route.name&&(console.log("redirecting to ModelSectionMessages"),this.$router.replace({name:"ModelSectionMessages"}))}},watch:{"$route.params.sectionId":function(){console.log("reacting to route sectionId in ModelSectionContent"),this.redirect()}},created:function(){this.$store.dispatch("updateCurrentSection",this.$route.params.sectionId),this.redirect()}},g=p,m=(n("31a4"),Object(u["a"])(g,i,o,!1,null,"6175b637",null));m.options.__file="ModelSectionContent.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-36d6d817.88a064f2.js.map