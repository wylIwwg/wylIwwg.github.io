(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0195":function(t,e,n){var i=n("f2c4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a1fc9312",i,!0,{sourceMap:!1,shadowMode:!1})},"0e91":function(t,e,n){"use strict";n.r(e);var i=n("60d8"),a=n("8d18");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("a900");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"e0c03078",null,!1,i["a"],s);e["default"]=r.exports},"60d8":function(t,e,n){"use strict";var i={"wuc-tab":n("8fd5").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[t._v(t._s(t.school)+"企业健康报备系统")])],1),n("wuc-tab",{attrs:{textFlex:!0,"tab-list":t.tabList,tabCur:t.userType,"tab-class":"text-center text-black bg-white swiper-title","select-class":"text-blue"},on:{"update:tabCur":function(e){arguments[0]=e=t.$handleEvent(e),t.userType=e},"update:tab-cur":function(e){arguments[0]=e=t.$handleEvent(e),t.userType=e}}}),n("v-uni-swiper",{staticClass:"swiper",attrs:{current:t.userType,duration:"300",circular:!0,"indicator-color":"rgba(255,255,255,0)","indicator-active-color":"rgba(255,255,255,0)"}},[n("v-uni-swiper-item",{key:"admin"},[n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",[t._v("管理员模式，可查看员工健康状况")])],1)],1),n("v-uni-swiper-item",{key:"students"},[n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",[t._v("员工登录，自助上报每日健康状况")])],1)],1)],1),n("v-uni-view",{staticClass:"login-form"},[n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入密码",password:"true"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",{staticClass:"buttonGroup"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.signIn.apply(void 0,arguments)}}},[t._v("登录")])],1),n("v-uni-label",{attrs:{id:"result"}},[t._v(t._s(t.showresult))]),n("v-uni-view",{staticClass:"text-right"},[n("v-uni-navigator",{staticClass:"linkBtn",attrs:{url:"/pages/register/register","open-type":"redirect"}},[n("v-uni-text",[t._v("没有账号？前往注册")])],1)],1)],1)],1)],1)},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"8d18":function(t,e,n){"use strict";n.r(e);var i=n("d1d0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},a900:function(t,e,n){"use strict";var i=n("0195"),a=n.n(i);a.a},d1d0:function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f499")),o=i(n("795b")),s=i(n("8fd5")),u=i(n("2e4e")),r={data:function(){return{username:"",password:"",tabList:[{name:"管理员",icon:"cuIcon-wifi"},{name:"员工",icon:"cuIcon-dianhua"}],userType:0,school:""}},components:{WucTab:s.default,uniIcons:u.default},computed:{},onLoad:function(){this.school=uni.getStorageSync("school")},methods:{tabChange:function(t){this.userType=t},signIn:function(){var e=this,n=this.username,i=this.password,a=this.userType;uni.showLoading({title:"登录中..."}),t.callFunction({name:"signIn",data:{username:n,password:i,userType:a}}).then(function(t){if(console.log("返回的",t),uni.hideLoading(),0!==t.result.status)return o.default.reject(new Error(t.result.msg));if(uni.setStorageSync("token",t.result.token),uni.setStorageSync("uid",t.result.uid),uni.setStorageSync("userType",e.userType),t.result.class_id)uni.setStorageSync("class_id",t.result.class_id),1==e.userType&&(uni.setStorageSync("stu_num",t.result.stu_num),uni.setStorageSync("stu_name",t.result.stu_name)),uni.navigateTo({url:"/pages/index/index"});else switch(e.userType){case 0:uni.navigateTo({url:"/pages/teacher_bind/teacher_bind"});break;case 1:uni.navigateTo({url:"/pages/student_bind/student_bind"});break}}).catch(function(t){console.log(t),uni.hideLoading(),uni.showModal({content:"登录失败，"+t.message,showCancel:!1})})},loginMp:function(){var e=this;uni.showLoading({title:"登录中..."}),this.getCode().then(function(n){console.log("code",n);var i=e.userType;return t.callFunction({name:"login",data:{code:n,userType:i}})}).then(function(t){if(uni.hideLoading(),console.log(t),0!==t.result.status)return o.default.reject(new Error(t.result.msg));uni.setStorageSync("token",t.result.token),uni.showModal({content:"登录成功",showCancel:!1})}).catch(function(t){uni.hideLoading(),uni.showModal({content:"出现错误，请稍后再试."+t.message,showCancel:!1})})},getCode:function(){return new o.default(function(t,e){uni.login({provider:"weixin",success:function(n){n.code?t(n.code):e(new Error("微信登录失败"))},fail:function(t){e(new Error("微信登录失败"))}})})},validateToken:function(){uni.showLoading({title:"加载中..."}),t.callFunction({name:"validateToken",data:{token:uni.getStorageSync("token")}}).then(function(t){console.log(t),uni.hideLoading(),uni.showModal({content:t.result.msg,showCancel:!1})}).catch(function(t){uni.hideLoading(),uni.showModal({content:"请求云函数发生错误，"+(0,a.default)(t)+"err",showCancel:!1})})}},onReady:function(){}};e.default=r}).call(this,n("a9ff")["default"])},f2c4:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".weixinBtn[data-v-e0c03078]{color:#007aff;text-align:center;font-size:%?22?%;border-top:%?1?% #333 solid;margin-top:%?50?%;padding-top:%?50?%}.weixinBtn div[data-v-e0c03078]{color:#333;margin-bottom:%?20?%}.linkBtn[data-v-e0c03078]{color:#007aff;font-size:%?22?%}.swiper[data-v-e0c03078]{height:%?100?%}.swiper-title[data-v-e0c03078]{font-size:%?30?%}.buttonGroup[data-v-e0c03078]{display:-webkit-box;display:-webkit-flex;display:flex}.buttonGroup uni-navigator[data-v-e0c03078]{margin-right:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.container[data-v-e0c03078]{padding:30px}.title[data-v-e0c03078]{text-align:center;font-size:20px;font-weight:700;padding:20px 0}.desc[data-v-e0c03078]{padding:10px 0;font-size:14px;line-height:22px;color:#999}.login-form uni-input[data-v-e0c03078]{height:40px;border:solid 1px #ddd;text-indent:10px}.login-form uni-button[data-v-e0c03078],.login-form uni-input[data-v-e0c03078]{width:100%;margin-bottom:10px}",""])}}]);