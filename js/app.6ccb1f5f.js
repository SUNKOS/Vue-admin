(function(){var e={9573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var o=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{staticStyle:{overflow:"hidden"},attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("common-header")],1),t("el-main",[t("router-view")],1)],1)],1)],1)},a=[],r=function(){var e=this,t=e._self._c;return t("div",[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(n){return t("el-menu-item",{key:n.name,attrs:{index:n.path},on:{click:function(t){return e.clickMenu(n)}}},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])})),e._l(e.hasChildren,(function(n){return t("el-submenu",{key:n.label,attrs:{index:n.label}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])]),t("el-menu-item-group",e._l(n.children,(function(n){return t("el-menu-item",{key:n.label,attrs:{index:n.path},on:{click:function(t){return e.clickMenu(n)}}},[e._v(e._s(n.label))])})),1)],2)}))],2)],1)},i=[],u=n(680),l={data(){return{name:""}},methods:{handleOpen(e,t){},handleClose(e,t){},clickMenu(e){console.log(e),this.$store.commit("setRouteName",e.label)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollape},menuData(){return JSON.parse(u.Z.get("menu"))||this.$store.state.tab.menu}}},s=l,c=n(1001),d=(0,c.Z)(s,r,i,!1,null,"1d5ab36d",null),m=d.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"left"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-thumb"},on:{click:e.handMenu}}),t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v(" "+e._s("首页"===e.$store.state.tab.routeName?"":e.$store.state.tab.routeName))])],1)],1),t("div",{staticClass:"right"},[t("el-dropdown",{attrs:{trigger:"click"}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{attrs:{src:n(3060),alt:"user"}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{nativeOn:{click:function(t){return e.enter.apply(null,arguments)}}},[e._v("退出")])],1)],1)],1)])},p=[],h=(n(7658),{methods:{handMenu(){this.$store.commit("collapseMenu")},enter(){u.Z.remove("token"),u.Z.remove("menu"),this.$router.push("/login")}},computed:{matched(){return this.$route.matched.filter((e=>e.name))}}}),v=h,g=(0,c.Z)(v,f,p,!1,null,"ec319ecc",null),b=g.exports,y={components:{CommonAside:m,CommonHeader:b}},w=y,k=(0,c.Z)(w,o,a,!1,null,"64629da8",null),O=k.exports},6981:function(e,t,n){"use strict";var o=n(6369),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],i={name:"App",data(){return{}}},u=i,l=n(1001),s=(0,l.Z)(u,a,r,!1,null,null,null),c=s.exports,d=n(8499),m=n.n(d),f=n(2631),p=n(9573);o["default"].use(f.ZP);const h=new f.ZP({routes:[{path:"/",name:"Main",component:p["default"],redirect:"/home",children:[]},{path:"/login",name:"login",component:()=>Promise.all([n.e(473),n.e(642)]).then(n.bind(n,642))}]});var v=h,g=n(3822),b=(n(7658),n(680)),y={state:{isCollape:!1,tabsList:[],menu:[],routerArr:[],routeName:""},mutations:{collapseMenu(e){e.isCollape=!e.isCollape},setMenu(e,t){e.menu=t,b.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!b.Z.get("menu"))return;const o=JSON.parse(b.Z.get("menu"));e.menu=o;const a=[];o.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>n(6968)(`./${e.url}`),e))),a.push(...e.children)):(e.component=()=>n(6968)(`./${e.url}`),a.push(e))})),a.forEach((e=>{t.addRoute("Main",e)}))},setRouteName(e,t){e.routeName=t,console.log(t)}}};o["default"].use(g.ZP);var w=new g.ZP.Store({modules:{tab:y}}),k=n(7634),O=n.n(k);let C=[];var _={getStatisticalData:()=>{for(let e=0;e<7;e++)C.push(O().mock({"苹果":O().Random.float(100,8e3,0,0),vivo:O().Random.float(100,8e3,0,0),oppo:O().Random.float(100,8e3,0,0),"魅族":O().Random.float(100,8e3,0,0),"三星":O().Random.float(100,8e3,0,0),"小米":O().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:C},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};n(541);function N(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let x=[];const M=200;for(let P=0;P<M;P++)x.push(O().mock({id:O().Random.guid(),name:O().Random.cname(),addr:O().mock("@county(true)"),"age|18-60":1,birth:O().Random.date(),sex:O().Random.integer(0,1)}));var S={getUserList:e=>{const{name:t,page:n=1,limit:o=20}=N(e.url);console.log("name:"+t,"page:"+n,"分页大小limit:"+o);const a=x.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=a.filter(((e,t)=>t<o*n&&t>=o*(n-1)));return{code:2e4,count:a.length,list:r}},createUser:e=>{const{name:t,addr:n,age:o,birth:a,sex:r}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),x.unshift({id:O().Random.guid(),name:t,addr:n,age:o,birth:a,sex:r}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(x=x.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=N(e.url);return t=t.split(","),x=x.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:n,addr:o,age:a,birth:r,sex:i}=JSON.parse(e.body),u=parseInt(i);return x.some((e=>{if(e.id===t)return e.name=n,e.addr=o,e.age=a,e.birth=r,e.sex=u,!0})),{code:2e4,data:{message:"编辑成功"}}}},B={getMenu:e=>{const{username:t,password:n}=JSON.parse(e.body);return"admin"===t&&"admin"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:O().Random.guid(),message:"获取成功"}}:"4103"===t&&"4103"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:O().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};O().mock("/api/home/getData",_.getStatisticalData),O().mock("/api/user/add","post",S.createUser),O().mock("/api/user/edit","post",S.updateUser),O().mock("/api/user/del","post",S.deleteUser),O().mock(/api\/user\/get/,S.getUserList),O().mock(/api\/permission\/getMenu/,"post",B.getMenu),o["default"].use(m()),o["default"].config.productionTip=!1,v.beforeEach(((e,t,n)=>{const o=b.Z.get("token");o||"login"===e.name?o&&"login"===e.name?n({name:"home"}):n():n({name:"login"})})),new o["default"]({router:v,store:w,created(){w.commit("addMenu",v)},render:e=>e(c)}).$mount("#app")},6968:function(e,t,n){var o={"./Home":[7378,473,378],"./Home.vue":[7378,473,378],"./Login":[642,473,642],"./Login.vue":[642,473,642],"./Main":[9573],"./Main.vue":[9573],"./Mall":[7947,947],"./Mall.vue":[7947,947],"./PageOne":[5720,720],"./PageOne.vue":[5720,720],"./PageTwo":[2373,373],"./PageTwo.vue":[2373,373],"./User":[3113,473,113],"./User.vue":[3113,473,113]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=6968,e.exports=a},3060:function(e,t,n){"use strict";e.exports=n.p+"img/beiye.a5870f0b.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,r<i&&(i=r));if(u){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{113:"a3c3e4ee",373:"e0517895",378:"0dd9791a",473:"e54f5627",642:"9f7bd93d",720:"e2fc8f8f",947:"3e4385b1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{113:"215e1b9f",378:"04ab029e",642:"96eaec00"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="project-two:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var u,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=o),e[o]=[a];var m=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,r.parentNode&&r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return a();e(o,u,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={113:1,378:1,642:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),u=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],u=o[1],l=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var c=l(n)}for(t&&t(o);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkproject_two"]=self["webpackChunkproject_two"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6981)}));o=n.O(o)})();
//# sourceMappingURL=app.6ccb1f5f.js.map