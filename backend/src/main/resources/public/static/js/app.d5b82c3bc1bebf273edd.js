webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},s,!1,function(t){n("Rt27")},null,null).exports,i=n("/ocq"),c={name:"MyComponent",data:function(){return{message:"Chuyển sang music drive"}},methods:{sayHello:function(){g.push({name:"MusicDrive"})}},watch:{message:function(){console.log("message changed")}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-component"},[n("div",[t._v(t._s(t.message))]),t._v(" "),n("div",[n("button",{on:{click:t.sayHello}},[t._v("Click tao đi")])]),t._v(" "),n("router-link",{attrs:{to:"/music-drive"}},[t._v("Music Drive")])],1)},staticRenderFns:[]};var l=n("VU/8")(c,r,!1,function(t){n("TdcF")},"data-v-5ab1792f",null).exports,u=n("mtWM"),d=n.n(u).a.create({baseURL:"/api"}),m={name:"MusicDrive",data:function(){return{response:[],songKey:"",errors:[],songs:[{songName:"Đếm Ngày Xa Em",author:"OnlyC; Lou Hoàng",quality:"Lossless",link:"http://mp3.chiasenhac.vn/mp3/vietnam/v-pop/dem-ngay-xa-em~onlyc-lou-hoang~tsvtbq63qfqekw.html",songLength:"4:15"}]}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://apis.google.com/js/platform.js"),t.async=!0,t.defer=!0,document.head.appendChild(t)},methods:{findSong:function(){var t=this;d.get("/"+this.songKey).then(function(e){t.songs=e.data,console.log(e.data)}).catch(function(e){t.errors.push(e)})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-drive"},[n("div",{staticClass:"search-box"},[n("h2",{staticClass:"text-center"},[t._v("Tìm bài hát")]),t._v(" "),n("b-input-group",{attrs:{size:"lg",prepend:"Tên bài hát"}},[n("b-form-input",{attrs:{type:"text"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.findSong(e):null}},model:{value:t.songKey,callback:function(e){t.songKey=e},expression:"songKey"}}),t._v(" "),n("b-input-group-append",[n("b-btn",{attrs:{variant:"info"},on:{click:t.findSong}},[t._v("Button")])],1)],1)],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4 result-list"},t._l(t.songs,function(e){return n("b-list-group",[n("b-list-group-item",[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("h5",{staticClass:"mb-1"},[t._v(t._s(e.songName))]),t._v(" "),n("small",[t._v(t._s(e.songLength)+" "+t._s(e.quality))])]),t._v(" "),n("p",{},[t._v(t._s(e.author))])])],1)})),t._v(" "),n("div",{staticClass:"col-4 download-list"},t._l(t.songs,function(e){return n("b-list-group",[n("b-list-group-item",{attrs:{href:"#some-link"}},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("h5",{staticClass:"mb-1"},[t._v(t._s(e.songName))]),t._v(" "),n("small",[t._v(t._s(e.songLength)+" "+t._s(e.quality))])]),t._v(" "),n("p",{},[t._v(t._s(e.author))])])],1)})),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"g-savetodrive",attrs:{"data-src":"http://data05.chiasenhac.com/downloads/1666/2/1665096-c362f5b9/flac/Dem%20Ngay%20Xa%20Em%20-%20OnlyC_%20Lou%20Hoang%20[Lossless_FLAC].flac","data-filename":"xbb","data-sitename":"My Company Name"}}),this._v(" "),e("div",{staticClass:"g-savetodrive",attrs:{"data-src":"http://data05.chiasenhac.com/downloads/1666/2/1665096-c362f5b9/flac/Dem%20Ngay%20Xa%20Em%20-%20OnlyC_%20Lou%20Hoang%20[Lossless_FLAC].flac","data-filename":"xxx","data-sitename":"My Company Name"}}),this._v(" "),e("div",{staticClass:"g-savetodrive",attrs:{"data-src":"http://data05.chiasenhac.com/downloads/1666/2/1665096-c362f5b9/flac/Dem%20Ngay%20Xa%20Em%20-%20OnlyC_%20Lou%20Hoang%20[Lossless_FLAC].flac","data-filename":"xcc","data-sitename":"My Company Name"}})])}]};var p=n("VU/8")(m,v,!1,function(t){n("aG18")},"data-v-aa39ebe2",null).exports,f=n("e6fC");n("Jmt5"),n("9M+g");a.a.use(f.a),a.a.use(i.a);var g=new i.a({routes:[{path:"/",name:"Component",component:l},{path:"/music-drive",name:"MusicDrive",component:p}]});a.a.use(f.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},Rt27:function(t,e){},TdcF:function(t,e){},aG18:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d5b82c3bc1bebf273edd.js.map