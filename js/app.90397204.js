(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"039a":function(t,e,s){"use strict";s("7174")},"0552":function(t,e,s){"use strict";s("8a1b")},1030:function(t,e,s){"use strict";s("5812")},1555:function(t,e,s){},"1de4":function(t,e,s){"use strict";s("c680")},2294:function(t,e,s){"use strict";s("c117")},"24cb":function(t,e,s){},"45f4":function(t,e,s){},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("8c4f"),a=s("2f62"),i=s("ba4c"),r=s.n(i),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("a-layout",[s("a-layout-header",[s("div",{staticClass:"header-warpper"},[s("div",{staticStyle:{"font-size":"18px"}},[t._v("互動教學系統")]),s("div",{staticStyle:{flex:"1 1 0%"}}),"teacher"==t.user()?s("router-link",{staticStyle:{"margin-right":"10px",color:"white"},attrs:{to:"/teacher/home"}},[t._v("回活動列表")]):t._e(),s("div",[s("span",{staticClass:"logout-wrapper"},[s("a-icon",{attrs:{type:"logout"},on:{click:t.toLoginPage}})],1)])],1)]),s("a-layout-content",[s("transition",{attrs:{"enter-class":"my-fade-enter","enter-active-class":"my-fade-enter-active"}},[s("router-view",{staticClass:"content"})],1)],1)],1)],1)},c=[],l={name:"App",data:function(){return{show:!1}},created:function(){this.$store.state.user&&this.$router.push({name:"login"})},methods:{user:function(){return this.$store.state.user},toLoginPage:function(){this.$router.push({name:"login"})}}},u=l,d=(s("7af1"),s("2877")),f=Object(d["a"])(u,o,c,!1,null,"7d5aa474",null),m=f.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},h=[],v={},b=Object(d["a"])(v,p,h,!1,null,null,null),y=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-modal",{attrs:{width:"80%",footer:null,title:t.selectedActivity.activity,destroyOnClose:""},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("select-question",{attrs:{activity:t.selectedActivity}})],1),s("a-modal",{attrs:{width:"80%",title:"活動管理",footer:null,destroyOnClose:!0},model:{value:t.editorVisible,callback:function(e){t.editorVisible=e},expression:"editorVisible"}},[s("mngmt-activity",{attrs:{activity:t.selectedActivity}})],1),s("div",[s("h1",[t._v("活動列表")]),s("a-row",{attrs:{gutter:40}},[t._l(t.activities,(function(e){return s("a-col",{key:e.serial,staticStyle:{"margin-bottom":"80px"},attrs:{span:8}},[s("a-card",{attrs:{bordered:!1}},[s("a",{attrs:{slot:"extra",href:"#"},on:{click:function(){return t.openModal(e)}},slot:"extra"},[t._v("開始活動")]),s("div",{staticClass:"ant-card-body"},[s("div",[s("p",[t._v("題目數量: "+t._s(e.questions.length))]),s("p",[t._v("活動名稱: "+t._s(e.activity))])])]),s("a-button",{staticClass:"card-editor",attrs:{shape:"circle",icon:"edit"},on:{click:function(){return t.openEditModal(e)}}}),s("a-button",{staticClass:"card-delete",attrs:{shape:"circle",icon:"delete"},on:{click:function(){return t.showDeleteConfirm(e)}}})],1)],1)})),s("a-col",{staticStyle:{"margin-bottom":"80px"},attrs:{span:8}},[s("a-card",{attrs:{bordered:!1}},[s("div",{staticClass:"ant-card-body",staticStyle:{display:"flex"}},[s("a-icon",{staticStyle:{"font-size":"30px"},attrs:{type:"plus-circle"},on:{click:function(){return t.openEditModal({})}}})],1)])],1)],2)],1)],1)},j=[],w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout",{staticClass:"mngmt-activity"},[s("a-layout-sider",{staticClass:"sub-panel",staticStyle:{"overflow-y":"auto"}},[s("div",{staticStyle:{margin:"15px"}},[s("a-input",{staticClass:"title",attrs:{placeholder:"活動名稱",value:t.activity.activity}})],1),0===t.questions.length?s("a-empty",{staticStyle:{margin:"15px"}}):t._l(t.questions,(function(e){return s("a-card",{key:e.serial,staticClass:"thumbnail",staticStyle:{margin:"15px"},attrs:{title:e.question,bordered:!1},on:{click:function(s){return t.edit(e)}}},[s("a-radio-group",{staticStyle:{width:"80%"},attrs:{name:"radioGroup1",disabled:"","default-value":1,size:"small"},model:{value:e.answer,callback:function(s){t.$set(e,"answer",s)},expression:"question.answer"}},[s("a-radio",{attrs:{value:1}},[t._v(" A. "+t._s(e.options["1"]))]),s("a-radio",{attrs:{value:2}},[t._v(" B. "+t._s(e.options["2"]))]),s("a-radio",{attrs:{value:3}},[t._v(" C. "+t._s(e.options["3"]))]),s("a-radio",{attrs:{value:4}},[t._v(" D. "+t._s(e.options["4"]))])],1),s("a",{attrs:{slot:"extra"},slot:"extra"},[s("a-icon",{staticStyle:{color:"gray"},attrs:{type:"close"}})],1)],1)}))],2),s("a-layout",[s("div",{staticClass:"main-panel"},[s("a-layout-header",[s("a-input",{staticClass:"title",attrs:{placeholder:"題目名稱"},model:{value:t.selectedQuestion.question,callback:function(e){t.$set(t.selectedQuestion,"question",e)},expression:"selectedQuestion.question"}})],1),s("a-layout-content",{staticStyle:{margin:"40px 0px"}},[s("a-radio-group",{staticStyle:{width:"100%"},attrs:{name:"radioGroup","default-value":1},model:{value:t.selectedQuestion.answer,callback:function(e){t.$set(t.selectedQuestion,"answer",e)},expression:"selectedQuestion.answer"}},[s("div",[s("a-col",{staticClass:"gutter-row",attrs:{span:12}},[s("div",{staticClass:"gutter-box"},[s("a-radio",{attrs:{value:1}},[t._v(" A. "),s("a-input",{attrs:{placeholder:"選項a"},model:{value:t.options[1],callback:function(e){t.$set(t.options,1,e)},expression:"options[1]"}})],1)],1)]),s("a-col",{staticClass:"gutter-row",attrs:{span:12}},[s("div",{staticClass:"gutter-box"},[s("a-radio",{attrs:{value:2}},[t._v(" B. "),s("a-input",{attrs:{placeholder:"選項b"},model:{value:t.options[2],callback:function(e){t.$set(t.options,2,e)},expression:"options[2]"}})],1)],1)])],1),s("div",{staticStyle:{margin:"50px 0px"}},[s("a-col",{staticClass:"gutter-row",attrs:{span:12}},[s("div",{staticClass:"gutter-box"},[s("a-radio",{attrs:{value:3}},[t._v(" C. "),s("a-input",{attrs:{placeholder:"選項c"},model:{value:t.options[3],callback:function(e){t.$set(t.options,3,e)},expression:"options[3]"}})],1)],1)]),s("a-col",{staticClass:"gutter-row",attrs:{span:12}},[s("div",{staticClass:"gutter-box"},[s("a-radio",{attrs:{value:4}},[t._v(" D. "),s("a-input",{attrs:{placeholder:"選項d"},model:{value:t.options[4],callback:function(e){t.$set(t.options,4,e)},expression:"options[4]"}})],1)],1)])],1)])],1),s("a-layout-footer",[s("a-button",{attrs:{size:"small",icon:"delete"},on:{click:t.clear}},[t._v("清除")]),s("a-button",{staticStyle:{margin:"20px"},attrs:{size:"small",type:"primary",icon:"save",disabled:t.formVaild},on:{click:t.addQuiz}},[t._v("儲存")])],1)],1)])],1)},k=[],x=(s("caad"),s("c975"),s("d81d"),s("b64b"),s("07ac"),s("2532"),{name:"mngmtActivity",props:{activity:{type:Object,default:null}},created:function(){console.log(this.activity)},data:function(){return{index:0,selectedQuestion:{},question:"",labelCol:{span:4},wrapperCol:{span:14},form:this.$form.createForm(this,{name:"coordinated"})}},computed:{formVaild:function(){return Object.values(this.questions).includes("")},questions:function(){return this.activity.questions?this.activity.questions:[]},options:function(){return this.selectedQuestion.options?this.selectedQuestion.options:{1:"",2:"",3:"",4:""}}},methods:{detail:function(){console.log("show detail")},edit:function(t){this.selectedQuestion=t},addQuiz:function(){var t=this.quizzes.map((function(t){return t.index})).indexOf(this.index);if(console.log(t),-1!==t){var e=Object.assign({},this.quiz);return this.quizzes[t]=e,void this.clear()}this.quiz.index=this.index;var s=Object.assign({},this.quiz);console.log(this.quizzes),this.quizzes.push(s),this.index+=1,this.clear()},clear:function(){var t=this;Object.keys(this.quiz).map((function(e){"answer"===e?t.quiz[e]=1:"index"!==e&&(t.quiz[e]="")}))},remove:function(){this.quizzes.pop()},destroyed:function(){console.log("destroyed")}}}),C=x,_=(s("85f4"),Object(d["a"])(C,w,k,!1,null,null,null)),A=_.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-table",{attrs:{pagination:!1,columns:t.columns,"data-source":t.activity.questions,"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}}}),s("div",{staticClass:"action"},[s("a-button",{attrs:{disabled:!t.hasSelected,size:"small",type:"primary"},on:{click:function(e){return t.start()}}},[t._v("開始")])],1)],1)},P=[],S=s("5530"),q=[{title:"題目",dataIndex:"question",key:"question"}],O=Object(a["a"])("teacher"),$=O.mapActions,I={name:"selectQuestion",props:{activity:{type:Object,default:null}},data:function(){return{columns:q,selectedRowKeys:[]}},computed:{hasSelected:function(){return this.selectedRowKeys.length>0}},methods:Object(S["a"])(Object(S["a"])({},$(["setInProgressActivity"])),{},{start:function(){var t=this;this.activity.online=!0,this.activity.questions.map((function(e){t.selectedRowKeys.includes(e.serial)?e.visible=!0:e.visible=!1})),this.setInProgressActivity(this.activity),this.$router.push({name:"activity-code"})},onSelectChange:function(t){console.log("selectedRowKeys changed: ",t),this.selectedRowKeys=t}})},D=I,B=(s("1de4"),Object(d["a"])(D,z,P,!1,null,"513e64ab",null)),E=B.exports,F={name:"Home",components:{"mngmt-activity":A,"select-question":E},data:function(){return{visible:!1,editorVisible:!1,selectedActivity:{}}},computed:{activities:function(){return this.$store.state.activities}},created:function(){console.log(this.activities)},methods:{openModal:function(t){this.selectedActivity=t,this.visible=!this.visible},openEditModal:function(t){this.selectedActivity=t,this.editorVisible=!this.editorVisible},handleOk:function(){this.$router.push({name:"activity-code"})},showDeleteConfirm:function(){this.$confirm({title:"確定要刪除此活動嗎?",okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})}}},Q=F,M=(s("0552"),Object(d["a"])(Q,g,j,!1,null,"6025a7ca",null)),R=M.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{staticStyle:{"font-size":"50px"}},[t._v(t._s(t.inProgressActivity.activity))]),s("transition",{attrs:{"enter-class":"my-fade-enter","enter-active-class":"my-fade-enter-active"}},[s("router-view",{attrs:{activity:t.inProgressActivity}})],1)],1)},L=[],G=Object(a["a"])("teacher"),K=G.mapGetters,V={computed:Object(S["a"])({},K(["activities","inProgressActivity"])),created:function(){}},N=V,W=(s("2294"),Object(d["a"])(N,T,L,!1,null,"9ffbfc14",null)),U=W.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"wrapper"},[s("p",{staticClass:"title"},[t._v("請輸入以下條碼以加入活動:")]),s("h1",[t._v(t._s(this.activity.codename))]),s("div",{staticClass:"action"},[s("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("開始")])],1)])])},J=[],Y=(s("d3b7"),s("bc3a")),X=s.n(Y),Z=X.a.create({baseURL:"https://ccit.herokuapp.com",timeout:3e4,withCredentials:!1}),tt=function(t){var e=t.config;return t.response?(console.log("catch the error"),console.log(e.url),401!==t.response.status?new Promise((function(e,s){s(t)})):Promise.reject(t)):Promise.reject(t)};Z.interceptors.request.use((function(t){return t}),tt),Z.interceptors.response.use((function(t){return t.data}),tt);var et={getProgress:"/teacher@progress/",submitAnswer:"/student/",clearAnswer:"/student/"},st=et;function nt(t){return Z({url:st.getProgress+t.codename,method:"get"})}function at(t,e){return Z({url:st.submitAnswer+e,method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function it(t){return Z({url:st.clearAnswer+t+"/*",method:"delete"})}var rt={props:{activity:Object},created:function(){it(this.activity.codename).then((function(t){console.log(t)}))},methods:{next:function(){this.$router.push({name:"monitor"})}}},ot=rt,ct=(s("f183"),Object(d["a"])(ot,H,J,!1,null,"bca41122",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[0==t.studentAnsProgress.length?s("div",{staticClass:"spin-wrapper"},[s("a-spin",{attrs:{size:"large"}})],1):s("a-table",{staticStyle:{background:"#fafafa"},attrs:{pagination:!1,columns:t.columns,"data-source":t.studentAnsProgress},scopedSlots:t._u([{key:"answer",fn:function(t){return s("span",{},[void 0==t?s("a-icon",{staticStyle:{color:"#1890ff"},attrs:{type:"loading"}}):t.bingo?s("a-icon",{staticStyle:{color:"green"},attrs:{type:"check"}}):s("a-icon",{staticStyle:{color:"red"},attrs:{type:"close"}})],1)}}])}),s("div",{staticClass:"action"},[s("a-button",{staticStyle:{margin:"20px"},attrs:{size:"small",type:"primary"},on:{click:t.next}},[t._v("結束活動")])],1)],1)},dt=[],ft=(s("4160"),s("25f0"),s("159b"),Object(a["a"])("teacher")),mt=ft.mapGetters,pt=Object(a["a"])("teacher"),ht=pt.mapActions,vt={props:{activity:Object},data:function(){return{columns:[{title:"Name",dataIndex:"name",key:"name"}],studentAnsProgress:[],polling:null}},computed:Object(S["a"])({},mt(["getInProgressQuiz","getStudentAnsProgress"])),created:function(){var t=this;this.getInProgressQuiz.forEach((function(e){t.columns.push({title:"Q"+e.serial,dataIndex:e.serial.toString(),key:e.serial,scopedSlots:{customRender:"answer"}})})),nt({codename:this.activity.codename}).then((function(e){t.setStudentAnsProgress(null===e.student?[]:e.student),t.studentAnsProgress=t.$store.state.teacher.studentAnsProgress})),this.pollData()},methods:Object(S["a"])(Object(S["a"])({},ht(["setStudentAnsProgress"])),{},{next:function(){this.$router.push({name:"summary"})},pollData:function(){var t=this;this.polling=setInterval((function(){nt({codename:t.activity.codename}).then((function(e){t.setStudentAnsProgress(null===e.student?[]:e.student),t.studentAnsProgress=t.$store.state.teacher.studentAnsProgress}))}),5e3)}}),beforeDestroy:function(){clearInterval(this.polling)}},bt=vt,yt=(s("1030"),Object(d["a"])(bt,ut,dt,!1,null,"6c90bd70",null)),gt=yt.exports,jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ve-histogram",{staticStyle:{background:"white"},attrs:{legend:t.legend,data:t.chartData,colors:t.colors,extend:t.extend,yAxis:t.yAxis}}),s("a-divider"),t._l(t.summaryInPieChart,(function(e,n){return s("span",{key:n,staticStyle:{"text-align":"center"}},[s("ve-pie",{staticStyle:{background:"white",display:"inline-block"},attrs:{title:{text:"Q"+n},legend:t.pieLegend,colors:t.colors,width:"300px",height:"320px",data:e}})],1)}))],2)},wt=[],kt=Object(a["a"])("teacher"),xt=kt.mapGetters,Ct={data:function(){return{chartData:{columns:["Q","選項A","選項B","選項C","選項D"],rows:null},colors:["#66B8C9","#A98AB0","#FEB06A","#9DCED0"],extend:{barWidth:30,dimensions:1},yAxis:{minInterval:1},legend:{show:!1},pieLegend:{selectedMode:!1}}},computed:Object(S["a"])({},xt(["summaryInBarChart","summaryInPieChart"])),created:function(){this.chartData.rows=this.summaryInBarChart,console.log(this.summaryInPieChart)}},_t=Ct,At=Object(d["a"])(_t,jt,wt,!1,null,null,null),zt=At.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return void 0!=t.inProgressActivity?s("div",{staticClass:"home-wrapper"},[s("p",[t._v(" Hi,"+t._s(t.student())+" 歡迎加入"+t._s(t.inProgressActivity.activity)+"活動 "),s("a-icon",{attrs:{type:"bulb"}})],1),s("a-steps",{staticStyle:{"text-align":"left"},attrs:{current:t.current}},t._l(t.quizzes,(function(t){return s("a-step",{key:t.serial})})),1),[s("p",[t._v(t._s(t.quiz.serial+1)+". "+t._s(t.quiz.question))]),s("div",{staticClass:"radio-wrapper"},[s("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}},[s("a-radio",{staticStyle:{left:"0"},attrs:{value:1}},[t._v(" A. "+t._s(t.quiz.options[1])+" ")]),s("a-radio",{staticStyle:{right:"0"},attrs:{value:2}},[t._v(" B. "+t._s(t.quiz.options[2])+" ")]),s("a-radio",{staticStyle:{left:"0",bottom:"0"},attrs:{value:3}},[t._v(" C. "+t._s(t.quiz.options[3])+" ")]),s("a-radio",{staticStyle:{right:"0",bottom:"0"},attrs:{value:4}},[t._v(" D. "+t._s(t.quiz.options[4])+" ")])],1)],1),s("div",{staticClass:"steps-action"},[t.current<t.quizzes.length-1?s("a-button",{attrs:{type:"primary",disabled:!t.answer},on:{click:t.next}},[t._v(" 下一題 ")]):t._e(),t.current==t.quizzes.length-1?s("a-button",{attrs:{type:"primary",disabled:!t.answer},on:{click:t.finish}},[t._v(" 完成 ")]):t._e()],1)]],2):t._e()},St=[],qt={data:function(){return{current:0,answer:null,inProgressActivity:null,codename:"",user:""}},computed:{quizzes:function(){return this.inProgressActivity.questions},quiz:function(){return this.inProgressActivity.questions[this.current]}},created:function(){this.codename=this.$store.state.user.codename,this.user=this.$store.state.user,this.inProgressActivity=this.$store.getters.inProgressActivity(this.codename),void 0==this.inProgressActivity&&this.showErrorReturnToLogin("無效的活動碼")},methods:{next:function(){var t={answer:this.answer,serial:this.current,name:this.user.nickname};at(t,this.codename).then((function(t){console.log(t)})),this.current++,this.answer=null},finish:function(){this.$message.success("謝謝參與,歡迎加入下一個活動!");var t={answer:this.answer,serial:this.current,name:this.user.nickname};at(t,this.codename).then((function(t){console.log(t)})),this.$router.push({name:"login"})},student:function(){try{return this.$store.state.user.nickname}catch(t){return this.showErrorReturnToLogin("請先進行登入"),this.$router.push({name:"login"}),null}},showErrorReturnToLogin:function(t){this.$message.error(t),this.$router.push({name:"login"})}}},Ot=qt,$t=(s("c28c"),Object(d["a"])(Ot,Pt,St,!1,null,"372fbc10",null)),It=$t.exports,Dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container"},[s("h2",{staticClass:"login-title"},[t._v("歡迎來到互動教學系統")]),s("a-form",{ref:"form",staticClass:"login-form",attrs:{model:t.form}},[s("div",{staticClass:"switch-wrapper"},[s("a-switch",{attrs:{"checked-children":"教師","un-checked-children":"學生","default-checked":""},model:{value:t.teacher,callback:function(e){t.teacher=e},expression:"teacher"}})],1),s("transition",{attrs:{"enter-class":"my-fade-enter","leave-to-class":"my-fade-leave-to","enter-active-class":"my-fade-enter-active","leave-active-class":"my-fade-leave-active"}},[t.teacher?s("div",[s("h2",{staticClass:"title"},[t._v("教師登入 LOGIN")]),s("a-form-item",[s("a-input",{staticClass:"inputBox",model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[s("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-input-password",{staticClass:"inputBox",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[s("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-button",{staticClass:"submit",attrs:{type:"primary",disabled:t.valid},on:{click:t.onSubmit}},[t._v("登錄")])],1)],1):t._e()]),s("transition",{attrs:{"enter-class":"my-fade-enter","leave-to-class":"my-fade-leave-to","enter-active-class":"my-fade-enter-active","leave-active-class":"my-fade-leave-active"}},[t.teacher?t._e():s("div",[s("h2",{staticClass:"title"},[t._v("學生登入 LOGIN")]),s("a-form-item",[s("a-input",{staticClass:"inputBox",attrs:{placeholder:"學號"},model:{value:t.studentForm.studentID,callback:function(e){t.$set(t.studentForm,"studentID",e)},expression:"studentForm.studentID"}},[s("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-input",{staticClass:"inputBox",attrs:{placeholder:"暱稱"},model:{value:t.studentForm.nickname,callback:function(e){t.$set(t.studentForm,"nickname",e)},expression:"studentForm.nickname"}},[s("a-icon",{attrs:{slot:"prefix",type:"smile"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-input",{staticClass:"inputBox",attrs:{placeholder:"活動代碼"},model:{value:t.studentForm.activatyCode,callback:function(e){t.$set(t.studentForm,"activatyCode",e)},expression:"studentForm.activatyCode"}},[s("a-icon",{attrs:{slot:"prefix",type:"barcode"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-button",{staticClass:"submit",attrs:{type:"primary",disabled:t.valid},on:{click:t.onSubmit}},[t._v("加入")])],1)],1)])],1)],1)},Bt=[],Et={data:function(){return{form:{username:"admin",password:"123456"},studentForm:{studentID:null,nickname:null,activatyCode:null},teacher:!0}},created:function(){this.studentForm.studentID=sessionStorage.getItem("studentId"),this.studentForm.nickname=sessionStorage.getItem("nickname"),this.studentForm.studentID&&(this.teacher=!1)},computed:{valid:function(){return this.teacher?!(this.form.username&&this.form.password):!(this.studentForm.studentID&&this.studentForm.nickname&&this.studentForm.activatyCode)}},methods:{onSubmit:function(){if(this.teacher)"admin"===this.form.username&&(this.$store.dispatch("login","teacher"),this.$router.push({name:"home"}));else{var t={studentId:this.studentForm.studentID,nickname:this.studentForm.nickname,codename:this.studentForm.activatyCode};this.$store.dispatch("login",t),this.$router.push({name:"student-home"})}}}},Ft=Et,Qt=(s("039a"),Object(d["a"])(Ft,Dt,Bt,!1,null,null,null)),Mt=Qt.exports;r.a.use(n["a"]);var Rt=[{path:"/",name:"login",component:Mt},{path:"/teacher",component:y,redirect:"/teacher/home",children:[{path:"home",name:"home",component:R},{path:"in-progress",name:"in-progress",component:U,children:[{path:"code",component:lt,name:"activity-code"},{path:"monitor",component:gt,name:"monitor"},{path:"summary",component:zt,name:"summary"}]}]},{path:"/student",component:It,name:"student-home"}],Tt=new n["a"]({mode:"history",base:"/",routes:Rt}),Lt=Tt,Gt=s("f23d"),Kt=s("2819"),Vt=s.n(Kt),Nt=(s("7db0"),s("53ca")),Wt=s("2b0e"),Ut={namespaced:!0,state:{inProgressActivity:{activity:"國文",codename:"codename",questions:[{visible:!0,question:"「 細 細 長 長 的 脖 子 、 蜂 窩 狀 的 臉 面 」 是 用 哪 一 種 感 官 描 述 ？",answer:1,serial:0,options:{1:"視覺",2:"聽覺",3:"觸覺",4:"味覺"}},{visible:!0,question:"下 面 哪 一 個 選 項 的 用 字 正 確 ？",answer:4,serial:1,options:{1:"方專古道",2:"徘山倒海",3:"江郎才進",4:"好事多磨"}},{visible:!0,question:"小 君 想 查 尋 有 關 各 種 昆 蟲 的 詳 細 介 紹 ， 請 問 她 應 該 要 使 用 哪 一 種 工 具 書 ？",answer:3,serial:2,options:{1:"自點",2:"成語辭典",3:"百科全書",4:"國語課本"}},{key:3,visible:!0,question:"「 □ 想 擁 有 好 人 緣 ， □ 有 禮 貌 的 對 待 別 人 。 」",answer:2,serial:3,options:{1:"連 / 就",2:"如 果 / 請",3:" 不 但 / 且 ",4:"一 看 / 就"}},{key:4,visible:!0,question:"「 窗 外 流 進 來 □ □ 的 月 光 ， 洋 溢 著 祥 和 寧 靜 的 氣 氛 。 」",answer:1,serial:4,options:{1:"乳白",2:"清白",3:"慘白",4:"雪地"}}],online:!1},studentInfo:null},getters:{inProgressActivity:function(t){return t.inProgressActivity}},mutations:{studentInfo:function(t,e){t.studentInfo=e}},action:{setStudentInfo:function(t,e){var s=t.commit;s("studentInfo",e)}}},Ht=Ut,Jt=(s("b0c0"),{namespaced:!0,state:{inProgressActivity:null,studentAnsProgress:[]},mutations:{inProgressActivity:function(t,e){t.inProgressActivity=e},studentAnsProgress:function(t,e){for(var s=0;s<e.length;s++)Wt["a"].set(t.studentAnsProgress,s,e[s])},clearStudentAnsProgress:function(t){t.studentAnsProgress=[]}},getters:{inProgressActivity:function(t){return t.inProgressActivity},getInProgressQuiz:function(t){return t.inProgressActivity.questions},getStudentAnsProgress:function(t){return t.studentAnsProgress},getStudentAnsSummary:function(t,e){var s=e.getStudentAnsProgress,n=e.getInProgressQuiz;return n.map((function(t){t["answers"]={1:0,2:0,3:0,4:0},s.map((function(e){Object.prototype.hasOwnProperty.call(e,t.serial)&&(t["answers"][[e[t.serial].answer]]+=1)}))})),n},summaryInBarChart:function(t,e){var s=e.getStudentAnsSummary,n=[];return s.forEach((function(t){n.push({Q:"Q"+t.serial,"選項A":{value:t.answers[1],itemStyle:{color:1==t.answer?"#97b552":"#c05050",borderColor:1==t.answer?"#97b552":"#c05050",borderWidth:2}},"選項B":{value:t.answers[2],itemStyle:{color:2==t.answer?"#97b552":"#c05050",borderColor:2==t.answer?"#97b552":"#c05050",borderWidth:2}},"選項C":{value:t.answers[3],itemStyle:{color:3==t.answer?"#97b552":"#c05050",borderColor:3==t.answer?"#97b552":"#c05050",borderWidth:2}},"選項D":{value:t.answers[4],itemStyle:{color:4==t.answer?"#97b552":"#c05050",borderColor:4==t.answer?"#97b552":"#c05050",borderWidth:2}}})})),n},summaryInPieChart:function(t,e){var s=e.getStudentAnsSummary,n=[];return s.forEach((function(t){var e={columns:["選項","選項A","選項B","選項C","選項D"],rows:[{"選項":"A","選項A":t.answers["1"],label:"123"},{"選項":"B","選項A":t.answers["2"]},{"選項":"C","選項A":t.answers["3"]},{"選項":"D","選項A":t.answers["4"]}]};n.push(e)})),n}},actions:{setInProgressActivity:function(t,e){var s=t.commit;s("inProgressActivity",e)},setStudentAnsProgress:function(t,e){var s=t.commit,n=t.getters;s("clearStudentAnsProgress");var a=e.map((function(t){var e={};Wt["a"].set(e,"name",t.name),Wt["a"].set(e,"time",Date.now());for(var s=0;s<t.reply.length;s++){var a={bingo:t.reply[s].answer===n.getInProgressQuiz[s].answer,answer:t.reply[s].answer};Wt["a"].set(e,s.toString(),a)}return e}));s("studentAnsProgress",a)}}}),Yt=Jt;Wt["a"].use(a["b"]);var Xt=new a["b"].Store({state:{user:null,activities:[{activity:"國文",codename:"Chinese",questions:[{key:0,visible:!0,question:"「 細 細 長 長 的 脖 子 、 蜂 窩 狀 的 臉 面 」 是 用 哪 一 種 感 官 描 述 ？",answer:1,serial:0,options:{1:"視覺",2:"聽覺",3:"觸覺",4:"味覺"}},{key:1,visible:!0,question:"下 面 哪 一 個 選 項 的 用 字 正 確 ？",answer:4,serial:1,options:{1:"方專古道",2:"徘山倒海",3:"江郎才進",4:"好事多磨"}},{key:2,visible:!0,question:"小 君 想 查 尋 有 關 各 種 昆 蟲 的 詳 細 介 紹 ， 請 問 她 應 該 要 使 用 哪 一 種 工 具 書 ？",answer:3,serial:2,options:{1:"自點",2:"成語辭典",3:"百科全書",4:"國語課本"}},{key:3,visible:!0,question:"「 □ 想 擁 有 好 人 緣 ， □ 有 禮 貌 的 對 待 別 人 。 」",answer:2,serial:3,options:{1:"連 / 就",2:"如 果 / 請",3:" 不 但 / 且 ",4:"一 看 / 就"}},{key:4,visible:!0,question:"「 窗 外 流 進 來 □ □ 的 月 光 ， 洋 溢 著 祥 和 寧 靜 的 氣 氛 。 」",answer:1,serial:4,options:{1:"乳白",2:"清白",3:"慘白",4:"雪地"}}],online:!1},{activity:"數學",codename:"Math",questions:[{key:0,visible:!0,question:"1.7 x 0.58 的積是幾位小數？",answer:3,serial:0,options:{1:"4",2:"3",3:"2",4:"1"}},{key:1,visible:!0,question:"角錐的側面是什麼形？",answer:4,serial:1,options:{1:"直角三角形",2:"平行四邊形",3:"長方形",4:"等腰三角形"}},{key:2,visible:!0,question:"一輛貨車約重 2.5 公噸。2.5 公噸可換算成?",answer:3,serial:2,options:{1:"25 公斤",2:"250 公斤",3:"2500 公斤",4:"25000 公斤"}},{key:3,visible:!0,question:"一塊正方形土地的面積是 1 公畝，周長是多少公尺？",answer:4,serial:3,options:{1:"100 公尺",2:"1 公尺",3:"10 公尺",4:"40 公尺"}},{key:4,visible:!0,question:"有 A、B、C 三數，若 A－2＝B＋2＝C－5，則 A、B、C 的 大小關係為何?",answer:2,serial:4,options:{1:"A＞B＞C",2:"C＞A＞B",3:"B＞C＞A",4:"A＞C＞B"}}],online:!1},{activity:"自然",codename:"Biology",questions:[{key:0,visible:!0,question:"布袋蓮葉面的蠟質具有什麼功用？",answer:1,serial:0,options:{1:"防水",2:"呼吸",3:"遮光",4:"隔熱"}},{key:1,visible:!0,question:"哪一種水生植物的根是生長在水底土裡， 而葉子挺出水面？",answer:1,serial:1,options:{1:"蓮花",2:"睡蓮",3:"布袋蓮",4:"水蘊草"}},{key:2,visible:!0,question:"魚呼吸時，什麼部位會不停的開合？",answer:1,serial:2,options:{1:"鰓蓋和口",2:"肺",3:"呼吸管",4:"蹼"}}],online:!1}]},mutations:{user:function(t,e){t.user=e,"object"===Object(Nt["a"])(e)&&Object.keys(e).forEach((function(t){sessionStorage.setItem(t,e[t])}))}},actions:{login:function(t,e){var s=t.commit;s("user",e)}},getters:{inProgressActivity:function(t){return function(e){return t.activities.find((function(t){return t.codename===e}))}}},modules:{student:Ht,teacher:Yt}}),Zt=Xt;s("202f");r.a.config.productionTip=!1,r.a.use(Gt["a"]),r.a.use(a["b"]),r.a.use(Vt.a),r.a.use(n["a"]),new r.a({router:Lt,store:Zt,render:function(t){return t(m)}}).$mount("#app")},5812:function(t,e,s){},7174:function(t,e,s){},"7af1":function(t,e,s){"use strict";s("1555")},"85f4":function(t,e,s){"use strict";s("f921")},"8a1b":function(t,e,s){},c117:function(t,e,s){},c28c:function(t,e,s){"use strict";s("24cb")},c680:function(t,e,s){},f183:function(t,e,s){"use strict";s("45f4")},f921:function(t,e,s){}});
//# sourceMappingURL=app.90397204.js.map