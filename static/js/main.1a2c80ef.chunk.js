(this["webpackJsonplive-chat"]=this["webpackJsonplive-chat"]||[]).push([[0],{112:function(e,t){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(9),o=a.n(i),l=(a(82),a(29)),s=a(35),m=a(68),u=a(47),h=a(66),d=a.n(h),p=c.a.createContext(),E={General:[{from:"chris",msg:"hi"},{from:"steve",msg:"hi"},{from:"john",msg:"hi"}],Topic2:[{from:"mike",msg:"hi"},{from:"cleetus",msg:"hi"},{from:"jesus",msg:"hi"}]};function f(e,t){var a=t.payload,n=a.from,r=a.msg,c=a.topic;switch(t.type){case"RECEIVE_MESSAGE":return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},c,[].concat(Object(m.a)(e[c]),[{from:n,msg:r}])));default:return e}}function v(e){n.emit("chat message",e)}function g(e){var t=c.a.useReducer(f,E),a=Object(l.a)(t,2),r=a[0],i=a[1];n||(n=d()(":3001")).on("chat message",(function(e){i({type:"RECEIVE_MESSAGE",payload:e})}));var o="Chris"+Math.random(100).toFixed(2);return c.a.createElement(p.Provider,{value:{allChats:r,sendChatAction:v,user:o}},e.children)}var b=a(153),x=a(39),w=a(150),y=a(155),C=a(156),j=a(159),k=a(157),N=a(158),S=Object(w.a)((function(e){return{root:{padding:e.spacing(3,2),margin:"50px"},flex:{display:"flex",alignItems:"center"},topicsWindow:{width:"30%",height:"300px",borderRight:"1px solid grey"},chatWindow:{width:"70%",height:"300px",padding:"20px"},chatBox:{width:"80%"},button:{width:"20%"},textField:{width:"100%"}}}));function O(){var e=S(),t=c.a.useContext(p),a=t.allChats,n=t.sendChatAction,r=t.user;console.log({allChats:a});var i=Object.keys(a),o=c.a.useState(i[0]),s=Object(l.a)(o,2),m=s[0],u=s[1],h=c.a.useState(""),d=Object(l.a)(h,2),E=d[0],f=d[1];return c.a.createElement("div",null,c.a.createElement(b.a,{elevation:3,className:e.root},c.a.createElement(x.a,{variant:"h2",component:"h2"},"Chat App"),c.a.createElement(x.a,{variant:"p"},"An Interactive Chat app using React.js, Socket.io, and Express.  ",c.a.createElement("br",null),"Styled with Material-UI."),c.a.createElement("br",null),c.a.createElement("hr",null),c.a.createElement(x.a,{variant:"h4"},m),c.a.createElement("div",{className:e.flex},c.a.createElement("div",{className:e.topicsWindow},c.a.createElement("list",null,i.map((function(e){return c.a.createElement(y.a,{onClick:function(e){return u(e.target.innerText)},key:e,button:!0},c.a.createElement(C.a,{primary:e}))})))),c.a.createElement("div",{className:e.chatWindow},a[m].map((function(t,a){return c.a.createElement("div",{className:e.flex,key:a},c.a.createElement(j.a,{label:t.from,className:e.chip}),c.a.createElement(x.a,{variant:"p"},t.msg))})))),c.a.createElement("div",{className:e.flex},c.a.createElement("div",{className:e.chatBox},c.a.createElement(N.a,{label:"Type Your Message Here...",className:e.textField,onChange:function(e){return f(e.target.value)},value:E})),c.a.createElement("div",{className:e.button},c.a.createElement(k.a,{variant:"contained",color:"primary",onClick:function(){n({from:r,msg:E,topic:m}),f("")}},"Submit")))))}a(118);var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null,c.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(119)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.1a2c80ef.chunk.js.map