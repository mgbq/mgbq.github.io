webpackJsonp([17],{"5k0W":function(e,n,t){var c=t("RXdT");"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);t("8bSs")("6b9ccb72",c,!0)},Op0n:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("template",{slot:"header"},[e._v("基础")]),e._v(" "),t("v-contextmenu",{ref:"contextmenu"},[t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单1")]),e._v(" "),t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单2")]),e._v(" "),t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单3")])],1),e._v(" "),t("div",{directives:[{name:"contextmenu",rawName:"v-contextmenu:contextmenu",arg:"contextmenu"}],staticClass:"contextmenu-pad"},[e._v("\n    右键点击此区域\n  ")])],2)},staticRenderFns:[]};var o=t("vSla")({methods:{handleClick:function(e,n){this.$message({message:"你点击了"+e.$slots.default[0].text,type:"info"})}}},c,!1,function(e){t("5k0W")},"data-v-cdf6edee",null);n.default=o.exports},RXdT:function(e,n,t){(e.exports=t("BkJT")(!1)).push([e.i,"\n.contextmenu-pad[data-v-cdf6edee] {\n  height: 300px;\n  background-color: #f8f8f9;\n  border: 1px solid #DCDFE6;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #909399;\n}\n.contextmenu-icon[data-v-cdf6edee] {\n  font-size: 16px;\n}\n",""])}});