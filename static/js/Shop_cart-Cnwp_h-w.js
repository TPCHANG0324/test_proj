import{K as I,l as a,v as S,g as u,h as s,j as g,F as b,G as X,A as i,a as P,o as m,E as j,C as V,H as B}from"./vue-CKwtPDem.js";import{_ as E}from"./MainFooter-BzOJofJ8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L=I("counter",{state:()=>({count:1}),actions:{accumulate(){this.count++}}}),M={class:"Sp-X"},w={class:"Sp-wrapper-X"},D={class:"Sp-shopping-cart-X"},F={class:"Sp-cart-items-wrapper-X"},J={class:"Sp-cart-item-info-X"},U={action:""},A={class:"Sp-cart-input-group-X"},G=["onClick"],H=["onInput","onUpdate:modelValue"],K=["onClick"],q={class:"Sp-shopping-cart-addon-X"},O={class:"Sp-cart-addon-wrapper-X"},Q={href:"#",target:"_blank",class:"Sp-cart-addon-item-img"},R=["src"],W={class:"Sp-cart-addon-item-content"},Y={class:"Sp-cart-addon-item-info"},Z=["onClick"],x={class:"Sp-shopping-info-X"},ss={class:"Sp-order-summary-X"},es={class:"Sp-order-summary-body"},ns={class:"Sp-order-summary-body-subtotal"},ls={class:"Sp-order-summary-body-points"},ts={class:"Sp-order-summary-body-coupon"},is={action:""},as=["value"],os={class:"Sp-order-summary-body-discount"},ps={class:"Sp-order-summary-body-amount"},cs={__name:"Shop_cart",setup(rs){const v=a(L()),t=a([{id:1,image:"src/assets/images/Sp06.jpg",name:"愛護地球環保袋",price:290,size:"不織布",num:1},{id:1,image:"src/assets/images/Sp06.jpg",name:"愛護地球環保袋",price:290,size:"不織布",num:1}]),o=a([{id:1,image:"src/assets/images/Sp08.jpg",name:"愛護地球環保杯",price:150,size:"無",num:1},{id:2,image:"src/assets/images/Sp09.jpg",name:"愛護地球環保杯2",price:180,size:"無",num:1},{id:3,image:"src/assets/images/Sp04.jpg",name:"設計款 - 愛護地球環保吸管",price:80,size:"無",num:1},{id:4,image:"src/assets/images/Sp11.jpg",name:"愛護地球環保筷",price:80,size:"無",num:1}]),y=n=>{t.value[n].num++},k=n=>{t.value[n].num<=1&&confirm("是否要刪除這個商品？")&&t.value.splice(n,1),t.value[n].num>1&&t.value[n].num--},C=n=>{confirm("是否要刪除這個商品？")&&t.value.splice(n,1)},h=(n,e)=>{if(e<0){alert("商品數量不可為負！"),t.value[n].num=1;return}else e===0?confirm("是否要刪除這個商品？")?t.value.splice(n,1):t.value[n].num=1:t.value[n].num=e},$=n=>{t.value.push({id:t.value.length-1,image:o.value[n].image,name:o.value[n].name,price:o.value[n].price,size:o.value[n].size,num:o.value[n].num})},f=S(()=>t.value.reduce((n,e)=>n+e.price*e.num,0)),c=a(1e3),p=a(0),T=()=>{p.value<=0||(p.value-=100,c.value+=100)},z=()=>{c.value<=0||(p.value+=100,c.value-=100)},_=S(()=>p.value/100),N=S(()=>f.value+100-_.value);return a(0),a(0),(n,e)=>(m(),u(b,null,[s("main",null,[s("div",M,[s("div",w,[e[19]||(e[19]=g('<div class="Sp-checkout-nav-X"><div class="Sp-step-X active"><span class="Sp-badge-X"><div class="Sp-badge-text-X">1</div></span><span>購物車</span></div><div class="Sp-step-X"><span class="Sp-badge-X"><div class="Sp-badge-text-X">2</div></span><span>填寫資料</span></div><div class="Sp-step-X"><span class="Sp-badge-X"><div class="Sp-badge-text-X">3</div></span><span>購買完成</span></div></div>',1)),s("section",D,[e[5]||(e[5]=s("div",{class:"Sp-section-header"},"購物車",-1)),s("div",F,[e[4]||(e[4]=s("div",{class:"Sp-table-header-X"},[s("div",null,"商品資料"),s("div",null,"規格"),s("div",null,"單件價格"),s("div",null,"數量"),s("div",null,"小計"),s("div")],-1)),(m(!0),u(b,null,X(t.value,(l,r)=>(m(),u("div",{class:"Sp-cart-item-X",key:l.id},[s("div",J,[s("a",{href:"#",target:"_blank",style:j({backgroundImage:`url(${l.image})`})},null,4),s("span",null,i(l.name),1)]),s("div",null,i(l.size),1),s("div",null,"NT$ "+i(l.price),1),s("div",null,[s("form",U,[s("div",A,[s("span",{onClick:d=>k(r)},e[1]||(e[1]=[s("i",{class:"bi bi-dash"},null,-1)]),8,G),V(s("input",{onInput:d=>h(r,l.num),type:"number","onUpdate:modelValue":d=>l.num=d,step:"1",min:"0"},null,40,H),[[B,l.num]]),s("span",{onClick:d=>y(r)},e[2]||(e[2]=[s("i",{class:"bi bi-plus"},null,-1)]),8,K)])])]),s("div",null,"NT$ "+i(l.price*l.num),1),s("div",{onClick:C},e[3]||(e[3]=[s("i",{class:"bi bi-trash3-fill"},null,-1)]))]))),128))])]),s("section",q,[e[6]||(e[6]=s("div",{class:"Sp-section-header"},"精選商品",-1)),s("div",O,[(m(!0),u(b,null,X(o.value,(l,r)=>(m(),u("div",{class:"Sp-cart-addon-item-X",key:l.id},[s("a",Q,[s("img",{src:l.image,alt:""},null,8,R)]),s("div",W,[s("div",Y,[s("p",null,i(l.name),1),s("span",null,"NT$ "+i(l.price),1)]),s("button",{onClick:d=>$(r)},"加入購物車",8,Z)])]))),128))])]),s("section",x,[e[18]||(e[18]=g('<section class="Sp-order-form-X"><div class="Sp-order-form-header">選擇送貨及付款方式</div><div class="Sp-order-form-body"><label for="">送貨方式</label><select name="" id=""><option value="新竹物流宅配">新竹物流宅配</option><option value="台灣離島郵寄">台灣離島郵寄</option></select><label for="">付款方式</label><select name="" id=""><option value="信用卡 (Visa/Master/JCB)">信用卡 (Visa/Master/JCB)</option><option value="Line Pay">Line Pay</option></select></div></section>',1)),s("section",ss,[e[17]||(e[17]=s("div",{class:"Sp-order-summary-header"},"訂單資訊",-1)),s("div",es,[s("div",ns,[e[7]||(e[7]=s("span",null,"小計：",-1)),s("span",null,"NT$ "+i(f.value),1)]),e[14]||(e[14]=s("div",{class:"Sp-order-summary-body-delivery"},[s("span",null,"運費："),s("span",null,"NT$ 100")],-1)),s("div",ls,[e[8]||(e[8]=s("span",null,"目前可用點數：",-1)),s("span",null,i(c.value),1)]),s("div",ts,[e[11]||(e[11]=s("label",{for:""},"本次使用點數：",-1)),s("form",is,[s("span",{onClick:T},e[9]||(e[9]=[s("i",{class:"bi bi-dash"},null,-1)])),s("input",{type:"number",value:p.value,step:"100",min:"0"},null,8,as),s("span",{onClick:z},e[10]||(e[10]=[s("i",{class:"bi bi-plus"},null,-1)]))])]),s("div",os,[e[12]||(e[12]=s("span",null,"折抵金額：",-1)),s("span",null,"- NT$ "+i(_.value),1)]),e[15]||(e[15]=s("hr",null,null,-1)),s("div",ps,[e[13]||(e[13]=s("span",null,"合計：",-1)),s("span",null,"NT$ "+i(N.value),1)]),e[16]||(e[16]=s("a",{href:"#",class:"Sp-checkout-Btn"},"前往結帳",-1))])])]),e[20]||(e[20]=g('<section class="Sp-shopping-reminder-X"><div class="Sp-shopping-reminder-header">出貨提醒</div><div class="Sp-shopping-reminder-body">感謝您支持我們的環保商品！以下是您的訂單與出貨注意事項： 📦 出貨時間： 涼城即時環保市集皆為客製化生產，製作期需2-3週。 訂單成立後，我們將立即安排生產。若提前完成品檢，我們會儘速出貨。 若您選購了其他現貨商品，建議您與預購商品分開結帳，以便現貨能提前寄出。 📬 取貨注意事項： 若您選擇便利商店取貨，請確保「收件人姓名」與身分證一致，以免影響取件流程。 🔍 尺寸與材質說明： 杯子容量：350ml / 500ml / 750ml 材質：100%再生寶特瓶纖維 (rPET) + 天然纖維 耐熱程度：80°C（請避免直接加熱） ❗ 特殊說明： 再生環保馬克杯為特殊客製化商品，非商品瑕疵，恕不接受退換貨。 若您有尺寸或其他需求疑慮，請於下單前確認商品規格。 如需重新訂製，需再等待2-3週生產期。 💳 付款方式： 本店支援 LINE Pay 結帳，歡迎使用！ 如有任何問題，歡迎隨時與我們聯繫！🌱 選擇再生材質，與我們一起為地球減少負擔。</div><div class="Sp-shopping-reminder-body"><p>感謝您支持我們的環保商品！以下是您的訂單與出貨注意事項：</p><p>📦 出貨時間：</p><p>涼城即時環保市集皆為客製化生產，製作期需2-3週。</p><p>訂單成立後，我們將立即安排生產。若提前完成品檢，我們會儘速出貨。</p><p>若您選購了其他現貨商品，建議您與預購商品分開結帳，以便現貨能提前寄出。</p><p>📬 取貨注意事項：</p><p>若您選擇便利商店取貨，請確保「收件人姓名」與身分證一致，以免影響取件流程。</p><p>🔍 尺寸與材質說明：</p><p>杯子容量：350ml / 500ml / 750ml</p><p>材質：100%再生寶特瓶纖維 (rPET) + 天然纖維</p><p>耐熱程度：80°C（請避免直接加熱）</p><p>❗ 特殊說明：</p><p>再生環保馬克杯為特殊客製化商品，非商品瑕疵，恕不接受退換貨。</p><p>若您有尺寸或其他需求疑慮，請於下單前確認商品規格。</p><p>如需重新訂製，需再等待2-3週生產期。</p><p>💳 付款方式：</p><p>本店支援 LINE Pay 結帳，歡迎使用！</p><p>如有任何問題，歡迎隨時與我們聯繫！🌱 選擇再生材質，與我們一起為地球減少負擔。</p></div></section>',1))])]),s("p",null,i(v.value.count),1),s("button",{onClick:e[0]||(e[0]=(...l)=>v.value.accumulate&&v.value.accumulate(...l))},"測試按鈕")]),P(E)],64))}};export{cs as default};
