(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{378:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SearchCondition",{attrs:{condition:t.condition},on:{queryData:t.getQueryData}}),t._v(" "),a("div",{staticClass:"mb10"},[a("Button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.del}},[t._v("删除")])],1),t._v(" "),a("Table",{attrs:{border:"",columns:t.table.columns,data:t.table.tableData},on:{"on-selection-change":t.select}}),t._v(" "),a("div",{staticClass:"fr mt10 mb10"},[a("Page",{attrs:{total:t.table.page.total,current:t.table.page.current,"page-size":t.table.page.size,"page-size-opts":t.table.page.sizeOpts,"show-total":"","show-sizer":""},on:{"on-change":t.change,"on-page-size-change":t.sizeChange}})],1),t._v(" "),a("roleModal",{ref:"roleModal",attrs:{fpzldm:t.fpzldm},on:{search:t.query}})],1)},n=[];i._withStripped=!0;var o=a(376),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:t.modalData.title},on:{"on-ok":t.ok},model:{value:t.modalData.show,callback:function(e){t.$set(t.modalData,"show",e)},expression:"modalData.show"}},[a("label-input",{attrs:{label:"角色名称：",width:t.width},model:{value:t.invoiceInfo.xtjsmc,callback:function(e){t.$set(t.invoiceInfo,"xtjsmc",e)},expression:"invoiceInfo.xtjsmc"}}),t._v(" "),a("label-select",{attrs:{label:"系统权限：",width:t.width,options:t.xtqxList,disabled:t.disabled},on:{"on-change":t.powerChange},model:{value:t.invoiceInfo.xtqx,callback:function(e){t.$set(t.invoiceInfo,"xtqx",e)},expression:"invoiceInfo.xtqx"}}),t._v(" "),a("label-tree",{attrs:{label:"系统权限：",options:t.treeData.options,width:t.width},on:{"check-change":t.checkChange},model:{value:t.treeData.treeName,callback:function(e){t.$set(t.treeData,"treeName",e)},expression:"treeData.treeName"}}),t._v(" "),a("label-input",{attrs:{label:"备注：",width:t.width},model:{value:t.invoiceInfo.bz,callback:function(e){t.$set(t.invoiceInfo,"bz",e)},expression:"invoiceInfo.bz"}}),t._v(" "),t.isProvinceUser?a("Label",{attrs:{label:"省局角色专用标志：",width:t.width}},[a("RadioGroup",{model:{value:t.invoiceInfo.sjjsbz,callback:function(e){t.$set(t.invoiceInfo,"sjjsbz",e)},expression:"invoiceInfo.sjjsbz"}},t._l(t.qybz,function(e){return a("Radio",{key:e.code,attrs:{label:e.code}},[a("span",[t._v(t._s(e.name))])])}),1)],1):t._e(),t._v(" "),a("Label",{attrs:{label:"启用标志",width:t.width}},[a("RadioGroup",{model:{value:t.invoiceInfo.qybz,callback:function(e){t.$set(t.invoiceInfo,"qybz",e)},expression:"invoiceInfo.qybz"}},t._l(t.qybz,function(e){return a("Radio",{key:e.code,attrs:{label:e.code}},[a("span",[t._v(t._s(e.name))])])}),1)],1)],1)},r=[];s._withStripped=!0;var c=a(49),l=a.n(c),d=a(30),h={props:{fpzldm:{type:Array,default:function(){return[]}}},data:function(){return{width:320,disabled:!1,isProvinceUser:!1,xtqxList:[],modalData:{show:!1,title:""},invoiceInfo:{xtjsmc:"",xtqx:"",xtjsdm:"",jbmkmc:"",jbmkdm:"",bz:"",sjjsbz:"0",qybz:"",saveType:"0"},treeData:{treeName:"",treeId:"",options:[],xtqx1:[],xtqx2:[],xtqx3:[]}}},computed:l()({},Object(d.d)("dictionary",["xtqx","qybz"])),created:function(){var t=this;this.http.get("/basic/basicCode/isProvinceUser",{}).then(function(e){e.success&&(t.isProvinceUser=e.data[0]||!1)}),this.http.get("/basic/basicCode/getUserXtqx",{}).then(function(e){if(e.success){var a=e.data[0]||{};t.xtqxList=0==a.xtqx?[{code:"1",name:"管理员"}]:t.xtqx}})},methods:{open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?(this.modalData.title="修改角色",this.invoiceInfo=this.globalTool.initAccept(this.invoiceInfo,t),this.invoiceInfo.saveType="1",this.updateRoleInit(t)):(this.modalData.title="新增角色",this.invoiceInfo=this.globalTool.initEmpty(this.invoiceInfo),this.invoiceInfo.qybz="1",this.invoiceInfo.sjjsbz="0",this.treeData.xtqx1=[],this.treeData.xtqx2=[],this.treeData.xtqx3=[],this.treeData.treeName="",this.treeData.treeId="",this.invoiceInfo.saveType="0",this.addRoleInit()),this.modalData.show=!0,this.disabled=!!t},ok:function(){var t=this,e=this.invoiceInfo;e.jbmkdm=this.treeData.treeId,this.http.post("/sys/role/saveRole",e).then(function(e){e.success&&(t.$Message.success(e.message||"操作成功"),t.$emit("search"))}).catch(function(t){throw t})},powerChange:function(t){var e=[];"1"===t?e=this.treeData.xtqx1:"2"===t?e=this.treeData.xtqx2:"3"===t&&(e=this.treeData.xtqx3),"0"===this.invoiceInfo.sjjsbz&&(e=e.filter(function(t){return 10!==t.mkbz})),this.treeData.options=e,this.treeData.treeName="",this.treeData.treeId=""},updateRoleInit:function(t){var e=this,a={xtjsdm:t.xtjsdm,xtqx:t.xtqx};this.http.post("/sys/role/updateRole",a).then(function(t){if(t.success){var a=t.data[0]||{};e.treeData.options=e.treeInit(a.menuList),e.checkChange(e.treeData.options)}})},addRoleInit:function(){var t=this;this.http.post("/sys/role/addRole",{}).then(function(e){if(e.success){var a=t.treeInit(e.data);t.treeData.xtqx1=a.filter(function(t){return"1"===t.xtqx}),t.treeData.xtqx2=a.filter(function(t){return"2"===t.xtqx}),t.treeData.xtqx3=a.filter(function(t){return"3"===t.xtqx}),t.treeData.options=t.treeData["".concat("xtqx"+t.invoiceInfo.xtqx)]}})},treeInit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(var e in t){var a=t[e];a.title=a.name,a.expand=a.hide,a.checked=a.check,a.children&&this.treeInit(a.children)}return t},checkChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.checkedInit([],t),a={},i={};e.map(function(t){a[t.id]="",t.pid&&(a[t.pid]=""),i[t.title]=""}),this.treeData.treeName=Object.keys(i).join(","),this.treeData.treeId=Object.keys(a).join(",")},checkedInit:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(var a in e){var i=e[a];t.push(i),i.children&&this.checkedInit(t,i.children)}return t}}},u=h,p=a(9),f=Object(p.a)(u,s,r,!1,null,null,null);f.options.__file="src/pages/system/components/systemManage/powerManage/commonModal/roleModal.vue";var v=f.exports,x=a(375),b={components:{SearchCondition:o.a,roleModal:v},mixins:[x.a],data:function(){var t=this;return{searchInfo:{},powerTree:[],condition:[{index:1,value:"",name:"xtjsmc",type:"input",label:"角色名称",placeholder:"请输入"},{type:"button",label:"查询",color:"primary",fn:this.query}],table:{columns:[{type:"selection",width:60,align:"center"},{title:"角色名称",key:"xtjsmc",type:"text",width:"200"},{title:"系统权限",key:"xtqx-name",type:"text",width:"200"},{title:"启用标志",key:"qybz-name",type:"text"},{title:"备注",key:"bz",type:"text"},{title:"操作",type:"operation",width:"100",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small",disabled:a.row.swjgdm!==sessionStorage.getItem("orgCode")},on:{click:function(){t.update(a)}}},"修改")])}}],tableData:[],page:{total:0,current:1,size:10,sizeOpts:[10,20,50]}},selectedData:[],fpzldm:[]}},methods:{query:function(t){var e=this;t=t||this.searchInfo,t.pageSize=this.table.page.size,t.pageNo=this.table.page.current,this.http.post("/sys/role/queryRole",{options:{trans:["xtqx","qybz"],trnasType:!0},params:t}).then(function(t){t.success&&(e.table.tableData=t.data,e.table.page.total=t.total)}).catch(function(t){throw t})},add:function(){this.$refs.roleModal.open()},del:function(){var t=this,e=this.delInit();return e&&0===e.length?void this.$Message.warning("删除的数据不能为空"):!1===e?void this.$Message.warning("所选数据包含已启用"):void this.http.post("/sys/role/deleteRole",{xtjsdm:e.join(",")}).then(function(e){e.success&&(t.$Message.success(e.message||"操作成功"),t.query())}).catch(function(t){throw t})},delInit:function(){var t=[],e=!0,a=!1,i=void 0;try{for(var n,o=this.selectedData[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var s=n.value;if("1"===s.qybz)return!1;t.push(s.xtjsdm)}}catch(t){a=!0,i=t}finally{try{e||null==o.return||o.return()}finally{if(a)throw i}}return t},update:function(t){this.$refs.roleModal.open(t.row)},select:function(t){this.selectedData=t}}},m=b,y=Object(p.a)(m,i,n,!1,null,null,null);y.options.__file="src/pages/system/components/systemManage/powerManage/roleManage.vue";e.default=y.exports}}]);