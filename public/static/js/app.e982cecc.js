(function(e){function t(t){for(var a,s,r=t[0],o=t[1],u=t[2],l=0,d=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==c[r]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},c={app:0},i=[];function r(e){return o.p+"static/js/"+({}[e]||e)+"."+{"chunk-04fbb994":"e132eaf5","chunk-10b5012e":"dfee318d","chunk-1783ce4e":"8725c5e6","chunk-2d024f44":"224c4747","chunk-41b4343a":"3dc207de","chunk-432cb33c":"4243f8be","chunk-165e030a":"b7d8eaf3","chunk-782ceed9":"831cca70","chunk-4637a4e8":"ab280a8f","chunk-5180d2be":"c979130a","chunk-80a35866":"128615f3","chunk-9faa4c90":"39d0aa5f","chunk-baee6bf4":"0cd14a7f","chunk-c82f976a":"1ab7891a","chunk-c93f8634":"051800e0","chunk-2d0d3887":"0a9b9d57","chunk-2d0e5d94":"5a575128","chunk-d09eeea2":"98b4851f","chunk-e5bbb7d8":"32a0f981"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-04fbb994":1,"chunk-10b5012e":1,"chunk-1783ce4e":1,"chunk-2d024f44":1,"chunk-41b4343a":1,"chunk-432cb33c":1,"chunk-165e030a":1,"chunk-782ceed9":1,"chunk-4637a4e8":1,"chunk-5180d2be":1,"chunk-80a35866":1,"chunk-9faa4c90":1,"chunk-baee6bf4":1,"chunk-c82f976a":1,"chunk-c93f8634":1,"chunk-d09eeea2":1,"chunk-e5bbb7d8":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-04fbb994":"90687b29","chunk-10b5012e":"18e8bce6","chunk-1783ce4e":"32205a08","chunk-2d024f44":"272c9221","chunk-41b4343a":"59b66eed","chunk-432cb33c":"83d9a755","chunk-165e030a":"3ed83df5","chunk-782ceed9":"187a7c4d","chunk-4637a4e8":"8b365f54","chunk-5180d2be":"87099f78","chunk-80a35866":"86775664","chunk-9faa4c90":"cae819c5","chunk-baee6bf4":"70a71b39","chunk-c82f976a":"d825b853","chunk-c93f8634":"52241fe0","chunk-2d0d3887":"31d6cfe0","chunk-2d0e5d94":"31d6cfe0","chunk-d09eeea2":"405547fa","chunk-e5bbb7d8":"5201d7ab"}[e]+".css",c=o.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){s[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/user/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d03":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"merchandise-list-container"},[n("div",{staticClass:"merchandise-list"},e._l(e.list,(function(t){return n("div",{key:t.id,staticClass:"item"},[n("router-link",{staticClass:"item",attrs:{to:"/merchandise/detail/"+t.id}},[n("div",{staticClass:"image-container"},[n("van-image",{staticClass:"image",attrs:{src:t.path}})],1),n("div",{staticClass:"detail-container"},[n("p",{staticClass:"name"},[e._v(e._s(t.name))]),n("p",{staticClass:"description"},[e._v(e._s(t.description))]),n("integral",{attrs:{integral:t.integral}})],1)])],1)})),0)])},s=[],c=n("cb09"),i={name:"MerchandiseList",props:{list:{type:Array,default:function(){return[]}}},components:{Integral:c["a"]}},r=i,o=(n("3366"),n("2877")),u=Object(o["a"])(r,a,s,!1,null,"4a30562e",null);t["a"]=u.exports},1114:function(e,t,n){"use strict";var a=n("fa8e"),s=n.n(a);s.a},"1f7a":function(e,t,n){},2477:function(e,t,n){},"25b2":function(e,t,n){"use strict";var a=n("4ced"),s=n.n(a);s.a},2788:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"k",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return b}));var a="SAVE",s="SIGN_IN",c="GET_PUBLIC_WELFARE_DATA",i="GET_COUPON_DATA",r="GET_TASK_DATA",o="GET_TASK_COUPONS_DATA",u="ADD_TASK",l="ACQUIRE",d="CLEAR_COUPON",f="DONATE",b="CONVERSION"},3366:function(e,t,n){"use strict";var a=n("a14e"),s=n.n(a);s.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id="4678"},"4ced":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("0653");var a=n("34e9"),s=(n("c194"),n("7744")),c=(n("f06a"),n("20fb")),i=(n("d1cf"),n("ee83")),r=(n("e930"),n("8f80")),o=(n("be7f"),n("565f")),u=(n("8a58"),n("e41f")),l=(n("38d5"),n("772a")),d=(n("5f1a"),n("a3e2")),f=(n("e7e5"),n("d399")),b=(n("2b28"),n("9ed2")),h=(n("c3a6"),n("ad06")),p=(n("4056"),n("44bf")),m=(n("9a83"),n("f564")),j=(n("ac1e"),n("543e")),g=(n("2994"),n("2bdd")),v=(n("66b9"),n("b650")),k=(n("5852"),n("d961")),y=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),C=n("229e"),_=n("2bb4"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},w=[],P=n("2877"),T={},E=Object(P["a"])(T,O,w,!1,null,null,null),S=E.exports,x=(n("d3b7"),n("8c4f")),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[n("div",{ref:"header",staticClass:"header"},[n("router-link",{staticClass:"link",attrs:{to:"/merchandise"}},[n("div",{staticClass:"search"},[n("van-icon",{staticClass:"icon",attrs:{name:"search"}}),n("p",{staticClass:"text"},[e._v("搜索商品")])],1)]),n("router-link",{attrs:{to:"/me"}},[n("span",{staticClass:"me"},[n("i",{staticClass:"icon iconfont icon-wode"})])])],1),n("scroll-view",{attrs:{click:!0,dataSource:e.list}},[n("div",[n("home-slide"),n("div",{staticClass:"content-container"},[n("router-link",{attrs:{to:"/analysis"}},[n("home-detail")],1),n("home-nav"),n("div",{staticClass:"home-market"},[n("header",[n("h2",{staticClass:"title"},[e._v("积分商城")]),n("router-link",{attrs:{to:"/merchandise"}},[n("span",{staticClass:"arrow"})])],1),n("merchandise-list",{attrs:{list:e.list}})],1)],1)],1)]),e.loading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}})],1):e._e()],1)},D=[],z=n("bc3a"),I=n.n(z),N=n("b4e2"),$=n("0d03"),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-wrapper"},[n("div",{ref:"slide",staticClass:"slide-banner-scroll"},[n("ul",{staticClass:"slide-banner-wrapper"},e._l(e.list,(function(e){return n("li",{key:e.id,staticClass:"slide-item"},[n("a",{attrs:{href:e.outside_link}},[n("img",{attrs:{src:e.path,alt:"advertisement"}})])])})),0)]),n("div",{staticClass:"docs-wrapper"},e._l(e.list,(function(t,a){return n("span",{key:a,staticClass:"doc",class:{active:e.currentPageIndex===a}})})),0),n("svg",{staticClass:"img_wrap_mask",attrs:{viewBox:"0 0 750 50"}},[n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("path",{staticClass:"img_mask_svgPath",attrs:{d:"M750,1.70530257e-13 L750,50 L0,50 L0,1.70530257e-13 C107.666667,33.3333333 232.666667,50 375,50 C517.333333,50 642.333333,33.3333333 750,1.70530257e-13 Z"}})])])])},M=[],G={name:"HomeSlide",data:function(){return{slide:null,currentPageIndex:0,playTimer:0,list:[]}},mounted:function(){var e=this;I.a.get("/api/advertisement/list").then((function(t){var n=t.data,a=n.code,s=n.data;if(0===a){if(e.list=s,0===e.list.length)return;e.$nextTick((function(){e.init()}))}}))},beforeDestroy:function(){clearTimeout(this.playTimer),this.slide.destroy()},methods:{init:function(){var e=this;this.slide=new C["a"](this.$refs.slide,{scrollX:!0,scrollY:!1,slide:{loop:!0,threshold:100},useTransition:!0,momentum:!1,bounce:!1,stopPropagation:!0,probeType:2,click:!0}),this.slide.on("scrollEnd",this.onScrollEnd),this.slide.on("beforeScrollStart",(function(){clearTimeout(e.playTimer)})),this.slide.on("scrollEnd",(function(){e.autoGoNext()})),this.slide.on("slideWillChange",(function(t){e.currentPageIndex=t.pageX})),this.autoGoNext()},nextPage:function(){this.slide.next()},prePage:function(){this.slide.prev()},onScrollEnd:function(){this.autoGoNext()},autoGoNext:function(){var e=this;clearTimeout(this.playTimer),this.playTimer=setTimeout((function(){e.nextPage()}),3e3)}}},W=G,U=(n("ecb1"),Object(P["a"])(W,L,M,!1,null,"cf1f5f9c",null)),R=U.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-nav"},[n("router-link",{staticClass:"item",attrs:{to:"/signIn"}},[n("div",{staticClass:"icon daily"},[n("span",{staticClass:"text"},[e._v(e._s(e.daily))])]),n("span",{staticClass:"title"},[e._v("签到")])]),n("router-link",{staticClass:"item",attrs:{to:"/publicWelfare"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon-gongyizhongxin"})]),n("span",{staticClass:"title"},[e._v("公益")])]),n("router-link",{staticClass:"item",attrs:{to:"/level"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon-dengji"})]),n("span",{staticClass:"title"},[e._v("等级")])]),n("router-link",{staticClass:"item",attrs:{to:"/task"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon-renwu"})]),n("span",{staticClass:"title"},[e._v("任务")])])],1)},q=[],H=n("c1df"),K=n.n(H),V={name:"HomeNav",data:function(){return{daily:K()().format("DD")}}},F=V,J=(n("c226"),Object(P["a"])(F,B,q,!1,null,"48200e2b",null)),X=J.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-detail-container"},[n("div",{staticClass:"home-detail"},[n("div",{staticClass:"left"},[n("p",{staticClass:"text"},[e._v("碳积分")]),n("p",{staticClass:"integral"},[n("i",{staticClass:"icon icon-tubiao311 iconfont"}),e._v(e._s(e._f("thousnadBitSystem")(e.integral)))])]),e._m(0)])])},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"right"},[n("div",{staticClass:"item bicycle"},[n("span",{staticClass:"icon iconfont icon-tiyu-zihangche"}),n("span",{staticClass:"title"},[e._v("自行车")])]),n("div",{staticClass:"item bus"},[n("span",{staticClass:"icon iconfont icon-gongjiaoche1"}),n("span",{staticClass:"title"},[e._v("公共汽车")])]),n("div",{staticClass:"item subway"},[n("span",{staticClass:"icon iconfont icon-ditie"}),n("span",{staticClass:"title"},[e._v("地铁")])]),n("div",{staticClass:"item high-speed-train"},[n("span",{staticClass:"icon iconfont icon-jt_gaotie"}),n("span",{staticClass:"title"},[e._v("高铁")])])])}],Z=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("3835")),ee=n("ade3"),te=n("2f62");function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){Object(ee["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se={name:"HomeDetail",computed:ae({},Object(te["c"])("user",{integral:function(e){return e.integral}})),filters:{thousnadBitSystem:function(e){var t=String.prototype.split.call(e,"."),n=Object(Z["a"])(t,2),a=n[0],s=n[1];return"".concat("".concat(a).replace(/\d(?=(\d{3})+$)/g,"$&,")).concat(s?".".concat(s):"")}}},ce=se,ie=(n("5e11"),Object(P["a"])(ce,Q,Y,!1,null,"41fa4f0a",null)),re=ie.exports,oe={data:function(){return{loading:!1,list:[]}},components:{HomeSlide:R,HomeNav:X,HomeDetail:re,MerchandiseList:$["a"],ScrollView:N["a"]},mounted:function(){var e=this;this.loading=!0,I.a.get("/api/merchandise/list",{params:{pageSize:5,currentPage:1,name:""}}).then((function(t){var n=t.data,a=n.code,s=n.data;0===a?e.list=s:e.$notify({type:"danger",message:"数据请求失败！"})})).finally((function(){e.loading=!1}))}},ue=oe,le=(n("25b2"),Object(P["a"])(ue,A,D,!1,null,"580b7ea6",null)),de=le.exports;y["a"].use(x["a"]);var fe,be,he,pe=[{path:"/login",name:"Login",component:function(){return n.e("chunk-9faa4c90").then(n.bind(null,"9ed6"))}},{path:"/merchandise",name:"Merchandise",component:function(){return n.e("chunk-e5bbb7d8").then(n.bind(null,"7b256"))},children:[{path:"detail/:id",name:"MerchandiseDetail",component:function(){return n.e("chunk-2d024f44").then(n.bind(null,"65cd"))}}]},{path:"/signIn",name:"SignIn",component:function(){return n.e("chunk-4637a4e8").then(n.bind(null,"53fd"))}},{path:"/level",name:"Level",component:function(){return n.e("chunk-1783ce4e").then(n.bind(null,"7363"))}},{path:"/publicWelfare",name:"PublicWelfare",component:function(){return n.e("chunk-d09eeea2").then(n.bind(null,"60ed"))},children:[{path:"detail/:id",name:"PublicWelfareDetail",component:function(){return Promise.all([n.e("chunk-432cb33c"),n.e("chunk-782ceed9")]).then(n.bind(null,"7d63"))}},{path:"release",name:"PublicWelfareAdd",component:function(){return n.e("chunk-80a35866").then(n.bind(null,"3793"))}}]},{path:"/task",component:function(){return n.e("chunk-c82f976a").then(n.bind(null,"c430b"))},children:[{path:"detail/:id",component:function(){return Promise.all([n.e("chunk-c93f8634"),n.e("chunk-2d0d3887")]).then(n.bind(null,"5cbe"))}}]},{path:"/me",name:"Me",component:function(){return n.e("chunk-41b4343a").then(n.bind(null,"8822"))},children:[{path:"publicWelfareManagement",name:"PublicWelfareManagement",component:function(){return n.e("chunk-baee6bf4").then(n.bind(null,"c158"))},children:[{path:"detail/:id",name:"PublicWelfareManagementDetail",component:function(){return Promise.all([n.e("chunk-432cb33c"),n.e("chunk-165e030a")]).then(n.bind(null,"9f57"))}}]},{path:"task",component:function(){return n.e("chunk-10b5012e").then(n.bind(null,"ded2"))},children:[{path:"detail/:id",component:function(){return Promise.all([n.e("chunk-c93f8634"),n.e("chunk-2d0e5d94")]).then(n.bind(null,"95df"))}}]},{path:"coupon",name:"MyCoupon",component:function(){return n.e("chunk-04fbb994").then(n.bind(null,"234c"))}}]},{path:"/analysis",name:"Analysis",component:function(){return n.e("chunk-5180d2be").then(n.bind(null,"e81a"))}},{path:"/",name:"home",component:de}],me=new x["a"]({mode:"history",base:"/user/",routes:pe}),je=me,ge=(n("7db0"),n("c740"),n("a434"),n("b0c0"),n("2788")),ve={id:-1,name:"",integral:0,level:1,growth:0,bicycleMileage:0,subwayCount:0,busCount:0,railCount:0,tasks:[],publicWelfare:{list:[],finished:!1,condition:{},pageSize:5,currentPage:1},coupon:{list:[],finished:!1,condition:{},pageSize:10,currentPage:1}},ke={save:function(e,t){var n=e.commit;n(ge["j"],t)}},ye=(fe={},Object(ee["a"])(fe,ge["j"],(function(e,t){e.id=t.id,e.name=t.name,e.integral=t.integral,e.growth=t.growth,e.level=t.lv,e.tasks=t.tasks,e.bicycleMileage=t.bicycle_mileage,e.bicycleCount=t.bicycle_count,e.busCount=t.bus_count,e.subwayCount=t.subway_count,e.railCount=t.rail_count})),Object(ee["a"])(fe,ge["k"],(function(e,t){e.integral=(parseInt(100*e.integral,10)+parseInt(100*t,10))/100})),Object(ee["a"])(fe,ge["d"],(function(e,t){var n=t.integral,a=t.id;e.integral=(parseInt(100*e.integral,10)-parseInt(100*n,10))/100;var s=e.coupon.list.findIndex((function(e){return e.uc_id===a}));e.coupon.list.splice(s,1)})),Object(ee["a"])(fe,ge["g"],(function(e,t){var n=e.publicWelfare;n.list=n.list.concat(t),0!==t.length?n.currentPage+=1:n.finished=!0})),Object(ee["a"])(fe,ge["f"],(function(e,t){var n=e.coupon;n.list=n.list.concat(t),0!==t.length?n.currentPage+=1:n.finished=!0})),Object(ee["a"])(fe,ge["c"],(function(e){var t=e.coupon;t.list=[],t.currentPage=1,t.finished=!1})),Object(ee["a"])(fe,ge["i"],(function(e,t){e.tasks=t})),Object(ee["a"])(fe,ge["h"],(function(e,t){var n=e.tasks.find((function(e){return e.id===t.id}));n&&(n.coupons=t.coupons)})),Object(ee["a"])(fe,ge["b"],(function(e,t){e.tasks.push(t)})),Object(ee["a"])(fe,ge["a"],(function(e,t){var n=t.lv,a=t.growth,s=t.integral,c=t.id;e.level=n,e.growth=a,e.integral=s;var i=e.tasks.find((function(e){return e.id===c}));i.acquire=1;var r=e.coupon;r.list.length>0&&(r.list=[],r.currentPage=1,r.finished=!1)})),Object(ee["a"])(fe,ge["e"],(function(e,t){e.integral=(parseInt(100*e.integral,10)-parseInt(100*t,10))/100})),fe),Ce={namespaced:!0,state:ve,mutations:ye,actions:ke},_e=n("fcfe"),Oe={list:[],pageSize:10,currentPage:1,finished:!1,condition:{name:""}},we={find:function(e){return function(t){return e.list.find((function(e){return e.id===t}))}}},Pe=(be={},Object(ee["a"])(be,_e["c"],(function(e,t){e.list=e.list.concat(t),0!==t.length?e.currentPage+=1:e.finished=!0})),Object(ee["a"])(be,_e["b"],(function(e,t){var n=t.id,a=e.list.find((function(e){return e.id===n}));a&&(a.stock-=1)})),Object(ee["a"])(be,_e["d"],(function(e,t){var n=t.name;e.condition.name=n})),Object(ee["a"])(be,_e["a"],(function(e){e.list=[],e.finished=!1,e.currentPage=1})),be),Te={namespaced:!0,state:Oe,mutations:Pe,getters:we},Ee=n("dbaa"),Se={list:[],pageSize:5,currentPage:1,finished:!1,condition:{}},xe=Object(ee["a"])({},Ee["a"],(function(e,t){e.list=e.list.concat(t),e.currentPage+=1,0===t.length&&(e.finished=!0)})),Ae={namespaced:!0,state:Se,mutations:xe},De=n("d15c"),ze={list:[],pageSize:5,currentPage:1,finished:!1,condition:{}},Ie=(he={},Object(ee["a"])(he,De["b"],(function(e,t){e.list=e.list.concat(t),0!==t.length?e.currentPage+=1:e.finished=!0})),Object(ee["a"])(he,De["a"],(function(e,t){var n=e.list.find((function(e){return e.id===t.id}));n&&(n.coupons=t.coupons)})),Object(ee["a"])(he,De["c"],(function(e,t){var n=e.list.find((function(e){return e.id===t}));n.disabled=!0})),he),Ne={namespaced:!0,state:ze,mutations:Ie};y["a"].use(te["a"]);var $e=new te["a"].Store({modules:{user:Ce,merchandise:Te,publicWelfare:Ae,task:Ne}});I.a.defaults.baseURL="/user",I.a.defaults.timeout=5e3,I.a.interceptors.request.use((function(e){return e}),(function(e){return Object(m["a"])({type:"danger",message:"请求超时，请稍后重试！"}),Promise.reject(e)})),I.a.interceptors.response.use((function(e){return e}),(function(e){return Object(m["a"])({type:"danger",message:"服务端出错啦！"}),Promise.reject(e)}));n("c975"),n("96cf");var Le=n("1da1"),Me=["/login"];je.beforeEach(function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,n,a){var s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(-1!==$e.state.user.id){e.next=6;break}return e.next=3,I.a.get("/api/user/detail");case 3:s=e.sent,c=s.data.user,c&&$e.dispatch("user/save",c);case 6:-1!==$e.state.user.id?"/login"===t.path?a({path:"/"}):a():-1!==Me.indexOf(t.path)?a():a("/login?redirect=".concat(t.path));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());n("f5df1"),n("1f7a");y["a"].use(k["a"]),y["a"].use(v["a"]),y["a"].use(g["a"]),y["a"].use(j["a"]),y["a"].use(m["a"]),y["a"].use(p["a"]),y["a"].use(h["a"]),y["a"].use(b["a"]),y["a"].use(f["a"]),y["a"].use(d["a"]),y["a"].use(l["a"]),y["a"].use(u["a"]),y["a"].use(o["a"]),y["a"].use(r["a"]),y["a"].use(i["a"]),y["a"].use(c["a"]),C["a"].use(_["a"]),y["a"].use(s["a"]),y["a"].use(a["a"]),y["a"].config.productionTip=!1,new y["a"]({router:je,store:$e,render:function(e){return e(S)}}).$mount("#app")},"5b2a":function(e,t,n){},"5e11":function(e,t,n){"use strict";var a=n("5b2a"),s=n.n(a);s.a},6015:function(e,t,n){"use strict";n("a9e3");t["a"]={props:{probeType:{type:Number,default:0},click:{type:Boolean,default:!1},bounce:{type:Object,default:function(){return{top:!1,bottom:!1,left:!1,right:!1}}},dataSource:{type:Array,default:function(){return[]}}}}},a14e:function(e,t,n){},b3b2:function(e,t,n){},b4e2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scroll-container",staticClass:"scroll-container"},[e._t("default")],2)},s=[],c=n("229e"),i=n("6015"),r={name:"ScrollView",mixins:[i["a"]],watch:{dataSource:function(){this.refresh()}},methods:{refresh:function(){var e=this;this.$nextTick((function(){e.scroll.refresh()}))},scrollTo:function(e,t){this.scroll.scrollTo(e,t)},scrollToElement:function(e){this.scroll.scrollToElement(e)},initScroll:function(){var e=this;this.scroll=new c["a"](this.$refs["scroll-container"],{probeType:this.probeType,click:this.click,bounce:this.bounce}),0!==this.probeType&&this.scroll.on("scroll",(function(t){var n=t.x,a=t.y;e.$emit("scroll",{x:n,y:a,el:e.$refs["scroll-container"]})}))}},mounted:function(){this.initScroll()},beforeDestroy:function(){this.scroll.destroy()}},o=r,u=(n("1114"),n("2877")),l=Object(u["a"])(o,a,s,!1,null,"38571e1c",null);t["a"]=l.exports},c17c:function(e,t,n){},c226:function(e,t,n){"use strict";var a=n("c17c"),s=n.n(a);s.a},cb09:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"integral",style:{color:e.color}},[n("i",{staticClass:"icon icon-tubiao311 iconfont"}),n("span",{staticClass:"pre-integral"},[e._v(e._s(e._f("preIntegral")(e.integral)))]),n("span",{staticClass:"last-integral"},[e._v(e._s(e._f("lastIntegral")(e.integral)))])])},s=[],c=(n("a9e3"),n("ac1f"),n("1276"),n("3835")),i={name:"Integral",props:{integral:{type:Number,required:!0},color:{type:String,default:"#f42"}},filters:{preIntegral:function(e){return parseInt(e,10)},lastIntegral:function(e){var t="".concat(e).split("."),n=Object(c["a"])(t,2),a=n[1];return a?".".concat(a):""}}},r=i,o=(n("efe1"),n("2877")),u=Object(o["a"])(r,a,s,!1,null,"b63b8150",null);t["a"]=u.exports},d15c:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c}));var a="GET_DATA",s="GET_COUPONS_DATA",c="UPDATE_TASK"},dbaa:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="GET_DATA"},ecb1:function(e,t,n){"use strict";var a=n("b3b2"),s=n.n(a);s.a},efe1:function(e,t,n){"use strict";var a=n("2477"),s=n.n(a);s.a},fa8e:function(e,t,n){},fcfe:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return i}));var a="GET_DATA",s="CLEAR",c="CONVERSION",i="UPDATE_CONDITION"}});