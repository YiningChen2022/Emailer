(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports=n(68)},68:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return k})),n.d(a,"handleToken",(function(){return g}));n(40);var r=n(0),c=n.n(r),u=n(18),l=n.n(u),o=n(8),i=n(10),s=n(37),p=n(11),h=n(12),m=n(14),f=n(13),d=n(20),b=n(2),v=n(17),y=n.n(v),E=n(23),j=n(16),O=n.n(j),k=function(){return function(){var e=Object(E.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(E.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=n(38),x=n.n(w),C=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(x.a,{name:"Emaily",description:"$5 for 5 email credits",amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_51HPHxnFnDBJMsfb3MOBVeWMchkNrEWR2WWe2UQ15Yy3tKME9HqIEaX4RTAbT8ihHYlcmL1ct0bTIwIqz30omM2aK00tUZjsLa0"},c.a.createElement("button",{className:"btn"},"Add Credits"))}}]),n}(r.Component),N=Object(o.b)(null,a)(C),M=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"}," Login With Google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(N,null)),c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},"Credits:",this.props.auth.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return console.log(this.props),c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"Emaily"),c.a.createElement("ul",{className:"right"},this.renderContent())))}}]),n}(r.Component);var _=Object(o.b)((function(e){return{auth:e.auth}}))(M),T=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Emaily!"),"Collect feedback from your users")},W=function(){return c.a.createElement("h2",null,"Dashboard")},H=function(){return c.a.createElement("h2",null,"SurveyNew")},L=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(_,null),c.a.createElement(b.a,{exact:!0,path:"/",component:T}),c.a.createElement(b.a,{exact:!0,path:"/surveys",component:W}),c.a.createElement(b.a,{path:"/surveys/new",component:H}))))}}]),n}(r.Component),U=Object(o.b)(null,a)(L),q=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"fetch_user":return t.payload||!1;default:return e}}});window.axios=O.a;var A=Object(i.d)(q,{},Object(i.a)(s.a));l.a.render(c.a.createElement(o.a,{store:A},c.a.createElement(U,null)),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.06514244.chunk.js.map