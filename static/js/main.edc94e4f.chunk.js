(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(27),i=c.n(n),r=(c(72),c(16)),o=c(107),j=c(103),d=(c(73),c(104)),l=c(105),b=c(43),h=c.n(b),u=c(57),O=c.n(u),m=c(58),p=c.n(m),x=c(11),f=c(31),v=f.a.initializeApp({apiKey:"AIzaSyDqNLfMOfC067eyRaVxlIRPwwhoV6JllQY",authDomain:"whatsapp-clone-bac25.firebaseapp.com",projectId:"whatsapp-clone-bac25",storageBucket:"whatsapp-clone-bac25.appspot.com",messagingSenderId:"134277208287",appId:"1:134277208287:web:ee1ef28511720472b9f16a",measurementId:"G-67BPPW2LEH"}).firestore(),g=f.a.auth(),N=new f.a.auth.GoogleAuthProvider,S=v,w=c(4),_=Object(a.createContext)(),C=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(w.jsx)(_.Provider,{value:Object(a.useReducer)(t,c),children:s})},y=function(){return Object(a.useContext)(_)};var I=function(){var e,t,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=(s[0],s[1],Object(a.useState)("")),i=Object(r.a)(n,2),b=i[0],u=i[1],m=Object(x.f)().roomId,v=Object(a.useState)(""),g=Object(r.a)(v,2),N=g[0],_=g[1],C=Object(a.useState)([]),I=Object(r.a)(C,2),P=I[0],k=I[1],D=y(),E=Object(r.a)(D,2),A=E[0].user;return E[1],Object(a.useEffect)((function(){m&&(S.collection("rooms").doc(m).onSnapshot((function(e){return _(e.data().name)})),S.collection("rooms").doc(m).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return k(e.docs.map((function(e){return e.data()})))})))}),[m]),Object(w.jsxs)("div",{className:"chat",children:[Object(w.jsxs)("div",{className:"chat_header",children:[Object(w.jsx)(o.a,{src:"https://avatars.dicebear.com/api/micah/".concat(Math.floor(5e3*Math.random()),".svg")}),Object(w.jsxs)("div",{className:"chat_headerInfo",children:[Object(w.jsx)("h3",{children:N}),Object(w.jsxs)("p",{children:["last seen"," ",new Date(null===(e=P[P.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(w.jsxs)("div",{className:"chat_headerRight",children:[Object(w.jsx)(j.a,{children:Object(w.jsx)(d.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(l.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(h.a,{})})]})]}),Object(w.jsx)("div",{className:"chat_body",children:P.map((function(e){var t;return Object(w.jsxs)("p",{className:"chat_message ".concat(e.name===A.displayName&&"chat_receiver"),children:[Object(w.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(w.jsx)("span",{className:"chat_timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(w.jsxs)("div",{className:"chat_footer",children:[Object(w.jsx)(O.a,{}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{value:b,onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Type a message"}),Object(w.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log("You typed : ",b),S.collection("rooms").doc(m).collection("messages").add({message:b,name:A.displayName,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),u("")},children:"Send a message"})]}),Object(w.jsx)(p.a,{})]})]})},P=(c(85),c(86),c(59)),k=c.n(P),D=c(60),E=c.n(D),A=c(36);c(87);var R=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,i=Object(a.useState)(""),j=Object(r.a)(i,2),d=j[0],l=j[1],b=Object(a.useState)(""),h=Object(r.a)(b,2),u=h[0],O=h[1];return Object(a.useEffect)((function(){c&&S.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return O(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(w.jsx)("div",{onClick:function(){var e=prompt("Please enter name for chat room");e&&S.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(w.jsx)("h2",{children:"Add new chat"})}):Object(w.jsx)(A.b,{to:"/rooms/".concat(c),children:Object(w.jsxs)("div",{className:"sidebarChat",children:[Object(w.jsx)(o.a,{src:"https://avatars.dicebear.com/api/micah/".concat(d,".svg")}),Object(w.jsxs)("div",{className:"sidebarChat_info",children:[Object(w.jsx)("h2",{children:s}),Object(w.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})})};var T=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=y(),i=Object(r.a)(n,2),l=i[0].user;return i[1],Object(a.useEffect)((function(){var e=S.collection("rooms").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(w.jsxs)("div",{className:"sidebar",children:[Object(w.jsxs)("div",{className:"sidebar_header",children:[Object(w.jsx)(o.a,{src:null===l||void 0===l?void 0:l.photoURL}),Object(w.jsxs)("div",{className:"sidebar_headerRight",children:[Object(w.jsx)(j.a,{children:Object(w.jsx)(k.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(E.a,{})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(h.a,{})})]})]}),Object(w.jsx)("div",{className:"sidebar_search",children:Object(w.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(w.jsx)(d.a,{}),Object(w.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(w.jsxs)("div",{className:"sidebar_chats",children:[Object(w.jsx)(R,{addNewChat:!0}),c.map((function(e){return Object(w.jsx)(R,{id:e.id,name:e.data.name},e.id)}))]})]})},B=c(61),M=c(106),F=(c(88),c(50)),L="SET_USER",W=function(e,t){switch(console.log(t),t.type){case L:return Object(F.a)(Object(F.a)({},e),{},{user:t.user});default:return e}};var U=function(){var e=y(),t=Object(r.a)(e,2);Object(B.a)(t[0]);var c=t[1];return Object(w.jsx)("div",{className:"login",children:Object(w.jsxs)("div",{className:"login_container",children:[Object(w.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png",alt:""}),Object(w.jsx)("div",{className:"login_text",children:Object(w.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(w.jsx)(M.a,{onClick:function(){g.signInWithPopup(N).then((function(e){return c({type:L,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In with Google"})]})})};var G=function(){var e=y(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(w.jsx)("div",{className:"app",children:c?Object(w.jsx)("div",{className:"app_body",children:Object(w.jsxs)(A.a,{children:[Object(w.jsx)(T,{}),Object(w.jsxs)(x.c,{children:[Object(w.jsx)(x.a,{path:"/rooms/:roomId",children:Object(w.jsx)(I,{})}),Object(w.jsx)(x.a,{path:"/",children:Object(w.jsx)(I,{})})]})]})}):Object(w.jsx)(U,{})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(C,{initialState:{user:null},reducer:W,children:Object(w.jsx)(G,{})})}),document.getElementById("root")),J()}},[[89,1,2]]]);
//# sourceMappingURL=main.edc94e4f.chunk.js.map