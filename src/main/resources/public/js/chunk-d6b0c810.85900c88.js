(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6b0c810"],{"17aa":function(o,t,i){},7747:function(o,t,i){"use strict";i.r(t);var s=function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",{staticClass:"app-view"},[i("div",{staticClass:"w3-row app-content"},[i("router-view")],1)])},n=[],e={components:{},computed:{windowIsSmall:function(){return this.$store.state.support.windowIsSmall}},methods:{checkWindowSize:function(){var o=window.innerWidth<600;this.windowIsSmall!==o&&this.$store.commit("setWindowIsSmall",o)},setWindowFocus:function(){console.log("window focused"),this.$store.commit("setWindowIsFocus",!0)},setWindowBlur:function(){console.log("window blur"),this.$store.commit("setWindowIsFocus",!1)}},created:function(){this.checkWindowSize(),this.windowIsSmall?this.$store.commit("setWindowIsSmall",!0):this.$store.commit("setWindowIsSmall",!1),window.addEventListener("resize",this.checkWindowSize),window.onfocus=this.setWindowFocus,window.onblur=this.setWindowBlur}},c=e,w=(i("c5ac"),i("2877")),d=Object(w["a"])(c,s,n,!1,null,"efd575f6",null);d.options.__file="AppView.vue";t["default"]=d.exports},c5ac:function(o,t,i){"use strict";var s=i("17aa"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-d6b0c810.85900c88.js.map