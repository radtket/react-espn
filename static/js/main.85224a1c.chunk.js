(this["webpackJsonpreact-espn"]=this["webpackJsonpreact-espn"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),s=a(1),l=a(2);const o=()=>c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 162 40"},c.a.createElement("path",{d:"M52.83 0c-6 0-10 3.17-10.6 7.93-.13 1.1-.26 2.2-.4 3.3h78.52s.14-1.16.26-2.09c.59-4.79-1.45-9.14-8.85-9.14H52.83zM4.91 0L3.53 11.23h35.61L40.51 0zm119.53 0l-1.38 11.23h38.6s.05-.41.22-1.73c.94-7.37-3.81-9.5-8.4-9.5zm-1.91 15.5l-3 24.5h13.32l3-24.49zm25.3 0l-3 24.5h13.31l3-24.49zM3 15.5L0 40h35.6l1.32-10.63h-22.3l.57-4.58h22.28l1.14-9.29zm38.3 0c-1 6.4 2.22 9.29 6.76 9.29h18l-.56 4.59H39.61L38.3 40h29.35c.95-.07 7.55-.25 9.79-5.65.73-1.75 1.38-8 1.56-9.35 1-7.66-4.27-9.49-8.45-9.49zm41.45 0l-3 24.5h13.31l1.87-15.21h16.72c4.74 0 7.29-2.55 7.77-6 .15-1.1.28-2.2.41-3.31z"}));function m(e){if(!e.ok)throw Error(e.statusText);return e}const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mlb",n=e;return"UTA"===e&&(n="UTAH"),"CWS"===e&&(n="CHW"),"https://a.espncdn.com/combiner/i?img=/i/teamlogos/".concat(a.toLowerCase(),"/500/").concat(n.toLowerCase(),".png&h=").concat(t,"&w=").concat(t)},u=e=>Object.entries(e.reduce((e,t)=>{const{Conference:a,League:n,Division:c}=t,r=e;return r["".concat(n||""," ").concat(a||""," ").concat(c)]=r["".concat(n||""," ").concat(a||""," ").concat(c)]||[],r["".concat(n||""," ").concat(a||""," ").concat(c)].push(t),r},{})).sort(),d=e=>!e||!e.length;var E=e=>{let{Name:t,City:a,Key:n,route:r,handleChange:l}=e;return c.a.createElement(s.b,{onClick:()=>l(),to:"/".concat(r,"/teams/").concat(n),style:{display:"block"}},c.a.createElement("img",{src:i(n,24,r),alt:"".concat(t," ").concat(a," Logo")}),c.a.createElement("span",null,c.a.createElement("span",{className:"team-city"},a," "),t))};var h=e=>{let{DivisionName:t,handleChange:a,NumberOfTeamsInRow:n,route:r,TeamsInDivision:s}=e;return c.a.createElement("div",{className:"sports-megamenu__teams--division sports-megamenu__teams--division--".concat(n),key:t},c.a.createElement("h6",null,t),c.a.createElement("nav",null,s.sort((l="City",(e,t)=>e[l]>t[l]?1:t[l]>e[l]?-1:0)).map(e=>{const{TeamID:t}=e;return c.a.createElement(E,Object.assign({key:"".concat(r," ").concat(t)},e,{route:r,handleChange:a}))})));var l};var p=e=>{let{teams:t,route:a,handleChange:n,NumberOfTeamsInRow:r}=e,s=[];return t.reduce((e,t,l)=>{const[o,m]=t,{League:i,Conference:u}=m[0];return s.push(c.a.createElement(h,{key:o,DivisionName:o,handleChange:n,NumberOfTeamsInRow:r,route:a,TeamsInDivision:m})),(l+1)%r===0&&(e.push(c.a.createElement("div",{className:"row",key:i||"".concat(u," ").concat(o)},s)),s=[]),e},[])};var b=e=>{let{Title:t,teams:a,route:r,NotMobile:l,closeMobileMenu:o}=e;const m=Object(n.useRef)(),[i,d]=Object(n.useState)(!1),E=u(a),h=E.length/2,b=e=>{m.current.contains(e.target)||d(!1)},v=()=>{d(!1),o()};return Object(n.useEffect)(()=>(i&&document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}),[i]),c.a.createElement("li",{ref:m,onMouseEnter:()=>l&&d(!0),onMouseLeave:()=>l&&v()},c.a.createElement(s.c,{className:"sports-megamenu__button ".concat(i?"sports-megamenu__button--is-open":""),to:"/".concat(r),onClick:()=>v()},t),i&&c.a.createElement("div",{className:"sports-megamenu"},c.a.createElement("ul",{className:"sports-megamenu__nav"},c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r),onClick:()=>v()},"Home")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/scores"),onClick:()=>v()},"Scores")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/schedule"),onClick:()=>v()},"Schedule")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/standings"),onClick:()=>v()},"Standings")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/stats"),onClick:()=>v()},"Stats")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/news"),onClick:()=>v()},"News")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/teams"),onClick:()=>v()},"Teams"))),c.a.createElement("div",{className:"sports-megamenu__teams sports-megamenu__teams--".concat(h)},c.a.createElement(p,{teams:E,sport:r,route:r,handleChange:v,NumberOfTeamsInRow:h}))))};const v=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}};var g=()=>{const[e,t]=Object(n.useState)(v());return Object(n.useEffect)(()=>{const e=()=>{t(v())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e};const N=e=>{let{SportsArg:t,NotMobile:a,closeMobileMenu:n}=e;return Object.entries(t).map(e=>{const[t,r]=e;return c.a.createElement(b,{Title:t,teams:r,route:t,key:t,NotMobile:a,closeMobileMenu:n})})},y=e=>{let{sports:t}=e;const[a,r]=Object(n.useState)(!1),[l,m]=Object(n.useState)(!1),[i,u]=Object(n.useState)(!1),{width:d}=g();Object(n.useLayoutEffect)(()=>{let e;return()=>{e=Array.from(document.querySelectorAll(".sports-megamenu__button")).some(e=>e.classList.contains("active")),!l&&m(e)}});const E=d>=1023;return c.a.createElement("section",{className:"navbar-primary"},c.a.createElement("div",{className:"global-nav-container"},c.a.createElement("button",{className:"hamburger",type:"button",onClick:()=>u(!i)},c.a.createElement("div",{className:"hamburger__menu"},c.a.createElement("div",{className:"hamburger__menu--bar ".concat(i?"animate":"")}))),c.a.createElement("figure",{className:"navbar-primary__logo"},c.a.createElement(s.b,{to:"/"},c.a.createElement(o,null))),c.a.createElement("nav",{className:"navbar-primary__nav navbar-primary__drawer ".concat(i&&!E?"navbar-primary__nav--drawer-open":"")},c.a.createElement("ul",{className:a&&l&&E?"global-nav__is-hovering":"",onMouseEnter:()=>l&&E&&r(!0),onMouseLeave:()=>l&&E&&r(!a)},c.a.createElement("li",null,c.a.createElement("span",null,"Sports")),c.a.createElement(N,{SportsArg:t,NotMobile:E,closeMobileMenu:()=>{u(!1)}})))))};y.defaultProps={sports:{}};var C=y;var f=e=>{let{sport:t}=e;return c.a.createElement("nav",{className:"navbar-secondary"},c.a.createElement("div",{className:"global-nav-container"},c.a.createElement("ul",null,c.a.createElement("li",{className:"navbar-secondary__logo"},c.a.createElement(s.b,{to:"/".concat(t)},c.a.createElement("figure",null,c.a.createElement("img",{src:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/".concat(t,".png?w=100&h=100&transparent=true"),alt:"".concat(t," logo")})),c.a.createElement("figcaption",null,t))),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(t)},"Home")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(t,"/standings")},"Standings")))))};var _=e=>{let{City:t,Name:a,WikipediaLogoUrl:n,sport:r,Key:l}=e;return c.a.createElement("nav",{className:"navbar-secondary"},c.a.createElement("div",{className:"clubhouse-header"},c.a.createElement("div",{className:"clubhouse-header__container"},c.a.createElement("figure",{className:"clubhouse-header__logo"},c.a.createElement("img",{src:n,alt:""})),c.a.createElement("figcaption",{className:"clubhouse-header__content"},c.a.createElement("h1",{className:"clubhouse-header__name"},c.a.createElement("span",{className:"clubhouse-header__name--city"},t),a),c.a.createElement("div",{className:"clubhouse-header__details"},c.a.createElement("button",{className:"btn clubhouse-header__details--btn",type:"button"},"Follow"),c.a.createElement("ul",{className:"clubhouse-header__details--record"},c.a.createElement("li",null,"7-9"),c.a.createElement("li",null,"2nd in AFC East")))))),c.a.createElement("div",{className:"global-nav-container"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/teams/").concat(l)},"Home")),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/".concat(r,"/teams/").concat(l,"/schedule")},"Schedule")))))};const S=e=>{let{sports:t,sport:a,match:n}=e;const r=t[a];return c.a.createElement("header",{className:"global-header"},c.a.createElement(C,{sports:t}),a&&!n.params.pathParamSportTeam&&c.a.createElement(f,{sport:a}),r&&n.params.pathParamSportTeam&&c.a.createElement(_,Object.assign({sport:a},r.find(e=>e.Key===n.params.pathParamSportTeam))))};S.defaultProps={sports:{},sport:null,match:null};var F=S;var T=e=>{let{Teams:t}=e;return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{sports:t}),c.a.createElement("h1",null,"Site Home"))},A=a(6);const L={Teams:{}},O=Promise.all(["MLB","NBA","NFL"].map(e=>fetch("".concat("/react-espn","/data/").concat(e,"/teams.json")).then(m).then(e=>e.json()))).then(e=>{const[t,a,n]=e;return{MLB:t,NBA:a,NFL:n}}),j=(e,t)=>{switch(t.type){case"FETCH_TEAMS":return Object(A.a)(Object(A.a)({},e),{},{Teams:t.payload});default:return e}},w=Object(n.createContext)(),x=e=>{let{children:t}=e;const[a,r]=Object(n.useReducer)(j,L),s={state:a,dispatch:r};return c.a.createElement(w.Provider,{value:s},t)},B={StandingsMLB:[],sport:"MLB"},k=(e,t)=>{switch(t.type){case"FETCH_MLB_STANDINGS":return Object(A.a)(Object(A.a)({},e),{},{StandingsMLB:t.payload});default:return e}},M=Object(n.createContext)(),H=e=>{let{children:t}=e;const[a,r]=Object(n.useReducer)(k,B),s={state:a,dispatch:r};return c.a.createElement(M.Provider,{value:s},t)},P={StandingsNBA:[],sport:"NBA"},W=(e,t)=>{switch(t.type){case"FETCH_NBA_STANDINGS":return Object(A.a)(Object(A.a)({},e),{},{StandingsNBA:t.payload});default:return e}},I=Object(n.createContext)(),D=e=>{let{children:t}=e;const[a,r]=Object(n.useReducer)(W,P),s={state:a,dispatch:r};return c.a.createElement(I.Provider,{value:s},t)},R={StandingsNFL:[],sport:"NFL"},G=(e,t)=>{switch(t.type){case"FETCH_NFL_STANDINGS":return Object(A.a)(Object(A.a)({},e),{},{StandingsNFL:t.payload});default:return e}},z=Object(n.createContext)(),K=e=>{let{children:t}=e;const[a,r]=Object(n.useReducer)(G,R),s={state:a,dispatch:r};return c.a.createElement(z.Provider,{value:s},t)};var J=e=>{let{division:t}=e;return c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,t),c.a.createElement("th",null,"W"),c.a.createElement("th",null,"L"),c.a.createElement("th",null,"PCT"),c.a.createElement("th",null,"GB"),c.a.createElement("th",{className:"standings__sec-stat"},"Home"),c.a.createElement("th",{className:"standings__sec-stat"},"Road")))};var Y,U=e=>{let{division:t,divisionTeams:a}=e;return c.a.createElement("table",{className:"table table--standings",style:{margin:"24px auto"}},c.a.createElement(J,{division:t}),c.a.createElement("tbody",null,a))},q=a(18);const V=a(19).a.td(Y||(Y=Object(q.a)(["\n  a {\n    color: inherit;\n\n    &:hover {\n      text-decoration: underline;\n    }\n\n    > * {\n      vertical-align: middle;\n    }\n\n    img {\n      height: 24px;\n      width: 24px;\n      margin-right: 6px;\n    }\n\n    .standings__team {\n      &--arbv,\n      &--city,\n      &--full {\n        display: inline;\n      }\n\n      &--arbv {\n        @media (min-width: 400px) {\n          display: none;\n        }\n      }\n\n      &--full {\n        @media (max-width: 399px) {\n          display: none;\n        }\n      }\n\n      &--city {\n        @media (max-width: 767px) {\n          display: none;\n        }\n      }\n    }\n  }\n"]))),X=e=>{let{Key:t,City:a,Name:n,hideCity:r,sport:l}=e,o=a,m=n;if("NFL"===l){const{name:e,city:a}=(u=t,[{city:"Arizona",name:"Cardinals",abr:"ARI",conf:"NFC",div:"West"},{city:"Atlanta",name:"Falcons",abr:"ATL",conf:"NFC",div:"South"},{city:"Baltimore",name:"Ravens",abr:"BAL",conf:"AFC",div:"North"},{city:"Buffalo",name:"Bills",abr:"BUF",conf:"AFC",div:"EAST"},{city:"Carolina",name:"Panthers",abr:"CAR",conf:"NFC",div:"South"},{city:"Cincinati",name:"Bengals",abr:"CIN",conf:"AFC",div:"North"},{city:"Chicago",name:"Bears",abr:"CHI",conf:"NFC",div:"North"},{city:"Cleveland",name:"Browns",abr:"CLE",conf:"AFC",div:"North"},{city:"Dallas",name:"Cowboys",abr:"DAL",conf:"NFC",div:"East"},{city:"Denver",name:"Broncos",abr:"DEN",conf:"AFC",div:"West"},{city:"Detroit",name:"Lions",abr:"DET",conf:"NFC",div:"North"},{city:"Green Bay",name:"Packers",abr:"GB",conf:"NFC",div:"North"},{city:"Houston",name:"Texans",abr:"HOU",conf:"AFC",div:"South"},{city:"Indianapolis",name:"Colts",abr:"IND",conf:"AFC",div:"South"},{city:"Jacksonville",name:"Jaquars",abr:"JAX",conf:"AFC",div:"South"},{city:"Kansas City",name:"Chiefts",abr:"KC",conf:"AFC",div:"West"},{city:"Miami",name:"Dolphins",abr:"MIA",conf:"AFC",div:"East"},{city:"Minnesota",name:"Vikings",abr:"MIN",conf:"AFC",div:"North"},{city:"New England",name:"Patriots",abr:"NE",conf:"AFC",div:"East"},{city:"New Orleans",name:"Saints",abr:"NO",conf:"NFC",div:"South"},{city:"New York",name:"Giants",abr:"NYG",conf:"NFC",div:"East"},{city:"New York",name:"Jets",abr:"NYJ",conf:"AFC",div:"East"},{city:"Oakland",name:"Raiders",abr:"OAK",conf:"AFC",div:"West"},{city:"Philidelphia",name:"Eagles",abr:"PHI",conf:"NFC",div:"East"},{city:"Pittsburgh",name:"Steelers",abr:"PIT",conf:"AFC",div:"North"},{city:"Los Angeles",name:"Chargers",abr:"LAC",conf:"AFC",div:"West"},{city:"Seattle",name:"Seahawks",abr:"SEA",conf:"NFC",div:"West"},{city:"San Francisco",name:"49ers",abr:"SF",conf:"NFC",div:"West"},{city:"Los Angeles",name:"Rams",abr:"LAR",conf:"NFC",div:"West"},{city:"Tampa Bay",name:"Buccaneers",abr:"TB",conf:"NFC",div:"South"},{city:"Tennessee",name:"Titants",abr:"TEN",conf:"AFC",div:"South"},{city:"Washington",name:"Redskins",abr:"WAS",conf:"NFC",div:"East"}].find(e=>e.abr===u));o=a,m=e}var u;return c.a.createElement(V,{className:"standings__team"},c.a.createElement(s.b,{to:"/teams/".concat(t)},c.a.createElement("img",{src:i("".concat(t),36,l),alt:"".concat(o," ").concat(m," Logo")}),t&&c.a.createElement("abbr",{className:"standings__team--arbv"},t),o&&!r&&c.a.createElement("figcaption",{className:"standings__team--city"},o," "),m&&c.a.createElement("figcaption",{className:"standings__team--full"},m)))};X.defaultProps={City:null,Name:null,hideCity:!1,sport:"MLB"};var $=X;const Q=e=>{let{Wins:t,Losses:a}=e;return c.a.createElement("td",{className:"standings__sec-stat"},"".concat(t," - ").concat(a))};Q.defaultProps={Wins:0,Losses:0};var Z=Q;const ee=e=>{let{City:t,Wins:a,Losses:n,GamesBehind:r,HomeWins:s,HomeLosses:l,AwayWins:o,AwayLosses:m,TeamID:i,Name:u,Key:d,Team:E,sport:h}=e;return c.a.createElement("tr",{key:i},c.a.createElement($,{Key:d||E,City:t,Name:u,sport:h}),c.a.createElement("td",null,a),c.a.createElement("td",null,n),c.a.createElement("td",null,(Number("".concat(a))/(Number("".concat(a))+Number("".concat(n)))).toFixed(3).replace(/^0+/,"")),c.a.createElement("td",null,r||"-"),c.a.createElement(Z,{Wins:s,Losses:l}),c.a.createElement(Z,{Wins:o,Losses:m}))};ee.defaultProps={AwayLosses:null,AwayWins:null,City:null,GamesBehind:null,HomeLosses:null,HomeWins:null,Key:null,Losses:null,Name:null,sport:"MLB",Team:null,TeamID:null,Wins:null};var te=ee;var ae=e=>{let{teamStandings:t,sport:a}=e;return u(t).reduce((e,t)=>{const[n,r]=t;return e.push(c.a.createElement(U,{className:"table",key:n,division:n,divisionTeams:r.map(e=>{const{Key:t,Team:n}=e;return c.a.createElement(te,Object.assign({key:t||n},e,{sport:a}))})})),e},[])};var ne=e=>{let{teamStandings:t,sport:a}=e;return c.a.createElement("div",null,c.a.createElement("h1",null,a," Standings"),c.a.createElement(ae,{teamStandings:t,sport:a}))};const ce=e=>{let{sport:t}=e;return c.a.createElement("div",null,c.a.createElement("h1",null,t&&t," Home"))};ce.defaultProps={sport:null};var re=ce;var se=e=>{let{match:t,sport:a}=e;const{state:r,dispatch:s}=Object(n.useContext)(M);return Object(n.useEffect)(()=>{d(r["Standings".concat(a)])&&fetch("".concat("/react-espn","/data/").concat(a,"/standings-2019.json")).then(e=>e.json()).then(e=>s({type:"FETCH_".concat(a,"_STANDINGS"),payload:e}))}),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{path:t.url,exact:!0,render:()=>c.a.createElement(re,r)}),c.a.createElement(l.a,{path:"".concat(t.url,"/standings"),exact:!0,render:()=>c.a.createElement(ne,Object.assign({teamStandings:r["Standings".concat(a)]},r))}))};var le=e=>{let{match:t,sport:a}=e;const{state:r,dispatch:s}=Object(n.useContext)(I);return Object(n.useEffect)(()=>{d(r["Standings".concat(a)])&&fetch("".concat("/react-espn","/data/").concat(a,"/standings-2019.json")).then(e=>e.json()).then(e=>s({type:"FETCH_".concat(a,"_STANDINGS"),payload:e}))}),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{path:t.url,exact:!0,render:()=>c.a.createElement(re,r)}),c.a.createElement(l.a,{path:"".concat(t.url,"/standings"),exact:!0,render:()=>c.a.createElement(ne,Object.assign({teamStandings:r["Standings".concat(a)]},r))}))};var oe=e=>{let{match:t,sport:a}=e;const{state:r,dispatch:s}=Object(n.useContext)(z);return Object(n.useEffect)(()=>{d(r["Standings".concat(a)])&&fetch("".concat("/react-espn","/data/").concat(a,"/standings-2019.json")).then(e=>e.json()).then(e=>s({type:"FETCH_".concat(a,"_STANDINGS"),payload:e}))}),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{path:t.url,exact:!0,render:()=>c.a.createElement(re,r)}),c.a.createElement(l.a,{path:"".concat(t.url,"/standings"),exact:!0,render:()=>c.a.createElement(ne,Object.assign({teamStandings:r["Standings".concat(a)]},r))}))};var me=e=>{let{Teams:t}=e;return c.a.createElement(l.a,{path:"/:id/teams/:pathParamSportTeam",render:e=>{const{match:a}=e,{id:n,pathParamSportTeam:r}=a.params;return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,Object.assign({sports:t,sport:n},e)),c.a.createElement(l.a,{exact:!0,path:"/:id/teams/:pathParamSportTeam",render:()=>c.a.createElement("h1",{team:r},"Teams Home: Fuck Yeah!")}),c.a.createElement(l.a,{exact:!0,path:"/:id/teams/:pathParamSportTeam/schedule",render:()=>c.a.createElement("h1",{team:r},"Schedule: Fuck Yeah!")}))}})};var ie=()=>{const{state:e,dispatch:t}=Object(n.useContext)(w);Object(n.useEffect)(()=>{var a;a=e.Teams,!Object.keys(a).length&&O.then(e=>t({type:"FETCH_TEAMS",payload:e}))});const{MLB:a,NBA:r,NFL:o}=e.Teams;return c.a.createElement(s.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{path:"/",exact:!0,render:()=>c.a.createElement(T,e)}),c.a.createElement(l.a,{exact:!0,path:"/:id/:pathParam1?",render:t=>{const{match:a}=t,{id:n}=a.params;return c.a.createElement(F,Object.assign({sports:e.Teams,sport:n},t))}}),c.a.createElement(me,{Teams:e.Teams}),c.a.createElement(l.a,{path:"/MLB",render:e=>c.a.createElement(H,null,c.a.createElement(se,Object.assign({},e,{sport:"MLB",teams:a})))}),c.a.createElement(l.a,{path:"/NBA",render:e=>c.a.createElement(D,null,c.a.createElement(le,Object.assign({},e,{sport:"NBA",teams:r})))}),c.a.createElement(l.a,{path:"/NFL",render:e=>c.a.createElement(K,null,c.a.createElement(oe,Object.assign({},e,{sport:"NFL",teams:o})))})))};a(35),a(36);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(c.a.createElement(x,null,c.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.85224a1c.chunk.js.map