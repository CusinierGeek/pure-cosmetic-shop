import{C as S}from"./CustomInput-aa7109d1.js";import{d as N,N as U,W as E,r as f,X as F,o as u,c as _,f as e,t as i,h as p,e as g,F as x,k as O,n as D,p as k,i as V,_ as b,l as W,Y as B,y as I,u as Y,C as M,j as P,a as $,E as G,z,D as A}from"./index-6a0e7d5f.js";import{C as q}from"./Cart-c38ba4f3.js";import"./SalesRibbon-a6d7498a.js";import"./BackButton-26d40313.js";const L=n=>(k("data-v-b9cc4185"),n=n(),V(),n),H={class:"content-box"},Z=L(()=>e("h2",null,"CREDIT CARD INFORMATION",-1)),j={key:0},K={key:1},Q=["onClick"],J={class:"values"},ee={class:"values"},te={class:"values"},oe={class:"values"},se=N({__name:"CreditCard",setup(n){const m=U(),l=m.GetUser,d=E(),a=f(),t=f({cardNumber:"",expirationDate:"",CVV:""}),c=f(!1);F(()=>{l.firstName=="Guest"?c.value=!0:c.value=!1});const h=()=>{c.value=!c.value},C=o=>o&&o.length>=16?(o.substring(0,14),`${"*".repeat(14)}${o.substring(14)}`):"",r=(o,s)=>{a.value=s,t.value.cardNumber=o.cardNumber,t.value.expirationDate=o.expiryDate,t.value.CVV=o.cvv,d.setCreditCardNumber(t.value.cardNumber),d.setCreditCardExpirationDate(t.value.expirationDate),d.setCreditCardCVV(t.value.CVV)};return(o,s)=>(u(),_("div",H,[Z,e("span",{onClick:h},i(c.value&&p(m).isAuthenticated?"USE DEFAULT CARD":"USE DIFFERENT CARD"),1),c.value?(u(),_("div",j,[g(S,{label:"* CARD NUMBER",placeholder:"XXXX-XXXX-XXXX-XXXX",modelValue:t.value.cardNumber,"onUpdate:modelValue":s[0]||(s[0]=v=>t.value.cardNumber=v),onChange:s[1]||(s[1]=v=>p(d).setCreditCardNumber(t.value.cardNumber))},null,8,["modelValue"]),g(S,{label:"* EXPIRY DATE",placeholder:"MM/YY",modelValue:t.value.expirationDate,"onUpdate:modelValue":s[2]||(s[2]=v=>t.value.expirationDate=v),onChange:s[3]||(s[3]=v=>p(d).setCreditCardExpirationDate(t.value.expirationDate))},null,8,["modelValue"]),g(S,{label:"* CVV",placeholder:"XXX",modelValue:t.value.CVV,"onUpdate:modelValue":s[4]||(s[4]=v=>t.value.CVV=v),onChange:s[5]||(s[5]=v=>p(d).setCreditCardCVV(t.value.CVV))},null,8,["modelValue"])])):(u(),_("div",K,[(u(!0),_(x,null,O(p(l).cards,(v,y)=>(u(),_("div",{key:y},[e("div",{class:D(["card-info",{cardActive:a.value===y}]),onClick:R=>r(v,y)},[e("div",J,"NAME ON CARD : "+i(p(l).firstName)+" "+i(p(l).lastName),1),e("div",ee,"CARD NUMBER : "+i(C(v.cardNumber)),1),e("div",te,"EXPIRY DATE : "+i(new Date(v.expiryDate).toLocaleDateString()),1),e("div",oe,"CVV : "+i(v.cvv),1)],10,Q)]))),128))]))]))}});const ne=b(se,[["__scopeId","data-v-b9cc4185"]]),le=n=>(k("data-v-375ded5f"),n=n(),V(),n),ae={class:"content-box"},ie=le(()=>e("h2",null,"SHIPPING INFORMATION",-1)),ue={key:0},de={key:1},re=["onClick"],ce={class:"values"},pe={class:"values"},ve={class:"values"},_e=N({__name:"ShippingInfo",setup(n){const m=f(),l=E(),d=U(),a=d.GetUser,t=f({fullName:"",phoneNumber:"",street:"",city:"",country:"",zipcode:""}),c=f(!1);F(()=>{a.firstName=="Guest"?c.value=!0:c.value=!1});const h=()=>{c.value=!c.value},C=(r,o)=>{m.value=o,t.value.fullName=a.firstName,t.value.street=r.street,t.value.city=r.city,t.value.country=r.country,t.value.zipcode=r.zipcode,l.setShippingInfoFullName(t.value.fullName),l.setShippingInfoStreet(t.value.street),l.setShippingInfoCity(t.value.city),l.setShippingInfoCountry(t.value.country),l.setShippingInfoZipcode(t.value.zipcode)};return(r,o)=>(u(),_("div",ae,[ie,e("span",{onClick:h},i(c.value&&p(d).isAuthenticated?"USE EXISTING ADDRESS":"USE NEW ADDRESS"),1),c.value?(u(),_("div",ue,[W(e("input",{class:"ship1",placeholder:" Full Name",label:"* FULL NAME","min-length":"2","onUpdate:modelValue":o[0]||(o[0]=s=>t.value.fullName=s),onChange:o[1]||(o[1]=s=>p(l).setShippingInfoFullName(t.value.fullName))},null,544),[[B,t.value.fullName]]),e("div",null,[g(S,{class:"ship",placeholder:"Street",label:"* STREET",type:"street",required:"","min-length":"4",modelValue:t.value.street,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value.street=s),onChange:o[3]||(o[3]=s=>p(l).setShippingInfoStreet(t.value.street))},null,8,["modelValue"]),g(S,{class:"ship",label:"* CITY",placeholder:"City",type:"city",required:"","min-length":"4",modelValue:t.value.city,"onUpdate:modelValue":o[4]||(o[4]=s=>t.value.city=s),onChange:o[5]||(o[5]=s=>p(l).setShippingInfoCity(t.value.city))},null,8,["modelValue"]),g(S,{class:"ship",label:"* COUNTRY",placeholder:"Country",type:"country",required:"","min-length":"4",modelValue:t.value.country,"onUpdate:modelValue":o[6]||(o[6]=s=>t.value.country=s),onChange:o[7]||(o[7]=s=>p(l).setShippingInfoCountry(t.value.country))},null,8,["modelValue"]),g(S,{class:"ship",label:"* ZIP CODE",placeholder:"Zipcode",type:"zip-code",required:"","min-length":"5",modelValue:t.value.zipcode,"onUpdate:modelValue":o[8]||(o[8]=s=>t.value.zipcode=s),onChange:o[9]||(o[9]=s=>p(l).setShippingInfoZipcode(t.value.zipcode))},null,8,["modelValue"])])])):(u(),_("div",de,[p(a).addresses?(u(!0),_(x,{key:0},O(p(a).addresses,(s,v)=>(u(),_("div",{key:v},[e("div",{class:D(["address-info",{addressActive:m.value===v}]),onClick:y=>C(s,v)},[e("div",ce,i(p(a).firstName)+" "+i(p(a).lastName),1),e("div",pe,i(s.doorNumber)+" "+i(s.street)+", "+i(s.city),1),e("div",ve,i(s.country)+", "+i(s.zipcode),1)],10,re)]))),128)):I("",!0)]))]))}});const me=b(_e,[["__scopeId","data-v-375ded5f"]]),Ce=n=>(k("data-v-4ed0e42d"),n=n(),V(),n),he={class:"content-box"},fe=Ce(()=>e("h2",null,"GIFT CARD",-1)),ge=N({__name:"GiftCard",setup(n){const m=E(),l=f({cardNumber:"",pin:""});return(d,a)=>(u(),_("div",he,[fe,e("div",null,[g(S,{label:"GIFT CARD NUMBER",placeholder:"XXXX-XXXX-XX",modelValue:l.value.cardNumber,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value.cardNumber=t),onChange:a[1]||(a[1]=t=>p(m).setGiftCardNumber(l.value.cardNumber))},null,8,["modelValue"]),g(S,{label:"PIN",placeholder:"XXXX",modelValue:l.value.pin,"onUpdate:modelValue":a[2]||(a[2]=t=>l.value.pin=t),onChange:a[3]||(a[3]=t=>p(m).setGiftCardPin(l.value.pin))},null,8,["modelValue"])])]))}});const ye=b(ge,[["__scopeId","data-v-4ed0e42d"]]),X=n=>(k("data-v-551f20f1"),n=n(),V(),n),Ie={key:0,class:"confirmation-modal-window-container"},Se={class:"confirmation-modal-inner-part-container"},$e=X(()=>e("h2",{class:"confirmation-text"},"CONFIRMATION",-1)),Ne=X(()=>e("i",{class:"fas fa-times"},null,-1)),ke=[Ne],Ve={class:"components-wrapper"},be=X(()=>e("thead",null,[e("tr",null,[e("th",{colspan:"2"},"PRODUCT"),e("th",null,"QUANTITY"),e("th",null,"PRICE")])],-1)),De=["src"],Ee={class:"shipping-info"},Te=X(()=>e("p",null,"SHIPPING INFORMATIONS",-1)),Re={key:0},Ae={class:"total-container"},xe=N({__name:"ConfirmationModalWindow",props:{data:{type:Object,required:!0},show:{type:Boolean,required:!1}},emits:["toggleWindow"],setup(n,{emit:m}){const l=n;Y();const d=M(),a=()=>{m("toggleWindow")};P({products:l.data.orderItems.map(h=>d.getProductById(h.productId))});const t=()=>{window.print()},c=(h,C)=>h==null||C==null?0:h*C;return(h,C)=>l.show?(u(),_("div",Ie,[e("div",Se,[$e,e("div",{class:"confirmation-exit",onClick:a},ke),e("div",Ve,[e("button",{onClick:t},"PRINT"),e("table",null,[be,e("tbody",null,[(u(!0),_(x,null,O(n.data.orderItems,(r,o)=>{var s,v,y;return u(),_("tr",{key:o,class:"link-container"},[e("td",null,[e("img",{class:"image",src:(s=p(d).getProductById(r.productId))==null?void 0:s.image_link},null,8,De)]),e("td",null,i((v=p(d).getProductById(r.productId))==null?void 0:v.name),1),e("td",null,i(r.quantity),1),e("td",null,i(`${c((y=p(d).getProductById(r.productId))==null?void 0:y.price,r.quantity)}`)+"$",1)])}),128))])]),e("div",Ee,[Te,e("p",null,"NAME : "+i(n.data.shippingInfoFullName),1),e("p",null,"ADDRESS : "+i(n.data.shippingInfoStreet)+", "+i(n.data.shippingInfoCity)+", "+i(n.data.shippingInfoCountry),1)]),n.data.total>0?(u(),_("div",Re,[e("div",Ae,[e("p",null,"TOTAL : "+i(n.data.total.toFixed(2))+"$",1)])])):I("",!0)])])])):I("",!0)}});const Xe=b(xe,[["__scopeId","data-v-551f20f1"]]),we=n=>(k("data-v-e928d1f7"),n=n(),V(),n),Ue={class:"summary"},Oe=we(()=>e("h2",null,"ORDER SUMMARY",-1)),Me=N({__name:"CheckoutSummary",props:{checkoutText:String},setup(n){const m=E(),l=M(),d=$(()=>l.getSubTotal),a=$(()=>l.getShippingCost),t=$(()=>l.getTvq),c=$(()=>l.getTps),h=$(()=>d.value+a.value+t.value+c.value),C=$(()=>a.value===0?"Free":a.value.toFixed(2)+"$"),r=()=>{try{m.createOrder().then(w=>{w&&(y=w,s())})}catch(R){console.log(R)}},o=P({isConfirmationModalWindowShown:!1}),s=()=>{o.isConfirmationModalWindowShown=!o.isConfirmationModalWindowShown},v=()=>{s(),l.clearCart(),G.push("/products")};let y={customerId:"",orderItems:[],shippingInfoFullName:"",shippingInfoStreet:"",shippingInfoCity:"",shippingInfoCountry:"",shippingInfoZipcode:"",creditCardNumber:"",creditCardExpirationDate:"",creditCardCVV:"",giftCardNumber:"",giftCardPin:"",total:0};return(R,w)=>(u(),_("div",Ue,[Oe,e("p",null,"Product Subtotal : "+i(d.value.toFixed(2))+"$",1),e("p",null,"Estimated Shipping : "+i(C.value),1),e("p",null,"TVQ : "+i(t.value.toFixed(2))+"$",1),e("p",null,"TPS : "+i(c.value.toFixed(2))+"$",1),e("p",null,"TOTAL : "+i(h.value.toFixed(2))+"$",1),e("div",null,[e("button",{onClick:r,class:"checkout-btn"},i(n.checkoutText||"CHECKOUT"),1)]),g(Xe,{show:o.isConfirmationModalWindowShown,data:p(y),onToggleWindow:v},null,8,["show","data"])]))}});const Fe=b(Me,[["__scopeId","data-v-e928d1f7"]]),T=n=>(k("data-v-68955890"),n=n(),V(),n),Pe=T(()=>e("div",{class:"shipping"},"FREE SHIPPING | WITH ORDERS OVER $150",-1)),Ge={class:"checkout"},We={class:"checkout-content"},Be={class:"checkout-left"},Ye={class:"checkout-header"},ze=T(()=>e("h2",null,"CHECKOUT",-1)),qe={class:"checkout-steps"},Le=T(()=>e("div",{class:"step-circle"},[e("span",null,"1")],-1)),He=T(()=>e("div",{class:"step-circle"},[e("span",null,"2")],-1)),Ze=T(()=>e("div",{class:"step-circle"},[e("span",null,"3")],-1)),je={class:"checkout-body"},Ke={class:"checkout-form"},Qe={key:0},Je={key:1},et={class:"checkout-buttons"},tt={class:"checkout-right"},ot=N({__name:"Checkout",setup(n){const m=E(),l=M(),d=f(1),a=f(!1),t=f("shipping"),c=f(!1),h=U();z(()=>{const r=h.GetUserId;if(r==null)return G.push("/login");m.setCustomerId(r),m.setOrderItems(l.getCartItems),m.setTotal(l.getTotal)});const C=r=>{t.value=r,r==="payment"?(d.value=2,c.value=!1):r==="summary"?(d.value=3,c.value=!0):r==="shipping"&&(d.value=1,c.value=!1)};return(r,o)=>(u(),_(x,null,[Pe,e("div",Ge,[e("div",We,[e("div",Be,[e("div",Ye,[ze,e("div",qe,[e("div",{class:"step",onClick:o[0]||(o[0]=s=>C("shipping"))},[Le,e("p",{class:D({active:d.value===1})},"SHIPPING INFORMATION",2)]),e("div",{class:"step",onClick:o[1]||(o[1]=s=>C("payment"))},[He,e("p",{class:D({active:d.value===2})},"PAYMENT INFORMATION",2)]),e("div",{class:"step",onClick:o[2]||(o[2]=s=>C("summary"))},[Ze,e("p",{class:D({active:d.value===3})},"ORDER SUMMARY",2)])])]),c.value?(u(),A(q,{key:0})):I("",!0),e("div",je,[e("div",Ke,[t.value==="shipping"?(u(),A(me,{key:0})):I("",!0),t.value==="payment"?(u(),A(ne,{key:1,class:"card"})):I("",!0),t.value==="payment"?(u(),_("p",{key:2,class:"giftCard",onClick:o[3]||(o[3]=s=>a.value=!a.value)},[a.value?(u(),_("span",Je,"REMOVE GIFT CARD")):(u(),_("span",Qe,"ADD GIFT CARD"))])):I("",!0),t.value==="payment"&&a.value?(u(),A(ye,{key:3,class:"card"})):I("",!0)]),e("div",et,[t.value==="shipping"?(u(),_("button",{key:0,class:"next-btn",onClick:o[4]||(o[4]=s=>C("payment"))},"NEXT")):I("",!0),t.value==="payment"?(u(),_("button",{key:1,class:"next-btn",onClick:o[5]||(o[5]=s=>C("summary"))},"NEXT")):I("",!0)])])]),e("div",tt,[g(Fe,{checkoutText:"PLACE YOUR ORDER",class:"summary",onCheckout:o[6]||(o[6]=()=>{})})])])])],64))}});const ut=b(ot,[["__scopeId","data-v-68955890"]]);export{ut as default};
