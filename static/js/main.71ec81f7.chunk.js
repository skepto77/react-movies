(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{32:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),c=a(25),n=a.n(c),r=(a(32),a(5)),l=a(3),u=a(16),o=a(2),d=a(10);function m(e,t){var a=t.type,s=t.payload;switch(console.log(a,s),a){case"SET_DATA":return Object(o.a)(Object(o.a)({},e),{},{data:s||[]});case"ADD_TO_WATCHLIST":return Object(o.a)(Object(o.a)({},e),{},{watchList:s.watchList,alert:s.alert,data:s.data});case"REMOVE_FROM_WATCHLIST":return Object(o.a)(Object(o.a)({},e),{},{watchList:s.watchList,alert:s.alert});case"SET_LOADING":return Object(o.a)(Object(o.a)({},e),{},{loading:s});case"SET_MESSAGE":return Object(o.a)(Object(o.a)({},e),{},{message:s});case"SET_ALERT":return Object(o.a)(Object(o.a)({},e),{},{alert:s});case"CLOSE_ALERT":return Object(o.a)(Object(o.a)({},e),{},{alert:""});default:return e}}var b=a(27),j=a(9),h=a.n(j),p=a(15),O=function(){var e=Object(p.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/","?apikey=").concat("61335e").concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("&plot=full&s=doctor");case 2:return t=e.sent,e.abrupt("return",t.Search.map(g));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("&plot=full&i=".concat(t));case 2:return a=e.sent,e.abrupt("return",g(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(h.a.mark((function e(t,a){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("&plot=full&s=".concat(t).concat("all"!==a?"&type=".concat(a):""));case 2:return s=e.sent,e.abrupt("return",s.Search?s.Search.map(g):s);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(e){var t=e.Title,a=e.Type,s=e.Poster,i=e.imdbID,c=Object(b.a)(e,["Title","Type","Poster","imdbID"]);return Object(o.a)({title:t,type:a,poster:"N/A"===s?"https://via.placeholder.com/500x660.png?text=no+poster":s,id:i,isWatch:!1},c)},y=a(0),N=Object(s.createContext)();var w={data:[],watchList:function(){var e=localStorage.getItem("watchList");return e&&e.length?JSON.parse(e):[]}(),loading:!0,message:null,alert:""},S=function(e){var t=e.children,a=Object(s.useReducer)(m,w),i=Object(d.a)(a,2),c=i[0],n=i[1],r=function(e){return Array.isArray(e)||(e=[e]),e.map((function(e){return c.watchList.findIndex((function(t){return t.id===e.id}))>-1?Object(o.a)(Object(o.a)({},e),{},{isWatch:!0}):Object(o.a)(Object(o.a)({},e),{},{isWatch:!1})}))};return c.setData=function(e){n({type:"SET_LOADING",payload:!0}),n({type:"SET_DATA",payload:r(e)}),n({type:"SET_LOADING",payload:!1})},c.addToWatchList=function(e){var t=c.watchList.findIndex((function(t){return t.id===e.id}));if(t<0)n({type:"ADD_TO_WATCHLIST",payload:{watchList:[].concat(Object(u.a)(c.watchList),[e]),data:r(c.data),alert:"".concat(e.title," added to watch list")}});else{var a=[].concat(Object(u.a)(c.watchList.slice(0,t)),Object(u.a)(c.watchList.slice(t+1)));n({type:"ADD_TO_WATCHLIST",payload:{watchList:Object(u.a)(a),data:r(c.data),alert:"".concat(e.title," removed from the watch list")}})}},c.removeFromWatchList=function(e){var t=e.id,a=e.title;n({type:"REMOVE_FROM_WATCHLIST",payload:{watchList:c.watchList.filter((function(e){return e.id!==t})),alert:"".concat(a," removed from the watch list")}})},Object(s.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(c.watchList)),n({type:"SET_DATA",payload:r(c.data)})}),[c.watchList]),c.handleSearch=function(e,t){n({type:"SET_DATA",payload:[]}),f(e,t).then((function(e){if(e.Error)throw new Error(e.Error);return e})).then((function(e){n({type:"SET_MESSAGE",payload:null}),n({type:"SET_DATA",payload:r(e)}),n({type:"SET_LOADING",payload:!1})})).catch((function(e){n({type:"SET_MESSAGE",payload:e.message}),n({type:"SET_DATA",payload:[]}),n({type:"SET_LOADING",payload:!1})}))},c.closeAlert=function(){n({type:"CLOSE_ALERT"})},Object(y.jsx)(N.Provider,{value:c,children:t})};function T(){return Object(y.jsx)("nav",{className:"navbar navbar navbar-dark bg-dark shadow-sm",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)(r.b,{className:"navbar-brand",to:"/",children:[Object(y.jsx)("img",{src:"https://img.icons8.com/fluent/96/000000/video-gallery.png",alt:"movies",style:{paddingRight:"10px",height:"24px"}}),"movies"]}),Object(y.jsx)(r.b,{to:"/about",className:"nav-link navbar-text",children:"About"})]})})}function A(){return Object(y.jsx)("footer",{className:"navbar navbar-light bg-light",children:Object(y.jsxs)("div",{className:"container d-flex flex-row justify-content-justify",children:[Object(y.jsxs)("div",{className:"",children:["movies app, ",(new Date).getFullYear()]}),Object(y.jsx)("div",{className:"",children:Object(y.jsx)("a",{href:"https://skepto77.github.io/react-movies/",className:"nav-link navbar-text",children:"Github"})})]})})}var k=a(14),L=a.n(k),E=function(){return Object(y.jsx)("div",{className:"d-flex justify-content-center",children:Object(y.jsx)("div",{className:"spinner-border",role:"status",children:Object(y.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})};function D(e){var t=Object(s.useContext)(N).addToWatchList,a=e.title,i=e.type,c=e.poster,n=e.id,l=e.isWatch,u="movie"===i?"badge rounded-pill bg-primary":"badge rounded-pill bg-warning text-dark";return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"col-sm-6",children:Object(y.jsxs)("div",{className:"card h-100 border-0 shadow p mb-5 bg-body rounded",children:[Object(y.jsx)(r.b,{to:"/".concat(n),children:Object(y.jsx)("img",{src:c,className:"card-img-top",alt:"{title}"})}),Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsx)("p",{className:u,children:i}),Object(y.jsx)("h5",{className:"card-title",children:a}),Object(y.jsxs)("p",{className:"card-text",children:["".concat(a.slice(0,10),"...")," This content is a little bit longer."]}),Object(y.jsx)(r.b,{to:"/".concat(n),type:"button",className:"btn btn-sm btn-primary",style:{marginRight:"10px"},children:"Details"}),Object(y.jsx)("button",{type:"button",className:"btn btn-sm btn-light",onClick:function(){return t({id:n,title:a})},children:l?Object(y.jsx)("i",{className:"bi bi-heart-fill",style:{color:"red"}}):Object(y.jsx)("i",{className:"bi bi-heart"})})]})]})},n)})}function q(){var e=Object(s.useContext)(N).data,t=void 0===e?[]:e;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"row row-cols-1 row-cols-md-4 g-4",children:t.map((function(e){return Object(y.jsx)(D,Object(o.a)({},e),e.id)}))})})}function C(){var e=Object(s.useContext)(N).handleSearch,t=void 0===e?Function.prototype:e,a=Object(l.f)(),i=Object(l.g)(),c=i.pathname,n=i.search,r=Object(s.useState)(L.a.parse(n).value),u=Object(d.a)(r,2),o=u[0],m=void 0===o?"doctor":o,b=u[1],j=Object(s.useState)(L.a.parse(n).type),h=Object(d.a)(j,2),p=h[0],O=void 0===p?"all":p,v=h[1],x=function(e){return v(e.target.value)};return Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push({pathname:c,search:"?value=".concat(m,"&type=").concat(O)}),t(m,O)},children:[Object(y.jsxs)("div",{className:"input-group search-input-group",children:[Object(y.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"type to search",onChange:function(e){return b(e.target.value)},value:m}),Object(y.jsx)("button",{type:"submit",className:"btn btn-primary btn-search",children:"Search"})]}),Object(y.jsxs)("div",{className:"form-check form-check-inline",children:[Object(y.jsx)("input",{className:"form-check-input",type:"radio",value:"all",onChange:x,name:"Radios",checked:"all"===O}),Object(y.jsx)("label",{className:"form-check-label",children:"All"})]}),Object(y.jsxs)("div",{className:"form-check form-check-inline",children:[Object(y.jsx)("input",{className:"form-check-input",type:"radio",value:"movie",name:"Radios",onChange:x,checked:"movie"===O}),Object(y.jsx)("label",{className:"form-check-label",children:"Only movies"})]}),Object(y.jsxs)("div",{className:"form-check form-check-inline",children:[Object(y.jsx)("input",{className:"form-check-input",type:"radio",value:"series",name:"Radios",onChange:x,checked:"series"===O}),Object(y.jsx)("label",{className:"form-check-label",children:"Only series"})]})]})}function _(e){var t=Object(s.useContext)(N),a=t.watchList,i=void 0===a?[]:a,c=t.removeFromWatchList,n=void 0===c?Function.prototype:c;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h5",{children:"My list"}),Object(y.jsx)("ul",{className:"list-group",children:i.length?i.map((function(e){var t=e.id,a=e.title;return Object(y.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(y.jsx)(r.b,{to:"/".concat(t),className:"btn btn-light",children:a}),Object(y.jsx)("span",{className:"",onClick:function(){return n({id:t,title:a})},children:Object(y.jsx)("i",{className:"bi bi-x"})})]},t)})):Object(y.jsx)("p",{children:"List is empty"})})]})}function F(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(s.useContext)(N).watchList,n=void 0===c?[]:c;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"",onClick:function(){return i(!a)},children:[Object(y.jsx)("i",{className:"bi bi-heart"})," ",n.length]}),Object(y.jsx)("div",{className:"watchlist__list",style:{display:a?"block":"none"},children:Object(y.jsx)(_,Object(o.a)({},n))})]})}function I(e){var t=Object(s.useContext)(N),a=t.alert,i=void 0===a?"":a,c=t.closeAlert,n=void 0===c?Function.prototype:c;return Object(s.useEffect)((function(){var e=setTimeout(n,2e3);return function(){clearTimeout(e)}}),[i]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"toast-container",children:[Object(y.jsx)("div",{className:"toast-header",children:Object(y.jsx)("strong",{className:"me-auto",children:"Message"})}),Object(y.jsx)("div",{className:"toast-body",children:i})]})})}var M=function(){var e=Object(s.useContext)(N),t=e.message,a=e.loading,i=e.alert,c=e.setData,n=e.handleSearch,r=Object(l.f)(),u=Object(l.g)(),o=u.pathname,d=u.search;return Object(s.useEffect)((function(){v().then((function(e){if(d){var t=L.a.parse(d),a=t.value,s=t.type;r.push({pathname:o,search:"?value=".concat(a,"&type=").concat(s)}),n(a,s)}else c(e)}))}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"position-fixed top-20 end-0 btn btn-light watchlist",children:Object(y.jsx)(F,{})}),Object(y.jsx)("div",{className:"row mb-4",children:Object(y.jsx)(C,{})}),a?Object(y.jsx)(E,{}):t||Object(y.jsx)(q,{}),i&&Object(y.jsx)(I,{})]})},W=function(){var e=Object(l.f)().goBack;return Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"col-12",children:[Object(y.jsx)("button",{className:"btn btn-light",onClick:e,children:"back"}),Object(y.jsx)("h2",{children:"About"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat nibh sagittis, convallis ipsum vel, condimentum felis. Phasellus metus felis, elementum non felis id, ultricies scelerisque metus. Nulla scelerisque tellus ut facilisis pellentesque. Etiam tristique risus in elementum commodo. Morbi cursus erat eu ipsum ultricies, non consequat ligula accumsan. Sed tempor sollicitudin diam, eu lacinia est mollis non. Ut cursus pellentesque diam, eu vehicula mi hendrerit id. Cras eget aliquet purus, a hendrerit ipsum. Nam fringilla ante ligula, eget consectetur risus convallis eget. Donec sit amet sem orci. Curabitur commodo lorem non scelerisque blandit. Fusce ut mauris sodales, viverra tortor et, tincidunt eros. Ut elementum mauris a posuere fermentum. Maecenas consectetur mi non ligula efficitur lacinia."}),Object(y.jsx)("p",{children:"Nam ac urna dictum, tristique tellus ullamcorper, scelerisque tellus. Pellentesque nec enim est. Vivamus eros mi, sodales eget est et, interdum ultricies ante. Duis et sagittis velit. Nam feugiat libero eu leo condimentum, eu dapibus nunc bibendum. Sed non metus eros. In mi ex, blandit egestas vestibulum eget, viverra sed est. Maecenas rhoncus rutrum ante eu dapibus. Mauris pharetra euismod imperdiet. Donec interdum sollicitudin est a tincidunt. Praesent luctus, leo nec luctus placerat, turpis quam interdum lorem, in gravida diam enim ut justo. In lorem est, laoreet vitae consectetur nec, aliquam a lorem. Aenean nec velit at sapien egestas elementum at a metus. Proin semper feugiat eros, eget egestas sem sagittis quis. Mauris viverra nunc neque, ac vulputate justo efficitur sit amet. Curabitur metus velit, finibus sit amet porttitor non, egestas sit amet quam."}),Object(y.jsx)("p",{children:"Ut mollis hendrerit eros ac interdum. Ut ac magna mi. Nulla sollicitudin, turpis id laoreet tristique, massa risus tincidunt leo, et mollis sem quam non leo. Donec sagittis tellus ac magna rhoncus, id finibus quam tempus. Nullam dapibus vestibulum dictum. Duis semper quam in nisl blandit imperdiet. Maecenas id leo eget magna sagittis egestas. Donec eu augue leo. Nunc cursus nunc ex, nec maximus justo pellentesque nec. Vestibulum ultrices est eget ligula blandit consectetur. Vivamus rutrum ante in tincidunt suscipit. Sed fermentum arcu nisi. Ut a turpis egestas, venenatis nibh id, hendrerit nisi. Pellentesque auctor in ante sit amet vulputate."}),Object(y.jsx)("p",{children:"Duis sagittis sollicitudin diam, sodales egestas mi rutrum et. Aenean non enim sed mi consectetur semper. Duis efficitur est vitae feugiat pharetra. Vivamus in mauris pellentesque, scelerisque ante eu, malesuada metus. Donec eget consectetur odio. Fusce sollicitudin risus sed porttitor auctor. Maecenas est ligula, suscipit in fringilla et, venenatis at turpis. Curabitur lectus lorem, maximus ultricies ipsum a, condimentum elementum dui. Cras id urna quis ante feugiat cursus. Sed porttitor venenatis nisi, vel tempor diam malesuada rhoncus. Nulla luctus justo eget ante commodo, eget luctus purus placerat. Curabitur sit amet bibendum eros, et sagittis diam. Donec laoreet porta ex. Donec volutpat sapien lorem, vel auctor nisl tincidunt a. Aenean at mauris tristique, vehicula risus volutpat, pharetra urna."}),Object(y.jsx)("p",{children:"Sed diam orci, auctor vel ultricies vitae, porta sit amet urna. Cras vestibulum scelerisque blandit. Suspendisse accumsan risus at elit ultricies mollis. Duis blandit, sapien ac consectetur vulputate, magna nibh facilisis ex, et maximus purus lacus vel leo. Nulla quis tincidunt justo, sit amet molestie nisl. Etiam enim metus, interdum in volutpat vitae, accumsan sit amet felis. Aenean gravida mi non dapibus dapibus. Quisque ac aliquam dui, in tincidunt turpis. Maecenas metus massa, iaculis non interdum eu, dictum non eros. Mauris sit amet orci tincidunt, vestibulum lacus vitae, sollicitudin lorem. Fusce vel arcu nulla. Proin commodo erat in nisl volutpat tincidunt. Etiam faucibus nisl vitae lacinia hendrerit. Ut tortor nisl, placerat vel neque eget, pretium elementum velit. Fusce in lacus id metus aliquam semper vel non leo. Aliquam sed mi posuere, commodo orci quis, malesuada turpis."})]})})};function R(e){var t=e.movie,a=Object(s.useContext)(N).addToWatchList,i=t.title,c=t.poster,n=t.type,r=t.isWatch,l=t.id,u="movie"===n?"badge rounded-pill bg-primary":"badge rounded-pill bg-warning text-dark";return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-md-4 col-sm-12",children:[Object(y.jsx)("img",{src:c,className:"card-img-top",alt:"{title}"}),Object(y.jsx)("button",{type:"button",className:"btn btn-sm btn-light mt-2",onClick:function(){return a({id:l,title:i})},children:r?Object(y.jsx)("i",{className:"bi bi-heart-fill",style:{color:"red"}}):Object(y.jsx)("i",{className:"bi bi-heart"})})]}),Object(y.jsxs)("div",{className:"col-md-8 col-sm-12",children:[Object(y.jsxs)("h3",{children:[i," ",Object(y.jsx)("span",{className:u,children:n})]}),Object(y.jsx)("ul",{className:"list-group list-group-flush",children:Object.keys(t).filter((function(e){return!["title","Ratings","poster","imdbVotes","Response","isWatch","type","id"].includes(e)})).map((function(e){return Object(y.jsxs)("li",{className:"list-group-item",children:[Object(y.jsxs)("strong",{children:[e,":"]})," ",t[e]]},e)}))})]})]})})}function P(){var e=Object(l.h)().id,t=Object(l.f)(),a=Object(s.useContext)(N),i=a.data,c=a.setData,n=(a.loading,a.alert);Object(s.useEffect)((function(){c([]),x(e).then((function(e){return c(e)}))}),[e]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"position-fixed top-20 end-0 btn btn-light watchlist",children:Object(y.jsx)(F,{})}),Object(y.jsx)("div",{className:"row mb-4",children:Object(y.jsx)("div",{className:"col-12",children:Object(y.jsx)("button",{className:"btn btn-light",onClick:function(){return c([]),void("PUSH"===t.action?t.goBack():t.push("/"))},children:"back"})})}),i.length?Object(y.jsx)(R,{movie:i[0]}):Object(y.jsx)(E,{}),n&&Object(y.jsx)(I,{})]})}var G=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"",children:["404",Object(y.jsx)("br",{}),"Page not found"]})})};function U(){return Object(y.jsx)(S,{children:Object(y.jsxs)(r.a,{basename:"/react-movies",children:[Object(y.jsx)(T,{}),Object(y.jsx)("main",{className:"container position-relative",children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/",component:M}),Object(y.jsx)(l.a,{path:"/about",component:W}),Object(y.jsx)(l.a,{path:"/:id",component:P}),Object(y.jsx)(l.a,{component:G})]})}),Object(y.jsx)(A,{})]})})}n.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(U,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.71ec81f7.chunk.js.map