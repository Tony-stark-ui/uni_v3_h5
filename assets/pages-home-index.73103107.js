import{d as e,m as t,a as i,o as r,c as a,w as n,n as s,b as o,e as l,f as d,g as u,r as c,F as p,i as g,h as m,j as y,k as f,l as h,t as _,p as v,q as w,s as I,u as k,S as x,v as b,x as S,y as C,z as M,A as U,B as $,C as N,D as j,E as R,G as L}from"./index.338b6ccd.js";import{_ as T,a as A}from"./u-button.6883e742.js";import{e as F}from"./enterpriseLeader.1c39928d.js";import{_ as B}from"./u-empty.ebfb219e.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{T as O}from"./index.7e55b06c.js";import{_ as P}from"./index.6c69896d.js";import{s as W}from"./enterpriseUser.c636f72b.js";import"regenerator-runtime";import"./u-icon.1aa3d7c1.js";const z=[{imgUrl:new URL("../../../static/home/u13.png",self.location).href,text:"服务企业",link:"/pages/enterpriseList/index"},{imgUrl:new URL("../../../static/home/u13.png",self.location).href,text:"服务记录",link:"/pages/serveLog/index"},{imgUrl:new URL("../../../static/home/u13.png",self.location).href,text:"问题反馈",link:"/pages/issue/index"}],D=[{imgUrl:new URL("../../../static/home/u13.png",self.location).href,text:"服务记录",link:"/pages/enterpriseUserServeList/index"},{imgUrl:new URL("../../../static/home/u13.png",self.location).href,text:"服务评价",link:"/pages/enterpriseUserServeList/index?eval=true"},{imgUrl:new URL("../../../static/home/u13.png",self.location).href,text:"问题反馈",link:"/pages/enterpriseUserProblem/index"}],q={title:"content",footLeft:"userName",footRight1:"serviceDate",showFootRight2:!1};var V=H({name:"u-swiper-indicator",mixins:[t,i,{props:{length:{type:[String,Number],default:e.swiperIndicator.length},current:{type:[String,Number],default:e.swiperIndicator.current},indicatorActiveColor:{type:String,default:e.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:e.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:e.swiperIndicator.indicatorMode}}}],data:()=>({lineWidth:22}),computed:{lineStyle(){let e={};return e.width=uni.$u.addUnit(this.lineWidth),e.transform=`translateX(${uni.$u.addUnit(this.current*this.lineWidth)})`,e.backgroundColor=this.indicatorActiveColor,e},dotStyle(){return e=>{let t={};return t.backgroundColor=e===this.current?this.indicatorActiveColor:this.indicatorInactiveColor,t}}}},[["render",function(e,t,i,m,y,f){const h=g;return r(),a(h,{class:"u-swiper-indicator"},{default:n((()=>["line"===e.indicatorMode?(r(),a(h,{key:0,class:s(["u-swiper-indicator__wrapper",[`u-swiper-indicator__wrapper--${e.indicatorMode}`]]),style:o({width:e.$u.addUnit(y.lineWidth*e.length),backgroundColor:e.indicatorInactiveColor})},{default:n((()=>[l(h,{class:"u-swiper-indicator__wrapper--line__bar",style:o([f.lineStyle])},null,8,["style"])])),_:1},8,["class","style"])):d("v-if",!0),"dot"===e.indicatorMode?(r(),a(h,{key:1,class:"u-swiper-indicator__wrapper"},{default:n((()=>[(r(!0),u(p,null,c(e.length,((t,i)=>(r(),a(h,{class:s(["u-swiper-indicator__wrapper__dot",[i===e.current&&"u-swiper-indicator__wrapper__dot--active"]]),key:i,style:o([f.dotStyle(i)])},null,8,["class","style"])))),128))])),_:1})):d("v-if",!0)])),_:1})}],["__scopeId","data-v-27758ecf"]]);var E=H({name:"u-swiper",mixins:[t,i,{props:{list:{type:Array,default:e.swiper.list},indicator:{type:Boolean,default:e.swiper.indicator},indicatorActiveColor:{type:String,default:e.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:e.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:e.swiper.indicatorStyle},indicatorMode:{type:String,default:e.swiper.indicatorMode},autoplay:{type:Boolean,default:e.swiper.autoplay},current:{type:[String,Number],default:e.swiper.current},currentItemId:{type:String,default:e.swiper.currentItemId},interval:{type:[String,Number],default:e.swiper.interval},duration:{type:[String,Number],default:e.swiper.duration},circular:{type:Boolean,default:e.swiper.circular},previousMargin:{type:[String,Number],default:e.swiper.previousMargin},nextMargin:{type:[String,Number],default:e.swiper.nextMargin},acceleration:{type:Boolean,default:e.swiper.acceleration},displayMultipleItems:{type:Number,default:e.swiper.displayMultipleItems},easingFunction:{type:String,default:e.swiper.easingFunction},keyName:{type:String,default:e.swiper.keyName},imgMode:{type:String,default:e.swiper.imgMode},height:{type:[String,Number],default:e.swiper.height},bgColor:{type:String,default:e.swiper.bgColor},radius:{type:[String,Number],default:e.swiper.radius},loading:{type:Boolean,default:e.swiper.loading},showTitle:{type:Boolean,default:e.swiper.showTitle}}}],data:()=>({currentIndex:0}),watch:{current(e,t){e!==t&&(this.currentIndex=e)}},computed:{itemStyle(){return e=>{const t={};return this.nextMargin&&this.previousMargin&&(t.borderRadius=uni.$u.addUnit(this.radius),e!==this.currentIndex&&(t.transform="scale(0.92)")),t}}},methods:{getItemType(e){return"string"==typeof e?uni.$u.test.video(this.getSource(e))?"video":"image":"object"==typeof e&&this.keyName?e.type?"image"===e.type?"image":"video"===e.type?"video":"image":uni.$u.test.video(this.getSource(e))?"video":"image":void 0},getSource(e){return"string"==typeof e?e:"object"==typeof e&&this.keyName?e[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change(e){const{current:t}=e.detail;this.pauseVideo(this.currentIndex),this.currentIndex=t,this.$emit("change",e.detail)},pauseVideo(e){const t=this.getSource(this.list[e]);if(uni.$u.test.video(t)){m(`video-${e}`,this).pause()}},getPoster:e=>"object"==typeof e&&e.poster?e.poster:"",clickHandler(e){this.$emit("click",e)}}},[["render",function(e,t,i,s,m,S){const C=y(f("u-loading-icon"),T),M=g,U=w,$=I,N=k,j=x,R=b,L=y(f("u-swiper-indicator"),V);return r(),a(M,{class:"u-swiper",style:o({backgroundColor:e.bgColor,height:e.$u.addUnit(e.height),borderRadius:e.$u.addUnit(e.radius)})},{default:n((()=>[e.loading?(r(),a(M,{key:0,class:"u-swiper__loading"},{default:n((()=>[l(C,{mode:"circle"})])),_:1})):(r(),a(R,{key:1,class:"u-swiper__wrapper",style:o({height:e.$u.addUnit(e.height)}),onChange:S.change,circular:e.circular,interval:e.interval,duration:e.duration,autoplay:e.autoplay,current:e.current,currentItemId:e.currentItemId,previousMargin:e.$u.addUnit(e.previousMargin),nextMargin:e.$u.addUnit(e.nextMargin),acceleration:e.acceleration,displayMultipleItems:e.displayMultipleItems,easingFunction:e.easingFunction},{default:n((()=>[(r(!0),u(p,null,c(e.list,((t,i)=>(r(),a(j,{class:"u-swiper__wrapper__item",key:i},{default:n((()=>[l(M,{class:"u-swiper__wrapper__item__wrapper",style:o([S.itemStyle(i)])},{default:n((()=>[d(" 在nvue中，image图片的宽度默认为屏幕宽度，需要通过flex:1撑开，另外必须设置高度才能显示图片 "),"image"===S.getItemType(t)?(r(),a(U,{key:0,class:"u-swiper__wrapper__item__wrapper__image",src:S.getSource(t),mode:e.imgMode,onClick:e=>S.clickHandler(i),style:o({height:e.$u.addUnit(e.height),borderRadius:e.$u.addUnit(e.radius)})},null,8,["src","mode","onClick","style"])):d("v-if",!0),"video"===S.getItemType(t)?(r(),a($,{key:1,class:"u-swiper__wrapper__item__wrapper__video",id:`video-${i}`,"enable-progress-gesture":!1,src:S.getSource(t),poster:S.getPoster(t),title:e.showTitle&&e.$u.test.object(t)&&t.title?t.title:"",style:o({height:e.$u.addUnit(e.height)}),controls:"",onClick:e=>S.clickHandler(i)},null,8,["id","src","poster","title","style","onClick"])):d("v-if",!0),e.showTitle&&e.$u.test.object(t)&&t.title&&e.$u.test.image(S.getSource(t))?(r(),a(N,{key:2,class:"u-swiper__wrapper__item__wrapper__title u-line-1"},{default:n((()=>[h(_(t.title),1)])),_:2},1024)):d("v-if",!0)])),_:2},1032,["style"])])),_:2},1024)))),128))])),_:1},8,["style","onChange","circular","interval","duration","autoplay","current","currentItemId","previousMargin","nextMargin","acceleration","displayMultipleItems","easingFunction"])),l(M,{class:"u-swiper__indicator",style:o([e.$u.addStyle(e.indicatorStyle)])},{default:n((()=>[v(e.$slots,"indicator",{},(()=>[e.loading||!e.indicator||e.showTitle?d("v-if",!0):(r(),a(L,{key:0,indicatorActiveColor:e.indicatorActiveColor,indicatorInactiveColor:e.indicatorInactiveColor,length:e.list.length,current:m.currentIndex,indicatorMode:e.indicatorMode},null,8,["indicatorActiveColor","indicatorInactiveColor","length","current","indicatorMode"]))]),!0)])),_:3},8,["style"])])),_:3},8,["style"])}],["__scopeId","data-v-56c43cf8"]]);const G={__name:"banner",setup(e){const t=S(["https://jsqapp.nybdr.cn/static/index/u9.png"]);return(e,i)=>{const a=y(f("u-swiper"),E);return r(),u("div",{class:"banner"},[l(a,{list:t.value},null,8,["list"])])}}};var J=H({__name:"operationBtns",props:{data:Array},setup(e){const t=e,{data:i}=C(t);return(e,t)=>(r(),u("div",{class:"container"},[(r(!0),u(p,null,c(U(i),(e=>(r(),u("div",{key:e.text,class:"box",onClick:t=>(e=>{uni.navigateTo({url:e.link})})(e)},[M("img",{class:"icon margin-bottom-10",src:e.imgUrl,alt:""},null,8,["src"]),M("div",{class:"text"},_(e.text),1)],8,["onClick"])))),128))]))}},[["__scopeId","data-v-45c31019"]]);var X=H({__name:"listItem",props:{info:Object,config:{type:Object,default:()=>({title:"companyName",footLeft:"address",footRight1:"contacts",showFootRight2:!0,footRight2:"contactsPhone"})}},setup(e){const t=e,{info:i,config:a}=C(t);return(e,t)=>(r(),u("div",{class:"listtItem"},[M("div",{class:"box padding_all_10"},[M("div",{class:"title"},_(U(i)[U(a).title]),1),M("div",{class:"footer margin-top-20 flex-sb"},[M("div",{class:"address"},_(U(i)[U(a).footLeft]),1),M("div",{class:"user"},[h(_(U(i)[U(a).footRight1])+" ",1),U(a).showFootRight2?(r(),u("span",{key:0}," -"+_(U(i)[U(a).footRight2]),1)):d("v-if",!0)])])])]))}},[["__scopeId","data-v-10440904"]]);const K={__name:"leaderHome",setup(e){const t=S([]),i=S(0),s=$({companyName:"",pageNum:1,pageSize:10,status:"",uscCode:"",userId:N("user","userId")});j((()=>{o()}));const o=()=>{s.pageNum=1,t.value=[],d()},d=async()=>{const e=await F(s);s.pageNum++,i.value=e.data.total,t.value.push(...e.data.rows)};return(e,s)=>{const o=y(f("u-empty"),B);return r(),u("div",{class:"container padding_all_10"},[l(U(G)),l(U(J),{data:U(z)},null,8,["data"]),l(U(O),{"title-text":"企业信息"}),i.value?(r(),a(U(P),{key:0,total:i.value,"list-data":t.value,onHandleScrollMore:d},{default:n((({data:e})=>[l(U(X),{info:e,onClick:t=>(e=>{uni.navigateTo({url:`/pages/enterpriseInfo/${1===e.status?"index":"enterpriseList"}?status=${e.status}&enterpriseId=${e.id}`})})(e)},null,8,["info","onClick"])])),_:1},8,["total","list-data"])):(r(),a(o,{key:1,mode:"car",icon:"http://cdn.uviewui.com/uview/empty/data.png"}))])}}},Q={__name:"userHome",setup(e){const t=$({enterpriseId:N("user","enterpriseId"),pageNum:1,pageSize:10}),i=S([]),s=S(0);j((()=>{o()}));const o=()=>{t.pageNum=1,i.value=[],d()},d=async()=>{const e=await W(t);t.pageNum++,s.value=e.data.total,i.value.push(...e.data.rows)};return(e,t)=>{const o=y(f("u-empty"),B);return r(),u("div",{class:"container"},[l(U(G)),l(U(J),{data:U(D)},null,8,["data"]),l(U(O),{"title-text":"服务内容"}),s.value?(r(),a(U(P),{key:0,total:s.value,"list-data":i.value,onHandleScrollMore:d},{default:n((({data:e})=>[l(U(X),{config:U(q),info:e,onClick:t=>(e=>{uni.navigateTo({url:`/pages/leaderUserDetail/index?data=${encodeURIComponent(JSON.stringify(e))}`})})(e)},null,8,["config","info","onClick"])])),_:1},8,["total","list-data"])):(r(),a(o,{key:1,mode:"car",icon:"http://cdn.uviewui.com/uview/empty/data.png"}))])}}},Y={__name:"index",setup(e){const t=R((()=>1===N("user","userType")?K:Q)),i=()=>{uni.redirectTo({url:"/pages/login/index"}),L("token")};return(e,n)=>{const s=y(f("u-button"),A);return r(),u("div",{class:"container padding_all_10"},[l(s,{text:"测试按钮(退出登录)",onClick:i}),(r(),a(f(U(t))))])}}};export{Y as default};
