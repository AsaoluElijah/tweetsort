(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n(15),c=n.n(s),l=n(3),i=function(e){return Object(r.jsxs)("div",{className:"interactables",children:["@",Object(r.jsx)("input",{className:"queryBar",value:e.query,onChange:e.handleQueryChange,onKeyPress:function(t){"Enter"===t.key&&(console.log("Enter!"),e.queryTweets())}}),Object(r.jsx)("div",{className:"interactables",children:Object(r.jsx)("button",{onClick:e.queryTweets,type:"submit",children:"Get Tweets"})})]})},o=n(17),j=function(e){var t=e.tweets;if(0===t.length)return null;var n=10*e.page;return t.slice(n-10,n).map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o.a,{tweetId:e.id_str}),Object(r.jsx)("br",{})]},e.id)}))},u=function(e){return!0===e.loading?Object(r.jsx)("div",{id:"loading",children:Object(r.jsx)("img",{src:"loading.gif",alt:"loading symbol",width:"100",height:"25"})}):null},h=function(e){return Object(r.jsx)("form",{className:"interactables",children:Object(r.jsxs)("label",{children:["Sort by",Object(r.jsxs)("select",{value:e.QueryType,onChange:e.handleQueryTypeChange,children:[Object(r.jsx)("option",{value:"favorites",children:"Likes"}),Object(r.jsx)("option",{value:"retweets",children:"Reach"}),Object(r.jsx)("option",{value:"date",children:"Date"})]})]})})},d=function(e){return Object(r.jsx)("form",{className:"interactables",children:Object(r.jsxs)("label",{children:["In",Object(r.jsxs)("select",{value:e.queryOrder,onChange:e.handleQueryOrderChange,children:[Object(r.jsx)("option",{value:"asc",children:"Ascending"}),Object(r.jsx)("option",{value:"desc",children:"Descending"})]}),"order"]})})},b=function(e){return 0===e.tweetsLength?null:Object(r.jsxs)("div",{className:"pagers",children:[Object(r.jsx)("button",{onClick:e.handlePageDown,type:"submit",class:"interactables",children:"Page Down"}),e.page,Object(r.jsx)("button",{onClick:e.handlePageUp,type:"submit",class:"interactables",children:"Page Up"})]})},g=function(e){return 0===e.tweetsLength?Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Welcome to this sorting tool!"}),Object(r.jsx)("p",{children:"Type in a twitter username (the one with the '@' before it) to get up to ~3,200 of an account's most recent tweets. You can sort their tweets by Date, Likes, or Retweets, and choose either ascending or descending order."}),Object(r.jsx)("p",{children:"A loading symbol will show while the tweets are being fetched. If this area is empty (not even this welcome message) it means the tweets are being rendered :)"}),Object(r.jsxs)("p",{children:["If you enjoy this little tool, follow me ",Object(r.jsx)("a",{href:"https://twitter.com/averywlittle",target:"_blank",rel:"noreferrer",children:"@averywlittle"}),"."]}),Object(r.jsxs)("p",{children:["The code is available ",Object(r.jsx)("a",{href:"https://github.com/averywlittle/tweetsort",target:"_blank",rel:"noreferrer",children:"here"}),"."]})]}):Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[e.tweetsLength," tweets loaded! Showing page ",e.page," of ",e.maxPage,"."]})})},O=n(16),p=n.n(O),x=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(null),o=Object(l.a)(c,2),O=(o[0],o[1]),x=Object(a.useState)([]),y=Object(l.a)(x,2),f=y[0],w=y[1],m=Object(a.useState)(!1),v=Object(l.a)(m,2),q=v[0],C=v[1],P=Object(a.useState)("favorites"),T=Object(l.a)(P,2),k=T[0],D=T[1],S=Object(a.useState)("desc"),L=Object(l.a)(S,2),Q=L[0],N=L[1],I=Object(a.useState)(1),R=Object(l.a)(I,2),E=R[0],U=R[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"tweetsort"}),Object(r.jsx)(h,{queryType:k,handleQueryTypeChange:function(e){e.preventDefault(),D(e.target.value)}}),Object(r.jsx)(d,{queryOrder:Q,handleQueryOrderChange:function(e){e.preventDefault(),N(e.target.value)}}),Object(r.jsx)(i,{query:n,handleQueryChange:function(e){s(e.target.value)},queryTweets:function(){if(console.log("query",n),n.length>0){C(!0);var e={query:n,queryType:k,queryOrder:Q};p.a.post("/api/query/",e).then((function(e){console.log(e.data.user),console.log("tweets returned",e.data.tweets.length),O(e.data.user),w(e.data.tweets),U(1),C(!1)})).catch((function(e){return console.log("POST ERROR",e)}))}}}),Object(r.jsx)(u,{loading:q}),Object(r.jsx)(g,{tweetsLength:f.length,page:E,maxPage:Math.ceil(f.length/10)}),Object(r.jsx)(j,{tweets:f,page:E}),Object(r.jsx)(b,{page:E,handlePageUp:function(e){e.preventDefault(),0!==f.length&&(E<=Math.ceil(f.length/10)?U(E+1):console.log("Page maximum"))},handlePageDown:function(e){e.preventDefault(),0!==f.length&&(1!==E?U(E-1):console.log("Page minimum"))},tweetsLength:f.length})]})};n(41);c.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.81f67af0.chunk.js.map