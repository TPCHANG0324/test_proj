import{_ as r}from"./MainFooter-C0xFkTuX.js";import{_}from"./MainHeader-BoK8IE9j.js";import{i as c,a as s,j as e,k as a,l as y,C as p,K as i,w as b,m as v,o as S}from"./vue-4_Lw-QOu.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x={name:"support",data(){return{payment_method:""}},methods:{handleNextStep(){this.payment_method?alert(`您選擇的付款方式是：${this.payment_method}`):alert("請選擇付款方式！")}}},h={class:"Support_box_S"},k={class:"payment_section_S"},N={class:"payment_content"},V={class:"linepay"},C={class:"ecpay"},w={class:"payment_step_S"};function B(M,t,g,L,o,l){const m=_,d=v("router-link"),u=r;return S(),c("div",null,[s(m),t[9]||(t[9]=e("div",{class:"Support_banner_S"},[e("h1",null,[a("您的支持"),e("br"),a("幫助地球生態扭轉危機！")])],-1)),e("div",h,[t[8]||(t[8]=y('<p>是的！我珍愛地球環境與生態 <br>我要與自然、社會共生共好，永續發展。</p><div class="donate_choise_S"><button class="donate_type_month active">每月捐款</button><button class="donate_type_once">單次捐款</button></div><div class="donate_amount_S"><button class="amount">$800<br>新台幣</button><button class="amount">$1000<br>新台幣</button><button class="amount">$1200<br>新台幣</button></div><div class="custom_amount_S"><span>自訂金額</span><input type="text" placeholder="請輸入金額" class="custom_amount_input"></div>',4)),e("div",k,[e("div",N,[t[7]||(t[7]=e("label",null,[a("選擇付款方式"),e("span",{class:"marker",title:"此欄位不可空白"},"*")],-1)),e("label",V,[p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.payment_method=n),type:"radio",class:"payment_method",value:"Line Pay行動支付"},null,512),[[i,o.payment_method]]),t[3]||(t[3]=e("span",null,"Line Pay行動支付",-1))]),e("label",C,[p(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o.payment_method=n),type:"radio",class:"payment_method",value:"綠界金流服務(信用卡)"},null,512),[[i,o.payment_method]]),t[4]||(t[4]=e("span",{class:"ecpay1"},"綠界金流服務(信用卡)",-1)),t[5]||(t[5]=e("br",null,null,-1)),t[6]||(t[6]=e("span",{class:"ecpay2"},"(信用卡才能進行定期捐款)",-1))])]),e("div",w,[s(d,{to:"/pay1"},{default:b(()=>[e("button",{class:"next_step",onClick:t[2]||(t[2]=(...n)=>l.handleNextStep&&l.handleNextStep(...n))},"下一步")]),_:1})])])]),s(u)])}const D=f(x,[["render",B]]);export{D as default};
