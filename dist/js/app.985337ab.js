(function(e){function t(t){for(var o,i,r=t[0],l=t[1],c=t[2],m=0,d=[];m<r.length;m++)i=r[m],a[i]&&d.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={1:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;s.push([18,0]),n()})({"+Wbi":function(e,t,n){},"0h8w":function(e,t,n){"use strict";var o=n("KmXT"),a=n.n(o);a.a},"11PH":function(e,t,n){"use strict";var o=n("+Wbi"),a=n.n(o);a.a},18:function(e,t,n){e.exports=n("Vtdi")},"7jqR":function(e,t,n){},G3p4:function(e,t,n){},JE2J:function(e,t,n){},KmXT:function(e,t,n){},R1fN:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var o=n("Kw5r"),a=n("7pj7"),s=n.n(a),i=n("n3sq"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{msg:"Curry your Coins <3 Blog"}}),n("Content"),n("Footer",{attrs:{msg:"Footer"}})],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[e._m(0)])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v(e._s(e.msg))])}],m={name:"Header",props:{msg:String}},d=m,h=(n("rr5e"),n("KHd+")),p=Object(h["a"])(d,c,u,!1,null,"2977eb44",null),f=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fw"},[n("b-container",{staticClass:"section"},[n("b-row",[n("b-col",{attrs:{md:"8",sm:"12"}},[n("router-view")],1),n("b-col",{attrs:{md:"4",sm:"12"}},[n("sidebar")],1)],1)],1)],1)},g=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column",attrs:{id:"right"}},[n("h2",{staticClass:"top-right"},[e._v("Latest Posts")]),n("div",{staticClass:"bottom"},[n("card-list")],1)])},w=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.posts,function(e){return n("div",{key:e.id},[n("card",{attrs:{id:e.id,title:e.title,subTitle:e.subTitle,text:e.text,link:e.link}})],1)}))},k=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb1rem"},[n("b-card-group",{staticClass:"c-bcard"},[n("div",{staticClass:"img-wrapper"},[n("b-img",{staticClass:"c-img",attrs:{width:"200",height:"250","blank-color":"#bbb",src:e.link,block:"",alt:"Fluid image"}})],1),n("b-card",{attrs:{title:e.title,subTitle:e.subTitle}},[n("p",{staticClass:"card-text"},[e._v("\n                "+e._s(e.text)+"\n            ")]),n("router-link",{staticClass:"card-link",attrs:{loading:!0,to:{name:"post",params:{id:e.id,title:e.title,text:e.text,subTitle:e.subTitle,link:e.link}}}},[e._v("Link")])],1)],1)],1)},C=[],x=(n("xfY5"),{name:"post-card",props:{id:Number,title:String,text:String,subTitle:String,link:String}}),S=x,j=(n("kMGU"),Object(h["a"])(S,_,C,!1,null,"935e9c8c",null)),T=j.exports,N={name:"card-list",components:{Card:T},data:function(){return{posts:[{id:1,title:"Who would replace Lucas Digne if he leaves Barcelona?",subTitle:"Lucas Digne is on the brink of a move to Everton",link:"https://imagesvc.timeincapp.com/v3/fan/image?url=https://everythingbarca.com/wp-content/uploads/getty-images/2017/07/956628988-850x560.jpeg&c=sc&w=850&h=560",text:""},{id:2,title:"Xherdan Shaqiri move to Liverpool could trigger Andros Townsend, Matt Ritchie, Michail Antonio deals",subTitle:"Stoke City remain in talks with Newcastle over the signing of Ritchie",link:"http://e2.365dm.com/18/07/16-9/20/skysports-andros-townsend-xherdan-shaqiri_4361253.jpg?20180713172423",text:""},{id:3,title:"Chelsea sign star midfielder Jorginho from Napoli",subTitle:"Jorginho has waved farewell to Napoli and is joining Chelsea",link:"https://s.yimg.com/ny/api/res/1.2/RPFnL0snjVZJVNjNL_2dzg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5e37a49959b3b0e05cc21f95c4e2eafd",text:""}]}}},L=N,O=(n("0h8w"),Object(h["a"])(L,y,k,!1,null,"8e744118",null)),R=O.exports,M={name:"blog-content",components:{CardList:R}},I=M,$=(n("11PH"),Object(h["a"])(I,v,w,!1,null,"1257de1a",null)),E=$.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column",attrs:{id:"right"}},[n("h2",{staticClass:"top-right"},[e._v("Subscribe")]),n("div",{staticClass:"bottom"},[n("subscribe-form")],1)])},J=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show?n("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[n("b-form-group",{attrs:{id:"emailGroup",label:"Email address:","label-for":"exampleInput1",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("b-form-group",{attrs:{id:"nameGroup",label:"Your Name:","label-for":"exampleInput2"}},[n("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("b-row",{staticClass:"mb-3 mt2"},[n("b-col",{attrs:{md:"4"}},[n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1),n("b-col",{attrs:{md:"4"}},[n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)],1):e._e(),n("notifications",{attrs:{group:"subscribe",position:"top right"}})],1)},G=[],q={name:"subscribe-form",data:function(){return{form:{email:"",name:""},show:!0,isSuccess:!1}},methods:{onSubmit:function(e){e.preventDefault();var t=this;this.isSuccess=!0,this.$notify({group:"subscribe",title:"Newsletter Subscribed",text:"Subscribed to our newsletter successfully"}),setTimeout(function(){t.isSuccess=!1,t.onReset(e)},3e3)},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.show=!1,this.$nextTick(function(){t.show=!0})}}},B=q,F=(n("oR2I"),Object(h["a"])(B,A,G,!1,null,"2791b83c",null)),H=F.exports,W={name:"sidebar",msg:String,components:{SubscribeForm:H}},z=W,D=(n("bMCI"),Object(h["a"])(z,P,J,!1,null,"261d2b76",null)),V=D.exports,X={name:"Content",props:{msg:String},components:{BlogContent:E,Sidebar:V}},Z=X,K=(n("Wh5B"),Object(h["a"])(Z,b,g,!1,null,"91b22618",null)),Q=K.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._v("\n    Footer\n")])},U=[],ee={name:"Footer",props:{msg:String}},te=ee,ne=(n("snQS"),Object(h["a"])(te,Y,U,!1,null,"35bc1f22",null)),oe=ne.exports,ae={components:{Header:f,Content:Q,Footer:oe}},se=ae,ie=(n("ZL7j"),Object(h["a"])(se,r,l,!1,null,null,null)),re=ie.exports,le=n("jE9Z"),ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loader,expression:"!loader"}],staticClass:"post"},[n("h2",[e._v(e._s(e.posts[e.$route.params.id-1].title))]),n("div",{staticClass:"img-wrapper"},[n("b-img",{staticClass:"c-img",attrs:{"blank-color":"#bbb",src:e.posts[e.$route.params.id-1].link,fluid:"",alt:"Image"}})],1),n("h5",[e._v(e._s(e.posts[e.$route.params.id-1].subTitle))]),e._l(e.posts[e.$route.params.id-1].text,function(t,o){return n("p",{key:o},[e._v(e._s(t))])}),n("div",e._l(e.comments,function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.showComments,expression:"showComments"}],key:t.id},[e._v("\n        "+e._s(t)+"\n      ")])})),e.posts[e.$route.params.id-1].comments.length>0?n("b-button",{attrs:{pressed:e.clicked,size:"",variant:"success"},on:{click:e.loadComments}},[n("icon",{directives:[{name:"show",rawName:"v-show",value:e.clicked,expression:"clicked"}],attrs:{name:"spinner",spin:""}}),e._v(" "+e._s(e.clicked?"Loading Comments":"Show Comments")+"\n    ")],1):n("div",[e._v("\n      No Comments\n    ")])],2),n("ball-pulse-loader",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],staticClass:"loader",attrs:{color:"#6AF788"}})],1)},ue=[],me=n("iv4g"),de={name:"post",data:function(){return{posts:[{id:1,title:"Who would replace Lucas Digne if he leaves Barcelona?",subTitle:"Lucas Digne is on the brink of a move to Everton",link:"https://imagesvc.timeincapp.com/v3/fan/image?url=https://everythingbarca.com/wp-content/uploads/getty-images/2017/07/956628988-850x560.jpeg&c=sc&w=850&h=560",text:["If he leaves, the management has two options to replace him. Firstly, the club can always call up Marc Cucurella to the first-team squad. The 19-year old left-back for impressive for Barcelona B last season, and deserves a berth in the senior squad.","But there is another option, of signing a replacement. There are young left-backs like Jonny Castro, Ferland Mendy and Alejandro Grimaldo in the transfer market, and they are all capable of replacing Lucas Digne.","But the promotion of Marc Cucurella is still the best option. The youngster deserves an opportunity at being a success at the highest level of football. He possesses great speed and agility, and could be the successor to Jordi Alba.","But Alejandro Grimaldo also graduated from La Masia, and he has a lot of potential. If the management chooses to bring back Grimaldo, he would bring a lot to the squad. But if Lucas Digne does leave, the club would be better off, regardless of his replacement."],comments:[]},{id:2,title:"Xherdan Shaqiri move to Liverpool could trigger Andros Townsend, Matt Ritchie, Michail Antonio deals",subTitle:"Stoke City remain in talks with Newcastle over the signing of Ritchie",link:"http://e2.365dm.com/18/07/16-9/20/skysports-andros-townsend-xherdan-shaqiri_4361253.jpg?20180713172423",text:["Once Xherdan Shaqiri's deal to Liverpool is finalised, Sky Sports News understands it could trigger moves for Matt Ritchie, Andros Townsend and Michail Antonio.","Stoke City remain in talks with Newcastle over the signing of Ritchie, according to Sky sources, with the Magpies understood to want around £15m. Stoke are willing to pay £11.5m.","The £13.5m they receive from Liverpool for Shaqiri could see them up their bid closer to Newcastle's valuation.","We are told Ritchie, who scored three goals in 35 Premier League appearances last season, is open to the move.","If the Scotland international goes to Stoke, Newcastle will use the money to fund a move for Townsend.","Crystal Palace are thought to want around £17m for the winger, who left Newcastle to go to Selhurst Park in 2016.","Townsend returning to St James' Park could see Crystal Palace use the funds to try and sign West Ham's Antonio.","Sky Sports News reported earlier this week West Ham would consider offers upwards of £15m for Antonio as they look to recoup funds with their summer spending set to exceed £90m."],comments:["That sucks!"]},{id:3,title:"Chelsea sign star midfielder Jorginho from Napoli",subTitle:"Jorginho has waved farewell to Napoli and is joining Chelsea",link:"https://s.yimg.com/ny/api/res/1.2/RPFnL0snjVZJVNjNL_2dzg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5e37a49959b3b0e05cc21f95c4e2eafd",text:["Chelsea’s new manager Maurizio Sarri has wasted no time in making his mark on the club, with Italy international Jorginho joining from Napoli.","The Italy international has signed a five-year contract, with the Londoners seeing off competition from big-spending Manchester City to land the player.","Jorginho said: “I am absolutely ecstatic to be here at Chelsea. It is not easy to become part of such a big team so I am very, very happy.","“I am excited to play in such an intense league, for a team that gives everything to play and win.”","The news is likely to anger Premier League champions Manchester City, who believe they were close to signing the player."],comments:["Great for Chelsea","Could we expect now, to win Euro ;)","That's great","Looking forward"]}],loader:!0,clicked:!1,comments:[],showComments:!1,commentIndex:0}},methods:{loadComments:function(){var e=this;this.clicked=!0,setTimeout(function(){e.clicked=!1,e.showComments=!0,e.comments=Object(me["a"])(e.comments).concat(Object(me["a"])(e.posts[e.$route.params.id-1].comments.slice(e.commentIndex,e.commentIndex+3))),e.commentIndex+=3},500)}},mounted:function(){var e=this;setTimeout(function(){e.loader=!1},1500)}},he=de,pe=(n("lhef"),Object(h["a"])(he,ce,ue,!1,null,"404cf058",null)),fe=pe.exports;o["default"].use(le["a"]);var be=new le["a"]({mode:"history",routes:[{path:"/",name:"blog-content",component:E},{path:"/post/:id",name:"post",component:fe,props:!0}]}),ge=(n("+eM2"),n("LdiE"),n("zHN7"),n("ZBqj")),ve=(n("czgM"),n("CHRH"));o["default"].config.productionTip=!1,o["default"].component("icon",ve["a"]),o["default"].use(ge),o["default"].use(i["a"]),o["default"].use(s.a),new o["default"]({router:be,render:function(e){return e(re)}}).$mount("#app")},Wh5B:function(e,t,n){"use strict";var o=n("aRIG"),a=n.n(o);a.a},ZL7j:function(e,t,n){"use strict";var o=n("slcd"),a=n.n(o);a.a},aRIG:function(e,t,n){},bMCI:function(e,t,n){"use strict";var o=n("7jqR"),a=n.n(o);a.a},"hp+b":function(e,t,n){},kMGU:function(e,t,n){"use strict";var o=n("R1fN"),a=n.n(o);a.a},lhef:function(e,t,n){"use strict";var o=n("hp+b"),a=n.n(o);a.a},m8jP:function(e,t,n){},oR2I:function(e,t,n){"use strict";var o=n("JE2J"),a=n.n(o);a.a},rr5e:function(e,t,n){"use strict";var o=n("G3p4"),a=n.n(o);a.a},slcd:function(e,t,n){},snQS:function(e,t,n){"use strict";var o=n("m8jP"),a=n.n(o);a.a}});
//# sourceMappingURL=app.985337ab.js.map