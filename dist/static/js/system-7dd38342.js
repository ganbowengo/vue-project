(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,t){e.exports=Vue},101:function(e,t){e.exports=VueRouter},139:function(e,t,n){"use strict";(function(e){var a=n(1),o=n.n(a),i=n(101),r=n.n(i),l=function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,340))},u=function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,339))},s=function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,338))},c=function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,341))};o.a.use(r.a);var p=[{path:"/systemCodeInvoiceType",component:l},{path:"/systemCodeInvoice",component:u},{path:"/roleManage",component:s},{path:"/businessLog",component:c},{path:"/",redirect:"/systemCodeInvoiceType"}];t.a=new r.a({base:e,routes:p})}).call(this,"/")},2:function(e,t){e.exports=iview},29:function(e,t){e.exports=Vuex},329:function(e,t,n){n(102),e.exports=n(335)},330:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n},331:function(e,t,n){"use strict";var a=n(68),o=n.n(a);o.a},332:function(e,t,n){"use strict";var a=n(69),o=n.n(a);o.a},333:function(e,t,n){"use strict";var a=n(70),o=n.n(a);o.a},334:function(e,t,n){},335:function(e,t,n){"use strict";function a(e,t,n){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(n&&n.context&&a.target&&o.target)||e.contains(a.target)||e.contains(o.target)||e===a.target||n.context.popperElm&&(n.context.popperElm.contains(a.target)||n.context.popperElm.contains(o.target))||(t.expression&&e[_e].methodName&&n.context[e[_e].methodName]?n.context[e[_e].methodName]():e[_e].bindingFn&&e[_e].bindingFn())}}n.r(t);var o=n(1),i=n.n(o),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout",attrs:{id:"app"}},[n("Layout",[n("headerMenu"),e._v(" "),n("Layout",[n("Sider",{staticStyle:{background:"'#fff'"},attrs:{"hide-trigger":"",width:"240"}},[n("sliderMenu")],1),e._v(" "),n("Layout",[n("Breadcrumb",{staticClass:"breadcrumb"},e._l(e.menuName,function(t,a){return n("BreadcrumbItem",{key:a},[e._v(e._s(t))])}),1),e._v(" "),n("Content",{staticClass:"content"},[n("router-view")],1)],1)],1)],1)],1)},l=[];r._withStripped=!0;var u=n(48),s=n.n(u),c=n(29),p=n.n(c),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{staticClass:"header"},[n("h1",[e._v("发票管理系统")]),e._v(" "),n("div",{staticClass:"logout"},[n("span",{on:{click:e.logout}},[e._v("退出")]),e._v(" "),n("em",[e._v("|")]),e._v(" "),n("span",{on:{click:e.about}},[e._v("关于")])])]),e._v(" "),n("about-modal",{ref:"AboutModal"})],1)},m=[];d._withStripped=!0;var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{attrs:{title:"关于"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("p",[e._v("系统名称："+e._s(e.sysName))]),e._v(" "),n("p",[e._v("版本："+e._s(e.version))]),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"})])},f=[];h._withStripped=!0;var v={data:function(){return{show:!1,sysName:"增值税发票税控系统",version:"2.0.0"}},mounted:function(){this.about()},methods:{about:function(){var e=this;this.http.post("/sys/xtcsManagement/selectFileName",{xtcsslh:"05"}).then(function(t){if(t.success){var n=t.data[0];e.sysName=n.xtcsmc,e.version=n.xtcsz}}).catch(function(e){throw e})}}},b=v,y=n(9),_=Object(y.a)(b,h,f,!1,null,null,null);_.options.__file="src/pages/system/components/common/modal/AboutModal.vue";var g=_.exports,w={components:{AboutModal:g},methods:{logout:function(){this.http.get("/sys/logout",{}).then(function(e){e.success&&(window.location.href="login.html")}).catch(function(e){throw e})},about:function(){this.$refs.AboutModal.show=!0}}},x=w,S=(n(331),Object(y.a)(x,d,m,!1,null,"3f1289ba",null));S.options.__file="src/pages/system/components/common/HeaderMenu.vue";var k=S.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Menu",{ref:"siderMenu",attrs:{"active-name":e.activeName,"open-names":e.openNames,accordion:""},on:{"on-select":e.breadcrumb}},e._l(e.menuList,function(t){return n("Submenu",{key:t.id,attrs:{name:t.name}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),e._v("\n            "+e._s(t.name)+"\n        ")],1),e._v(" "),e._l(t.children,function(a){return n("div",{key:a.id},[a.children?n("Submenu",{attrs:{name:a.name}},[n("template",{slot:"title"},[e._v(e._s(a.name))]),e._v(" "),e._l(a.children,function(o){return n("MenuItem",{key:o.id,attrs:{to:o.url,name:t.name+","+a.name+","+o.name}},[e._v(e._s(o.name))])})],2):e._e(),e._v(" "),a.children?e._e():n("MenuItem",{attrs:{to:a.url,name:t.name+","+a.name}},[e._v(e._s(a.name))])],1)})],2)}),1)},C=[];N._withStripped=!0;var I={},M=function e(t,n){for(var a in t){var o=t[a],i=n+","+o.name;o.children?e(o.children,i):o.url&&(I[o.url]=n+","+o.name)}},O={data:function(){return{menuList:[],activeName:"",openNames:[]}},computed:Object(c.mapGetters)("menu",["menuName"]),created:function(){var e=this,t=sessionStorage.getItem("userCode")||"";this.http.post("/sys/user/queryUserPowerMenu",{swrydm:t}).then(function(t){e.menuList=t.data,M(t.data,""),e.setMenu(e.menuName)}).catch(function(e){throw e})},methods:s()({},Object(c.mapActions)("menu",["breadcrumb"]),{setMenu:function(e){var t=this,n=e||[],a=e.join(",");(n||a)&&(this.openNames=n.slice(0,-1),this.activeName=a,this.$nextTick(function(){t.$refs.siderMenu.updateOpened(),t.$refs.siderMenu.updateActiveName()}))}}),watch:{$route:function(e){var t=e.path,n=I[t];n=n&&n.split(","),this.setMenu(n.slice(1))}}},$=O,L=Object(y.a)($,N,C,!1,null,null,null);L.options.__file="src/pages/system/components/common/SiderMenu.vue";var j=L.exports,E={components:{headerMenu:k,sliderMenu:j},computed:s()({},Object(c.mapGetters)("menu",["menuName"])),created:function(){this.breadcrumb()},methods:s()({},Object(c.mapActions)("menu",["breadcrumb"]))},B=E,A=(n(332),Object(y.a)(B,r,l,!1,null,"679ea325",null));A.options.__file="src/pages/system/App.vue";var P=A.exports,T=n(139),F=n(71),V=n(54),D={initAccept:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)e[n]=t[n];return e},initEmpty:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)e[t]="";return e},changeCodeToName:V.a,changeNameToCode:V.b},z={menuName:""},H={breadcrumb:function(e,t){t&&sessionStorage.setItem("url",t),t=sessionStorage.getItem("url")||"",e.menuName=t.split(",")}},R={breadcrumb:function(e,t){return(0,e.commit)("breadcrumb",t)}},G={menuName:function(e){return e.menuName}},q={namespaced:!0,state:z,getters:G,actions:R,mutations:H},J=n(72);i.a.use(p.a);var U=new p.a.Store({modules:{menu:q,dictionary:J.a}}),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"label-box"},[n("span",{staticClass:"label-text"},[e._v(e._s(e.label))]),e._v(" "),n("div",{staticClass:"label-slot",style:e.styles},[e._t("default")],2)])},Q=[];K._withStripped=!0;var W={name:"label-slot",props:{label:{type:[String,Number],default:""},width:{type:[String,Number]}},computed:{styles:function(){var e={};return this.width&&(e={width:this.width+"px"}),e}}},X=W,Y=Object(y.a)(X,K,Q,!1,null,null,null);Y.options.__file="src/pages/system/common-ui/Label.vue";var Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Label",{attrs:{label:e.label,width:e.width}},[n("Input",{attrs:{value:e.inputValue,type:e.type,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,minlength:e.minlength,clearable:e.clearable,readonly:e.readonly,size:e.size},on:{"on-focus":e.handleFocus,"on-blur":e.handleBlur,"on-change":e.handleChange,input:e.handleInput,"on-enter":e.handleEnter}})],1)},te=[];ee._withStripped=!0;var ne={name:"label-input",props:{value:{type:[String,Number],default:""},name:{type:String},type:{type:String,default:"text"},placeholder:{type:String,default:"请输入"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},size:{type:String,default:"default"},maxlength:{type:Number},minlength:{type:Number},readonly:{type:Boolean,default:!1},width:{type:[String,Number]},label:{type:[String,Number],default:""}},data:function(){return{inputValue:this.value}},methods:{handleChange:function(e){this.$emit("on-change",e,this.value)},handleFocus:function(e){this.$emit("on-focus",e,this.value)},handleBlur:function(e){this.$emit("on-blur",e,this.value)},handleEnter:function(e){this.$emit("enter",e,this.value)},handleInput:function(e){this.$emit("input",e,this.value)}},watch:{value:function(e){this.inputValue=e}}},ae=ne,oe=Object(y.a)(ae,ee,te,!1,null,null,null);oe.options.__file="src/pages/system/common-ui/LabelInput.vue";var ie=oe.exports,re={},le=Object(y.a)(re,void 0,void 0,!1,null,null,null);le.options.__file="src/pages/system/common-ui/LabelDatepicker.vue";var ue=le.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Label",{attrs:{label:e.label,width:e.width}},[n("Select",{attrs:{value:e.inputValue,placeholder:e.placeholder,disabled:e.disabled,clearable:e.clearable,size:e.size},on:{input:e.handleInput,"on-change":e.handleChange}},e._l(e.options,function(e){return n("Option",{key:e.code,attrs:{value:e.code,label:e.name}})}),1)],1)},ce=[];se._withStripped=!0;var pe={name:"label-input",props:{value:{type:[String,Number,Array],default:""},name:{type:String},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},size:{type:String,default:"default"},options:{type:[Array],default:function(){return[]}},width:{type:[String,Number]},label:{type:[String,Number],default:""}},data:function(){return{inputValue:this.value}},methods:{handleChange:function(e){this.$emit("on-change",e)},handleInput:function(e){this.$emit("input",e,this.value)}},watch:{value:function(e){this.inputValue=e}}},de=pe,me=Object(y.a)(de,se,ce,!1,null,null,null);me.options.__file="src/pages/system/common-ui/LabelSelect.vue";var he=me.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Label",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],attrs:{label:e.label,width:e.width}},[n("div",[n("Dropdown",{staticClass:"tree-dropdown",style:{width:e.width+"px"},attrs:{trigger:"custom",visible:e.visible}},[n("Input",{attrs:{value:e.inputValue,placeholder:e.placeholder},on:{"on-focus":e.handleFocus}}),e._v(" "),n("Tree",{attrs:{slot:"list",data:e.options,"show-checkbox":e.showCheckbox,multiple:e.multiple},on:{"on-check-change":e.checkChange},slot:"list"})],1)],1)])},ve=[];fe._withStripped=!0;var be,ye=[],_e="@@clickoutsideContext",ge=i.a.prototype.$isServer,we=function(){return!ge&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),xe=0;!ge&&we(document,"mousedown",function(e){return be=e}),!ge&&we(document,"mouseup",function(e){ye.forEach(function(t){return t[_e].documentHandler(e,be)})});var Se={bind:function(e,t,n){ye.push(e);var o=xe++;e[_e]={id:o,documentHandler:a(e,t,n),methodName:t.expression,bindingFn:t.value}},update:function(e,t,n){e[_e].documentHandler=a(e,t,n),e[_e].methodName=t.expression,e[_e].bindingFn=t.value},unbind:function(e){for(var t=0,n=ye.length;t<n;t++)if(ye[t][_e].id===e[_e].id){ye.splice(t,1);break}delete e[_e]}},ke={name:"label-tree",directives:{clickOutside:Se},props:{value:{type:[String,Number,Array],default:""},name:{type:String},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},showCheckbox:{type:Boolean,default:!0},options:{type:[Array],default:function(){return[]}},width:{type:[String,Number]},label:{type:[String,Number],default:""}},data:function(){return{inputValue:this.value,visible:!1}},methods:{clickOutside:function(){this.visible=!1},checkChange:function(e){this.$emit("check-change",e)},handleFocus:function(){this.visible=!0},handleInput:function(e){this.$emit("input",e,this.value)}},watch:{value:function(e){this.inputValue=e}}},Ne=ke,Ce=Object(y.a)(Ne,fe,ve,!1,null,null,null);Ce.options.__file="src/pages/system/common-ui/LabelTree.vue";var Ie=Ce.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"serch-box"},e._l(e.condition,function(t){return n("div",{key:t.name},["input"===t.type?n("div",{staticClass:"search-box"},[n("Input",{attrs:{placeholder:t.placeholder},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(t.label))])])],1):"select"===t.type?n("div",{staticClass:"search-box box-select"},[n("label",[e._v(e._s(t.label))]),e._v(" "),n("Select",{attrs:{placeholder:t.placeholder},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}},e._l(t.options,function(e){return n("Option",{key:e.code,attrs:{value:e.code,label:e.name}})}),1)],1):"datepicker"===t.type?n("div",{staticClass:"search-box box-select"},[n("label",[e._v(e._s(t.label))]),e._v(" "),n("DatePicker",{staticStyle:{width:"100%"},attrs:{type:t.dateType||""},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}})],1):"button"===t.type?n("div",{staticClass:"search-box box-button"},[n("Button",{attrs:{type:t.color},on:{click:function(n){return e.handleClick(t.fn)}}},[e._v(e._s(t.label))])],1):e._e()])}),0)},Oe=[];Me._withStripped=!0;var $e={name:"SearchCondition",props:{condition:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{handleClick:function(e){e(this.setSearchInfo(this.condition))},setSearchInfo:function(e){var t={},n=!0,a=!1,o=void 0;try{for(var i,r=e[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var l=i.value;l.name&&(t[l.name]=l.value)}}catch(e){a=!0,o=e}finally{try{n||null==r.return||r.return()}finally{if(a)throw o}}return t}},watch:{condition:{handler:function(e){var t=this.setSearchInfo(e);this.$emit("queryData",t)},deep:!0}}},Le=$e,je=(n(333),Object(y.a)(Le,Me,Oe,!1,null,null,null));je.options.__file="src/pages/system/components/serviceCommon/SearchCondition.vue";var Ee=je.exports,Be=n(2);n(137),n(334);i.a.prototype.http=F.a,i.a.prototype.globalTool=D,i.a.prototype.$Message=Be.Message,i.a.component("Button",Be.Button),i.a.component("Table",Be.Table),i.a.component("Input",Be.Input),i.a.component("Select",Be.Select),i.a.component("Page",Be.Page),i.a.component("Icon",Be.Icon),i.a.component("Layout",Be.Layout),i.a.component("Menu",Be.Menu),i.a.component("MenuItem",Be.MenuItem),i.a.component("Sider",Be.Sider),i.a.component("Breadcrumb",Be.Breadcrumb),i.a.component("Submenu",Be.Submenu),i.a.component("BreadcrumbItem",Be.BreadcrumbItem),i.a.component("Modal",Be.Modal),i.a.component("DatePicker",Be.DatePicker),i.a.component("Option",Be.Option),i.a.component("Form",Be.Form),i.a.component("FormItem",Be.FormItem),i.a.component("RadioGroup",Be.RadioGroup),i.a.component("Radio",Be.Radio),i.a.component("Tree",Be.Tree),i.a.component("Dropdown",Be.Dropdown),i.a.component("SearchCondition",Ee),function(){i.a.component("Label",Z),i.a.component("LabelInput",ie),i.a.component("LabelDatepicker",ue),i.a.component("LabelSelect",he),i.a.component("LabelTree",Ie)}();t.default=new i.a({el:"#app",router:T.a,store:U,render:function(e){return e(P)}})},48:function(e,t,n){function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){o(e,t,n[t])})}return e}var o=n(330);e.exports=a},53:function(e,t){e.exports=axios},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){}},[[329,1,2,0]]]);