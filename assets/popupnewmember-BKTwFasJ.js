import{c as f,b as t,H as b,u as a,B as m,I as d,t as p,g as u}from"./index-D4fVlGfC.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={name:"popupnewmember",data(){return{formData:{name:"",email:"",password:"",confirmPassword:""},passwordVisible:!1,confirmPasswordVisible:!1}},methods:{togglePasswordVisibility(){this.passwordVisible=!this.passwordVisible},toggleConfirmPasswordVisibility(){this.confirmPasswordVisible=!this.confirmPasswordVisible},test(){console.log("ssss"),this.$emit("switch")},validatePassword(r){const s=/[A-Z]/.test(r),l=/[a-z]/.test(r),n=/[0-9]/.test(r);return s&&l&&n},handleSubmit(){if(!this.formData.name||!this.formData.email||!this.formData.password||!this.formData.confirmPassword){alert("請填寫所有欄位！");return}if(!this.validatePassword(this.formData.password)){alert("密碼必須包含大寫字母、小寫字母和數字！");return}if(this.formData.password!==this.formData.confirmPassword){alert("兩次輸入的密碼不一致！");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)){alert("請輸入有效的電子郵件地址！");return}alert("註冊成功!歡迎加入涼城即時"),this.resetForm()},handleCancel(){this.resetForm()},resetForm(){this.formData={name:"",email:"",password:"",confirmPassword:""},this.passwordVisible=!1,this.confirmPasswordVisible=!1}}},V={class:"member-login-container_2"},P={class:"member-login-card_2"},D={class:"member-login-input-group_2"},h={class:"member-login-input-group_2"},y={class:"member-login-input-group_2"},c={class:"password-input-wrapper"},v=["type"],_={class:"member-login-input-group_2"},x={class:"password-input-wrapper"},C=["type"],k={class:"member-login-input-group_2_btn"};function S(r,s,l,n,i,e){return u(),f("div",V,[t("div",P,[s[13]||(s[13]=t("h1",{class:"member-login-title_2"},"新會員註冊",-1)),t("form",{class:"member-login-form_2",onSubmit:s[7]||(s[7]=b((...o)=>e.handleSubmit&&e.handleSubmit(...o),["prevent"]))},[t("div",D,[s[8]||(s[8]=t("label",{for:"name"},"姓名",-1)),a(t("input",{id:"name","onUpdate:modelValue":s[0]||(s[0]=o=>i.formData.name=o),type:"text",placeholder:"請輸入姓名"},null,512),[[m,i.formData.name]])]),t("div",h,[s[9]||(s[9]=t("label",{for:"email"},"帳號",-1)),a(t("input",{id:"email","onUpdate:modelValue":s[1]||(s[1]=o=>i.formData.email=o),type:"email",placeholder:"請輸入電子郵件"},null,512),[[m,i.formData.email]])]),t("div",y,[s[10]||(s[10]=t("label",{for:"password"},"密碼",-1)),t("div",c,[a(t("input",{id:"password","onUpdate:modelValue":s[2]||(s[2]=o=>i.formData.password=o),type:i.passwordVisible?"text":"password",placeholder:"須包含數字與英文字母大小寫"},null,8,v),[[d,i.formData.password]]),t("button",{type:"button",class:"toggle-password",onClick:s[3]||(s[3]=(...o)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...o))},p(i.passwordVisible?"🙉":"🙈"),1)])]),t("div",_,[s[11]||(s[11]=t("label",{for:"confirmPassword"},"確認密碼",-1)),t("div",x,[a(t("input",{id:"confirmPassword","onUpdate:modelValue":s[4]||(s[4]=o=>i.formData.confirmPassword=o),type:i.confirmPasswordVisible?"text":"password",placeholder:"請再確認一次密碼"},null,8,C),[[d,i.formData.confirmPassword]]),t("button",{type:"button",class:"toggle-password",onClick:s[5]||(s[5]=(...o)=>e.toggleConfirmPasswordVisibility&&e.toggleConfirmPasswordVisibility(...o))},p(i.confirmPasswordVisible?"🙉":"🙈"),1)])]),t("div",k,[t("button",{type:"button",class:"member-login-submit-btn",onClick:s[6]||(s[6]=o=>e.test())},"取消"),s[12]||(s[12]=t("button",{type:"submit",class:"member-login-submit-btn"},"送出",-1))])],32)])])}const M=w(g,[["render",S]]);export{M as default};
