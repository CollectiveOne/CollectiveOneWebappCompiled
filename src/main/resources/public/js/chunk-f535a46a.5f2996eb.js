(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f535a46a"],{"30c1":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"this-container"},[s("div",{staticClass:"w3-row sub-initiative-first-row"},[s("div",{staticClass:"w3-left"},[s("h5",{staticClass:"w3-left"},[s("b",[t._v(t._s(t.$t("tokens.TRANSFER_FROM",{initName:t.initiativeName})))])])])]),t.assets.length>0?s("div",{staticClass:"w3-row assigner-div"},[t.showSelector?s("div",{},[s("div",{staticClass:"w3-row"},[s("label",{attrs:{for:""}},[s("b",[t._v(t._s(t.$t("tokens.TOKEN_TO_TRANSFER")))])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.assetIdSelected,expression:"assetIdSelected"}],staticClass:"w3-input",attrs:{name:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.assetIdSelected=e.target.multiple?s:s[0]}}},t._l(t.assets,function(e){return s("option",{domProps:{value:e.assetId}},[t._v(t._s(e.assetName))])}))]),s("br"),s("div",{staticClass:"w3-row"},[s("app-asset-distribution-chart",{attrs:{assetId:t.assetIdSelected,initiativeId:t.initiativeId,type:t.type,triggerReset:t.triggerReset,showError:t.showError},on:{assigned:function(e){t.newAssignment(e)}}})],1)]):s("div",{staticClass:"slider-container"},[s("transition-group",{attrs:{name:"fadeenter",mode:"out-in"}},t._l(t.assets,function(e,i){return s("div",{key:e.assetId},[i>0?s("hr"):t._e(),s("app-asset-distribution-chart",{attrs:{assetId:e.assetId,initiativeId:t.initiativeId,type:t.type,triggerReset:t.triggerReset,showError:t.showError},on:{assigned:function(e){t.newAssignment(e)}}})],1)}))],1)]):s("div",{staticClass:"w3-center w3-row"},[s("i",[t._v(t._s(t.$t("tokens.NO_ASSETS_IN_PARENT")))])])])},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"autocomplete-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"w3-input w3-hover-light-grey autocomplete-inputs",attrs:{type:"text",id:t.id,placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.type},on:{input:[function(e){e.target.composing||(t.type=e.target.value)},function(e){t.input(t.type)}],dblclick:t.showAll,blur:t.hideAll,keydown:t.keydown,focus:t.focus}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],class:(t.className?t.className+"-list ":"")+"autocomplete transition autocomplete-list"},[s("ul",t._l(t.json,function(e,i){return s("li",{class:t.activeClass(i),attrs:{transition:"showAll"}},[s("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.selectList(e)},mousemove:function(e){t.mousemove(i)}}},[s("span",[t._v(t._s(e.meta.name)+", created by "+t._s(e.creator.nickname))])])])}))])])},r=[],o=(s("7f7f"),s("c5f6"),s("cadf"),s("551c"),s("097d"),function(t,e){var s;return function(){var i=this,a=arguments;clearTimeout(s),s=setTimeout(function(){t.apply(i,a)},e)}}),c={props:{id:String,className:String,placeholder:String,resetTrigger:Boolean,init:{type:Object,default:function(){return null}},anchor:{type:String,required:!0},label:String,resetAfterSelect:{type:Boolean,default:!1},debounce:Number,url:{type:String,required:!0},param:{type:String,default:"q"},customParams:Object,min:{type:Number,default:0},process:Function,onInput:Function,onShow:Function,onBlur:Function,onHide:Function,onFocus:Function,onBeforeRequest:Function,onRequestLoaded:Function},data:function(){return{showList:!1,type:"",json:[],focusList:""}},computed:{selected:function(){return""!==this.type&&this.json.length>0?this.json[this.focusList]:null}},watch:{resetTrigger:function(){this.clearInput()}},methods:{clearInput:function(){this.showList=!1,this.type="",this.json=[],this.focusList=""},cleanUp:function(t){return JSON.parse(JSON.stringify(t))},input:function(t){this.json.length>0?this.showList=!0:this.hideAll(),this.onInput&&this.onInput(t),this.debouncedGetData&&this.debounce===this.oldDebounce||(this.oldDebounce=this.debounce,this.debouncedGetData=this.debounce?o(this.getData.bind(this),this.debounce):this.getData),this.debouncedGetData(t)},showAll:function(){this.json=[],this.getData(""),this.onShow&&this.onShow(),this.showList=!0},hideAll:function(t){var e=this;this.onBlur&&this.onBlur(t),setTimeout(function(){e.onHide&&e.onHide(),e.showList=!1},250)},focus:function(t){this.focusList=0,this.onFocus&&this.onFocus(t),this.showAll()},mousemove:function(t){this.focusList=t},keydown:function(t){var e=t.keyCode;if(this.showList){switch(e){case 40:this.focusList++;break;case 38:this.focusList--;break;case 13:this.selectList(this.json[this.focusList]),this.showList=!1;break;case 27:this.showList=!1;break}var s=this.json.length-1;this.focusList=this.focusList>s?0:this.focusList<0?s:this.focusList}},activeClass:function(t){return{"focus-list":t===this.focusList}},selectList:function(t){var e=this.cleanUp(t);this.type=e.meta.name,this.showList=!1,this.$emit("select",e)},getData:function(t){var e=this;if(!(t.length<this.min)&&null!=this.url){this.onBeforeRequest&&this.onBeforeRequest(t);var s={};s[this.param]=t,this.axios.get(this.url,{params:s}).then(function(t){e.onRequestLoaded&&e.onRequestLoaded(t.data.data),e.json=e.process?self.process(t.data):t.data.data})}}},created:function(){this.json=this.init?[this.init]:[],this.type=this.init?this.init.meta.name:""}},l=c,u=(s("b780"),s("2877")),d=Object(u["a"])(l,n,r,!1,null,"a0872bf0",null);d.options.__file="InitiativeSelector.vue";var h=d.exports,v=s("3781"),w={components:{"app-initiative-selector":h,"app-asset-distribution-chart":v["a"]},props:{initiativeId:{type:String},initiativeName:{type:String},assetId:{type:String,default:""},type:{type:String,default:"initiative-assigner"},showSelector:{type:Boolean,default:!1},showError:{type:Boolean,default:!1}},data:function(){return{assets:[],assetsTransfers:[],assetIdSelected:"",triggerReset:!1}},watch:{assetIdSelected:function(){this.showSelector&&(this.assetsTransfers=[],this.triggerReset=!this.triggerReset,this.$emit("updated",this.assetsTransfers))}},methods:{updateAssets:function(){var t=this;this.axios.get("/1/initiative/"+this.initiativeId,{params:{addAssetsIds:!0}}).then(function(e){t.assets=e.data.data.assets,""===t.assetIdSelected&&t.assets.length>0&&(t.assetIdSelected=t.assets[0].assetId)})},indexOfAsset:function(t){for(var e in this.assetsTransfers)if(this.assetsTransfers[e].assetId===t)return e;return-1},newAssignment:function(t){var e=JSON.parse(JSON.stringify(t)),s=this.indexOfAsset(t.assetId);-1===s?this.assetsTransfers.push(e):this.assetsTransfers[s]=e,this.$emit("updated",this.assetsTransfers)}},mounted:function(){""!==this.assetId&&(this.assetIdSelected=this.assetId),this.updateAssets()}},f=w,p=(s("6773"),Object(u["a"])(f,i,a,!1,null,"e4cba2e6",null));p.options.__file="InitiativeAssetsAssigner.vue";e["a"]=p.exports},3781:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("transition",{attrs:{name:"slideDownUp"}},[t.showNewTokenMintModal?i("app-token-edit-modal",{attrs:{assetId:t.assetId,actionInit:t.tokenAction,initiativeId:t.initiativeId},on:{close:function(e){t.showNewTokenMintModal=!1}}}):t._e()],1),t.assetData?i("div",{staticClass:"this-container"},[i("div",{staticClass:"w3-row"},[i("div",{staticClass:"w3-col distribution-container",class:{l8:t.showAssigner,l12:!t.showAssigner}},[i("div",{staticClass:"w3-row-padding"},[i("div",{staticClass:"w3-col l4 w3-center"},[i("div",{staticClass:"summary-container",attrs:{class:"summary-container"}},[i("div",{staticClass:"w3-row",staticStyle:{width:"100%"}},[i("div",{staticClass:"w3-row tokens-row"},[t._v("\n                  "+t._s(t.underThisInitiativeStr)+" "+t._s(t.assetData.assetName)+"\n                ")]),i("div",{staticClass:"w3-row percentage-row"},[t._v("\n                  "+t._s(t.underThisInitiativePercent)+"% "+t._s(t.$t("tokens.OF_EXISTING"))+"\n                ")]),t.isDeleted?i("div",{staticClass:"w3-row w3-margin-top"},[i("div",{staticClass:"w3-row error-panel"},[t._v("\n                    "+t._s(t.assetData.status)+"\n                  ")]),i("div",{staticClass:"w3-row -w3-margin-top"},[i("button",{staticClass:"w3-button app-button",on:{click:function(e){t.restoreToken()}}},[t._v(t._s(t.$t("tokens.RESTORE")))])])]):t._e()]),t.canEdit&&t.canMint&&!t.isDeleted?i("div",{staticClass:"token-controls"},[i("div",{staticClass:"btns-container w3-row"},[i("div",{staticClass:"control-btn w3-left",on:{click:function(e){t.mintClicked()}}},[i("img",{attrs:{src:s("c739"),alt:""}})]),i("div",{staticClass:"control-btn w3-left",on:{click:function(e){t.burnClicked()}}},[i("img",{attrs:{src:s("f25a"),alt:""}})]),i("div",{staticClass:"control-btn w3-left",on:{click:function(e){t.deleteIntent=!0}}},[i("img",{attrs:{src:s("c637"),alt:""}})])]),t.deleteIntent?i("div",{staticClass:"w3-row w3-center w3-margin-top"},[i("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[i("p",{domProps:{innerHTML:t._s(t.$t("tokens.DELETE_TOKEN_WARNING",{tokenName:t.assetData.assetName}))}})]),i("button",{staticClass:"w3-button light-grey",on:{click:function(e){t.deleteIntent=!1}}},[t._v(t._s(t.$t("general.CANCEL"))+"\n                  ")]),i("button",{staticClass:"w3-button danger-btn",on:{click:function(e){t.deleteConfirmed()}}},[t._v(t._s(t.$t("general.CONFIRM"))+"\n                  ")])]):t._e()]):t._e()])]),i("div",{staticClass:"w3-col l8"},[i("div",{staticClass:"w3-row w3-margin-bottom"},[i("label",{},[i("b",[t._v(t._s(t.$t("tokens.STILL_AVAILABLE")))])]),i("div",{staticClass:"light-grey w3-round-xlarge w3-large"},[i("div",{staticClass:"app-blue w3-container w3-center w3-round-xlarge",style:{width:t.availableToThisInitiativePercent+"%"}},[i("div",{staticClass:"bar-txt w3-center noselect"},[t._v(t._s(t.availableToThisInitiative))])])])]),t.hasPending?i("div",{staticClass:"w3-row w3-margin-bottom"},[i("label",{},[i("b",[t._v(t._s(t.$t("tokens.UNDER_PENDING_PR")))])]),i("div",{staticClass:"light-grey w3-round-xlarge w3-large"},[i("div",{staticClass:"app-blue w3-container w3-center w3-round-xlarge",style:{width:t.pendingTransfersPercent+"%"}},[i("div",{staticClass:"bar-txt w3-center noselect"},[t._v(t._s(t.pendingTransfers))])])])]):t._e(),t.isInitiativeAssigner||t.isOverview?i("div",{staticClass:"w3-row w3-margin-bottom"},[i("div",{staticClass:"w3-col",class:{s10:t.canEdit,s12:!t.canEdit}},[i("div",{staticClass:"w3-row cursor-pointer",on:{click:function(e){t.showSubinitiatives=!t.showSubinitiatives}}},[i("label",{staticClass:"cursor-pointer noselect"},[i("b",{staticClass:"noselect"},[t._v(t._s(t.$t("tokens.TRANSFERRED_TO_SUBS")))])]),i("div",{staticClass:"light-grey w3-round-xlarge w3-large"},[i("div",{staticClass:"app-blue w3-container w3-center w3-round-xlarge",style:{width:t.transferredToSubinitiativesPercent+"%"}},[i("div",{staticClass:"bar-txt w3-center noselect"},[t._v(t._s(t.transferredToSubinitiativesStr))])])])]),t.isOverview||t.isInitiativeAssigner?i("div",{staticClass:"w3-row"},[t.hasSubinitiatives?i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showSubinitiatives?i("div",{staticClass:"sub-elements"},t._l(t.assetData.transferredToSubinitiatives,function(e){return i("router-link",{key:e.assetId,staticClass:"w3-row cursor-pointer",attrs:{tag:"div",to:{name:"Initiative",params:{initiativeId:e.receiverId}}}},[i("label",{},[i("b",{staticClass:"noselect"},[i("i",{staticClass:"fa fa-circle",style:{color:t.$store.getters.colorOfInitiative(e.receiverId)},attrs:{"aria-hidden":"true"}}),t._v("  "+t._s(e.receiverName))])]),i("div",{staticClass:"light-grey w3-round-xlarge w3-large"},[i("div",{staticClass:"app-blue w3-container w3-center w3-round-xlarge",style:{width:t.subinitiativePercent(e)+"%"}},[i("div",{staticClass:"bar-txt w3-center noselect"},[t._v(t._s(t.subinitiativePortion(e)))])])])])})):t._e()])],1):t._e()]):t._e()]),t.isOverview&&t.canEdit?i("div",{staticClass:"w3-col s2 w3-center icon-div"},[i("button",{staticClass:"w3-button gray-1-color",attrs:{type:"button"},on:{click:function(e){t.newTransfer()}}},[i("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])]):t._e()]):t._e(),t.isOverview||t.isMemberAssigner?i("div",{staticClass:"w3-row"},[i("div",{staticClass:"w3-col",class:{s10:t.canEdit,s12:!t.canEdit}},[i("div",{staticClass:"w3-row cursor-pointer",on:{click:function(e){t.showMembers=!t.showMembers}}},[i("label",{staticClass:"cursor-pointer"},[i("b",{staticClass:"noselect"},[t._v(t._s(t.$t("tokens.TRANSFERRED_TO_MEMS")))])]),i("div",{staticClass:"light-grey w3-round-xlarge w3-large"},[i("div",{staticClass:"app-blue w3-container w3-center w3-round-xlarge",style:{width:t.transferredToMembersPercent+"%"}},[i("div",{staticClass:"bar-txt w3-center noselect"},[t._v(t._s(t.transferredToMembersStr))])])])]),t.isOverview?i("div",{staticClass:"w3-row"},[t.hasMembers?i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showMembers?i("div",{staticClass:"sub-elements"},t._l(t.assetData.transferredToUsers,function(e){return e.value>0?i("div",{staticClass:"w3-row"},[i("label",{},[i("b",{staticClass:"noselect"},[t._v(t._s(e.receiverName))])]),i("div",{staticClass:"light-grey w3-round-xlarge w3-large"},[i("div",{staticClass:"app-blue w3-container w3-center w3-round-xlarge",style:{width:t.memberPercent(e)+"%"}},[i("div",{staticClass:"bar-txt w3-center noselect"},[t._v(t._s(t.memberPortion(e)))])])])]):t._e()})):t._e()])],1):t._e()]):t._e()]),t.isOverview&&t.canEdit?i("div",{staticClass:"w3-col s2 w3-center icon-div"},[i("button",{staticClass:"w3-button gray-1-color",attrs:{type:"button"},on:{click:function(e){t.newAssignement()}}},[i("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])]):t._e()]):t._e()])])]),t.showAssigner?i("div",{staticClass:"assigner-container w3-col l4 w3-container"},[i("div",{staticClass:"w3-row label-row"},[i("label",{},[i("b",[t._v(t._s(t.$t("tokens.AMOUNT_TO_TRANSF")))])])]),i("div",{staticClass:"w3-row-padding w3-large"},[i("div",{staticClass:"w3-col s6"},[i("input",{staticClass:"w3-input w3-border w3-hover-light-grey w3-round",class:{"error-input":t.errorFound},attrs:{type:"number",min:"0"},domProps:{value:t.value.toFixed(1)},on:{blur:function(e){t.valueUpdated(Number(e.target.value))}}})]),i("div",{staticClass:"w3-col s6"},[i("div",{staticClass:"w3-row"},[i("div",{staticClass:"w3-col s10"},[i("input",{staticClass:"w3-input w3-border w3-hover-light-grey w3-round",class:{"error-input":t.errorFound},attrs:{type:"number",min:"0",step:"5"},domProps:{value:t.percentage.toFixed(1)},on:{blur:function(e){t.percentageUpdated(Number(e.target.value))}}})]),t._m(0)])])]),i("div",{staticClass:"slider-container error-row w3-center"},[i("transition",{attrs:{name:"slideDownUp"}},[t.valueTooLarge?i("div",{staticClass:"w3-row error-panel w3-tag w3-round"},[t._v("\n              "+t._s(this.assetData.ownedByThisHolder>0?t.$t("tokens.ONLY")+" ":"")+" "+t._s(this.assetData.ownedByThisHolder.toFixed(1))+" "+t._s(this.assetData.assetName)+" "+t._s(t.$t("tokens.AVAILABLE"))+"\n            ")]):t._e()])],1)]):t._e()])]):i("div",{staticClass:"w3-row w3-center loader-gif-container"},[i("img",{staticClass:"loader-gif",attrs:{src:s("cf1c"),alt:""}})])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w3-col s2"},[s("i",{staticClass:"fa fa-percent",attrs:{"aria-hidden":"true"}})])}],n=s("bde3"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-modal"},[i("div",{staticClass:"w3-modal-content"},[i("div",{staticClass:"w3-card-4 app-modal-card"},[i("div",{staticClass:"close-div w3-display-topright w3-xlarge",on:{click:function(e){t.closeThis()}}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t.assetData?i("div",{staticClass:"w3-container form-container"},[i("div",{staticClass:"w3-container w3-border-bottom"},[i("h2",[t._v(t._s(t.$t("tokens.CONFIGURE_TOKEN"))+": "+t._s(t.assetData.assetName))])]),i("div",{staticClass:"w3-row w3-margin-top"},[i("b",[t._v(t._s(t.$t("tokens.ACTION"))+":")])]),i("div",{staticClass:"w3-row-padding bottom-btns-row"},[i("div",{staticClass:"w3-col m6 s12"},[i("button",{staticClass:"w3-button",class:{"app-button":t.isMint,"app-button-light":!t.isMint},on:{click:function(e){t.action="mint"}}},[t._v("\n              "+t._s(t.$t("tokens.MINT"))+"\n            ")])]),i("div",{staticClass:"w3-col m6 s12"},[i("button",{staticClass:"w3-button",class:{"app-button":t.isBurn,"app-button-light":!t.isBurn},on:{click:function(e){t.action="burn"}}},[t._v("\n              "+t._s(t.$t("tokens.BURN"))+"\n            ")])])]),i("div",{staticClass:"w3-row label-row w3-margin-top"},[i("label",{},[i("b",[t._v(t._s(t.isMint?t.$t("tokens.AMOUNT_TO_BE_CREATED"):t.$t("tokens.AMOUNT_TO_BE_BURNT"))+":")])]),t._v("\n          ("+t._s(t.$t("tokens.STILL_AVAILABLE"))+": "+t._s(t.availableToThisInitiativeValStr)+" "+t._s(t.assetData.assetName)+")\n        ")]),i("div",{staticClass:"w3-row-padding"},[i("div",{staticClass:"w3-col s6"},[i("input",{staticClass:"w3-input w3-border w3-hover-light-grey w3-round",attrs:{type:"number",min:"0",step:t.assetData.totalUnderThisHolder/100},domProps:{value:t.value.toFixed(1)},on:{blur:function(e){t.valueUpdated(e)}}})]),i("div",{staticClass:"w3-col s6"},[i("div",{staticClass:"w3-row"},[i("div",{staticClass:"w3-col s10"},[i("input",{staticClass:"w3-input w3-border w3-hover-light-grey w3-round",attrs:{type:"number",min:"0",step:"1"},domProps:{value:t.percentage.toFixed(1)},on:{blur:function(e){t.percentageUpdated(e)}}})]),t._m(0)])])]),i("app-error-panel",{attrs:{show:t.assetsZeroShow,message:t.$t("tokens.AMOUNT_LARGER_THAN_ZERO")}}),i("app-error-panel",{attrs:{show:t.assetsNotAvailableShow,message:t.noAssetsAvailableErorrMsg}}),i("div",{staticClass:"w3-row w3-margin-top"},[t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.motive,expression:"motive"}],staticClass:"w3-input w3-hover-light-grey",class:{"error-input":t.motiveErrorShow},attrs:{type:"text"},domProps:{value:t.motive},on:{input:function(e){e.target.composing||(t.motive=e.target.value)}}}),i("app-error-panel",{attrs:{show:t.motiveEmptyShow,message:"please provide a motive for minting these tokens for future reference"}}),i("app-error-panel",{attrs:{show:t.motiveTooLarge,message:"motive too large, please use the notes for long annotations"}}),i("br"),t._m(2),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.notes,expression:"notes"}],staticClass:"w3-input w3-border w3-round w3-hover-light-grey",domProps:{value:t.notes},on:{input:function(e){e.target.composing||(t.notes=e.target.value)}}})],1),i("div",{staticClass:"w3-row summary-row"},[i("div",{staticClass:"w3-row w3-center w3-margin-top"},[i("b",[t._v(t._s(t.isMint?t.$t("tokens.AMOUNT_TO_BE_CREATED"):t.$t("tokens.AMOUNT_TO_BE_BURNT"))+": "+t._s(t.value)+" "+t._s(t.assetData.assetName))])]),i("div",{staticClass:"w3-row w3-center w3-margin-top"},[i("b",[t._v(t._s(t.$t("tokens.NEW_TOTAL_SUPPLY"))+": "+t._s(t.newAmountStr)+" "+t._s(t.assetData.assetName))])]),i("div",{staticClass:"w3-row w3-center w3-margin-top"},[i("b",[t._v(t._s(t.$t("tokens.NEW_TOTAL_AVAILABLE"))+": "+t._s(t.newAvailableStr)+" "+t._s(t.assetData.assetName))])])]),i("hr"),i("div",{staticClass:"bottom-btns-row w3-row-padding"},[i("div",{staticClass:"w3-col m6"},[i("button",{staticClass:"w3-button app-button-light",attrs:{type:"button"},on:{click:function(e){t.closeThis()}}},[t._v("Cancel")])]),i("div",{staticClass:"w3-col m6"},[i("button",{staticClass:"w3-button app-button",attrs:{type:"button"},on:{click:function(e){t.accept()}}},[t._v("Accept")])])])],1):i("div",{staticClass:"w3-row w3-center loader-gif-container"},[i("img",{attrs:{src:s("cf1c"),alt:""}})])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w3-col s2 "},[s("i",{staticClass:"fa fa-percent",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{},[s("b",[t._v("Motive "),s("span",{staticClass:"w3-small error-text"},[t._v("(required)")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{},[s("b",[t._v("Notes")])])}],c=(s("c5f6"),{props:{assetId:{type:String},actionInit:{type:String,default:"mint"},initiativeId:{type:String}},data:function(){return{assetData:null,value:0,percentage:0,motive:"",notes:"",motiveEmptyError:!1,assetsZeroError:!1,action:""}},computed:{isMint:function(){return"mint"===this.action},isBurn:function(){return"burn"===this.action},newAmountVal:function(){return this.assetData.totalExistingTokens+(this.isMint?this.value:-this.value)},availableToThisInitiativeVal:function(){return this.assetData.ownedByThisHolder-this.assetData.totalPending},availableToThisInitiativeValStr:function(){return Object(n["g"])(this.availableToThisInitiativeVal)},newAvailable:function(){return this.availableToThisInitiativeVal+(this.isMint?this.value:-this.value)},newAvailableStr:function(){return Object(n["g"])(this.newAvailable)},newAmountStr:function(){return Object(n["g"])(this.newAmountVal)},motiveErrorShow:function(){return this.motiveEmptyShow||this.motiveTooLarge},motiveEmptyShow:function(){return this.motiveEmptyError&&""===this.motive},motiveTooLarge:function(){return this.motive.length>55},assetsAreZero:function(){return this.value<=0},assetsZeroShow:function(){return this.assetsZeroError&&this.assetsAreZero},noAssetsAvailableErorrMsg:function(){return(this.assetData.ownedByThisHolder>0?this.$t("tokens.ONLY")+" ":" ")+this.assetData.ownedByThisHolder.toFixed(1)+" "+this.assetData.assetName+" "+this.$t("tokens.AVAILABLE")},assetsNotAvailableShow:function(){return!!this.isBurn&&this.availableToThisInitiativeVal<this.value}},methods:{tokensString:function(t){return Object(n["g"])(t)},updateTokenData:function(){var t=this;this.axios.get("/1/token/"+this.assetId,{params:{includeSubinitiatives:!0,initiativeIdStr:this.initiativeId}}).then(function(e){t.assetData=e.data.data})},valueUpdated:function(t){this.value=Number(t.target.value),this.percentage=this.value/this.assetData.totalExistingTokens*100},percentageUpdated:function(t){this.percentage=Number(t.target.value),this.value=this.percentage/100*this.assetData.totalExistingTokens},closeThis:function(){this.$emit("close")},accept:function(){var t=this,e=!0;if(this.assetsAreZero&&(e=!1,this.assetsZeroError=!0),this.isBurn&&this.assetsNotAvailableShow&&(e=!1),""===this.motive&&(this.motiveEmptyError=!0,e=!1),this.motiveTooLarge&&(e=!1),e)if(this.isMint){var s={value:this.value,motive:this.motive,notes:this.notes};this.axios.put("/1/token/"+this.assetData.assetId+"/mint",s).then(function(e){t.$store.commit("triggerUpdateAssets"),t.closeThis()})}else{var i={value:this.value,motive:this.motive,notes:this.notes};this.axios.put("/1/token/"+this.assetData.assetId+"/burn",i).then(function(e){t.$store.commit("triggerUpdateAssets"),t.closeThis()})}}},mounted:function(){this.updateTokenData(),this.action=this.actionInit}}),l=c,u=(s("dbf0"),s("2877")),d=Object(u["a"])(l,r,o,!1,null,"97b25712",null);d.options.__file="TokenEditModal.vue";var h=d.exports,v={components:{"app-token-edit-modal":h},props:{assetId:{type:String},initiativeId:{type:String},type:{type:String,default:"overview"},canEdit:{type:Boolean,default:!1},canMint:{type:Boolean,default:!1},showError:{type:Boolean,default:!1},triggerReset:{type:Boolean,default:!1}},data:function(){return{assetData:null,loading:!1,showSubinitiatives:!1,showMembers:!1,value:0,percentage:0,valueTooLarge:!1,showNewTokenMintModal:!1,tokenAction:"mint",deleteIntent:!1}},computed:{isDeleted:function(){return"DELETED"===this.assetData.status},showAssigner:function(){return this.isInitiativeAssigner||this.isMemberAssigner},isInitiativeAssigner:function(){return"initiative-assigner"===this.type},isMemberAssigner:function(){return"member-assigner"===this.type},isOverview:function(){return"overview"===this.type},name:function(){return this.assetData.assetName},totalExisting:function(){return Object(n["g"])(this.assetData.totalExistingTokens)},underThisInitiativeVal:function(){return this.assetData.totalUnderThisHolder},underThisInitiativeStr:function(){return Object(n["g"])(this.underThisInitiativeVal)},underThisInitiativePercent:function(){return this.assetData.totalExistingTokens>0?Object(n["g"])(this.underThisInitiativeVal/this.assetData.totalExistingTokens*100):0},hasPending:function(){return this.assetData.totalPending>0},availableToThisInitiativeVal:function(){return this.assetData.ownedByThisHolder-this.assetData.totalPending},availableToThisInitiative:function(){return Object(n["a"])(this.availableToThisInitiativeVal,this.underThisInitiativeVal)},availableToThisInitiativePercent:function(){return this.availableToThisInitiativeVal/this.underThisInitiativeVal*100},pendingTransfers:function(){return Object(n["a"])(this.assetData.totalPending,this.underThisInitiativeVal)},pendingTransfersPercent:function(){return this.assetData.totalPending/this.underThisInitiativeVal*100},hasSubinitiatives:function(){return this.assetData.transferredToSubinitiatives.length>0},transferredToSubinitiativesVal:function(){return this.assetData.totalTransferredToSubinitiatives},transferredToSubinitiativesPercent:function(){return this.transferredToSubinitiativesVal/this.underThisInitiativeVal*100},transferredToSubinitiativesStr:function(){return Object(n["a"])(this.transferredToSubinitiativesVal,this.underThisInitiativeVal)},hasMembers:function(){return this.assetData.transferredToUsers.length>0},transferredToMembersVal:function(){return this.assetData.totalTransferredToUsers},transferredToMembersPercent:function(){return this.transferredToMembersVal/this.underThisInitiativeVal*100},transferredToMembersStr:function(){return Object(n["a"])(this.transferredToMembersVal,this.underThisInitiativeVal)},errorFound:function(){return this.showError||this.valueTooLarge}},methods:{newAssignement:function(){this.$emit("new-assignation",{assetId:this.assetId})},newTransfer:function(){this.$emit("new-transfer",{assetId:this.assetId})},subinitiativePortion:function(t){return Object(n["a"])(t.value,this.underThisInitiativeVal)},subinitiativePercent:function(t){return t.value/this.underThisInitiativeVal*100},memberPortion:function(t){return Object(n["a"])(t.value,this.underThisInitiativeVal)},memberPercent:function(t){return this.underThisInitiativeVal>0?t.value/this.underThisInitiativeVal*100:0},updateTokenData:function(){var t=this;""!==this.assetId&&this.axios.get("/1/token/"+this.assetId,{params:{includeSubinitiatives:!0,initiativeIdStr:this.initiativeId}}).then(function(e){t.assetData=e.data.data,t.checkValue()})},assign:function(){var t={assetId:this.assetData.assetId,assetName:this.assetData.assetName,senderId:this.assetData.holderId,senderName:this.assetData.holderName,value:this.value};this.$emit("assigned",t)},mintClicked:function(){this.tokenAction="mint",this.showNewTokenMintModal=!0},burnClicked:function(){this.tokenAction="burn",this.showNewTokenMintModal=!0},deleteConfirmed:function(){var t=this;this.deleteIntent=!1,this.axios.delete("/1/token/"+this.assetId).then(function(e){t.$emit("please-update"),t.updateTokenData()})},restoreToken:function(){var t=this;this.axios.put("/1/token/"+this.assetId+"/restore").then(function(e){t.$emit("please-update"),t.updateTokenData()})},valueUpdated:function(t){this.value=t,this.percentage=this.value/this.underThisInitiativeVal*100,this.checkValue()},percentageUpdated:function(t){this.percentage=t,this.value=this.percentage/100*this.underThisInitiativeVal,this.checkValue()},checkValue:function(){this.value<=this.assetData.ownedByThisHolder?(this.valueTooLarge=!1,this.assign()):this.valueTooLarge=!0}},watch:{assetId:function(){this.updateTokenData()},initiativeId:function(){this.updateTokenData()},"$store.state.support.triggerUpdateAssets":function(){this.updateTokenData()},triggerReset:function(){this.valueUpdated(0)}},mounted:function(){this.updateTokenData()}},w=v,f=(s("c8d0"),Object(u["a"])(w,i,a,!1,null,"4071619c",null));f.options.__file="AssetDistributionChart.vue";e["a"]=f.exports},6773:function(t,e,s){"use strict";var i=s("f0d9"),a=s.n(i);a.a},b780:function(t,e,s){"use strict";var i=s("c11c"),a=s.n(i);a.a},be94:function(t,e,s){"use strict";function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){i(t,e,s[e])})}return t}s.d(e,"a",function(){return a})},c11c:function(t,e,s){},c637:function(t,e,s){t.exports=s.p+"img/trash.d05c62f8.svg"},c739:function(t,e,s){t.exports=s.p+"img/mint.07df5b00.svg"},c8d0:function(t,e,s){"use strict";var i=s("e8ce"),a=s.n(i);a.a},dbf0:function(t,e,s){"use strict";var i=s("f16c"),a=s.n(i);a.a},e8ce:function(t,e,s){},f0d9:function(t,e,s){},f16c:function(t,e,s){},f25a:function(t,e,s){t.exports=s.p+"img/burn.73cce807.svg"}}]);
//# sourceMappingURL=chunk-f535a46a.5f2996eb.js.map