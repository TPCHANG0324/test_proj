import{_ as O}from"./MainFooter-BbDs3lvA.js";import{_ as E}from"./MainHeader-BwKZ71TX.js";import{i as S,r as d,g as n,c as o,b as e,s as M,F as m,y as b,q as y,t as l,m as j,o as R,a as I,u as W,C as z,z as K,d as L}from"./index-D4fVlGfC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const U={class:"Sp-pages-X"},H=["onClick"],Y={__name:"paginator",props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,required:!0}},emits:["page-changed"],setup(X,{emit:f}){const u=f,r=X;S(()=>r.currentPage,g=>{c.value=g});const c=d(r.currentPage),F=g=>{g!==c.value&&(c.value=g,u("page-changed",c.value))};S(()=>r.totalPages,g=>c.value=g);const P=()=>{c.value>1&&F(c.value-1)},p=()=>{c.value<r.totalPages&&F(c.value+1)};return(g,h)=>(n(),o("div",U,[e("ul",null,[c.value>1?(n(),o("li",{key:0,class:"Sp-pages-prev",onClick:P},h[0]||(h[0]=[e("i",{class:"bi bi-caret-left-fill"},null,-1)]))):M("",!0),(n(!0),o(m,null,b(X.totalPages,_=>(n(),o("li",{key:_,class:y({current:_===c.value}),onClick:C=>F(_)},[e("span",null,l(_),1)],10,H))),128)),c.value<X.totalPages?(n(),o("li",{key:1,class:"Sp-pages-next",onClick:p},h[1]||(h[1]=[e("i",{class:"bi bi-caret-right-fill"},null,-1)]))):M("",!0)])]))}},G={class:"Fb-X"},J={class:"Fb-wrapper-X"},Q={class:"Fb-post-X"},Z={class:"Fb-post-category-X"},ee={class:"Fb-post-category-box"},te=["value"],se=["onClick"],ae={class:"Fb-post-article-left-X"},ne={class:"Fb-post-article-left-C-T-X"},oe={class:"Fb-post-article-left-title-X"},le={class:"Fb-post-react-X"},ce={class:"bi bi-hand-thumbs-up"},ie={class:"bi bi-chat"},re={key:0,class:"Fb-post-article-right-X"},ue=["src"],ge=["href"],ve={class:"new-left-X"},de=["src"],pe={class:"new-right-X"},he={class:"new-time-X"},_e={class:"new-title-X"},me={class:"Fb-news-X"},be={class:"Fb-news-body-X"},ye=["href"],fe=["src"],Fe={class:"Fb-news-body-container-X"},ke={class:"Fb-news-body-container-time-X"},we={class:"Fb-news-body-container-title-X"},Xe={class:"Fb-news-body-container-content-X"},je={__name:"social",setup(X){const f=d(["全部文章","氣候科學","生態危機","綠色生活","政策國際"]),u=d(0),r=d(!1),c=s=>{u.value=s,r.value=!1},F=()=>{r.value=!1},P=()=>{r.value=!0},p=d(1),g=j(()=>Math.ceil(C.value.length/5)),h=d(null);S(u,s=>{p.value=1});const _=s=>{p.value=s,h.value.scrollIntoView({behavior:"smooth"})},C=j(()=>T.value.filter(s=>u.value===0?T.value:s.category===f.value[u.value])),q=j(()=>{const s=(p.value-1)*5,a=p.value*5;return C.value.slice(s,a)}),D=d(new Date),v=d([]),N=s=>{const a=s.getFullYear(),k=s.getMonth()<9?"0"+String(s.getMonth()+1):String(s.getMonth()+1),w=s.getDate()<10?"0"+String(s.getDate()):String(s.getDate());return`${a}-${k}-${w}`},B=()=>{const s="全球%氣候",a="c37e23185827432d8fd46365f1de40be",k=["氣候變遷","暖化","綠能","回收","汙染","永續","能源政策","環保"],w=new RegExp(k.join("|")),t=new Date(D.value);t.setDate(D.value.getDate()-30);const i=N(t),V=N(D.value),A=`https://newsapi.org/v2/everything?q=${s}
  &from=${i}&to=${V}&sortBy=popularity&apiKey=${a}`;fetch(A).then($=>$.json()).then($=>{v.value=[...$.articles],v.value.reverse(),v.value=v.value.filter(x=>w.test(x.description)&&x.urlToImage),v.value=v.value.slice(0,8),v.value.reverse()})};R(()=>{B()});const T=d([{category:"氣候科學",time:"2024-12-25",title:"日本異常高溫 預估2024年均溫將續創統計史新高",content:"（中央社東京25日綜合外電報導）日本氣象廳今天公布天氣總結指出，日本今年1月到11月的平均氣溫較1991年到2020年平均氣溫升高攝氏1.64度，比2023年的升高1.29度還多，預料將連續兩年創統計史新高紀錄。",handup:100,chat:100,image:"src/assets/images/Fb10.jpg"},{category:"政策國際",time:"2024-12-25",title:"調查：助低收者因應極端氣候 8成6支持政府釋資源",content:"台大風險中心舉辦「2024台灣公正轉型調查發布」記者會，針對淨零排放、氣候變遷雙主軸，對全國18歲以上民眾，在17日到25日使用室內電話、行動電話2種電話訪問調查，有效樣本1102份，以95%信賴度估計，抽樣誤差在正、負2.95個百分點之內。",handup:100,chat:100,image:""},{category:"生態危機",time:"2024-12-25",title:"北極氣候暖化 耶誕老人故鄉不下雪引擔憂",content:"（中央社芬蘭羅文尼米26日綜合外電報導）隨著耶誕節的腳步日漸接近，耶誕老人的工作進入緊鑼密鼓的忙碌階段。但是氣候暖化導致他位在北極圈的老家下雪量不足，就連耶誕老人都十分擔心。",handup:100,chat:100,image:"src/assets/images/Fb11.jpg"},{category:"政策國際",time:"2024-12-25",title:"COP29終於達成氣候融資協議 峰會重點一次看",content:"（中央社巴庫24日綜合外電報導）亞塞拜然首都巴庫舉行的聯合國氣候變化綱要公約第29次締約方會議（COP29）歷經2週的緊張協商，最終在期限過後2天達成氣候融資協議。路透社整理本次峰會的重點如下：",handup:100,chat:100,image:"src/assets/images/Fb04.jpg"},{category:"生態危機",time:"2024-12-25",title:"太平洋高壓西進擴大 台灣面臨極端高溫及乾旱",content:"（中央社記者張雄風台北28日電）氣象署今天表示，統計過去70年，太平洋高壓系統逐漸西進擴大，近10年甚至已經涵蓋到中國華南沿岸，足見全球暖化的影響；台灣未來將面臨更為頻繁的極端高溫，及乾旱事件所帶來的氣候風險。",handup:100,chat:100,image:"src/assets/images/Fb14.jpg"},{category:"綠色生活",time:"2024-12-25",title:"《綠色生活行動指南》：適合每個人的日常生活環保起手式",content:"根據統計，全球每年浪費掉的食物約為 13 億公噸，是生產量的 3 分之 1，而每噸廚餘經過掩埋處理，會產生約 221.35 公斤二氧化碳、14.7 公斤甲烷，總計每年為了處理廚餘，就製造高達 44 億噸的溫室氣體。",handup:100,chat:100,image:""},{category:"氣候科學",time:"2024-12-25",title:"日本異常高溫 預估2024年均溫將續創統計史新高",content:"（中央社東京25日綜合外電報導）日本氣象廳今天公布天氣總結指出，日本今年1月到11月的平均氣溫較1991年到2020年平均氣溫升高攝氏1.64度，比2023年的升高1.29度還多，預料將連續兩年創統計史新高紀錄。",handup:100,chat:100,image:"src/assets/images/Fb10.jpg"},{category:"政策國際",time:"2024-12-25",title:"調查：助低收者因應極端氣候 8成6支持政府釋資源",content:"台大風險中心舉辦「2024台灣公正轉型調查發布」記者會，針對淨零排放、氣候變遷雙主軸，對全國18歲以上民眾，在17日到25日使用室內電話、行動電話2種電話訪問調查，有效樣本1102份，以95%信賴度估計，抽樣誤差在正、負2.95個百分點之內。",handup:100,chat:100,image:""},{category:"生態危機",time:"2024-12-25",title:"北極氣候暖化 耶誕老人故鄉不下雪引擔憂",content:"（中央社芬蘭羅文尼米26日綜合外電報導）隨著耶誕節的腳步日漸接近，耶誕老人的工作進入緊鑼密鼓的忙碌階段。但是氣候暖化導致他位在北極圈的老家下雪量不足，就連耶誕老人都十分擔心。",handup:100,chat:100,image:"src/assets/images/Fb11.jpg"},{category:"政策國際",time:"2024-12-25",title:"COP29終於達成氣候融資協議 峰會重點一次看",content:"（中央社巴庫24日綜合外電報導）亞塞拜然首都巴庫舉行的聯合國氣候變化綱要公約第29次締約方會議（COP29）歷經2週的緊張協商，最終在期限過後2天達成氣候融資協議。路透社整理本次峰會的重點如下：",handup:100,chat:100,image:"src/assets/images/Fb04.jpg"},{category:"生態危機",time:"2024-12-25",title:"太平洋高壓西進擴大 台灣面臨極端高溫及乾旱",content:"（中央社記者張雄風台北28日電）氣象署今天表示，統計過去70年，太平洋高壓系統逐漸西進擴大，近10年甚至已經涵蓋到中國華南沿岸，足見全球暖化的影響；台灣未來將面臨更為頻繁的極端高溫，及乾旱事件所帶來的氣候風險。",handup:100,chat:100,image:"src/assets/images/Fb14.jpg"},{category:"綠色生活",time:"2024-12-25",title:"《綠色生活行動指南》：適合每個人的日常生活環保起手式",content:"根據統計，全球每年浪費掉的食物約為 13 億公噸，是生產量的 3 分之 1，而每噸廚餘經過掩埋處理，會產生約 221.35 公斤二氧化碳、14.7 公斤甲烷，總計每年為了處理廚餘，就製造高達 44 億噸的溫室氣體。",handup:100,chat:100,image:""}]);return(s,a)=>{const k=E,w=O;return n(),o("main",null,[I(k),e("div",G,[e("div",J,[e("div",Q,[e("div",{class:"Fb-post-category-container-X",ref_key:"top",ref:h},[e("ul",Z,[e("div",ee,[W(e("select",{id:"",name:"",class:y({active:!r.value}),onChange:F,"onUpdate:modelValue":a[0]||(a[0]=t=>u.value=t)},[(n(!0),o(m,null,b(f.value,(t,i)=>(n(),o("option",{value:i,key:i},l(t),9,te))),128))],34),[[z,u.value]])]),e("p",{class:y({active:r.value}),onClick:P},"熱門新聞",2),(n(!0),o(m,null,b(f.value,(t,i)=>(n(),o("li",{key:i,class:y({active:u.value===i}),onClick:V=>c(i)},l(t),11,se))),128))]),a[1]||(a[1]=e("div",{class:"Fb-post-write-X"},[e("a",{href:"#"},"寫文章")],-1))],512),e("div",{class:y(["Fb-post-article-X",{active:!r.value}])},[a[4]||(a[4]=e("div",{class:"Fb-post-article-top-X"},null,-1)),e("section",null,[(n(!0),o(m,null,b(q.value,(t,i)=>(n(),o("article",{key:i},[e("div",ae,[e("div",ne,[e("span",null,l(t.category),1),a[2]||(a[2]=L(" ‧ ")),e("span",null,l(t.time),1)]),e("h6",oe,l(t.title),1),e("p",null,l(t.content),1),e("div",le,[e("i",ce,l(t.handup),1),e("i",ie,l(t.chat),1),a[3]||(a[3]=e("i",{class:"bi bi-share"},null,-1))])]),t.image?(n(),o("div",re,[e("img",{src:t.image,alt:""},null,8,ue)])):M("",!0)]))),128))]),(n(),K(Y,{key:u.value,currentPage:p.value,totalPages:g.value,onPageChanged:_},null,8,["currentPage","totalPages"]))],2),e("div",{class:y(["Fb-news-article-X",{active:r.value}])},[(n(!0),o(m,null,b(v.value,(t,i)=>(n(),o("article",{key:i},[e("a",{href:t.url,target:"_blank"},[e("div",ve,[e("img",{src:t.urlToImage,alt:""},null,8,de)]),e("div",pe,[e("span",he,"新聞 ‧ "+l(t.publishedAt.split("T")[0]),1),e("h6",_e,l(t.title),1),e("p",null,l(t.description),1)])],8,ge)]))),128))],2)]),e("div",me,[a[5]||(a[5]=e("div",{class:"Fb-news-header-X"},"熱門新聞",-1)),e("div",be,[(n(!0),o(m,null,b(v.value,(t,i)=>(n(),o("article",{key:i},[e("a",{href:t.url,target:"_blank"},[e("img",{src:t.urlToImage,alt:""},null,8,fe),e("div",Fe,[e("div",ke,l(t.publishedAt.split("T")[0]),1),e("div",we,l(t.title),1),e("div",Xe,l(t.description),1)])],8,ye)]))),128))])])])]),I(w)])}}};export{je as default};
