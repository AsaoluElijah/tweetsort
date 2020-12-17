(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(15),a=n.n(s),l=n(3),i=function(e){return Object(c.jsxs)("div",{children:["@",Object(c.jsx)("input",{value:e.query,onChange:e.handleQueryChange}),Object(c.jsx)("button",{onClick:e.queryTweets,type:"submit",children:"Get Tweets"})]})},o=n(17),j=function(e){var t=e.tweets;if(0===t.length)return null;var n=10*e.page;return t.slice(n-10,n).map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(o.a,{tweetId:e.id_str}),Object(c.jsx)("br",{})]},e.id)}))},u=function(e){return!0===e.loading?Object(c.jsx)("div",{id:"loading",children:Object(c.jsx)("img",{src:"loading.gif",alt:"loading symbol",width:"100",height:"25"})}):null},h=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("label",{children:["Sort by",Object(c.jsxs)("select",{value:e.QueryType,onChange:e.handleQueryTypeChange,children:[Object(c.jsx)("option",{value:"favorites",children:"Likes"}),Object(c.jsx)("option",{value:"retweets",children:"Reach"}),Object(c.jsx)("option",{value:"date",children:"Date"})]})]})})},d=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("label",{children:["In",Object(c.jsxs)("select",{value:e.queryOrder,onChange:e.handleQueryOrderChange,children:[Object(c.jsx)("option",{value:"asc",children:"Ascending"}),Object(c.jsx)("option",{value:"desc",children:"Descending"})]}),"order"]})})},b=function(e){return 0===e.tweetsLength?null:Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:e.handlePageDown,type:"submit",children:"Page Down"}),e.page,Object(c.jsx)("button",{onClick:e.handlePageUp,type:"submit",children:"Page Up"})]})},g=function(e){return 0===e.tweetsLength?Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Welcome to this sorting tool!"}),Object(c.jsx)("p",{children:"Type in a twitter username (the one with the '@' before it) to get an account's most recent tweets, up to 3,200. You can sort their tweets by Date, Likes, or Retweets, and choose either ascending or descending order."}),Object(c.jsx)("p",{children:"A loading symbol will show while the tweets are being fetched. If this area is empty (not even this welcome message) it means the tweets are being rendered :)"}),Object(c.jsxs)("p",{children:["If you enjoy this little tool, follow me ",Object(c.jsx)("a",{href:"https://twitter.com/averywlittle",target:"_blank",children:"@averywlittle"})]})]}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[e.tweetsLength," tweets loaded!"]}),Object(c.jsx)("br",{})]})},O=n(16),x=n.n(O),p=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(null),o=Object(l.a)(a,2),O=(o[0],o[1]),p=Object(r.useState)([]),w=Object(l.a)(p,2),y=w[0],f=w[1],v=Object(r.useState)(!1),m=Object(l.a)(v,2),q=m[0],C=m[1],P=Object(r.useState)("favorites"),D=Object(l.a)(P,2),T=D[0],S=D[1],k=Object(r.useState)("desc"),L=Object(l.a)(k,2),Q=L[0],I=L[1],R=Object(r.useState)(1),U=Object(l.a)(R,2),A=U[0],E=U[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"tweetsort"}),Object(c.jsx)(h,{queryType:T,handleQueryTypeChange:function(e){e.preventDefault(),S(e.target.value)}}),Object(c.jsx)(d,{queryOrder:Q,handleQueryOrderChange:function(e){e.preventDefault(),I(e.target.value)}}),Object(c.jsx)(i,{query:n,handleQueryChange:function(e){s(e.target.value)},queryTweets:function(){console.log("query",n),C(!0);var e={query:n,queryType:T,queryOrder:Q};x.a.post("/api/query/",e).then((function(e){console.log(e.data.user),console.log("tweets returned",e.data.tweets.length),O(e.data.user),f(e.data.tweets),C(!1)})).catch((function(e){return console.log("POST ERROR",e)}))}}),Object(c.jsx)(u,{loading:q}),Object(c.jsx)(g,{tweetsLength:y.length}),Object(c.jsx)(j,{tweets:y,page:A}),Object(c.jsx)(b,{page:A,handlePageUp:function(e){e.preventDefault(),0!==y.length&&(A<=Math.ceil(y.length/10)?E(A+1):console.log("Page maximum")),console.log("Page",A)},handlePageDown:function(e){e.preventDefault(),0!==y.length&&(1!==A?E(A-1):console.log("Page minimum")),console.log("Page",A)},tweetsLength:y.length})]})};n(41);a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.38687962.chunk.js.map