(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2qYH":function(t,a,e){"use strict";e.r(a);var n=e("Wsvf"),i=e("Goad"),s=e("ERVD"),r=e("KfVs"),o=e("e+D6"),l=e("RrLf"),c=e("AL3G"),u={metaInfo:function(){return{title:""}},components:{MainContent:s.a,Pager:n.a,MenuAuthor:r.a,MenuTag:o.a,PostArticle:l.a},mixins:[i.a],data:function(){return{gameI18n:c}}},p=e("KHd+"),d=null,v=Object(p.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main-content",{scopedSlots:t._u([{key:"content",fn:function(){return[e("h1",{staticClass:"mb-4"},[t._v("Tag: "+t._s(t.$page.tag.title))]),t._l(t.$page.tag.belongsTo.edges,(function(t,a){return e("post-article",{key:"article-"+a,staticClass:"my-3",attrs:{post:t.node}})})),e("Pager",{staticClass:"PostList__pagination",attrs:{info:t.$page.tag.belongsTo.pageInfo}})]},proxy:!0},{key:"sidebar",fn:function(){return[e("div",{class:{Sidebar__sticky:!t.$vuetify.breakpoint.smAndDown}},[e("h3",[t._v("Run Together TW")]),e("div",[e("g-link",{attrs:{to:"http://github.com/runtogether-tw/"}},[e("v-icon",[t._v("fab fa-github-square")])],1)],1),e("div",{staticClass:"Sidebar__menuBlock"},[e("h3",[t._v("\n          過往活動\n        ")]),e("hr"),e("g-link",{attrs:{to:"https://sites.google.com/site/tgm3rt2018/"}},[t._v("\n          Run Together 2018\n        ")])],1),e("menu-author",{staticClass:"Sidebar__menuBlock"}),e("menu-tag",{staticClass:"Sidebar__menuBlock"})],1)]},proxy:!0}])})}),[],!1,null,null,null);"function"==typeof d&&d(v);a.default=v.exports},"8g21":function(t,a,e){},AL3G:function(t){t.exports=JSON.parse('{"botw":"薩爾達傳說 曠野之息","celeste":"Celeste","ff7":"Final Fantasy 7","ff7r":"FINAL FANTASY VII 重製版"}')},ERVD:function(t,a,e){"use strict";var n={components:{},data:function(){return{showSideBar:!1}},computed:{breakpoint:function(){return this.$vuetify.breakpoint.smAndDown},routeHash:function(){return this.$route.hash}},watch:{routeHash:function(){this.showSideBar=!1}}},i=(e("KiUb"),e("KHd+")),s=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",{scopedSlots:t._u([{key:"hamburger",fn:function(){return[e("label",{directives:[{name:"show",rawName:"v-show",value:t.breakpoint,expression:"breakpoint"}],staticClass:"burger",class:{"burger--open":t.showSideBar}},[e("span"),e("span"),e("span"),e("span"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.showSideBar,expression:"showSideBar"}],staticClass:"burger__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showSideBar)?t._i(t.showSideBar,null)>-1:t.showSideBar},on:{change:function(a){var e=t.showSideBar,n=a.target,i=!!n.checked;if(Array.isArray(e)){var s=t._i(e,null);n.checked?s<0&&(t.showSideBar=e.concat([null])):s>-1&&(t.showSideBar=e.slice(0,s).concat(e.slice(s+1)))}else t.showSideBar=i}}})])]},proxy:!0}])},[e("div",{staticClass:"container MainContent",class:{"MainContent--mobile":t.breakpoint}},[e("div",{staticClass:"MainContent__content"},[t._t("content")],2),e("div",{staticClass:"MainContent__sidebar",class:{"MainContent__sidebar--show":t.showSideBar}},[t._t("sidebar")],2)])])}),[],!1,null,null,null);a.a=s.exports},FDdq:function(t,a,e){},Goad:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("rB9j"),e("Rm1S");var n={methods:{getGamesVar:function(t){var a=t.match(/([a-zA-Z0-9_]*)[/]?([a-zA-Z0-9_]*)[#]?([a-zA-Z0-9_]*)[?]?([a-zA-Z0-9_&=-]*)*/);return{game:a[1]||null,level:a[2]||null,category:a[3]||null,var:a[4]||null}},getPostImg:function(t){if(!t)return null;var a=t.match(/<img src="([a-zA-Z0-9:/.]*)"/);return a&&a[1]||null}}}},KfVs:function(t,a,e){"use strict";var n=e("KHd+"),i=e("Kw5r"),s=i.default.config.optionMergeStrategies.computed,r={authors:{edges:[{node:{title:{name:"阿九",Twitchid:"id9000",img:"https://static-cdn.jtvnw.net/jtv_user_pictures/id9000-profile_image-1effadc2a2c9b046-300x300.jpeg"},path:"/author/id9000/"}},{node:{title:{name:"MacauYeah",Twitchid:"macauyeah",img:"https://static-cdn.jtvnw.net/jtv_user_pictures/1bae1997-e259-4480-b953-cdca1bd76f89-profile_image-300x300.png"},path:"/author/macauyeah/"}},{node:{title:{name:"里斯",Twitchid:"chris38c28",img:"https://static-cdn.jtvnw.net/jtv_user_pictures/0989a030-8519-40d0-9810-4e9f8b4106a6-profile_image-300x300.png"},path:"/author/crs/"}}]}},o=function(t){var a=t.options;a.__staticData?a.__staticData.data=r:(a.__staticData=i.default.observable({data:r}),a.computed=s({$static:function(){return a.__staticData.data}},a.computed))},l=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",[t._v("作者列表")]),e("hr"),e("v-chip-group",{attrs:{column:""}},t._l(t.$static.authors.edges,(function(a){return e("v-menu",{key:"menu-"+a.node.title.name,attrs:{bottom:"",right:"",transition:"scale-transition",origin:"top left"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[e("v-chip",t._g({attrs:{pill:""}},i),[e("v-avatar",{attrs:{left:"",color:"#333333"}},[e("v-img",{attrs:{src:a.node.title.img}})],1),t._v("\n          "+t._s(a.node.title.name)+"\n        ")],1)]}}],null,!0)},[e("v-card",{attrs:{width:"300"}},[e("v-list",{attrs:{dark:""}},[e("v-list-item",[e("v-list-item-avatar",{attrs:{color:"#333333"}},[e("v-img",{attrs:{src:a.node.title.img}})],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.node.title.name))]),e("v-list-item-subtitle",[t._v(t._s(a.node.title.Twitchid))])],1)],1)],1),e("v-list",[e("v-list-item",{attrs:{to:a.node.path}},[e("v-list-item-action",[e("v-icon",[t._v("fas fa-list-ul")])],1),e("v-list-item-subtitle",[t._v("\n              查看文章列表\n            ")])],1),e("v-list-item",{attrs:{href:"http://twitch.tv/"+a.node.title.Twitchid,target:"_blank",rel:"nofollow noopener noreferrer"}},[e("v-list-item-action",[e("v-icon",[t._v("fab fa-twitch")])],1),e("v-list-item-subtitle",[t._v("\n              瀏覽Twitch頻道\n            ")])],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null);"function"==typeof o&&o(l);a.a=l.exports},KiUb:function(t,a,e){"use strict";e("8g21")},RrLf:function(t,a,e){"use strict";var n=e("Goad"),i=e("AL3G"),s={props:{post:{type:Object,default:null}},mixins:[n.a],data:function(){return{gameI18n:i}},computed:{},created:function(){}},r=(e("jlzh"),e("KHd+")),o=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.post?e("article",[e("v-card",{staticClass:"mx-auto"},[e("g-link",{attrs:{to:t.post.path}},[t.getPostImg(t.post.content)?e("v-img",{staticClass:"white--text align-end",attrs:{height:"250px",src:t.getPostImg(t.post.content)}},[e("v-card-title",{staticClass:"text-shadow",class:t.$vuetify.breakpoint.smAndUp&&"PostArticle__title--lg"},[t._v(t._s(t.post.title))])],1):e("v-card-title",{staticClass:"text--primary",class:t.$vuetify.breakpoint.smAndUp&&"PostArticle__title--lg"},[t._v(t._s(t.post.title))]),e("v-card-subtitle",{staticClass:"py-2"},[t._v(t._s(t.post.subtitle))])],1),e("div",{staticClass:"mx-4",class:{"PostArticle__game--vertical":t.$vuetify.breakpoint.smAndDown}},[t.post.game?[e("g-link",{attrs:{to:t.post.game.path}},[t._v("\n          "+t._s(t.gameI18n[t.post.game.title])+"\n        ")]),!t.$vuetify.breakpoint.smAndDown&&t.post.tags.length?e("span",[t._v("—")]):t._e()]:t._e(),t.post.tags.length?[e("span",{class:!t.$vuetify.breakpoint.smAndDown&&"mx-2"},t._l(t.post.tags,(function(a){return e("g-link",{key:t.post.title+"-"+a.title,staticClass:"mr-1 pointer",attrs:{to:a.path}},[e("v-chip",{attrs:{small:""}},[t._v("\n              "+t._s(a.title)+"\n            ")])],1)})),1)]:t._e()],2),e("v-card-text",{staticClass:"PostArticle__author"},[e("v-avatar",{attrs:{color:"#333333"}},[e("img",{attrs:{src:t.post.author.title.img,alt:t.post.author.title.name}})]),e("div",{staticClass:"PostArticle__info"},[e("g-link",{attrs:{to:"/author/"+t.post.author.id}},[e("div",{staticClass:"text--primary"},[t._v(t._s(t.post.author.title.name))])]),e("div",[t._v(t._s(t.post.date)+"．"+t._s(t.post.timeToRead)+" min read")])],1)],1)],1)],1):t._e()}),[],!1,null,null,null);a.a=o.exports},Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("Kw5r");var n=e("DOVJ"),i=(e("Y6W1"),e("VTBJ")),s=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ma9I"),e("fVfk")),r={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,r=a.data,l=a.parent,c=e.info,u=e.showLinks,p=e.showNavigation,d=e.ariaLabel,v=function(t,a){var e=t.currentPage,n=void 0===e?1:e,i=t.totalPages,s=void 0===i?1:i,r=Math.ceil(a/2),o=Math.floor(n-r),l=Math.floor(n+r);s<=a?(o=0,l=s):n<=r?(o=0,l=a):n+r>=s&&(o=s-a,l=s);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:n,total:s,start:o,end:l,pages:c}}(c,e.range),f=v.current,g=v.total,h=v.pages,_=v.start,m=v.end,b=Object(s.d)(l.$route),y=function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===f&&(r=e.ariaCurrentLabel);var c={to:o(b,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(n.a,{class:[e.linkClass,l],attrs:Object(i.a)(Object(i.a)({},c),{},{"aria-label":r.replace("%n",a),"aria-current":f===a})},[s])},w=u?h.map((function(t){return y(t,t,e.ariaLinkLabel)})):[];if(p){var C=e.firstLabel,k=e.prevLabel,S=e.nextLabel,L=e.lastLabel,x=e.ariaFirstLabel,A=e.ariaPrevLabel,B=e.ariaNextLabel,j=e.ariaLastLabel,P=e.firstClass,$=e.prevClass,D=e.nextClass,E=e.lastClass,T=e.navClass;f>1&&w.unshift(y(f-1,k,A,[$,T])),_>0&&w.unshift(y(1,C,x,[P,T])),f<g&&w.push(y(f+1,S,B,[D,T])),m<g&&w.push(y(g,L,j,[E,T]))}return w.length<2?null:t("nav",Object(i.a)(Object(i.a)({},r),{},{attrs:{role:"navigation","aria-label":d}}),w)}};function o(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(s.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},"e+D6":function(t,a,e){"use strict";var n=e("KHd+"),i=e("Kw5r"),s=i.default.config.optionMergeStrategies.computed,r={tags:{edges:[{node:{title:"RTA筆記",path:"/tag/RTA%E7%AD%86%E8%A8%98/"}},{node:{title:"薩爾達系列",path:"/tag/%E8%96%A9%E7%88%BE%E9%81%94%E7%B3%BB%E5%88%97/"}},{node:{title:"100%",path:"/tag/100%25/"}},{node:{title:"網站相關",path:"/tag/%E7%B6%B2%E7%AB%99%E7%9B%B8%E9%97%9C/"}}]}},o=function(t){var a=t.options;a.__staticData?a.__staticData.data=r:(a.__staticData=i.default.observable({data:r}),a.computed=s({$static:function(){return a.__staticData.data}},a.computed))},l=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",[t._v("標籤")]),e("hr"),e("v-chip-group",{attrs:{column:""}},t._l(t.$static.tags.edges,(function(a){return e("g-link",{key:"menu-tag-"+a.node.title,attrs:{to:a.node.path}},[e("v-chip",{attrs:{small:""}},[t._v("\n        "+t._s(a.node.title)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);"function"==typeof o&&o(l);a.a=l.exports},jlzh:function(t,a,e){"use strict";e("FDdq")}}]);