const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signup = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type =  "text"; 

                    pwShowHide.forEach(icon =>{
                        icon.classlist.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classlist.replace("uil-eye", "uil-eye-slash");
                    })    
                }
            })
        })
   })


   // js code to appear signup and login form 
   signup.addEventListener("click", () =>{
        container.classlist.add("active");
   });
   login.addEventListener("click",  ()=>{
    container.classlist.remove("active");
});