(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7704c145"],{"025f":function(t,i,s){t.exports=s.p+"img/push-light.518802aa.png"},"0b48":function(t,i,s){t.exports=s.p+"img/onapp-light.165bc39d.png"},"140e":function(t,i,s){t.exports=s.p+"img/onapp-inh.1bdeb94c.png"},"1b41":function(t,i,s){t.exports=s.p+"img/disable-light.ffa3097e.png"},"1f3e":function(t,i,s){t.exports=s.p+"img/disable.11b307e9.png"},"46e3":function(t,i,s){t.exports=s.p+"img/push-on.a0a2e814.png"},5628:function(t,i,s){t.exports=s.p+"img/onapp-under.abf7a497.png"},"5b59":function(t,i,s){t.exports=s.p+"img/push-inh.c841d3f2.png"},"67e5":function(t,i,s){t.exports=s.p+"img/onapp-on-inh.3cc5fbf8.png"},7471:function(t,i,s){t.exports=s.p+"img/disable-inh.676f80f0.png"},"77c2":function(t,i,s){t.exports=s.p+"img/onapp-on.2a19dba7.png"},"7fce":function(t,i,s){},8783:function(t,i,s){t.exports=s.p+"img/disable-light-inh.63645904.png"},9903:function(t,i,s){t.exports=s.p+"img/push-under.6d73102a.png"},b211:function(t,i,s){t.exports=s.p+"img/push-light-inh.df73ef8d.png"},ba25:function(t,i,s){t.exports=s.p+"img/push.56a29da1.png"},ba7d:function(t,i,s){t.exports=s.p+"img/onapp-light-inh.edefd506.png"},bab0:function(t,i,s){t.exports=s.p+"img/push-on-inh.bf9e0e53.png"},bb3a:function(t,i,s){"use strict";var n=s("7fce"),e=s.n(n);e.a},e482:function(t,i,s){t.exports=s.p+"img/onapp-under-inh.499a8179.png"},e5d8:function(t,i,s){t.exports=s.p+"img/push-under-inh.84306219.png"},f744:function(t,i,s){t.exports=s.p+"img/onapp.5056e3e3.png"},f868:function(t,i,s){"use strict";var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"notifications-container"},[n("popper",{attrs:{"append-to-body":!0,trigger:"click",options:t.popperOptions,toggleShow:t.toggleShow}},[n("div",{staticClass:"notifications-list-container w3-white w3-card-4 w3-bar-block noselect"},[n("div",{staticClass:"close-div w3-xlarge cursor-pointer gray-1-color",on:{click:function(i){t.closeThis()}}},[n("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),n("div",{staticClass:"w3-row w3-border-bottom notifications-header"},[n("div",{staticClass:"w3-row title-row"},["COLLECTIVEONE"!=this.contextType?n("b",[t._v(t._s(t.$t("notifications.YOUR_NOTIFICATIONS_UNDER",{elementName:t.elementTitle})))]):n("b",[t._v(t._s(t.$t("notifications.YOUR_NOTIFICATIONS_IN_COLLECTIVEONE")))])]),n("div",{staticClass:"w3-row-padding notif-control-row"},[n("div",{staticClass:"w3-col s4",on:{click:function(i){t.toggleShowAll()}}},[n("button",{staticClass:"w3-button app-button",class:{"app-button":!t.showingAll,"app-button-light":t.showingAll}},[t._v("\n              "+t._s(t.totalUnread)+" "+t._s(t.$t("notifications.UNREAD"))+"\n            ")])]),n("div",{staticClass:" w3-col",class:{s6:t.shouldHaveSubscriber,s8:!t.shouldHaveSubscriber},on:{click:function(i){t.allNotificationsRead()}}},[n("button",{staticClass:"w3-button app-button-green"},[t._v("\n              "+t._s(t.$t("notifications.MARK_AS_READ"))+"\n            ")])]),t.shouldHaveSubscriber?n("div",{staticClass:"w3-col s2 config-button",on:{click:function(i){t.toggleConfiguration()}}},[t.notsDisabled?n("span",[t.isInheriting?n("img",{attrs:{src:s("8783"),alt:""}}):n("img",{attrs:{src:s("1b41"),alt:""}})]):t._e(),t.notsOnApp?n("span",[t.isInheriting?n("img",{attrs:{src:s("ba7d"),alt:""}}):n("img",{attrs:{src:s("0b48"),alt:""}})]):t._e(),t.notsPush?n("span",{staticClass:"config-button-push"},[t.isInheriting?n("img",{attrs:{src:s("b211"),alt:""}}):n("img",{attrs:{src:s("025f"),alt:""}})]):t._e()]):t._e()])]),n("div",{staticClass:"slider-container"},[n("transition",{attrs:{name:"slideDownUp"}},[t.showConfig?n("div",{staticClass:"w3-row config-table-row light-grey w3-center"},[t.isInheriting?n("div",{},[n("div",{staticClass:"w3-row w3-padding",domProps:{innerHTML:t._s(t.$t("activity.INHERITING_FROM",{name:t.applicableSubscriberElementName}))}}),n("div",{staticClass:"w3-row inherit-description"},[n("div",{staticClass:"w3-row"},[n("div",{staticClass:"w3-col s4"},[t.inheritedFromIsNotsDisabled?n("span",[n("img",{attrs:{src:s("1f3e")}})]):t._e(),t.inheritedFromIsNotsOnApp?n("span",[n("img",{attrs:{src:s("f744")}})]):t._e(),t.inheritedFromIsNotsPush?n("span",[n("img",{attrs:{src:s("ba25")}})]):t._e()]),n("div",{staticClass:"w3-col s8 w3-padding"},[t.inheritedFromIsNotsDisabled?n("span",[n("div",[t._v(t._s(t.$t("notifications.DISABLE_DESC")))])]):t._e(),t.inheritedFromIsNotsOnApp?n("span",[n("div",[t._v(t._s(t.$t("notifications.ONAPP_DESC")))])]):t._e(),t.inheritedFromIsNotsPush?n("span",[n("div",[t._v(t._s(t.$t("notifications.PUSH_DESC")))])]):t._e()])])]),n("div",{staticClass:"w3-row w3-center w3-margin-top  w3-margin-bottom"},[n("button",{staticClass:"w3-button app-button",on:{click:function(i){t.setCustom()}}},[t._v("\n                    "+t._s(t.$t("notifications.CHANGE"))+"\n                ")])])]):n("div",{},[n("table",{staticClass:"config-table"},["COLLECTIVEONE"!=t.contextType?n("tr",{on:{click:function(i){t.setInherited()}}},[n("td",{staticClass:"icon-column"},[t.inheritedFromIsNotsDisabled?n("img",{attrs:{src:s("8783"),alt:""}}):t._e(),t.inheritedFromIsNotsOnApp?n("img",{attrs:{src:s("f744"),alt:""}}):t._e(),t.inheritedFromIsNotsPush?n("img",{attrs:{src:s("ba25"),alt:""}}):t._e()]),n("td",[t._v(t._s(t.$t("notifications.INHERIT_DESC")))])]):t._e(),n("tr",{class:{"app-button-bg":t.notsDisabled},on:{click:function(i){t.setDisabled()}}},[n("td",{staticClass:"icon-column"},[n("img",{attrs:{src:s("1f3e"),alt:""}})]),n("td",[t._v(t._s(t.$t("notifications.DISABLE_DESC")))])]),n("tr",{class:{"app-button-bg":t.notsOnApp},on:{click:function(i){t.setOnApp()}}},[n("td",{staticClass:"icon-column"},[n("img",{attrs:{src:s("f744"),alt:""}})]),n("td",[t._v(t._s(t.$t("notifications.ONAPP_DESC")))])]),n("tr",{class:{"app-button-bg":t.notsPush},on:{click:function(i){t.setPush()}}},[n("td",{staticClass:"icon-column icon-push"},[n("img",{attrs:{src:s("ba25"),alt:""}})]),n("td",[t._v(t._s(t.$t("notifications.PUSH_DESC")))])])])]),t.savingSubscriber?n("div",{staticClass:"saving-subscriber"},[n("img",{attrs:{src:s("cf1c"),alt:""}})]):t._e()]):t._e()])],1),t.loading?n("div",{staticClass:"w3-row w3-center loader-gif-container"},[n("img",{staticClass:"loader-gif",attrs:{src:s("cf1c"),alt:""}})]):n("div",{},[t.activities.length>0?n("app-activity-table",{attrs:{activities:t.activities,addInAppState:!0,fullWidthCard:!0,showCardsPreview:"MODEL_SECTION"===t.contextType||"INITIATIVE"===t.contextType}}):n("div",{staticClass:"w3-padding w3-center"},[n("i",[t._v(t._s(t.$t("general.NO_RESULTS_FOUND")))])])],1),n("div",{staticClass:"w3-row w3-center"},[t.allShown?t._e():n("button",{staticClass:"w3-margin-top w3-margin-bottom w3-button app-button-light",attrs:{type:"button",name:"button"},on:{click:function(i){t.showMore()}}},[t._v("\n          show more...\n        ")])])]),n("div",{staticClass:"cursor-pointer w3-display-container",class:{"icon-button":!t.largeIcon,"icon-button-large":t.largeIcon},attrs:{slot:"reference"},on:{click:function(i){t.showNotificationsClicked()}},slot:"reference"},[t.loadedAll?n("span",[0===t.totalUnread?n("span",[t.notsDisabled?n("span",[t.isDarkBg&&t.isInheriting?n("img",{attrs:{src:s("7471"),alt:""}}):t._e(),!t.isDarkBg&&t.isInheriting?n("img",{attrs:{src:s("8783"),alt:""}}):t._e(),t.isDarkBg&&!t.isInheriting?n("img",{attrs:{src:s("1f3e"),alt:""}}):t._e(),t.isDarkBg||t.isInheriting?t._e():n("img",{attrs:{src:s("1b41"),alt:""}})]):t._e(),t.notsOnApp?n("span",[t.isDarkBg&&t.isInheriting?n("img",{attrs:{src:s("140e"),alt:""}}):t._e(),!t.isDarkBg&&t.isInheriting?n("img",{attrs:{src:s("ba7d"),alt:""}}):t._e(),t.isDarkBg&&!t.isInheriting?n("img",{attrs:{src:s("f744"),alt:""}}):t._e(),t.isDarkBg||t.isInheriting?t._e():n("img",{attrs:{src:s("0b48"),alt:""}})]):t._e(),t.notsPush?n("span",{staticClass:"icon-button-push"},[t.isDarkBg&&t.isInheriting?n("img",{attrs:{src:s("5b59"),alt:""}}):t._e(),!t.isDarkBg&&t.isInheriting?n("img",{attrs:{src:s("b211"),alt:""}}):t._e(),t.isDarkBg&&!t.isInheriting?n("img",{attrs:{src:s("ba25"),alt:""}}):t._e(),t.isDarkBg||t.isInheriting?t._e():n("img",{attrs:{src:s("025f"),alt:""}})]):t._e(),t.shouldHaveSubscriber?t._e():n("span",[n("img",{attrs:{src:s("0b48"),alt:""}})])]):n("span",[t.onlyNotificationsUnder?n("span",[t.notsDisabled?n("span",[t.isInheriting?t._e():n("img",{attrs:{src:s("1f3e"),alt:""}}),t.isInheriting?n("img",{attrs:{src:s("7471"),alt:""}}):t._e()]):t._e(),t.notsOnApp?n("span",[t.isInheriting?t._e():n("img",{attrs:{src:s("5628"),alt:""}}),t.isInheriting?n("img",{attrs:{src:s("e482"),alt:""}}):t._e()]):t._e(),t.notsPush?n("span",{staticClass:"icon-button-push"},[t.isInheriting?t._e():n("img",{attrs:{src:s("9903"),alt:""}}),t.isInheriting?n("img",{attrs:{src:s("e5d8"),alt:""}}):t._e()]):t._e(),t.shouldHaveSubscriber?t._e():n("span",[n("img",{attrs:{src:s("5628"),alt:""}})])]):n("span",[t.notsDisabled?n("span",[t.isInheriting?t._e():n("img",{attrs:{src:s("1f3e"),alt:""}}),t.isInheriting?n("img",{attrs:{src:s("7471"),alt:""}}):t._e()]):t._e(),t.notsOnApp?n("span",[t.isInheriting?t._e():n("img",{attrs:{src:s("77c2"),alt:""}}),t.isInheriting?n("img",{attrs:{src:s("67e5"),alt:""}}):t._e()]):t._e(),t.notsPush?n("span",{staticClass:"icon-button-push"},[t.isInheriting?t._e():n("img",{attrs:{src:s("46e3"),alt:""}}),t.isInheriting?n("img",{attrs:{src:s("bab0"),alt:""}}):t._e()]):t._e(),t.shouldHaveSubscriber?t._e():n("span",[n("img",{attrs:{src:s("77c2"),alt:""}})])])])]):n("span",[t.isDarkBg?n("img",{attrs:{src:s("f744"),alt:""}}):n("img",{attrs:{src:s("0b48"),alt:""}})])])])],1)},e=[],o=(s("ac6a"),s("7f7f"),s("cadf"),s("551c"),s("097d"),s("c97e")),a=s("ddb8"),r=s("bde3"),c={components:{"app-activity-table":o["a"]},props:{element:{type:Object,default:null},contextType:{type:String,default:"MODEL_SECTION"},isSelected:{type:Boolean,default:!1},parentIsSelected:{type:Boolean,default:!1},largeIcon:{type:Boolean,default:!1}},data:function(){return{showTable:!1,loading:!1,notifications:[],totalUnread:0,currentPage:0,showingAll:!0,showingMoreNotifications:!1,allShown:!1,toggleShow:!1,ws_subscription:null,subscriber:null,inheritedFrom:null,gettingConfiguration:!0,showConfig:!1,savingSubscriber:!1}},watch:{triggerUpdateNotifications:function(){this.notifications.length>0&&this.updateNotifications(!1,5e3)},"$store.state.socket.connected":function(){this.handleSocket()},triggerUpdateSubscriber:function(){console.log("updatins subscriber due to triggerUpdateSubscriber"),this.isInheriting&&this.updateSubscriber()}},computed:{shouldHaveSubscriber:function(){return"MODEL_CARD"!==this.contextType},isDarkBg:function(){return this.parentIsSelected||this.isSelected},isInheriting:function(){return!!this.subscriber&&"INHERIT"===this.subscriber.inheritConfig},loadedAll:function(){return null!=this.applicableSubscriber},applicableSubscriber:function(){return this.subscriber?"CUSTOM"===this.subscriber.inheritConfig?this.subscriber:this.inheritedFrom:null},applicableSubscriberElementName:function(){if(this.inheritedFrom)switch(this.inheritedFrom.elementType){case"SECTION":return this.$t("activity.TITLE_AND_TYPE",{title:this.inheritedFrom.section.title,type:this.$t("model.SECTION")});case"INITIATIVE":return this.$t("activity.TITLE_AND_TYPE",{title:this.inheritedFrom.initiative.meta.name,type:this.$t("initiatives.INITIATIVE")});case"COLLECTIVEONE":return this.$t("activity.GLOBAL_NOTIFICATIONS_PREFS")}return""},subscriptionType:function(){switch(this.contextType){case"MODEL_SECTION":return"SECTION";default:return this.contextType}},notsDisabledProto:function(){return{inAppConfig:"DISABLED",pushConfig:"DISABLED",emailNowConfig:"DISABLED",emailSummaryConfig:"DISABLED",emailSummaryPeriodConfig:"WEEKLY"}},notsOnAppProto:function(){return{inAppConfig:"ALL_EVENTS",pushConfig:"ONLY_MENTIONS",emailNowConfig:"ONLY_MENTIONS",emailSummaryConfig:"ALL_EVENTS",emailSummaryPeriodConfig:"WEEKLY"}},notsPushProto:function(){return{inAppConfig:"ALL_EVENTS",pushConfig:"ALL_EVENTS",emailNowConfig:"ALL_EVENTS",emailSummaryConfig:"ALL_EVENTS",emailSummaryPeriodConfig:"DAILY"}},notsDisabled:function(){return!(!this.applicableSubscriber||!this.notsDisabledProto)&&this.compareSubscriptions(this.applicableSubscriber,this.notsDisabledProto)},notsOnApp:function(){return!(!this.applicableSubscriber||!this.notsOnAppProto)&&this.compareSubscriptions(this.applicableSubscriber,this.notsOnAppProto)},notsPush:function(){return!(!this.applicableSubscriber||!this.notsPushProto)&&this.compareSubscriptions(this.applicableSubscriber,this.notsPushProto)},inheritedFromIsNotsDisabled:function(){return!(!this.inheritedFrom||!this.notsDisabledProto)&&this.compareSubscriptions(this.inheritedFrom,this.notsDisabledProto)},inheritedFromIsNotsOnApp:function(){return!(!this.inheritedFrom||!this.notsOnAppProto)&&this.compareSubscriptions(this.inheritedFrom,this.notsOnAppProto)},inheritedFromIsNotsPush:function(){return!(!this.inheritedFrom||!this.notsPushProto)&&this.compareSubscriptions(this.inheritedFrom,this.notsPushProto)},elementTitle:function(){switch(this.contextType){case"MODEL_CARD":return"this card";case"MODEL_SECTION":return this.element.title;case"INITIATIVE":return this.element.meta.name}return"this element"},contextElementId:function(){return this.element?this.element.id:"00000000-0000-0000-0000-000000000000"},activities:function(){var t=[];return this.notifications.forEach(function(i){var s=i.activity;s.inAppState=i.inAppState,t.push(s)}),t},url:function(){return"/1/notifications/"+this.contextType+"/"+this.contextElementId},triggerUpdateNotifications:function(){return this.$store.state.support.triggerUpdateNotifications},triggerUpdateSubscriber:function(){return this.$store.state.support.triggerUpdateSubscriber},notificationsHere:function(){var t=[];switch(this.contextType){case"MODEL_CARD":for(var i in this.notifications)this.notifications[i].activity.modelCardWrapper&&this.notifications[i].activity.modelCardWrapper.id===this.contextElementId&&t.push(this.notifications[i]);break;case"MODEL_SECTION":for(var s in this.notifications)this.notifications[s].activity.modelSection&&this.notifications[s].activity.modelSection.id===this.contextElementId&&t.push(this.notifications[s]);break;case"INITIATIVE":for(var n in this.notifications)this.notifications[n].activity.initiative&&this.notifications[n].activity.initiative.id===this.contextElementId&&t.push(this.notifications[n])}return t},notificationsHereMessages:function(){return this.notificationsHere.filter(function(t){return"MESSAGE_POSTED"===t.activity.type})},onlyNotificationsUnder:function(){return this.notifications.length>0&&0===this.notificationsHere.length},popperOptions:function(){return{placement:"right",modifiers:{preventOverflow:{enabled:!0,boundariesElement:"viewport"}}}}},methods:{setCustom:function(){this.subscriber.inheritConfig="CUSTOM",this.copySubscriberConfig(this.subscriber,this.inheritedFrom),this.saveSubscriber()},setInherited:function(){this.subscriber.inheritConfig="INHERIT",this.saveSubscriber(),this.updateInheritedFrom()},setDisabled:function(){this.copySubscriberConfig(this.subscriber,this.notsDisabledProto),this.saveSubscriber()},setOnApp:function(){this.copySubscriberConfig(this.subscriber,this.notsOnAppProto),this.saveSubscriber()},setPush:function(){this.checkAndSubscribeToPushNots(),this.copySubscriberConfig(this.subscriber,this.notsPushProto),this.saveSubscriber()},saveSubscriber:function(){var t=this;this.savingSubscriber=!0,this.axios.put("/1/notifications/subscriber/"+this.subscriptionType+"/"+this.contextElementId,this.subscriber).then(function(i){t.savingSubscriber=!1,t.$store.commit("triggerUpdateSubscriber")}).catch(function(i){t.savingSubscriber=!1,console.error(i),t.updateSubscriber()})},compareSubscriptions:function(t,i){return t.inAppConfig===i.inAppConfig&&t.pushConfig===i.pushConfig&&t.emailNowConfig===i.emailNowConfig&&t.emailSummaryConfig===i.emailSummaryConfig&&t.emailSummaryPeriodConfig===i.emailSummaryPeriodConfig},copySubscriberConfig:function(t,i){t.inAppConfig=i.inAppConfig,t.pushConfig=i.pushConfig,t.emailNowConfig=i.emailNowConfig,t.emailSummaryConfig=i.emailSummaryConfig,t.emailSummaryPeriodConfig=i.emailSummaryPeriodConfig},toggleShowAll:function(){this.showingAll?this.showUnreadOnly():this.showAll()},toggleConfiguration:function(){this.showConfig=!this.showConfig,null==this.inheritedFrom&&this.updateInheritedFrom()},showAll:function(){this.showingAll=!0,this.updateNotifications(!1,1)},showUnreadOnly:function(){this.showingAll=!1,this.updateNotifications(!1,1)},updateNotifications:function(t,i,s){var n=this;t=t||!1,i=i||5e3,s="undefined"===typeof s||s,this.showingMoreNotifications||setTimeout(function(){n.updateNotificationsDelayed(t,s)},i)},updateNotificationsDelayed:function(t,i){var s=this;i&&(this.loading=!0),this.axios.get(this.url,{params:{page:0,size:10,onlyUnread:!this.showingAll}}).then(function(i){s.loading=!1,s.notifications=i.data.data.notifications,s.totalUnread=i.data.data.totalUnread,s.allShown=s.notifications.length<10,t&&s.isSelected&&"ModelSectionMessages"===s.$route.name&&s.messageNotificationsRead(),s.$store.dispatch("addPushNotifications",s.notifications)}).catch(function(t){console.log(t)})},addNotifications:function(){var t=this;this.showingMoreNotifications=!0,this.axios.get(this.url,{params:{page:this.currentPage,size:10,onlyUnread:!1}}).then(function(i){i.data.data.length<10&&(t.allShown=!0),t.notifications=t.notifications.concat(i.data.data.notifications),t.totalUnread=i.data.data.totalUnread}).catch(function(t){console.log(t)})},allNotificationsRead:function(){var t=this;this.axios.put(this.url+"/read",{}).then(function(i){t.toggleShow=!t.toggleShow,t.$store.commit("triggerUpdateNotifications"),t.updateNotifications(!1,1),t.hide()}).catch(function(t){console.log(t)})},messageNotificationsRead:function(){var t=this,i=this.notificationsHereMessages.map(function(t){return t.id});i.length>0&&this.axios.put("/1/notifications/read",i).then(function(i){t.$store.commit("triggerUpdateNotifications"),t.updateNotifications(!1,1)}).catch(function(t){console.log(t)})},showMore:function(){this.currentPage+=1,this.addNotifications()},clickOutsideNotifications:function(){this.preventClickOutside||this.showTable&&this.hide()},showNotificationsClicked:function(){var t=this;this.showTable?this.hide():(this.show(),this.preventClickOutside=!0,setTimeout(function(){t.preventClickOutside=!1},500))},hide:function(){this.showTable=!1,this.showingMoreNotifications=!1},show:function(){this.showTable=!0},closeThis:function(){this.toggleShow=!this.toggleShow},handleSocket:function(){var t=this,i="";switch(this.contextType){case"MODEL_CARD":i="/channel/activity/model/card/"+this.contextElementId;break;case"MODEL_SECTION":i="/channel/activity/model/section/"+this.contextElementId;break;case"INITIATIVE":i="/channel/activity/model/initiative/"+this.contextElementId;break;case"COLLECTIVEONE":i="/channel/activity/user/"+this.$store.state.user.profile.c1Id;break}this.ws_subscription=this.$store.dispatch("subscribe",{url:i,onMessage:function(i){var s=i.body;"UPDATE"===s&&t.updateNotifications(!0)}})},updateInheritedFrom:function(){var t=this;this.axios.get("/1/notifications/subscriber/"+this.subscriptionType+"/"+this.contextElementId+"/inheritFrom").then(function(i){t.inheritedFrom=i.data.data})},updateSubscriber:function(){var t=this;this.shouldHaveSubscriber?(this.gettingConfiguration=!0,this.axios.get("/1/notifications/subscriber/"+this.subscriptionType+"/"+this.contextElementId).then(function(i){t.gettingConfiguration=!1,t.subscriber=i.data.data,"INHERIT"===t.subscriber.inheritConfig&&(t.inheritedFrom=t.subscriber.applicableSubscriber)})):this.gettingConfiguration=!1},checkAndSubscribeToPushNots:function(){var t=this;a["a"].pushManager.getSubscription().then(function(i){if(null==i){var s=Object(r["h"])("BBcRe82WmBXvwlP1sJNGSXFsFbyzjm2FMt40JpJQq7vlFDgOjEpjol0stPgBYVNzyhWLKvMh37X_oePINR15kBA");console.log("subscribing"),a["a"].pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:s}).then(function(i){t.$store.dispatch("updateSubscription")},function(t){console.log("pushManager.subscribe Error:"+t)})}else console.log(i)}).catch(function(t){console.log("error getting subscription"),console.log(t)})}},created:function(){this.updateNotifications(!0,1),this.handleSocket(),this.updateSubscriber()},beforeDestroy:function(){this.$store.dispatch("unsubscribe",this.ws_subscription)}},h=c,l=(s("bb3a"),s("2877")),u=Object(l["a"])(h,n,e,!1,null,"1b908dfe",null);u.options.__file="NotificationsList.vue";i["a"]=u.exports}}]);
//# sourceMappingURL=chunk-7704c145.acf880fc.js.map