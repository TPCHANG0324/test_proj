import{_,a as m,b as c}from"./MainHeader-TYdChFAl.js";import{c as b,a as e,b as n,d as a,e as y,u as p,B as u,w as v,f as S,g as f}from"./index-BqAI5X0x.js";const x={name:"support",data(){return{payment_method:""}}},k={class:"Support_box_S"},N={class:"payment_section_S"},V={class:"payment_content"},B={class:"linepay"},g={class:"ecpay"},w={class:"payment_step_S"};function C(l,t,M,$,s,h){const i=m,d=S("router-link"),r=c;return f(),b("div",null,[e(i),t[9]||(t[9]=n("div",{class:"Support_banner_S"},[n("h1",null,[a("您的支持"),n("br"),a("幫助地球生態扭轉危機！")])],-1)),n("div",k,[t[8]||(t[8]=y('<p>是的！我珍愛地球環境與生態 <br>我要與自然、社會共生共好，永續發展。</p><div class="donate_choise_S"><button class="donate_type_month active">每月捐款</button><button class="donate_type_once">單次捐款</button></div><div class="donate_amount_S"><button class="amount">$800<br>新台幣</button><button class="amount">$1000<br>新台幣</button><button class="amount">$1200<br>新台幣</button></div><div class="custom_amount_S"><span>自訂金額</span><input type="text" placeholder="請輸入金額" class="custom_amount_input"></div>',4)),n("div",N,[n("div",V,[t[7]||(t[7]=n("label",null,[a("選擇付款方式"),n("span",{class:"marker",title:"此欄位不可空白"},"*")],-1)),n("label",B,[p(n("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.payment_method=o),type:"radio",class:"payment_method",value:"Line Pay行動支付"},null,512),[[u,s.payment_method]]),t[3]||(t[3]=n("span",null,"Line Pay行動支付",-1))]),n("label",g,[p(n("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.payment_method=o),type:"radio",class:"payment_method",value:"綠界金流服務(信用卡)"},null,512),[[u,s.payment_method]]),t[4]||(t[4]=n("span",{class:"ecpay1"},"綠界金流服務(信用卡)",-1)),t[5]||(t[5]=n("br",null,null,-1)),t[6]||(t[6]=n("span",{class:"ecpay2"},"(信用卡才能進行定期捐款)",-1))])]),n("div",w,[e(d,{to:"/pay1"},{default:v(()=>[n("button",{class:"next_step",onClick:t[2]||(t[2]=(...o)=>l.handleNextStep&&l.handleNextStep(...o))},"下一步")]),_:1})])])]),e(r)])}const U=_(x,[["render",C]]);export{U as default};
