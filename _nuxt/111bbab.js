(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{267:function(t,e,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("3a3359aa",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";var n=r(497),o=r(503),c=r(498),l=r(504),d=r(501),f=r(197),_=r(195),v=r(131),h=r(196),x=r(91),m=r(500),w=r(502),k=r(499),N=(r(115),{data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"SUNGHYUN KIM",to:"/"},{icon:"mdi-chart-bubble",title:"Ask Me Anything",to:"/askmeanything"},{icon:"mdi-chart-bubble",title:"Idea Archive",to:"/ideaarchive"}],miniVariant:!1}}}),y=r(93),component=Object(y.a)(N,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[e(w.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(_.a,t._l(t.items,(function(r,i){return e(v.a,{key:i,attrs:{to:r.to,router:"",exact:""}},[e(h.a,[e(f.a,[t._v(t._s(r.icon))])],1),t._v(" "),e(x.a,[e(x.b,{domProps:{textContent:t._s(r.title)}})],1)],1)})),1)],1),t._v(" "),e(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e(c.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(k.a)],1),t._v(" "),e(m.a,[e(l.a,[e("Nuxt")],1)],1),t._v(" "),e(d.a,{attrs:{absolute:!t.fixed,app:""}},[e("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports},305:function(t,e,r){r(306),t.exports=r(307)},355:function(t,e,r){"use strict";r(267)},356:function(t,e,r){var n=r(22)((function(i){return i[1]}));n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),n.locals={},t.exports=n},81:function(t,e,r){"use strict";var n=r(497),o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(355),r(93)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports}},[[305,11,3,12]]]);