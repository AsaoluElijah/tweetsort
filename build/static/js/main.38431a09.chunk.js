(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(15),a=n.n(s),u=n(3),j=function(e){return Object(c.jsxs)("div",{children:["@",Object(c.jsx)("input",{value:e.query,onChange:e.handleQueryChange}),Object(c.jsx)("button",{onClick:e.queryTweets,type:"submit",children:"Get Tweets"})]})},i=n(17),l=function(e){var t=e.tweets;return 0===t.length&&console.log("empty tweets"),0===t.length?null:t.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(i.a,{tweetId:e.id,crossorigin:"anonymous"}),e.text,Object(c.jsxs)("p",{children:["Likes: ",e.favorite_count]}),Object(c.jsxs)("p",{children:["Retweets: ",e.retweet_count]}),Object(c.jsx)("br",{})]},e.id)}))},o=function(e){return!0===e.loading?Object(c.jsx)("div",{id:"loading",children:Object(c.jsx)("img",{src:"loading.gif",alt:"loading symbol",width:"100",height:"25"})}):null},d=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("label",{children:["Sort by:",Object(c.jsxs)("select",{value:e.QueryType,onChange:e.handleQueryTypeChange,children:[Object(c.jsx)("option",{value:"favorites",children:"Likes"}),Object(c.jsx)("option",{value:"retweets",children:"Reach"}),Object(c.jsx)("option",{value:"date",children:"Date"})]})]})})},b=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("label",{children:["In order:",Object(c.jsxs)("select",{value:e.queryOrder,onChange:e.handleQueryOrderChange,children:[Object(c.jsx)("option",{value:"asc",children:"Ascending"}),Object(c.jsx)("option",{value:"desc",children:"Descending"})]})]})})},O=n(16),h=n.n(O),g=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(null),i=Object(u.a)(a,2),O=(i[0],i[1]),g=Object(r.useState)([]),x=Object(u.a)(g,2),y=x[0],p=x[1],v=Object(r.useState)([]),f=Object(u.a)(v,2),w=f[0],q=f[1],m=Object(r.useState)(!1),C=Object(u.a)(m,2),S=C[0],T=C[1],Q=Object(r.useState)("favorites"),k=Object(u.a)(Q,2),D=k[0],I=k[1],J=Object(r.useState)("desc"),L=Object(u.a)(J,2),R=L[0],_=L[1],A=Object(r.useState)(1),B=Object(u.a)(A,2);B[0],B[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"tweetsort"}),Object(c.jsx)(d,{queryType:D,handleQueryTypeChange:function(e){e.preventDefault(),I(e.target.value)}}),Object(c.jsx)(b,{queryOrder:R,handleQueryOrderChange:function(e){e.preventDefault(),_(e.target.value)}}),Object(c.jsx)(j,{query:n,handleQueryChange:function(e){s(e.target.value)},queryTweets:function(){console.log("query",n),T(!0);var e={query:n,queryType:D,queryOrder:R};h.a.post("/api/query/",e).then((function(e){console.log(e.data.user),console.log("tweets returned",e.data.tweets.length),O(e.data.user),p(e.data.tweets);var t=y.slice(10);q(t),console.log(w),T(!1)}))}}),Object(c.jsx)(o,{loading:S}),Object(c.jsx)(l,{tweets:y})]})};n(41);a.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.38431a09.chunk.js.map