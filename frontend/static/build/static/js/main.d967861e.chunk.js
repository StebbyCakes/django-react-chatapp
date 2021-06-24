(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(13),r=n.n(i),o=(n(18),n(19),n(9)),c=n.n(o),l=n(10),u=n(8),h=n(4),d=n(5),b=n(1),m=n(7),j=n(6),p=n(3),f=n.n(p),O=n(12),g=n(0),v=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={field:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={field:this.state.field};this.props.inputMessage(t),this.setState({field:""})}},{key:"handleInput",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{onChange:this.handleInput,className:"field",type:"text",name:"field",value:this.state.field}),Object(g.jsx)("button",{className:"button",type:"submit",children:"Send"})]})}}]),n}(a.Component),x=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={message:[],isEditing:null,edit:""},a.inputMessage=a.inputMessage.bind(Object(b.a)(a)),a.removeMessage=a.removeMessage.bind(Object(b.a)(a)),a.editMessage=a.editMessage.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/chatlog/").then((function(e){return e.json()})).then((function(t){return e.setState({message:t})}))}},{key:"inputMessage",value:function(e){var t=this,n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/chatlog/",n).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){return t.setState({message:[].concat(Object(O.a)(t.state.message),[e])})}))}},{key:"removeMessage",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}};fetch("/api/v1/chatlog/".concat(e,"/"),n).then((function(n){var a=Object(O.a)(t.state.message),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({message:a})})).catch((function(e){console.log.error("Error:",e)}))}},{key:"editMessage",value:function(e){var t={message:this.state.edit},n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)};fetch("/api/v1/chatlog/".concat(e,"/"),n).then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this,t=this.state.message.map((function(t){return Object(g.jsxs)("li",{children:[Object(g.jsx)("p",{children:t.field}),e.state.isEditing===t.id?Object(g.jsx)("button",{type:"button",onClick:function(){return e.handleEdit(t.id)},children:"SAVE"}):Object(g.jsx)("button",{type:"button",onClick:function(){return e.setState({isEditing:t.id})},children:"EDIT"}),Object(g.jsx)("button",{type:"button",onClick:function(){return e.removeMessage(t.id)},children:"Delete"})]},t.id)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"chat-log",children:[Object(g.jsx)("ul",{children:t}),Object(g.jsx)("section",{children:Object(g.jsx)(v,{inputMessage:this.inputMessage})}),Object(g.jsx)("button",{type:"button",onClick:this.props.handleLogout,children:"Logout"})]})})}}]),n}(a.Component),y=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(g.jsx)("input",{onChange:this.handleInput,type:"text",className:"form-control",id:"username",name:"username"})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(g.jsx)("input",{onChange:this.handleInput,type:"email",className:"form-control",id:"email",name:"email"})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"password1",className:"form-label",children:"Password"}),Object(g.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password1",name:"password1"})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Confirm Password"}),Object(g.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password2",name:"password2"})]}),Object(g.jsx)("button",{type:"button",className:"btn btn-link",onClick:function(){return e.props.handleForm("login")},children:"Login"}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"REGISTER"})]})}}]),n}(a.Component),k=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(g.jsx)("input",{onChange:this.handleInput,type:"text",className:"form-control",id:"username",name:"username"})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(g.jsx)("input",{onChange:this.handleInput,type:"email",className:"form-control",id:"email",name:"email"})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(g.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password",name:"password"})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-link",children:"Login"}),Object(g.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.handleForm("register")},children:"Register New User"})]})}}]),n}(a.Component),S=(n(22),function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={selection:f.a.get("Authorization")?"chat":"login"},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleLogin=a.handleLogin.bind(Object(b.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(b.a)(a)),a.handleForm=a.handleForm.bind(Object(b.a)(a)),a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n);case 4:return s=e.sent,e.next=7,s.json().catch(a);case 7:(i=e.sent).key&&(f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chat"}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleForm",value:function(e){this.setState({selection:e})}},{key:"handleRegistration",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n);case 4:return s=e.sent,e.next=7,s.json().catch(a);case 7:(i=e.sent).key&&(f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chat"}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(f.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"background",children:[Object(g.jsx)("h1",{children:"Online Chat Log"}),"login"===this.state.selection&&Object(g.jsx)(k,{handleForm:this.handleForm,handleLogin:this.handleLogin}),"register"===this.state.selection&&Object(g.jsx)(y,{handleForm:this.handleForm,handleRegistration:this.handleRegistration}),"chat"===this.state.selection&&Object(g.jsx)(x,{handleLogout:this.handleLogout})]})})}}]),n}(s.a.Component)),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),C()}},[[23,1,2]]]);
//# sourceMappingURL=main.d967861e.chunk.js.map