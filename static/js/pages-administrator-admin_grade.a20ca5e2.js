(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-administrator-admin_grade"],{"2b69":function(t,i,n){"use strict";(function(t){var e=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("20d6");var a=e(n("2158")),o=e(n("d47a")),s=e(n("1377")),r=e(n("7250")),c={components:{tTable:a.default,tTh:o.default,tTr:s.default,tTd:r.default},data:function(){return{tableList:[{_id:"",name:"一年级",order:0},{_id:"",name:"二年级",order:1},{_id:"",name:"三年级",order:2}],name:"",order:"",isedit:!1,list_item:{}}},onLoad:function(){this.init()},methods:{init:function(){var i=this;uni.showLoading({title:"查询中，请稍等！"}),this.tableList=[],t.callFunction({name:"getGradeList"}).then(function(t){uni.hideLoading(),console.log(t),i.tableList=t.result}).catch(function(t){uni.hideLoading(),console.error(t)})},submit:function(){var i=this;if(""==this.name)return uni.showToast({icon:"none",title:"年级名称不允许为空！"}),!1;if(uni.showLoading({title:"提交中.."}),1==this.isedit){var n={id:this.list_item._id,data:{}};delete this.list_item._id,this.list_item.name=this.name,n.data=this.list_item,uni.showModal({title:"提示",content:"是否提交对该年级的修改？",success:function(e){e.confirm&&t.callFunction({name:"upGradeItem",data:n}).then(function(t){uni.hideLoading(),i.init()}).catch(function(t){uni.hideLoading(),console.error(t)})}})}else{var e={name:this.name,order:this.tableList.length+1};uni.showModal({title:"提示",content:"是否添加该年级？",success:function(n){n.confirm&&t.callFunction({name:"addGradeItem",data:e}).then(function(t){uni.hideLoading(),i.init()}).catch(function(t){uni.hideLoading(),console.error(t)})}})}this.isedit=!1,this.name=""},cancel:function(){this.isedit=!1,this.name=""},navTo:function(t){uni.navigateTo({url:t})},edit:function(t){this.name=t.name,this.isedit=!0,this.list_item=t},del:function(i){var n=this;uni.showModal({title:"警告",content:"此操作会将该年级下关联的所有班级全部删除！！！",success:function(e){if(e.confirm){var a=n.tableList.findIndex(function(t){return t.name==i.name});n.tableList.splice(a,1),t.callFunction({name:"delGradeItem",data:{_id:i._id}}).then(function(t){console.log(t),n.init()}).catch(function(t){uni.hideLoading(),console.error(t)})}}})}}};i.default=c}).call(this,n("a9ff")["default"])},"8aa0":function(t,i,n){"use strict";var e={"t-table":n("2158").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"warp",staticStyle:{"margin-top":"50rpx"}},[n("v-uni-view",{attrs:{align:"center"}},[t._v("管理年级信息")]),n("v-uni-form",{attrs:{action:""}},[n("v-uni-view",{staticClass:"uni-title  uni-common-pl"},[t._v("年级")]),n("v-uni-view",{staticClass:"uni-form-item dashed-bottom"},[n("v-uni-input",{staticClass:"uni-input",attrs:{id:"name",type:"text",name:"name",placeholder:"请输入年级"},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}})],1),n("v-uni-button",{staticClass:"button margin-top margin-lr",attrs:{"form-type":"submit",type:"primary",size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.isedit?"修改":"添加"))]),n("v-uni-button",{staticClass:"button margin-top margin-lr",attrs:{type:"primary",size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1),n("v-uni-view",{staticClass:"box",staticStyle:{"margin-top":"50rpx"}},[n("t-table",{attrs:{border:"3","border-color":"#e6e5e5"}},[n("t-tr",{attrs:{"font-size":"16",color:"#101411",align:"center"}},[n("t-th",{attrs:{align:"left"}},[t._v("序号")]),n("t-th",{attrs:{align:"left"}},[t._v("年级")]),n("t-th",{attrs:{align:"left"}},[t._v("操作")])],1),t._l(t.tableList,function(i,e){return n("t-tr",{key:i.id,attrs:{"font-size":"14",color:"#494743",align:"right"}},[n("t-td",{attrs:{align:"left"}},[t._v(t._s(i.order))]),n("t-td",{attrs:{align:"left"}},[t._v(t._s(i.name))]),n("t-td",{attrs:{align:"left"}},[n("v-uni-button",{staticStyle:{padding:"10rpx"},attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo("/pages/administrator/admin_class?grade_id="+i._id)}}},[t._v("查看")]),n("v-uni-button",{staticStyle:{padding:"10rpx"},attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.edit(i)}}},[t._v("修改")]),n("v-uni-button",{staticStyle:{padding:"10rpx"},attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.del(i)}}},[t._v("删除")])],1)],1)})],2)],1)],1)},o=[];n.d(i,"b",function(){return a}),n.d(i,"c",function(){return o}),n.d(i,"a",function(){return e})},"9dfa":function(t,i,n){"use strict";n.r(i);var e=n("8aa0"),a=n("c4f8");for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);var s,r=n("f0c5"),c=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"39a8c4a4",null,!1,e["a"],s);i["default"]=c.exports},c4f8:function(t,i,n){"use strict";n.r(i);var e=n("2b69"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);i["default"]=a.a}}]);