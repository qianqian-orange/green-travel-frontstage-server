(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1372ccc"],{"3b72":function(t,e,i){"use strict";i("d3b7");e["a"]={data:function(){return{loading:!1}},methods:{scroll:function(){var t=this;this.loading=!0,this.getData().finally((function(){t.loading=!1}))}},mounted:function(){var t=this;this.list.length>0||this.finished||(this.loading=!0,this.getData().finally((function(){t.loading=!1})))}}},"3ca2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"merchandise-detail-card"},[i("div",{staticClass:"image-container"},[i("van-image",{staticClass:"image",attrs:{src:t.path}})],1),i("div",{staticClass:"content-container"},[i("p",{staticClass:"name"},[t._v(t._s(t.name))]),i("p",{staticClass:"description"},[t._v(t._s(t.description))]),i("div",{staticClass:"integral-container"},[i("div",{staticClass:"integral"},[i("i",{staticClass:"icon icon-tubiao311 iconfont"}),i("span",{staticClass:"pre-integral"},[t._v(t._s(t._f("preIntegral")(t.integral)))]),i("span",{staticClass:"last-integral"},[t._v(t._s(t._f("lastIntegral")(t.integral)))])]),t._t("default")],2)])])},a=[],s=(i("a9e3"),{name:"MerchandiseDetailCard",props:{path:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0},integral:{type:Number,required:!0}}}),r=s,c=(i("d3e6"),i("2877")),o=Object(c["a"])(r,n,a,!1,null,"58517cf4",null);e["a"]=o.exports},"4e5c":function(t,e,i){"use strict";var n=i("64f2"),a=i.n(n);a.a},"52ff":function(t,e,i){},"64f2":function(t,e,i){},"65cd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"merchandise-detail-container"},[i("scroll-header",{attrs:{to:"/merchandise",title:"商品详情",visible:t.visible}}),i("scroll-view",{ref:"scroll",attrs:{click:!0,probeType:3},on:{scroll:t.scroll}},[i("div",{staticClass:"scroll-contaienr"},[t.merchandise?i("merchandise-detail-card",{attrs:{path:t.merchandise.path,name:t.merchandise.name,description:t.merchandise.description,integral:t.merchandise.integral}},[t.merchandise.stock?i("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.toggle}},[t._v("兑换")]):t._e(),0===t.merchandise.stock?i("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("已售馨")]):t._e()],1):t._e(),t.others.length>0?i("div",[i("van-divider",{style:{color:"#222"}},[t._v("看了又看")]),i("div",{staticClass:"list-container"},[i("merchandise-list",{attrs:{list:t.others}})],1)],1):t._e()],1)]),i("van-popup",{staticStyle:{height:"50%","padding-top":"40px"},attrs:{round:"",closeable:"","lock-scroll":!1,position:"bottom"},model:{value:t.popup,callback:function(e){t.popup=e},expression:"popup"}},[i("div",{staticClass:"popup-container"},[i("coupon-list",{on:{use:t.conversion}}),i("div",{staticClass:"btn"},[i("van-button",{attrs:{round:"",block:"",color:"linear-gradient(to right, #6cd557, #34c2aa)"},on:{click:function(e){return t.conversion(-1)}}},[t._v("不使用优惠卷")])],1)],1)])],1)},a=[],s=(i("a4d3"),i("4de4"),i("7db0"),i("4160"),i("a434"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("ac1f"),i("5319"),i("159b"),i("ade3")),r=i("bc3a"),c=i.n(r),o=i("2f62"),l=i("2788"),u=i("b4e2"),d=i("e762"),f=i("0d03"),p=i("9764"),h=i("3ca2");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m={name:"MerchandiseDetail",data:function(){return{popup:!1,visible:!1,loading:!1,merchandise:null}},watch:{list:function(){this.$refs.scroll.refresh()},$route:function(t){var e=t.params.id;this.merchandise=this.list.find((function(t){return t.id===+e})),this.$refs.scroll.scrollTo(0,0)}},computed:g({others:function(){var t=this.$route.params.id;return this.list.filter((function(e){return e.id!==+t})).splice(0,5)}},Object(o["c"])("merchandise",{list:function(t){return t.list}}),{},Object(o["c"])("user",{user:function(t){return t}})),components:{MerchandiseList:f["a"],MerchandiseDetailCard:h["a"],ScrollView:u["a"],ScrollHeader:d["a"],CouponList:p["a"]},methods:g({scroll:function(t){var e=t.y;this.visible=e<=-80},toggle:function(){this.popup=!this.popup},conversion:function(t){var e=this;this.toggle(),this.user.integral<this.merchandise.integral?this.$toast({type:"fail",message:"积分不足！"}):this.loading||(this.loading=!0,c.a.post("/api/merchandise/conversion",{id:this.merchandise.id,uc_id:t}).then((function(i){var n=i.data.code;0===n?(e.$notify({type:"success",message:"兑换成功！"}),e[l["d"]]({integral:e.merchandise.integral,id:t}),e.merchandise.stock-=1):e.$notify({type:"danger",message:"兑换失败！"})})).finally((function(){e.loading=!1})))}},Object(o["b"])("user",[l["d"]])),mounted:function(){var t=this,e=this.$route.params.id;this.merchandise=this.list.find((function(t){return t.id===+e})),this.merchandise?this.$refs.scroll.refresh():c.a.get("/api/merchandise/find",{params:{id:+e}}).then((function(e){var i=e.data,n=i.code,a=i.data;if(0===n)return t.merchandise=a,void t.$refs.scroll.refresh();t.$router.replace("/merchandise"),t.$notify({type:"danger",message:"数据请求失败"})}))}},b=m,y=(i("cd45"),i("2877")),_=Object(y["a"])(b,n,a,!1,null,"59ce8344",null);e["default"]=_.exports},9350:function(t,e,i){},9764:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"coupon-list-container"},[i("list-scroll-view",{ref:"scroll",attrs:{dataSource:t.effective,loading:t.loading,finished:t.finished,interval:400},on:{scroll:t.scroll}},[i("ul",{staticClass:"coupon-list"},t._l(t.effective,(function(e){return i("li",{key:e.uc_id,staticClass:"coupon-list-item"},[i("coupon",{attrs:{integral:e.integral,day:e.day,description:e.description,begin:new Date(e.create_time)},on:{view:t.view,use:function(i){return t.use(e.uc_id)}}})],1)})),0)]),t.loading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{type:"spinner",color:"#1989fa"}})],1):t._e()],1)},a=[],s=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("ade3")),r=i("bc3a"),c=i.n(r),o=i("2f62"),l=i("3b72"),u=i("d4f3"),d=i("b910"),f=i("2788");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var v={name:"CouponList",mixins:[l["a"]],components:{Coupon:u["a"],ListScrollView:d["a"]},computed:h({effective:function(){return this.list.filter((function(t){return new Date(t.create_time).getTime()+24*(t.day+1)*60*60*1e3>=Date.now()}))}},Object(o["c"])("user",{list:function(t){return t.coupon.list},pageSize:function(t){return t.coupon.pageSize},currentPage:function(t){return t.coupon.currentPage},finished:function(t){return t.coupon.finished}})),methods:h({view:function(){this.$refs.scroll.refresh()},use:function(t){this.$emit("use",t)},getData:function(){var t=this;return c.a.get("/api/user/couponList",{params:{pageSize:this.pageSize,currentPage:this.currentPage}}).then((function(e){var i=e.data,n=i.code,a=i.data;0!==n?t.$notify({type:"danger",message:"请求数据失败！"}):t[f["g"]](a)}))}},Object(o["b"])("user",[f["g"]]))},g=v,m=(i("eabb"),i("2877")),b=Object(m["a"])(g,n,a,!1,null,"4e7a459c",null);e["a"]=b.exports},a8d5:function(t,e,i){},b910:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{ref:"scroll",attrs:{dataSource:t.dataSource,probeType:3,click:!0},on:{scroll:t.scroll}},[i("div",{staticClass:"list-scroll-container"},[t._t("default"),t.dataSource.length>0?i("div",{staticClass:"end"},[i("van-divider",[t._v("我是有底线的")])],1):i("div",{staticClass:"empty"},[t._v("暂无相关数据")])],2)])},a=[],s=(i("a9e3"),i("b4e2")),r=i("6015"),c={name:"ListScrollView",mixins:[r["a"]],props:{loading:{type:Boolean,required:!1},finished:{type:Boolean,required:!0},interval:{type:Number,default:300}},components:{ScrollView:s["a"]},methods:{scroll:function(t){var e=t.el,i=t.y;if(!this.loading&&!this.finished){var n=e.offsetHeight,a=e.children[0].offsetHeight;i+a-n<=this.interval&&this.$emit("scroll")}},refresh:function(){this.$refs.scroll.refresh()}}},o=c,l=(i("4e5c"),i("2877")),u=Object(l["a"])(o,n,a,!1,null,"85fdaf98",null);e["a"]=u.exports},cd45:function(t,e,i){"use strict";var n=i("52ff"),a=i.n(n);a.a},d3e6:function(t,e,i){"use strict";var n=i("a8d5"),a=i.n(n);a.a},d4f3:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"coupon-container"},[i("div",{staticClass:"primary"},[i("div",{staticClass:"left"},[i("p",{staticClass:"integral-container"},[i("i",{staticClass:"icon icon-tubiao311 iconfont"}),i("span",{staticClass:"integral"},[t._v(t._s(t.integral))])]),i("p",{staticClass:"text"},[t._v("优惠卷")])]),i("div",{staticClass:"middle"},[i("p",{staticClass:"title"},[t._v(t._s(t.integral)+"元抵用卷")]),i("p",{staticClass:"overdue"},[t._v("有效期至: "+t._s(t.overdue))]),i("p",{staticClass:"rule",on:{click:t.toggle}},[t._v("使用规则 "),i("van-icon",{staticClass:"icon",attrs:{name:"arrow-"+(t.collapsed?"up":"down")}})],1)]),i("div",{staticClass:"right"},[i("div",{staticClass:"use",on:{click:t.use}},[t._v("立即使用")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.collapsed,expression:"collapsed"}],staticClass:"secondary"},[i("p",[t._v(t._s(t.description))])])])},a=[],s=(i("a9e3"),i("c1df")),r=i.n(s),c={name:"Coupon",props:{integral:{type:Number,required:!0},day:{type:Number,default:1},description:{type:String,default:""},begin:{type:Date,default:function(){return new Date}}},data:function(){return{collapsed:!1}},computed:{overdue:function(){return r()(new Date(this.begin.getTime()+24*this.day*60*60*1e3)).format("YYYY-MM-DD")}},methods:{toggle:function(){this.collapsed=!this.collapsed,this.$emit("view")},use:function(){this.$emit("use")}}},o=c,l=(i("e840"),i("2877")),u=Object(l["a"])(o,n,a,!1,null,"f850962e",null);e["a"]=u.exports},d930:function(t,e,i){},da2e:function(t,e,i){"use strict";var n=i("ff79"),a=i.n(n);a.a},e762:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scroll-header-container"},[i("router-link",{attrs:{to:t.to}},[i("div",{staticClass:"arrow-container"},[i("van-icon",{attrs:{name:"arrow-left"}})],1)]),i("transition",{attrs:{name:"van-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"scroll-header"},[i("router-link",{attrs:{to:t.to}},[i("div",{staticClass:"arrow-container"},[i("van-icon",{attrs:{name:"arrow-left"}})],1)]),i("h2",{staticClass:"title"},[t._v(t._s(t.title))])],1)])],1)},a=[],s={name:"ScrollHeader",props:{to:{type:String,required:!0},title:{type:String,default:""},visible:{type:Boolean,default:!1}}},r=s,c=(i("da2e"),i("2877")),o=Object(c["a"])(r,n,a,!1,null,"58f8a0a4",null);e["a"]=o.exports},e840:function(t,e,i){"use strict";var n=i("9350"),a=i.n(n);a.a},eabb:function(t,e,i){"use strict";var n=i("d930"),a=i.n(n);a.a},ff79:function(t,e,i){}}]);