(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),s=n("eVuF"),c=n.n(s);function o(e,t,n,a,r,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?t(l):c.a.resolve(l).then(a,r)}function i(e){return function(){var t=this,n=arguments;return new c.a(function(a,r){var s=e.apply(t,n);function c(e){o(s,a,r,c,i,"next",e)}function i(e){o(s,a,r,c,i,"throw",e)}c(void 0)})}}var l=n("q1tI"),u=n.n(l),m=n("pJ0N"),d=u.a.createElement,p=function(e){var t=e.precio,n=t.price,a=t.percent_change_24h,r=t.percent_change_7d,s=t.percent_change_1h;return d("div",{className:"card text-white bg-success mg-3"},d("div",{className:"card-body"},d("h4",{className:"card-title"},"Precio Actual : $ ",n),d("div",{className:"d-md-flex justify-content-between"},d("p",{className:"card-text"},d("span",{className:"font-wight-bold"},"\xdaltima hora:"),s," %"),d("p",{className:"card-text"},d("span",{className:"font-wight-bold"},"\xdaltimas 24h:"),a," %"),d("p",{className:"card-text"},d("span",{className:"font-wight-bold"},"\xdaltimos 7d:"),r," %"))))},f=u.a.createElement,v=function(e){var t,n=e.noticia,a=n.urlToImage,r=(n.url,n.title),s=n.description,c=n.source;return t=""!==a?f("img",{src:a,alt:r,className:"card-img-top"}):f("p",{className:"text-center my-5"},"Imagen No Disponible"),f("div",{className:"col-md-6 col-12 mb-4"},f("div",{className:"card"},f("div",{className:"card-image"},t),f("div",{className:"card-body"},f("h3",{className:"card-title"},r),f("p",{className:"card-text"},s),f("p",{className:"card-text"},c.name),f("a",{href:"{url}",target:"_blank",className:"btn btn-primary d-block"},"Leer noticia"))))},h=u.a.createElement,b=function(e){return h("div",{className:"row"},e.noticias.map(function(e){return h(v,{key:e.url,noticia:e})}))},N=n("pLtp"),w=n.n(N),g=u.a.createElement,x=function(e){var t=e.info,n=t.name,a=t.url,r=t.description.text,s=n.text;return s.length>100&&(s=r.substr(0,100)+"..."),r&&(r=r.substr(0,250)+"..."),g("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"list-group-item active text-light mb-1"},g("h3",{className:"mb-3"},s),g("p",{className:"mb-1"},r))},y=u.a.createElement,_=function(e){var t=w()(e.eventos);return y("div",{className:"list-group"},t.map(function(t){return y(x,{key:t,info:e.eventos[t]})}))},k=n("zgjP"),P=n.n(k),E=u.a.createElement,R=function(e){return E(m.a,null,E("div",{className:"row"},E("div",{className:"col-12 my-5"},E("h2",null,"Precio del bitcoin"),E(p,{precio:e.precioBitcoin})),E("div",{className:"col-md-8 my-5"},E("h2",null,"Noticias sobre bitcoin"),E(b,{noticias:e.noticias})),E("div",{className:"col-md-4 my-5"},E("h2",null,"Pr\xf3ximos eventos bitcoin"),E(_,{eventos:e.eventos}))))};R.getInitialProps=i(r.a.mark(function e(){var t,n,a,s,c,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://api.coinmarketcap.com/v2/ticker/1/");case 2:return t=e.sent,e.next=5,P()("https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-22&sortBy=publishedAt&apiKey=f351d0269b0e4d6c89beec3bf201de5c&language=es");case 5:return n=e.sent,e.next=8,P()("https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&location.address=spain&token=4ZRCD37WX2HGEKW6XXDU");case 8:return a=e.sent,e.next=11,t.json();case 11:return s=e.sent,e.next=14,n.json();case 14:return c=e.sent,e.next=17,a.json();case 17:return o=e.sent,e.abrupt("return",{precioBitcoin:s.data.quotes.USD,noticias:c.articles,eventos:o.events});case 19:case"end":return e.stop()}},e)}));t.default=R},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,a){var r=new XMLHttpRequest,s=[],c=[],o={},i=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:i,headers:{keys:function(){return s},entries:function(){return c},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}};for(var l in r.open(t.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){s.push(t=t.toLowerCase()),c.push([t,n]),o[t]=o[t]?o[t]+","+n:n}),n(i())},r.onerror=a,r.withCredentials="include"==t.credentials,t.headers)r.setRequestHeader(l,t.headers[l]);r.send(t.body||null)})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["vlRD",1,0]]]);