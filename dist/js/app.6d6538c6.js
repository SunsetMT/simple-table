(function(){"use strict";var e={6088:function(e,r,n){var a=n(9242),o=n(3396);function t(e,r,n,a,t,s){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(o.Ob,null,[(0,o.Wm)(i)],1024)}var s={components:{}},i=n(89);const l=(0,i.Z)(s,[["render",t]]);var u=l,d=n(9749),m=(0,d.MT)({state:{users:new Map(Object.entries({1:{id:1,name:"Grisha",mail:"grisha.serebrov@mail.ru",phone:"+79312678355"},2:{id:2,name:"Misha",mail:"grisha.serebrov@mail.ru",phone:"+79312678355"},3:{id:3,name:"Vova",mail:"grisha.serebrov@mail.ru",phone:"+79312678355"},4:{id:4,name:"Elena",mail:"grisha.serebrov@mail.ru",phone:"+79312678355"},5:{id:5,name:"Gena",mail:"grisha.serebrov@mail.ru",phone:"+79312678355"}})),freeId:6},getters:{USERS(e){return e.users},USER:e=>r=>e.users.get(r),FREE_ID(e){return e.freeId}},mutations:{ADD_TO_USERS(e,r){r.id=e.freeId,e.users.set(e.freeId+"",r),e.freeId++},DEL_FROM_USERS(e,r){e.users.delete(String(r)),console.log(e.users)}},actions:{ADD_USER({commit:e},r){e("ADD_TO_USERS",r)},DEL_USER({commit:e},r){e("DEL_FROM_USERS",r)}},modules:{}}),c=n(678),p=n(7139);const h={class:"wwrapper flex mx-[1rem]"},f={class:"wrapper w-[70rem]"},b=(0,o._)("div",{class:"table-name text-[30px] py-[1rem]"},"Таблица пользвателей",-1),v={class:"users-table-wrapper bg-red-200 border-[1px] border-slate-400 rounded-3xl shadow-lg"},g={class:"users-table w-[100%]"},w=(0,o._)("thead",null,[(0,o._)("tr",{class:"flex justify-around"},[(0,o._)("th",{class:"hidden md:block px-[1rem] my-[1rem] w-[20%]"},"Id"),(0,o._)("th",{class:"px-[1rem] my-[1rem] w-[20%]"},"Имя"),(0,o._)("th",{class:"hidden sm:block px-[1rem] my-[1rem] w-[20%]"},"Почта"),(0,o._)("th",{class:"hidden lg:block px-[1rem] my-[1rem] w-[20%]"},"Телефон"),(0,o._)("th",{class:"hidden 2xl:block px-[1rem] my-[1rem] w-[20%]"},"Profile link")])],-1),y={class:"hidden md:block px-[1rem] my-[1rem] w-[20%]"},_={class:"px-[1rem] my-[1rem] w-[20%]"},x={class:"hidden sm:block px-[1rem] my-[1rem] w-[20%]"},k={class:"hidden lg:block px-[1rem] my-[1rem] w-[20%]"},S={class:"hidden 2xl:block px-[1rem] my-[1rem] w-[20%]"},E=["href"],D={key:0,class:"add-block flex flex-col items-center"};function U(e,r,n,t,s,i){const l=(0,o.up)("NumberTest");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",f,[b,(0,o._)("div",v,[(0,o._)("table",g,[w,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.USERS.values(),(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id,class:"flex justify-around w-[100%] text-[13px]"},[(0,o._)("td",y,(0,p.zw)(e.id),1),(0,o._)("td",_,(0,p.zw)(e.name),1),(0,o._)("td",x,(0,p.zw)(e.mail),1),(0,o._)("td",k,(0,p.zw)(e.phone),1),(0,o._)("td",S,[(0,o._)("a",{href:"#/user/"+e.id},"link",8,E)])])))),128))])])]),(0,o._)("button",{class:"add-user my-[1rem] border-0 rounded-lg h-[2rem] w-[6rem] bg-green-300 shadow-md hover:bg-indigo-500 ease-in-out delay-150 duration-300",onClick:r[0]||(r[0]=e=>t.click())},"Add user "),t.active?((0,o.wg)(),(0,o.iD)("div",D,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>t.name=e),placeholder:"Boris",class:"w-[20rem] h-[1.5rem] my-[0.5rem] rounded-sm border-0 bg-gray-200"},null,512),[[a.nr,t.name]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>t.mail=e),placeholder:"boris.borisov@gmail.com",class:"w-[20rem] h-[1.5rem] my-[0.5rem] rounded-sm border-0 bg-gray-200"},null,512),[[a.nr,t.mail]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>t.phone=e),placeholder:"+79523815588",class:"w-[20rem] h-[1.5rem] my-[0.5rem] rounded-sm border-0 bg-gray-200"},null,512),[[a.nr,t.phone]]),(0,o._)("button",{class:"submit my-[1rem] border-0 rounded-lg h-[2rem] w-[6rem] bg-green-300 shadow-mds hover:bg-indigo-500 ease-in-out delay-150 duration-300",onClick:r[4]||(r[4]=r=>t.addUser(e.ADD_USER,{name:t.name,mail:t.mail,phone:t.phone}))},"Submit ")])):(0,o.kq)("",!0)]),(0,o.Wm)(l)])}var R=n(4870);const O={class:"test-number-wrapper hidden lg:block w-[20rem] h-[19rem] bg-green-500 mt-[4rem] ml-[2rem] rounded-3xl mr-[1rem] flex flex-col shadow-lg"},j=(0,o._)("div",{class:"text-[20px] m-[1rem]"},"Проверить номер телефона",-1),q={key:0,class:"mt-[1rem]"},z={key:1},C={key:2},H={key:3,class:"mt-[1rem]"};function I(e,r,n,t,s,i){return(0,o.wg)(),(0,o.iD)("div",O,[j,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.req=e),class:"mt-[1rem] w-[75%] mx-auto",placeholder:"+79312678355"},null,512),[[a.nr,t.req]]),(0,o._)("button",{class:"mt-[1rem] w-[25%] mx-auto hover:bg-indigo-500 ease-in-out delay-150 duration-300 border-0 rounded-lg bg-green-300 h-[2rem] w-[6rem]",onClick:r[1]||(r[1]=e=>t.makeRequest())},"Submit "),t.flag?((0,o.wg)(),(0,o.iD)("div",q,"Success")):(0,o.kq)("",!0),t.flag?((0,o.wg)(),(0,o.iD)("div",z,"Country: "+(0,p.zw)(t.country),1)):(0,o.kq)("",!0),t.flag?((0,o.wg)(),(0,o.iD)("div",C,"Country Code: "+(0,p.zw)(t.code),1)):(0,o.kq)("",!0),!1===t.flag?((0,o.wg)(),(0,o.iD)("div",H,"Error")):(0,o.kq)("",!0)])}var T=n(6265),M=n.n(T),A={name:"NumberTest",setup(){const e=(0,R.iH)(""),r=(0,R.iH)(""),n=(0,R.iH)(""),a=(0,R.iH)(void 0),o=function(){M().get("https://veriphone.p.rapidapi.com/verify",{params:{phone:e.value},headers:{"x-rapidapi-host":"veriphone.p.rapidapi.com","x-rapidapi-key":"28378676e0mshb011eb4a5272f7ep1f8eddjsnc6cc2ac86ca8"}}).then((e=>{!0===e.data.phone_valid?a.value=!0:a.value=!1,r.value=e.data.country,n.value=e.data.country_code;for(let r in e.data)console.log(r);console.log(e.data)})).catch((e=>console.log(e)))};return{req:e,makeRequest:o,country:r,code:n,flag:a}}};const F=(0,i.Z)(A,[["render",I]]);var L=F,P={name:"UsersTable",components:{NumberTest:L},setup(){const e=(0,R.iH)(!1),r=(0,R.iH)(""),n=(0,R.iH)(""),a=(0,R.iH)(""),o=function(e,o){e(o),r.value="",n.value="",a.value=""},t=function(){e.value=!e.value};return{active:e,name:r,mail:n,phone:a,click:t,addUser:o}},methods:{...(0,d.nv)(["ADD_USER"])},computed:{...(0,d.Se)(["USERS","FREE_ID"])}};const V=(0,i.Z)(P,[["render",U]]);var N=V;const Z={class:"user-name"},G={class:"user-name"},W={class:"user-name"},B={class:"user-name"};function K(e,r,n,a,t,s){return(0,o.wg)(),(0,o.iD)("div",(0,o.dG)({class:"user-page-wrapper flex justify-between flex-col"},e.u=e.USER(e.$route.params.id)),[(0,o._)("h1",Z,"Id: "+(0,p.zw)(e.u.id),1),(0,o._)("h1",G,"Name: "+(0,p.zw)(e.u.name),1),(0,o._)("h1",W,"Mail: "+(0,p.zw)(e.u.mail),1),(0,o._)("h1",B,"Phone: "+(0,p.zw)(e.u.phone),1),(0,o._)("button",{class:"my-[1rem] mx-auto text-[20px] border-0 rounded-lg h-[5rem] w-[10rem] bg-red-300 shadow-mds hover:bg-red-600 ease-in-out delay-150 duration-300",onClick:r[0]||(r[0]=()=>{e.DEL_USER(e.u.id),s.print()})},"Удалить пользователя ")],16)}var Y={name:"UserPage",computed:{...(0,d.Se)(["USER"])},methods:{...(0,d.nv)(["DEL_USER"]),print:function(){window.location="#"}}};const $=(0,i.Z)(Y,[["render",K]]);var J=$;const Q=[{path:"/",name:"table",component:N},{path:"/user/:id",name:"user",component:J}],X=(0,c.p7)({history:(0,c.r5)(),routes:Q});var ee=X;(0,a.ri)(u).use(ee).use(m).mount("#app")}},r={};function n(a){var o=r[a];if(void 0!==o)return o.exports;var t=r[a]={exports:{}};return e[a](t,t.exports,n),t.exports}n.m=e,function(){var e=[];n.O=function(r,a,o,t){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],t=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&t||s>=t)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,t<s&&(s=t));if(i){e.splice(d--,1);var u=o();void 0!==u&&(r=u)}}return r}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[a,o,t]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var a in r)n.o(r,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,a){var o,t,s=a[0],i=a[1],l=a[2],u=0;if(s.some((function(r){return 0!==e[r]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var d=l(n)}for(r&&r(a);u<s.length;u++)t=s[u],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(d)},a=self["webpackChunktest_spa"]=self["webpackChunktest_spa"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6088)}));a=n.O(a)})();
//# sourceMappingURL=app.6d6538c6.js.map