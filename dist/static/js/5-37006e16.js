(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{378:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchCondition",{attrs:{condition:e.condition},on:{queryData:e.getQueryData}}),e._v(" "),a("div",{staticClass:"mb10"},[a("Button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")]),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:e.del}},[e._v("删除")])],1),e._v(" "),a("Table",{attrs:{border:"",columns:e.table.columns,data:e.table.tableData},on:{"on-selection-change":e.select}}),e._v(" "),a("div",{staticClass:"fr mt10 mb10"},[a("Page",{attrs:{total:e.table.page.total,current:e.table.page.current,"page-size":e.table.page.size,"page-size-opts":e.table.page.sizeOpts,"show-total":"","show-sizer":""},on:{"on-change":e.change,"on-page-size-change":e.sizeChange}})],1),e._v(" "),a("InvoiceTypeModal",{ref:"InvoiceTypeModal",on:{search:e.query}})],1)};n._withStripped=!0;var i=a(43),l=a.n(i),o=a(377),s=a(376),c=a(375),r=a(21),p={components:{SearchCondition:o.a,InvoiceTypeModal:s.a},mixins:[c.a],data:function(){var e=this;return{searchInfo:{},condition:[{value:"",name:"fpzldm",type:"input",label:"发票种类代码",placeholder:"请输入"},{value:"",name:"fpzlmc",type:"input",label:"发票种类名称",placeholder:"请输入"},{value:"",type:"input",name:"fpzljc",label:"发票种类简称",placeholder:"请输入"},{value:"",name:"fplxdm",type:"select",label:"发票种类代码",placeholder:"请选择",options:[]},{value:"",name:"qybz",type:"select",label:"启用标志",placeholder:"请选择",options:[]},{type:"button",label:"查询",color:"primary",fn:this.query}],table:{columns:[{type:"selection",width:60,align:"center"},{title:"发票种类代码",key:"fpzldm",type:"text",width:"160"},{title:"发票种类名称",key:"fpzlmc",type:"text"},{title:"发票简称",key:"fpzljc",type:"text"},{title:"发票类型代码名称",key:"fplxdm-name",type:"text",width:"200"},{title:"启用标志",key:"qybz-name",type:"text",width:"100"},{title:"操作",type:"operation",width:"100",render:function(t,a){return t("div",[t("Button",{props:{type:"primary",size:"small"},on:{click:function(){e.update(a)}}},"修改")])}}],tableData:[],page:{total:0,current:1,size:10,sizeOpts:[10,20,50]}},selectedData:[]}},computed:l()({},Object(r.d)("dictionary",["fplxdm","qybz"])),created:function(){this.condition[3].options=this.fplxdm,this.condition[4].options=this.qybz},methods:{query:function(e){var t=this;(e=e||this.searchInfo).pageSize=this.table.page.size,e.currentPage=this.table.page.current,this.http.post("/sys/fpzldm/searchFpzldm",{options:{trans:["fplxdm","qybz"],trnasType:!0},params:e}).then(function(e){e.success&&(t.table.tableData=e.data,t.table.page.total=e.total)}).catch(function(e){throw e})},add:function(){this.$refs.InvoiceTypeModal.open()},del:function(){var e=this,t=this.delInit();t&&0===t.length?this.$Message.warning("删除的数据不能为空"):!1!==t?this.http.post("/sys/fpzldm/deleteFpzldm",{fplxdm:t}).then(function(t){t.success&&(e.$Message.success(t.message||"操作成功"),e.query())}).catch(function(e){throw e}):this.$Message.warning("所选数据包含已启用")},delInit:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var i,l=this.selectedData[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var o=i.value;if("1"===o.qybz)return!1;e.push(o.fpzldm)}}catch(e){a=!0,n=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}return e},update:function(e){this.$refs.InvoiceTypeModal.open(e.row)},select:function(e){this.selectedData=e}}},d=a(8),u=Object(d.a)(p,n,[],!1,null,null,null);u.options.__file="src/pages/system/components/systemManage/codeMange/InvoiceCodeManage.vue";t.default=u.exports}}]);