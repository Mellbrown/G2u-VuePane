(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b960772","chunk-2d22bd5f"],{"028a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex grow h-left bg-secondary"},[n("div",{staticClass:"flex bg-dark",style:{width:"60px"}},[n("div",{staticClass:"btn p-2 m-1 text-white",class:"MainMenu"===t.current?["bg-secondary"]:[],style:{fontWeight:"bold"},on:{click:function(e){t.toggleMenu("MainMenu")}}},[t._v("\n      G2u")]),n("div",{staticClass:"btn p-2 m-1",class:"other"===t.current?["bg-secondary"]:[],on:{click:function(e){t.toggleMenu("other")}}},[n("icon",{attrs:{icon:"adjust",size:"lg",color:"white"}})],1),n("div",{staticClass:"flex grow v-stack"},[n("div",{staticClass:"btn p-2 m-1",class:"setting"===t.current?["bg-secondary"]:[],on:{click:function(e){t.toggleMenu("setting")}}},[n("icon",{attrs:{icon:"cog",size:"lg",color:"white"}})],1)])]),t.current?n(t.current,{tag:"component",on:{"request-close":t.requestClose}}):t._e()],1)},c=[],i=n("cebc"),o=(n("cadf"),n("551c"),n("097d"),n("2f62")),a=n("f153"),l={components:{MainMenu:a["default"]},props:["_id","type","param","parent"],data:function(){return{current:""}},methods:Object(i["a"])({toggleMenu:function(t){this.current===t?this.current=null:this.current=t},requestClose:function(){this.current=null}},Object(o["b"])(["pane_grab","pane_resize"])),watch:{current:function(t,e){var n={};this.pane_grab({context:n,_id:this._id}),!t&&e?this.pane_resize({context:n,size:{width:"auto"}}):t&&!e&&this.pane_resize({context:n,size:{width:"300px"}})}}},r=l,u=n("2877"),d=Object(u["a"])(r,s,c,!1,null,null,null);d.options.__file="Menu.vue";e["default"]=d.exports},f153:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex grow",on:{mouseleave:t.requestClose}},[n("h1",{staticClass:"m-1"},[t._v("메뉴")]),n("div",{staticClass:"btn bg-light m-2",on:{click:t.openHello}},[t._v("\n    HelloWorld 🙌\n  ")])])},c=[],i=n("cebc"),o=n("2f62"),a={computed:Object(i["a"])({},Object(o["c"])(["syspane"])),methods:Object(i["a"])({openHello:function(){var t={grab:this.syspane.activate};this.pane_open({context:t,type:"HelloWorld",param:{title:"Untitled"}})},requestClose:function(){this.$emit("request-close")}},Object(o["b"])(["pane_open"]))},l=a,r=n("2877"),u=Object(r["a"])(l,s,c,!1,null,null,null);u.options.__file="MainMenu.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1b960772.db47a336.js.map