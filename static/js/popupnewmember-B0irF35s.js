import{i as f,j as o,N as b,C as a,H as m,O as d,A as p,o as u}from"./vue-4_Lw-QOu.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={name:"popupnewmember",data(){return{formData:{name:"",email:"",password:"",confirmPassword:""},passwordVisible:!1,confirmPasswordVisible:!1}},methods:{togglePasswordVisibility(){this.passwordVisible=!this.passwordVisible},toggleConfirmPasswordVisibility(){this.confirmPasswordVisible=!this.confirmPasswordVisible},test(){console.log("ssss"),this.$emit("switch")},validatePassword(r){const s=/[A-Z]/.test(r),l=/[a-z]/.test(r),n=/[0-9]/.test(r);return s&&l&&n},handleSubmit(){if(!this.formData.name||!this.formData.email||!this.formData.password||!this.formData.confirmPassword){alert("請填寫所有欄位！");return}if(!this.validatePassword(this.formData.password)){alert("密碼必須包含大寫字母、小寫字母和數字！");return}if(this.formData.password!==this.formData.confirmPassword){alert("兩次輸入的密碼不一致！");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)){alert("請輸入有效的電子郵件地址！");return}alert("註冊成功!歡迎加入涼城即時"),this.resetForm()},handleCancel(){this.resetForm()},resetForm(){this.formData={name:"",email:"",password:"",confirmPassword:""},this.passwordVisible=!1,this.confirmPasswordVisible=!1}}},V={class:"member-login-container_2"},P={class:"member-login-card_2"},D={class:"member-login-input-group_2"},h={class:"member-login-input-group_2"},y={class:"member-login-input-group_2"},v={class:"password-input-wrapper"},c=["type"],_={class:"member-login-input-group_2"},C={class:"password-input-wrapper"},x=["type"],k={class:"member-login-input-group_2_btn"};function S(r,s,l,n,i,e){return u(),f("div",V,[o("div",P,[s[13]||(s[13]=o("h1",{class:"member-login-title_2"},"新會員註冊",-1)),o("form",{class:"member-login-form_2",onSubmit:s[7]||(s[7]=b((...t)=>e.handleSubmit&&e.handleSubmit(...t),["prevent"]))},[o("div",D,[s[8]||(s[8]=o("label",{for:"name"},"姓名",-1)),a(o("input",{id:"name",type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>i.formData.name=t),placeholder:"請輸入姓名"},null,512),[[m,i.formData.name]])]),o("div",h,[s[9]||(s[9]=o("label",{for:"email"},"帳號",-1)),a(o("input",{id:"email",type:"email","onUpdate:modelValue":s[1]||(s[1]=t=>i.formData.email=t),placeholder:"請輸入電子郵件"},null,512),[[m,i.formData.email]])]),o("div",y,[s[10]||(s[10]=o("label",{for:"password"},"密碼",-1)),o("div",v,[a(o("input",{id:"password",type:i.passwordVisible?"text":"password","onUpdate:modelValue":s[2]||(s[2]=t=>i.formData.password=t),placeholder:"須包含數字與英文字母大小寫"},null,8,c),[[d,i.formData.password]]),o("button",{type:"button",class:"toggle-password",onClick:s[3]||(s[3]=(...t)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...t))},p(i.passwordVisible?"🙉":"🙈"),1)])]),o("div",_,[s[11]||(s[11]=o("label",{for:"confirmPassword"},"確認密碼",-1)),o("div",C,[a(o("input",{id:"confirmPassword",type:i.confirmPasswordVisible?"text":"password","onUpdate:modelValue":s[4]||(s[4]=t=>i.formData.confirmPassword=t),placeholder:"請再確認一次密碼"},null,8,x),[[d,i.formData.confirmPassword]]),o("button",{type:"button",class:"toggle-password",onClick:s[5]||(s[5]=(...t)=>e.toggleConfirmPasswordVisibility&&e.toggleConfirmPasswordVisibility(...t))},p(i.confirmPasswordVisible?"🙉":"🙈"),1)])]),o("div",k,[o("button",{type:"button",class:"member-login-submit-btn",onClick:s[6]||(s[6]=t=>e.test())},"取消"),s[12]||(s[12]=o("button",{type:"submit",class:"member-login-submit-btn"},"送出",-1))])],32)])])}const B=w(g,[["render",S]]);export{B as default};
