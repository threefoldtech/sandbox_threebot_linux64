(function(t){function e(e){for(var r,l,i=e[0],s=e[1],u=e[2],c=0,f=[];c<i.length;c++)l=i[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vuejs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._v("\n  Hello to App\n  "),n("br"),n("router-link",{attrs:{to:"/hello"}},[t._v("Go to Hello world")]),n("br"),n("router-link",{attrs:{to:"/test"}},[t._v("Go to Test Page")]),n("router-view"),n("br")],1)},a=[],l={name:"app"},i=l,s=(n("034f"),n("2877")),u=Object(s["a"])(i,o,a,!1,null,null,null),p=u.exports,c=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("p",[t._v("This is the main page")])])}],h={name:"HelloWorld",props:{msg:String}},v=h,b=Object(s["a"])(v,f,d,!1,null,null,null),_=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Test getting some data from actor\n  "),n("br"),t._l(t.people_info,(function(e){return n("li",{key:e},[t._v("\n    name: "+t._s(e.myname)+"\n    "),n("br"),t._v("\n    job: "+t._s(e.job)+"\n    "),n("br"),t._v("\n    about: "+t._s(e.aboutme)+"\n    "),n("br")])}))],2)},m=[],y=n("bc3a"),j=n.n(y);Object({NODE_ENV:"production",BASE_URL:"/vuejs/"}).NODE_TLS_REJECT_UNAUTHORIZED="0",j.a.defaults.headers.post["Content-Type"]="application/json",j.a.defaults.baseURL="https://127.0.0.1/";const w="https://127.0.0.1/web/gedis/http/vuejs";var O={data(){var t={};return{people_info:t}},methods:{async callActorWithArgs(t,e){let n=()=>j.a.post(`${w}/${t}`,{args:e}),r=await n();return r.data},async ping(){console.log("PING: ",await this.callActorWithArgs("ping",{}))},async get_people(){let t=await this.callActorWithArgs("get_info",{});this.people_info=t}},mounted(){this.ping(),this.get_people()}},E=O,x=Object(s["a"])(E,g,m,!1,null,null,null),T=x.exports;r["a"].config.productionTip=!1,r["a"].use(c["a"]);const A=[{path:"/hello",component:_},{path:"/test",component:T}],P=new c["a"]({routes:A});new r["a"]({render:t=>t(p),router:P}).$mount("#app")},"64a9":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3b865bbe.js.map