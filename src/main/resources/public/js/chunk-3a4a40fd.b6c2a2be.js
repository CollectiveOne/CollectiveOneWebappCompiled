(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a4a40fd"],{"9aaa":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"initiative-content"},[t.$store.state.initiative.initiativeLoaded?a("div",{staticClass:"initiative-content-loaded"},[a("div",{staticClass:"w3-row initiative-row"},[a("transition",{attrs:{name:"slideDownUp"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideTopBar,expression:"!hideTopBar"}],staticClass:"w3-row initiative-header-row",on:{touchstart:function(i){t.touchStart(i)},touchend:function(i){t.touchEnd(i)}}},[a("app-header",{attrs:{inInitiative:!0}})],1)]),t.windowIsSmall?a("div",{staticClass:"w3-row hide-nail-container"},[a("div",{staticClass:"hide-nail drop-shadow-br cursor-pointer",on:{click:function(i){t.hideTopBar=!t.hideTopBar}}},[t.hideTopBar?a("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}):a("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}})])]):t._e(),t.accessDenied?a("div",{staticClass:"w3-center w3-container access-denied-panel"},[a("div",{staticClass:"w3-card-2 w3-round-large w3-padding error-panel"},[a("h4",[t._v(t._s(t.$t("initiatives.ACCESS_DENIED")))])])]):a("div",{staticClass:"w3-row initiative-content-row"},[a("transition",{attrs:{name:t.animationType,mode:"out-in",appear:""}},[a("router-view",{key:t.initiative.id})],1)],1)],1)]):a("div",{staticClass:"w3-row w3-center loader-gif-container"},[a("img",{staticClass:"loader-gif",attrs:{src:e("cf1c"),alt:""}})])])},n=[],s=e("0418"),o={components:{"app-header":s["a"]},data:function(){return{hideTopBar:!1,touchStartY:0}},computed:{accessDenied:function(){return this.$store.state.initiative.accessDenied},initiative:function(){return this.$store.state.initiative.initiative},animationType:function(){return this.$store.state.support.contentAnimationType},windowIsSmall:function(){return this.$store.state.support.windowIsSmall}},methods:{updateInitiative:function(){this.$store.dispatch("updateInitiative",this.$route.params.initiativeId)},newMember:function(){this.showNewMemberModal=!0},clickOutsideShowMenu:function(){this.showEditMenu=!1},login:function(){this.$store.state.user.lock.show()},userOptionsClicked:function(){this.showUserOptions=!this.showUserOptions},clickOutsideUser:function(){this.showUserOptions=!1},goMyProfile:function(){this.showUserOptions=!1,this.$router.push({name:"UserProfilePage",params:{userId:this.$store.state.user.profile.c1Id}})},goHome:function(){this.showUserOptions=!1,this.$router.push({name:"InitiativesHome"})},logoutUser:function(){this.$store.dispatch("logoutUser")},touchStart:function(t){this.touchStartY=t.changedTouches[0].clientY},touchEnd:function(t){var i=t.changedTouches[0].clientY-this.touchStartY,e=30;i>e?this.hideTopBar=!1:i<-1*e&&(this.hideTopBar=!0)}},watch:{"$route.params.initiativeId":function(t,i){this.updateInitiative()}},created:function(){3===this.$route.matched.length&&this.$router.push({name:"InitiativeModel",params:{initiativeId:this.$route.params.initiativeId}}),this.updateInitiative()}},r=o,c=(e("e2ed"),e("2877")),d=Object(c["a"])(r,a,n,!1,null,"7d0f779c",null);d.options.__file="InitiativeContent.vue";i["default"]=d.exports},e2ed:function(t,i,e){"use strict";var a=e("e580"),n=e.n(a);n.a},e580:function(t,i,e){}}]);
//# sourceMappingURL=chunk-3a4a40fd.b6c2a2be.js.map