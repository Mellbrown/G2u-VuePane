(function(t){function e(e){for(var a,r,c=e[0],s=e[1],d=e[2],u=0,p=[];u<c.length;u++)r=c[u],o[r]&&p.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-017676ae":"48687444","chunk-1b960772":"311b5478","chunk-2d0ccfb8":"4eff97d0","chunk-2d0e8f61":"71767411","chunk-2d22269e":"e3a353d2","chunk-2d22bd5f":"e2134984","chunk-2d230532":"ed85ea3d","chunk-2d23860a":"8670aed7","chunk-2d238623":"0f5df76b"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-017676ae":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-017676ae":"b3660bee","chunk-1b960772":"31d6cfe0","chunk-2d0ccfb8":"31d6cfe0","chunk-2d0e8f61":"31d6cfe0","chunk-2d22269e":"31d6cfe0","chunk-2d22bd5f":"31d6cfe0","chunk-2d230532":"31d6cfe0","chunk-2d23860a":"31d6cfe0","chunk-2d238623":"31d6cfe0"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var d=i[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===o))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){d=p[c],u=d.getAttribute("data-href");if(u===a||u===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete r[t],l.parentNode.removeChild(l),n(i)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t),d=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var p=setTimeout(function(){d({type:"timeout",target:u})},12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var p=0;p<d.length;p++)e(d[p]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07da":function(t,e,n){},"0d8d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g2u-tab flex grow h-right point px-2 py-1",class:t.clTabActivatedColor,on:{click:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:t.activateTab(e):null},mouseup:[function(e){return"button"in e&&1!==e.button?null:t.closeTab(e)},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:void(t.ismousedown=!1):null}],mousedown:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:void(t.ismousedown=!0):null},mouseleave:function(e){t.ismousedown=!1},mousemove:t.onmousemove}},[n("button",{staticClass:"btn mr-1 p-0",on:{click:function(e){return e.stopPropagation(),t.closeTab(e)}}},[n("icon",{attrs:{icon:"times"}})],1),n("small",{staticClass:"tab-title in-block grow mr-2"},[t._v(t._s(t.param.title))])])},r=[],o=n("cebc"),i=n("2f62"),c={props:["_id","type","param","parent","child","activated"],data:function(){return{ismousedown:!1}},mounted:function(){this.activateTab()},methods:Object(o["a"])({onmousemove:function(t){this.ismousedown&&this.drag_start({type:"DragTab",startX:t.clientX,startY:t.clientY,param:{title:this.param.title},drop:this._id})},activateTab:function(){this.$emit("onactivate",this._id)},closeTab:function(t){var e={};this.pane_grab({context:e,_id:this._id}),this.pane_close(e)}},Object(i["c"])(["pane_grab","pane_close","drag_start"])),computed:{clTabActivatedColor:function(){return this.activated?["bg-light"]:["bg-dark","text-light"]}}},s=c,d=(n("f61e"),n("2877")),u=Object(d["a"])(s,a,r,!1,null,"49672a89",null);u.options.__file="Tab.vue";e["default"]=u.exports},"0ded":function(t,e,n){},"16fe":function(t,e,n){var a={"./drag/default.vue":["fec1","chunk-2d238623"],"./g2u/default.vue":["ec97","chunk-2d230532"],"./pane/default.vue":["8c00","chunk-2d0e8f61"]};function r(t){var e=a[t];return e?n.e(e[1]).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}r.keys=function(){return Object.keys(a)},r.id="16fe",t.exports=r},3440:function(t,e,n){"use strict";var a=n("0ded"),r=n.n(a);r.a},"3dfd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.syspane?n("panes",{attrs:{_id:t.syspane.root._id,type:t.syspane.root.type,param:t.syspane.root.param,parent:t.syspane.root.parent,child:t.syspane.root.child}}):t._e(),n("drag")],1)},r=[],o=n("cebc"),i=(n("cadf"),n("551c"),n("097d"),n("625a")),c=n("e7df"),s=n("2f62"),d={mounted:function(){this.pane_init();var t={};this.pane_root(t),this.pane_open({context:t,type:"Menu",param:{width:"auto"}}),this.pane_open({context:t,type:"pane",param:{}}),t.grab=t.open,this.pane_open({context:t,type:"HelloWorld",param:{title:"만나서 반갑습니다."}})},computed:Object(o["a"])({},Object(s["d"])(["syspane","sysdrag"])),methods:Object(o["a"])({},Object(s["c"])(["pane_init","pane_root","pane_open"])),components:{Panes:i["default"],Drag:c["default"]},name:"app"},u=d,p=n("2877"),l=Object(p["a"])(u,a,r,!1,null,null,null);l.options.__file="App.vue";e["default"]=l.exports},"3fdd":function(t,e,n){"use strict";var a=n("4b64"),r=n.n(a);r.a},"41cb":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=n("8c4f");a["default"].use(r["a"]),e["default"]=new r["a"]({mode:"history",base:"",routes:[]})},"4b64":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("3dfd"),o=n("41cb"),i=n("c0d6"),c=(n("4989"),n("ab8b"),n("bc23")),s=n("ecee"),d=n("c074"),u=n("ad3d");n("a7e2");s["c"].add(d["a"]),a["default"].component("icon",u["a"]),a["default"].use(c),a["default"].config.productionTip=!1,new a["default"]({router:o["default"],store:i["default"],render:function(t){return t(r["default"])}}).$mount("#app")},"625a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex grow",class:t.clsDirection},t._l(t.child,function(e,a){return n("div",{key:e._id,staticClass:"flex",style:t.styBounds[a]},["panes"===e.type?n("panes",{attrs:{_id:e._id,type:e.type,param:e.param,parent:e.parent,child:e.child}}):"pane"===e.type?n("pane",{attrs:{_id:e._id,type:e.type,param:e.param,parent:e.parent,child:e.child}}):n("d-comp",{attrs:{path:"pane",_id:e._id,type:e.type,param:e.param,parent:e.parent}})],1)}),0)},r=[],o=n("cebc"),i=(n("cadf"),n("551c"),n("097d"),n("9e68")),c=n("f6c3"),s=n("2f62"),d={props:["_id","type","param","parent","child"],name:"panes",mounted:function(){this.selfRemover()},watch:{child:function(){this.selfRemover()}},methods:Object(o["a"])({selfRemover:function(){if(this.child.length<=1){if(1===this.child.length){var t=this.child[0];this.pane_close({grab:t});var e={grab:this.parent};this.pane_nth({context:e,_id:this._id}),e.openAt=e.nth,this.pane_append({context:e,pane:t})}this.pane_grab({context:e,_id:this._id}),this.pane_close(e)}}},Object(s["c"])(["pane_close","pane_grab","pane_nth","pane_append"])),computed:{clsDirection:function(){return["vertical"===this.param.direction?"":"h-left"]},styBounds:function(){return this.child.map(function(t){return{height:t.param.height||"auto",width:t.param.width||"auto",flexGrow:t.param.width?0:1,flexBasis:t.param.width?"auto":0}})}},components:{Pane:c["default"],DComp:i["default"]}},u=d,p=n("2877"),l=Object(p["a"])(u,a,r,!1,null,null,null);l.options.__file="Panes.vue";e["default"]=l.exports},8673:function(t,e,n){var a={"./App":["3dfd",9],"./App.vue":["3dfd",9],"./assets/logo.png":["cf05",7,"chunk-2d22269e"],"./drag/DragTab":["5f6a",9,"chunk-017676ae"],"./drag/DragTab.vue":["5f6a",9,"chunk-017676ae"],"./drag/default":["fec1",9,"chunk-2d238623"],"./drag/default.vue":["fec1",9,"chunk-2d238623"],"./g2u/DComp":["9e68",9],"./g2u/DComp.vue":["9e68",9],"./g2u/Drag":["e7df",9],"./g2u/Drag.vue":["e7df",9],"./g2u/Pane":["f6c3",9],"./g2u/Pane.vue":["f6c3",9],"./g2u/PaneDropZone":["dec6",9],"./g2u/PaneDropZone.vue":["dec6",9],"./g2u/Panes":["625a",9],"./g2u/Panes.vue":["625a",9],"./g2u/Tab":["0d8d",9],"./g2u/Tab.vue":["0d8d",9],"./g2u/default":["ec97",9,"chunk-2d230532"],"./g2u/default.vue":["ec97",9,"chunk-2d230532"],"./g2u/store_sysdrag":["941e",9],"./g2u/store_sysdrag.js":["941e",9],"./g2u/store_syspane":["dc86",9],"./g2u/store_syspane.js":["dc86",9],"./g2u/util.scss":["a7e2",7],"./main":["56d7",9],"./main.js":["56d7",9],"./menu/MainMenu":["f153",9,"chunk-2d22bd5f"],"./menu/MainMenu.vue":["f153",9,"chunk-2d22bd5f"],"./pane/FullCalendar":["4ff6",9,"chunk-2d0ccfb8"],"./pane/FullCalendar.vue":["4ff6",9,"chunk-2d0ccfb8"],"./pane/HelloWorld":["feb7",9,"chunk-2d23860a"],"./pane/HelloWorld.vue":["feb7",9,"chunk-2d23860a"],"./pane/Menu":["028a",9,"chunk-1b960772"],"./pane/Menu.vue":["028a",9,"chunk-1b960772"],"./pane/default":["8c00",9,"chunk-2d0e8f61"],"./pane/default.vue":["8c00",9,"chunk-2d0e8f61"],"./router":["41cb",9],"./router.js":["41cb",9],"./store":["c0d6",9],"./store.js":["c0d6",9]};function r(t){var e=a[t];return e?Promise.all(e.slice(2).map(n.e)).then(function(){var t=e[0];return n.t(t,e[1])}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}r.keys=function(){return Object.keys(a)},r.id="8673",t.exports=r},"941e":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");e["default"]={drag_end:function(t,e){var n=e;n.drop=t.sysdrag.drop,t.sysdrag=null},drag_cancle:function(t,e){t.sysdrag=null},drag_start:function(t,e){t.sysdrag=e},drag_init:function(t,e){t.sysdrag=null}}},"9e68":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.clsWrapcontent},[t.component?n(t.component,{tag:"component",attrs:{_id:t.ready&&t.ready._id,type:t.ready&&t.ready.type,param:t.ready&&t.ready.param,parent:t.ready&&t.ready.parent}}):t._e()],1)},r=[],o=(n("cadf"),n("551c"),n("097d"),{props:["path","_id","type","param","parent","wrap_content"],data:function(){return{component:null,ready:null}},computed:{loader:function(){var t=this;return this.type?function(){return n("8673")("./".concat(t.path,"/").concat(t.type))}:function(){return n("16fe")("./".concat(t.path,"/default.vue"))}},clsWrapcontent:function(){return this.wrap_content?["in-block"]:["flex","grow"]}},methods:{load:function(){var t=this;this.loader().then(function(){t.component=function(){return t.loader()}}).catch(function(){t.component=function(){return n.e("chunk-2d230532").then(n.bind(null,"ec97"))}})}},watch:{_id:function(){this.load()},component:function(){this.ready={_id:this._id,type:this.type,param:this.param,parent:this.parent}}},mounted:function(){this.load()}}),i=o,c=n("2877"),s=Object(c["a"])(i,a,r,!1,null,null,null);s.options.__file="DComp.vue";e["default"]=s.exports},a7e2:function(t,e,n){},c0d6:function(t,e,n){"use strict";n.r(e);var a=n("cebc"),r=(n("cadf"),n("551c"),n("097d"),n("2b0e")),o=n("2f62"),i=n("dc86"),c=n("941e");r["default"].use(o["a"]),e["default"]=new o["a"].Store({state:{syspane:null,sysdrag:null},mutations:Object(a["a"])({},i["default"],c["default"]),getters:{pane_activate:function(t){if(null===t.syspane.activate)for(var e in t.syspane.lstpane){t.syspane.activate=t.syspane.lstpane[e];break}return t.syspane.activate}}})},c47c:function(t,e,n){},dc86:function(t,e,n){"use strict";n.r(e);var a=n("bd86"),r=(n("20d6"),n("cebc"));n("cadf"),n("551c"),n("097d");function o(t,e){var n=e.context,a=e.splitTo,r=e.drop,o=n.grab,i=o.parent,c="vertical"===i.param.direction&&("left"===a||"right"===a)||"vertical"!==i.param.direction&&("top"===a||"bottom"===a),s={grab:i};p(t,{context:s,_id:o._id}),c&&(s.openAt=s.nth,_(t,{context:s,type:"panes",param:{direction:"vertical"===i.param.direction?"horizontal":"vertical"}}),l(t,{grab:o}),s={grab:s.open},0!==o.child.length&&f(t,{context:s,pane:o}),s.nth=0),s.openAt=s.nth+("bottom"===a||"right"===a?1:0),_(t,{context:s,type:"pane",param:{}}),s.grab=s.open,f(t,{context:s,pane:r})}function i(t,e){var n=e;t.syspane.nobar=n}function c(t,e){var n=e;t.syspane.activate&&t.syspane.activate._id===n&&(t.syspane.activate=null)}function s(t,e){var n=e;t.syspane.activate=n.grab}function d(t,e){var n=e.context,a=e.size,o=n.grab;o.param=Object(r["a"])({},o.param,a)}function u(t,e){var n=e.context,a=e.param,o=e.overwrite,i=n.grab;i.param=o?a:Object(r["a"])({},i.param,a)}function p(t,e){var n=e.context,a=e._id;n.nth=n.grab.child.findIndex(function(t){return t._id===a})}function l(t,e){var n=e,a=n.grab,r=a.parent;r.child=r.child.filter(function(t){return t._id!==a._id}),a.parent=null,t.syspane.list[a._id]=void 0,delete t.syspane.list[a._id],"pane"===a.type&&(t.syspane.lstpane[a._id]=void 0,delete t.syspane.lstpane[a._id])}function f(t,e){var n=e.context,a=e.pane,r=n.grab.child.length,o=void 0===n.openAt?n.grab.child.length:n.openAt;o=o>=0&&o<=r?o:r,a.parent=n.grab,n.grab.child.splice(o,0,a),t.syspane.list[a._id]=a,"pane"===a.type&&(t.syspane.lstpane[a._id]=a),n.open=a}function h(t,e){var n=e.context,a=e._id;n.grab=t.syspane.list[a]}function v(t,e){var n=e;n.grab=t.syspane.root}function m(t,e){var n=e.context,a=n.grab;n.grab=a.parent._id}function _(t,e){var n=e.context,a=e.type,r=e.param,o=n.grab,i=a+"-"+Math.round(99999999*Math.random()),c={_id:i,type:a,param:r,parent:o,child:[]},s=o.child.length,d=void 0===n.openAt?o.child.length:n.openAt;d=d>=0&&d<=s?d:s,o.child.splice(d,0,c),t.syspane.list[i]=c,"pane"===a&&(t.syspane.lstpane[i]=c),n.open=c}function b(t,e){var n=e.context,a=e.title;n.grab.param=Object(r["a"])({},n.grab.param,{title:a})}function g(t){var e="root",n={_id:e,type:"panes",param:{direction:"horizontal"},parent:null,child:[]};t.syspane={list:Object(a["a"])({},e,n),nobar:!0,lstpane:{},root:n,activate:n}}e["default"]={pane_split:o,pane_nobar:i,pane_deactivate:c,pane_activate:s,pane_param:u,pane_resize:d,pane_nth:p,pane_close:l,pane_append:f,pane_open:_,pane_grab:h,pane_parent:m,pane_root:v,pane_setTitle:b,pane_init:g}},dec6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.sysdrag,expression:"sysdrag"}],staticClass:"frame flex"},[n("div",{staticClass:"flex grow",class:"center"===t.over?"bg-secondary opacity-50":""}),n("div",{staticClass:"frame flex h-left"},[n("div",{staticClass:"w-50",class:"left"===t.over?"bg-secondary opacity-50":""}),n("div",{staticClass:"w-50",class:"right"===t.over?"bg-secondary opacity-50":""})]),n("div",{staticClass:"frame flex"},[n("div",{staticClass:"h-50",class:"top"===t.over?"bg-secondary opacity-50":""}),n("div",{staticClass:"h-50",class:"bottom"===t.over?"bg-secondary opacity-50":""})]),n("div",{staticClass:"frame flex h-left",on:{mouseup:function(e){return e.stopPropagation(),t.onmouseup(e)},mouseleave:function(e){t.over=null}}},[n("div",{staticClass:"w-25",on:{mouseenter:function(e){t.over="left"}}}),n("div",{staticClass:"flex grow "},[n("div",{staticClass:"h-25",on:{mouseenter:function(e){t.over="top"}}}),n("div",{staticClass:"grow",on:{mouseenter:function(e){t.over="center"}}}),n("div",{staticClass:"h-25",on:{mouseenter:function(e){t.over="bottom"}}})]),n("div",{staticClass:"w-25",on:{mouseenter:function(e){t.over="right"}}})])])},r=[],o=n("cebc"),i=(n("cadf"),n("551c"),n("097d"),n("2f62")),c={props:["_id","parent"],data:function(){return{over:null}},methods:Object(o["a"])({onmouseup:function(t){var e={};this.drag_end(e),this.pane_grab({context:e,_id:e.drop}),this.pane_close(e);var n=e.grab;this.pane_grab({context:e,_id:this._id}),"center"===this.over?this.pane_append({context:e,pane:n}):this.pane_split({context:e,splitTo:this.over,drop:n})}},Object(i["c"])(["pane_open","pane_append","pane_close","pane_nth","pane_grab","drag_end","pane_split"])),computed:Object(o["a"])({},Object(i["d"])(["sysdrag"]))},s=c,d=(n("e698"),n("2877")),u=Object(d["a"])(s,a,r,!1,null,"627afb38",null);u.options.__file="PaneDropZone.vue";e["default"]=u.exports},e698:function(t,e,n){"use strict";var a=n("07da"),r=n.n(a);r.a},e7df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g2u-drag absolute",style:t.styPosition},[t.sysdrag?n("d-comp",{attrs:{path:"drag",type:t.sysdrag.type,param:t.sysdrag.param,_id:null,parent:null,wrap_content:!0}}):t._e()],1)},r=[],o=n("cebc"),i=n("9e68"),c=n("2f62"),s={data:function(){return{clientPos:null}},mounted:function(){this.drag_init()},watch:{"sysdrag.type":function(t,e){t&&!e&&(window.addEventListener("mouseup",this.windowonmouseup),window.addEventListener("mousemove",this.windowonmousemove),this.clientPos={x:this.sysdrag.startX,y:this.sysdrag.startY})}},methods:Object(o["a"])({windowonmouseup:function(t){window.removeEventListener("mouseup",this.windowonmouseup),window.removeEventListener("mousemove",this.windowonmousemove),this.clientPos=null,this.drag_cancle()},windowonmousemove:function(t){this.clientPos={x:t.clientX,y:t.clientY}}},Object(c["c"])(["drag_init","drag_cancle"])),computed:Object(o["a"])({styPosition:function(){return{top:this.clientPos&&this.clientPos.y+5+"px",left:this.clientPos&&this.clientPos.x+5+"px"}}},Object(c["d"])(["sysdrag"])),components:{DComp:i["default"]}},d=s,u=(n("3440"),n("2877")),p=Object(u["a"])(d,a,r,!1,null,"e46f3cc4",null);p.options.__file="Drag.vue";e["default"]=p.exports},f61e:function(t,e,n){"use strict";var a=n("c47c"),r=n.n(a);r.a},f6c3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex grow border border-dark"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.nobar,expression:"nobar"}],staticClass:"g2u-tabs flex h-left bg-secondary shadow"},[t._l(t.child,function(e){return n("tab",{key:e._id,attrs:{_id:e._id,type:e.type,param:e.param,child:e.child,parent:e.parent,activated:t.param.content_id===e._id},on:{onactivate:t.onTabSelected}})}),n("div",{staticClass:"flex grow h-right"},[n("button",{staticClass:"btn p-1 mr-2"},[n("icon",{attrs:{icon:"ellipsis-h"}})],1)])],2),n("div",{staticClass:"flex grow relative"},[t.content?n("d-comp",{attrs:{path:"pane",_id:t.content._id,type:t.content.type,param:t.content.param,parent:t.content.parent}}):t._e(),n("pane-drop-zone",{attrs:{_id:t._id,parent:t.parent}})],1)])},r=[],o=(n("7514"),n("cebc")),i=(n("cadf"),n("551c"),n("097d"),n("0d8d")),c=n("9e68"),s=n("dec6"),d=n("2f62"),u={props:["_id","type","param","parent","child"],mounted:function(){this.activate()},beforeDestroy:function(){this.pane_deactivate(this._id)},methods:Object(o["a"])({onTabSelected:function(t){var e={};this.pane_grab({context:e,_id:this._id}),this.pane_param({context:e,param:{content_id:t}}),this.activate()},activate:function(){var t={};this.pane_grab({context:t,_id:this._id}),this.pane_activate(t)}},Object(d["c"])(["pane_grab","pane_param","pane_activate","pane_deactivate","pane_close"])),watch:{child:function(){var t=this;if(!this.child.find(function(e){return e._id===t.param.content_id})){var e={};this.pane_grab({context:e,_id:this._id});var n=0===this.child.length?null:this.child[this.child.length-1]._id;this.pane_param({context:e,param:{content_id:n}})}if(0===this.child.length&&("root"!==this.parent._id||2!==this.parent.child.length)){var a={};this.pane_grab({context:a,_id:this._id}),this.pane_close(a)}}},computed:Object(o["a"])({content:function(){var t={};return this.pane_grab({context:t,_id:this.param.content_id}),t.grab||{id:null,param:{type:"default"},parent:this.parent}}},Object(d["d"])({nobar:function(t){return t.syspane.nobar||!1}})),components:{Tab:i["default"],DComp:c["default"],PaneDropZone:s["default"]}},p=u,l=(n("3fdd"),n("2877")),f=Object(l["a"])(p,a,r,!1,null,"91219e34",null);f.options.__file="Pane.vue";e["default"]=f.exports}});
//# sourceMappingURL=app.29d91e43.js.map