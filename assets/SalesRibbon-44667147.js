import{r as m,a,z as f,Z as h,d as S,u as b,h as c,o as y,c as I,f as v,t as d,y as D,p as g,i as w,_ as M}from"./index-cda8e1a8.js";function R(e,t){const u=new Date(e||"2023-12-31"),n=m(new Date),s=m(null),o=a(()=>u.getTime()-n.value.getTime()),r=a(()=>Math.floor(o.value/(1e3*60*60*24))),i=a(()=>Math.floor(o.value%(1e3*60*60*24)/(1e3*60*60))),l=a(()=>Math.floor(o.value%(1e3*60*60)/(1e3*60))),p=a(()=>Math.floor(o.value%(1e3*60)/1e3));return f(()=>{s.value=setInterval(()=>{n.value=new Date,n.value>=u&&(s.value&&clearInterval(s.value),t&&t())},1e3)}),h(()=>{s.value&&clearInterval(s.value)}),{days:r,hours:i,minutes:l,seconds:p,timeRemaining:o}}const x=e=>(g("data-v-6deda778"),e=e(),w(),e),E={key:0,class:"sales-ribbon"},N=x(()=>v("div",{class:"title"},"SALE",-1)),k={class:"discount"},B={class:"timer"},C=S({__name:"SalesRibbon",props:{product:{type:Object,required:!0}},setup(e){const t=e,u=b(),n=()=>{u.removeSale(t.product.id)},s=a(()=>{var _;return(_=t.product.discount)==null?void 0:_.end_date}),{days:o,hours:r,minutes:i,seconds:l,timeRemaining:p}=R(s.value,n);return(_,F)=>t.product.discount&&c(p)>0?(y(),I("div",E,[N,v("div",k,d(t.product.discount.percent)+"% OFF",1),v("div",B,"END IN : "+d(c(o))+"d "+d(c(r))+"h "+d(c(i))+"m "+d(c(l))+"s",1)])):D("",!0)}});const T=M(C,[["__scopeId","data-v-6deda778"]]);export{T as S};