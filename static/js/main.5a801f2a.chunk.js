(this["webpackJsonpcv-page"]=this["webpackJsonpcv-page"]||[]).push([[0],{78:function(e,t,c){},79:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(53),a=c.n(n),r=(c(78),c(7)),i=c(5),l=c(11),j=c(10),o=c(54),h=c.n(o),d=(c(79),c(49)),b=c(0),O=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={index:0,intervalId:{}},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.setState({intervalId:setInterval((function(){e.setState((function(e){return{index:e.index+1}}))}),1e3)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data,t=e.name,c=e.description,s=e.descriptions;return Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",className:"opaque",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#skills",children:"Skills"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#hobbies",children:"Interests & Hobbies"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsxs)("h1",{className:"responsive-headline",children:["Hi, I'm ",t,"!"]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("h3",{children:[c,Object(b.jsx)("br",{}),Object(b.jsx)(d.a,{inline:!0,text:s[this.state.index%s.length],springConfig:d.b.wobbly})]})]})})]})}}]),c}(s.Component),u=O,x=c(55),m=c.n(x),p=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.map((function(e){var t=e.name,c=e.description;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("p",{children:c})]},t)}));return Object(b.jsx)("section",{id:"hobbies",children:Object(b.jsxs)("div",{className:"row hobbies",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)(m.a,{sx:{fontSize:50}})})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Hobbies"})}),e]})]})})}}]),c}(s.Component),v=p,f=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){var t=e.name,c=e.url,s=e.className;return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:c,children:Object(b.jsx)("i",{className:s})})},t)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"twelve columns",children:Object(b.jsx)("ul",{className:"social-links",children:e})}),Object(b.jsx)("div",{id:"go-top",children:Object(b.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#about",children:Object(b.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(s.Component),N=f,y=c(116),k=c(117),g=c(118),w=c(120),C=c(113),S=c(112),I=c(119),H=c(59),T=c.n(H),z=c(58),A=c.n(z),D=c(44),J=c.n(D),B=c(68),M=c(114),E=c(110),R=Object(E.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},verticallyCenterContent:{margin:"auto 0"},centeredText:{textAlign:"center"}}}));function W(e){var t=e.children,c=t.what,s=t.when,n=t.icon,a=R();var r=function(e){var t;switch(e){case"study":t=Object(b.jsx)(J.a,{});break;case"work":t=Object(b.jsx)(A.a,{});break;default:t=Object(b.jsx)(T.a,{})}return t}(n);return Object(b.jsxs)(k.a,{children:[Object(b.jsx)(S.a,{className:a.verticallyCenterContent,variant:"h6",component:"h1",color:"textSecondary",children:s}),Object(b.jsxs)(g.a,{children:[Object(b.jsx)(I.a,{color:"primary",children:r}),Object(b.jsx)(w.a,{})]}),Object(b.jsxs)(C.a,{className:a.verticallyCenterContent,children:[Object(b.jsx)(M.a,{elevation:3,className:a.paper,children:Object(b.jsx)(B.a,{variant:"h6",component:"h1",className:a.centeredText,children:c})}),Object(b.jsx)(w.a,{})]})]})}var q=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props.data.map((function(e){var t=e.what;return Object(b.jsx)(W,{children:e},t)}));return Object(b.jsx)("section",{className:"timeline",children:Object(b.jsx)(y.a,{align:"alternate",children:e})})}}]),c}(s.Component),L=q,U=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data,t=e.name,c=e.image,s=e.bio,n=e.short,a=this.props.data.social.map((function(e){var t=e.name,c=e.url,s=e.className;return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:c,children:Object(b.jsx)("i",{className:s})})},t)}));return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("img",{className:"profile-pic",src:"/images/"+c,alt:t})}),Object(b.jsxs)("div",{className:"six columns main-col",children:[Object(b.jsx)("h3",{children:"That's me"}),Object(b.jsx)("p",{children:s}),Object(b.jsxs)("p",{className:"address",children:["Best, ",t]}),Object(b.jsx)("h3",{children:"Let's get in Touch"}),Object(b.jsx)("h3",{className:"social-links",children:a})]}),Object(b.jsxs)("div",{className:"three columns main-col",children:[Object(b.jsx)("h3",{children:"CV in a nutshell"}),Object(b.jsx)(L,{data:n})]})]})})}}]),c}(s.Component),V=U,F=c(62),G=c.n(F),K=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.work.map((function(e){var t=e.company,c=e.title,s=e.years,n=e.description;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:t}),Object(b.jsxs)("p",{className:"info",children:[c,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsx)("em",{className:"date",children:s})]}),Object(b.jsx)("p",{children:n})]},t)})),t=this.props.data.education.past.map((function(e){var t=e.school,c=e.degree,s=e.graduated,n=e.description;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:t}),Object(b.jsxs)("p",{className:"info",children:[c," ",Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("em",{className:"date",children:s})]}),Object(b.jsx)("p",{children:n})]},t)})),c=this.props.data.education.certs.map((function(e){var t=e.name,c=e.image,s=e.date,n=e.url;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("a",{href:n,children:Object(b.jsx)("img",{src:"/images/"+c,alt:t,width:"100",height:"100"})})}),Object(b.jsxs)("div",{className:"six columns main-col",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("p",{className:"info",children:s})]})]},t)}));return Object(b.jsxs)("section",{id:"resume",children:[Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)(G.a,{sx:{fontSize:50}})})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Recent Work"})}),e]})]}),Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)(J.a,{sx:{fontSize:50}})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"row item",children:Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})}),t,Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Certificates"})}),c]})})})]})]})}}]),c}(s.Component),P=K,Q=c(63),X=c.n(Q),Y=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data,t=e.flavor,c=e.soft,s=e.hard;return Object(b.jsx)("section",{id:"skills",children:Object(b.jsxs)("div",{className:"row skill",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)(X.a,{sx:{fontSize:50}})})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Skills"})}),Object(b.jsx)("div",{className:"row item",children:Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h3",{children:Object(b.jsx)("span",{children:"Hard"})}),Object(b.jsx)("ul",{children:s.map((function(e){return Object(b.jsx)("li",{children:e},e)}))}),Object(b.jsx)("h3",{children:Object(b.jsx)("span",{children:"Soft & More"})}),Object(b.jsx)("ul",{children:c.map((function(e){return Object(b.jsx)("li",{children:e},e)}))})]})})]})]})})}}]),c}(s.Component),Z=Y,$=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={resume:{}},s}return Object(i.a)(c,[{key:"getJsonData",value:function(){h.a.ajax({url:"./resume.json",dataType:"json",cache:!1,success:function(e){this.setState({resume:e})}.bind(this),error:function(e,t,c){alert(c)}})}},{key:"componentDidMount",value:function(){this.getJsonData()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{data:this.state.resume.header}),Object(b.jsx)(V,{data:this.state.resume.header}),Object(b.jsx)(P,{data:this.state.resume.table}),Object(b.jsx)(Z,{data:this.state.resume.skills}),Object(b.jsx)(v,{data:this.state.resume.hobbies}),Object(b.jsx)(N,{data:this.state.resume.header})]})}}]),c}(s.Component);a.a.render(Object(b.jsx)($,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.5a801f2a.chunk.js.map