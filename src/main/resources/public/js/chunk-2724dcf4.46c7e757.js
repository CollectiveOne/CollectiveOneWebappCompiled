(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2724dcf4"],{"06a9":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"model-section-elements"},[o("div",{staticClass:"slider-container"},[o("transition",{attrs:{name:"slideDownUp"}},[e.showCardModal?o("app-model-card-modal",{attrs:{isNew:!1,cardWrapperId:e.$route.params.cardId,inSectionId:e.sectionId,inSectionTitle:e.sectionTitle},on:{close:function(t){e.closeCardModal()},update:function(t){e.resetCards()},updateCards:function(t){e.resetCards()}}}):e._e()],1),o("transition",{attrs:{name:"slideDownUp"}},[e.showNewCardModal?o("app-model-card-modal",{attrs:{isNew:!0,inSectionId:e.section.id,inSectionTitle:e.section.title},on:{close:function(t){e.showNewCardModal=!1},updateCards:function(t){e.update()}}}):e._e()],1)],1),o("div",{staticClass:"model-section-elements-container"},[o("app-section-control-row",{attrs:{orderType:e.orderType,showMessages:e.showMessages,showEvents:e.showEvents},on:{messagesContent:function(t){e.messagesContent()},summaryView:function(t){e.summaryView()},cardView:function(t){e.cardView()},docView:function(t){e.docView()},levelDown:function(t){e.levelDown()},levelUp:function(t){e.levelUp()},toggleInifinteLevels:function(t){e.toggleInifinteLevels()},showPrivateClick:function(t){e.showPrivateClick()},showSharedClick:function(t){e.showSharedClick()},showCommonClick:function(t){e.showCommonClick()},sectionOrder:function(t){e.sectionOrder()},aggregatedOrder:function(t){e.aggregatedOrder()},showMessages:function(t){e.showMessages=!e.showMessages},showEvents:function(t){e.showEvents=!e.showEvents},searchQueryUpdated:function(t){e.newCardQuery=t},updateQuery:function(t){e.updateQuery()},cardsSortByUpdated:function(t){e.cardSortBy=t},downloadContent:function(t){e.downloadContent()},enableDraggable:function(t){e.enableDraggable()}}}),o("div",{staticClass:"elements-container",class:{"large-padding":!e.windowIsSmall,"small-padding":e.windowIsSmall}},[e.isMessagesContent?o("app-message-thread",{attrs:{contextType:"MODEL_SECTION",contextElementId:e.currentSectionId,showMessages:e.showMessages,showEvents:e.showEvents,levels:999}}):e._e(),e.isCardsContent&&e.isSectionsOrder?o("app-model-section",{attrs:{section:e.section,cardsType:e.cardsType,showPrivate:e.showPrivate,showShared:e.showShared,showCommon:e.showCommon}}):e._e(),e.isCardsContent&&!e.isSectionsOrder?o("app-model-cards-container",{attrs:{cardWrappers:e.cardWrappers,inSection:e.section,cardsType:e.cardsType,acceptDrop:!1}}):e._e(),!e.isSectionsOrder&&e.thereAreMore?o("div",{staticClass:"w3-row w3-center w3-margin-top w3-margin-bottom"},[o("button",{staticClass:"w3-button app-button-light",attrs:{type:"button",name:"button"},on:{click:function(t){e.showMore()}}},[e._v("show more")])]):e._e(),e.loading?o("div",{staticClass:"w3-row w3-center loader-gif-container"},[o("img",{staticClass:"loader-gif",attrs:{src:s("cf1c"),alt:""}})]):e._e()],1)],1)])},r=[],n=(s("a481"),s("7f7f"),{computed:{isMessagesContent:function(){return"ModelSectionMessages"===this.$route.name},isCardsContent:function(){return"ModelSectionCards"===this.$route.name||"ModelSectionCard"===this.$route.name},levels:function(){return this.$store.getters.getActualLevels},infiniteLevels:function(){return!this.isSectionsOrder||this.$store.state.viewParameters.isInfiniteLevels},cardsType:function(){return this.$store.state.viewParameters.cardsType},showPrivate:function(){return this.$store.state.viewParameters.showPrivate},showShared:function(){return this.$store.state.viewParameters.showShared},showCommon:function(){return this.$store.state.viewParameters.showCommon},isSummary:function(){return"summary"===this.cardsType&&this.isCardsContent},isCard:function(){return"card"===this.cardsType&&this.isCardsContent},isDoc:function(){return"doc"===this.cardsType&&this.isCardsContent},isSectionsOrder:function(){return"sections"===this.orderType},isDraggable:function(){return this.$store.state.support.triggerCardDraggingState},isLoggedAnEditor:function(){return this.$store.getters.isLoggedAnEditor},popperOptions:function(){return{placement:"bottom",modifiers:{preventOverflow:{enabled:!0,boundariesElement:"viewport"}}}}}}),i=s("2027"),a=s("bca5"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w3-row controls-row small-scroll"},[o("div",{staticClass:"control-group"},[o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.MESSAGES-TAB-TT"),details:e.$t("help.MESSAGES-TAB-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.isMessagesContent},attrs:{slot:"reference"},on:{click:function(t){e.$emit("messagesContent")}},slot:"reference"},[o("img",{attrs:{src:s("a5d7"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.CARDS-SUMMARY-TAB-TT"),details:e.$t("help.CARDS-SUMMARY-TAB-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.isSummary},attrs:{slot:"reference"},on:{click:function(t){e.$emit("summaryView")}},slot:"reference"},[o("img",{attrs:{src:s("8b2d"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.CARDS-TAB-TT"),details:e.$t("help.CARDS-TAB-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.isCard},attrs:{slot:"reference"},on:{click:function(t){e.$emit("cardView")}},slot:"reference"},[o("img",{attrs:{src:s("10ff"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.CARDS-DOC-VIEW-TT"),details:e.$t("help.CARDS-DOC-VIEW-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.isDoc},attrs:{slot:"reference"},on:{click:function(t){e.$emit("docView")}},slot:"reference"},[o("img",{attrs:{src:s("9e28"),alt:""}})])],1)],1),e.isCardsContent?o("div",{staticClass:"control-group noselect"},[o("div",{staticClass:"w3-left zoom-controls"},[o("div",{staticClass:"w3-left zoom-controls-enabled"},[o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.REDUCE-LEVELS-TT"),details:e.$t("help.REDUCE-LEVELS-DET")}}),o("div",{staticClass:"w3-left cursor-pointer arrow-div",attrs:{slot:"reference"},on:{click:function(t){e.$emit("levelDown")}},slot:"reference"},[o("img",{attrs:{src:s("ee1d"),alt:""}})])],1),o("div",{staticClass:"w3-left number-div"},[e._v("\n          "+e._s(999!==e.levels?e.levels:"∞")+"\n        ")]),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.INCREASE-LEVELS-TT"),details:e.$t("help.INCREASE-LEVELS-DET")}}),o("div",{staticClass:"w3-left cursor-pointer arrow-div",attrs:{slot:"reference"},on:{click:function(t){e.$emit("levelUp")}},slot:"reference"},[o("img",{attrs:{src:s("e35d"),alt:""}})])],1)],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.SEE-ALL-LEVELS-TT"),details:e.$t("help.SEE-ALL-LEVELS-DET")}}),o("div",{staticClass:"w3-left cursor-pointer arrow-div w3-border-left",class:{"control-btn-selected":e.infiniteLevels},attrs:{slot:"reference"},on:{click:function(t){e.$emit("toggleInifinteLevels")}},slot:"reference"},[o("img",{attrs:{src:s("0ee4"),alt:""}})])],1)],1)]):e._e(),e.isCardsContent&&this.$store.state.user.authenticated?o("div",{staticClass:"control-group"},[o("div",{},[o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:(e.showPrivate?e.$t("general.HIDE"):e.$t("general.SHOW"))+" "+e.$t("help.PRIVATE-CARDS-TT"),details:e.$t("help.PRIVATE-CARDS-DET")}}),o("div",{staticClass:"w3-left control-btn border-red",class:{"control-btn-selected":e.showPrivate,"w3-bottombar":e.showPrivate},attrs:{slot:"reference"},on:{click:function(t){e.$emit("showPrivateClick")}},slot:"reference"},[o("img",{attrs:{src:s("4be1"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:(e.showShared?e.$t("general.HIDE"):e.$t("general.SHOW"))+" "+e.$t("help.SHARED-CARDS-TT"),details:e.$t("help.SHARED-CARDS-DET")}}),o("div",{staticClass:"w3-left control-btn border-yellow",class:{"control-btn-selected":e.showShared,"w3-bottombar":e.showShared},attrs:{slot:"reference"},on:{click:function(t){e.$emit("showSharedClick")}},slot:"reference"},[o("img",{attrs:{src:s("2408"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:(e.showCommon?e.$t("general.HIDE"):e.$t("general.SHOW"))+" "+e.$t("help.COMMON-CARDS-TT"),details:e.$t("help.COMMON-CARDS-DET")}}),o("div",{staticClass:"w3-left control-btn border-blue",class:{"control-btn-selected":e.showCommon,"w3-bottombar":e.showCommon},attrs:{slot:"reference"},on:{click:function(t){e.$emit("showCommonClick")}},slot:"reference"},[o("img",{attrs:{src:s("bce9"),alt:""}})])],1)],1)]):e._e(),e.isCardsContent?o("div",{staticClass:"control-group"},[o("div",{},[o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.SHOW-SECTION-ORDER-TT"),details:e.$t("help.SHOW-SECTION-ORDER-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.isSectionsOrder},attrs:{slot:"reference"},on:{click:function(t){e.$emit("sectionOrder")}},slot:"reference"},[o("img",{attrs:{src:s("d831"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.SEARCH-CARDS-TT"),details:e.$t("help.SEARCH-CARDS-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":!e.isSectionsOrder},attrs:{slot:"reference"},on:{click:function(t){e.$emit("aggregatedOrder")}},slot:"reference"},[o("img",{attrs:{src:s("d8e7"),alt:""}})])],1)],1)]):e._e(),e.isCardsContent?e._e():o("div",{staticClass:"control-group",attrs:{"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions}},[o("app-help-popper",{attrs:{title:(e.showMessages?e.$t("general.HIDE"):e.$t("general.SHOW"))+" "+e.$t("help.SHOW-MESSAGES-TT"),details:e.$t("help.SHOW-MESSAGES-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.showMessages},attrs:{slot:"reference"},on:{click:function(t){e.$emit("showMessages")}},slot:"reference"},[o("img",{attrs:{src:s("2a07"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:(e.showEvents?e.$t("general.HIDE"):e.$t("general.SHOW"))+" "+e.$t("help.SHOW-EVENTS-TT"),details:e.$t("help.SHOW-EVENTS-DET")}}),o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.showEvents},attrs:{slot:"reference"},on:{click:function(t){e.$emit("showEvents")}},slot:"reference"},[o("img",{attrs:{src:s("6b66"),alt:""}})])],1)],1),o("div",{staticClass:"control-group slider-container"},[o("transition",{attrs:{name:"slideRightLeft"}},[e.isCardsContent&&!e.isSectionsOrder?o("div",{},[o("div",{},[o("div",{},[o("input",{ref:"inputQuery",staticClass:"w3-input",attrs:{type:"text",name:"",value:"",placeholder:"search"},on:{input:function(t){e.$emit("searchQueryUpdated",t.target.value)}}})]),o("div",{staticClass:"control-btn control-btn-selected",on:{click:function(t){e.$emit("updateQuery")}}},[o("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])]),o("div",{staticClass:"w3-margin-left"},[o("select",{staticClass:"w3-input",on:{input:function(t){e.$emit("cardsSortByUpdated",t.target.value)}}},[o("option",{attrs:{value:"CREATION_DATE_DESC"}},[e._v("Last Created")]),o("option",{attrs:{value:"EDITION_DATE_DESC"}},[e._v("Last Edited")]),o("option",{attrs:{value:"CREATOR"}},[e._v("Author")])])])]):e._e()])],1),e.isCardsContent&&e.isSectionsOrder?o("div",{staticClass:"control-group"},[o("div",{},[o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:e.$t("help.DOWNLOAD-CONTENT-TT"),details:e.$t("help.DOWNLOAD-CONTENT-DET")}}),o("div",{staticClass:"w3-left control-btn",attrs:{slot:"reference"},on:{click:function(t){e.$emit("downloadContent")}},slot:"reference"},[o("img",{attrs:{src:s("e3cc"),alt:""}})])],1),o("popper",{key:e.$store.state.support.isTouchScreen+1e8*Math.random(),attrs:{trigger:e.$store.state.support.isTouchScreen?"long-press":"hover",options:e.popperOptions,"delay-on-mouse-in":1200,"delay-on-mouse-out":800}},[o("app-help-popper",{attrs:{title:(e.isDraggable?e.$t("general.DISABLE"):e.$t("general.ENABLE"))+" "+e.$t("help.ENABLE-DRAG-AND-DROP-TT"),details:e.$t("help.ENABLE-DRAG-AND-DROP-CARDS-DET")}}),e.isLoggedAnEditor?o("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":e.isDraggable},attrs:{slot:"reference"},on:{click:function(t){e.$emit("enableDraggable")}},slot:"reference"},[o("img",{attrs:{src:s("1a0f"),alt:""}})]):e._e()],1)],1)]):e._e()])},l=[],p=(s("cadf"),s("551c"),s("097d"),{mixins:[n],props:{orderType:{type:String,default:"sections"},showEvents:{type:Boolean,default:!0},showMessages:{type:Boolean,default:!0}},computed:{},methods:{atKeydown:function(e){document.activeElement===this.$refs.inputQuery&&13===e.keyCode&&(e.preventDefault(),this.$emit("updateQuery"))}},mounted:function(){window.addEventListener("keydown",this.atKeydown)},destroyed:function(){window.removeEventListener("keydown",this.atKeydown)}}),d=p,u=(s("b917"),s("2877")),h=Object(u["a"])(d,c,l,!1,null,"2e1c65fb",null);h.options.__file="SectionControlRow.vue";var m=h.exports,g=s("1a80"),f=s("cb70"),C=function e(t,s,o,r,n){var i="";i+=Array(s+1).join("#")+" ",s=s<5?s+1:s,i+=t.title+"\r\n",""!==t.description&&(i+=t.description+"\r\n");var a=Object(f["b"])(t,o,r,n);for(var c in a){var l=a[c];""!==l.card.title&&(i+=Array(s+1).join("#")+" ",s=s<5?s+1:s,i+=l.card.title+"\r\n"),i+=l.card.text+"\r\n"}var p=Object(f["c"])(t,o,r,n);for(var d in p)i+=e(p[d],s,o,r,n);return i},w={mixins:[n],components:{"app-model-section":a["a"],"app-model-cards-container":g["a"],"app-message-thread":i["a"],"app-section-control-row":m},data:function(){return{section:null,showCardModal:!1,showNewCardModal:!1,loading:!1,sectionLoadedOnce:!1,sectionLoadedOnceLevels:0,orderType:"sections",showMessages:!0,showEvents:!1,newCardQuery:"",cardQuery:"",cardSortBy:"CREATION_DATE_DESC",page:0,pageSize:10,thereAreMore:!0,cardWrappers:[]}},computed:{sectionId:function(){return null!==this.section?this.section.id:""},sectionTitle:function(){return null!==this.section?this.section.title:""},currentSectionId:function(){return this.$route.params.sectionId},windowIsSmall:function(){return this.$store.state.support.windowIsSmall}},watch:{"$route.params.sectionId":function(){console.log("update due to section id watch"),this.sectionLoadedOnce=!1,this.section=null,this.update()},"$route.name":function(){console.log("checking card subroute due to route name watch"),this.checkCardSubroute()},levels:function(){console.log("udpating due to levels watch"),this.update()},cardSortBy:function(){this.isSectionsOrder?this.updateSection():this.resetCards()},"$store.state.support.triggerUpdateSectionCards":function(){this.resetCards()},section:function(){console.log("checking card subroute due to section update"),this.checkCardSubroute()}},methods:{enableDraggable:function(){this.$store.commit("triggerCardDraggingState")},messagesContent:function(){"ModelSectionMessages"!==this.$route.name&&this.$router.push({name:"ModelSectionMessages"})},cardsContent:function(){"ModelSectionCards"!==this.$route.name&&this.$router.push({name:"ModelSectionCards"})},sectionOrder:function(){this.orderType="sections",this.update()},aggregatedOrder:function(){this.orderType="aggregated",this.resetCards()},levelUp:function(){this.infiniteLevels||this.$store.commit("levelUp")},levelDown:function(){this.infiniteLevels||this.$store.commit("levelDown")},toggleInifinteLevels:function(){this.isSectionsOrder&&this.$store.commit("toggleInifinteLevels")},summaryView:function(){this.sectionLoadedOnce&&this.sectionLoadedOnceLevels===this.levels||this.updateSection(),this.$store.commit("setCardsType","summary"),"ModelSectionCards"!==this.$route.name&&this.$router.push({name:"ModelSectionCards"})},cardView:function(){this.sectionLoadedOnce&&this.sectionLoadedOnceLevels===this.levels||this.updateSection(),this.$store.commit("setCardsType","card"),"ModelSectionCards"!==this.$route.name&&this.$router.push({name:"ModelSectionCards"})},docView:function(){this.sectionLoadedOnce&&this.sectionLoadedOnceLevels===this.levels||this.updateSection(),this.$store.commit("setCardsType","doc"),"ModelSectionCards"!==this.$route.name&&this.$router.push({name:"ModelSectionCards"})},showPrivateClick:function(){this.$store.commit("toggleShowPrivate")},showSharedClick:function(){this.$store.commit("toggleShowShared")},showCommonClick:function(){this.$store.commit("toggleShowCommon")},showAllClick:function(){this.$store.commit("showAllTypes")},showMore:function(){this.page=this.page+1,this.getMoreCards()},resetCards:function(){this.page=0,this.thereAreMore=!0,this.cardWrappers=[],this.getMoreCards()},getMoreCards:function(){var e=this;console.log("getting more cards"),this.loading=!0,this.currentSectionId&&this.axios.get("/1/model/section/"+this.currentSectionId+"/cardWrappers/search",{params:{query:this.cardQuery,page:this.page,pageSize:this.pageSize,sortBy:this.cardSortBy,levels:999}}).then(function(t){e.loading=!1,"success"===t.data.result&&(t.data.data.content.length<e.pageSize&&(e.thereAreMore=!1),e.cardWrappers=e.cardWrappers.concat(t.data.data.content))}).catch(function(e){console.log(e)})},updateSection:function(){var e=this;this.loading=!0,this.currentSectionId&&this.axios.get("/1/model/section/"+this.currentSectionId,{params:{levels:this.levels}}).then(function(t){e.loading=!1,e.sectionLoadedOnce=!0,e.sectionLoadedOnceLevels=e.levels,"success"===t.data.result&&(e.section=t.data.data,e.checkCardSubroute())}).catch(function(e){console.log(e)})},updateQuery:function(){this.cardQuery=this.newCardQuery,this.update()},resetQuery:function(){this.newCardQuery="",this.updateQuery()},update:function(){this.isMessagesContent||(this.isSectionsOrder?this.updateSection():this.resetCards())},checkCardSubroute:function(){this.showCardModal=!1,"ModelSectionCard"===this.$route.name&&(this.section?this.showCardModal=!0:this.sectionLoadedOnce||this.updateSection())},closeCardModal:function(){this.$router.replace({name:"ModelSectionCards"})},downloadContent:function(){var e="data:text/plain;charset=utf-8,";e+=C(this.section,1,this.showCommon,this.showShared,this.showPrivate);var t=encodeURI(e),s=document.createElement("a");s.setAttribute("href",t),s.setAttribute("download",this.section.title+".md"),document.body.appendChild(s),s.click()}},created:function(){this.update(),this.checkCardSubroute()}},v=w,S=(s("a4e8"),Object(u["a"])(v,o,r,!1,null,"4f645c8e",null));S.options.__file="ModelSectionElements.vue";t["default"]=S.exports},"0ee4":function(e,t,s){e.exports=s.p+"img/infinite-icon.7bdb8380.svg"},"1a0f":function(e,t,s){e.exports=s.p+"img/move-icon.d4096c49.svg"},2408:function(e,t,s){e.exports=s.p+"img/shared-icon.d5d5abf1.svg"},"2a07":function(e,t,s){e.exports=s.p+"img/chat-icon-2.29bb47e2.svg"},"4be1":function(e,t,s){e.exports=s.p+"img/private-icon.22d22dcb.svg"},"4da0":function(e,t,s){},"6b66":function(e,t,s){e.exports=s.p+"img/all-events-icon.67e809e2.svg"},"879c":function(e,t,s){},a4e8:function(e,t,s){"use strict";var o=s("879c"),r=s.n(o);r.a},a5d7:function(e,t,s){e.exports=s.p+"img/chat-icon.06d368a5.svg"},b917:function(e,t,s){"use strict";var o=s("4da0"),r=s.n(o);r.a},bce9:function(e,t,s){e.exports=s.p+"img/common-icon.72135e6c.svg"},d831:function(e,t,s){e.exports=s.p+"img/network-icon.e3827c66.svg"},d8e7:function(e,t,s){e.exports=s.p+"img/search-icon.ac51d168.svg"},e35d:function(e,t,s){e.exports=s.p+"img/zoom-out-icon.cde391e8.svg"},e3cc:function(e,t,s){e.exports=s.p+"img/download-icon.cdf33568.svg"},ee1d:function(e,t,s){e.exports=s.p+"img/zoom-in-icon.b62aed56.svg"}}]);
//# sourceMappingURL=chunk-2724dcf4.46c7e757.js.map