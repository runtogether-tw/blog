(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8g21":function(t,e,a){},AL3G:function(t){t.exports=JSON.parse('{"botw":"薩爾達傳說 曠野之息","celeste":"Celeste"}')},CQcm:function(t,e,a){"use strict";a.r(e);var n=a("Wsvf"),i=a("Goad"),s=a("ERVD"),r=a("KfVs"),o=a("e+D6"),l=a("RrLf"),c=a("AL3G"),u={metaInfo:function(){return{title:""}},components:{MainContent:s.a,Pager:n.a,MenuAuthor:r.a,MenuTag:o.a,PostArticle:l.a},mixins:[i.a],data:function(){return{gameI18n:c}}},p=a("KHd+"),d=null,v=Object(p.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main-content",{scopedSlots:t._u([{key:"content",fn:function(){return[t.$page.game?a("h1",{staticClass:"mb-4"},[t._v("\n      遊戲: "+t._s(t.gameI18n[t.$page.game.title])+"\n    ")]):t._e(),t._l(t.$page.game.belongsTo.edges,(function(t,e){return a("post-article",{key:"article-"+e,staticClass:"my-3",attrs:{post:t.node}})})),a("Pager",{staticClass:"PostList__pagination",attrs:{info:t.$page.game.belongsTo.pageInfo}})]},proxy:!0},{key:"sidebar",fn:function(){return[a("div",{class:{Sidebar__sticky:!t.$vuetify.breakpoint.smAndDown}},[a("h3",[t._v("Run Together TW")]),a("div",[a("g-link",{attrs:{to:"http://github.com/runtogether-tw/"}},[a("v-icon",[t._v("fab fa-github-square")])],1)],1),a("div",{staticClass:"Sidebar__menuBlock"},[a("h3",[t._v("\n          過往活動\n        ")]),a("hr"),a("g-link",{attrs:{to:"https://sites.google.com/site/tgm3rt2018/"}},[t._v("\n          Run Together 2018\n        ")])],1),a("menu-author",{staticClass:"Sidebar__menuBlock"}),a("menu-tag",{staticClass:"Sidebar__menuBlock"})],1)]},proxy:!0}])})}),[],!1,null,null,null);"function"==typeof d&&d(v);e.default=v.exports},ERVD:function(t,e,a){"use strict";var n={components:{},data:function(){return{showSideBar:!1}},computed:{breakpoint:function(){return this.$vuetify.breakpoint.smAndDown},routeHash:function(){return this.$route.hash}},watch:{routeHash:function(){this.showSideBar=!1}}},i=(a("KiUb"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{scopedSlots:t._u([{key:"hamburger",fn:function(){return[a("label",{directives:[{name:"show",rawName:"v-show",value:t.breakpoint,expression:"breakpoint"}],staticClass:"burger",class:{"burger--open":t.showSideBar}},[a("span"),a("span"),a("span"),a("span"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.showSideBar,expression:"showSideBar"}],staticClass:"burger__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showSideBar)?t._i(t.showSideBar,null)>-1:t.showSideBar},on:{change:function(e){var a=t.showSideBar,n=e.target,i=!!n.checked;if(Array.isArray(a)){var s=t._i(a,null);n.checked?s<0&&(t.showSideBar=a.concat([null])):s>-1&&(t.showSideBar=a.slice(0,s).concat(a.slice(s+1)))}else t.showSideBar=i}}})])]},proxy:!0}])},[a("div",{staticClass:"container MainContent",class:{"MainContent--mobile":t.breakpoint}},[a("div",{staticClass:"MainContent__content"},[t._t("content")],2),a("div",{staticClass:"MainContent__sidebar",class:{"MainContent__sidebar--show":t.showSideBar}},[t._t("sidebar")],2)])])}),[],!1,null,null,null);e.a=s.exports},FDdq:function(t,e,a){},Goad:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("rB9j"),a("Rm1S");var n={methods:{getGamesVar:function(t){var e=t.match(/([a-zA-Z0-9_]*)[/]?([a-zA-Z0-9_]*)[#]?([a-zA-Z0-9_]*)[?]?([a-zA-Z0-9_&=-]*)*/);return{game:e[1]||null,level:e[2]||null,category:e[3]||null,var:e[4]||null}},getPostImg:function(t){if(!t)return null;var e=t.match(/<img src="([a-zA-Z0-9:/.]*)"/);return e&&e[1]||null}}}},KfVs:function(t,e,a){"use strict";var n=a("KHd+"),i=a("Kw5r"),s=i.default.config.optionMergeStrategies.computed,r={authors:{edges:[{node:{title:{name:"阿九",Twitchid:"id9000",img:"https://static-cdn.jtvnw.net/jtv_user_pictures/id9000-profile_image-1effadc2a2c9b046-300x300.jpeg"},path:"/author/id9000/"}},{node:{title:{name:"里斯",Twitchid:"chris38c28",img:"https://static-cdn.jtvnw.net/jtv_user_pictures/0989a030-8519-40d0-9810-4e9f8b4106a6-profile_image-300x300.png"},path:"/author/crs/"}}]}},o=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=i.default.observable({data:r}),e.computed=s({$static:function(){return e.__staticData.data}},e.computed))},l=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("作者列表")]),a("hr"),a("v-chip-group",{attrs:{column:""}},t._l(t.$static.authors.edges,(function(e){return a("v-menu",{key:"menu-"+e.node.title.name,attrs:{bottom:"",right:"",transition:"scale-transition",origin:"top left"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-chip",t._g({attrs:{pill:""}},i),[a("v-avatar",{attrs:{left:"",color:"#333333"}},[a("v-img",{attrs:{src:e.node.title.img}})],1),t._v("\n          "+t._s(e.node.title.name)+"\n        ")],1)]}}],null,!0)},[a("v-card",{attrs:{width:"300"}},[a("v-list",{attrs:{dark:""}},[a("v-list-item",[a("v-list-item-avatar",{attrs:{color:"#333333"}},[a("v-img",{attrs:{src:e.node.title.img}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.node.title.name))]),a("v-list-item-subtitle",[t._v(t._s(e.node.title.Twitchid))])],1)],1)],1),a("v-list",[a("v-list-item",{attrs:{to:e.node.path}},[a("v-list-item-action",[a("v-icon",[t._v("fas fa-list-ul")])],1),a("v-list-item-subtitle",[t._v("\n              查看文章列表\n            ")])],1),a("v-list-item",{attrs:{href:"http://twitch.tv/"+e.node.title.Twitchid,target:"_blank",rel:"nofollow noopener noreferrer"}},[a("v-list-item-action",[a("v-icon",[t._v("fab fa-twitch")])],1),a("v-list-item-subtitle",[t._v("\n              瀏覽Twitch頻道\n            ")])],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null);"function"==typeof o&&o(l);e.a=l.exports},KiUb:function(t,e,a){"use strict";a("8g21")},RrLf:function(t,e,a){"use strict";var n=a("Goad"),i=a("AL3G"),s={props:{post:{type:Object,default:null}},mixins:[n.a],data:function(){return{gameI18n:i}},computed:{},created:function(){}},r=(a("jlzh"),a("KHd+")),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.post?a("article",[a("v-card",{staticClass:"mx-auto"},[a("g-link",{attrs:{to:t.post.path}},[t.getPostImg(t.post.content)?a("v-img",{staticClass:"white--text align-end",attrs:{height:"250px",src:t.getPostImg(t.post.content)}},[a("v-card-title",{staticClass:"text-shadow",class:t.$vuetify.breakpoint.smAndUp&&"PostArticle__title--lg"},[t._v(t._s(t.post.title))])],1):a("v-card-title",{staticClass:"text--primary",class:t.$vuetify.breakpoint.smAndUp&&"PostArticle__title--lg"},[t._v(t._s(t.post.title))]),a("v-card-subtitle",{staticClass:"py-2"},[t._v(t._s(t.post.subtitle))])],1),a("div",{staticClass:"mx-4",class:{"PostArticle__game--vertical":t.$vuetify.breakpoint.smAndDown}},[t.post.game?[a("g-link",{attrs:{to:t.post.game.path}},[t._v("\n          "+t._s(t.gameI18n[t.post.game.title])+"\n        ")]),!t.$vuetify.breakpoint.smAndDown&&t.post.tags.length?a("span",[t._v("—")]):t._e()]:t._e(),t.post.tags.length?[a("span",{class:!t.$vuetify.breakpoint.smAndDown&&"mx-2"},t._l(t.post.tags,(function(e){return a("g-link",{key:t.post.title+"-"+e.title,staticClass:"mr-1 pointer",attrs:{to:e.path}},[a("v-chip",{attrs:{small:""}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)})),1)]:t._e()],2),a("v-card-text",{staticClass:"PostArticle__author"},[a("v-avatar",{attrs:{color:"#333333"}},[a("img",{attrs:{src:t.post.author.title.img,alt:t.post.author.title.name}})]),a("div",{staticClass:"PostArticle__info"},[a("g-link",{attrs:{to:"/author/"+t.post.author.id}},[a("div",{staticClass:"text--primary"},[t._v(t._s(t.post.author.title.name))])]),a("div",[t._v(t._s(t.post.date)+"．"+t._s(t.post.timeToRead)+" min read")])],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.a=o.exports},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("Kw5r");var n=a("DOVJ"),i=(a("Y6W1"),a("VTBJ")),s=(a("qePV"),a("rB9j"),a("UxlC"),a("2B1R"),a("ma9I"),a("fVfk")),r={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,r=e.data,l=e.parent,c=a.info,u=a.showLinks,p=a.showNavigation,d=a.ariaLabel,v=function(t,e){var a=t.currentPage,n=void 0===a?1:a,i=t.totalPages,s=void 0===i?1:i,r=Math.ceil(e/2),o=Math.floor(n-r),l=Math.floor(n+r);s<=e?(o=0,l=s):n<=r?(o=0,l=e):n+r>=s&&(o=s-e,l=s);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:n,total:s,start:o,end:l,pages:c}}(c,a.range),g=v.current,f=v.total,h=v.pages,_=v.start,m=v.end,b=Object(s.d)(l.$route),y=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===g&&(r=a.ariaCurrentLabel);var c={to:o(b,e),exact:!0};return a.activeLinkClass&&(c.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(c.exactActiveClass=a.exactActiveLinkClass),t(n.a,{class:[a.linkClass,l],attrs:Object(i.a)(Object(i.a)({},c),{},{"aria-label":r.replace("%n",e),"aria-current":g===e})},[s])},C=u?h.map((function(t){return y(t,t,a.ariaLinkLabel)})):[];if(p){var k=a.firstLabel,w=a.prevLabel,S=a.nextLabel,L=a.lastLabel,x=a.ariaFirstLabel,A=a.ariaPrevLabel,B=a.ariaNextLabel,P=a.ariaLastLabel,$=a.firstClass,j=a.prevClass,D=a.nextClass,E=a.lastClass,O=a.navClass;g>1&&C.unshift(y(g-1,w,A,[j,O])),_>0&&C.unshift(y(1,k,x,[$,O])),g<f&&C.push(y(g+1,S,B,[D,O])),m<f&&C.push(y(f,L,P,[E,O]))}return C.length<2?null:t("nav",Object(i.a)(Object(i.a)({},r),{},{attrs:{role:"navigation","aria-label":d}}),C)}};function o(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(s.g)(t)+"/".concat(e).concat(a):t}a("6NbQ")},"e+D6":function(t,e,a){"use strict";var n=a("KHd+"),i=a("Kw5r"),s=i.default.config.optionMergeStrategies.computed,r={tags:{edges:[{node:{title:"RTA筆記",path:"/tag/RTA%E7%AD%86%E8%A8%98/"}},{node:{title:"薩爾達系列",path:"/tag/%E8%96%A9%E7%88%BE%E9%81%94%E7%B3%BB%E5%88%97/"}},{node:{title:"網站相關",path:"/tag/%E7%B6%B2%E7%AB%99%E7%9B%B8%E9%97%9C/"}}]}},o=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=i.default.observable({data:r}),e.computed=s({$static:function(){return e.__staticData.data}},e.computed))},l=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("標籤")]),a("hr"),a("v-chip-group",{attrs:{column:""}},t._l(t.$static.tags.edges,(function(e){return a("g-link",{key:"menu-tag-"+e.node.title,attrs:{to:e.node.path}},[a("v-chip",{attrs:{small:""}},[t._v("\n        "+t._s(e.node.title)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);"function"==typeof o&&o(l);e.a=l.exports},jlzh:function(t,e,a){"use strict";a("FDdq")}}]);