(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{144:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-arrow.53beb448.jpg"},145:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-batman.5d505a5b.jpg"},146:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-black.6188260a.jpg"},147:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-blue.38f37178.jpg"},148:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-flash.602ef4e2.jpg"},149:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-green.9cf1d7e1.jpg"},150:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-martian.325a5693.jpg"},151:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-robin.76994bb2.jpg"},152:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-superman.f57a075e.jpg"},153:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-wonder.7419e84a.jpg"},154:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-captain.ee9ab36f.jpg"},155:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-cyclops.d24a2309.jpg"},156:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-daredevil.b783c6d5.jpg"},157:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-hawkeye.3f65c9f2.jpg"},158:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-hulk.f4aa146c.jpg"},159:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-iron.2af9562a.jpg"},160:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-silver.b16676fe.jpg"},161:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-spider.f0a8b217.jpg"},162:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-thor.467240a7.jpg"},163:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-wolverine.4ff301c1.jpg"},467:function(e,a,t){"use strict";t.r(a);var r=t(2),c=t(131),s=t.n(c),n=t(34),i=Object(r.createContext)(),l=t(6),o="[auth] login",u="[auth] logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},j=t(20),h=t(3),p=t(55),m=t(1),b=function(e){var a=e.isAuthenticated,t=e.component,r=Object(p.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",r.location.pathname),Object(m.jsx)(h.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return a?Object(m.jsx)(t,Object(l.a)({},e)):Object(m.jsx)(h.a,{to:"/login"})}}))},v=function(e){var a=e.isAuthenticated,t=e.component,r=Object(p.a)(e,["isAuthenticated","component"]);return Object(m.jsx)(h.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return a?Object(m.jsx)(h.a,{to:"/"}):Object(m.jsx)(t,Object(l.a)({},e))}}))},f=function(){var e=Object(r.useContext)(i).dispatch,a=Object(h.g)();return Object(m.jsxs)("div",{className:"container mt-5",children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=localStorage.getItem("lastPath")||"/";e({type:o,payload:{name:"Sergio"}}),a.replace(t)},children:"Login"})]})},O=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],g=t(87),x=function(e){var a=e.id,t=e.superhero,r=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(m.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(m.jsxs)("div",{className:"row no-gutters",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("img",{src:g("./".concat(a,".jpg")).default,className:"card-img",alt:t})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:t}),Object(m.jsx)("p",{className:"card-text",children:r}),r!==s&&Object(m.jsx)("p",{className:"card-text",children:s}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:c})}),Object(m.jsx)(j.b,{to:"/heroes/".concat(a),children:" Get to know more..."})]})})]})})},C=function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('The publisher "'.concat(e,'" you have just sent is not correct'));return O.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(m.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:t.map((function(e){return Object(m.jsx)(x,Object(l.a)({},e),e.id)}))})},_=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"DC Screen"}),Object(m.jsx)("hr",{}),Object(m.jsx)(C,{publisher:"DC Comics"})]})},N=t(87),y=function(e){var a=e.history,t=Object(h.i)().heroId,c=Object(r.useMemo)((function(){return e=t,O.find((function(a){return a.id===e}));var e}),[t]);if(!c)return Object(m.jsx)(h.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("img",{src:N("./".concat(t,".jpg")).default,className:"img-thumbnail animate__animated animate__fadeInLeft",alt:s})}),Object(m.jsxs)("div",{className:"col-8",children:[Object(m.jsx)("h3",{children:s}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"Alter-ego: "}),i]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"Publisher: "}),n]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:"First-appearance: "}),l]})]}),Object(m.jsx)("h5",{className:"mt-3",children:"Characters"}),Object(m.jsx)("p",{children:o}),Object(m.jsx)("button",{onClick:function(){a.length<=2?("Marvel Comics"===c.publisher&&a.push("/"),"DC Comics"===c.publisher&&a.push("/dc")):a.goBack()},className:"btn btn-outline-info",children:"Return"})]})]})},k=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Marvel Screen"}),Object(m.jsx)("hr",{}),Object(m.jsx)(C,{publisher:"Marvel Comics"})]})},S=t(133),M=t.n(S),w=t(54),D=(t(176),function(e){var a=e.history,t=Object(h.h)(),c=M.a.parse(t.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(n.a)(a,2),c=t[0],s=t[1];return[c,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(w.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),o=Object(n.a)(i,2),u=o[0],d=o[1],j=u.searchText,p=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),O.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"SearchScreen"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-5",children:[Object(m.jsx)("h4",{children:"Search Form"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(m.jsx)("input",{type:"text",placeholder:"Search here your favorite superhero",className:"form-control",name:"searchText",autoComplete:"off",value:j,onChange:d}),Object(m.jsx)("button",{type:"submit",className:"btn m-2 btn-block btn-outline-primary",children:"Search"})]})]}),Object(m.jsxs)("div",{className:"col-7",children:[Object(m.jsx)("h4",{children:"Results"}),Object(m.jsx)("hr",{}),""===s&&Object(m.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===p.length&&Object(m.jsxs)("div",{className:"alert alert-danger",children:["There is no hero with the name ",s]}),p.map((function(e){return Object(m.jsx)(x,Object(l.a)({},e),e.id)}))]})]})]})}),A=function(){var e=Object(r.useContext)(i),a=e.user.name,t=e.dispatch,c=Object(h.g)();return Object(m.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(m.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Heroes App"}),Object(m.jsx)("div",{className:"navbar-collapse",children:Object(m.jsxs)("div",{className:"navbar-nav",children:[Object(m.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(m.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(m.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(m.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(m.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(m.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(m.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){t({type:u}),c.replace("/login")},children:"Logout"})]})})]})},B=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A,{}),Object(m.jsx)("div",{className:"container mt-2",children:Object(m.jsxs)(h.d,{children:[Object(m.jsx)(h.b,{exact:!0,path:"/marvel",component:k}),Object(m.jsx)(h.b,{exact:!0,path:"/heroes/:heroId",component:y}),Object(m.jsx)(h.b,{exact:!0,path:"/dc",component:_}),Object(m.jsx)(h.b,{exact:!0,path:"/search",component:D}),Object(m.jsx)(h.a,{to:"/marvel"})]})})]})},T=function(){var e=Object(r.useContext)(i).user;return Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(h.d,{children:[Object(m.jsx)(v,{exact:!0,path:"/login",component:f,isAuthenticated:e.logged}),Object(m.jsx)(b,{path:"/",component:B,isAuthenticated:e.logged})]})})})})},J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:"false"}},F=function(){var e=Object(r.useReducer)(d,{},J),a=Object(n.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),Object(m.jsx)(i.Provider,{value:{user:t,dispatch:c},children:Object(m.jsx)(T,{})})};s.a.render(Object(m.jsx)(F,{}),document.getElementById("root"))},87:function(e,a,t){var r={"./dc-arrow.jpg":144,"./dc-batman.jpg":145,"./dc-black.jpg":146,"./dc-blue.jpg":147,"./dc-flash.jpg":148,"./dc-green.jpg":149,"./dc-martian.jpg":150,"./dc-robin.jpg":151,"./dc-superman.jpg":152,"./dc-wonder.jpg":153,"./marvel-captain.jpg":154,"./marvel-cyclops.jpg":155,"./marvel-daredevil.jpg":156,"./marvel-hawkeye.jpg":157,"./marvel-hulk.jpg":158,"./marvel-iron.jpg":159,"./marvel-silver.jpg":160,"./marvel-spider.jpg":161,"./marvel-thor.jpg":162,"./marvel-wolverine.jpg":163};function c(e){var a=s(e);return t(a)}function s(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=s,e.exports=c,c.id=87}},[[467,1,2]]]);
//# sourceMappingURL=main.0c19eb35.chunk.js.map