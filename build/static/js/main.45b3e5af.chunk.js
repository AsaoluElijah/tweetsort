(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n(15),c=n.n(a),l=n(3),i=function(e){return Object(r.jsxs)("div",{className:"interactables",children:["@",Object(r.jsx)("input",{className:"queryBar",value:e.query,onChange:e.handleQueryChange,onKeyPress:function(t){"Enter"===t.key&&(console.log("Enter!"),e.queryTweets())}}),Object(r.jsx)("div",{className:"interactables",children:Object(r.jsx)("button",{onClick:e.queryTweets,type:"submit",children:"Get Tweets"})})]})},o=n(17),u=function(e){var t=e.tweets;if(0===t.length)return null;var n=10*e.page;return t.slice(n-10,n).map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o.a,{tweetId:e.id_str}),Object(r.jsx)("br",{})]},e.id)}))},j=function(e){return!0===e.loading?Object(r.jsx)("div",{id:"loading",children:Object(r.jsx)("img",{src:"loading.gif",alt:"loading symbol",width:"100",height:"25"})}):null},h=function(e){return Object(r.jsx)("form",{className:"interactables",children:Object(r.jsxs)("label",{children:["Sort by",Object(r.jsxs)("select",{value:e.QueryType,onChange:e.handleQueryTypeChange,children:[Object(r.jsx)("option",{value:"favorites",children:"Likes"}),Object(r.jsx)("option",{value:"retweets",children:"Reach"}),Object(r.jsx)("option",{value:"date",children:"Date"})]})]})})},d=function(e){return Object(r.jsx)("form",{className:"interactables",children:Object(r.jsxs)("label",{children:["In",Object(r.jsxs)("select",{value:e.queryOrder,onChange:e.handleQueryOrderChange,children:[Object(r.jsx)("option",{value:"asc",children:"Ascending"}),Object(r.jsx)("option",{value:"desc",children:"Descending"})]}),"order"]})})},b=function(e){return 0===e.tweetsLength?null:Object(r.jsxs)("div",{className:"pagers",children:[Object(r.jsx)("button",{onClick:e.handlePageDown,type:"submit",class:"interactables",children:"Previous Page"}),e.page,Object(r.jsx)("button",{onClick:e.handlePageUp,type:"submit",class:"interactables",children:"Next Page"})]})},g=function(e){return 0===e.tweetsLength?Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Welcome to this sorting tool!"}),Object(r.jsx)("p",{children:"Type in a twitter username (the one with the '@' before it) to get up to ~3,200 of an account's most recent tweets. You can sort their tweets by Date, Likes, or Retweets, and choose either ascending or descending order."}),Object(r.jsx)("p",{children:"A loading symbol will show while the tweets are being fetched. If this area is empty (not even this welcome message) it means the tweets are being rendered :)"}),Object(r.jsxs)("p",{children:["If you enjoy this little tool, follow me ",Object(r.jsx)("a",{href:"https://twitter.com/averywlittle",target:"_blank",rel:"noreferrer",children:"@averywlittle"}),"."]}),Object(r.jsxs)("p",{children:["The code is available ",Object(r.jsx)("a",{href:"https://github.com/averywlittle/tweetsort",target:"_blank",rel:"noreferrer",children:"here"}),"."]})]}):Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[e.tweetsLength," tweets loaded! Showing page ",e.page," of ",e.maxPage,"."]})})},O=n(16),x=n.n(O),p=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(null),o=Object(l.a)(c,2),O=o[0],p=o[1],y=Object(s.useState)([]),f=Object(l.a)(y,2),w=f[0],m=f[1],v=Object(s.useState)(!1),q=Object(l.a)(v,2),P=q[0],C=q[1],T=Object(s.useState)("favorites"),k=Object(l.a)(T,2),S=k[0],D=k[1],L=Object(s.useState)("desc"),N=Object(l.a)(L,2),Q=N[0],I=N[1],R=Object(s.useState)(1),E=Object(l.a)(R,2),_=E[0],A=E[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"tweetsort"}),Object(r.jsx)(h,{queryType:S,handleQueryTypeChange:function(e){e.preventDefault(),D(e.target.value)}}),Object(r.jsx)(d,{queryOrder:Q,handleQueryOrderChange:function(e){e.preventDefault(),I(e.target.value)}}),Object(r.jsx)(i,{query:n,handleQueryChange:function(e){a(e.target.value)},queryTweets:function(){if(console.log("query",n),n.length>0){C(!0);var e={query:n,queryType:S,queryOrder:Q};x.a.post("/api/query/",e).then((function(e){console.log(e.data.user),console.log("tweets returned",e.data.tweets.length),p(e.data.user),a(O.screen_name),m(e.data.tweets),A(1),C(!1)})).catch((function(e){return console.log("POST ERROR",e)}))}}}),Object(r.jsx)(j,{loading:P}),Object(r.jsx)(g,{tweetsLength:w.length,page:_,maxPage:Math.ceil(w.length/10)}),Object(r.jsx)(u,{tweets:w,page:_}),Object(r.jsx)(b,{page:_,handlePageUp:function(e){e.preventDefault(),0!==w.length&&(_<=Math.ceil(w.length/10)?A(_+1):console.log("Page maximum"))},handlePageDown:function(e){e.preventDefault(),0!==w.length&&(1!==_?A(_-1):console.log("Page minimum"))},tweetsLength:w.length})]})};n(41);c.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.45b3e5af.chunk.js.map