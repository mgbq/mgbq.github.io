webpackJsonp([2],{SXNH:function(e,n){},"ook+":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={data:function(){return{checked:!0,loginForm:{username:"admin",password:"admin"},rules:{username:[{required:!0,trigger:"blur",validator:function(e,n,t){""===n?t(new Error("请输入用户名")):t()}}],password:[{required:!0,trigger:"blur",validator:function(e,n,t){n.length<5?t(new Error("密码不能小于5位")):t()}}]},loading:!0}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.$store.dispatch("Login",e.loginForm).then(function(){e.loading=!1,localStorage.setItem("ms_username",e.loginForm.username),e.$router.push("/Readme")}).catch(function(){e.loading=!1})})}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-wrap"},[e._m(0),e._v(" "),t("div",{staticClass:"ms-title"},[e._v("前海智慧教育移动终端管理系统")]),e._v(" "),t("div",{staticClass:"ms-login"},[t("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,rules:e.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}})],1),e._v(" "),t("div",{staticClass:"login-btn"},[t("el-button",{nativeOn:{click:function(n){n.preventDefault(),e.handleLogin(n)}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"head-log"},[n("img",{staticClass:"company-log",attrs:{src:"/static/images/common/company-log.png",alt:"公司log"}})])}]};var a=t("Z0/y")(r,o,!1,function(e){t("SXNH")},null,null);n.default=a.exports}});