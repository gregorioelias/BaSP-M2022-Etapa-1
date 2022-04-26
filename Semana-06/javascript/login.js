window.onload = function () {

    var email = document.getElementById("email");
    var messageEmail = document.getElementById("messageEmail");
    var password = document.getElementById("password")
    var messagePass = document.getElementById("messagePass");
    var signIn = document.getElementById("signin-b");

     var mailformat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/
     var mailIsValid = false;
     var passIsValid = false;
  
     email.addEventListener("focus", emailFocus);
     email.addEventListener("blur", emailBlur);
     password.addEventListener("focus", passwordFocus);
     password.addEventListener("blur", passwordBlur);
     signIn.addEventListener("click", signInClick);
     function emailFocus() {
       email.style.border = "3px solid grey";
       messageEmail.classList.add('hide');
     }
     function emailBlur() {
       mailIsValid = mailformat.test(email.value);
       if (!mailIsValid) {
         messageEmail.innerHTML = "The email is invalid";
         messageEmail.classList.add('error');
         email.style.border = "3px solid red";
         messageEmail.classList.remove('hide');
       } else {
         email.style.border = "3px solid green";
       }
     }
     function passwordFocus() {
       password.style.border = "3px solid grey";
       messagePass.classList.add('hide');
     }
     function passwordBlur() {
       passIsValid = validatePassword()
       if (!passIsValid) {
         messagePass.innerHTML = "The Password is invalid";
         messagePass.classList.add('error');
         password.style.border = "3px solid red";
         messagePass.classList.remove('hide')
       } else {
         password.style.border = "3px solid green";
       }
     }
     function validatePassword() {
       var letterSum = 0;
       var numberSum = 0;
       if (password.value.length < 7) {
         return false;
       } else {
         for (i = 0; i < password.value.length; i++) {
           if (isNaN(password.value[i])) {
             letterSum += 1;
           } else {
             numberSum += 1;
           }
         }
       }
       return (letterSum !== 0 && numberSum !== 0)
     }
     function signInClick() {
       if (!mailIsValid) {
         alert(email.value + " Email incorrect");
       } else if (!passIsValid) {
         alert(password.value + " Password incorrect");
       } else if (mailIsValid && passIsValid) {
         alert("Successfull login \nEmail: " + email.value + "\nPassword: " + password.value);
       }
     }
   }