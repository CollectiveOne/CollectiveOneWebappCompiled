(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eb529ba"],{"2f21":function(e,t,s){"use strict";var i=s("79e5");e.exports=function(e,t){return!!e&&i(function(){t?e.call(null,function(){},1):e.call(null)})}},"42d6":function(e,t,s){},"4af5":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"this-container"},[e.showWantToContribute?s("div",{staticClass:"w3-row w3-center top-button-row"},[s("div",{staticClass:"w3-row"},[s("button",{staticClass:"w3-button app-button",attrs:{type:"button",name:"button"},on:{click:function(t){e.wantToContributeSelected=!e.wantToContributeSelected}}},[e._v("\n        "+e._s(e.$t("members.WANT_TO_CONTRIB_Q"))+"\n      ")])]),s("div",{staticClass:"w3-row w3-margin-top"},[s("div",{staticClass:"slider-container"},[s("transition",{attrs:{name:"slideDownUp"}},[e.wantToContributeSelected?s("div",{staticClass:"w3-row tags-row w3-center"},[s("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[s("p",[e._v(e._s(e.$t("members.WANT_TO_CONTRIB_MSG")))])]),s("button",{staticClass:"w3-button app-button-light button-pair",on:{click:function(t){e.wantToContributeSelected=!1}}},[e._v("\n              "+e._s(e.$t("general.CANCEL"))+"\n            ")]),s("button",{staticClass:"w3-button app-button button-pair",on:{click:function(t){e.wantToContribute()}}},[e._v("\n              "+e._s(e.$t("general.CONFIRM"))+"\n            ")])]):e._e()])],1)])]):e._e(),s("app-error-panel",{attrs:{show:e.requestSent,message:e.$t("members.ADMINS_NOTIFIED"),panelType:"success"}}),s("app-error-panel",{attrs:{show:e.userAdded,message:e.$t("members.USER_ADDED_SUCCESS"),panelType:"success"}}),s("app-error-panel",{attrs:{show:e.requestError,message:e.$t("members.ERROR_NOTIFYING")}}),s("div",{staticClass:"w3-row own-members-div"},[s("h3",{staticClass:"section-header"},[e._v(" "+e._s(e.$t("members.MEMBERS_OF",{title:e.initiative.meta.name}))+":")]),s("app-members-table",{attrs:{members:e.initiative.initiativeMembers.members,canEdit:e.isLoggedAnAdmin||e.isLoggedAParentAdmin,assets:e.initiative.assets},on:{remove:function(t){e.removeMember(t)},"role-updated":function(t){e.roleUpdated(t)},add:function(t){e.addMember(t)}}}),e.noOtherAdminError?s("div",{staticClass:"w3-row w3-tag error-panel error-row w3-round"},[e._v("\n      "+e._s(e.$t("initiatives.ONE_ADMIN_ATLEAST"))+"\n    ")]):e._e()],1),s("br"),e.allSubmembers.length>0?s("div",{staticClass:"sub-members-div"},[s("hr"),s("h3",{staticClass:"section-header"},[e._v(e._s(e.$t("members.MEMBERS_OF_SUBS",{title:e.initiative.meta.name}))+":")]),s("app-submembers-table",{attrs:{submembers:e.allSubmembers,assets:e.initiative.assets}})],1):e._e()],1)},n=[],r=s("be94"),o=(s("7f7f"),s("ac6a"),s("2f62")),a=s("9ef8"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"submembers-table "},[e.submembers.length>0?s("table",{staticClass:"w3-table w3-striped w3-bordered w3-centered table-element"},[s("thead",[s("tr",[s("th",{staticClass:"avatar-col"},[e._v(e._s(e.$t("members.AVATAR")))]),s("th",[e._v(e._s(e.$t("members.NICKNAME")))]),e._l(e.assets,function(t){return s("th",[e._v(e._s(t.assetName))])}),s("th",{staticClass:"subinitiatives-col"},[e._v(e._s(e.$t("initiatives.SUBINITIATIVES")))])],2)]),s("tbody",e._l(e.submembersSorted,function(t){return s("tr",[s("td",{staticClass:"avatar-col"},[s("app-user-avatar",{attrs:{user:t.user,showName:!1}})],1),s("td",[e._v(e._s(t.user.nickname))]),e._l(e.assets,function(i){return s("td",[e._v("\n          "+e._s(e.ownedOfThisAsset(i,t))+"\n        ")])}),s("td",e._l(t.subinitiatives,function(t){return s("router-link",{key:t.id,staticClass:"subinitiative-tag w3-tag w3-round-large cursor-pointer noselect",style:{"background-color":e.$store.getters.colorOfInitiative(t.id)},attrs:{to:{name:"Initiative",params:{initiativeId:t.id}}}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))],2)}))]):e._e()])},c=[],l=(s("55dd"),s("cadf"),s("551c"),s("097d"),{props:{submembers:Array,assets:{type:Array,default:function(){return[]}}},computed:{submembersSorted:function(){var e=JSON.parse(JSON.stringify(this.submembers));return e.sort(function(e,t){return void 0!==t.receivedAssets[0]&&void 0!==e.receivedAssets[0]?e.receivedAssets[0].ownedByThisHolder?t.receivedAssets[0].ownedByThisHolder-e.receivedAssets[0].ownedByThisHolder:1:0})}},methods:{ownedOfThisAsset:function(e,t){for(var s in t.receivedAssets)if(t.receivedAssets[s].assetId===e.assetId){var i=t.receivedAssets[s].ownedByThisHolder,n=i/e.totalExistingTokens*100;return i>0?i.toFixed(2)+" / "+n.toFixed(2)+"%":"-"}return"-"}}}),d=l,m=(s("9349"),s("2877")),h=Object(m["a"])(d,u,c,!1,null,"040bdf38",null);h.options.__file="SubmembersTable.vue";var v=h.exports,b=function(e,t){for(var s in e)if(e[s].user.c1Id===t)return s;return-1},f=function e(t,s){for(var i in s=s||[],t.members.forEach(function(e){var i={name:t.initiativeName,id:t.initiativeId},n=b(s,e.user.c1Id);-1===n?s.push({user:e.user,subinitiatives:[i],receivedAssets:e.receivedAssets}):s[n].subinitiatives.push(i)}),t.subinitiativesMembers)e(t.subinitiativesMembers[i],s)},p=function(e){var t=[];return e.subinitiativesMembers.forEach(function(e){f(e,t)}),t},w={components:{"app-members-table":a["a"],"app-submembers-table":v},data:function(){return{noOtherAdminError:!1,wantToContributeSelected:!1,userAdded:!1,requestSent:!1,requestError:!1}},computed:{initiative:function(){return this.$store.state.initiative.initiative},isLoggedAnAdmin:function(){return this.$store.getters.isLoggedAnAdmin},isLoggedAParentAdmin:function(){return this.$store.getters.isLoggedAParentAdmin},isLoggedAMember:function(){return this.$store.getters.isLoggedAMember},allSubmembers:function(){return p(this.initiative.initiativeMembers)},showWantToContribute:function(){return this.$store.state.user.authenticated&&!this.isLoggedAMember&&!this.isLoggedAParentAdmin&&!this.requestSent},addMemberLink:function(){for(var e in this.$route.matched){var t=this.$route.matched[e];if("InitiativePeopleAddMember"===t.name)return!0}return!1}},methods:Object(r["a"])({},Object(o["b"])(["showOutputMessage"]),{wantToContribute:function(){var e=this;this.wantToContributeSelected=!1,this.axios.post("/1/initiative/"+this.initiative.id+"/wantToContribute").then(function(t){"success"===t.data.result?e.requestSent=!0:e.requestError=!0}).catch(function(){e.requestError=!0})},addMember:function(e){var t=this,s=this.indexOfMember(e.user.c1Id);e.initiativeId=this.initiative.id,-1===s?this.axios.post("/1/initiative/"+this.initiative.id+"/member",e).then(function(e){"success"===e.data.result?t.$store.dispatch("refreshInitiative"):t.showOutputMessage(e.data.message)}):this.showOutputMessage("user has been already included"),this.userAdded=!0,setTimeout(function(){t.userAdded=!1},3e3)},removeMember:function(e){var t=this,s=this.indexOfMember(e.user.c1Id);s>-1&&this.axios.delete("/1/initiative/"+this.initiative.id+"/member/"+e.user.c1Id).then(function(e){"success"===e.data.result?t.$store.dispatch("refreshInitiative"):t.showOutputMessage(e.data.message)})},roleUpdated:function(e){var t=this,s=this.indexOfMember(e.user.c1Id);if(s>-1){var i=!1;for(var n in this.initiative.initiativeMembers.members)n!==s&&"ADMIN"===this.initiative.initiativeMembers.members[n].role&&(i=!0);i?this.axios.put("/1/initiative/"+this.initiative.id+"/member/"+e.user.c1Id,e).then(function(e){"success"===e.data.result?t.$store.dispatch("refreshInitiative"):t.showOutputMessage(e.data.message)}):(this.noOtherAdminError=!0,this.initiative.initiativeMembers.members[s].role="ADMIN",setTimeout(function(){t.noOtherAdminError=!1},2e3))}},indexOfMember:function(e){for(var t in this.initiative.initiativeMembers.members)if(this.initiative.initiativeMembers.members[t].user.c1Id===e)return t;return-1}}),mounted:function(){if(this.addMemberLink){var e={user:{c1Id:this.$route.params.userId,role:"MEMBER"}};this.addMember(e)}}},g=w,_=(s("ac81"),Object(m["a"])(g,i,n,!1,null,"b82d3f4e",null));_.options.__file="PeopleSection.vue";t["default"]=_.exports},"55dd":function(e,t,s){"use strict";var i=s("5ca1"),n=s("d8e8"),r=s("4bf8"),o=s("79e5"),a=[].sort,u=[1,2,3];i(i.P+i.F*(o(function(){u.sort(void 0)})||!o(function(){u.sort(null)})||!s("2f21")(a)),"Array",{sort:function(e){return void 0===e?a.call(r(this)):a.call(r(this),n(e))}})},"6adb":function(e,t,s){},"6d12":function(e,t,s){"use strict";var i=s("e72d"),n=s.n(i);n.a},"823b":function(e,t,s){"use strict";s.d(t,"a",function(){return n});s("c5f6");var i=function(e,t){var s;return function(){var i=this,n=arguments;clearTimeout(s),s=setTimeout(function(){e.apply(i,n)},t)}},n={props:{id:String,className:String,placeholder:String,resetTrigger:Boolean,init:{type:Object,default:function(){return null}},anchor:{type:String,required:!0},label:String,resetAfterSelect:{type:Boolean,default:!1},debounce:Number,url:{type:String,required:!0},param:{type:String,default:"q"},customParams:Object,min:{type:Number,default:0},process:Function,onInput:Function,onShow:Function,onBlur:Function,onHide:Function,onFocus:Function,onBeforeRequest:Function,onRequestLoaded:Function},data:function(){return{showList:!1,type:"",json:[],focusList:""}},computed:{selected:function(){return""!==this.type&&this.json.length>0?this.json[this.focusList]:null}},watch:{resetTrigger:function(){this.clearInput()}},methods:{clearInput:function(){this.showList=!1,this.type="",this.json=[],this.focusList=""},cleanUp:function(e){return JSON.parse(JSON.stringify(e))},input:function(e){this.showList=!0,this.$emit("input",e),this.onInput&&this.onInput(e),this.debouncedGetData&&this.debounce===this.oldDebounce||(this.oldDebounce=this.debounce,this.debouncedGetData=this.debounce?i(this.getData.bind(this),this.debounce):this.getData),this.debouncedGetData(e)},showAll:function(){this.json=[],this.getData(""),this.onShow&&this.onShow(),this.showList=!0},hideAll:function(e){var t=this;this.onBlur&&this.onBlur(e),setTimeout(function(){t.onHide&&t.onHide(),t.showList=!1},250)},focus:function(e){this.focusList=0,this.onFocus&&this.onFocus(e),this.showAll()},mousemove:function(e){this.focusList=e},keydown:function(e){var t=e.keyCode;if(this.showList){switch(t){case 40:this.focusList++;break;case 38:this.focusList--;break;case 13:this.selectList(this.json[this.focusList]),this.showList=!1;break;case 27:this.showList=!1;break}var s=this.json.length-1;this.focusList=this.focusList>s?0:this.focusList<0?s:this.focusList}},activeClass:function(e){return{"focus-list":e==this.focusList}},selectList:function(e){var t=this.cleanUp(e);this.type=t[this.label],this.showList=!1,this.$emit("select",t)},getData:function(e){var t=this;if(!(e.length<this.min)&&null!=this.url){this.onBeforeRequest&&this.onBeforeRequest(e);var s={};s[this.param]=e,this.axios.get(this.url,{params:s}).then(function(e){t.onRequestLoaded&&t.onRequestLoaded(e.data.data),t.json=t.process?self.process(e.data):e.data.data})}}}}},9349:function(e,t,s){"use strict";var i=s("42d6"),n=s.n(i);n.a},"9ef8":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"members-table-container"},[e.canEdit?s("div",{staticClass:"new-member-row"},[s("div",{staticClass:"w3-row w3-container"},[s("label",{},[s("b",[e._v(e._s(e.$t("members.ADD_USER"))+":")])])]),s("div",{staticClass:"w3-row user-selector-row"},[s("div",{staticClass:"w3-col m7"},[s("app-user-selector",{staticClass:"user-selector",attrs:{anchor:"c1Id",label:"nickname",resetTrigger:e.resetUserSelector,url:"/1/users/suggestions"},on:{select:function(t){e.userSelected(t)}}})],1),s("div",{staticClass:"w3-col m5"},[s("div",{staticClass:"w3-row-padding"},[s("div",{staticClass:"w3-col s8 w3-center"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.newMember.role,expression:"newMember.role"}],staticClass:"role-select w3-select w3-round",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.newMember,"role",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:""}},[e._v(e._s(e.$t("members.CHOOSE_ROLE")))]),s("option",{attrs:{value:"ADMIN"}},[e._v(e._s(e.$t("members.ADMIN")))]),s("option",{attrs:{value:"EDITOR"}},[e._v(e._s(e.$t("members.EDITOR")))]),s("option",{attrs:{value:"MEMBER",selected:""}},[e._v(e._s(e.$t("members.MEMBER")))])])]),s("div",{staticClass:"w3-col s4 w3-center"},[s("button",{staticClass:"add-btn w3-button app-button",attrs:{type:"button"},on:{click:function(t){e.add()}}},[e._v("\n              "+e._s(e.$t("general.ADD"))+"\n            ")])])])])])]):e._e(),s("div",{staticClass:"w3-row table-row"},[s("table",{staticClass:"w3-table w3-striped w3-bordered w3-centered table-element"},[s("thead",[s("tr",[s("th",{staticClass:"avatar-col"},[e._v(e._s(e.$t("members.AVATAR")))]),s("th",[e._v(e._s(e.$t("members.NICKNAME")))]),e._l(e.assets,function(t){return s("th",[e._v(e._s(t.assetName))])}),s("th",{staticClass:"role-col"},[e._v(e._s(e.$t("members.ROLE")))]),e.isLoggedAnAdmin?s("th",[e._v(e._s(e.$t("members.DELETE")))]):e._e(),e.showLeaveCol?s("th",[e._v(e._s(e.$t("members.LEAVE")))]):e._e()],2)]),s("tbody",e._l(e.membersSorted,function(t){return s("tr",[s("td",{staticClass:"avatar-col"},[s("app-user-avatar",{attrs:{user:t.user,showName:!1}})],1),s("td",[e._v(e._s(t.user.nickname))]),e._l(e.assets,function(i){return s("td",[e._v("\n            "+e._s(e.ownedOfThisAsset(i,t))+"\n          ")])}),s("td",{staticClass:"noselect w3-center role-col"},[e.canEdit?s("select",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"member.role"}],staticClass:"role-select w3-select w3-round",on:{change:[function(s){var i=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(t,"role",s.target.multiple?i:i[0])},function(s){e.$emit("role-updated",t)}]}},[s("option",{attrs:{value:"",disabled:""}},[e._v("Choose role")]),s("option",{attrs:{value:"ADMIN"}},[e._v(e._s(e.$t("members.ADMIN")))]),s("option",{attrs:{value:"EDITOR"}},[e._v(e._s(e.$t("members.EDITOR")))]),s("option",{attrs:{value:"MEMBER",selected:""}},[e._v(e._s(e.$t("members.MEMBER")))])]):s("p",[s("span",{staticClass:"role-tag w3-tag w3-round gray-1"},[e._v("\n                "+e._s(t.role?t.role:"MEMBER")+"\n              ")])])]),e.isLoggedAnAdmin?s("td",{attrs:{id:"T_deleteUser"}},[e.removingThisMember(t)?s("div",{},[s("button",{staticClass:"w3-button app-button-light",on:{click:function(t){e.removeMemberCancelled()}}},[e._v("\n                "+e._s(e.$t("general.CANCEL"))+"\n              ")]),s("button",{staticClass:"w3-button app-button-danger",on:{click:function(t){e.removeMemberConfirmed()}}},[e._v("\n                "+e._s(e.$t("general.CONFIRM"))+"\n              ")])]):s("i",{staticClass:"fa fa-times-circle-o w3-xlarge gray-1-color w3-button",attrs:{"aria-hidden":"true"},on:{click:function(s){e.removeMember(t)}}})]):e._e(),e.showLeaveCol?s("td",[e.isLoggedThis(t)&&!e.isLoggedAnAdmin?s("div",[e.leaving?s("div",{},[s("button",{staticClass:"w3-button app-button-light",on:{click:function(t){e.removeMemberCancelled()}}},[e._v("\n                  "+e._s(e.$t("general.CANCEL"))+"\n                ")]),s("button",{staticClass:"w3-button app-button-danger",on:{click:function(t){e.removeMemberConfirmed()}}},[e._v(e._s(e.$t("general.CANCEL"))+"\n                  "+e._s(e.$t("general.CONFIRM"))+"\n                ")])]):s("i",{staticClass:"fa fa-times-circle-o w3-xlarge gray-1-color w3-button",attrs:{"aria-hidden":"true"},on:{click:function(s){e.leave(t)}}})]):e._e()]):e._e()],2)}))])])])},n=[],r=(s("55dd"),s("cadf"),s("551c"),s("097d"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"w3-row-padding autocomplete-wrapper"},[null!==e.selected?s("div",{staticClass:"w3-col s2"},[s("div",{staticClass:"w3-cell w3-cell-middle",staticStyle:{width:"30px"}},[s("img",{staticClass:"w3-circle",staticStyle:{width:"35px"},attrs:{src:e.selected.pictureUrl}})])]):e._e(),s("div",{staticClass:"w3-col s10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"w3-input w3-hover-light-grey autocomplete-inputs",attrs:{type:"text",id:e.id,placeholder:"select user",autocomplete:"off"},domProps:{value:e.type},on:{input:[function(t){t.target.composing||(e.type=t.target.value)},function(t){e.input(e.type)}],dblclick:e.showAll,blur:e.hideAll,keydown:e.keydown,focus:e.focus}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],staticClass:"w3-row",class:(e.className?e.className+"-list ":"")+"autocomplete transition autocomplete-list"},[s("ul",e._l(e.json,function(t,i){return s("li",{class:e.activeClass(i),attrs:{transition:"showAll"}},[s("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),e.selectList(t)},mousemove:function(t){e.mousemove(i)}}},[s("app-user-avatar",{attrs:{user:t}})],1)])}))])])}),o=[],a=s("823b"),u={name:"user-selector",mixins:[a["a"]],created:function(){this.json=this.init?[this.init]:[],this.type=this.init?this.init.nickname:""}},c=u,l=(s("ff437"),s("2877")),d=Object(l["a"])(c,r,o,!1,null,"7c6bd752",null);d.options.__file="UserSelector.vue";var m=d.exports,h={components:{"app-user-selector":m},props:{members:Array,canEdit:{type:Boolean,default:!1},assets:{type:Array,default:function(){return[]}}},data:function(){return{newMember:{user:null,role:"MEMBER"},resetUserSelector:!1,memberToBeRemoved:null}},computed:{membersSorted:function(){if(this.assets.length>0){var e=JSON.parse(JSON.stringify(this.members));return e.sort(function(e,t){return t.receivedAssets[0].ownedByThisHolder-e.receivedAssets[0].ownedByThisHolder})}return this.members},isLoggedAnAdmin:function(){return this.$store.getters.isLoggedAnAdmin},isLoggedHere:function(){if(!this.$store.state.user.profile)return!1;for(var e in this.members)if(this.members[e].user.c1Id===this.$store.state.user.profile.c1Id)return!0;return!1},leaving:function(){return!(!this.memberToBeRemoved||!this.$store.state.user.profile)&&this.memberToBeRemoved.user.c1Id===this.$store.state.user.profile.c1Id},showLeaveCol:function(){return this.isLoggedHere&&!this.isLoggedAnAdmin}},methods:{removeMember:function(e){var t=this;setTimeout(function(){t.memberToBeRemoved=e},500)},leave:function(e){var t=this;setTimeout(function(){t.memberToBeRemoved=e},500)},removingThisMember:function(e){return!!this.memberToBeRemoved&&this.memberToBeRemoved.user.c1Id===e.user.c1Id},leaveThisConfirmed:function(){this.$emit("remove",JSON.parse(JSON.stringify(this.memberToBeRemoved))),this.memberToBeRemoved=null},isLoggedThis:function(e){return!!this.$store.state.user.profile&&e.user.c1Id===this.$store.state.user.profile.c1Id},removeMemberCancelled:function(){this.memberToBeRemoved=null},removeMemberConfirmed:function(){this.$emit("remove",JSON.parse(JSON.stringify(this.memberToBeRemoved))),this.memberToBeRemoved=null},add:function(){this.resetUserSelector=!this.resetUserSelector,this.$emit("add",this.newMember)},userSelected:function(e){this.newMember.user=e},ownedOfThisAsset:function(e,t){for(var s in t.receivedAssets)if(t.receivedAssets[s].assetId===e.assetId){var i=t.receivedAssets[s].ownedByThisHolder,n=i/e.totalExistingTokens*100;return i>0?i.toFixed(2)+" / "+n.toFixed(2)+"%":"-"}return"-"}}},v=h,b=(s("6d12"),Object(l["a"])(v,i,n,!1,null,"21bc10a0",null));b.options.__file="MembersTable.vue";t["a"]=b.exports},a205:function(e,t,s){},ac81:function(e,t,s){"use strict";var i=s("6adb"),n=s.n(i);n.a},be94:function(e,t,s){"use strict";function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){i(e,t,s[t])})}return e}s.d(t,"a",function(){return n})},e72d:function(e,t,s){},ff437:function(e,t,s){"use strict";var i=s("a205"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-1eb529ba.0607313c.js.map