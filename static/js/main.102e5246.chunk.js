(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),i=(n(65),n(3)),l=n(4),u=n(6),s=n(5),m=n(7),h=(n(67),n(59)),b=n(55),j=n.n(b),O=n(57),f=n.n(O),p=n(58),d=n.n(p),v=n(21),E=n.n(v);var y=Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(j.a,{position:"static"},r.a.createElement(f.a,{onClick:function(t){if("BUTTON"===t.target.tagName||"SPAN"===t.target.tagName){var n=t.target.innerText.toLowerCase().trim();e.handleMenuClick(n)}}},r.a.createElement(d.a,{variant:"h6",color:"inherit",className:t.grow},r.a.createElement(E.a,{color:"inherit"},"Home"),r.a.createElement(E.a,{color:"inherit"},"Projects"),r.a.createElement(E.a,{color:"inherit"},"Gallery"),r.a.createElement(E.a,{color:"inherit"},"About")),r.a.createElement(E.a,{color:"inherit"},"Contact"))))}),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"HOme")}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Projects")}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Contacts")}}]),t}(a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"About")}}]),t}(a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Gallery;")}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).selectPage=function(e){switch(e){case"home":return r.a.createElement(w,null);case"projects":return r.a.createElement(g,null);case"contact":return r.a.createElement(k,null);case"about":return r.a.createElement(C,null);case"gallery":return r.a.createElement(N,null)}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.selectPage(this.props.menu))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={menu:"HOME"},n.handleMenuClick=function(e){n.setState({menu:e})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{handleMenuClick:this.handleMenuClick}),r.a.createElement(A,{menu:this.state.menu}))}}]),t}(a.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,n){e.exports=n(156)},65:function(e,t,n){},67:function(e,t,n){}},[[60,2,1]]]);
//# sourceMappingURL=main.102e5246.chunk.js.map