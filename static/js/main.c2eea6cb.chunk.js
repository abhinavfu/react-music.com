(this["webpackJsonpreact-music.com"]=this["webpackJsonpreact-music.com"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},30:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t.n(s),a=t(15),n=t.n(a),r=(t(22),t(4)),l=(t(23),t(3)),j=t(0);var d=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)([]),d=Object(r.a)(n,2),o=d[0],h=d[1],b=Object(s.useState)("2849661"),m=Object(r.a)(b,2),u=m[0],O=m[1],x=Object(s.useState)(0),p=Object(r.a)(x,2),v=p[0],g=p[1],f=Object(s.useState)(10),w=Object(r.a)(f,2),N=w[0],y=(w[1],Object(s.useState)("popularity")),A=Object(r.a)(y,2),z=A[0],_=A[1],S=window.location.href,C="".concat(S).split("/"),k=C[6].split("%20").filter((function(e){return""!==e}));k=k.join(" ");var M=C[5],E=C[7];Object(s.useEffect)((function(){O(E)}),[E]);var H=N;Object(s.useEffect)((function(){var e=!0;return fetch("https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=".concat(M,"&per_page=").concat(H,"&page=").concat(1,"&sort=").concat(z),{method:"GET",headers:{"X-RapidAPI-Key":"0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf","X-RapidAPI-Host":"genius-song-lyrics1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(c){if(e){var t=c.songs;h(t)}})).catch((function(e){return console.error(e)})),function(){e=!1}}),[M,1,H,z]),Object(s.useEffect)((function(){var e=!0;return fetch("https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=".concat(u),{method:"GET",headers:{"X-RapidAPI-Key":"0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf","X-RapidAPI-Host":"genius-song-lyrics1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(c){if(e){var t=c.song;a(t)}})).catch((function(e){return console.error(e)})),function(){e=!1}}),[u]);var T=[{title:t.title,id:t.id,artist:t.artist_names,image:t.song_art_image_url}],F=Object(s.useState)(!0),I=Object(r.a)(F,2),P=I[0],R=I[1];Object(s.useEffect)((function(){"".concat(k).length>15?R(!1):R(!0)}),[R,k]),Object(s.useEffect)((function(){var e=v;e%2!==0&&_("title"),e%2===0&&_("popularity")}),[_,v]);var B=Object(s.useState)(0),L=Object(r.a)(B,2),V=L[0],G=L[1],X=0;function D(e,c){e===c&&(X=0,e=0),e<0&&(X=c-1,e=c-1)}function W(e){D(X=X+e-1,10)}return Object(s.useEffect)((function(){O(E)}),[E]),D(X),Object(j.jsx)(i.a.Fragment,{children:T.map((function(e){return Object(j.jsxs)("div",{id:"songSection",style:{backgroundImage:"url(".concat(e.image,")")},children:[Object(j.jsx)("div",{className:"note",children:Object(j.jsx)("p",{children:"Note: Don't have access to play music."})}),Object(j.jsxs)("div",{className:"song-box",children:[Object(j.jsxs)("div",{className:"music-panel",children:[Object(j.jsxs)("div",{className:"song-img",children:[Object(j.jsxs)("div",{className:"songtext",children:[Object(j.jsx)("p",{children:e.title}),Object(j.jsx)("p",{children:e.artist})]}),Object(j.jsx)("img",{src:e.image,alt:"album art"})]}),Object(j.jsx)("div",{className:"musicbar",children:Object(j.jsx)("div",{id:"pbar",className:"progressbar"})}),Object(j.jsxs)("div",{className:"music-btn",children:[Object(j.jsx)("div",{onClick:function(){return g(v+1)},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-shuffle",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{fillRule:"evenodd",d:"M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"}),Object(j.jsx)("path",{d:"M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"})]})}),Object(j.jsx)("div",{onClick:function(){return W(-1)},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-skip-backward-circle",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(j.jsx)("path",{d:"M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z"})]})}),Object(j.jsx)("div",{onClick:function(){return G(V+1)},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-play-circle",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(j.jsx)("path",{d:"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"})]})}),Object(j.jsx)("div",{onClick:function(){return W(1)},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-skip-forward-circle",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(j.jsx)("path",{d:"M4.271 5.055a.5.5 0 0 1 .52.038L7.5 7.028V5.5a.5.5 0 0 1 .79-.407L11 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935a.5.5 0 0 1-.79-.407V8.972l-2.71 1.935A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445z"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-repeat",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),Object(j.jsx)("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]})})]})]}),Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("h2",{children:P?Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 23",children:Object(j.jsx)("text",{className:"cls-1",transform:"translate(0 17)",children:Object(j.jsx)(l.b,{to:"/react-music.com/artist/".concat(C[5],"/").concat(C[6]),children:Object(j.jsx)("tspan",{className:"cls-2",x:"0",y:"0",children:k})})})}):Object(j.jsx)(l.b,{to:"/react-music.com/artist",children:Object(j.jsx)("p",{children:k})})}),Object(j.jsx)("p",{children:"Verified Artist"}),Object(j.jsx)("div",{children:o.map((function(e,c){return Object(j.jsx)(l.b,{to:"/react-music.com/listen/".concat(e.primary_artist.id,"/").concat(e.primary_artist.name,"/").concat(e.id),children:Object(j.jsxs)("div",{className:"songslist b-radius",children:[Object(j.jsx)("div",{className:"song-card b-radius",children:Object(j.jsx)("img",{src:e.song_art_image_thumbnail_url,alt:"Song Thumbnail"})}),Object(j.jsxs)("div",{className:"songdetail",children:[Object(j.jsx)("p",{children:e.full_title}),Object(j.jsxs)("p",{children:["Released Date : ",e.release_date_for_display]})]})]},c)})}))})]})]})]})}))})};var o=function(e){var c=Object(s.useState)([]),t=Object(r.a)(c,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var c=!0;return fetch("https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=".concat(e.data,"&per_page=").concat(e.per_page,"&page=").concat(e.page,"&sort=").concat(e.sort),{method:"GET",headers:{"X-RapidAPI-Key":"0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf","X-RapidAPI-Host":"genius-song-lyrics1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){if(c){var t=e.songs;n(t)}})).catch((function(e){return console.error(e)})),function(){c=!1}}),[e.data,e.sort,e.page,e.per_page]),Object(j.jsx)(i.a.Fragment,{children:a.map((function(e,c){return Object(j.jsx)("div",{className:"music-card-content",children:Object(j.jsxs)(l.b,{to:"/react-music.com/listen/".concat(e.primary_artist.id,"/").concat(e.primary_artist.name,"/").concat(e.id),children:[Object(j.jsx)("div",{className:"music-card b-radius c-hover",children:Object(j.jsx)("img",{className:"c-hover",src:e.song_art_image_thumbnail_url,alt:"image of "+e.primary_artist.name+"album track"})}),Object(j.jsx)("p",{children:e.full_title}),Object(j.jsx)("p",{children:e.primary_artist.name})]})},c)}))})};var h=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{id:"browseSection",children:[Object(j.jsx)("h1",{children:"Browse"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"div50",children:[Object(j.jsx)("p",{children:"NEW IN POP"}),Object(j.jsx)("p",{children:"Today's Hits rising star"}),Object(j.jsx)("p",{children:"The Weeknd"}),Object(j.jsx)("div",{className:"c-img b-radius c-hover",children:Object(j.jsx)("img",{src:"https://www.koimoi.com/wp-content/new-galleries/2020/11/the-weeknd-calls-grammys-2021-corrupt-0001.jpg",alt:"The Weeknd in grammy 2021"})})]}),Object(j.jsxs)("div",{className:"div50",children:[Object(j.jsx)("p",{children:"LATEST UPDATED"}),Object(j.jsx)("p",{children:"Attends BRIT Awards 2021"}),Object(j.jsx)("p",{children:"Olivia Rodrigo"}),Object(j.jsx)("div",{className:"c-img b-radius c-hover",children:Object(j.jsx)("img",{src:"https://assets.teenvogue.com/photos/609c026e7165b07169ad92f8/16:9/w_2560%2Cc_limit/GettyImages-1317474859.jpg",alt:"Olivia Rodrigo in BRIT Awards 2021"})})]})]}),[{name:"Ariana Grande",id:26507},{name:"Camila Cabello",id:609667},{name:"Atif Aslam",id:357955},{name:"Harry Styles",id:22457},{name:"BTS",id:70113}].map((function(e,c){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)(l.b,{to:"/react-music.com/artist/".concat(e.id,"/").concat(e.name),children:Object(j.jsx)("p",{className:"seeAll",children:"See All"})}),Object(j.jsx)(o,{data:e.id,sort:"popularity",page:1,per_page:5})]},c)}))]})})};var b=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{id:"radioSection",children:[Object(j.jsx)("h1",{children:"Radio"}),Object(j.jsx)("div",{className:"container",children:[{p1:"The Hot 100",p2:"Songs you know and love",p3:"LIVE - 10:00-12:00 PM",p4:"Explore the richand vibrant content",img:"https://i.scdn.co/image/ab67706c0000bebb3bd5501a335b265807df34db"},{p1:"Pop Hits",p2:"The pop music that matters",p3:"LIVE - 12:30-14:30 PM",p4:"Playing current and classics",img:"https://media.istockphoto.com/vectors/radio-music-colorful-neon-sign-with-megaphone-icon-and-musical-notes-vector-id1201351220?b=1&k=6&m=1201351220&s=170667a&w=0&h=nLtljGJA2c3cokXVPUzjWFGjTEIIr9SqiEgewnvdEi4="},{p1:"Today's Hits",p2:"Where it sounds like home",p3:"LIVE- 15:00-18:00 PM",p4:"Explore the content",img:"https://cdn-profiles.tunein.com/s242677/images/logod.jpg?t=2"}].map((function(e,c){return Object(j.jsxs)("div",{className:"div33",children:[Object(j.jsx)("p",{children:e.p1}),Object(j.jsx)("p",{children:e.p2}),Object(j.jsxs)("div",{className:"r-img b-radius c-hover",children:[Object(j.jsx)("img",{src:e.img,alt:"radio live"}),Object(j.jsxs)("div",{className:"div-blur",children:[Object(j.jsx)("p",{children:e.p3}),Object(j.jsx)("p",{children:e.p4})]})]})]},c)}))})]})})};var m=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(""),d=Object(r.a)(n,2),o=d[0],h=d[1],b=Object(s.useState)(!1),m=Object(r.a)(b,2),u=m[0],O=m[1];return Object(s.useEffect)((function(){var e=!0;return fetch("https://genius-song-lyrics1.p.rapidapi.com/search/?q=".concat(o,"&per_page=10&page=1"),{method:"GET",headers:{"X-RapidAPI-Key":"0da30ee1fcmshe39d11c775693a5p1bb17ejsnad7cf9580ebf","X-RapidAPI-Host":"genius-song-lyrics1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(c){if(e){var t=c.hits;a(t)}})).catch((function(e){return console.error(e)})),function(){e=!1}}),[o]),Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{id:"searchSection",className:"searchArea",children:[Object(j.jsx)("h1",{children:"Feel Free to Search Here"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:"Search"}),Object(j.jsx)("input",{type:"search",name:"search",id:"search",placeholder:"Search",onChange:function(e){var c=e.target.value,t="".concat(c).split(" ").filter((function(e){return""!==e}));t=t.join("%20"),h(t)},onChangeCapture:function(){return O(!0)}}),u?Object(j.jsx)("h3",{children:"Top 10 Search results"}):null,u?Object(j.jsx)("p",{children:"See All"}):null,t.map((function(e,c){return Object(j.jsx)("div",{className:"music-card-content",children:Object(j.jsxs)(l.b,{to:"/react-music.com/listen/".concat(e.result.primary_artist.id,"/").concat(e.result.primary_artist.name,"/").concat(e.result.id),children:[Object(j.jsx)("div",{className:"music-card b-radius c-hover",children:Object(j.jsx)("img",{className:"c-hover",src:e.result.header_image_url,alt:"image of "+e.result.primary_artist.name+"album track"})}),Object(j.jsx)("p",{children:e.result.full_title}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:e.result.primary_artist.image_url,children:e.result.primary_artist.name})})]})},c)}))]})]})})};var u=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{id:"footer",children:[Object(j.jsxs)("ul",{id:"bottommenu",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"abhinavfu.com",children:"Privacy "})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"abhinavfu.com",children:"Contact Us"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"abhinavfu.com",children:"About Us"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"abhinavfu.com",children:"Feedback"})})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{id:"copyright",children:"Copyright \xa9 Music.com 2021"})]})})};var O=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{id:"logoSection",children:[Object(j.jsxs)("div",{className:"logobox",children:[Object(j.jsx)("h1",{children:"Music.com"}),Object(j.jsx)("h3",{children:"Discover new music every day."}),Object(j.jsx)("p",{children:"Get playlists and albums inspired by the artists and genres you're listening to."}),Object(j.jsx)("button",{children:"Try It Free"})]}),Object(j.jsxs)("div",{id:"c-pos",children:[Object(j.jsx)("div",{className:"c-circle circle1"}),Object(j.jsx)("div",{className:"c-circle circle2"}),Object(j.jsx)("div",{className:"c-circle circle3"})]})]})})},x=t(2);var p=function(){var e=window.location.href,c="".concat(e).split("/"),t=c[6].split("%20").filter((function(e){return""!==e}));t=t.join(" ");var a=c[5];":id"===a&&(a=55903,t="Zara Larsson");var n=Object(s.useState)(10),l=Object(r.a)(n,2),d=l[0],h=l[1],b=[{name:t,id:a}],m=d;return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{id:"browseSection",children:[Object(j.jsx)("h1",{children:"Artist"}),b.map((function(e,c){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("p",{className:"seeAll",onClick:function(){return h(d+10)},children:"See All"}),Object(j.jsx)(o,{data:e.id,sort:"popularity",page:1,per_page:m})]},c)}))]})})};var v=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],a=c[1];function n(){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/react-music.com/listen/16775/Sia/2849661",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"nav-icon","aria-hidden":"true",children:Object(j.jsx)("path",{d:"M12 20c4.376 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C7.624 4 4 7.624 4 12c0 4.369 3.631 8 8 8zm0-1.333A6.634 6.634 0 015.341 12a6.628 6.628 0 016.651-6.667A6.653 6.653 0 0118.667 12 6.636 6.636 0 0112 18.667zm-1.467-3.6l4.463-2.636a.483.483 0 000-.839L10.533 8.95c-.337-.204-.784-.047-.784.33v5.458c0 .377.416.55.784.33z",fillRule:"nonzero",fillOpacity:".95"})}),"Listen Now"]})})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/react-music.com",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"nav-icon","aria-hidden":"true",children:Object(j.jsx)("path",{d:"M9.92 11.354c.966 0 1.453-.487 1.453-1.49v-3.4c0-1.004-.487-1.483-1.453-1.483H6.452C5.487 4.981 5 5.46 5 6.464v3.4c0 1.003.487 1.49 1.452 1.49H9.92zm7.628 0c.965 0 1.452-.487 1.452-1.49v-3.4c0-1.004-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.479-1.46 1.483v3.4c0 1.003.486 1.49 1.46 1.49h3.46zm-7.65-1.073h-3.43c-.266 0-.396-.137-.396-.418v-3.4c0-.273.13-.41.396-.41h3.43c.265 0 .402.137.402.41v3.4c0 .281-.137.418-.403.418zm7.634 0h-3.43c-.273 0-.402-.137-.402-.418v-3.4c0-.273.129-.41.403-.41h3.43c.265 0 .395.137.395.41v3.4c0 .281-.13.418-.396.418zm-7.612 8.7c.966 0 1.453-.48 1.453-1.483v-3.407c0-.996-.487-1.483-1.453-1.483H6.452c-.965 0-1.452.487-1.452 1.483v3.407c0 1.004.487 1.483 1.452 1.483H9.92zm7.628 0c.965 0 1.452-.48 1.452-1.483v-3.407c0-.996-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.487-1.46 1.483v3.407c0 1.004.486 1.483 1.46 1.483h3.46zm-7.65-1.072h-3.43c-.266 0-.396-.137-.396-.41v-3.4c0-.282.13-.418.396-.418h3.43c.265 0 .402.136.402.418v3.4c0 .273-.137.41-.403.41zm7.634 0h-3.43c-.273 0-.402-.137-.402-.41v-3.4c0-.282.129-.418.403-.418h3.43c.265 0 .395.136.395.418v3.4c0 .273-.13.41-.396.41z",fillRule:"nonzero",fillOpacity:".95"})}),"Browse"]})})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/react-music.com/radio",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"nav-icon","aria-hidden":"true",children:Object(j.jsx)("path",{d:"M19.359 18.57C21.033 16.818 22 14.461 22 11.89s-.967-4.93-2.641-6.68c-.276-.292-.653-.26-.868-.023-.222.246-.176.591.085.868 1.466 1.535 2.272 3.593 2.272 5.835 0 2.241-.806 4.3-2.272 5.835-.261.268-.307.621-.085.86.215.245.592.276.868-.016zm-13.85.014c.222-.238.176-.59-.085-.86-1.474-1.535-2.272-3.593-2.272-5.834 0-2.242.798-4.3 2.272-5.835.261-.277.307-.622.085-.868-.215-.238-.592-.269-.868.023C2.967 6.96 2 9.318 2 11.89s.967 4.929 2.641 6.68c.276.29.653.26.868.014zm1.957-1.873c.223-.253.162-.583-.1-.867-.951-1.068-1.473-2.45-1.473-3.954 0-1.505.522-2.887 1.474-3.954.26-.284.322-.614.1-.876-.23-.26-.622-.26-.891.039-1.175 1.274-1.827 2.963-1.827 4.79 0 1.82.652 3.517 1.827 4.784.269.3.66.307.89.038zm9.958-.038c1.175-1.267 1.827-2.964 1.827-4.783 0-1.828-.652-3.517-1.827-4.791-.269-.3-.66-.3-.89-.039-.23.262-.162.592.092.876.96 1.067 1.481 2.449 1.481 3.954 0 1.504-.522 2.886-1.481 3.954-.254.284-.323.614-.092.867.23.269.621.261.89-.038zm-8.061-1.966c.23-.26.13-.568-.092-.883-.415-.522-.63-1.197-.63-1.934 0-.737.215-1.413.63-1.943.222-.307.322-.614.092-.875s-.653-.261-.906.054a4.385 4.385 0 00-.968 2.764 4.38 4.38 0 00.968 2.756c.253.322.675.322.906.061zm6.18-.061a4.38 4.38 0 00.968-2.756 4.385 4.385 0 00-.968-2.764c-.253-.315-.675-.315-.906-.054-.23.261-.138.568.092.875.415.53.63 1.206.63 1.943 0 .737-.215 1.412-.63 1.934-.23.315-.322.622-.092.883s.653.261.906-.061zm-3.547-.967c.96 0 1.789-.814 1.789-1.797s-.83-1.789-1.789-1.789c-.96 0-1.781.806-1.781 1.789 0 .983.821 1.797 1.781 1.797z",fillRule:"nonzero",fillOpacity:".95"})}),"Radio"]})})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/react-music.com/search",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("svg",{width:"24",height:"24",viewBox:"-6 0 24 16",xmlns:"http://www.w3.org/2000/svg",className:"nav-icon",children:Object(j.jsx)("path",{d:"M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 1 1-1.04 1.04l-3.863-3.864a.744.744 0 0 1-.047-.051 6.667 6.667 0 1 1 1.035-1.035zM6.667 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z"})}),"Search"]})})})]}),Object(j.jsxs)("div",{className:"c-app",children:[Object(j.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"music-logo",children:Object(j.jsx)("path",{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm5 4.91v9.69c0 1.822-1.45 2.212-2.36 2.212-.904 0-1.649-.696-1.649-1.583 0-1.068.803-1.515 1.822-1.722l.92-.207c.372-.075.488-.348.488-.638l.009-4.639c0-.323-.15-.439-.514-.356l-5.31 1.077c-.306.05-.397.14-.397.505v6.743c0 1.83-1.474 2.253-2.386 2.253-.919 0-1.623-.705-1.623-1.583 0-1.085.812-1.532 1.78-1.764l.987-.199c.306-.074.43-.314.43-.588V7.21c0-.406.29-.58.622-.646l6.262-1.267c.571-.116.919-.05.919.613z"})}),"Open in App"]})]})}function o(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)("div",{className:"page404",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Page Not Found"}),Object(j.jsx)(l.b,{to:"/react-music.com",children:Object(j.jsx)("button",{children:"Back to Home"})})]})})})}return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsxs)("section",{id:"nav-box",children:[Object(j.jsx)("div",{id:"menu",onClick:function(){return a(!t)},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),Object(j.jsxs)("div",{id:"fixednav",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(l.b,{to:"/react-music.com/about",children:"Music.com"})}),t?Object(j.jsx)("nav",{id:"navtop",children:Object(j.jsx)(n,{})}):null,Object(j.jsx)("nav",{id:"navleft",children:Object(j.jsx)(n,{})})]})]}),Object(j.jsxs)("section",{className:"sectionArea",onClick:function(){return a(!1)},children:[Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/react-music.com/listen",children:Object(j.jsx)(d,{})}),Object(j.jsx)(x.a,{path:"/react-music.com",exact:!0,children:Object(j.jsx)(h,{})}),Object(j.jsx)(x.a,{path:"/react-music.com/radio",children:Object(j.jsx)(b,{})}),Object(j.jsx)(x.a,{path:"/react-music.com/search",children:Object(j.jsx)(m,{})}),Object(j.jsx)(x.a,{path:"/react-music.com/artist",children:Object(j.jsx)(p,{})}),Object(j.jsx)(x.a,{path:"/react-music.com/about",children:Object(j.jsx)(O,{})}),Object(j.jsx)(x.a,{path:"*",children:Object(j.jsx)(o,{})})]}),Object(j.jsx)(u,{})]})]})};var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(v,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(c){var t=c.getCLS,s=c.getFID,i=c.getFCP,a=c.getLCP,n=c.getTTFB;t(e),s(e),i(e),a(e),n(e)}))};n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(g,{})})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.c2eea6cb.chunk.js.map