(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eefe778"],{"04e7":function(t,e,i){"use strict";var n=i("d2fb"),a=i.n(n);a.a},"084f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"initiatives-view"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showNewInitiativeModal?i("app-new-initiative-modal",{on:{close:function(e){t.showNewInitiativeModal=!1}}}):t._e()],1),i("div",{staticClass:"w3-row initiatives-row"},[i("transition",{attrs:{name:"slideRightLeft"},on:{"after-enter":function(e){t.enabledClickOutside=!0},"before-leave":function(e){t.enabledClickOutside=!1}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.expandNav,expression:"expandNav"},{name:"click-outside",rawName:"v-click-outside",value:t.clickedOutside,expression:"clickedOutside"}],staticClass:"dark-gray nav-container-cell w3-sidebar",on:{touchstart:function(e){t.touchStart(e)},touchend:function(e){t.touchEnd(e)}}},[i("app-initiatives-nav",{on:{"initiative-selected":function(e){t.initiativeSelected()},"new-initiative":function(e){t.showNewInitiativeModal=!0}}})],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],staticClass:"w3-row content-container-cell"},[i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp",mode:"out-in"}},[i("router-view")],1)],1)])],1)],1)},a=[],s=(i("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav-container w3-border-right"},[n("div",{},[n("div",{staticClass:"w3-row-padding btns-row"},[n("div",{staticClass:"w3-col s4"},[n("div",{staticClass:"w3-xlarge cursor-pointer noselect",on:{click:function(e){t.closeNav()}}},[n("i",{staticClass:"fa fa-chevron-circle-left"})])]),t.$store.state.user.authenticated?n("div",{staticClass:"w3-col s8 ",on:{click:function(e){t.newInitiative()}}},[n("div",{staticClass:"create-new w3-button light-grey w3-round-large w3-center"},[n("i",{staticClass:"fa fa-plus-circle"}),t._v("  "+t._s(t.$t("initiatives.NEW"))+"\n        ")])]):n("div",{staticClass:"w3-col s8 "},[n("button",{staticClass:"create-new w3-button light-grey w3-round-large w3-center",attrs:{name:"button"},on:{click:function(e){t.login()}}},[t._v("\n          "+t._s(t.$t("general.LOGIN_SIGNUP"))+"\n        ")])])]),t.$store.state.user.authenticated?n("div",{staticClass:"w3-row my-initiatives-row"},[n("div",{staticClass:"w3-col s6",class:{"border-blue-app":t.starredOnly}},[n("button",{staticClass:"w3-button",on:{click:function(e){t.viewStarredOnly()}}},[t.starredOnly?n("img",{attrs:{src:i("28c8"),alt:""}}):n("img",{attrs:{src:i("6c8d"),alt:""}})])]),n("div",{staticClass:"w3-col s6 all",class:{"border-blue-app":!t.starredOnly}},[n("button",{staticClass:"w3-button",on:{click:function(e){t.viewAll()}}},[n("b",[t._v(t._s(t.$t("general.ALL")))])])])]):n("div",{staticClass:"w3-row"},[n("h6",{staticClass:"w3-center white-text noselect"},[n("i",[t._v(t._s(t.$t("initiatives.CURRENT_INITIATIVE")))])])]),t.loading?n("div",{staticClass:"w3-row w3-center loader-gif-container"},[n("img",{staticClass:"loader-gif",attrs:{src:i("cf1c"),alt:""}})]):n("div",{staticClass:"initiatives-nav-tree"},[t._l(t.menuInitiatives,function(e,i){return n("app-initiative-menu-item",{key:e.id,staticClass:"top-menu-item",attrs:{initiative:e,coord:[i]},on:{"initiative-selected":function(e){t.$emit("initiative-selected")}}})}),0===t.menuInitiatives.length?n("div",{staticClass:"w3-center"},[t.starredOnly?n("i",[t._v(t._s(t.$t("initiatives.MY_INITS_STARRED_EMPTY")))]):n("i",[t._v(t._s(t.$t("initiatives.MY_INITS_EMPTY")))])]):t._e()],2)])])}),o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"white-text"},[i("div",{staticClass:"w3-row this-element",class:{selected:t.isSelected,"dark-gray-selected":t.isSelected}},[this.level>0?i("div",{staticClass:"space-col",class:t.leftSpaceClass},[t._v("\n      x\n    ")]):t._e(),i("div",{staticClass:"w3-col s2",class:t.bulletClass,on:{click:function(e){t.showSubinitiatives=!t.showSubinitiatives}}},[t.hasSubinitiatives?i("div",[t.showSubinitiatives?i("i",{staticClass:"fa fa-chevron-circle-down",style:{color:t.color},attrs:{"aria-hidden":"true"}}):i("i",{staticClass:"fa fa-chevron-circle-right",style:{color:t.color},attrs:{"aria-hidden":"true"}})]):i("div",[i("i",{staticClass:"fa fa-circle",style:{color:t.color},attrs:{"aria-hidden":"true"}})])]),i("div",{on:{click:function(e){t.$emit("initiative-selected")}}},[i("router-link",{staticClass:"w3-col name-col",class:t.nameSpaceClass,style:t.nameColFontSize,attrs:{to:{name:"Initiative",params:{initiativeId:t.initiative.id}}}},[i("div",{staticClass:"w3-left name-link noselect"},[t._v("\n          "+t._s(t.initiative.meta.name)+"\n        ")])])],1),t.$store.state.user.authenticated?i("div",{staticClass:"notification-div"},[i("app-notifications-list",{attrs:{element:t.initiative,contextType:"INITIATIVE"}})],1):t._e()]),i("div",{class:{"slider-container":t.animatingTab}},[i("transition",{attrs:{name:"slideDownUp"},on:{"before-enter":function(e){t.animatingTab=!0},"after-enter":function(e){t.animatingTab=!1},"before-leave":function(e){t.animatingTab=!0},"after-leave":function(e){t.animatingTab=!1}}},[t.showSubinitiatives?i("div",{staticClass:"sub-initiatives-container"},t._l(t.initiative.subInitiatives,function(e,n){return i("div",{staticClass:"w3-row"},[i("app-initiative-menu-item",{key:e.id,staticClass:"sub-initiative-element",attrs:{initiative:e,coord:t.coord.concat([n])},on:{"initiative-selected":function(e){t.$emit("initiative-selected")}}})],1)})):t._e()])],1)])},c=[],l=i("f868"),u={name:"app-initiative-menu-item",components:{"app-notifications-list":l["a"]},props:{initiative:{type:Object,default:function(){return{name:"",driver:"",subInitiatives:[]}}},coord:{type:Array,default:function(){return[]}}},data:function(){return{showSubinitiatives:!1,animatingTab:!1}},computed:{color:function(){return this.initiative.meta.color},level:function(){return this.coord.length-1},isSelected:function(){return this.initiative.id===this.$route.params.initiativeId},bulletClass:function(){return this.hasSubinitiatives?{"bullet-class":!0,"w3-button":!0}:{"bullet-class":!0,"w3-padding":!0,"l3-color":!0,"line-element":!0}},leftSpaceClass:function(){if(this.level>0){var t="s"+(this.level<5?this.level:5),e={};return e[t]=!0,e["w3-col"]=!0,e}return{}},nameSpaceClass:function(){var t=this.level<5?this.level:5,e="s"+(8-t),i={};return i[e]=!0,i},nameColFontSize:function(){var t=this.level<5?16-this.level:11;return{"font-size":t+"px"}},hasSubinitiatives:function(){return this.initiative.subInitiatives.length>0}},methods:{newSubInitiative:function(){this.$store.commit("showNewSubInitiativeModal",{show:!0,parentId:this.initiative.id})},isLoggedAnAdmin:function(){return"ADMIN"===this.initiative.loggedMembership[0].role}},mounted:function(){var t=this.$store.getters.initiativeCoordinate(this.initiative.id),e=this.$store.getters.initiativeCoordinate(this.$route.params.initiativeId);e.length>0&&t.length>0&&e[this.level]===t[this.level]&&(this.showSubinitiatives=!0)}},d=u,v=(i("46e7"),i("2877")),m=Object(v["a"])(d,r,c,!1,null,"039be91a",null);m.options.__file="InitiativeMenuItem.vue";var h=m.exports,p={components:{"app-initiative-menu-item":h},data:function(){return{}},computed:{loading:function(){return this.$store.state.initiativesTree.loadingMyInitiatives},menuInitiatives:function(){return this.$store.getters.initiativesTree()},starredOnly:function(){return this.$store.state.initiativesTree.starredOnly}},methods:{newInitiative:function(){this.$emit("new-initiative")},login:function(){this.$store.state.user.lock.show()},closeNav:function(){this.$store.commit("toggleExpandNav")},swipeLeft:function(){console.log("swiped left detected"),this.$store.commit("setExpandNav",!1)},viewAll:function(){this.$store.dispatch("viewAllInitiatives")},viewStarredOnly:function(){this.$store.dispatch("viewStarredOnlyInitiatives")}}},f=p,w=(i("3a4b"),Object(v["a"])(f,s,o,!1,null,"82f69c70",null));w.options.__file="InitiativesNav.vue";var b=w.exports,g=i("6f4b"),_={components:{"app-new-initiative-modal":g["a"],"app-initiatives-nav":b},data:function(){return{showContent:!0,showNewInitiativeModal:!1,touchStartX:0,touchStartY:0,enabledClickOutside:!1}},computed:{expandNav:function(){return this.$store.state.support.expandNav},userAuthenticated:function(){return this.$store.state.user.authenticated},windowIsSmall:function(){return this.$store.state.support.windowIsSmall},basePage:function(){return"Initiatives"===this.$route.name}},methods:{initiativeSelected:function(){this.$store.commit("setExpandNav",!1)},touchStart:function(t){this.touchStartX=t.changedTouches[0].clientX,this.touchStartY=t.changedTouches[0].clientY},touchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStartX,i=t.changedTouches[0].clientY-this.touchStartY,n=30;Math.abs(i)<2*n&&(e>n?this.$store.commit("setExpandNav",!0):e<-1*n&&this.$store.commit("setExpandNav",!1))},clickedOutside:function(){this.enabledClickOutside&&this.$store.commit("setExpandNav",!1)}},mounted:function(){this.$store.dispatch("updateMyInitiatives"),window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),console.log("before install available")})}},C=_,E=(i("3115"),Object(v["a"])(C,n,a,!1,null,"42885914",null));E.options.__file="InitiativesView.vue";e["default"]=E.exports},"125f":function(t,e,i){},"28c8":function(t,e,i){t.exports=i.p+"img/star-on.03ae5fac.png"},3115:function(t,e,i){"use strict";var n=i("125f"),a=i.n(n);a.a},"3a4b":function(t,e,i){"use strict";var n=i("8cf2"),a=i.n(n);a.a},"46e7":function(t,e,i){"use strict";var n=i("c9af"),a=i.n(n);a.a},"5cf8":function(t,e,i){},"6c8d":function(t,e,i){t.exports=i.p+"img/star.1913d23f.png"},"6f4b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-modal"},[i("div",{staticClass:"w3-modal-content"},[i("div",{staticClass:"w3-card-4 app-modal-card"},[i("div",{staticClass:"close-div w3-display-topright w3-xlarge",on:{click:function(e){t.closeThis()}}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),i("div",{staticClass:"w3-container w3-border-bottom"},[i("h2",[t._v(t._s(t.$t("initiatives.NEW_INIT_MODAL")))])]),i("div",{staticClass:"w3-container form-container"},[i("br"),i("label",{},[i("b",[t._v(t._s(t.$t("general.NAME"))+" "),i("span",{staticClass:"w3-small error-text"},[t._v("("+t._s(t.$t("general.REQUIRED"))+")")])])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w3-input w3-hover-light-grey",class:{"error-input":t.nameErrorShow},attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),i("app-error-panel",{attrs:{show:t.nameEmptyShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),i("app-error-panel",{attrs:{show:t.nameTooLongShow,message:t.$t("general.FIELD_TOO_LONG")}}),i("br"),i("label",{},[i("b",[t._v(t._s(t.$t("general.DESCRIPTION")))])]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.driver,expression:"driver"}],staticClass:"w3-input w3-border w3-round w3-hover-light-grey",domProps:{value:t.driver},on:{input:function(e){e.target.composing||(t.driver=e.target.value)}}}),i("hr"),i("div",{staticClass:"w3-container assets-selector-div"},[i("div",{staticClass:"w3-row-padding"},[i("div",{staticClass:"w3-col m4"},[i("h5",[i("b",[t._v(t._s(t.$t("initiatives.CREATE_NEW_TOKEN_Q")))])])]),i("div",{staticClass:"w3-col m4"},[i("button",{staticClass:"w3-button transfer-button",class:{"app-button":t.createTokenFlag,"app-button-light":!t.createTokenFlag},attrs:{type:"button",name:"button"},on:{click:function(e){t.createTokenFlag=!0}}},[t._v("\n                "+t._s(t.$t("general.YES"))+"\n              ")])]),i("div",{staticClass:"w3-col m4"},[i("button",{staticClass:"w3-button transfer-button",class:{"app-button":!t.createTokenFlag,"app-button-light":t.createTokenFlag},attrs:{type:"button",name:"button"},on:{click:function(e){t.createTokenFlag=!1}}},[t._v("\n                "+t._s(t.$t("general.NO"))+"\n              ")])])]),i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.createTokenFlag?i("div",{},[i("div",{staticClass:"w3-row-padding"},[i("div",{staticClass:"w3-col m4"},[i("label",{},[i("b",[t._v(t._s(t.$t("tokens.NUMBER_OF_TOKENS")))])]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.ownTokens.ownedByThisHolder,expression:"ownTokens.ownedByThisHolder",modifiers:{number:!0}}],staticClass:"w3-input w3-border w3-hover-light-grey",attrs:{type:"number"},domProps:{value:t.ownTokens.ownedByThisHolder},on:{input:function(e){e.target.composing||t.$set(t.ownTokens,"ownedByThisHolder",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),i("div",{staticClass:"w3-col m4",style:{"margin-bottom":"15px"}},[i("label",{},[i("b",[t._v(t._s(t.$t("tokens.TOKEN_NAME")))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ownTokens.assetName,expression:"ownTokens.assetName"}],staticClass:"w3-input w3-border w3-hover-light-grey",attrs:{type:"text"},domProps:{value:t.ownTokens.assetName},on:{input:function(e){e.target.composing||t.$set(t.ownTokens,"assetName",e.target.value)}}})])]),i("app-error-panel",{attrs:{show:t.tokenNameEmptyShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),i("app-error-panel",{attrs:{show:t.tokenNameTooLong,message:t.$t("general.FIELD_TOO_LONG")}})],1):t._e()])],1)]),i("hr"),i("label",{staticClass:"init-contr-label"},[i("b",[t._v(t._s(t.$t("initiatives.INITIAL_MEMBERS"))+":")])]),i("app-members-table-container",{attrs:{members:t.members,canEdit:!0}}),i("app-error-panel",{attrs:{show:t.membersEmptyShow,message:t.$t("general.FIELD_CANNOT_BE_EMPTY")}}),i("app-error-panel",{attrs:{show:t.noAdmingShow,message:t.$t("initiatives.ONE_ADMIN_ATLEAST")}}),i("hr"),i("div",{staticClass:"bottom-btns-row w3-row-padding"},[i("div",{staticClass:"w3-col m6"},[i("button",{staticClass:"w3-button app-button-light",attrs:{type:"button"},on:{click:function(e){t.closeThis()}}},[t._v(t._s(t.$t("general.CANCEL")))])]),i("div",{staticClass:"w3-col m6"},[i("button",{staticClass:"w3-button app-button",attrs:{type:"button"},on:{click:function(e){t.accept()}}},[t._v(t._s(t.$t("general.ACCEPT")))])])])],1)])])])},a=[],s=i("be94"),o=(i("7f7f"),i("2f62")),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"w3-row"},[i("h4",{},[t._v("Create a new token")])]),i("div",{staticClass:"w3-row-padding new-token-inputs"})])}],l={data:function(){return{tokenName:"tokens",tokens:0,valid:!0}},watch:{tokens:function(){this.emitUpdated()},tokenName:function(){this.emitUpdated()}},methods:{emitUpdated:function(){this.$emit("updated",{tokenName:this.tokenName,tokens:this.tokens})}}},u=l,d=(i("ad7e"),i("2877")),v=Object(d["a"])(u,r,c,!1,null,null,null);v.options.__file="NewToken.vue";var m=v.exports,h=i("f12a"),p=i("bde3"),f={props:{asSubinitiative:{type:Boolean,default:!1},parentInitId:{type:String,default:""}},components:{"app-new-token":m,"app-members-table-container":h["a"]},data:function(){return{parentInitiative:null,name:"",driver:"",ownTokens:{ownedByThisHolder:0,assetName:"tokens"},members:[],nameEmptyError:!1,driverEmptyError:!1,membersEmptyError:!1,noAdminError:!1,tokenNameEmptyError:!1,createTokenFlag:!0}},computed:{nameErrorShow:function(){return this.nameEmptyShow||this.nameTooLongShow},nameEmptyShow:function(){return this.nameEmptyError&&""===this.name},nameTooLongShow:function(){return this.nameTooLong},nameTooLong:function(){return this.name.length>42},tokenNameEmpty:function(){return""===this.ownTokens.assetName},tokenNameEmptyShow:function(){return this.tokenNameEmptyError&&this.tokenNameEmpty},tokenNameTooLong:function(){return this.ownTokens.assetName.length>10},membersEmptyShow:function(){return this.membersEmptyError&&0===this.members.length},noAdmingShow:function(){return this.noAdminError&&!this.oneAdminExist},oneAdminExist:function(){for(var t in this.members)if("ADMIN"===this.members[t].role)return!0;return!1}},watch:{parentId:function(){this.updateParent()}},methods:Object(s["a"])({},Object(o["b"])(["showOutputMessage"]),{tokensString:function(t){return Object(p["g"])(t)},parentAssetsSelected:function(t){this.otherAssetsTransfers=JSON.parse(JSON.stringify(t))},parentInitiativeUpdated:function(t){this.parentInitiative=t},closeThis:function(){this.$emit("close")},accept:function(){var t=this,e=!0;if(""===this.name?(e=!1,this.nameEmptyError=!0):this.nameTooLong&&(e=!1),this.tokenNameEmpty&&(e=!1,this.tokenNameEmptyError=!0),this.tokenNameTooLong&&(e=!1),0===this.members.length&&(e=!1,this.membersEmptyError=!0),this.oneAdminExist||(e=!1,this.noAdminError=!0),e){var i={asSubinitiative:this.asSubinitiative,parentInitiativeId:this.asSubinitiative?this.parentInitiative.id:null,name:this.name,driver:this.driver,members:this.members,createToken:this.createTokenFlag,ownTokens:this.ownTokens};this.axios.post("/1/initiative/create",i).then(function(e){"success"===e.data.result?(t.closeThis(),t.$store.commit("setExpandNav",!1),t.$store.dispatch("updateMyInitiatives"),t.$router.push({name:"Initiative",params:{initiativeId:e.data.elementId}})):t.showOutputMessage(e.data.message)}).catch(function(t){console.log(401===t.response.status)})}},updateParent:function(){var t=this;""!==this.parentInitId&&this.axios.get("/1/initiative/"+this.parentInitId,{params:{addAssets:!0}}).then(function(e){t.parentInitiative=e.data.data})}}),mounted:function(){if(this.$store.state.user.profile){var t={};t.user=this.$store.state.user.profile,t.role="ADMIN",this.members.push(t)}this.updateParent()}},w=f,b=(i("04e7"),Object(d["a"])(w,n,a,!1,null,"6f325ef2",null));b.options.__file="NewInitiativeModal.vue";e["a"]=b.exports},"8cf2":function(t,e,i){},ad7e:function(t,e,i){"use strict";var n=i("5cf8"),a=i.n(n);a.a},be94:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){n(t,e,i[e])})}return t}i.d(e,"a",function(){return a})},c9af:function(t,e,i){},d2fb:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7eefe778.ff358756.js.map