(function(e){function t(t){for(var a,r,s=t[0],c=t[1],d=t[2],u=0,p=[];u<s.length;u++)r=s[u],i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-017676ae":"48687444","chunk-1b960772":"b17f5e3d","chunk-2d0e8f61":"71767411","chunk-2d22269e":"e3a353d2","chunk-2d22bd5f":"3820b0d9","chunk-2d230532":"ed85ea3d","chunk-2d23860a":"b8f1edbf","chunk-2d238623":"0f5df76b","chunk-7ef25035":"14bb4da1"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-017676ae":1,"chunk-7ef25035":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-017676ae":"b3660bee","chunk-1b960772":"31d6cfe0","chunk-2d0e8f61":"31d6cfe0","chunk-2d22269e":"31d6cfe0","chunk-2d22bd5f":"31d6cfe0","chunk-2d230532":"31d6cfe0","chunk-2d23860a":"31d6cfe0","chunk-2d238623":"31d6cfe0","chunk-7ef25035":"fccf6c52"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var d=o[s],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){d=p[s],u=d.getAttribute("data-href");if(u===a||u===i)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete r[e],l.parentNode.removeChild(l),n(o)},l.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(l)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=o);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),d=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[e]=void 0}};var p=setTimeout(function(){d({type:"timeout",target:u})},12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var p=0;p<d.length;p++)t(d[p]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07da":function(e,t,n){},"0d8d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g2u-tab flex grow h-right point px-2 py-1",class:e.clTabActivatedColor,on:{click:function(t){return"button"in t||!e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?"button"in t&&0!==t.button?null:e.activateTab(t):null},mouseup:[function(t){return"button"in t&&1!==t.button?null:e.closeTab(t)},function(t){return"button"in t||!e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?"button"in t&&0!==t.button?null:void(e.ismousedown=!1):null}],mousedown:function(t){return"button"in t||!e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?"button"in t&&0!==t.button?null:void(e.ismousedown=!0):null},mouseleave:function(t){e.ismousedown=!1},mousemove:e.onmousemove}},[n("button",{staticClass:"btn mr-1 p-0",on:{click:function(t){return t.stopPropagation(),e.closeTab(t)}}},[n("icon",{attrs:{icon:"times"}})],1),n("small",{staticClass:"tab-title in-block grow mr-2"},[e._v(e._s(e.param&&e.param.title||"???"))])])},r=[],i=n("cebc"),o=(n("cadf"),n("551c"),n("097d"),n("2f62")),s={props:["_id","type","param","parent","child","activated"],data:function(){return{ismousedown:!1}},mounted:function(){this.activateTab()},methods:Object(i["a"])({onmousemove:function(e){this.ismousedown&&this.drag_start({type:"DragTab",startX:e.clientX,startY:e.clientY,param:{title:this.param&&this.param.title||"???"},drop:this._id})},activateTab:function(){this.$emit("onactivate",this._id)},closeTab:function(e){var t={};this.pane_grab({context:t,_id:this._id}),this.pane_close(t)}},Object(o["c"])(["pane_grab","pane_close","drag_start"])),computed:{clTabActivatedColor:function(){return this.activated?["bg-light"]:["bg-dark","text-light"]}}},c=s,d=(n("d72a"),n("2877")),u=Object(d["a"])(c,a,r,!1,null,"eb1d975e",null);u.options.__file="Tab.vue";t["default"]=u.exports},"0ded":function(e,t,n){},"16fe":function(e,t,n){var a={"./drag/default.vue":["fec1","chunk-2d238623"],"./g2u/default.vue":["ec97","chunk-2d230532"],"./pane/default.vue":["8c00","chunk-2d0e8f61"]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id="16fe",e.exports=r},3440:function(e,t,n){"use strict";var a=n("0ded"),r=n.n(a);r.a},"3dfd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.syspane?n("panes",{attrs:{_id:e.syspane.root._id,type:e.syspane.root.type,param:e.syspane.root.param,parent:e.syspane.root.parent,child:e.syspane.root.child}}):e._e(),n("drag")],1)},r=[],i=n("cebc"),o=(n("cadf"),n("551c"),n("097d"),n("625a")),s=n("e7df"),c=n("2f62"),d={mounted:function(){this.pane_init();var e={};this.pane_root(e),this.pane_open({context:e,type:"Menu",param:{width:"auto",resize:!1}}),this.pane_open({context:e,type:"pane",param:{}}),e.grab=e.open,this.pane_open({context:e,type:"FullCalendar",param:{title:"📆 달력"}})},computed:Object(i["a"])({},Object(c["d"])(["syspane","sysdrag"])),methods:Object(i["a"])({},Object(c["c"])(["pane_init","pane_root","pane_open"])),components:{Panes:o["default"],Drag:s["default"]},name:"app"},u=d,p=n("2877"),l=Object(p["a"])(u,a,r,!1,null,null,null);l.options.__file="App.vue";t["default"]=l.exports},"41cb":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=n("8c4f");a["default"].use(r["a"]),t["default"]=new r["a"]({mode:"history",base:"",routes:[]})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("3dfd"),i=n("41cb"),o=n("c0d6"),s=(n("4989"),n("ab8b"),n("bc23")),c=n("ecee"),d=n("c074"),u=n("ad3d");n("a7e2");c["c"].add(d["a"]),a["default"].component("icon",u["a"]),a["default"].use(s),a["default"].config.productionTip=!1,new a["default"]({router:i["default"],store:o["default"],render:function(e){return e(r["default"])}}).$mount("#app")},"606b":function(e,t,n){},"625a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex grow",class:e.clsDirection},[e._l(e.child,function(t,a){return[n("div",{key:t._id,ref:"size"+a,refInFor:!0,staticClass:"flex",style:e.styBounds[a]},["panes"===t.type?n("panes",{attrs:{_id:t._id,type:t.type,param:t.param,parent:t.parent,child:t.child}}):"pane"===t.type?n("pane",{attrs:{_id:t._id,type:t.type,param:t.param,parent:t.parent,child:t.child}}):n("d-comp",{attrs:{path:"pane",_id:t._id,type:t.type,param:t.param,parent:t.parent}})],1),a===e.child.length-1||void 0!==t.param.resize&&!t.param.resize?e._e():n("div",{key:a,staticClass:"pl-1 pt-1 bg-light",class:e.clsResize,on:{mousedown:function(n){e.dargbardown(n,t._id,a)}}})]})],2)},r=[],i=(n("a481"),n("c5f6"),n("cebc")),o=n("9e68"),s=n("f6c3"),c=n("2f62"),d={props:["_id","type","param","parent","child"],name:"panes",data:function(){return{drag:null}},mounted:function(){this.selfRemover()},watch:{child:function(){this.selfRemover()}},methods:Object(i["a"])({dargbarmove:function(e){if("vertical"===this.param.direction){var t=e.clientY-this.drag.clientY;this.pane_resize({context:this.drag.context,size:{height:this.drag.setsize+t+"px"}})}else{var n=e.clientX-this.drag.clientX;this.pane_resize({context:this.drag.context,size:{width:this.drag.setsize+n+"px"}})}},dargbardown:function(e,t,n){window.addEventListener("mousemove",this.dargbarmove),window.addEventListener("mouseup",this.dargbarup);var a={};this.pane_grab({context:a,_id:t});var r=0;if("vertical"===this.param.direction){var i=a.grab.param.height;r=i&&"auto"!==i?Number(i.replace("px","")):this.$refs["size"+n][0].offsetHeight}else{var o=a.grab.param.width;r=o&&"auto"!==o?Number(o.replace("px","")):this.$refs["size"+n][0].offsetWidth}this.drag={clientX:e.clientX,clientY:e.clientY,setsize:r,context:a}},dargbarup:function(e){window.removeEventListener("mousemove",this.dargbarmove),window.removeEventListener("mouseup",this.dargbarup),this.drag=null},selfRemover:function(){if(this.child.length<=1){if(1===this.child.length){var e=this.child[0];this.pane_close({grab:e});var t={grab:this.parent};this.pane_nth({context:t,_id:this._id}),t.openAt=t.nth,this.pane_append({context:t,pane:e})}this.pane_grab({context:t,_id:this._id}),this.pane_close(t)}}},Object(c["c"])(["pane_close","pane_grab","pane_nth","pane_append","pane_resize"])),computed:{clsDirection:function(){return["vertical"===this.param.direction?"":"h-left"]},clsResize:function(){return"vertical"===this.param.direction?["v-resize"]:["h-resize"]},styBounds:function(){var e=this;return this.child.map(function(t,n,a){var r=n===a.length-1,i="vertical"===e.param.direction,o=t.param.width,s=t.param.height;return{height:!r&&s?s:"auto",width:!r&&o?o:"auto",flexGrow:!r&&(i&&s||!i&&o)?0:1,flexBasis:!r&&(i&&s||!i&&o)?"auto":0}})}},components:{Pane:s["default"],DComp:o["default"]}},u=d,p=n("2877"),l=Object(p["a"])(u,a,r,!1,null,null,null);l.options.__file="Panes.vue";t["default"]=l.exports},8673:function(e,t,n){var a={"./App":["3dfd",9],"./App.vue":["3dfd",9],"./assets/logo.png":["cf05",7,"chunk-2d22269e"],"./drag/DragTab":["5f6a",9,"chunk-017676ae"],"./drag/DragTab.vue":["5f6a",9,"chunk-017676ae"],"./drag/default":["fec1",9,"chunk-2d238623"],"./drag/default.vue":["fec1",9,"chunk-2d238623"],"./g2u/DComp":["9e68",9],"./g2u/DComp.vue":["9e68",9],"./g2u/Drag":["e7df",9],"./g2u/Drag.vue":["e7df",9],"./g2u/Pane":["f6c3",9],"./g2u/Pane.vue":["f6c3",9],"./g2u/PaneDropZone":["dec6",9],"./g2u/PaneDropZone.vue":["dec6",9],"./g2u/Panes":["625a",9],"./g2u/Panes.vue":["625a",9],"./g2u/Tab":["0d8d",9],"./g2u/Tab.vue":["0d8d",9],"./g2u/default":["ec97",9,"chunk-2d230532"],"./g2u/default.vue":["ec97",9,"chunk-2d230532"],"./g2u/store_sysdrag":["941e",9],"./g2u/store_sysdrag.js":["941e",9],"./g2u/store_syspane":["dc86",9],"./g2u/store_syspane.js":["dc86",9],"./g2u/util.scss":["a7e2",7],"./main":["56d7",9],"./main.js":["56d7",9],"./menu/MainMenu":["f153",9,"chunk-2d22bd5f"],"./menu/MainMenu.vue":["f153",9,"chunk-2d22bd5f"],"./pane/FullCalendar":["4ff6",9,"chunk-7ef25035"],"./pane/FullCalendar.vue":["4ff6",9,"chunk-7ef25035"],"./pane/HelloWorld":["feb7",9,"chunk-2d23860a"],"./pane/HelloWorld.vue":["feb7",9,"chunk-2d23860a"],"./pane/Menu":["028a",9,"chunk-1b960772"],"./pane/Menu.vue":["028a",9,"chunk-1b960772"],"./pane/default":["8c00",9,"chunk-2d0e8f61"],"./pane/default.vue":["8c00",9,"chunk-2d0e8f61"],"./router":["41cb",9],"./router.js":["41cb",9],"./store":["c0d6",9],"./store.js":["c0d6",9]};function r(e){var t=a[e];return t?Promise.all(t.slice(2).map(n.e)).then(function(){var e=t[0];return n.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id="8673",e.exports=r},9041:function(e,t,n){},"941e":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");t["default"]={drag_end:function(e,t){var n=t;n.drop=e.sysdrag.drop,e.sysdrag=null},drag_cancle:function(e,t){e.sysdrag=null},drag_start:function(e,t){e.sysdrag=t},drag_init:function(e,t){e.sysdrag=null}}},"9e68":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.clsWrapcontent},[e.component?n(e.component,{tag:"component",attrs:{_id:e.ready&&e.ready._id,type:e.ready&&e.ready.type,param:e.ready&&e.ready.param,parent:e.ready&&e.ready.parent}}):e._e()],1)},r=[],i={props:["path","_id","type","param","parent","wrap_content"],data:function(){return{component:null,ready:null}},computed:{loader:function(){var e=this;return this.type?function(){return n("8673")("./".concat(e.path,"/").concat(e.type))}:function(){return n("16fe")("./".concat(e.path,"/default.vue"))}},clsWrapcontent:function(){return this.wrap_content?["in-block"]:["flex","grow"]}},methods:{load:function(){var e=this;this.loader().then(function(){e.component=function(){return e.loader()}}).catch(function(){e.component=function(){return n.e("chunk-2d230532").then(n.bind(null,"ec97"))}})}},watch:{_id:function(){this.load()},component:function(){this.ready={_id:this._id,type:this.type,param:this.param,parent:this.parent}}},mounted:function(){this.load()}},o=i,s=n("2877"),c=Object(s["a"])(o,a,r,!1,null,null,null);c.options.__file="DComp.vue";t["default"]=c.exports},a7e2:function(e,t,n){},c0d6:function(e,t,n){"use strict";n.r(t);var a=n("cebc"),r=(n("cadf"),n("551c"),n("097d"),n("2b0e")),i=n("2f62"),o=n("dc86"),s=n("941e");r["default"].use(i["a"]),t["default"]=new i["a"].Store({state:{syspane:null,sysdrag:null},mutations:Object(a["a"])({},o["default"],s["default"]),getters:{pane_activate:function(e){if(null===e.syspane.activate)for(var t in e.syspane.lstpane){e.syspane.activate=e.syspane.lstpane[t];break}return e.syspane.activate}}})},cbfe:function(e,t,n){"use strict";var a=n("9041"),r=n.n(a);r.a},d72a:function(e,t,n){"use strict";var a=n("606b"),r=n.n(a);r.a},dc86:function(e,t,n){"use strict";n.r(t);var a=n("bd86"),r=(n("20d6"),n("cebc"));n("cadf"),n("551c"),n("097d");function i(e,t){var n=t.context,a=t.splitTo,r=t.drop,i=n.grab,o=i.parent,s="vertical"===o.param.direction&&("left"===a||"right"===a)||"vertical"!==o.param.direction&&("top"===a||"bottom"===a),c={grab:o};p(e,{context:c,_id:i._id}),s&&(c.openAt=c.nth,b(e,{context:c,type:"panes",param:{direction:"vertical"===o.param.direction?"horizontal":"vertical",height:i.param.height,width:i.param.width}}),i.param.height=void 0,i.param.width=void 0,l(e,{grab:i}),c={grab:c.open},0!==i.child.length&&f(e,{context:c,pane:i}),c.nth=0),c.openAt=c.nth+("bottom"===a||"right"===a?1:0),b(e,{context:c,type:"pane",param:{}}),c.grab=c.open,f(e,{context:c,pane:r})}function o(e,t){var n=t;e.syspane.nobar=n}function s(e,t){var n=t;e.syspane.activate&&e.syspane.activate._id===n&&(e.syspane.activate=null)}function c(e,t){var n=t;e.syspane.activate=n.grab}function d(e,t){var n=t.context,a=t.size,i=n.grab;i.param=Object(r["a"])({},i.param,a)}function u(e,t){var n=t.context,a=t.param,i=t.overwrite,o=n.grab;o.param=i?a:Object(r["a"])({},o.param,a)}function p(e,t){var n=t.context,a=t._id;n.nth=n.grab.child.findIndex(function(e){return e._id===a})}function l(e,t){var n=t,a=n.grab,r=a.parent;r.child=r.child.filter(function(e){return e._id!==a._id}),a.parent=null,e.syspane.list[a._id]=void 0,delete e.syspane.list[a._id],"pane"===a.type&&(e.syspane.lstpane[a._id]=void 0,delete e.syspane.lstpane[a._id])}function f(e,t){var n=t.context,a=t.pane,r=n.grab.child.length,i=void 0===n.openAt?n.grab.child.length:n.openAt;i=i>=0&&i<=r?i:r,a.parent=n.grab,n.grab.child.splice(i,0,a),e.syspane.list[a._id]=a,"pane"===a.type&&(e.syspane.lstpane[a._id]=a),n.open=a}function h(e,t){var n=t.context,a=t._id;n.grab=e.syspane.list[a]}function v(e,t){var n=t;n.grab=e.syspane.root}function m(e,t){var n=t.context,a=n.grab;n.grab=a.parent._id}function b(e,t){var n=t.context,a=t.type,r=t.param,i=n.grab,o=a+"-"+Math.round(99999999*Math.random()),s={_id:o,type:a,param:r,parent:i,child:[]},c=i.child.length,d=void 0===n.openAt?i.child.length:n.openAt;d=d>=0&&d<=c?d:c,i.child.splice(d,0,s),e.syspane.list[o]=s,"pane"===a&&(e.syspane.lstpane[o]=s),n.open=s}function g(e,t){var n=t.context,a=t.title;n.grab.param=Object(r["a"])({},n.grab.param,{title:a})}function _(e){var t="root",n={_id:t,type:"panes",param:{direction:"horizontal"},parent:null,child:[]};e.syspane={list:Object(a["a"])({},t,n),nobar:!0,lstpane:{},root:n,activate:n}}t["default"]={pane_split:i,pane_nobar:o,pane_deactivate:s,pane_activate:c,pane_param:u,pane_resize:d,pane_nth:p,pane_close:l,pane_append:f,pane_open:b,pane_grab:h,pane_parent:m,pane_root:v,pane_setTitle:g,pane_init:_}},dec6:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.sysdrag,expression:"sysdrag"}],staticClass:"frame flex"},[n("div",{staticClass:"flex grow",class:"center"===e.over?"bg-secondary opacity-50":""}),n("div",{staticClass:"frame flex h-left"},[n("div",{staticClass:"w-50",class:"left"===e.over?"bg-secondary opacity-50":""}),n("div",{staticClass:"w-50",class:"right"===e.over?"bg-secondary opacity-50":""})]),n("div",{staticClass:"frame flex"},[n("div",{staticClass:"h-50",class:"top"===e.over?"bg-secondary opacity-50":""}),n("div",{staticClass:"h-50",class:"bottom"===e.over?"bg-secondary opacity-50":""})]),n("div",{staticClass:"frame flex h-left",on:{mouseup:function(t){return t.stopPropagation(),e.onmouseup(t)},mouseleave:function(t){e.over=null}}},[n("div",{staticClass:"w-25",on:{mouseenter:function(t){e.over="left"}}}),n("div",{staticClass:"flex grow "},[n("div",{staticClass:"h-25",on:{mouseenter:function(t){e.over="top"}}}),n("div",{staticClass:"grow",on:{mouseenter:function(t){e.over="center"}}}),n("div",{staticClass:"h-25",on:{mouseenter:function(t){e.over="bottom"}}})]),n("div",{staticClass:"w-25",on:{mouseenter:function(t){e.over="right"}}})])])},r=[],i=n("cebc"),o=(n("cadf"),n("551c"),n("097d"),n("2f62")),s={props:["_id","parent"],data:function(){return{over:null}},methods:Object(i["a"])({onmouseup:function(e){var t={};this.drag_end(t),this.pane_grab({context:t,_id:t.drop}),this.pane_close(t);var n=t.grab;this.pane_grab({context:t,_id:this._id}),"center"===this.over?this.pane_append({context:t,pane:n}):this.pane_split({context:t,splitTo:this.over,drop:n})}},Object(o["c"])(["pane_open","pane_append","pane_close","pane_nth","pane_grab","drag_end","pane_split"])),computed:Object(i["a"])({},Object(o["d"])(["sysdrag"]))},c=s,d=(n("e698"),n("2877")),u=Object(d["a"])(c,a,r,!1,null,"627afb38",null);u.options.__file="PaneDropZone.vue";t["default"]=u.exports},e698:function(e,t,n){"use strict";var a=n("07da"),r=n.n(a);r.a},e7df:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g2u-drag absolute",style:e.styPosition},[e.sysdrag?n("d-comp",{attrs:{path:"drag",type:e.sysdrag.type,param:e.sysdrag.param,_id:null,parent:null,wrap_content:!0}}):e._e()],1)},r=[],i=n("cebc"),o=n("9e68"),s=n("2f62"),c={data:function(){return{clientPos:null}},mounted:function(){this.drag_init()},watch:{"sysdrag.type":function(e,t){e&&!t&&(window.addEventListener("mouseup",this.windowonmouseup),window.addEventListener("mousemove",this.windowonmousemove),this.clientPos={x:this.sysdrag.startX,y:this.sysdrag.startY})}},methods:Object(i["a"])({windowonmouseup:function(e){window.removeEventListener("mouseup",this.windowonmouseup),window.removeEventListener("mousemove",this.windowonmousemove),this.clientPos=null,this.drag_cancle()},windowonmousemove:function(e){this.clientPos={x:e.clientX,y:e.clientY}}},Object(s["c"])(["drag_init","drag_cancle"])),computed:Object(i["a"])({styPosition:function(){return{top:this.clientPos&&this.clientPos.y+5+"px",left:this.clientPos&&this.clientPos.x+5+"px"}}},Object(s["d"])(["sysdrag"])),components:{DComp:o["default"]}},d=c,u=(n("3440"),n("2877")),p=Object(u["a"])(d,a,r,!1,null,"e46f3cc4",null);p.options.__file="Drag.vue";t["default"]=p.exports},f6c3:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex grow border border-dark"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.nobar,expression:"nobar"}],staticClass:"g2u-tabs flex h-left bg-secondary shadow z-tab"},[e._l(e.child,function(t){return n("tab",{key:t._id,attrs:{_id:t._id,type:t.type,param:t.param,child:t.child,parent:t.parent,activated:e.param.content_id===t._id},on:{onactivate:e.onTabSelected}})}),n("div",{staticClass:"flex grow h-right"},[n("button",{staticClass:"btn p-1 mr-2"},[n("icon",{attrs:{icon:"ellipsis-h"}})],1)])],2),n("div",{staticClass:"flex grow relative"},[e.content?n("d-comp",{attrs:{path:"pane",_id:e.content._id,type:e.content.type,param:e.content.param,parent:e.content.parent}}):e._e(),n("pane-drop-zone",{attrs:{_id:e._id,parent:e.parent}})],1)])},r=[],i=(n("7514"),n("cebc")),o=(n("cadf"),n("551c"),n("097d"),n("0d8d")),s=n("9e68"),c=n("dec6"),d=n("2f62"),u={props:["_id","type","param","parent","child"],mounted:function(){this.activate()},beforeDestroy:function(){this.pane_deactivate(this._id)},methods:Object(i["a"])({onTabSelected:function(e){var t={};this.pane_grab({context:t,_id:this._id}),this.pane_param({context:t,param:{content_id:e}}),this.activate()},activate:function(){var e={};this.pane_grab({context:e,_id:this._id}),this.pane_activate(e)}},Object(d["c"])(["pane_grab","pane_param","pane_activate","pane_deactivate","pane_close"])),watch:{child:function(){var e=this;if(!this.child.find(function(t){return t._id===e.param.content_id})){var t={};this.pane_grab({context:t,_id:this._id});var n=0===this.child.length?null:this.child[this.child.length-1]._id;this.pane_param({context:t,param:{content_id:n}})}if(0===this.child.length&&("root"!==this.parent._id||2!==this.parent.child.length)){var a={};this.pane_grab({context:a,_id:this._id}),this.pane_close(a)}}},computed:Object(i["a"])({content:function(){var e={};return this.pane_grab({context:e,_id:this.param.content_id}),e.grab||{id:null,param:{type:"default"},parent:this.parent}}},Object(d["d"])({nobar:function(e){return e.syspane.nobar||!1}})),components:{Tab:o["default"],DComp:s["default"],PaneDropZone:c["default"]}},p=u,l=(n("cbfe"),n("2877")),f=Object(l["a"])(p,a,r,!1,null,"3bfe2778",null);f.options.__file="Pane.vue";t["default"]=f.exports}});
//# sourceMappingURL=app.a5f70392.js.map