const container = document.querySelector(".container");
const email = document.getElementById("login_email");
const password = document.getElementById("login_password");
const loginForm = document.getElementById("login_form");
    
    
const resetPasswordForm = document.getElementById("forget_pass_form");
const reset_pass_email = document.getElementById("reset_password_email");
    
    
const register_email = document.getElementById("register_email");
const register_password = document.getElementById("register_password");
const register_name = document.getElementById("register_username");
const registerForm = document.getElementById("register_form");
    
    

    function fgt_password(){
        document.querySelector(".forget_pass_form").classList.toggle("d-none");
    };
    let isLoginError = false;
    let isRegisterError = false;
    let isResetpasswordEmailError = false;
    
    
    
    const validate_field = (element) => {
        hide_forgetpwd_form();
            if(element.id === "login_email"){
                if(email.value === ""){
                    email.parentNode.classList.add("error");
                    isLoginError = true;
                }
                if(email.value !== ""){
                    email.parentNode.classList.remove("error");
                    isLoginError = false;
                }
            }
        
            if(element.id === "login_password"){
                if(password.value === ""){
                    password.parentNode.classList.add("error");
                    isLoginError = true;
                }
                if(password.value !== ""){
                    password.parentNode.classList.remove("error");
                    isLoginError = false;
                }
            }    
    }
    
    
    
    
    
    
    
    const validate_resetpassword_field = (element) => {
            if(element.id === "reset_password_email"){
                if(reset_pass_email.value === ""){
                    reset_pass_email.parentNode.classList.add("error");
                    isResetpasswordEmailError = true;
                }
                if(reset_pass_email.value !== ""){
                    reset_pass_email.parentNode.classList.remove("error");
                    isResetpasswordEmailError = false;
                }
            }
    }
    
    
    
    
    
    const validate_register_field = (element) => {
        hide_forgetpwd_form();
            if(element.id === "register_email"){
                if(register_email.value === ""){
                    register_email.parentNode.classList.add("error");
                    isRegisterError = true;
                }
                if(register_email.value !== ""){
                    register_email.parentNode.classList.remove("error");
                    isRegisterError = false;
                }
            }
        
            if(element.id === "register_password"){
                if(register_password.value === ""){
                    register_password.parentNode.classList.add("error");
                    isRegisterError = true;
                }
                if(register_password.value !== ""){
                    register_password.parentNode.classList.remove("error");
                    isRegisterError = false;
                }
            }
    
            if(element.id === "register_username"){
                if(register_name.value === ""){
                    register_name.parentNode.classList.add("error");
                    isRegisterError = true;
                }
                if(register_name.value !== ""){
                    register_name.parentNode.classList.remove("error");
                    isRegisterError = false;
                }
            }    
    }
    
    
    
    
    
    const login_form = async () => {
        hide_forgetpwd_form();
        if(email.value === ""){
            email.parentNode.classList.add("error");
            isLoginError = true;
        }
        if(password.value === ""){
            password.parentNode.classList.add("error");
            isLoginError = true;
        }
    
        if(isLoginError){
            loginForm.classList.add("animate__shakeX");
            setTimeout(() => {
                loginForm.classList.remove("animate__shakeX");
            }, 1000);
        }else{
            const result = await fetch("https://jsonplaceholder.typicode.com/users",{
                method : "POST",
                body : JSON.stringify({email : email.value , password : password.value}),
                headers : {
                    "Content-Type" : "application/json",
                }
            });
            const res = await result.json();
            if(res){
                console.log(res);
            }
        }
    }
    

    const remove_errors = () => {
        email.parentNode.classList.remove("error");
        password.parentNode.classList.remove("error");
        isLoginError = false;

        reset_pass_email.parentNode.classList.remove("error");
        isResetpasswordEmailError = false;

        register_email.parentNode.classList.remove("error");
        register_name.parentNode.classList.remove("error");
        register_password.parentNode.classList.remove("error");
        isRegisterError = false;
    }

    const reset_password_form = async () => {
        if(reset_pass_email.value === ""){
            reset_pass_email.parentNode.classList.add("error");
            isResetpasswordEmailError = true;
        }
        if(reset_pass_email.value !== ""){
            reset_pass_email.parentNode.classList.remove("error");
            isResetpasswordEmailError = false;
        }
     if(isResetpasswordEmailError){
         resetPasswordForm.classList.add("animate__shakeX");
      setTimeout(() => {
         resetPasswordForm.classList.remove("animate__shakeX");
      }, 1000);
     }else{
            const result = await fetch("https://jsonplaceholder.typicode.com/users",{
                method : "POST",
                body : JSON.stringify({email : reset_pass_email.value }),
                headers : {
                    "Content-Type" : "application/json",
                }
            });
            const res = await result.json();
            if(res){
                console.log(res);
            }
     }
    }
    
    const register_form = async () => {
        hide_forgetpwd_form();
        if(register_email.value === ""){
            register_email.parentNode.classList.add("error");
            isRegisterError = true;
        }
        if(register_name.value === ""){
            register_name.parentNode.classList.add("error");
            isRegisterError = true;
        }
        if(register_password.value === ""){
            register_password.parentNode.classList.add("error");
            isRegisterError = true;
        }
     if(isRegisterError){
         registerForm.classList.add("animate__shakeX");
      setTimeout(() => {
         registerForm.classList.remove("animate__shakeX");
      }, 1000);
     }else{
        const result = await fetch("https://jsonplaceholder.typicode.com/users",{
                method : "POST",
                body : JSON.stringify({email : register_email.value , username : register_name.value , password : register_password.value }),
                headers : {
                    "Content-Type" : "application/json",
                }
            });
            const res = await result.json();
            if(res){
                console.log(res);
            }
     }
    }





var switch_form_checkbox = document.querySelector('#switch');
const register_toggle = document.getElementById("register_toggle");
switch_form_checkbox.addEventListener("click" , function(){
    if(switch_form_checkbox.checked){
        container.classList.add("active");
        register_toggle.checked = true;
        hide_forgetpwd_form();
        remove_errors();
    }
})
register_toggle.addEventListener("click",function(){
    container.classList.remove("active");
    switch_form_checkbox.checked = false;
    hide_forgetpwd_form();
    remove_errors();

})
    


const hide_forgetpwd_form = () => {
    document.querySelector(".forget_pass_form").classList.add("d-none");
}