import{c as m,b as r,H as n,u as d,B as u,I as w,t as p,s as b,g as f}from"./index-CX60_QnO.js";import{_ as g}from"./logo_color1-B74jzoJR.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v={name:"member_login",data(){return{formData:{email:"",password:""},passwordVisible:!1,formErrors:{email:"",password:""}}},watch:{"formData.password"(o){this.validatePasswordFormat(o)},"formData.email"(o){this.validateEmailFormat(o)}},methods:{showNewMemberPopup(){document.querySelector(".member_login").style.display="none",document.querySelector(".popupnewmember").style.display="block"},togglePasswordVisibility(){this.passwordVisible=!this.passwordVisible},validatePasswordFormat(o){const s=/[A-Z]/.test(o),a=/[a-z]/.test(o),l=/[0-9]/.test(o);return o?!s||!a||!l?this.formErrors.password="密碼必須包含大寫字母、小寫字母和數字":this.formErrors.password="":this.formErrors.password="請輸入密碼",s&&a&&l},validateEmailFormat(o){const s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return o?s.test(o)?this.formErrors.email="":this.formErrors.email="請輸入有效的電子郵件地址":this.formErrors.email="請輸入電子郵件",s.test(o)},handleSubmit(){if(this.validateEmailFormat(this.formData.email),this.validatePasswordFormat(this.formData.password),!(this.formErrors.email||this.formErrors.password)){if(!this.validatePasswordFormat(this.formData.password)){this.formErrors.password="密碼必須包含大寫字母、小寫字母和數字";return}alert("登入成功!歡迎光臨涼城即時"),this.resetForm()}},resetForm(){this.formData={email:"",password:""},this.passwordVisible=!1,this.formErrors={email:"",password:""}}}},y={class:"member-login-container"},E={class:"member-login-card"},c={class:"member-login-input-group"},D={class:"member-login-input-group"},V={class:"password-input-wrapper"},F=["type"],P={key:0,class:"error-message"},_={class:"member-login-links"};function k(o,s,a,l,e,i){return f(),m("div",y,[r("div",E,[s[9]||(s[9]=r("img",{src:g,alt:"涼城即時 Be Cool Now",class:"member-login-logo"},null,-1)),s[10]||(s[10]=r("h1",{class:"member-login-title"},"會員登入",-1)),r("form",{class:"member-login-form",onSubmit:s[5]||(s[5]=n((...t)=>i.handleSubmit&&i.handleSubmit(...t),["prevent"]))},[r("div",c,[s[6]||(s[6]=r("label",{for:"account"},"帳號",-1)),d(r("input",{id:"account","onUpdate:modelValue":s[0]||(s[0]=t=>e.formData.email=t),type:"email",placeholder:"請輸入電子郵件",required:""},null,512),[[u,e.formData.email]])]),r("div",D,[s[7]||(s[7]=r("label",{for:"password"},"密碼",-1)),r("div",V,[d(r("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=t=>e.formData.password=t),type:e.passwordVisible?"text":"password",placeholder:"須包含英文字母大小寫與數字",required:"",onBlur:s[2]||(s[2]=t=>i.validatePasswordFormat(e.formData.password))},null,40,F),[[w,e.formData.password]]),r("button",{type:"button",class:"toggle-password",onClick:s[3]||(s[3]=(...t)=>i.togglePasswordVisibility&&i.togglePasswordVisibility(...t))},p(e.passwordVisible?"🙉":"🙈"),1)]),e.formErrors.password?(f(),m("span",P,p(e.formErrors.password),1)):b("",!0)]),s[8]||(s[8]=r("button",{type:"submit",class:"member-login-submit-btn"},"登入",-1)),r("div",_,[r("a",{href:"#",class:"member-login-register",onClick:s[4]||(s[4]=n(t=>o.$emit("switch"),["prevent"]))},"還不是會員嗎？新會員註冊")])],32)])])}const x=h(v,[["render",k]]);export{x as default};
