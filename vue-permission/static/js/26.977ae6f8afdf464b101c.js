webpackJsonp([26],{"5PtI":function(o,t,s){(o.exports=s("BkJT")(!1)).push([o.i,"\n.pos[data-v-0b50367a] {\r\n  font-size: 12px;\n}\n#order-list[data-v-0b50367a] {\r\n  height: 800px;\n}\n.pos-order[data-v-0b50367a] {\r\n  background-color: #f9fafc;\r\n  /* border-right: 10px solid #C0CCDA; */\r\n  padding-right: 20px;\n}\n.order-btn[data-v-0b50367a] {\r\n  margin-top: 10px;\r\n  text-align: center;\n}\n.title[data-v-0b50367a] {\r\n  height: 20px;\r\n  border-bottom: 1px solid #d3dce6;\r\n  background-color: #f9fafc;\r\n  padding: 20px;\n}\n.often-goods-list ul li[data-v-0b50367a] {\r\n  list-style: none;\r\n  float: left;\r\n  border: 1px solid #e5e9f2;\r\n  padding: 20px;\r\n  margin: 5px;\r\n  background-color: #fff;\r\n  cursor: pointer;\n}\n.goods-type[data-v-0b50367a] {\r\n  clear: both;\r\n  padding: 20px;\n}\n.o-price[data-v-0b50367a] {\r\n  color: #58b7ff;\n}\n.often-goods-list[data-v-0b50367a] {\r\n  border-bottom: 1px solid #c0ccda;\r\n  height: auto;\r\n  overflow: hidden;\r\n  padding-bottom: 10px;\r\n  background-color: #f9fafc;\n}\n.cookList li[data-v-0b50367a] {\r\n  list-style: none;\r\n  width: 23%;\r\n  border: 1px solid #e5e9f2;\r\n  height: auot;\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n  padding: 2px;\r\n  float: left;\r\n  margin: 2px;\r\n  cursor: pointer;\n}\n.cookList li span[data-v-0b50367a] {\r\n  display: block;\r\n  float: left;\n}\n.foodImg[data-v-0b50367a] {\r\n  width: 40%;\n}\n.foodName[data-v-0b50367a] {\r\n  font-size: 18px;\r\n  padding-left: 10px;\r\n  color: brown;\n}\n.foodPrice[data-v-0b50367a] {\r\n  font-size: 16px;\r\n  padding-left: 10px;\r\n  padding-top: 10px;\n}\n.totalDiv[data-v-0b50367a] {\r\n  height: auot;\r\n  overflow: hidden;\r\n  text-align: right;\r\n  font-size: 16px;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #e5e9f2;\r\n  padding: 10px;\n}\r\n",""])},cKgh:function(o,t,s){var a=s("5PtI");"string"==typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);s("8bSs")("97ac6bb6",a,!0)},uxYu:function(o,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Pos",created:function(){},data:function(){return{tableData:[],oftenGoods:[{goodsId:1,goodsName:"香辣鸡腿堡",price:18},{goodsId:2,goodsName:"田园鸡腿堡",price:15},{goodsId:3,goodsName:"和风汉堡",price:15},{goodsId:4,goodsName:"大包薯条",price:18},{goodsId:5,goodsName:"脆皮炸鸡腿",price:20},{goodsId:6,goodsName:"魔法鸡块",price:20},{goodsId:7,goodsName:"可乐大杯",price:10},{goodsId:8,goodsName:"雪顶咖啡",price:18},{goodsId:9,goodsName:"儿童欢乐套餐",price:25},{goodsId:10,goodsName:"快乐全家桶",price:99}],type0Goods:[{goodsId:1,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"香辣鸡腿堡",price:18},{goodsId:2,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"田园鸡腿堡",price:15},{goodsId:3,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"和风汉堡",price:15}],type1Goods:[{goodsId:4,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"大包薯条",price:18},{goodsId:5,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"脆皮炸鸡腿",price:20},{goodsId:6,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"魔法鸡块",price:20}],type2Goods:[{goodsId:7,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"可乐大杯",price:10},{goodsId:8,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"雪顶咖啡",price:18}],type3Goods:[{goodsId:9,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",goodsName:"儿童欢乐套餐",price:25},{goodsId:10,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"快乐全家桶",price:99}],totalMoney:0,totalCount:0}},methods:{addOrderList:function(o){this.totalCount=0,this.totalMoney=0;for(var t=!1,s=0;s<this.tableData.length;s++)console.log(this.tableData[s].goodsId),this.tableData[s].goodsId===o.goodsId&&(t=!0);if(t){this.tableData.filter(function(t){return t.goodsId===o.goodsId})[0].count++}else{var a={goodsId:o.goodsId,goodsName:o.goodsName,price:o.price,count:1};this.tableData.push(a)}this.getAllMoney()},delSingleGoods:function(o){console.log(o),this.tableData=this.tableData.filter(function(t){return t.goodsId!==o.goodsId}),this.getAllMoney()},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},getAllMoney:function(){var o=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(t){o.totalCount+=t.count,o.totalMoney=o.totalMoney+t.price*t.count})},checkout:function(){0!==this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功，感谢你又为店里出了一份力!",type:"success"})):this.$message.error("不能空结。老板了解你急切的心情！")}}},n={render:function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("div",{staticClass:"pos app-container"},[o._m(0),o._v(" "),s("div",[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:o.tableData,border:""}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),o._v(" "),s("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),o._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),o._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:o._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){o.delSingleGoods(t.row)}}},[o._v("删除")]),o._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){o.addOrderList(t.row)}}},[o._v("增加")])]}}])})],1),o._v(" "),s("div",{staticClass:"totalDiv"},[s("small",[o._v("数量：")]),o._v(" "),s("strong",[o._v(o._s(o.totalCount))]),o._v("     \n                            "),s("small",[o._v("总计：")]),o._v(" "),s("strong",[o._v(o._s(o.totalMoney))]),o._v(" 元\n                        ")]),o._v(" "),s("div",{staticClass:"order-btn"},[s("el-button",{attrs:{type:"warning"}},[o._v("挂单")]),o._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(t){o.delAllGoods()}}},[o._v("删除")]),o._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(t){o.checkout()}}},[o._v(" 结账")])],1)],1),o._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}},[o._v("\n                        挂单\n                    ")]),o._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[o._v("\n                        外卖\n                    ")])],1)],1),o._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[o._v("常用商品")]),o._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",o._l(o.oftenGoods,function(t){return s("li",{on:{click:function(s){o.addOrderList(t)}}},[s("span",[o._v(o._s(t.goodsName))]),o._v(" "),s("span",{staticClass:"o-price"},[o._v("￥"+o._s(t.price)+"元")])])}))])]),o._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[o._v("1\n                            "),s("ul",{staticClass:"cookList"},o._l(o.type0Goods,function(t){return s("li",{on:{click:function(s){o.addOrderList(t)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:t.goodsImg,width:"100%"}})]),o._v(" "),s("span",{staticClass:"foodName"},[o._v(o._s(t.goodsName))]),o._v(" "),s("span",{staticClass:"foodPrice"},[o._v("￥"+o._s(t.price)+"元")])])}))]),o._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("ul",{staticClass:"cookList"},o._l(o.type1Goods,function(t){return s("li",{on:{click:function(s){o.addOrderList(t)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:t.goodsImg,width:"100%"}})]),o._v(" "),s("span",{staticClass:"foodName"},[o._v(o._s(t.goodsName))]),o._v(" "),s("span",{staticClass:"foodPrice"},[o._v("￥"+o._s(t.price)+"元")])])}))]),o._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("ul",{staticClass:"cookList"},o._l(o.type2Goods,function(t){return s("li",{on:{click:function(s){o.addOrderList(t)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:t.goodsImg,width:"100%"}})]),o._v(" "),s("span",{staticClass:"foodName"},[o._v(o._s(t.goodsName))]),o._v(" "),s("span",{staticClass:"foodPrice"},[o._v("￥"+o._s(t.price)+"元")])])}))]),o._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("ul",{staticClass:"cookList"},o._l(o.type3Goods,function(t){return s("li",{on:{click:function(s){o.addOrderList(t)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:t.goodsImg,width:"100%"}})]),o._v(" "),s("span",{staticClass:"foodName"},[o._v(o._s(t.goodsName))]),o._v(" "),s("span",{staticClass:"foodPrice"},[o._v("￥"+o._s(t.price)+"元")])])}))])],1)],1)])],1)],1)])},staticRenderFns:[function(){var o=this.$createElement,t=this._self._c||o;return t("p",{staticClass:"warn-content"},[t("a",{attrs:{href:"https://github.com/shenghy/AwesomePOS/",target:"_blank"}},[this._v("crud参考技术胖\n        ")])])}]};var e=s("vSla")(a,n,!1,function(o){s("cKgh")},"data-v-0b50367a",null);t.default=e.exports}});