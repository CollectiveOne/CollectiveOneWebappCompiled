(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dafd2cc"],{2035:function(t,e,i){},"247e":function(t,e,i){},"2f21":function(t,e,i){"use strict";var s=i("79e5");t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,i){"use strict";var s=i("5ca1"),n=i("d8e8"),o=i("4bf8"),a=i("79e5"),r=[].sort,c=[1,2,3];s(s.P+s.F*(a(function(){c.sort(void 0)})||!a(function(){c.sort(null)})||!i("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(o(this)):r.call(o(this),n(t))}})},"6d12":function(t,e,i){"use strict";var s=i("e72d"),n=i.n(s);n.a},"7fe8":function(t,e,i){"use strict";var s=i("2035"),n=i.n(s);n.a},"823b":function(t,e,i){"use strict";i.d(e,"a",function(){return n});i("c5f6");var s=function(t,e){var i;return function(){var s=this,n=arguments;clearTimeout(i),i=setTimeout(function(){t.apply(s,n)},e)}},n={props:{id:String,className:String,placeholder:String,resetTrigger:Boolean,init:{type:Object,default:function(){return null}},anchor:{type:String,required:!0},label:String,resetAfterSelect:{type:Boolean,default:!1},debounce:Number,url:{type:String,required:!0},param:{type:String,default:"q"},customParams:Object,min:{type:Number,default:0},process:Function,onInput:Function,onShow:Function,onBlur:Function,onHide:Function,onFocus:Function,onBeforeRequest:Function,onRequestLoaded:Function},data:function(){return{showList:!1,type:"",json:[],focusList:""}},computed:{selected:function(){return""!==this.type&&this.json.length>0?this.json[this.focusList]:null}},watch:{resetTrigger:function(){this.clearInput()}},methods:{clearInput:function(){this.showList=!1,this.type="",this.json=[],this.focusList=""},cleanUp:function(t){return JSON.parse(JSON.stringify(t))},input:function(t){this.showList=!0,this.$emit("input",t),this.onInput&&this.onInput(t),this.debouncedGetData&&this.debounce===this.oldDebounce||(this.oldDebounce=this.debounce,this.debouncedGetData=this.debounce?s(this.getData.bind(this),this.debounce):this.getData),this.debouncedGetData(t)},showAll:function(){this.json=[],this.getData(""),this.onShow&&this.onShow(),this.showList=!0},hideAll:function(t){var e=this;this.onBlur&&this.onBlur(t),setTimeout(function(){e.onHide&&e.onHide(),e.showList=!1},250)},focus:function(t){this.focusList=0,this.onFocus&&this.onFocus(t),this.showAll()},mousemove:function(t){this.focusList=t},keydown:function(t){var e=t.keyCode;if(this.showList){switch(e){case 40:this.focusList++;break;case 38:this.focusList--;break;case 13:this.selectList(this.json[this.focusList]),this.showList=!1;break;case 27:this.showList=!1;break}var i=this.json.length-1;this.focusList=this.focusList>i?0:this.focusList<0?i:this.focusList}},activeClass:function(t){return{"focus-list":t==this.focusList}},selectList:function(t){var e=this.cleanUp(t);this.type=e[this.label],this.showList=!1,this.$emit("select",e)},getData:function(t){var e=this;if(!(t.length<this.min)&&null!=this.url){this.onBeforeRequest&&this.onBeforeRequest(t);var i={};i[this.param]=t,this.axios.get(this.url,{params:i}).then(function(t){e.onRequestLoaded&&e.onRequestLoaded(t.data.data),e.json=e.process?self.process(t.data):t.data.data})}}}}},"9ef8":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"members-table-container"},[t.canEdit?i("div",{staticClass:"new-member-row"},[i("div",{staticClass:"w3-row w3-container"},[i("label",{},[i("b",[t._v(t._s(t.$t("members.ADD_USER"))+":")])])]),i("div",{staticClass:"w3-row user-selector-row"},[i("div",{staticClass:"w3-col m7"},[i("app-user-selector",{staticClass:"user-selector",attrs:{anchor:"c1Id",label:"nickname",resetTrigger:t.resetUserSelector,url:"/1/users/suggestions"},on:{select:function(e){t.userSelected(e)}}})],1),i("div",{staticClass:"w3-col m5"},[i("div",{staticClass:"w3-row-padding"},[i("div",{staticClass:"w3-col s8 w3-center"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.newMember.role,expression:"newMember.role"}],staticClass:"role-select w3-select w3-round",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.newMember,"role",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"",disabled:""}},[t._v(t._s(t.$t("members.CHOOSE_ROLE")))]),i("option",{attrs:{value:"ADMIN"}},[t._v(t._s(t.$t("members.ADMIN")))]),i("option",{attrs:{value:"EDITOR"}},[t._v(t._s(t.$t("members.EDITOR")))]),i("option",{attrs:{value:"MEMBER",selected:""}},[t._v(t._s(t.$t("members.MEMBER")))])])]),i("div",{staticClass:"w3-col s4 w3-center"},[i("button",{staticClass:"add-btn w3-button app-button",attrs:{type:"button"},on:{click:function(e){t.add()}}},[t._v("\n              "+t._s(t.$t("general.ADD"))+"\n            ")])])])])])]):t._e(),i("div",{staticClass:"w3-row table-row"},[i("table",{staticClass:"w3-table w3-striped w3-bordered w3-centered table-element"},[i("thead",[i("tr",[i("th",{staticClass:"avatar-col"},[t._v(t._s(t.$t("members.AVATAR")))]),i("th",[t._v(t._s(t.$t("members.NICKNAME")))]),t._l(t.assets,function(e){return i("th",[t._v(t._s(e.assetName))])}),i("th",{staticClass:"role-col"},[t._v(t._s(t.$t("members.ROLE")))]),t.isLoggedAnAdmin?i("th",[t._v(t._s(t.$t("members.DELETE")))]):t._e(),t.showLeaveCol?i("th",[t._v(t._s(t.$t("members.LEAVE")))]):t._e()],2)]),i("tbody",t._l(t.membersSorted,function(e){return i("tr",[i("td",{staticClass:"avatar-col"},[i("app-user-avatar",{attrs:{user:e.user,showName:!1}})],1),i("td",[t._v(t._s(e.user.nickname))]),t._l(t.assets,function(s){return i("td",[t._v("\n            "+t._s(t.ownedOfThisAsset(s,e))+"\n          ")])}),i("td",{staticClass:"noselect w3-center role-col"},[t.canEdit?i("select",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"member.role"}],staticClass:"role-select w3-select w3-round",on:{change:[function(i){var s=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(e,"role",i.target.multiple?s:s[0])},function(i){t.$emit("role-updated",e)}]}},[i("option",{attrs:{value:"",disabled:""}},[t._v("Choose role")]),i("option",{attrs:{value:"ADMIN"}},[t._v(t._s(t.$t("members.ADMIN")))]),i("option",{attrs:{value:"EDITOR"}},[t._v(t._s(t.$t("members.EDITOR")))]),i("option",{attrs:{value:"MEMBER",selected:""}},[t._v(t._s(t.$t("members.MEMBER")))])]):i("p",[i("span",{staticClass:"role-tag w3-tag w3-round gray-1"},[t._v("\n                "+t._s(e.role?e.role:"MEMBER")+"\n              ")])])]),t.isLoggedAnAdmin?i("td",{attrs:{id:"T_deleteUser"}},[t.removingThisMember(e)?i("div",{},[i("button",{staticClass:"w3-button app-button-light",on:{click:function(e){t.removeMemberCancelled()}}},[t._v("\n                "+t._s(t.$t("general.CANCEL"))+"\n              ")]),i("button",{staticClass:"w3-button app-button-danger",on:{click:function(e){t.removeMemberConfirmed()}}},[t._v("\n                "+t._s(t.$t("general.CONFIRM"))+"\n              ")])]):i("i",{staticClass:"fa fa-times-circle-o w3-xlarge gray-1-color w3-button",attrs:{"aria-hidden":"true"},on:{click:function(i){t.removeMember(e)}}})]):t._e(),t.showLeaveCol?i("td",[t.isLoggedThis(e)&&!t.isLoggedAnAdmin?i("div",[t.leaving?i("div",{},[i("button",{staticClass:"w3-button app-button-light",on:{click:function(e){t.removeMemberCancelled()}}},[t._v("\n                  "+t._s(t.$t("general.CANCEL"))+"\n                ")]),i("button",{staticClass:"w3-button app-button-danger",on:{click:function(e){t.removeMemberConfirmed()}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n                  "+t._s(t.$t("general.CONFIRM"))+"\n                ")])]):i("i",{staticClass:"fa fa-times-circle-o w3-xlarge gray-1-color w3-button",attrs:{"aria-hidden":"true"},on:{click:function(i){t.leave(e)}}})]):t._e()]):t._e()],2)}))])])])},n=[],o=(i("55dd"),i("cadf"),i("551c"),i("097d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-row-padding autocomplete-wrapper"},[null!==t.selected?i("div",{staticClass:"w3-col s2"},[i("div",{staticClass:"w3-cell w3-cell-middle",staticStyle:{width:"30px"}},[i("img",{staticClass:"w3-circle",staticStyle:{width:"35px"},attrs:{src:t.selected.pictureUrl}})])]):t._e(),i("div",{staticClass:"w3-col s10"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"w3-input w3-hover-light-grey autocomplete-inputs",attrs:{type:"text",id:t.id,placeholder:"select user",autocomplete:"off"},domProps:{value:t.type},on:{input:[function(e){e.target.composing||(t.type=e.target.value)},function(e){t.input(t.type)}],dblclick:t.showAll,blur:t.hideAll,keydown:t.keydown,focus:t.focus}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"w3-row",class:(t.className?t.className+"-list ":"")+"autocomplete transition autocomplete-list"},[i("ul",t._l(t.json,function(e,s){return i("li",{class:t.activeClass(s),attrs:{transition:"showAll"}},[i("a",{attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.selectList(e)},mousemove:function(e){t.mousemove(s)}}},[i("app-user-avatar",{attrs:{user:e}})],1)])}))])])}),a=[],r=i("823b"),c={name:"user-selector",mixins:[r["a"]],created:function(){this.json=this.init?[this.init]:[],this.type=this.init?this.init.nickname:""}},l=c,u=(i("ff437"),i("2877")),d=Object(u["a"])(l,o,a,!1,null,"7c6bd752",null);d.options.__file="UserSelector.vue";var h=d.exports,f={components:{"app-user-selector":h},props:{members:Array,canEdit:{type:Boolean,default:!1},assets:{type:Array,default:function(){return[]}}},data:function(){return{newMember:{user:null,role:"MEMBER"},resetUserSelector:!1,memberToBeRemoved:null}},computed:{membersSorted:function(){if(this.assets.length>0){var t=JSON.parse(JSON.stringify(this.members));return t.sort(function(t,e){return e.receivedAssets[0].ownedByThisHolder-t.receivedAssets[0].ownedByThisHolder})}return this.members},isLoggedAnAdmin:function(){return this.$store.getters.isLoggedAnAdmin},isLoggedHere:function(){if(!this.$store.state.user.profile)return!1;for(var t in this.members)if(this.members[t].user.c1Id===this.$store.state.user.profile.c1Id)return!0;return!1},leaving:function(){return!(!this.memberToBeRemoved||!this.$store.state.user.profile)&&this.memberToBeRemoved.user.c1Id===this.$store.state.user.profile.c1Id},showLeaveCol:function(){return this.isLoggedHere&&!this.isLoggedAnAdmin}},methods:{removeMember:function(t){var e=this;setTimeout(function(){e.memberToBeRemoved=t},500)},leave:function(t){var e=this;setTimeout(function(){e.memberToBeRemoved=t},500)},removingThisMember:function(t){return!!this.memberToBeRemoved&&this.memberToBeRemoved.user.c1Id===t.user.c1Id},leaveThisConfirmed:function(){this.$emit("remove",JSON.parse(JSON.stringify(this.memberToBeRemoved))),this.memberToBeRemoved=null},isLoggedThis:function(t){return!!this.$store.state.user.profile&&t.user.c1Id===this.$store.state.user.profile.c1Id},removeMemberCancelled:function(){this.memberToBeRemoved=null},removeMemberConfirmed:function(){this.$emit("remove",JSON.parse(JSON.stringify(this.memberToBeRemoved))),this.memberToBeRemoved=null},add:function(){this.resetUserSelector=!this.resetUserSelector,this.$emit("add",this.newMember)},userSelected:function(t){this.newMember.user=t},ownedOfThisAsset:function(t,e){for(var i in e.receivedAssets)if(e.receivedAssets[i].assetId===t.assetId){var s=e.receivedAssets[i].ownedByThisHolder,n=s/t.totalExistingTokens*100;return s>0?s.toFixed(2)+" / "+n.toFixed(2)+"%":"-"}return"-"}}},m=f,p=(i("6d12"),Object(u["a"])(m,s,n,!1,null,"21bc10a0",null));p.options.__file="MembersTable.vue";e["a"]=p.exports},a205:function(t,e,i){},de07:function(t,e,i){"use strict";var s=i("247e"),n=i.n(s);n.a},e72d:function(t,e,i){},f12a:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("app-members-table",{attrs:{members:t.members,canEdit:t.canEdit},on:{remove:function(e){t.removeMember(e)},"role-updated":function(e){t.roleUpdated(e)},add:function(e){t.addMember(e)}}})],1)},n=[],o=i("9ef8"),a={components:{"app-members-table":o["a"]},props:{members:Array,canEdit:{type:Boolean,default:!1}},methods:{addMember:function(t){var e=this.indexOfMember(t.user.c1Id);-1===e&&this.members.push(JSON.parse(JSON.stringify(t)))},removeMember:function(t){var e=this.indexOfMember(t.user.c1Id);e>-1&&this.members.splice(e,1)},roleUpdated:function(t){var e=this.indexOfMember(t.user.c1Id);e>-1&&(this.members[e].role=t.role)},indexOfMember:function(t){for(var e in this.members)if(this.members[e].user.c1Id===t)return e;return-1}}},r=a,c=(i("7fe8"),i("2877")),l=Object(c["a"])(r,s,n,!1,null,"3ce07bd3",null);l.options.__file="MembersTableContainer.vue";e["a"]=l.exports},f868:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notifications-container"},[s("popper",{attrs:{"append-to-body":!0,trigger:"click",options:t.popperOptions,toggleShow:t.toggleShow}},[s("div",{staticClass:"notifications-list-container w3-white w3-card-4 w3-bar-block noselect w3-topbar border-blue-app"},[s("div",{staticClass:"close-div w3-xlarge cursor-pointer gray-1-color",on:{click:function(e){t.closeThis()}}},[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"w3-row w3-border-bottom notifications-header"},[s("div",{staticClass:"w3-row"},[t._v('\n         Your notifications under "'+t._s(t.elementTitle)+'"\n        ')]),s("div",{staticClass:"w3-row-padding notif-control-row"},[s("div",{staticClass:"w3-col s4",on:{click:function(e){t.showAll()}}},[s("button",{staticClass:"w3-button w3-round",class:{"app-button":t.showingAll,"app-button-light":!t.showingAll}},[t._v("\n              All\n            ")])]),s("div",{staticClass:"w3-col s4",on:{click:function(e){t.showUnreadOnly()}}},[s("button",{staticClass:"w3-button w3-round",class:{"app-button":!t.showingAll,"app-button-light":t.showingAll}},[t._v("\n              "+t._s(t.totalUnread)+" unread\n            ")])]),s("div",{staticClass:"w3-col s4",on:{click:function(e){t.allNotificationsRead()}}},[s("button",{staticClass:"w3-button w3-round app-button-green"},[t._v("\n              mark as "),s("br"),t._v("read\n            ")])])])]),t.loading?s("div",{staticClass:"w3-row w3-center loader-gif-container"},[s("img",{staticClass:"loader-gif",attrs:{src:i("cf1c"),alt:""}})]):s("div",{},[t.activities.length>0?s("app-activity-table",{attrs:{activities:t.activities,addInAppState:!0,fullWidthCard:!0,showCardsPreview:"MODEL_SECTION"===t.contextType||"INITIATIVE"===t.contextType}}):s("div",{staticClass:"w3-padding w3-center"},[s("i",[t._v(t._s(t.$t("general.NO_RESULTS_FOUND")))])])],1),s("div",{staticClass:"w3-row w3-center"},[t.allShown?t._e():s("button",{staticClass:"w3-margin-top w3-margin-bottom w3-button app-button-light",attrs:{type:"button",name:"button"},on:{click:function(e){t.showMore()}}},[t._v("\n          show more...\n        ")])])]),s("div",{staticClass:"icon-button cursor-pointer w3-display-container",attrs:{slot:"reference"},on:{click:function(e){t.showNotificationsClicked()}},slot:"reference"},[0===t.totalUnread?s("span",[s("i",{staticClass:"fa fa-circle-o circle-empty"})]):s("span",[t.onlyNotificationsUnder?s("i",{staticClass:"fa fa-circle-o circle-o"}):s("i",{staticClass:"fa fa-circle circle"})])])])],1)},n=[],o=(i("ac6a"),i("7f7f"),i("c97e")),a={components:{"app-activity-table":o["a"]},props:{element:{type:Object,default:null},contextType:{type:String,default:"MODEL_SECTION"},isSelected:{type:Boolean,default:!1}},data:function(){return{showTable:!1,loading:!1,notifications:[],totalUnread:0,currentPage:0,showingAll:!0,showingMoreNotifications:!1,allShown:!1,toggleShow:!1,subscription:null}},computed:{elementTitle:function(){switch(this.contextType){case"MODEL_CARD":return"this card";case"MODEL_SECTION":return this.element.title;case"INITIATIVE":return this.element.meta.name}return"this element"},contextElementId:function(){return this.element.id},activities:function(){var t=[];return this.notifications.forEach(function(e){var i=e.activity;i.inAppState=e.inAppState,t.push(i)}),t},url:function(){return"/1/notifications/"+this.contextType+"/"+this.contextElementId},triggerUpdateNotifications:function(){return this.$store.state.support.triggerUpdateNotifications},notificationsHere:function(){var t=[];switch(this.contextType){case"MODEL_CARD":for(var e in this.notifications)this.notifications[e].activity.modelCardWrapper&&this.notifications[e].activity.modelCardWrapper.id===this.contextElementId&&t.push(this.notifications[e]);break;case"MODEL_SECTION":for(var i in this.notifications)this.notifications[i].activity.modelSection&&this.notifications[i].activity.modelSection.id===this.contextElementId&&t.push(this.notifications[i]);break;case"INITIATIVE":for(var s in this.notifications)this.notifications[s].activity.initiative&&this.notifications[s].activity.initiative.id===this.contextElementId&&t.push(this.notifications[s])}return t},notificationsHereMessages:function(){return this.notificationsHere.filter(function(t){return"MESSAGE_POSTED"===t.activity.type})},onlyNotificationsUnder:function(){return this.notifications.length>0&&0===this.notificationsHere.length},popperOptions:function(){return{placement:"right",modifiers:{preventOverflow:{enabled:!0,boundariesElement:"viewport"}}}}},watch:{triggerUpdateNotifications:function(){this.notifications.length>0&&(console.log("updating notifications in "+this.url+" due to triggerUpdateNotifications watch"),this.updateNotifications())},"$store.state.socket.connected":function(){this.handleSocket()}},methods:{showAll:function(){this.showingAll=!0,this.updateNotifications()},showUnreadOnly:function(){this.showingAll=!1,this.updateNotifications()},updateNotifications:function(t){var e=this;t=t||!1,this.loading=!0,this.showingMoreNotifications||this.axios.get(this.url,{params:{page:0,size:10,onlyUnread:!this.showingAll}}).then(function(i){e.loading=!1,e.notifications=i.data.data.notifications,e.totalUnread=i.data.data.totalUnread,e.allShown=e.notifications.length<10,t&&e.isSelected&&"ModelSectionMessages"===e.$route.name&&e.messageNotificationsRead(),console.log("pushing notifications "+e.notifications.length+" from "+e.url),e.$store.dispatch("addPushNotifications",e.notifications)}).catch(function(t){console.log(t)})},addNotifications:function(){var t=this;this.showingMoreNotifications=!0,this.axios.get(this.url,{params:{page:this.currentPage,size:10,onlyUnread:!1}}).then(function(e){e.data.data.length<10&&(t.allShown=!0),t.notifications=t.notifications.concat(e.data.data.notifications),t.totalUnread=e.data.data.totalUnread}).catch(function(t){console.log(t)})},allNotificationsRead:function(){var t=this;this.axios.put(this.url+"/read",{}).then(function(e){t.toggleShow=!t.toggleShow,t.$store.commit("triggerUpdateNotifications"),console.log("updating notifications in "+t.url+" due to allNotificationsRead response"),t.updateNotifications(),t.hide()}).catch(function(t){console.log(t)})},messageNotificationsRead:function(){var t=this,e=this.notificationsHereMessages.map(function(t){return t.id});e.length>0&&this.axios.put("/1/notifications/read",e).then(function(e){t.$store.commit("triggerUpdateNotifications"),console.log("updating notifications in "+t.url+" due to messageNotificationsRead response"),t.updateNotifications(!1)}).catch(function(t){console.log(t)})},showMore:function(){this.currentPage+=1,this.addNotifications()},clickOutsideNotifications:function(){this.preventClickOutside||this.showTable&&this.hide()},showNotificationsClicked:function(){var t=this;this.showTable?this.hide():(this.show(),this.preventClickOutside=!0,setTimeout(function(){t.preventClickOutside=!1},500))},hide:function(){this.showTable=!1,this.showingMoreNotifications=!1},show:function(){this.showTable=!0},closeThis:function(){this.toggleShow=!this.toggleShow},handleSocket:function(){var t=this,e="";switch(this.contextType){case"MODEL_CARD":e="/channel/activity/model/card/"+this.contextElementId;break;case"MODEL_SECTION":e="/channel/activity/model/section/"+this.contextElementId;break;case"INITIATIVE":e="/channel/activity/model/initiative/"+this.contextElementId;break}this.subscription=this.$store.dispatch("subscribe",{url:e,onMessage:function(e){var i=e.body;"UPDATE"===i&&(console.log("updating notifications in "+t.url+" due to socket message"),t.updateNotifications(!0))}})}},created:function(){console.log("updating notifications in "+this.url+" due to component creation"),this.updateNotifications(!0),this.handleSocket()},beforeDestroy:function(){this.$store.dispatch("unsubscribe",this.subscription)}},r=a,c=(i("de07"),i("2877")),l=Object(c["a"])(r,s,n,!1,null,"510c259c",null);l.options.__file="NotificationsList.vue";e["a"]=l.exports},ff437:function(t,e,i){"use strict";var s=i("a205"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-1dafd2cc.bf2c14c0.js.map