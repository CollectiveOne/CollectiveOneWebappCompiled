(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3507c006"],{"35e6":function(t,e,i){},"45d0":function(t,e,i){},6941:function(t,e,i){"use strict";var s=i("c510"),n=i.n(s);n.a},a4b3:function(t,e,i){"use strict";var s=i("45d0"),n=i.n(s);n.a},b0df:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"model-section-read-component"},[s("div",{staticClass:"slider-container"},[s("transition",{attrs:{name:"slideDownUp"}},[t.showCardModal?s("app-model-card-modal",{attrs:{isNew:!1,cardWrapperId:t.$route.params.cardId},on:{close:function(e){t.closeCardModal()}}}):t._e()],1)],1),s("div",{staticClass:"model-section-read-container"},[s("transition",{attrs:{name:"slideRightLeft"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.expandModelNav,expression:"expandModelNav"}],staticClass:"section-nav dark-gray"},[s("app-model-section-nav-simple",{attrs:{section:t.section}})],1)]),s("div",{staticClass:"hide-nav-div-container"},[s("div",{staticClass:"hide-nav-div drop-shadow-br",on:{click:function(e){t.expandModelNavClicked()}}},[t.expandModelNav?s("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}):s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"section-content"},[s("div",{staticClass:"w3-row control-btns-row"},[s("div",{staticClass:"w3-col s12 m4"},[s("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":t.isSummary},on:{click:function(e){t.summaryView()}}},[s("img",{attrs:{src:i("8b2d"),alt:""}})]),s("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":t.isCard},on:{click:function(e){t.cardView()}}},[s("img",{attrs:{src:i("10ff"),alt:""}})]),s("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":t.isDoc},on:{click:function(e){t.docView()}}},[s("img",{attrs:{src:i("9e28"),alt:""}})])]),t.isPublic?s("div",{staticClass:"w3-col s12 m8 "},[s("div",{staticClass:"control-btn section-link w3-left"},[s("app-model-section-link",{attrs:{section:t.section,text:t.$t("model.SEE_IN_COLLECTIVEONE")}}),t._v(".\n          ")],1)]):t._e()]),s("div",{staticClass:"w3-row section-row"},[t.loading?s("div",{staticClass:"w3-row w3-center loader-gif-container"},[s("img",{staticClass:"loader-gif",attrs:{src:i("cf1c"),alt:""}})]):s("app-model-section",{class:{"section-component-doc":"doc"===t.cardsType},attrs:{section:t.section,readOnly:!0,showThisTitle:!0,showPrivate:!1,showShared:!1,showCommon:!0,cardRouteName:"ModelSectionReadCard",cardsType:t.cardsType}})],1)])],1)])},n=[],a=(i("a481"),i("7f7f"),i("bca5")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"model-nav-container-large"},[i("div",{staticClass:"model-nav-container"},[i("div",{staticClass:"w3-row"},[i("app-model-section-nav-item-simple",{attrs:{section:t.section},on:{"section-selected":function(e){t.sectionSelected(e)}}})],1)])])},c=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-row section-nav-item-container"},[i("div",{staticClass:"w3-row section-nav-item-first-row"},[i("div",{staticClass:"circle-div cursor-pointer",on:{click:function(e){t.toggleSubsections()}}},[t.hasSubsections?i("div",[t.showSubsections?i("i",{staticClass:"fa fa-chevron-circle-down",attrs:{"aria-hidden":"true"}}):i("i",{staticClass:"fa fa-chevron-circle-right",attrs:{"aria-hidden":"true"}})]):i("div",[i("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"},on:{click:function(e){t.sectionSelected()}}})])]),i("div",{staticClass:"title-div cursor-pointer noselect",on:{click:function(e){t.sectionSelected()},dblclick:function(e){t.toggleSubsections()}}},[t._v("\n      "+t._s(t.sectionTitle)+"\n    ")])]),i("div",{class:{"slider-container":t.animating}},[i("transition",{attrs:{name:"slideDownUp"},on:{"before-enter":function(e){t.animating=!0},"after-enter":function(e){t.animating=!1},"before-leave":function(e){t.animating=!0},"after-leave":function(e){t.animating=!1}}},[t.showSubsections&&t.subsections.length>0?i("div",{staticClass:"w3-row subsections-container"},t._l(t.subsections,function(e,s){return i("app-model-section-nav-item-simple",{key:e.id,staticClass:"subsection-row",attrs:{section:e},on:{"section-selected":function(e){t.$emit("section-selected",e)}}})})):t._e()])],1)])},d=[],l=i("cb70"),u={name:"app-model-section-nav-item-simple",components:{},props:{section:{type:Object,default:null}},data:function(){return{showSubsections:!0,animating:!1}},watch:{},computed:{subsections:function(){return null!=this.section?Object(l["a"])(this.section.subsectionsCommon.slice()):[]},highlight:function(){return this.highlightLevelUse>0},sectionTitle:function(){return this.section?this.section.title:""},hasSubsections:function(){return!!this.section&&this.section.nSubsections>0}},methods:{toggleSubsections:function(){this.showSubsections=!this.showSubsections},sectionSelected:function(){this.$emit("section-selected",this.section)}}},m=u,h=(i("d01a"),i("2877")),f=Object(h["a"])(m,r,d,!1,null,"020d032c",null);f.options.__file="ModelSectionNavItemSimple.vue";var v=f.exports,p={components:{"app-model-section-nav-item-simple":v},props:{section:{type:Object,default:null}},methods:{sectionSelected:function(t){var e=document.getElementById(t.id);e.scrollIntoView({behavior:"smooth",block:"start"})}}},w=p,b=(i("6941"),Object(h["a"])(w,o,c,!1,null,"5d8e2864",null));b.options.__file="ModelNavSimple.vue";var C=b.exports,g=i("8925"),S={components:{"app-model-section":a["a"],"app-model-section-nav-simple":C,"app-model-section-link":g["a"]},data:function(){return{section:null,initiative:null,loading:!1,showCardModal:!1,expandModelNav:!0}},computed:{sectionId:function(){return this.$route.params.sectionId},cardsType:function(){return this.$store.state.viewParameters.cardsType},isSummary:function(){return"summary"===this.cardsType},isCard:function(){return"card"===this.cardsType},isDoc:function(){return"doc"===this.cardsType},isPublic:function(){return null!==this.initiative&&(null!==this.initiative.meta.visibility&&"PUBLIC"===this.initiative.meta.visibility)}},watch:{"$route.params.sectionId":function(){this.updateSection()},"$route.name":function(){this.checkCardSubroute()}},methods:{expandModelNavClicked:function(){this.expandModelNav=!this.expandModelNav},updateInitiative:function(){var t=this;this.axios.get("/1/initiative/"+this.section.initiativeId,{params:{addAssetsIds:!1,addSubinitiatives:!1,addParents:!1,addMembers:!1,addLoggedUser:!1}}).then(function(e){"success"===e.data.result&&(t.initiative=e.data.data)}).catch(function(t){console.log(t)})},updateSection:function(){var t=this;this.loading=!0,this.axios.get("/1/model/section/"+this.sectionId,{params:{levels:999}}).then(function(e){t.loading=!1,"success"===e.data.result&&(t.section=e.data.data,t.checkCardSubroute(),t.updateInitiative())}).catch(function(t){console.log(t)})},checkCardSubroute:function(){this.showCardModal=!1,"ModelSectionReadCard"===this.$route.name&&this.section&&(this.showCardModal=!0)},closeCardModal:function(){this.$router.replace({name:"ModelSectionRead"})},summaryView:function(){this.$store.commit("setCardsType","summary")},cardView:function(){this.$store.commit("setCardsType","card")},docView:function(){this.$store.commit("setCardsType","doc")}},beforeCreate:function(){this.$store.commit("setCardsType","doc")},created:function(){this.updateSection()}},y=S,k=(i("a4b3"),Object(h["a"])(y,s,n,!1,null,"322f0b79",null));k.options.__file="ModelSectionRead.vue";e["default"]=k.exports},c510:function(t,e,i){},d01a:function(t,e,i){"use strict";var s=i("35e6"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-3507c006.12c70ea0.js.map