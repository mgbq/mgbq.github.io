webpackJsonp([15],{"0Un6":function(e,t,n){(e.exports=n("BkJT")(!1)).push([e.i,"\n.app-container[data-v-07813469] .permission-alert {\n  width: 100%;\n  margin-top: 30px;\n  background-color: #f0f9eb;\n  color: #67c23a;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: block;\n}\n.app-container[data-v-07813469] .permission-tag {\n  background-color: #ecf5ff;\n}\n",""])},"9Bx6":function(e,t,n){var s=n("0Un6");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("8bSs")("6e14c90d",s,!0)},dy4A:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("IcnI"),i={inserted:function(e,t,n){var i=t.value,r=s.a.getters&&s.a.getters.roles;if(!(i&&i instanceof Array&&i.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var a=i;r.some(function(e){return a.includes(e)})||e.parentNode&&e.parentNode.removeChild(e)}},r=function(e){e.directive("permission",i)};window.Vue&&(window.permission=i,Vue.use(r)),i.install=r;var a=i,o={name:"directivePermission",components:{SwitchRoles:n("v5cR").a},directives:{permission:a},data:function(){return{key:1}},methods:{handleRolesChange:function(){this.key++}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("switch-roles",{on:{change:e.handleRolesChange}}),e._v(" "),n("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[n("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n      Only admin can see this\n      "),n("el-button",{attrs:{type:"warning"}},[e._v("admin")]),e._v(" "),n("el-button",{attrs:{type:"danger"}},[e._v("危险按钮")])],1),e._v(" "),n("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n      Only editor can see this\n      "),n("el-button",{attrs:{type:"success"}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"info"}},[e._v("信息按钮")])],1),e._v(" "),n("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-alert"},[e._v("\n      Both adminand editor can see this\n      "),n("el-button",{attrs:{type:"primary"}},[e._v("主要按钮")]),e._v(" "),n("el-button",{attrs:{type:"success"}},[e._v("成功按钮")]),e._v(" "),n("el-button",{attrs:{type:"info"}},[e._v("信息按钮")]),e._v(" "),n("el-button",{attrs:{type:"warning"}},[e._v("警告按钮")]),e._v(" "),n("el-button",{attrs:{type:"danger"}},[e._v("危险按钮")])],1)])],1)},staticRenderFns:[]};var c=n("vSla")(o,l,!1,function(e){n("9Bx6")},"data-v-07813469",null);t.default=c.exports},v5cR:function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(e._s(e.$t("permission.roles"))+"： "+e._s(e.roles))]),e._v("\n  "+e._s(e.$t("permission.switchRoles"))+"：\n  "),n("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[n("el-radio-button",{attrs:{label:"editor"}}),e._v(" "),n("el-radio-button",{attrs:{label:"admin"}})],1)],1)},staticRenderFns:[]},i=n("vSla")({computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("ChangeRoles",e).then(function(){t.$emit("change")})}}}},s,!1,null,null,null);t.a=i.exports}});