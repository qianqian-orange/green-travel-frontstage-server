(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e85694"],{2393:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i=["🚴","🚌","🚊","🚈"]},2950:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-list-item"},[a("span",{staticClass:"emoji"},[t._v(t._s(t.emoji[t.type]))]),a("div",{staticClass:"content-container"},[a("div",{staticClass:"primary"},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("integral",{attrs:{integral:t.integral}})],1),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),a("div",{staticClass:"extra"},[a("span",{staticClass:"aim"},[t._v("目标: "+t._s(""+t.aim+t.unit))]),t._t("default")],2)])])},n=[],r=(a("a9e3"),a("cb09")),s=a("2393"),c={name:"TaskListItem",props:{title:{type:String,required:!0},description:{type:String,required:!0},aim:{type:Number,required:!0},type:{type:Number,required:!0},integral:{type:Number,required:!0}},data:function(){return{emoji:s["a"]}},components:{Integral:r["a"]},computed:{unit:function(){return 0===this.type?"km":"次"}}},o=c,l=(a("7f4c"),a("2877")),u=Object(l["a"])(o,i,n,!1,null,"1c82f2ab",null);e["a"]=u.exports},"2d59":function(t,e,a){"use strict";var i=a("a276"),n=a.n(i);n.a},"4e5c":function(t,e,a){"use strict";var i=a("64f2"),n=a.n(i);n.a},"64f2":function(t,e,a){},"7f4c":function(t,e,a){"use strict";var i=a("af15"),n=a.n(i);n.a},"84c8":function(t,e,a){"use strict";var i=a("af01"),n=a.n(i);n.a},a276:function(t,e,a){},af01:function(t,e,a){},af15:function(t,e,a){},b910:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("scroll-view",{ref:"scroll",attrs:{dataSource:t.dataSource,probeType:3,click:!0},on:{scroll:t.scroll}},[a("div",{staticClass:"list-scroll-container"},[t._t("default"),t.dataSource.length>0?a("div",{staticClass:"end"},[a("van-divider",[t._v("我是有底线的")])],1):a("div",{staticClass:"empty"},[t._v("暂无相关数据")])],2)])},n=[],r=(a("a9e3"),a("b4e2")),s=a("6015"),c={name:"ListScrollView",mixins:[s["a"]],props:{loading:{type:Boolean,required:!1},finished:{type:Boolean,required:!0},interval:{type:Number,default:300}},components:{ScrollView:r["a"]},methods:{scroll:function(t){var e=t.el,a=t.y;if(!this.loading&&!this.finished){var i=e.offsetHeight,n=e.children[0].offsetHeight;a+n-i<=this.interval&&this.$emit("scroll")}},refresh:function(){this.$refs.scroll.refresh()}}},o=c,l=(a("4e5c"),a("2877")),u=Object(l["a"])(o,i,n,!1,null,"85fdaf98",null);e["a"]=u.exports},c028:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-header"},[a("router-link",{attrs:{to:t.to}},[a("span",{staticClass:"arrow"})]),a("h1",{staticClass:"title"},[t._v(t._s(t.title))])],1)},n=[],r={name:"CommonHeader",props:{title:{type:String,default:""},to:{type:String,default:"/"}}},s=r,c=(a("2d59"),a("2877")),o=Object(c["a"])(s,i,n,!1,null,"9002ea4a",null);e["a"]=o.exports},d81d:function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").map,r=a("1dde"),s=a("ae40"),c=r("map"),o=s("map");i({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},ded2:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-task-container fullscreen-fixed-container"},[a("div",{staticClass:"header"},[a("common-header",{attrs:{to:"/me",title:"我的任务"}}),a("span",{staticClass:"refresh",on:{click:t.taskCheckCore}},[a("i",{staticClass:"iconfont icon-shuaxin2"})])],1),a("list-scroll-view",{attrs:{dataSource:t.tasks,finished:!0}},[a("div",t._l(t.tasks,(function(e){return a("router-link",{key:e.id,attrs:{to:"/me/task/detail/"+e.id}},[a("task-list-item",{attrs:{id:e.id,title:e.title,description:e.description,aim:e.aim,type:e.type,integral:e.integral}},[a("div",{staticClass:"acquire",on:{click:function(a){return a.preventDefault(),t.acquire(e)}}},[t._v(" "+t._s(0===e.status?"进行中":0===e.acquire?"可领取":"已领取")+" ")])])],1)})),1)]),t.loading?a("div",{staticClass:"loading"},[a("van-loading",{attrs:{type:"spinner",color:"#1989fa"}})],1):t._e(),a("transition",{attrs:{name:"detail"}},[a("router-view")],1)],1)},n=[],r=(a("a4d3"),a("4de4"),a("7db0"),a("4160"),a("d81d"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("ade3")),s=a("bc3a"),c=a.n(s),o=a("2f62"),l=a("c028"),u=a("b910"),d=a("2950"),f=a("2788");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v={name:"MyTask",data:function(){return{loading:!1}},components:{CommonHeader:l["a"],ListScrollView:u["a"],TaskListItem:d["a"]},computed:m({},Object(o["c"])("user",{tasks:function(t){return t.tasks}})),methods:m({acquire:function(t){var e=this,a=t.status,i=t.acquire,n=t.id;0!==a&&1!==i&&(this.loading=!0,c.a.post("/api/user/taskAcquire",{id:n}).then((function(t){var a=t.data,i=a.code,r=a.data;0!==i?e.$notify({type:"danger",message:"领取奖励失败！"}):e[f["a"]](m({id:n},r))})).finally((function(){e.loading=!1})))},taskCheck:function(t){var e=this;return this.tasks.find((function(e){return e.type===t&&0===e.status}))?c.a.post("/api/user/taskCheck",{type:t}).then((function(t){var a=t.data.code;0!==a&&e.$notify({type:"danger",message:"更新任务进度失败！"})})):Promise.resolve()},taskCheckCore:function(){var t=this,e=[0,1,2,3];Promise.all(e.map((function(e){return t.taskCheck(e)}))).then((function(){c.a.get("/api/user/taskList").then((function(e){var a=e.data,i=a.code,n=a.data;0!==i?t.$notify({type:"danger",message:"请求数据失败！"}):t[f["j"]](n)}))}))}},Object(o["b"])("user",[f["j"],f["a"]])),mounted:function(){this.taskCheckCore()}},h=v,b=(a("84c8"),a("2877")),y=Object(b["a"])(h,i,n,!1,null,"4954345d",null);e["default"]=y.exports}}]);