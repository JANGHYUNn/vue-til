(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c898d"],{"560f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"page-header"},[e._v("회원 가입 페이지")]),n("SignupForm")],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contents"},[n("div",{staticClass:"form-wrapper form-wrapper-sm"},[n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("div",[n("label",{attrs:{for:"username"}},[e._v("id: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"password"}},[e._v("pw: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"text"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"nickname"}},[e._v("nickname: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],attrs:{id:"nickname",type:"text"},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}})]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("회원 가입")])]),n("p",{staticClass:"log"},[e._v(e._s(e.logMessage))])])])},o=[],i=(n("96cf"),n("1da1")),u=n("365c"),m={data:function(){return{username:"",password:"",nickname:"",logMessage:""}},methods:{submitForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={username:e.username,password:e.password,nickname:e.nickname},t.next=3,Object(u["b"])(n);case 3:a=t.sent,s=a.data,console.log(s.username),e.logMessage="".concat(s.username," 님이 가입되었습니다"),e.initForm();case 8:case"end":return t.stop()}}),t)})))()},initForm:function(){this.username="",this.password="",this.nickname=""}}},c=m,l=n("2877"),p=Object(l["a"])(c,r,o,!1,null,null,null),d=p.exports,v={components:{SignupForm:d}},f=v,w=Object(l["a"])(f,a,s,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0c898d.35856a4d.js.map