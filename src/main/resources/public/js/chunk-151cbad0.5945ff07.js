(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151cbad0"],{"022f":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"w3-row-padding autocomplete-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"w3-input w3-hover-light-grey autocomplete-inputs",attrs:{type:"text",id:t.id,name:"T_selectTagInputInitiative",placeholder:t.$t("initiatives.SELECT_TAG"),autocomplete:"off"},domProps:{value:t.type},on:{input:[function(i){i.target.composing||(t.type=i.target.value)},function(i){t.input(t.type)}],dblclick:t.showAll,blur:t.hideAll,keydown:t.keydown,focus:t.focus}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"w3-row",class:(t.className?t.className+"-list ":"")+"autocomplete transition autocomplete-list"},[e("ul",{staticClass:"w3-border"},[t.enableCreate?e("li",{staticClass:"w3-button w3-center",staticStyle:{width:"100%"},on:{click:function(i){t.$emit("create-new")}}},[e("b",[t._v(t._s(t.$t("general.CREATE_NEW")))])]):t._e(),e("hr",{staticClass:"hrz-line"}),t._l(t.json,function(i,a){return e("li",{class:t.activeClass(a),attrs:{transition:"showAll"}},[e("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selectList(i)},mousemove:function(i){t.mousemove(a)}}},[e("app-initiative-tag",{attrs:{tag:i,showRemove:!1,showDescription:!0}})],1)])}),0==t.json.length?e("li",{staticClass:"w3-padding w3-center"},[e("i",[t._v(t._s(t.$t("general.NO_RESULTS_FOUND")))])]):t._e()],2)])])},s=[],n=e("823b"),o=e("ff04"),r={mixins:[n["a"]],props:{enableCreate:{type:Boolean,default:!1},anchor:{default:"c1Id"},label:{default:"tagText"},url:{default:"/1/initiative/tags/suggestions"}},components:{"app-initiative-tag":o["a"]},created:function(){this.json=this.init?[this.init]:[],this.type=this.init?this.init.tagText:""}},l=r,c=(e("7a36"),e("2877")),u=Object(c["a"])(l,a,s,!1,null,"85c7076e",null);u.options.__file="InitiativeTagSelector.vue";i["a"]=u.exports},"0418":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{},[a("transition",{attrs:{name:"slideDownUp"}},[t.showEditNotificationsModal?a("app-edit-notifications-modal",{attrs:{type:"COLLECTIVEONE"},on:{close:function(i){t.showEditNotificationsModal=!1}}}):t._e()],1),a("div",{staticClass:"w3-row header-row drop-shadow-br light-grey"},[a("div",{staticClass:"w3-col s12 m4 initiatives-breadcrumb-container"},[t.withInitiativeNav?a("div",{staticClass:"w3-left nav-menu-btn w3-xlarge fa-button",on:{click:function(i){t.$store.commit("toggleExpandNav")}}},[a("i",{staticClass:"fa fa-chevron-circle-right"})]):t._e(),t.inInitiative&&!t.accessDenied?a("div",{ref:"breadcrumb",staticClass:"initiatives-breadcrumb small-scroll noselect",on:{scroll:function(i){t.scrolling()}}},[t._l(t.reversedParents,function(i,e){return a("div",{key:i.id,staticClass:"initiative-section"},[a("router-link",{staticClass:"w3-left cursor-pointer",class:{"parent-2":e>0},attrs:{to:{name:"Initiative",params:{initiativeId:i.id}},tag:"div"}},[t._v("\n            "+t._s(i.meta.name)+"\n          ")]),t._m(0,!0)],1)}),a("div",{staticClass:"initiative-section"},[a("div",{},[t._v("\n            "+t._s(t.initiative.meta.name)+"\n          ")]),a("div",{staticClass:"notification-div"},[a("app-notifications-list",{attrs:{element:t.initiative,contextType:"INITIATIVE"}})],1),a("app-initiative-control-buttons",{attrs:{initiative:this.initiative}})],1),"ENABLED"!==t.initiative.status?a("div",{staticClass:"w3-tag w3-round w3-margin-left error-panel"},[t._v("\n          "+t._s(t.initiative.status)+"\n        ")]):t._e()],2):t._e(),t.crumbTooLong&&!t.windowIsSmall?a("div",{staticClass:"scroll-btns"},[a("div",{staticClass:"left-scroll-btn",on:{click:function(i){t.scrollLeft()}}},[a("i",{staticClass:"fa fa-chevron-left"})]),a("div",{staticClass:"right-scroll-btn",on:{click:function(i){t.scrollRight()}}},[a("i",{staticClass:"fa fa-chevron-right"})])]):t._e()]),a("div",{staticClass:"w3-col s12 m8"},[a("div",{staticClass:"w3-col s6"},[t.inInitiative&&!t.accessDenied?a("div",{staticClass:"tab-btns-container w3-xlarge"},[a("popper",{staticClass:"btn-div",attrs:{trigger:"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[a("app-help-popper",{attrs:{title:t.$t("help.CONTENT-TAB-TT"),details:t.$t("help.CONTENT-TAB-DET")}}),a("router-link",{staticClass:"tab-btn-space",attrs:{slot:"reference",to:{name:"InitiativeModel",params:{initiativeId:t.initiative.id}}},slot:"reference"},[a("div",{staticClass:"fa-button noselect",class:{"fa-button-selected":t.isModel},attrs:{tooltip:"Content"}},[a("span",{},[a("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])])])],1),a("popper",{staticClass:"btn-div",attrs:{trigger:"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[a("app-help-popper",{attrs:{title:t.$t("help.MEMBERS-TAB-TT"),details:t.$t("help.MEMBERS-TAB-DET")}}),a("router-link",{staticClass:"tab-btn-space",attrs:{slot:"reference",to:{name:"InitiativePeople",params:{initiativeId:t.initiative.id}}},slot:"reference"},[a("div",{staticClass:"fa-button noselect",class:{"fa-button-selected":t.isPeople},attrs:{tooltip:"Members"}},[a("span",{},[a("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}})])])])],1),a("popper",{staticClass:"btn-div",attrs:{trigger:"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[a("app-help-popper",{attrs:{title:t.$t("help.TRANSFERS-TAB-TT"),details:t.$t("help.TRANSFERS-TAB-DET")}}),a("router-link",{staticClass:"tab-btn-space",attrs:{slot:"reference",to:{name:"InitiativeAssignations",params:{initiativeId:t.initiative.id}}},slot:"reference"},[a("div",{staticClass:"fa-button noselect",class:{"fa-button-selected":t.isAssignations},attrs:{tooltip:"Transfers"}},[a("span",{},[a("i",{staticClass:"fa fa-exchange",attrs:{"aria-hidden":"true"}})])])])],1)],1):a("div",{staticClass:"logo-container"},[t.windowIsSmall?t._e():a("router-link",{staticClass:"cursor-pointer",attrs:{slot:"reference",to:{name:"InitiativesHome"}},slot:"reference"},[a("img",{staticClass:"logo",attrs:{src:e("aa44"),alt:""}})])],1)]),a("div",{staticClass:"w3-col s6"},[t.$store.state.user.authenticated?a("div",{},[a("popper",{staticClass:"user-container",attrs:{trigger:"click",options:t.popperOptions}},[a("app-drop-down-menu",{staticClass:"user-drop-menu",attrs:{items:t.userMenuItems},on:{profile:function(i){t.goMyProfile()},home:function(i){t.goHome()},notifications:function(i){t.showEditNotificationsModal=!0},logout:function(i){t.logoutUser()}}}),a("div",{staticClass:"w3-right",attrs:{slot:"reference"},slot:"reference"},[t.$store.state.user.profile?a("div",{staticClass:"logged-user-div fa-button w3-right"},[a("div",{staticClass:"avatar-img-container w3-left"},[a("img",{staticClass:"logged-avatar w3-circle noselect",attrs:{src:t.$store.state.user.profile.pictureUrl}})]),a("div",{staticClass:"logged-nickname noselect w3-left w3-hide-medium w3-hide-small"},[t._v("\n                  "+t._s(t.$store.state.user.profile.nickname)+"\n                ")])]):t._e()])],1)],1):a("div",{staticClass:"login-button-container w3-right"},[a("button",{staticClass:"w3-button app-button",attrs:{name:"button"},on:{click:function(i){t.login()}}},[t._v("\n            "+t._s(t.$t("general.LOGIN_SIGNUP"))+"\n          ")])]),a("popper",{staticClass:"btn-div",attrs:{trigger:"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[a("app-help-popper",{attrs:{title:t.$t("help.LANDING-BUTTON-TT"),details:t.$t("help.LANDING-BUTTON-DET")}}),a("router-link",{staticClass:"fa-button info-button w3-right",attrs:{slot:"reference",to:{name:"Landing",query:{demos:!0}}},slot:"reference"},[a("i",{staticClass:"w3-xlarge fa fa-question-circle"})])],1),a("popper",{staticClass:"btn-div",attrs:{trigger:"hover",options:t.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[a("app-help-popper",{attrs:{title:t.$t("help.HOME-BUTTON-TT"),details:t.$t("help.HOME-BUTTON-DET")}}),a("router-link",{staticClass:"w3-right logo-container noselect cursor-pointer",attrs:{slot:"reference",to:{name:"InitiativesHome"}},slot:"reference"},[a("img",{staticClass:"icon",attrs:{src:e("7a7b"),alt:""}})])],1)],1)])])],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"separator"},[e("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])}],n=(e("7f7f"),e("ac6a"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},[e("div",{staticClass:"slider-container"},[e("transition",{attrs:{name:"slideDownUp"}},[t.showNewSubInitiativeModal?e("app-new-subinitiative-modal",{attrs:{parentInitiative:t.initiative},on:{close:function(i){t.showNewSubInitiativeModal=!1}}}):t._e()],1),e("transition",{attrs:{name:"slideDownUp"}},[t.showEditInitiativeModal?e("app-edit-initiative-modal",{on:{close:function(i){t.showEditInitiativeModal=!1}}}):t._e()],1),e("transition",{attrs:{name:"slideDownUp"}},[t.showEditNotificationsModal?e("app-edit-notifications-modal",{attrs:{type:"INITIATIVE",initiative:t.initiative},on:{close:function(i){t.showEditNotificationsModal=!1}}}):t._e()],1)],1),e("popper",{attrs:{"append-to-body":!0,trigger:"click",options:t.popperOptions}},[e("div",{staticClass:"append-to-body-popper"},[e("app-drop-down-menu",{staticClass:"drop-menu",attrs:{items:t.menuItems},on:{notifications:function(i){t.showNotifications()},edit:function(i){t.showEditInitiative()},newSubinitiative:function(i){t.showNewSubInitiative()},delete:function(i){t.deleteInitiative()}}}),e("div",{staticClass:"w3-card w3-white drop-menu"},[t.deleteIntent?e("div",{staticClass:"w3-row w3-center delete-intent-div"},[e("div",{staticClass:"w3-row w3-padding w3-round light-grey w3-margin-bottom"},[e("p",{domProps:{innerHTML:t._s(t.$t("initiatives.DELETE_WARNING",{name:t.initiative.meta.name}))}})]),e("div",{staticClass:"w3-row btns-row"},[e("button",{staticClass:"w3-button light-grey",on:{click:function(i){t.deleteIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n            ")]),e("button",{staticClass:"w3-button danger-btn",on:{click:function(i){t.deleteConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n            ")])])]):t._e()])],1),e("div",{staticClass:"expand-btn w3-xlarge fa-button",attrs:{slot:"reference"},slot:"reference"},[e("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])])],1)}),o=[],r=(e("a481"),e("cadf"),e("551c"),e("097d"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"w3-modal"},[e("div",{staticClass:"w3-modal-content"},[t.parentInitiative?e("div",{staticClass:"w3-card-4 app-modal-card"},[e("div",{staticClass:"close-div w3-display-topright w3-xlarge",on:{click:function(i){t.closeThis()}}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),e("div",{staticClass:"w3-container w3-border-bottom"},[e("h2",[t._v(t._s(t.$t("initiatives.NEW_SUBINITIATIVE_OF"))+" "+t._s(t.parentInitiative.meta.name))])]),e("div",{staticClass:"w3-container form-container"},[e("br"),e("label",{},[e("b",[t._v(t._s(t.$t("general.NAME"))+" "),e("span",{staticClass:"w3-small error-text"},[t._v("(required)")])])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w3-input w3-hover-light-grey",class:{"error-input":t.nameErrorShow},attrs:{type:"text"},domProps:{value:t.name},on:{input:function(i){i.target.composing||(t.name=i.target.value)}}}),e("app-error-panel",{attrs:{show:t.nameEmptyShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),e("app-error-panel",{attrs:{show:t.nameTooLongShow,message:t.$t("general.FIELD_TOO_LONG")}}),e("br"),e("label",{},[e("b",[t._v(t._s(t.$t("general.DESCRIPTION")))])]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.driver,expression:"driver"}],staticClass:"w3-input w3-border w3-round w3-hover-light-grey",domProps:{value:t.driver},on:{input:function(i){i.target.composing||(t.driver=i.target.value)}}}),e("hr"),e("div",{staticClass:"w3-container assets-selector-div"},[e("div",{staticClass:"w3-row-padding"},[e("div",{staticClass:"w3-col m4"},[e("h5",[e("b",[t._v(t._s(t.$t("tokens.TRANSFER_ASSETS_Q")))])])]),e("div",{staticClass:"w3-col m4"},[e("button",{staticClass:"w3-button transfer-button",class:{"app-button":t.transferAssetsFlag,"app-button-light":!t.transferAssetsFlag},attrs:{type:"button",name:"button"},on:{click:function(i){t.transferAssetsFlag=!0}}},[t._v("\n                "+t._s(t.$t("general.YES"))+"\n              ")])]),e("div",{staticClass:"w3-col m4"},[e("button",{staticClass:"w3-button transfer-button",class:{"app-button":!t.transferAssetsFlag,"app-button-light":t.transferAssetsFlag},attrs:{type:"button",name:"button"},on:{click:function(i){t.transferAssetsFlag=!1}}},[t._v("\n                "+t._s(t.$t("general.NO"))+"\n              ")])])]),e("div",{staticClass:"slider-container"},[e("transition",{attrs:{name:"slideDownUp"}},[e("keep-alive",[t.transferAssetsFlag?e("app-initiative-assets-assigner",{attrs:{initiativeId:t.parentInitiative.id,type:"initiative-assigner",initiativeName:t.parentInitiative.meta.name,showError:t.assetsErrorShow},on:{updated:function(i){t.parentAssetsSelected(i)}}}):t._e()],1)],1)],1)]),e("app-error-panel",{attrs:{show:t.assetsErrorShow,message:t.$t("tokens.NO_ASSETS_TRANSFERRED_CONF")}}),e("hr"),e("label",{staticClass:"init-contr-label "},[e("b",[t._v(t._s(t.$t("initiatives.INITIAL_MEMBERS")))])]),e("app-members-table-container",{attrs:{members:t.members,canEdit:!0}}),e("div",{staticClass:"w3-row",style:{"margin-bottom":"5px"}},[e("label",{style:{"margin-bottom":"10px"}},[e("b",[t._v("or")])]),e("br"),e("button",{staticClass:"w3-button app-button w3-small w3-margin-left",attrs:{type:"button",name:"button"},on:{click:function(i){t.setAllParentMembers()}}},[t._v('\n            select all members of "'+t._s(t.parentInitiative.meta.name)+'"\n          ')])]),e("app-error-panel",{attrs:{show:t.membersEmptyShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),e("app-error-panel",{attrs:{show:t.noAdmingShow,message:t.$t("initiatives.ONE_ADMIN_ATLEAST")}}),e("hr"),t.assetsErrorShow?e("div",{staticClass:"w3-row error-panel w3-padding w3-round w3-margin-bottom"},[e("div",{staticClass:"w3-col l10"},[t._v("\n            "+t._s(t.$t("tokens.NO_ASSETS_TRANSFERRED_MSG",{initName:t.parentInitiative.meta.name}))+"\n          ")]),e("div",{staticClass:"w3-col l2 w3-center"},[e("button",{staticClass:"w3-button app-button w3-round-large",attrs:{name:"button"},on:{click:function(i){t.assetsEmptyErrorConfirmed=!0}}},[t._v(t._s(t.$t("general.OK")))])])]):t._e(),e("div",{staticClass:"bottom-btns-row w3-row-padding"},[e("div",{staticClass:"w3-col m6"},[e("button",{staticClass:"w3-button app-button-light",attrs:{type:"button"},on:{click:function(i){t.closeThis()}}},[t._v(t._s(t.$t("general.CANCEL")))])]),e("div",{staticClass:"w3-col m6"},[e("button",{staticClass:"w3-button app-button",attrs:{type:"button"},on:{click:function(i){t.accept()}}},[t._v(t._s(t.$t("general.ACCEPT")))])])])],1)]):t._e()])])}),l=[],c=e("be94"),u=e("2f62"),d=e("30c1"),p=e("f12a"),m=e("bde3"),v={components:{"app-initiative-assets-assigner":d["a"],"app-members-table-container":p["a"]},props:{parentInitiative:{type:Object,default:null}},data:function(){return{name:"",driver:"",assetsTransfers:[],members:[],nameEmptyError:!1,assetsEmptyError:!1,membersEmptyError:!1,noAdminError:!1,assetsEmptyErrorConfirmed:!1,transferAssetsFlag:!0}},computed:{nameErrorShow:function(){return this.nameEmptyShow||this.nameTooLongShow},nameEmptyShow:function(){return this.nameEmptyError&&""===this.name},nameTooLongShow:function(){return this.nameTooLong},nameTooLong:function(){return this.name.length>42},assetsErrorShow:function(){return this.assetsEmptyError&&!this.assetsSelected&&!this.assetsEmptyErrorConfirmed},membersEmptyShow:function(){return this.membersEmptyError&&0===this.members.length},noAdmingShow:function(){return this.noAdminError&&!this.oneAdminExist},assetsSelected:function(){if(this.assetsTransfers&&this.assetsTransfers.length>0){for(var t in this.assetsTransfers)if(this.assetsTransfers[t].value>0)return!0;return!1}return!1},oneAdminExist:function(){for(var t in this.members)if("ADMIN"===this.members[t].role)return!0;return!1}},methods:Object(c["a"])({},Object(u["b"])(["showOutputMessage"]),{tokensString:function(t){return Object(m["g"])(t)},parentAssetsSelected:function(t){this.assetsTransfers=JSON.parse(JSON.stringify(t)),this.updateParent()},setAllParentMembers:function(){var t=this;this.parentInitiative.initiativeMembers.members.forEach(function(i){t.addMember(i,!1)})},addMember:function(t,i){var e=this.indexOfMember(t.user.c1Id);-1===e?this.members.push(JSON.parse(JSON.stringify(t))):i&&this.showOutputMessage("user has been already included")},removeMember:function(t){var i=this.indexOfMember(t.user.c1Id);i>-1&&this.members.splice(i,1)},indexOfMember:function(t){for(var i in this.members)if(this.members[i].user.c1Id===t)return i;return-1},closeThis:function(){this.$emit("close")},accept:function(){var t=this,i=!0;if(""===this.parentInitiative.id&&(i=!1),""===this.name?(i=!1,this.nameEmptyError=!0):this.nameTooLong&&(i=!1),this.transferAssetsFlag&&(this.assetsSelected||this.assetsEmptyErrorConfirmed||(i=!1,this.assetsEmptyError=!0)),0===this.members.length&&(i=!1,this.membersEmptyError=!0),this.oneAdminExist||(i=!1,this.noAdminError=!0),i){var e={asSubinitiative:!0,parentInitiativeId:this.parentInitiative.id,name:this.name,driver:this.driver,members:this.members,assetsTransfers:this.transferAssetsFlag?this.assetsTransfers:[]};this.axios.post("/1/initiative/create",e).then(function(i){"success"===i.data.result?(t.closeThis(),t.$store.dispatch("updateMyInitiatives"),t.$router.push({name:"Initiative",params:{initiativeId:i.data.elementId}})):t.showOutputMessage(i.data.message)}).catch(function(t){console.log(t)})}}}),mounted:function(){if(this.$store.state.user.profile){var t={};t.user=this.$store.state.user.profile,t.role="ADMIN",this.members.push(t)}}},g=v,f=(e("9acd"),e("2877")),h=Object(f["a"])(g,r,l,!1,null,"69954e02",null);h.options.__file="NewSubInitiativeModal.vue";var w=h.exports,b=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"w3-modal"},[a("div",{staticClass:"w3-modal-content"},[a("div",{staticClass:"w3-card-4 app-modal-card"},[a("div",{staticClass:"close-div w3-display-topright w3-xlarge",on:{click:function(i){t.closeThis()}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"w3-container  w3-border-bottom"},[a("h2",[t._v(t._s(t.$t("initiatives.EDIT_INITIATIVE")))])]),a("div",{staticClass:"w3-container form-container"},[a("div",{staticClass:"w3-row image-container w3-center w3-display-container w3-card-2"},[t.uploadingImage?a("div",{staticClass:"loader-gif-container"},[a("img",{staticClass:"loader-gif",attrs:{src:e("cf1c"),alt:""}})]):t._e(),!t.uploadingImage&&t.newInitiative.meta.imageFile?a("div",{},[a("img",{attrs:{src:t.newInitiative.meta.imageFile.url+"?lastUpdated="+t.newInitiative.meta.imageFile.lastUpdated,alt:""}})]):t._e(),t.uploadingImage?t._e():a("div",{staticClass:"w3-display-middle"},[a("input",{staticClass:"inputfile",attrs:{type:"file",name:"imageFile",id:"imageFile",accept:"image/*"},on:{change:function(i){t.newFileSelected(i)}}}),a("label",{staticClass:"w3-button app-button",attrs:{for:"imageFile"}},[t._v(t._s(t.newInitiative.meta.imageFile?"change":"upload image"))]),t.newInitiative.meta.imageFile?a("button",{staticClass:"w3-button app-button-danger",on:{click:function(i){t.removeImage()}}},[t._v("remove")]):t._e()])]),a("app-error-panel",{attrs:{show:t.errorUploadingFile,message:t.errorUploadingFileMsg}}),a("div",{staticClass:"w3-row w3-margin-top"},[a("label",{},[a("b",[t._v(t._s(t.$t("general.NAME")))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newInitiative.meta.name,expression:"newInitiative.meta.name"}],staticClass:"w3-input w3-hover-light-grey",class:{"error-input":t.nameErrorShow},attrs:{type:"text"},domProps:{value:t.newInitiative.meta.name},on:{input:function(i){i.target.composing||t.$set(t.newInitiative.meta,"name",i.target.value)}}}),a("app-error-panel",{attrs:{show:t.nameEmptyShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),a("app-error-panel",{attrs:{show:t.nameTooLarge,message:t.$t("general.FIELD_TOO_LONG")}})],1),a("br"),a("div",{staticClass:"w3-row"},[a("label",{},[a("b",[t._v(t._s(t.$t("general.DESCRIPTION")))])]),a("app-markdown-editor",{model:{value:t.newInitiative.meta.driver,callback:function(i){t.$set(t.newInitiative.meta,"driver",i)},expression:"newInitiative.meta.driver"}})],1),a("br"),a("div",{staticClass:"w3-row"},[a("label",{},[a("b",[t._v(t._s(t.$t("initiatives.COLOR")))])]),a("div",{staticClass:"colors-container w3-center"},t._l(t.colors,function(i){return a("div",{staticClass:"color-picker w3-circle cursor-pointer",class:{"color-picked":t.newInitiative.meta.color===i},style:{"background-color":i},on:{click:function(e){t.newInitiative.meta.color=i}}})}))]),a("hr"),a("div",{staticClass:"w3-row"},[a("div",{staticClass:"w3-col s12"},[a("div",{staticClass:"w3-row"},[a("label",{},[a("b",[t._v(t._s(t.$t("initiatives.TAGS")))])])]),a("div",{staticClass:"w3-row-padding w3-margin-top tags-row"},[a("div",{staticClass:"w3-col l6 module-tag-col w3-margin-bottom"},[a("app-initiative-tag-selector-manager",{attrs:{initiativeId:t.initiative.id},on:{add:function(i){t.addTag(i)}}})],1),a("div",{staticClass:"w3-col l6"},t._l(t.newInitiative.meta.tags,function(i){return a("app-initiative-tag",{key:i.id,staticClass:"tags-containers",attrs:{tag:i,showRemove:!0},on:{remove:function(i){t.removeTag(i)}}})}))])])]),a("hr"),a("div",{staticClass:"w3-row"},[a("label",{},[a("b",[t._v(t._s(t.$t("initiatives.VISIBILITY")))])]),a("div",{staticClass:"w3-col s12"},[a("div",{staticClass:"w3-row w3-margin-top modules-row"},[a("div",{staticClass:"w3-col s4"},[a("button",{staticClass:"w3-left w3-button",class:{"app-button":t.isPrivate,"app-button-light":!t.isPrivate},attrs:{id:"T_private_visibilityButton"},on:{click:function(i){t.newInitiative.meta.visibility="PRIVATE"}}},[t._v("\n                    "+t._s(t.$t("initiatives.PRIVATE"))+"\n                  ")])]),a("div",{staticClass:"w3-col s4"},[a("button",{staticClass:"w3-left w3-button",class:{"app-button":t.isEcosystem,"app-button-light":!t.isEcosystem},attrs:{id:"T_ecosystem_visibilityButton"},on:{click:function(i){t.newInitiative.meta.visibility="ECOSYSTEM"}}},[t._v("\n                    "+t._s(t.$t("initiatives.ECOSYSTEM"))+"\n                  ")])]),t.isSubinitiative?a("div",{staticClass:"w3-col s4"},[a("button",{staticClass:"w3-left w3-button",class:{"app-button":t.isInherited,"app-button-light":!t.isInherited},attrs:{id:"T_inherited_visibilityButton"},on:{click:function(i){t.newInitiative.meta.visibility="INHERITED"}}},[t._v("\n                    "+t._s(t.$t("initiatives.INHERIT"))+"\n                  ")])]):t._e(),a("div",{staticClass:"w3-col s4"},[a("button",{staticClass:"w3-left w3-button",class:{"app-button":t.isPublic,"app-button-light":!t.isPublic},attrs:{id:"T_public_visibilityButton"},on:{click:function(i){t.newInitiative.meta.visibility="PUBLIC"}}},[t._v("\n                    "+t._s(t.$t("initiatives.PUBLIC"))+"\n                  ")])])])])]),a("hr"),a("div",{staticClass:"bottom-btns-row w3-row-padding"},[a("div",{staticClass:"w3-col m6"},[a("button",{staticClass:"w3-button app-button-light",attrs:{type:"button"},on:{click:function(i){t.closeThis()}}},[t._v(t._s(t.$t("general.CANCEL")))])]),a("div",{staticClass:"w3-col m6"},[a("button",{staticClass:"w3-button app-button",attrs:{type:"button",id:"T_acceptButtonEditInitiative"},on:{click:function(i){t.accept()}}},[t._v(t._s(t.$t("general.ACCEPT")))])])]),a("hr"),a("div",{staticClass:"w3-row w3-center w3-margin-bottom delete-row"},[a("button",{staticClass:"w3-left w3-button app-button-danger",attrs:{type:"button"},on:{click:function(i){t.deleteInitiativeSelected=!0}}},[t._v("\n            "+t._s(t.$t("initiatives.DELETE_INIT"))+"\n          ")])]),a("div",{staticClass:"slider-container"},[a("transition",{attrs:{name:"slideDownUp"}},[t.deleteInitiativeSelected?a("div",{staticClass:"w3-row tags-row w3-center"},[a("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[a("p",{domProps:{innerHTML:t._s(t.$t("initiatives.CONFIRM_DELETE_MSG"))}})]),a("button",{staticClass:"w3-button app-button-light button-pair",attrs:{id:"T_cancelDeleteInitiativeButton"},on:{click:function(i){t.deleteInitiativeSelected=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n              ")]),a("button",{staticClass:"w3-button app-button-danger button-pair",attrs:{id:"T_confirmDeleteInitiativeButton"},on:{click:function(i){t.deleteInitiative()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n              ")])]):t._e()])],1)],1)])])])},I=[],C=e("ff04"),E=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"w3-row"},[e("div",{staticClass:"w3-col s12"},[e("div",{staticClass:"slider-container"},[e("transition",{attrs:{name:"fadeenter"}},[t.creating?t._e():e("div",{staticClass:"w3-row"},[e("div",{staticClass:"w3-col w3-right w3-center",staticStyle:{width:"100px"}},[e("button",{staticClass:"w3-button app-button",attrs:{name:"button"},on:{click:function(i){t.$emit("add",t.tag)}}},[t._v(t._s(t.$t("general.ADD")))])]),e("div",{staticClass:"w3-rest new-tag-input-container"},[e("app-initiative-tag-selector",{attrs:{init:t.tagInit,enableCreate:!0},on:{select:function(i){t.tagSelected(i)},"create-new":function(i){t.creating=!0}}})],1)])])],1),e("div",{staticClass:"slider-container"},[e("transition",{attrs:{name:"fadeenter"}},[t.creating?e("div",{staticClass:"w3-row"},[e("label",[e("b",[t._v(t._s(t.$t("initiatives.TAG"))+":")])]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newTag.tagText,expression:"newTag.tagText",modifiers:{trim:!0}}],staticClass:"w3-input",attrs:{id:"T_tagName_SelectTagInitiative",type:"text"},domProps:{value:t.newTag.tagText},on:{input:function(i){i.target.composing||t.$set(t.newTag,"tagText",i.target.value.trim())},blur:function(i){t.$forceUpdate()}}}),e("app-error-panel",{attrs:{show:t.tagTextEmptyErrorShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),e("app-error-panel",{attrs:{show:t.tagTextIsValidShow,message:t.$t("general.FIELD_ONLY_LETTERS")}}),e("app-error-panel",{attrs:{show:t.tagTextTooLong,message:t.$t("general.FIELD_TOO_LONG")}}),e("br"),e("label",[e("b",[t._v(t._s(t.$t("general.DESCRIPTION"))+":")])]),e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.newTag.description,expression:"newTag.description",modifiers:{trim:!0}}],staticClass:"w3-input w3-border",attrs:{id:"T_tagDescription_SelectTagInitiative",rows:"2",placeholder:"tag description"},domProps:{value:t.newTag.description},on:{input:function(i){i.target.composing||t.$set(t.newTag,"description",i.target.value.trim())},blur:function(i){t.$forceUpdate()}}}),e("app-error-panel",{attrs:{show:t.tagDescriptionEmptyErrorShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),e("app-error-panel",{attrs:{show:t.tagDescriptionTooLong,message:t.$t("general.FIELD_TOO_LONG")}}),e("div",{staticClass:"bottom-btns-row w3-row-padding w3-margin-top"},[e("div",{staticClass:"w3-col m6"},[e("button",{staticClass:"w3-button app-button-light",attrs:{type:"button"},on:{click:function(i){t.creating=!1}}},[t._v(t._s(t.$t("general.CANCEL")))])]),e("div",{staticClass:"w3-col m6"},[e("button",{staticClass:"w3-button app-button",attrs:{id:"T_buttonAccept_SelectTagInitiative",type:"button"},on:{click:function(i){t.saveTag()}}},[t._v(t._s(t.$t("general.ACCEPT")))])])])],1):t._e()])],1)])])},_=[],T=e("022f"),y={props:{initiativeId:{type:String,default:""}},components:{"app-initiative-tag-selector":T["a"]},data:function(){return{creating:!1,newTag:{tagText:"",description:""},tagInit:null,tag:null,tagDescriptionEmptyError:!1,tagTextEmptyError:!1,tagTextInvalidError:!1}},computed:{tagTextIsEmpty:function(){return""===this.newTag.tagText},tagTextEmptyErrorShow:function(){return this.tagTextIsEmpty&&this.tagTextEmptyError},tagTextValid:function(){return!!this.tagTextIsEmpty||/^[a-z\d\-_\s]+$/i.test(this.newTag.tagText)},tagTextIsValidShow:function(){return!this.tagTextValid&&this.tagTextInvalidError},tagTextTooLong:function(){return this.newTag.tagText.length>32},tagDescriptionIsEmpty:function(){return""===this.newTag.description},tagDescriptionEmptyErrorShow:function(){return this.tagDescriptionIsEmpty&&this.tagDescriptionEmptyError},tagDescriptionTooLong:function(){return this.newTag.description.length>250}},methods:{tagSelected:function(t){this.tag=t,this.$emit("selected",t)},saveTag:function(){var t=this,i=!0;this.tagTextIsEmpty&&(this.tagTextEmptyError=!0,i=!1),this.tagTextValid||(this.tagTextInvalidError=!0,i=!1),this.tagTextTooLong&&(i=!1),this.tagDescriptionIsEmpty&&(this.tagDescriptionEmptyError=!0,i=!1),this.tagDescriptionTooLong&&(i=!1),i&&this.axios.post("/1/initiative/tag",this.newTag).then(function(i){if("success"===i.data.result)return t.axios.get("/1/initiative/tag/"+i.data.elementId)}).then(function(i){"success"===i.data.result&&(t.creating=!1,t.newTag={tagText:"",description:""},t.tagInit=i.data.data,t.tag=i.data.data,t.$emit("selected",i.data.data))})}}},$=y,S=(e("3913"),Object(f["a"])($,E,_,!1,null,"118ebb5f",null));S.options.__file="InitiativeTagSelectorManager.vue";var N=S.exports,O=function(t,i){for(var e in t)if(t[e].id===i)return e;return-1},x={components:{"app-initiative-tag":C["a"],"app-initiative-tag-selector-manager":N},data:function(){return{newInitiative:null,colors:["#009ee3","#e5007d","#e8d80c","#68b628","#ff9100","#e40000","#00a8a8"],nameEmptyError:!1,deleteInitiativeSelected:!1,newTag:"",uploadingImage:!1,errorUploadingFile:!1,errorUploadingFileMsg:""}},computed:{initiative:function(){return this.$store.state.initiative.initiative},isSubinitiative:function(){return 0!==this.newInitiative.parents.length},nameErrorShow:function(){return this.nameEmptyShow||this.nameTooLarge},nameEmptyShow:function(){return this.nameEmptyError&&""===this.newInitiative.meta.name},nameTooLarge:function(){return this.newInitiative.meta.name.length>30},isPrivate:function(){return this.isSubinitiative?"PRIVATE"===this.newInitiative.meta.visibility:"PRIVATE"===this.newInitiative.meta.visibility||"INHERITED"===this.newInitiative.meta.visibility||null===this.newInitiative.meta.visibility},isInherited:function(){return!!this.isSubinitiative&&("INHERITED"===this.newInitiative.meta.visibility||null===this.newInitiative.meta.visibility)},isPublic:function(){return"PUBLIC"===this.newInitiative.meta.visibility},isEcosystem:function(){return"ECOSYSTEM"===this.newInitiative.meta.visibility}},methods:{newFileSelected:function(t){var i=this,e=new FormData;e.append("file",t.target.files[0]),this.uploadingImage=!0,this.errorUploadingFile=!1,this.axios.post("/1/upload/initiativeImage/"+this.initiative.id,e).then(function(t){if(i.uploadingImage=!1,"success"===t.data.result)return i.newInitiative.meta.newImageFileId=t.data.elementId,i.axios.get("/1/files/"+i.newInitiative.meta.newImageFileId);i.errorUploadingFile=!0,i.errorUploadingFileMsg=t.data.message}).then(function(t){i.newInitiative.meta.imageFile=t.data.data})},addTag:function(t){-1===O(this.newInitiative.meta.tags,t.id)&&this.newInitiative.meta.tags.push(t)},removeTag:function(t){var i=O(this.newInitiative.meta.tags,t.id);-1!==i&&this.newInitiative.meta.tags.splice(i,1)},closeThis:function(){this.$emit("close")},accept:function(){var t=this,i=!0;""===this.newInitiative.meta.name&&(this.nameEmptyError=!0,i=!1),this.nameTooLarge&&(i=!1),i&&this.axios.put("/1/initiative/"+this.initiative.id,this.newInitiative.meta).then(function(i){t.closeThis(),t.$store.dispatch("refreshInitiative"),t.$store.dispatch("updateMyInitiatives")})},deleteInitiative:function(){var t=this;this.axios.delete("/1/initiative/"+this.initiative.id).then(function(i){if(t.$store.dispatch("refreshInitiative"),t.$store.dispatch("updateMyInitiatives"),t.newInitiative.parents.length>0){var e=t.newInitiative.parents[t.newInitiative.parents.length-1].id;t.$router.replace({name:"Initiative",params:{initiativeId:e}}),t.closeThis()}else window.location.href="/"})}},created:function(){this.newInitiative=JSON.parse(JSON.stringify(this.initiative))}},A=x,L=(e("f4be"),Object(f["a"])(A,b,I,!1,null,"636ec9c2",null));L.options.__file="EditInitiativeModal.vue";var M=L.exports,k=e("46c4"),D={components:{"app-new-subinitiative-modal":w,"app-edit-initiative-modal":M,"app-edit-notifications-modal":k["a"]},props:{initiative:{type:Object,default:null}},data:function(){return{deleteIntent:!1,showNewSubInitiativeModal:!1,showEditInitiativeModal:!1,showEditNotificationsModal:!1}},computed:{isLoggedAnAdmin:function(){return this.$store.getters.isLoggedAnAdmin},menuItems:function(){var t=[];return this.isLoggedAnAdmin&&t.push({text:this.$t("general.EDIT"),value:"edit",faIcon:"fa-pencil"}),this.isLoggedAnAdmin&&t.push({text:this.$t("initiatives.NEW_SUBINITIATIVE"),value:"newSubinitiative",faIcon:"fa-plus"}),t.push({text:this.$t("general.NOTIFICATIONS"),value:"notifications",faIcon:"fa-cog"}),this.isLoggedAnAdmin&&t.push({text:this.$t("general.DELETE"),value:"delete",faIcon:"fa-times"}),t},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!1},flip:{enabled:!1}}}}},methods:{showNotifications:function(){this.expanded=!1,this.showEditNotificationsModal=!0},showEditInitiative:function(){this.expanded=!1,this.showEditInitiativeModal=!0},showNewSubInitiative:function(){this.expanded=!1,this.showNewSubInitiativeModal=!0},deleteInitiative:function(){this.deleteIntent=!0},deleteConfirmed:function(){var t=this;this.axios.delete("/1/initiative/"+this.initiative.id).then(function(i){if(t.$store.dispatch("refreshInitiative"),t.$store.dispatch("updateMyInitiatives"),t.initiative.parents.length>0){var e=t.initiative.parents[t.initiative.parents.length-1].id;t.$router.replace({name:"Initiative",params:{initiativeId:e}}),t.closeThis()}else window.location.href="/"})},clickOutsideMenu:function(){this.expanded=!1}},mounted:function(){},destroyed:function(){}},F=D,P=(e("ebc8"),Object(f["a"])(F,n,o,!1,null,"1907876e",null));P.options.__file="InitiativeControlButtons.vue";var R=P.exports,B=e("f868"),U={components:{"app-initiative-control-buttons":R,"app-edit-notifications-modal":k["a"],"app-notifications-list":B["a"]},props:{inInitiative:{type:Boolean,default:!1},withInitiativeNav:{type:Boolean,default:!0}},data:function(){return{showEditNotificationsModal:!1,draggingBC:!1,crumbTooLong:!1,scrollOnLeft:!1,scrollOnRight:!1}},computed:{accessDenied:function(){return this.$store.state.initiative.accessDenied},windowIsSmall:function(){return this.$store.state.support.windowIsSmall},expandNav:function(){return this.$store.state.support.expandNav},initiative:function(){return this.$store.state.initiative.initiative},reversedParents:function(){if(!this.accessDenied){var t=JSON.parse(JSON.stringify(this.initiative.parents));return t.reverse()}return[]},isLoggedAnAdmin:function(){return this.$store.getters.isLoggedAnAdmin},isLoggedAMember:function(){return this.$store.getters.isLoggedAMember},isPeople:function(){var t=!1;return this.$route.matched.forEach(function(i){"InitiativePeople"===i.name&&(t=!0)}),t},isAssignations:function(){var t=!1;return this.$route.matched.forEach(function(i){"InitiativeAssignations"===i.name&&(t=!0)}),t},isModel:function(){var t=!1;return this.$route.matched.forEach(function(i){"ModelSectionContent"!==i.name&&"InitiativeModel"!==i.name||(t=!0)}),t},userMenuItems:function(){return[{text:this.$t("general.HOME"),value:"home",faIcon:"fa-home"},{text:this.$t("general.PROFILE"),value:"profile",faIcon:"fa-user"},{text:this.$t("general.NOTIFICATIONS"),value:"notifications",faIcon:"fa-cog"},{text:this.$t("general.LOGOUT"),value:"logout",faIcon:"fa-power-off"}]},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!1},flip:{enabled:!1}}}}},methods:{login:function(){this.$store.state.user.lock.show()},goMyProfile:function(){this.$router.push({name:"UserProfilePage",params:{userId:this.$store.state.user.profile.c1Id}})},goHome:function(){this.$router.push({name:"InitiativesHome"})},logoutUser:function(){this.$store.dispatch("logoutUser")},scrolling:function(){this.checkCrumbScroll()},checkCrumbScroll:function(){this.$refs.breadcrumb?(this.crumbTooLong=this.$refs.breadcrumb.clientWidth<this.$refs.breadcrumb.scrollWidth,this.checkScrollOnLeft(),this.checkScrollOnRight()):this.crumbTooLong=!1},checkScrollOnLeft:function(){0===this.$refs.breadcrumb.scrollLeft?this.scrollOnLeft=!0:this.scrollOnLeft=!1},checkScrollOnRight:function(){this.$refs.breadcrumb.scrollLeft===this.$refs.breadcrumb.scrollWidth?this.scrollOnRight=!0:this.scrollOnRight=!1},scrollLeft:function(){this.$refs.breadcrumb.scrollLeft-=50},scrollRight:function(){this.$refs.breadcrumb.scrollLeft+=50}},mounted:function(){var t=this;this.$nextTick(function(){t.checkCrumbScroll()})}},j=U,V=(e("93c6"),Object(f["a"])(j,a,s,!1,null,"5d38b967",null));V.options.__file="Header.vue";i["a"]=V.exports},"2afc":function(t,i,e){},"2cec":function(t,i,e){"use strict";var a=e("d63d"),s=e.n(a);s.a},"2e86":function(t,i,e){},3913:function(t,i,e){"use strict";var a=e("e15c"),s=e.n(a);s.a},"7a36":function(t,i,e){"use strict";var a=e("2afc"),s=e.n(a);s.a},"7a7b":function(t,i,e){t.exports=e.p+"img/imago-red.5cce5d3c.png"},"8bf8":function(t,i,e){},"93c6":function(t,i,e){"use strict";var a=e("8bf8"),s=e.n(a);s.a},"9acd":function(t,i,e){"use strict";var a=e("c98c"),s=e.n(a);s.a},aa44:function(t,i,e){t.exports=e.p+"img/logo-color.9e64a131.png"},c98c:function(t,i,e){},d63d:function(t,i,e){},e15c:function(t,i,e){},ebc8:function(t,i,e){"use strict";var a=e("2e86"),s=e.n(a);s.a},f4be:function(t,i,e){"use strict";var a=e("f836"),s=e.n(a);s.a},f836:function(t,i,e){},ff04:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"w3-row tag-container w3-round w3-border"},[e("div",{staticClass:"w3-col s12"},[e("div",{staticClass:"top-row w3-row"},[e("div",{staticClass:"tag-text-container w3-center"},[t.showDescription?e("span",[e("b",[t._v(t._s(t.tag.tagText))])]):e("span",[t._v(t._s(t.tag.tagText))])]),t.showRemove?e("div",{staticClass:"cursor-pointer tag-close-div",on:{click:function(i){t.$emit("remove",t.tag)}}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]):t._e()]),t.showDescription?e("div",{staticClass:"w3-row description-row"},[e("i",[t._v(t._s(t.tag.description))])]):t._e()])])},s=[],n=(e("cadf"),e("551c"),e("097d"),{props:{tag:{type:Object,default:null},showRemove:{type:Boolean,default:!1},showDescription:{type:Boolean,default:!1}}}),o=n,r=(e("2cec"),e("2877")),l=Object(r["a"])(o,a,s,!1,null,"4b20929c",null);l.options.__file="InitiativeTag.vue";i["a"]=l.exports}}]);
//# sourceMappingURL=chunk-151cbad0.5945ff07.js.map