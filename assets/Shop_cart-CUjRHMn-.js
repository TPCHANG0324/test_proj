import{D as V,r as l,m as S,c as u,a as g,b as s,e as _,F as y,y as k,t as i,w as L,f as j,g as m,x as B,u as E,C as w,d as D}from"./index-CMTQDsVp.js";import{_ as M,a as F}from"./MainHeader-DNHi6zyg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const J=V("counter",{state:()=>({count:1}),actions:{accumulate(){this.count++}}}),R={class:"Sp-X"},U={class:"Sp-wrapper-X"},q={class:"Sp-shopping-cart-X"},A={class:"Sp-cart-items-wrapper-X"},G={class:"Sp-cart-item-info-X"},H={action:""},K={class:"Sp-cart-input-group-X"},O=["onClick"],Q=["onUpdate:modelValue","onInput"],W=["onClick"],Y={class:"Sp-shopping-cart-addon-X"},Z={class:"Sp-cart-addon-wrapper-X"},x={href:"#",target:"_blank",class:"Sp-cart-addon-item-img"},ss=["src"],es={class:"Sp-cart-addon-item-content"},ns={class:"Sp-cart-addon-item-info"},ts=["onClick"],as={class:"Sp-shopping-info-X"},is={class:"Sp-order-summary-X"},ls={class:"Sp-order-summary-body"},os={class:"Sp-order-summary-body-subtotal"},ps={class:"Sp-order-summary-body-points"},rs={class:"Sp-order-summary-body-coupon"},ds={action:""},us=["value"],ms={class:"Sp-order-summary-body-discount"},cs={class:"Sp-order-summary-body-amount"},bs={__name:"Shop_cart",setup(vs){const v=l(J()),a=l([{id:1,image:"src/assets/images/Sp06.jpg",name:"愛護地球環保袋",price:290,size:"不織布",num:1},{id:1,image:"src/assets/images/Sp06.jpg",name:"愛護地球環保袋",price:290,size:"不織布",num:1}]),o=l([{id:1,image:"src/assets/images/Sp08.jpg",name:"愛護地球環保杯",price:150,size:"無",num:1},{id:2,image:"src/assets/images/Sp09.jpg",name:"愛護地球環保杯2",price:180,size:"無",num:1},{id:3,image:"src/assets/images/Sp04.jpg",name:"設計款 - 愛護地球環保吸管",price:80,size:"無",num:1},{id:4,image:"src/assets/images/Sp11.jpg",name:"愛護地球環保筷",price:80,size:"無",num:1}]),C=n=>{a.value[n].num++},h=n=>{a.value[n].num<=1&&confirm("是否要刪除這個商品？")&&a.value.splice(n,1),a.value[n].num>1&&a.value[n].num--},T=n=>{confirm("是否要刪除這個商品？")&&a.value.splice(n,1)},$=(n,e)=>{if(e<0){alert("商品數量不可為負！"),a.value[n].num=1;return}else e===0?confirm("是否要刪除這個商品？")?a.value.splice(n,1):a.value[n].num=1:a.value[n].num=e},N=n=>{a.value.push({id:a.value.length-1,image:o.value[n].image,name:o.value[n].name,price:o.value[n].price,size:o.value[n].size,num:o.value[n].num})},b=S(()=>a.value.reduce((n,e)=>n+e.price*e.num,0)),c=l(1e3),p=l(0),z=()=>{p.value<=0||(p.value-=100,c.value+=100)},I=()=>{c.value<=0||(p.value+=100,c.value-=100)},f=S(()=>p.value/100),P=S(()=>b.value+100-f.value);return l(0),l(0),(n,e)=>{const X=j("RouterLink");return m(),u("main",null,[g(M),s("div",R,[s("div",U,[e[19]||(e[19]=_('<div class="Sp-checkout-nav-X"><div class="Sp-step-X active"><span class="Sp-badge-X"><div class="Sp-badge-text-X">1</div></span><span>購物車</span></div><div class="Sp-step-X"><span class="Sp-badge-X"><div class="Sp-badge-text-X">2</div></span><span>填寫資料</span></div><div class="Sp-step-X"><span class="Sp-badge-X"><div class="Sp-badge-text-X">3</div></span><span>購買完成</span></div></div>',1)),s("section",q,[e[5]||(e[5]=s("div",{class:"Sp-section-header"},"購物車",-1)),s("div",A,[e[4]||(e[4]=s("div",{class:"Sp-table-header-X"},[s("div",null,"商品資料"),s("div",null,"規格"),s("div",null,"單件價格"),s("div",null,"數量"),s("div",null,"小計"),s("div")],-1)),(m(!0),u(y,null,k(a.value,(t,r)=>(m(),u("div",{key:t.id,class:"Sp-cart-item-X"},[s("div",G,[s("a",{href:"#",target:"_blank",style:B({backgroundImage:`url(${t.image})`})},null,4),s("span",null,i(t.name),1)]),s("div",null,i(t.size),1),s("div",null,"NT$ "+i(t.price),1),s("div",null,[s("form",H,[s("div",K,[s("span",{onClick:d=>h(r)},e[1]||(e[1]=[s("i",{class:"bi bi-dash"},null,-1)]),8,O),E(s("input",{"onUpdate:modelValue":d=>t.num=d,type:"number",step:"1",min:"0",onInput:d=>$(r,t.num)},null,40,Q),[[w,t.num]]),s("span",{onClick:d=>C(r)},e[2]||(e[2]=[s("i",{class:"bi bi-plus"},null,-1)]),8,W)])])]),s("div",null,"NT$ "+i(t.price*t.num),1),s("div",{onClick:T},e[3]||(e[3]=[s("i",{class:"bi bi-trash3-fill"},null,-1)]))]))),128))])]),s("section",Y,[e[6]||(e[6]=s("div",{class:"Sp-section-header"},"精選商品",-1)),s("div",Z,[(m(!0),u(y,null,k(o.value,(t,r)=>(m(),u("div",{key:t.id,class:"Sp-cart-addon-item-X"},[s("a",x,[s("img",{src:t.image,alt:""},null,8,ss)]),s("div",es,[s("div",ns,[s("p",null,i(t.name),1),s("span",null,"NT$ "+i(t.price),1)]),s("button",{onClick:d=>N(r)},"加入購物車",8,ts)])]))),128))])]),s("section",as,[e[18]||(e[18]=_('<section class="Sp-order-form-X"><div class="Sp-order-form-header">選擇送貨及付款方式</div><div class="Sp-order-form-body"><label for="">送貨方式</label><select id="" name=""><option value="新竹物流宅配">新竹物流宅配</option><option value="台灣離島郵寄">台灣離島郵寄</option></select><label for="">付款方式</label><select id="" name=""><option value="信用卡 (Visa/Master/JCB)">信用卡 (Visa/Master/JCB)</option><option value="Line Pay">Line Pay</option></select></div></section>',1)),s("section",is,[e[17]||(e[17]=s("div",{class:"Sp-order-summary-header"},"訂單資訊",-1)),s("div",ls,[s("div",os,[e[7]||(e[7]=s("span",null,"小計：",-1)),s("span",null,"NT$ "+i(b.value),1)]),e[15]||(e[15]=s("div",{class:"Sp-order-summary-body-delivery"},[s("span",null,"運費："),s("span",null,"NT$ 100")],-1)),s("div",ps,[e[8]||(e[8]=s("span",null,"目前可用點數：",-1)),s("span",null,i(c.value),1)]),s("div",rs,[e[11]||(e[11]=s("label",{for:""},"本次使用點數：",-1)),s("form",ds,[s("span",{onClick:z},e[9]||(e[9]=[s("i",{class:"bi bi-dash"},null,-1)])),s("input",{type:"number",value:p.value,step:"100",min:"0"},null,8,us),s("span",{onClick:I},e[10]||(e[10]=[s("i",{class:"bi bi-plus"},null,-1)]))])]),s("div",ms,[e[12]||(e[12]=s("span",null,"折抵金額：",-1)),s("span",null,"- NT$ "+i(f.value),1)]),e[16]||(e[16]=s("hr",null,null,-1)),s("div",cs,[e[13]||(e[13]=s("span",null,"合計：",-1)),s("span",null,"NT$ "+i(P.value),1)]),g(X,{to:"/shop_checkout",class:"Sp-checkout-Btn"},{default:L(()=>e[14]||(e[14]=[D("前往結帳")])),_:1})])])]),e[20]||(e[20]=_('<section class="Sp-shopping-reminder-X"><div class="Sp-shopping-reminder-header">出貨提醒</div><div class="Sp-shopping-reminder-body"> 感謝您支持我們的環保商品！以下是您的訂單與出貨注意事項： 📦 出貨時間： 涼城即時環保市集皆為客製化生產，製作期需2-3週。 訂單成立後，我們將立即安排生產。若提前完成品檢，我們會儘速出貨。 若您選購了其他現貨商品，建議您與預購商品分開結帳，以便現貨能提前寄出。 📬 取貨注意事項： 若您選擇便利商店取貨，請確保「收件人姓名」與身分證一致，以免影響取件流程。 🔍 尺寸與材質說明： 杯子容量：350ml / 500ml / 750ml 材質：100%再生寶特瓶纖維 (rPET) + 天然纖維 耐熱程度：80°C（請避免直接加熱） ❗ 特殊說明： 再生環保馬克杯為特殊客製化商品，非商品瑕疵，恕不接受退換貨。 若您有尺寸或其他需求疑慮，請於下單前確認商品規格。 如需重新訂製，需再等待2-3週生產期。 💳 付款方式： 本店支援 LINE Pay 結帳，歡迎使用！ 如有任何問題，歡迎隨時與我們聯繫！🌱 選擇再生材質，與我們一起為地球減少負擔。 </div><div class="Sp-shopping-reminder-body"><p>感謝您支持我們的環保商品！以下是您的訂單與出貨注意事項：</p><p>📦 出貨時間：</p><p>涼城即時環保市集皆為客製化生產，製作期需2-3週。</p><p>訂單成立後，我們將立即安排生產。若提前完成品檢，我們會儘速出貨。</p><p>若您選購了其他現貨商品，建議您與預購商品分開結帳，以便現貨能提前寄出。</p><p>📬 取貨注意事項：</p><p>若您選擇便利商店取貨，請確保「收件人姓名」與身分證一致，以免影響取件流程。</p><p>🔍 尺寸與材質說明：</p><p>杯子容量：350ml / 500ml / 750ml</p><p>材質：100%再生寶特瓶纖維 (rPET) + 天然纖維</p><p>耐熱程度：80°C（請避免直接加熱）</p><p>❗ 特殊說明：</p><p>再生環保馬克杯為特殊客製化商品，非商品瑕疵，恕不接受退換貨。</p><p>若您有尺寸或其他需求疑慮，請於下單前確認商品規格。</p><p>如需重新訂製，需再等待2-3週生產期。</p><p>💳 付款方式：</p><p>本店支援 LINE Pay 結帳，歡迎使用！</p><p>如有任何問題，歡迎隨時與我們聯繫！🌱 選擇再生材質，與我們一起為地球減少負擔。</p></div></section>',1))])]),s("p",null,i(v.value.count),1),s("button",{onClick:e[0]||(e[0]=(...t)=>v.value.accumulate&&v.value.accumulate(...t))},"測試按鈕"),g(F)])}}};export{bs as default};
