(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70f25ab3"],{"013b":function(e,s,t){"use strict";var a=t("8f77"),r=t.n(a);r.a},"48ca":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",{staticClass:"page-header"},[e._v("로그인 페이지")]),t("LoginForm")],1)},r=[],n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"contents"},[t("div",{staticClass:"form-wrapper form-wrapper-sm"},[t("form",{staticClass:"form",on:{submit:function(s){return s.preventDefault(),e.submitForm(s)}}},[t("div",[t("label",{attrs:{for:"username"}},[e._v("id:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",type:"text"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}}),t("p",{staticClass:"validation-text"},[!e.isUsernameValid&&e.username?t("span",{staticClass:"warning"},[e._v(" Please enter an email address ")]):e._e()])]),t("div",[t("label",{attrs:{for:"password"}},[e._v("pw:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),t("button",{staticClass:"btn",attrs:{disabled:!e.isUsernameValid||!e.password,type:"submit"}},[e._v(" 로그인 ")])]),t("p",{staticClass:"log"},[e._v(e._s(e.logMessage))])])])},o=[],i=(t("ac1f"),t("5319"),t("96cf"),t("1da1")),u=t("5464"),c={data:function(){return{username:"",password:"",logMessage:""}},computed:{isUsernameValid:function(){return Object(u["a"])(this.username)}},methods:{submitForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var t;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t={username:e.username,password:e.password},s.next=4,e.$store.dispatch("LOGIN",t);case 4:e.$router.replace("/main"),s.next=11;break;case 7:s.prev=7,s.t0=s["catch"](0),console.log(s.t0.response.data),e.logMessage=s.t0.response.data;case 11:return s.prev=11,e.initForm(),s.finish(11);case 14:case"end":return s.stop()}}),s,null,[[0,7,11,14]])})))()},initForm:function(){this.username="",this.password=""}}},l=c,p=(t("013b"),t("2877")),m=Object(p["a"])(l,n,o,!1,null,null,null),d=m.exports,v={components:{LoginForm:d}},f=v,w=Object(p["a"])(f,a,r,!1,null,null,null);s["default"]=w.exports},5464:function(e,s,t){"use strict";t.d(s,"a",(function(){return a}));var a=function(e){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(String(e).toLowerCase())}},"8f77":function(e,s,t){}}]);
//# sourceMappingURL=chunk-70f25ab3.f3a31330.js.map