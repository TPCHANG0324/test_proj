var M=(x,r,i)=>new Promise((s,g)=>{var f=o=>{try{l(i.next(o))}catch(h){g(h)}},c=o=>{try{l(i.throw(o))}catch(h){g(h)}},l=o=>o.done?s(o.value):Promise.resolve(o.value).then(f,c);l((i=i.apply(x,r)).next())});import{g as p,h as L,o as m,i as u,l as G,p as N,a as y,c as O,B as T,j as a,F as b,G as k,w as Z,u as I,k as D,A as _,C,H as A,y as z,z as S,I as E}from"./vue-4_Lw-QOu.js";import{_ as V}from"./MainHeader-BoK8IE9j.js";import{_ as K}from"./MainFooter-C0xFkTuX.js";import J from"./popup-RZDL7aMs.js";import q from"./loginPopupChange-DwQ3U35o.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo_color1-CT0ognt4.js";import"./popupnewmember-B0irF35s.js";const P="/beCoolNow_project/static/png/activity2-wKKooDVG.png",F="/beCoolNow_project/static/png/ACd-C4Df0MxO.png",H="/beCoolNow_project/static/png/acfinial-CXaqFmQV.png",j="/beCoolNow_project/static/jpeg/defaultavatar-56bZ-s3K.jpeg",W="/beCoolNow_project/static/jpg/Ac08-KwFhKM1T.jpg",Y="/beCoolNow_project/static/png/newAC-Bx8Uz720.png",$={class:"popup"},X={__name:"treeanimation",setup(x){const r=p(null),i=()=>{if(typeof TweenMax=="undefined"||typeof TimelineMax=="undefined"){console.error("GSAP libraries not loaded properly");return}try{f(),s(),g(),console.log("Animation initialized successfully")}catch(c){console.error("Error initializing animation:",c)}},s=()=>{console.log("Setting up animation"),TweenMax.set("#shadow",{scale:0,transformOrigin:"15px 8px"}),TweenMax.set("#tree",{scale:0,transformOrigin:"154px bottom"}),TweenMax.set("#leaf-rb",{scale:0,rotation:-60,y:-15,transformOrigin:"left bottom"}),TweenMax.set("#leaf-rm",{scale:0,rotation:-50,y:30,transformOrigin:"left bottom"}),TweenMax.set("#leaf-lb",{scale:0,rotation:60,y:-80,transformOrigin:"right bottom"}),TweenMax.set("#leaf-lm",{scale:0,rotation:40,y:-90,transformOrigin:"right bottom"}),TweenMax.set("#leaf-top",{scale:0,transformOrigin:"center bottom"})},g=()=>{console.log("Starting animation"),r.value=new TimelineMax({delay:.42,repeat:0}),r.value.to("#shadow",2,{scale:1}).to("#tree",2,{scale:1},0).to("#leaf-rb",2,{scale:1,rotation:0,y:0},.35).to("#leaf-rm",2,{scale:1,rotation:0,y:0},.4).to("#leaf-lb",2,{scale:1,rotation:0,y:0},.45).to("#leaf-lm",2,{scale:1,rotation:0,y:0},.5).to("#leaf-top",2.5,{scale:1},.55).to("#animation",.3,{opacity:0})},f=()=>{console.log("Stopping animation"),TweenMax.killAll(!1,!0,!1),["#tree","#shadow","#leaf-top","#leaf-rb","#leaf-rm","#leaf-lb","#leaf-lm"].forEach(c=>{TweenMax.set(c,{clearProps:"all"})})};return L(()=>{i()}),(c,l)=>(m(),u("div",$,l[0]||(l[0]=[G('<svg id="animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 302.7 436.37"><defs><linearGradient id="Dégradé_sans_nom_18" data-name="Dégradé sans nom 18" x1="156.31" y1="365.15" x2="246.31" y2="431.81" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#39505d"></stop><stop offset="1" stop-color="#39505d" stop-opacity="0"></stop></linearGradient><linearGradient id="Dégradé_sans_nom_4" data-name="Dégradé sans nom 4" x1="200.34" y1="253.69" x2="176.67" y2="221.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#929669"></stop><stop offset="0.23" stop-color="#929669"></stop><stop offset="1" stop-color="#fdfcf1"></stop></linearGradient><linearGradient id="Dégradé_sans_nom_2" data-name="Dégradé sans nom 2" x1="303.2" y1="168.65" x2="213.62" y2="249.02" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#45aa3a"></stop><stop offset="1" stop-color="#3d9439"></stop></linearGradient><linearGradient id="Dégradé_sans_nom_3" data-name="Dégradé sans nom 3" x1="236.83" y1="175.48" x2="254.62" y2="212.29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41a83b"></stop><stop offset="1" stop-color="#5ebc44"></stop></linearGradient><linearGradient id="Dégradé_sans_nom_4-2" x1="196.6" y1="195.74" x2="177" y2="178.38" xlink:href="#Dégradé_sans_nom_4"></linearGradient><linearGradient id="Dégradé_sans_nom_3-2" x1="296.11" y1="44.64" x2="176.48" y2="155.68" xlink:href="#Dégradé_sans_nom_3"></linearGradient><linearGradient id="Dégradé_sans_nom_2-2" x1="274.3" y1="150.3" x2="231.97" y2="99.99" xlink:href="#Dégradé_sans_nom_2"></linearGradient><linearGradient id="Dégradé_sans_nom_4-3" x1="-19.56" y1="223.16" x2="218.1" y2="279.92" xlink:href="#Dégradé_sans_nom_4"></linearGradient><linearGradient id="Dégradé_sans_nom_2-3" x1="16.11" y1="204.08" x2="92.18" y2="276.48" xlink:href="#Dégradé_sans_nom_2"></linearGradient><linearGradient id="Dégradé_sans_nom_2-4" x1="106.7" y1="255.03" x2="106.7" y2="255.03" xlink:href="#Dégradé_sans_nom_2"></linearGradient><linearGradient id="Dégradé_sans_nom_3-3" x1="63.36" y1="209.36" x2="54.16" y2="240.65" xlink:href="#Dégradé_sans_nom_3"></linearGradient><linearGradient id="Dégradé_sans_nom_4-4" x1="75.32" y1="182.31" x2="144.32" y2="160.33" xlink:href="#Dégradé_sans_nom_4"></linearGradient><linearGradient id="Dégradé_sans_nom_2-5" x1="19.89" y1="76.27" x2="141.37" y2="193.45" xlink:href="#Dégradé_sans_nom_2"></linearGradient><linearGradient id="Dégradé_sans_nom_3-4" x1="38.58" y1="178.83" x2="83.36" y2="134.66" xlink:href="#Dégradé_sans_nom_3"></linearGradient><linearGradient id="Dégradé_sans_nom_39" data-name="Dégradé sans nom 39" x1="148.36" y1="248.02" x2="163.23" y2="248.02" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cbccb1"></stop><stop offset="0.69" stop-color="#a8ab84"></stop><stop offset="1" stop-color="#abae89"></stop></linearGradient><linearGradient id="Dégradé_sans_nom_2-6" x1="147.41" y1="4.1" x2="181.15" y2="164.83" xlink:href="#Dégradé_sans_nom_2"></linearGradient><linearGradient id="Dégradé_sans_nom_3-5" x1="98.37" y1="94.42" x2="168.31" y2="80.31" xlink:href="#Dégradé_sans_nom_3"></linearGradient></defs><title>mongo-tree</title><g id="shadow"><path d="M172,366c1,6,93.49,68.65,93.49,68.65l-19.53,1s-61.8-40.89-84.32-54.19-19.06-14.2-19.07-14.21c-.46-.45,2-4.64,11.81-4.64S171.88,363.56,172,366Z" transform="translate(-1.14 -2.3)" opacity="0.1" fill="url(#Dégradé_sans_nom_18)"></path></g><g id="tree"><g id="leaf-rb"><g><path d="M226.46,217.24S207.89,223.52,201,229c-2.12,1.69.56,1.74.52,3.5,0,0,30.61,20,66.11-3.15,25.12-18.4,27.8-37.3,30.61-40.42a45.85,45.85,0,0,1,5.32-6.52Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_2)"></path><path d="M296.79,182.08c-4.39-2.39-28-14.22-60.31-2s-38.85,46.27-38.85,46.27c3.37,3.66,9.48-1.84,18.58-5,8.63-3,19.24-7.3,30-12.34,5.66-2.66,54.85-23.65,57.66-26.82C301.3,183,300.29,183.34,296.79,182.08Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_3)"></path></g><path d="M214.36,221.93c-8.15,2.8-14.29,4.4-16.71,4.41-8.73,8.22-47.32,28-47.32,28l.33,3.69s42.57-24.81,47.09-25.68a8.57,8.57,0,0,1,4,.26l-.21-.13C201.6,228.71,208,224.83,214.36,221.93Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_4)"></path></g><g id="leaf-rm"><g><path d="M278.57,52c-5.14,3.07-32.38,1.65-65.06,31.82-42.24,43.41-22.55,91.82-22.55,91.82,10.05,8.39,28.23-30.77,28.23-30.77l70-98.55A65.5,65.5,0,0,1,278.57,52Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_3-2)"></path><path d="M287.76,55.87c-.8-5.26-.08-6.58,1.86-9.89-5.21,3.07-48.13,66.28-53.41,73.48a463.05,463.05,0,0,0-28,43c-2.27,4-8.66,10.5-10.19,13.58-2.21,4.45.88,4.89.52,6.76,0,0,49.56.17,75.53-41.78S289.91,62.69,287.76,55.87Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_2-2)"></path></g><path d="M209.28,160.51c-5.8,8.06-13,16-18.34,15.1l-.12-.3c-7.31,14.08-39.23,40.24-39.23,40.24l2.08,2.47s30.9-29.42,45-35.26h-.15C199.16,179.4,203.11,171.2,209.28,160.51Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_4-2)"></path></g><g id="leaf-lb"><polygon points="106.7 255.03 106.7 255.03 106.7 255.03 106.7 255.03" fill="url(#Dégradé_sans_nom_2-3)"></polygon><g><path d="M100,250,1.44,217.33a45.85,45.85,0,0,1,5.93,6c3.09,2.83,7.59,21.39,34.37,37.28,37.57,19.65,66.11-3.25,66.11-3.25A7.91,7.91,0,0,0,100,250Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_2-4)"></path><path d="M68,208.52c-33.34-9-55.7,5-59.83,7.83-3.37,1.59-4.4,1.37-7,.73,3.1,2.88,54.07,19.08,60,21.12C101,252,104,253,111.12,250.82,111.12,250.82,101.32,217.54,68,208.52Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_3-3)"></path></g><path d="M151.59,271.16s-26.7-11.72-40.52-20.5l.05.17A63.85,63.85,0,0,1,93,249c6.56,2.28,14.39,4.57,14.84,8.33h0l-.2.15a8.57,8.57,0,0,1,3.94-.64c4.58.43,40,18,40,18Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_4-3)"></path></g><g id="leaf-lm"><g><path d="M100.8,117C68.12,86.85,40.88,88.27,35.74,85.2a65.5,65.5,0,0,1-10.6-5.68l70,98.55S108.58,201.6,118,210c3.14,2.8,2.73-.7,5.36-1.16C123.36,208.84,143,160.43,100.8,117Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_2-5)"></path><path d="M78.1,152.7c-5.28-7.21-48.21-70.41-53.41-73.48,1.94,3.32,2.66,4.63,1.86,9.89-2.15,6.81-12.26,43.16,13.71,85.11S115.79,216,115.79,216c-.38-2-.31-3.08-2.79-8C106.73,195.59,92.83,172.8,78.1,152.7Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_3-4)"></path></g><path d="M124.21,214.16a12.25,12.25,0,0,1-.73-5.65l-.13.33c-5.34.92-12.54-7-18.34-15.1,6.17,10.68,10.11,18.87,10.77,22.24,12.74,9.65,33.34,37.83,33.34,37.83l5.08-1.47S126.67,220.25,124.21,214.16Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_4-4)"></path></g><g id="main"><g id="leaf-top"><path d="M190.25,76.57c-9.85-43.37-33.1-57.63-35.6-63.08a65.5,65.5,0,0,1-5.52-10.68L151,123.66s-3.84,36.9,5.84,41.35C156.83,165,200.48,136.27,190.25,76.57Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_2-6)"></path><path d="M151.33,93.11c.06-8.93.15-85.33-2.4-90.81-.28,3.83-.43,5.32-4.07,9.21-5.63,4.4-34.55,28.63-36.91,77.91s38.59,77.21,38.59,77.21C151,165,151,147,151.33,93.11Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_3-5)"></path></g><path id="stem" d="M172.18,366.33l0-.12a1.74,1.74,0,0,0-.23-.59C157.31,327.94,153,183,154.53,169.88a9.89,9.89,0,0,1,2.16-4.95A111.2,111.2,0,0,1,151,139s-3,21-4.64,27.5c5.39,21.3,2.7,91.54,1.07,142.46-.94,29.43-3.93,37.31-5.62,57.36h.12a1.48,1.48,0,0,0,0,.16c0,2.57,6.78,4.66,15.14,4.66s15.14-2.09,15.14-4.66a1.48,1.48,0,0,0,0-.16Z" transform="translate(-1.14 -2.3)" fill="url(#Dégradé_sans_nom_39)"></path></g></g></svg>',1)])))}},Q={class:"wrapper"},tt={class:"daily_card"},at={class:"action-count"},et=["src"],nt={class:"Ac_h3"},st=["onClick"],ot={key:1,id:"learnMoreBtn",class:"learn_more"},rt={key:2,class:"collapse_section"},lt={class:"letter-container"},it={class:"stats-bar"},ct={class:"letter scrollable-content"},dt={class:"letter-card"},pt={class:"letter-content"},mt={class:"signature-line"},gt={class:"name"},_t=["src","alt"],ut={class:"background-container"},ft={class:"letter-form-container"},ht={class:"form-group"},yt={class:"form-group"},vt={class:"captcha-group"},Dt={class:"captcha-code"},Nt={__name:"Activity",setup(x){const r=p(JSON.parse(localStorage.getItem("letters"))||[]),i=p(parseInt(localStorage.getItem("totalLetters"))||1228),s=p({name:"",message:"",captcha:""}),g=p([{title:"Day 1 給地球的一封信",desc:"你有沒有什麼話想對地球說呢？無論是祝福、感謝、提醒，或者是另一種真實的聲音，歡迎你用不同的觀點，寫下給地球的一封信。",img:new URL("/beCoolNow_project/static/jpg/Ac02-B5y8TYz5.jpg",import.meta.url).href,action:1111},{title:"Day 2 現在，花 3 秒鐘和手機一起開啟「專注模式」",desc:"開啟手機的「專注模式」，除了可以暫時遠離通知的干擾、沉浸當下，還能減少能源耗損。今天，為自己和手機開啟一段專注時間吧！",img:new URL("/beCoolNow_project/static/jpg/Ac03-GOXyd-V4.jpg",import.meta.url).href,action:1111},{title:"Day 3 向身邊一棵樹說謝謝",desc:"今天抽空走到身邊最近的樹旁，謝謝他吸收二氧化碳、釋放氧氣，也感謝他滋養著以樹為家的植物、動物，豐富了「高空生態系」。",img:new URL("/beCoolNow_project/static/jpg/Ac04-DwhniD5D.jpg",import.meta.url).href,action:1111},{title:"Day 4 前往離你最近的公園， 完成一次「無痕」散步",desc:"無痕精神，來自無痕山林的概念。前往離你最近的公園，試試看、只留下回憶與足跡，不留下垃圾。",img:new URL("/beCoolNow_project/static/jpg/Ac05-MkR682sc.jpg",import.meta.url).href,action:1111},{title:"Day 5 退訂一份電子報",desc:"你「取消訂閱」信箱中超過一個月沒打開的電子報！花 10 秒取消一份天天發送的電子報，每年就能減少 109.5g數位碳排放。",img:new URL("/beCoolNow_project/static/png/acnew-BZeJq8EO.png",import.meta.url).href,action:1111},{title:"Day 6 打消一個購買念頭",desc:"花一分鐘列出最近想買的東西，試著從清單中劃掉一項，決定不買它了！如果不知道要如何刪去，來參考這三個小練習。",img:new URL("/beCoolNow_project/static/jpg/Ac07-BGeuLhLK.jpg",import.meta.url).href,action:1111},{title:"Day 7 出門前，把餐具、環保杯、購物袋放進包包",desc:"養成運動習慣的第一步，是帶運動衣出門；要擁抱更環保、減少廢棄的永續生活，現在把「餐具、環保杯、購物袋」放進包包。",img:new URL("/beCoolNow_project/static/jpg/AC_d7-BZbrT_zj.jpg",import.meta.url).href,action:1111},{title:"Day 8 和 AI 聊聊 ─ 給「台灣第一個生成式 AI 永續機器人」一個問題",desc:"加入「小綠行動中」，並試著輸入一個關於永續的問題。透過生成式 AI永續機器人，隨時隨地，即時獲得永續的解答和靈感。",img:new URL("/beCoolNow_project/static/png/day08_new-mYm-xSey.png",import.meta.url).href,action:1111},{title:"Day 9 練習一次：關於洗手的減法",desc:"世界衛生組織：「覆蓋雙手表面」的泡沫量已足夠，用太多洗手乳不僅無益、還會耗費更多水。今天試試以平常一半的量來洗手。",img:new URL("/beCoolNow_project/static/png/AC_Day9-B_3UdfC4.png",import.meta.url).href,action:1111},{title:"Day 10 猜猜看，哪一個是「負碳」國家？",desc:"是冰島、不丹，還是紐西蘭？這個國家生產充足的潔淨能源，更以憲法規定國土的森林覆蓋率不低於60%，成為全球少數的負碳國。",img:new URL("/beCoolNow_project/static/png/AC_day09-0VbCtPOB.png",import.meta.url).href,action:1111},{title:"Day 11 憑直覺比比看，洗髮與保養的「碳排放」高低",desc:"每天，我們在洗沐和保養的過程中都會產生碳排放。根據自己的「碳直覺」，比比看洗髮和保養的「碳排放」。",img:new URL("/beCoolNow_project/static/png/AC_Day11-D0O-PEKh.png",import.meta.url).href,action:1111},{title:"Day 12 下一餐，蔬食",desc:"搜尋附近的美味蔬食，下一餐就去吃！美國環境工作小組估算，一餐不吃肉就能減少 760g碳排、約為開車四公里所產生的碳排。",img:new URL("/beCoolNow_project/static/png/Ac_Day12-I06tFtY7.png",import.meta.url).href,action:1111},{title:"Day 13 投給你最喜歡的台灣特有種一票",desc:"台灣森林覆蓋率超過一半，孕育著豐富的生態和特有種，包括台灣黑熊、台灣山椒魚、紅檜、台灣百合等。",img:new URL("/beCoolNow_project/static/png/AC_Day13-DW-RK4k_.png",import.meta.url).href,action:1111},{title:"Day 14 找出身邊用最久的物品",desc:"花十秒鐘，找出今天身邊陪你最久的物品！也歡迎你拍張照分享你和它的故事，「用久一點」就是為環境做的一件好事。",img:new URL("/beCoolNow_project/static/png/AC_Day14-DdV9uLh1.png",import.meta.url).href,action:1111},{title:"Day 15 解決碗中最後一粒米",desc:"下一餐，把飯菜都吃光！以台灣為例，平均每人每年產生約 22.2 公斤剩食，每餐飯都能以「完食」對地球好一次。",img:new URL("/beCoolNow_project/static/png/AC_Day15-Bm6HBKLE.png",import.meta.url).href,action:1111},{title:"Day 16 自我檢測你的發票雲端等級",desc:"以三個分級檢測 (A) 發票都記得存載具 (B) 有載具 App (C) 沒聽過載具，你是哪種？",img:new URL("/beCoolNow_project/static/png/AC_Day16-DCs6kAEN.png",import.meta.url).href,action:1111},{title:"Day 17 完成一次百分百垃圾分類",desc:"買網購、叫外送、喝一瓶罐裝飲料...你會將廢棄物一視同仁嗎？今天嘗試辨識一個可回收的廢棄物，從一般垃圾丟至回收區吧！",img:new URL("/beCoolNow_project/static/png/AC_Day17-DdzdJ662.png",import.meta.url).href,action:1111},{title:"Day 18 挑戰：下一餐，少一件垃圾",desc:"少一雙免洗筷、少一個塑膠湯匙、或是少一張衛生紙，挑戰讓下一餐少一件垃圾，也許，比想像中還容易！",img:new URL("/beCoolNow_project/static/png/AC_Day18-3z-Eo8xC.png",import.meta.url).href,action:1111},{title:"Day 19 丟掉 3 個冰箱裡不要的東西",desc:"維持冰箱最佳表現小訣竅：丟棄那些以為還會拿來吃，但已是陳年食材、醬料。多一些空氣循環，少一些能源消耗與碳排。",img:new URL("/beCoolNow_project/static/png/AC_Day19-CKFYXDmN.png",import.meta.url).href,action:1111},{title:"Day 20 從衣櫃裡，找出「最熟悉的陌生衣」",desc:"找出深埋在衣櫃中那件「最熟悉的陌生衣」，讓你很喜歡卻忘記穿的它，重回日常穿搭！或是，二手與回收，也能賦予它新生命。",img:new URL("/beCoolNow_project/static/png/AC_DAY20-DpJ0pd6B.png",import.meta.url).href,action:1111},{title:"Day 21 找到離你最近的「循環杯」",desc:"喝飲料、外帶咖啡，不一定要自備環保杯也能降低一次性垃圾？搜尋看看，離你最近的「循環杯」在哪裡？",img:new URL("/beCoolNow_project/static/png/AC_Day21-DjLM9kMJ.png",import.meta.url).href,action:1111}]),f=p(),c=p(0),l=p(6),o=p(null);N(r,n=>{localStorage.setItem("letters",JSON.stringify(n))},{deep:!0}),N(i,n=>{localStorage.setItem("totalLetters",n.toString())});const h=n=>{try{return n||j}catch(t){return j}},w=()=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let e=0;e<4;e++)t+=n.charAt(Math.floor(Math.random()*n.length));f.value=t},U=n=>M(this,null,function*(){if(n.preventDefault(),!s.value.name||!s.value.message){alert("請填寫姓名和信件內容！");return}if(s.value.captcha!==f.value){alert("驗證碼錯誤！");return}const t={name:s.value.name,message:s.value.message,avatar:j};r.value.unshift(t),i.value++,s.value={name:"",message:"",captcha:""},w(),yield z();const e=document.querySelector(".letter-card");e&&c.value&&(e.style.width=`${c.value}px`)});L(()=>{r.value.length===0&&(r.value=[{name:"小明",message:`親愛的地球：
你好！我是小明，我最喜歡在公園裡跑來跑去，也喜歡去海邊玩沙子。
媽媽說，我們要愛護你，不能亂丟垃圾，也不能浪費水。地球，我想告訴你，以後我會和同學一起種很多小樹，讓你變得更漂亮。希望等我長大，你還是一個很美麗的大地球！`,avatar:h(W)},{name:"愛你的地球公民",message:`親愛的地球：
謝謝你無私地滋養著我們，給予藍天、白雲、青山與綠水。你的四季輪替，讓我們感受到生命的變化與美好。然而，我們也深知自己的行為正在傷害你。請相信我們仍在努力修補這段關係，從減少塑膠、節能減碳到植樹造林。我們希望未來的你，依然能展現純淨與和平，讓我們的後代也能擁抱你。`,avatar:h(Y)}],localStorage.setItem("letters",JSON.stringify(r.value))),(()=>{const t=document.querySelector(".letter-card");t&&(c.value=t.offsetWidth)})(),w()});const R=()=>{const n=document.getElementById("learnMoreBtn"),t=document.getElementById("collapseBtn"),e=document.getElementById("extraCards"),d=document.querySelector(".collapse_section");n==null||n.addEventListener("click",v=>{v.preventDefault(),e.classList.add("expanded"),e.style.maxHeight=e.scrollHeight+"px",n.classList.add("hidden"),d.classList.remove("hidden")}),t==null||t.addEventListener("click",v=>{v.preventDefault(),e.classList.remove("expanded"),e.style.maxHeight="0px",n.classList.remove("hidden"),d.classList.add("hidden")}),document.querySelectorAll(".btn-Ac_done_btn"),document.querySelector(".popup")},B=n=>{o.value=n,setTimeout(()=>{o.value=null},4e3)};return L(()=>{console.log("Initializing component..."),R()}),(n,t)=>(m(),u(b,null,[y(V),o.value!==null?(m(),O(X,{key:0})):T("",!0),a("div",Q,[t[8]||(t[8]=a("div",{class:"hero-section"},[a("img",{src:P,alt:"banner"}),a("div",{class:"hero-text"},[a("h1",null,"「綠色行動，從今天開始」"),a("h2",null,"改變，讓奇蹟發生")])],-1)),t[9]||(t[9]=a("h3",{class:"Ac_h3"},"21 日減碳環保活動",-1)),a("div",tt,[(m(!0),u(b,null,k(g.value.slice(0,l.value),(e,d)=>(m(),u("div",{key:d,class:S(["AcB_card",{darkGreen_card:d%2===1}])},[a("header",null,[t[5]||(t[5]=a("i",{class:"fa-regular fa-circle-check"},null,-1)),t[6]||(t[6]=D(" 累積")),a("span",at,_(e.action),1),t[7]||(t[7]=D("次行動 "))]),a("img",{src:e.img,alt:""},null,8,et),a("h3",nt,_(e.title),1),a("article",null,_(e.desc),1),a("button",{class:S(["btn btn-Ac_done_btn",{disabled:o.value===d}]),onClick:v=>B(d)},_(o.value===d?"感謝你的響應！":"我也完成 +1"),11,st)],2))),128))])]),l.value!==g.value.length?(m(),u("div",ot,[y(I(E),{onClick:t[0]||(t[0]=e=>l.value=g.value.length)},{default:Z(()=>t[10]||(t[10]=[D("Learn More")])),_:1})])):(m(),u("div",rt,[a("button",{id:"collapseBtn",class:"btnclose",onClick:t[1]||(t[1]=e=>l.value=6)},"收合")])),t[18]||(t[18]=a("hr",{class:"dashed-line"},null,-1)),t[19]||(t[19]=a("h3",{class:"Ac_h3"},[a("br"),D("給地球的一封信")],-1)),a("div",lt,[t[12]||(t[12]=G('<div class="mac-window"><div class="mac-buttons"><div class="mac-btn red"></div><div class="mac-btn yellow"></div><div class="mac-btn green"></div></div></div>',1)),a("div",it,"現在總共有 "+_(i.value)+" 封給地球的信",1),a("div",ct,[(m(!0),u(b,null,k(r.value,(e,d)=>(m(),u("div",{key:d,class:"letter_place1"},[a("div",dt,[a("p",pt,_(e.message),1),a("div",mt,[t[11]||(t[11]=a("div",{class:"spacer"},null,-1)),a("div",gt,"- "+_(e.name),1)])]),a("img",{src:h(e.avatar),alt:e.name+"頭像",class:"avatar"},null,8,_t)]))),128))])]),a("div",ut,[t[17]||(t[17]=a("img",{src:F,alt:"背景圖片",class:"background-image"},null,-1)),a("div",ft,[a("form",{class:"letter-form",onSubmit:U},[a("div",ht,[t[13]||(t[13]=a("label",{for:"name",class:"message0"},"姓名或暱稱：",-1)),C(a("input",{id:"name_Ac","onUpdate:modelValue":t[2]||(t[2]=e=>s.value.name=e),type:"text",placeholder:"請輸入您的姓名"},null,512),[[A,s.value.name]])]),a("div",yt,[t[14]||(t[14]=a("label",{for:"message",class:"message"},"信件內容：",-1)),C(a("textarea",{id:"message","onUpdate:modelValue":t[3]||(t[3]=e=>s.value.message=e),placeholder:"寫下你的信給地球吧！"},null,512),[[A,s.value.message]])]),a("div",vt,[t[15]||(t[15]=a("label",{for:"captcha",class:"message1"},"請輸入驗證碼：",-1)),C(a("input",{id:"captcha","onUpdate:modelValue":t[4]||(t[4]=e=>s.value.captcha=e),type:"text"},null,512),[[A,s.value.captcha]]),a("span",Dt,_(f.value),1),a("button",{type:"button",class:"refresh-captcha",onClick:w},"換一張")]),t[16]||(t[16]=a("button",{type:"submit",class:"submit-btn"},"寫給地球的一封信",-1))],32)])]),t[20]||(t[20]=G('<hr class="dashed-line"><div class="carbon-reduction-card"><div class="text-content"><h1>今日減碳行動：<br>讓我們一‘碳’究境碳排放的真相</h1><p> 透過即時的交通資訊與數據化的減碳工具，讓通勤族和環保推動者輕鬆採取更低碳、更高效的生活方式。<br> 一“碳”究竟的友站致力於讓低碳選擇變得便捷且有趣，激發更多人為地球的可持續發展貢獻力量。 </p><button class="learn-more-button">深入了解</button></div><div class="image-content"><img src="'+H+'" alt="煙囪排放煙霧的圖片"></div></div>',2)),y(J,{class:"member_login"}),y(q),y(K)],64))}};export{Nt as default};
