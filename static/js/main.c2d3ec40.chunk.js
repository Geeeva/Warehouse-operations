(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports=[{_id:1,dateOfRecording:"",dateOfCreation:"2016-01-17T23:00:00.000Z",transactionType:"delivery",status:"opened",year:2016,businessPartner:{name:"Fabrika namestaja Numanovic",city:"Novi Pazar",address:"Rudjera Boskovica"}},{dateOfRecording:"2016-01-25T23:00:00.000Z",transactionType:"delivery",businessPartner:{name:"Jasen",city:"Kraljevo",address:"Industrijska bb"},dateOfCreation:"2016-01-25T23:00:00.000Z",status:"recorded",_id:2,year:2016},{dateOfRecording:"",transactionType:"receipt",businessPartner:{name:"Antares stolice d.o.o.",city:"Pristanisna 1",address:"Senta"},dateOfCreation:"2016-01-24T23:00:00.000Z",status:"opened",_id:3,year:2016},{dateOfRecording:"",transactionType:"delivery",businessPartner:{name:"Ginko d.o.o.",city:"Pozega",address:"Bana Milutina bb"},dateOfCreation:"2016-01-28T23:00:00.000Z",status:"opened",_id:4,year:2016},{dateOfRecording:"2016-01-06T23:00:00.000Z",transactionType:"receipt",businessPartner:{name:"Kovel Helios",city:"Beograd",address:"Nikodima Milasa 1a"},dateOfCreation:"2016-01-06T23:00:00.000Z",status:"recorded",_id:5,year:2016},{dateOfRecording:"2016-01-10T23:00:00.000Z",transactionType:"delivery",businessPartner:{name:"Confido enterijeri",city:"Novi Sad",address:"Mileve Mari\u0107 6"},dateOfCreation:"2016-01-10T23:00:00.000Z",status:"recorded",_id:6,year:2016},{dateOfRecording:"",transactionType:"delivery",businessPartner:{name:"Hrast Name\u0161taj",city:"Bosilegrad",address:"Industrijska bb"},dateOfCreation:"2016-01-19T23:00:00.000Z",status:"opened",_id:7,year:2016},{dateOfRecording:"2016-01-18T23:00:00.000Z",transactionType:"delivery",businessPartner:{name:"Jasen",city:"Kraljevo",address:"Industrijska bb"},dateOfCreation:"2016-01-18T23:00:00.000Z",status:"recorded",_id:8,year:2016},{dateOfRecording:"2016-01-24T23:00:00.000Z",transactionType:"receipt",businessPartner:{name:"Linea Milanovic",city:"Beograd",address:"Vojislava Ili\u0107a 59"},dateOfCreation:"2016-01-24T23:00:00.000Z",status:"recorded",_id:9,year:2016},{dateOfRecording:"",transactionType:"delivery",businessPartner:{name:"Hrast Name\u0161taj",city:"Bosilegrad",address:"Industrijska bb"},dateOfCreation:"2016-01-20T23:00:00.000Z",status:"opened",_id:10,year:2016},{dateOfRecording:"2016-01-12T23:00:00.000Z",transactionType:"delivery",businessPartner:{name:"Jasen",city:"Kraljevo",address:"Industrijska bb"},dateOfCreation:"2016-01-12T23:00:00.000Z",status:"recorded",_id:11,year:2016},{dateOfRecording:"2016-01-11T23:00:00.000Z",transactionType:"delivery",businessPartner:{name:"Linea Milanovic",city:"Beograd",address:"Vojislava Ili\u0107a 59"},dateOfCreation:"2016-01-11T23:00:00.000Z",status:"recorded",_id:12,year:2016},{dateOfRecording:"",transactionType:"delivery",businessPartner:{name:"Trend stil",city:"Nis",address:"Humska 17b"},dateOfCreation:"2016-01-18T23:00:00.000Z",status:"opened",_id:13,year:2016}]},31:function(e,t,a){e.exports=a.p+"static/media/cover.f0466ca5.png"},32:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),i=a.n(s),c=a(21),o=a(3),l=a(4),u=a(8),d=a(5),p=a(7),m=a(15),b=a(14),y=a(6),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"menu"},r.a.createElement(m.b,{className:"home",to:"/",exact:!0,activeStyle:{color:"#000000"}},r.a.createElement("li",null,"Home")),r.a.createElement(m.b,{className:"documents",to:"/documents",exact:!0,activeStyle:{color:"#000000"}},r.a.createElement("li",{onClick:this.props.documentsDisplayHandler},"Documents")),r.a.createElement(m.b,{className:"about",to:"/about",exact:!0,activeStyle:{color:"#000000"}},r.a.createElement("li",null,"About"))))}}]),t}(n.Component),E=Object(y.b)(function(e){return{documentsDisplay:e.documentsDisplay}},function(e){return{documentsDisplayHandler:function(){return e({type:"DOCUMENTS_DISPLAY"})}}})(f),h=function(){return r.a.createElement("div",{className:"home-route"},r.a.createElement("h1",null,"Welcome to Warehouse Operations"),r.a.createElement("p",null,"Use this application to view and manage receipt and delivery documents."))},O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{onClick:function(){return e.props.documentDetailsHandler(e.props.row._id)}},r.a.createElement("td",{className:this.props.dateOfCreation?"":"invisible"},this.props.row.dateOfCreation.substr(0,10)),r.a.createElement("td",{className:this.props.dateOfRecording?"":"invisible"},this.props.row.dateOfRecording.substr(0,10)),r.a.createElement("td",{className:this.props.status?"":"invisible"},this.props.row.status),r.a.createElement("td",{className:this.props.transactionType?"":"invisible"},this.props.row.transactionType),r.a.createElement("td",{className:this.props.businessPartner?"":"invisible"},this.props.row.businessPartner.name),r.a.createElement("td",{className:this.props.businessPartnerLocation?"":"invisible"},this.props.row.businessPartner.address),r.a.createElement("td",{className:this.props.year?"":"invisible"},this.props.row.year))}}]),t}(n.Component),g=Object(y.b)(function(e){return{dateOfCreation:e.dateOfCreation,dateOfRecording:e.dateOfRecording,status:e.status,transactionType:e.transactionType,businessPartner:e.businessPartner,businessPartnerLocation:e.businessPartnerLocation,year:e.year,documentsDisplay:e.documentsDisplay}},function(e){return{documentDetailsHandler:function(t){return e({type:"DOCUMENT_DETAILS_DISPLAY",documentId:t})}}})(O),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).props.nextHandler(a.props.maxPages),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=1;a<=this.props.maxPages;a++)t.push(a);var n=t.map(function(t){return r.a.createElement("li",{className:e.props.currentPage===t?"active":"",key:t,id:t,onClick:function(t){return e.props.currentPageHandler(t.target.textContent)}},t)});return r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.props.previousHandler},"\u2039"),r.a.createElement("ul",{className:"numbers"},n),r.a.createElement("button",{className:"next",onClick:function(){return e.props.nextHandler(e.props.maxPages)}},"\u203a"))}}]),t}(n.Component),P=Object(y.b)(function(e){return{currentPage:e.currentPage}},function(e){return{nextHandler:function(t){return e({type:"NEXT_PAGE",maxPages:t})},currentPageHandler:function(t){return e({type:"SET_CURRENT_PAGE",number:t})},previousHandler:function(){return e({type:"PREVIOUS_PAGE"})}}})(v),T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"table-settings"+(this.props.toggle?" invisible":"")},r.a.createElement("label",null,"Date of Creation:",r.a.createElement("input",{name:"dateOfCreation",type:"checkbox",checked:this.props.dateOfCreation,onChange:this.props.dateOfCreationHandler})),r.a.createElement("label",null,"Date of Recording:",r.a.createElement("input",{name:"dateOfRecording",type:"checkbox",checked:this.props.dateOfRecording,onChange:this.props.dateOfRecordingHandler})),r.a.createElement("label",null,"Status:",r.a.createElement("input",{name:"status",type:"checkbox",checked:this.props.status,onChange:this.props.statusHandler})),r.a.createElement("label",null,"Transaction type:",r.a.createElement("input",{name:"transactionType",type:"checkbox",checked:this.props.transactionType,onChange:this.props.transactionTypeHandler})),r.a.createElement("label",null,"Business Partner:",r.a.createElement("input",{name:"businessPartner",type:"checkbox",checked:this.props.businessPartner,onChange:this.props.businessPartnerHandler})),r.a.createElement("label",null,"Business Partner Location:",r.a.createElement("input",{name:"businessPartnerLocation",type:"checkbox",checked:this.props.businessPartnerLocation,onChange:this.props.businessPartnerLocationHandler})),r.a.createElement("label",null,"Year:",r.a.createElement("input",{name:"year",type:"checkbox",checked:this.props.year,onChange:this.props.yearHandler})))}}]),t}(n.Component),N=Object(y.b)(function(e){return{toggle:e.toggle,dateOfCreation:e.dateOfCreation,dateOfRecording:e.dateOfRecording,status:e.status,transactionType:e.transactionType,businessPartner:e.businessPartner,businessPartnerLocation:e.businessPartnerLocation,year:e.year}},function(e){return{dateOfCreationHandler:function(){return e({type:"DATE_OF_CREAT"})},dateOfRecordingHandler:function(){return e({type:"DATE_OF_RECORD"})},statusHandler:function(){return e({type:"STATUS"})},transactionTypeHandler:function(){return e({type:"TRANSACTION_TYPE"})},businessPartnerHandler:function(){return e({type:"BUSINESS_PARTNER"})},businessPartnerLocationHandler:function(){return e({type:"BUSINESS_PARTNER_LOC"})},yearHandler:function(){return e({type:"YEAR"})}}})(T),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"table-settings-button"+(this.props.toggle?"":" close"),onClick:this.props.toggleHandler},this.props.toggle?"Open table settings":"Close table settings")}}]),t}(n.Component),j=Object(y.b)(function(e){return{toggle:e.toggle}},function(e){return{toggleHandler:function(){return e({type:"TOGGLE"})}}})(C),R=void 0,S=function(e){var t,a=e.document.dateOfCreation.slice(0,4),n=e.document.dateOfCreation.slice(5,7),s="",i="",c=e.document.dateOfCreation.slice(5,7);n.startsWith("0")&&(t=n.slice(1,3)),Object.entries({1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"Decmber"}).map(function(e){if(e[0]===t)return s=e[1]});var o=e.document.dateOfCreation.slice(0,10),l=new Date(o).getDay();return Object.entries({0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}).map(function(e){if(e[0]===l)return i=e[1]}),r.a.createElement("div",{className:"document-details-wrapper"},r.a.createElement("div",{className:"status-wrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"Transaction Type: ",e.document.transactionType),r.a.createElement("p",null,"Date Of Creation: ",i,", ",s," ",c,", ",a," ")),r.a.createElement("div",null,r.a.createElement("p",null,"Business Partner ",e.document.businessPartner.name),r.a.createElement("p",null,e.document.businessPartner.city),r.a.createElement("p",null,e.document.businessPartner.address)),r.a.createElement("div",null,"Status: ",e.document.status)),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("input",{className:"price"+(!0===R.state.transformed?" transformed":""),type:"text",placeholder:!0===R.state.transformed?"Search...":"",maxLength:"20",value:R.state.search,required:!0,onChange:R.updatedSearch.bind(R)})))},k=a(17),_=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=2;this.props.data.length>1&&(t=Math.ceil(this.props.data.length/10));var a=10*this.props.currentPage,n=a-10,s=k.slice(n,a),i=s.map(function(e){return r.a.createElement(g,{key:e._id,row:e})}),c=s.filter(function(t){return t._id===e.props.documentId}).map(function(e){return console.log(e),r.a.createElement(S,{key:e._id,document:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"documents-wrapper"+(this.props.documentsDisplay?"":" invisible")},r.a.createElement(P,{maxPages:t}),r.a.createElement(N,null),r.a.createElement(j,null),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"head"},r.a.createElement("th",{className:this.props.dateOfCreation?"":"invisible"},r.a.createElement("button",{onClick:function(){return e.props.sortByStringHandler("dateOfCreation")}},"Date of Creation")),r.a.createElement("th",{className:this.props.dateOfRecording?"":"invisible"},r.a.createElement("button",{onClick:function(){return e.props.sortByStringHandler("dateOfRecording")}},"Date of Recording")),r.a.createElement("th",{className:this.props.status?"":"invisible"},r.a.createElement("button",{onClick:function(){return e.props.sortByStringHandler("status")}},"Status")),r.a.createElement("th",{className:this.props.transactionType?"":"invisible"},r.a.createElement("button",{onClick:function(){return e.props.sortByStringHandler("transactionType")}},"Transaction Type")),r.a.createElement("th",{className:this.props.businessPartner?"":"invisible"},"Business Partner"),r.a.createElement("th",{className:this.props.businessPartnerLocation?"":"invisible"},"Business Partner Location"),r.a.createElement("th",{className:this.props.year?"":"invisible"},"Year"))),r.a.createElement("tbody",null,i))),r.a.createElement("div",{className:"document-wrapper"},r.a.createElement("div",null,this.props.documentId,c)))}}]),t}(n.Component),D=Object(y.b)(function(e){return{currentPage:e.currentPage,dateOfCreation:e.dateOfCreation,dateOfRecording:e.dateOfRecording,status:e.status,transactionType:e.transactionType,businessPartner:e.businessPartner,businessPartnerLocation:e.businessPartnerLocation,year:e.year,documentsDisplay:e.documentsDisplay,documentId:e.documentId}},null)(_),A=function(){return r.a.createElement("div",{className:"about-route"},r.a.createElement("h1",null,"About the Application"),r.a.createElement("p",null,r.a.createElement("em",null,"Warehouse Operations")," is a demo front end application which provides a UI for displaying and managing receipt and delivery documents."))},H=function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",{className:"text-jumbo text-ginormous"},"Oops!"),r.a.createElement("h2",null,"We can't seem to find the page you're looking for."),r.a.createElement("h6",null,"Error code: 404"))},I=function(){return r.a.createElement("div",{className:"container-fluid footer-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"\xa9 Copyright 2019 The Dining Room | All Right Reserved.")))},w=a(31),x=a.n(w),L=(a(46),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={directionName:{name:"asc"},documents:k},a.sortByStringHandler=function(e){a.setState({documents:k.sort(function(t,n){var r="asc"===a.state.directionName[e];return t[e]<n[e]?r?-1:1:t[e]>n[e]?r?1:-1:0}),directionName:Object(c.a)({},e,"asc"===a.state.directionName[e]?"desc":"asc")})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{basename:"/Warehouse-operations/"},r.a.createElement("header",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"cover-wrapper"},r.a.createElement("img",{src:x.a,alt:"warehouse"}))))),r.a.createElement("main",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(E,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{className:"home-route",path:"/",exact:!0,strict:!0,component:h}),r.a.createElement(b.a,{className:"documents-route",path:"/documents",exact:!0,strict:!0,render:function(t){return r.a.createElement(D,Object.assign({data:e.state.documents,sortByStringHandler:e.sortByStringHandler},t))}}),r.a.createElement(b.a,{className:"about-route",path:"/about",exact:!0,strict:!0,component:A}),r.a.createElement(b.a,{className:"not-found",component:H})))))),r.a.createElement("footer",null,r.a.createElement(I,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(23),Z=a(2),U={currentPage:0,maxPages:"",toggle:!0,dateOfCreation:!0,dateOfRecording:!0,status:!0,transactionType:!0,businessPartner:!0,businessPartnerLocation:!0,year:!0,documentsDisplay:!0,documentId:null,documentDetailsDisplay:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_PAGE":return Object(Z.a)({},e,{currentPage:1});case"SET_CURRENT_PAGE":return Object(Z.a)({},e,{currentPage:parseInt(t.number)});case"NEXT_PAGE":return e.currentPage===t.maxPages?Object(Z.a)({},e,{currentPage:parseInt(t.maxPages)}):Object(Z.a)({},e,{currentPage:parseInt(e.currentPage+1)});case"PREVIOUS_PAGE":return e.currentPage<=1?Object(Z.a)({},e,{currentPage:1}):Object(Z.a)({},e,{currentPage:parseInt(e.currentPage-1)});case"TOGGLE":return Object(Z.a)({},e,{toggle:!e.toggle});case"DATE_OF_CREAT":return Object(Z.a)({},e,{dateOfCreation:!e.dateOfCreation});case"DATE_OF_RECORD":return Object(Z.a)({},e,{dateOfRecording:!e.dateOfRecording});case"STATUS":return Object(Z.a)({},e,{status:!e.status});case"TRANSACTION_TYPE":return Object(Z.a)({},e,{transactionType:!e.transactionType});case"BUSINESS_PARTNER":return Object(Z.a)({},e,{businessPartner:!e.businessPartner});case"BUSINESS_PARTNER_LOC":return Object(Z.a)({},e,{businessPartnerLocation:!e.businessPartnerLocation});case"YEAR":return Object(Z.a)({},e,{year:!e.year});case"DOCUMENTS_DISPLAY":return Object(Z.a)({},e,{documentsDisplay:!0});case"DOCUMENT_DETAILS_DISPLAY":return Object(Z.a)({},e,{documentsDisplay:!1,documentId:parseInt(t.documentId),documentDetailsDisplay:!0});default:return e}},G=Object(B.b)(M);i.a.render(r.a.createElement(y.a,{store:G},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.c2d3ec40.chunk.js.map