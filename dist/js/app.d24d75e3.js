(function(e){function t(t){for(var n,c,a=t[0],i=t[1],l=t[2],d=0,b=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,c=1;c<s.length;c++){var i=s[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},r={app:0},o=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e3b594ca"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(e){var t=[],s=r[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=r[e]=[t,n]}));t.push(s[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(d);var s=r[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,s[1](l)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0418":function(e,t,s){"use strict";var n=s("7a23"),r={class:" flex items-center justify-between mx-3 md:mx-16 py-4"},o={class:"font-semibold text-base"},c=Object(n["g"])("Happies"),a={class:"flex space-x-6 justify-end"},i={class:" hidden md:flex  items-center  space-x-6 font-semibold text-base"},l={class:"mx-4"},d=Object(n["g"])("Find food"),u=Object(n["h"])("li",{class:"mx-4"},"Tracking",-1),b={class:"mx-4"},h=Object(n["g"])("About us"),m={class:"hidden md:block mx-8 relative bg-black rounded text-gray-100 p-2"},f=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})],-1),j={class:"h-5 w-5 bg-red-500 rounded-full absolute -top-2 -right-2 text-gray-100 flex items-center justify-center text-sm"},p=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h- w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1),O={key:0};function v(e,t,s,v,g,x){var y=Object(n["v"])("router-link"),w=Object(n["v"])("MobileNav");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("div",r,[Object(n["h"])("div",o,[Object(n["h"])(y,{to:"/"},{default:Object(n["D"])((function(){return[c]})),_:1})]),Object(n["h"])("div",a,[Object(n["h"])("ul",i,[Object(n["h"])("li",l,[Object(n["h"])(y,{to:{name:"Resturants"}},{default:Object(n["D"])((function(){return[d]})),_:1})]),u,Object(n["h"])("li",b,[Object(n["h"])(y,{to:{name:"About"}},{default:Object(n["D"])((function(){return[h]})),_:1})])]),Object(n["h"])("button",m,[f,Object(n["h"])("div",j,Object(n["x"])(g.cart.length),1)]),Object(n["h"])("button",{class:" mx-8 md:hidden text-black p-2",onClick:t[1]||(t[1]=function(){return x.toogleNav&&x.toogleNav.apply(x,arguments)})},[p])])]),g.showNav?(Object(n["q"])(),Object(n["d"])("div",O,[Object(n["h"])(w,{onCloseNav:x.toogleNav,showNav:g.showNav},null,8,["onCloseNav","showNav"])])):Object(n["e"])("",!0)],64)}var g=s("a5f7"),x=s.n(g),y={ref:"menu",class:" h-screen md:w-96 w-10/12 bg-white transition duration-500 ease-in-out transform -translate-x-full"},w={class:"pt-3"},k={class:"mx-3"},A=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),C=Object(n["h"])("div",{class:"flex"},[Object(n["h"])("img",{src:x.a,alt:""})],-1),N={class:"mt-8"},M={class:"text-xl mt-4 font-semibold"},S=Object(n["g"])("Home"),L={class:"text-xl mt-4 font-semibold"},q=Object(n["g"])("Find food"),_=Object(n["h"])("li",{class:"text-xl mt-4 font-semibold"},"Tracking",-1),H=Object(n["h"])("li",{class:"text-xl mt-4 font-semibold"},"About us",-1);function P(e,t,s,r,o,c){var a=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["d"])("div",{ref:"overlay",class:"fixed z-50 h-full w-full  top-0 left-0 bg-overlay",onClick:t[2]||(t[2]=Object(n["G"])((function(){return c.closeNav&&c.closeNav.apply(c,arguments)}),["self"]))},[Object(n["h"])("div",y,[Object(n["h"])("div",w,[Object(n["h"])("div",k,[Object(n["h"])("div",{class:"flex-grow justify-end flex items-center",onClick:t[1]||(t[1]=function(){return c.closeNav&&c.closeNav.apply(c,arguments)})},[A]),C,Object(n["h"])("ul",N,[Object(n["h"])("li",M,[Object(n["h"])(a,{to:{name:"Home"}},{default:Object(n["D"])((function(){return[S]})),_:1})]),Object(n["h"])("li",L,[Object(n["h"])(a,{to:{name:"Resturants"}},{default:Object(n["D"])((function(){return[q]})),_:1})]),_,H])])])],512)],512)}var B={name:["MobileNav"],methods:{closeNav:function(){var e=this;this.$refs.menu.classList.add("-translate-x-full"),setTimeout((function(){e.$emit("closeNav")}),500)}},mounted:function(){var e=this;setTimeout((function(){e.$refs.menu.classList.remove("-translate-x-full")}),100)}};B.render=P;var E=B,D={components:{MobileNav:E},data:function(){return{showNav:!1,cart:[]}},methods:{toogleNav:function(){this.showNav=!this.showNav}},mounted:function(){this.cart=localStorage.getItem("nushtribe_cart")?localStorage.getItem("nushtribe_cart"):[]}};s("8a0c");D.render=v;t["a"]=D},"1cab":function(e,t,s){e.exports=s.p+"img/Flat.705effd7.svg"},4537:function(e,t,s){},"551b":function(e,t,s){e.exports=s.p+"img/Group_2205.34a5ebb2.svg"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),r={class:"font-mont"};function o(e,t,s,o,c,a){var i=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["d"])("div",r,[Object(n["h"])(i)])}var c={ref:"modal",class:"h-screen flex items-center transition duration-500 ease-in-out bg-white absolute transform inset-0 "},a={class:" container pl-3 grid place-content-center"},i={class:" text-2xl md:text-4xl font-semibold"},l={class:"mt-3 w-full"},d={key:0,class:"text-red-400 mt-2 "};function u(e,t,s,r,o,u){return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["h"])("div",a,[Object(n["h"])("h4",i,Object(n["x"])(s.msg),1),Object(n["h"])("div",l,[Object(n["E"])(Object(n["h"])("input",{type:"text",class:"border-2 py-3 px-5 md:w-768 focus:outline-none","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.input=e}),placeholder:"Enter Delievry Address"},null,512),[[n["A"],o.input]]),Object(n["h"])("button",{onClick:t[2]||(t[2]=function(e){return u.submit()}),class:"bg-black text-gray-100  py-3 px-5 border-2 border-black"},"Next")]),o.error?(Object(n["q"])(),Object(n["d"])("div",d,Object(n["x"])(o.error),1)):Object(n["e"])("",!0)])],512)}var b={props:["msg"],data:function(){return{input:"",error:""}},methods:{submit:function(){this.input?(localStorage.setItem("happies_address",this.input),this.$refs.modal.classList.add("-translate-y-full")):(this.error="Please enter delievery address",this.timer(2e3))},timer:function(e){var t=this;setTimeout((function(){t.error=""}),e)}}};b.render=u;var h=b,m={components:{FullOffcanvas:h},data:function(){return{address:"",askDelievery:!1}},methods:{}};s("9951");m.render=o;var f=m,j=(s("d3b7"),s("3ca3"),s("ddb0"),s("b0c0"),s("6c02")),p=s("1cab"),O=s.n(p),v=s("e7b1"),g=s.n(v),x=s("dcb8"),y=s.n(x),w=s("551b"),k=s.n(w),A=s("ac3d"),C=s.n(A),N=Object(n["h"])("div",{class:"mt-16 md:mt-24 md:p-3 mx-3 md:mx-8"},[Object(n["h"])("div",{class:"flex justify-center"},[Object(n["h"])("div",null,[Object(n["h"])("h1",{class:"text-3xl md:text-5xl text-center  font-semibold"},[Object(n["g"])("Just Relax at Home,"),Object(n["h"])("br"),Object(n["g"])("We will take care")]),Object(n["h"])("p",{class:"text-sm text-center mt-3"},[Object(n["g"])("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium at a architecto nihil"),Object(n["h"])("br"),Object(n["g"])(" sunt dolorum suscipit, ")])])]),Object(n["h"])("div",{class:"grid md:grid-cols-3 gap-4 mt-4"},[Object(n["h"])("div",{class:"md:p-4"},[Object(n["h"])("div",{class:"flex justify-center"},[Object(n["h"])("img",{src:O.a,alt:"Rider"})]),Object(n["h"])("div",null,[Object(n["h"])("h1",{class:"text-base font-semibold text-center mt-4"},"Fast Delivery in 1 Hour "),Object(n["h"])("p",{class:"mt-4 p-0 text-center"},"Lorem ipsum dolor sit amet consectetur adipisicing elit.")])]),Object(n["h"])("div",{class:"md:p-4"},[Object(n["h"])("div",{class:"flex justify-center"},[Object(n["h"])("img",{src:g.a,alt:"Easy Order"})]),Object(n["h"])("div",null,[Object(n["h"])("h1",{class:"text-base font-semibold mt-4 text-center"},"Easy to Order by Web"),Object(n["h"])("p",{class:"mt-4 p-0 text-center"},"Lorem ipsum dolor sit amet consectetur adipisicing elit.")])]),Object(n["h"])("div",{class:"md:p-4"},[Object(n["h"])("div",{class:"flex justify-center"},[Object(n["h"])("img",{src:y.a,alt:"Quality service"})]),Object(n["h"])("div",null,[Object(n["h"])("h1",{class:"text-base font-semibold text-center mt-4"},"Best Quality"),Object(n["h"])("p",{class:"mt-4 p-0 text-center"},"Lorem ipsum dolor sit amet consectetur adipisicing elit.")])])])],-1),M=Object(n["h"])("div",{class:"mt-8 bg-gray-100 py-14"},[Object(n["h"])("div",{class:"grid md:grid-cols-2 mx-3 md:mx-16"},[Object(n["h"])("div",{class:"flex justify-center py-6"},[Object(n["h"])("img",{src:k.a,alt:"Logo"})]),Object(n["h"])("div",{class:"py-6 mt-6 md:mr-9 md:-ml-16"},[Object(n["h"])("h1",{class:"md:text-5xl text-4xl text-left  font-semibold"},"About Us"),Object(n["h"])("p",{class:"text-base mt-4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"),Object(n["h"])("button",{class:"rounded-full px-4 py-2 bg-brand mt-4"},"Learn more")])])],-1),S=Object(n["h"])("div",{class:"mt-8 bg-white py-14 mx-3 md:mx-16"},[Object(n["h"])("div",{class:"grid md:grid-cols-2"},[Object(n["h"])("div",{class:"py-6 mt-6 flex justify-center items-center"},[Object(n["h"])("div",{class:""},[Object(n["h"])("h1",{class:"md:text-5xl text-4xl font-semibold"},[Object(n["g"])("Living well begins"),Object(n["h"])("br"),Object(n["g"])("with eating well.")]),Object(n["h"])("p",{class:"text-sm text-center mt-4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")])]),Object(n["h"])("div",{class:"flex justify-center py-6"},[Object(n["h"])("img",{src:C.a,class:"object-fit",alt:"taste the meal"})])])],-1);function L(e,t,s,r,o,c){var a=Object(n["v"])("Header"),i=Object(n["v"])("HeaderCTA"),l=Object(n["v"])("Footer");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(a),Object(n["h"])(i),N,M,S,Object(n["h"])(l)],64)}var q=s("0418"),_=s("c332"),H=s.n(_),P={class:"grid md:grid-cols-2 gap-2 mx-3 md:mx-16"},B={class:"flex h-96  items-center"},E={class:"mt-8"},D=Object(n["h"])("h1",{class:"md:text-5xl text-4xl  font-semibold"},[Object(n["g"])("Hungry? You're"),Object(n["h"])("br"),Object(n["g"])("in the right place.")],-1),R=Object(n["h"])("p",{class:"text-sm mt-4"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi odit soluta mollitia, tempore cumque!",-1),T={class:"flex relative justify-around space-x-2 mt-4 bg-gray-200 h-14 px-2 rounded-full w-full md:w-10/12"},F=Object(n["h"])("div",{class:"flex items-center"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})])],-1),I={class:"absolute right-0 md:-right-4 h-14"},z=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[Object(n["h"])("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),G=Object(n["h"])("div",{class:"text-xs text-gray-500 mt-4 flex space-x-2"},[Object(n["h"])("div",{class:"flex items-center"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])]),Object(n["h"])("p",{class:"font-semibold"}," Only Available to customers in Ikeja and Magodo axis ")],-1),$=Object(n["h"])("div",null,[Object(n["h"])("div",{class:"flex justify-center relative"},[Object(n["h"])("div",{class:" md:h-768 md:w-768 bg-brand rounded-full absolute -top-52 -z-10 -right-48 hidden md:block "}),Object(n["h"])("img",{class:"mt-10",src:H.a,alt:"Noshtribe"})])],-1);function U(e,t,s,r,o,c){return Object(n["q"])(),Object(n["d"])("div",P,[Object(n["h"])("div",B,[Object(n["h"])("div",E,[D,R,Object(n["h"])("div",T,[F,Object(n["E"])(Object(n["h"])("input",{type:"text",ref:"completeAddress",name:"delivery",onKeyup:t[1]||(t[1]=Object(n["F"])((function(){return c.SortAddress&&c.SortAddress.apply(c,arguments)}),["enter"])),class:"bg-gray-200 w-full focus:outline-none rounded-r-full",id:"delivery","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.deliveryAddress=e}),placeholder:"Enter delivery Address ..",autocomplete:""},null,544),[[n["A"],o.deliveryAddress]]),Object(n["h"])("div",I,[Object(n["h"])("button",{class:"bg-brand border-4 shadow-md border-white h-full w-14 flex justify-center items-center rounded-full",onClick:t[3]||(t[3]=function(){return c.SortAddress&&c.SortAddress.apply(c,arguments)})},[z])])]),G])]),$])}var V={data:function(){return{deliveryAddress:""}},methods:{SortAddress:function(){this.deliveryAddress&&(localStorage.setItem("Address",this.deliveryAddress),this.$router.push({name:"Resturants"}))}},mounted:function(){this.deliveryAddress=localStorage.getItem("Address")?localStorage.getItem("Address"):""}};V.render=U;var J=V,Q=s("fd2d"),W={name:"Home",components:{Header:q["a"],HeaderCTA:J,Footer:Q["a"]}};W.render=L;var K=W,Y=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/resturants",name:"Resturants",component:function(){return s.e("about").then(s.bind(null,"24b9"))}},{path:"/resturants/:vendorName",name:"ResturantsPage",component:function(){return s.e("about").then(s.bind(null,"beb4"))},meta:{transition:"slide-left"}},{path:"/checkout",name:"Checkout",component:function(){return s.e("about").then(s.bind(null,"7cb4"))}},{path:"/payment-information",name:"PaymentSuccess",component:function(){return s.e("about").then(s.bind(null,"6b16"))}}],X=Object(j["a"])({history:Object(j["b"])("/"),routes:Y,scrollBehavior:function(e,t,s){return{top:0}}});X.beforeEach((function(e,t){if("Resturants"===e.name||"ResturantsPage"===e.name){var s=localStorage.getItem("Address")?localStorage.getItem("Address"):"";console.log(e,t,s),s||X.push({name:"Home"})}}));var Z=X,ee=s("5502"),te=Object(ee["a"])({state:{Address:" "},mutations:{},actions:{},modules:{}});s("a766");Object(n["c"])(f).use(te).use(Z).mount("#app")},"8a0c":function(e,t,s){"use strict";s("926d")},"926d":function(e,t,s){},9951:function(e,t,s){"use strict";s("4537")},a5f7:function(e,t,s){e.exports=s.p+"img/logo.f420b0cf.svg"},a766:function(e,t,s){},ac3d:function(e,t,s){e.exports=s.p+"img/home-food-2.d0c39d6e.png"},c332:function(e,t,s){e.exports=s.p+"img/header-img.cf988396.png"},dcb8:function(e,t,s){e.exports=s.p+"img/Group_2190.70c0ecf2.svg"},e7b1:function(e,t,s){e.exports=s.p+"img/Group_2186.9e6fb818.svg"},fd2d:function(e,t,s){"use strict";var n=s("7a23"),r=s("a5f7"),o=s.n(r),c={class:" bg-black text-gray-100 text-sm"},a=Object(n["h"])("div",{class:"py-16 mx-3 md:mx-16"},[Object(n["h"])("div",{class:"grid grid-cols-1 md:grid-cols-4 gap-8 "},[Object(n["h"])("div",{class:""},[Object(n["h"])("img",{src:o.a,alt:""}),Object(n["h"])("p",{class:"mt-4"},[Object(n["g"])("Dellyman Center,"),Object(n["h"])("br"),Object(n["g"])("78B CMD Road,By GPS School,"),Object(n["h"])("br"),Object(n["g"])("Close to Magodo Brooks Estate,"),Object(n["h"])("br"),Object(n["g"])("Lagos, Nigeria ")])]),Object(n["h"])("div",{class:""},[Object(n["h"])("h5",{class:"text-2xl font-semibold"},"Cuisines"),Object(n["h"])("ul",{class:"mt-4"},[Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Burgers"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"African Food"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"American Food"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"}," Menu Launch"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Menu Dinner"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Menu Sandwiches"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Salads Pasta")])]),Object(n["h"])("div",null,[Object(n["h"])("h5",{class:"text-2xl font-semibold"},"Get to know us"),Object(n["h"])("ul",{class:"mt-4"},[Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"About us"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Contact us"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Investors"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Company"),Object(n["h"])("li",{class:"mt-2 hover:text-brand transition duration-100 ease-in"},"Blog")])]),Object(n["h"])("div",null,[Object(n["h"])("h5",{class:"text-2xl font-semibold"},"Stay connected"),Object(n["h"])("div",{class:"flex relative justify-around space-x-2  mt-4 bg-gray-200 h-14 px-4 rounded-full md:w-full"},[Object(n["h"])("input",{type:"text",name:"delivery",class:"bg-gray-200 text-black w-full rounded-full focus:outline-none",id:"delivery",placeholder:"Enter E-mail Address .."}),Object(n["h"])("div",{class:"absolute right-0 md:-right-4 h-14"},[Object(n["h"])("button",{class:"bg-brand border-4 shadow-md border-white h-full w-14 flex justify-center outline-none items-center rounded-full"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 transform rotate-90",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})])])])])])]),Object(n["h"])("div",{class:"mt-16"},[Object(n["h"])("div",{class:"h-0.5 bg-gray-200 w-full"}),Object(n["h"])("p",{class:"text-sm mt-4 text-center"},"Copyright © 2021 Happies Recreation")])],-1);function i(e,t,s,r,o,i){return Object(n["q"])(),Object(n["d"])("div",c,[a])}var l={};l.render=i;t["a"]=l}});
//# sourceMappingURL=app.d24d75e3.js.map