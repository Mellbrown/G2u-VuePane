(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23860a"],{feb7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex grow p-3 container"},[a("h3",[t._v("저는 "+t._s(t._id)+"입니다.")]),a("p",[t._v("만나서 반갑습니다.")]),a("h3",[t._v("별칭은 "+t._s(t.param.alias||"?"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.text},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.setalias(e):null},input:function(e){e.target.composing||(t.text=e.target.value)}}})])},i=[],s=a("cebc"),o=(a("cadf"),a("551c"),a("097d"),a("2f62")),r={data:function(){return{text:""}},props:["_id","type","param","parent"],mounted:function(){this.onActivate()},watch:{_id:function(){this.onActivate()},param:function(){this.text=this.param.alias}},methods:Object(s["a"])({onActivate:function(){var t={};this.pane_grab({context:t,_id:this._id}),this.pane_setTitle({context:t,title:"🙌 "+this.param.alias})},setalias:function(){var t={};this.pane_grab({context:t,_id:this._id}),this.pane_param({context:t,param:{alias:this.text,title:"🙌 "+this.text}})}},Object(o["c"])(["pane_grab","pane_setTitle","pane_param"]))},c=r,p=a("2877"),l=Object(p["a"])(c,n,i,!1,null,null,null);l.options.__file="HelloWorld.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d23860a.8670aed7.js.map