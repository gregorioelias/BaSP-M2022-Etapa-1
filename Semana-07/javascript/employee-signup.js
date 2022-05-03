window.onload = function () {

  var fname = document.getElementById("firstname");
  var lname = document.getElementById("lastname");
  var dni = document.getElementById("dni");
  var dateofbirth = document.getElementById("dateofbirth");
  var phone = document.getElementById("phoneNumber");
  var address = document.getElementById("address");
  var city = document.getElementById("city");
  var postalCode = document.getElementById("postalcode");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var repeatPassword = document.getElementById("repeatpassword");
  var signUpButton = document.getElementById("signup-b");
  var messageBox = document.getElementsByClassName("msg-box");


  fname.addEventListener("blur", FNameBlur);
  fname.addEventListener("focus", FNameFocus);
  lname.addEventListener("blur", LNameBlur);
  lname.addEventListener("focus", LNameFocus);
  dni.addEventListener("blur", DniBlur);
  dni.addEventListener("focus", DniFocus);
  dateofbirth.addEventListener("blur", DateOfBirthBlur);
  dateofbirth.addEventListener("focus", DateOfBirthFocus);
  phone.addEventListener("blur", PhoneBlur);
  phone.addEventListener("focus", PhoneFocus);
  address.addEventListener("blur", addressBlur);
  address.addEventListener("focus", addressFocus);
  city.addEventListener("blur", CityBlur);
  city.addEventListener("focus", CityFocus);
  postalCode.addEventListener("blur", PostCodeBlur);
  postalCode.addEventListener("focus", PostCodeFocus);
  email.addEventListener("blur", EmailBlur);
  email.addEventListener("focus", EmailFocus);
  password.addEventListener("blur", PasswordBlur);
  password.addEventListener("focus", PasswordFocus);
  repeatPassword.addEventListener("blur", RepeatPasswordBlur);
  repeatPassword.addEventListener("focus", RepeatPasswordFocus);
  signUpButton.addEventListener("click", SignupClick);

  // ------------ VALIDATE NAME ---------------
  function validateName(name) {
    var stop = true;
    var i = 0;

    if (name.length > 3) {
      while (i < name.length && stop === true) {
        if (!isNaN(name[i])) {
          stop = false;
        }
        i++;
      }
    } else {
      stop = false;
    }
    return stop;
  }

  // ------------ FIRST NAME ---------------
  function FNameBlur() {
    if (!validateName(fname.value)) {
      messageBox[0].classList.remove('hide');
      messageBox[0].classList.add('error');
      messageBox[0].innerHTML = "Name incorrect";
      fname.style.border = "3px solid red";
    } else {
      messageBox[0].classList.remove('error');
      fname.style.border = "3px solid green";
    }
  }

  function FNameFocus() {
    messageBox[0].classList.add('hide');
    fname.style.border = "3px solid grey";
  }

  // ------------ LAST NAME ---------------
  function LNameBlur() {
    if (!validateName(lname.value)) {
      messageBox[1].classList.remove('hide');
      messageBox[1].classList.add('error');
      messageBox[1].innerHTML = "Name incorrect";
      lname.style.border = "3px solid red";
    } else {
      messageBox[1].classList.remove('error');
      lname.style.border = "3px solid green";
    }
  }

  function LNameFocus() {
    messageBox[1].classList.add('hide');
    lname.style.border = "3px solid grey";
  }

  // ------------ DNI ---------------
  function validateDni() {
    var stop = true;
    var i = 0

    if (dni.value.length > 7) {
      while (i < dni.value.length && stop === true) {
        if (isNaN(dni.value[i])) {
          stop = false;
        }
        i++;
      }
    } else {
      stop = false;
    }
    return stop;
  }

  function DniBlur() {
    if (!validateDni()) {
      messageBox[2].classList.remove('hide');
      messageBox[2].classList.add('error');
      messageBox[2].innerHTML = "DNI incorrect";
      dni.style.border = "3px solid red";
    } else {
      messageBox[2].classList.remove('error');
      dni.style.border = "3px solid green";
    }
  }

  function DniFocus() {
    messageBox[2].classList.add('hide');
    dni.style.border = "3px solid grey";
  }

  // ------------ dateOfBirth ---------------

  function DateOfBirthBlur() {
    if (!validateDoF()) {
      messageBox[3].classList.remove('hide');
      messageBox[3].classList.add('error');
      messageBox[3].innerHTML = "Date of birth incorrect";
      dateofbirth.style.border = "3px solid red";
    } else {
      messageBox[3].classList.remove('error');
      dateofbirth.style.border = "3px solid green";
    }
  }

  function DateOfBirthFocus() {
    messageBox[3].classList.add('hide');
    dateofbirth.style.border = "3px solid grey";
  }

  var dobFormat = "";

  function formatDate(date) {
    var arDate = date.split('-');
    return arDate[1] + "/" + arDate[2] + "/" + arDate[0];
  }

  function validateDoF() {
    if (new Date(formatDate(dateofbirth.value)).getTime() > new Date().getTime()) {
      return false;
    } else {
      dobFormat = formatDate(dateofbirth.value);
      return true;
    }
  }

  // ------------ Phone ---------------
  function validatePhone() {
    var stop = true;
    var i = 0

    if (phone.value.length === 10) {
      while (i < phone.value.length && stop === true) {
        if (isNaN(phone.value[i])) {
          stop = false;
        }
        i++;
      }
    } else {
      stop = false;
    }
    return stop;
  }

  function PhoneBlur() {
    if (!validatePhone()) {
      messageBox[4].classList.remove('hide');
      messageBox[4].classList.add('error');
      messageBox[4].innerHTML = "Phone number incorrect";
      phone.style.border = "3px solid red";
    } else {
      messageBox[4].classList.remove('error');
      phone.style.border = "3px solid green";
    }
  }

  function PhoneFocus() {
    messageBox[4].classList.add('hide');
    phone.style.border = "3px solid grey";
  }

  // ------------ address ---------------
  function validateaddress() {
    indexSpace = address.value.lastIndexOf(" ");
    if (address.value.length > 4) {
      if (indexSpace > 0) {
        if (!isNaN(address.value.slice(indexSpace))) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  function addressBlur() {
    if (!validateaddress()) {
      messageBox[5].classList.remove('hide');
      messageBox[5].classList.add('error');
      messageBox[5].innerHTML = "address incorrect";
      address.style.border = "3px solid red";
    } else {
      messageBox[5].classList.remove('error');
      address.style.border = "3px solid green";
    }
  }

  function addressFocus() {
    messageBox[5].classList.add('hide');
    address.style.border = "3px solid grey";
  }

  // ------------  CITY ---------------
  function validateCity() {
    if (city.value.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  function CityBlur() {
    if (!validateCity(city.value)) {
      messageBox[6].classList.remove('hide');
      messageBox[6].classList.add('error');
      messageBox[6].innerHTML = "City incorrect";
      city.style.border = "3px solid red";
    } else {
      messageBox[6].classList.remove('error');
      city.style.border = "3px solid green";
    }
  }

  function CityFocus() {
    messageBox[6].classList.add('hide');
    city.style.border = "3px solid grey";
  }

  // ------------ Post Code ---------------
  function validatePostCode() {
    var stop = true;
    var i = 0

    if (postalCode.value.length >= 4 && postalCode.value.length <= 5) {
      while (i < postalCode.value.length && stop === true) {
        if (isNaN(postalCode.value[i])) {
          stop = false;
        }
        i++;
      }
    } else {
      stop = false;
    }
    return stop;
  }

  function PostCodeBlur() {
    if (!validatePostCode()) {
      messageBox[7].classList.remove('hide');
      messageBox[7].classList.add('error');
      messageBox[7].innerHTML = "Post code incorrect";
      postalCode.style.border = "3px solid red";
    } else {
      messageBox[7].classList.remove('error');
      postalCode.style.border = "3px solid green";
    }
  }

  function PostCodeFocus() {
    messageBox[7].classList.add('hide');
    postalCode.style.border = "3px solid grey";
  }

  // ------------ Email ---------------

  function validateEmail() {
    var mailformat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/;
    if (mailformat.test(email.value)) {
      return true;
    } else {
      return false;
    }
  }

  function EmailBlur() {
    if (!validateEmail()) {
      messageBox[8].classList.remove('hide');
      messageBox[8].classList.add('error');
      messageBox[8].innerHTML = "Email incorrect";
      email.style.border = "3px solid red";
    } else {
      messageBox[8].classList.remove('error');
      email.style.border = "3px solid green";
    }
  }

  function EmailFocus() {
    messageBox[8].classList.add('hide');
    email.style.border = "3px solid grey";
  }

  // ------------ Password ---------------
  function validatePassword(pass) {
    var letterSum = 0;
    var numberSum = 0;

    if (pass.length < 7) {
      return false;
    } else {
      for (i = 0; i < pass.length; i++) {
        if (isNaN(pass[i])) {
          letterSum += 1;
        } else {
          numberSum += 1;
        }
      }
    }
    return (letterSum !== 0 && numberSum !== 0)
  }

  function PasswordBlur() {
    if (!validatePassword(password.value)) {
      messageBox[9].classList.remove('hide');
      messageBox[9].classList.add('error');
      messageBox[9].innerHTML = "Password incorrect";
      password.style.border = "3px solid red";
    } else {
      messageBox[9].classList.remove('error');
      password.style.border = "3px solid green";
    }
  }

  function PasswordFocus() {
    messageBox[9].classList.add('hide');
    password.style.border = "3px solid grey";
  }

  function RepeatPasswordBlur() {
    if (!validatePassword(repeatPassword.value) || repeatPassword.value !== password.value) {
      messageBox[10].classList.remove('hide');
      messageBox[10].classList.add('error');
      messageBox[10].innerHTML = "Password incorrect";
      repeatPassword.style.border = "3px solid red";
    } else {
      messageBox[10].classList.remove('error');
      repeatPassword.style.border = "3px solid green";
    }
  }

  function RepeatPasswordFocus() {
    messageBox[10].classList.add('hide');
    repeatPassword.style.border = "3px solid grey";
  }

  // Validate all inputs 

  function validateAll() {
    return (validateName(fname.value) &&
      validateName(lname.value) &&
      validateDni() && validateDoF() &&
      validatePhone() && validateaddress() &&
      validateCity() && validatePostCode() &&
      validateEmail() &&
      validatePassword(password.value) &&
      validatePassword(repeatPassword.value) &&
      repeatPassword.value === password.value)
  }

  //signup click

  function SignupClick(e) {
    e.preventDefault()
    var url = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${fname.value}
&lastName=${lname.value}&dni=${dni.value}&dob=${dobFormat}&phone=${phoneNumber.value}
&address=${address.value}&city=${city.value}&zip=${postalCode.value}&email=${email.value}
&password=${password.value}`
    if (!validateName(fname.value)) {
      alert(fname.value + " First name incorrect ");
    } else if (!validateName(lname.value)) {
      alert(lname.value + " Last name incorrect ");
    } else if (!validateDni()) {
      alert(dni.value + " DNI incorrect ");
    } else if (!validateDoF()) {
      alert(dateofbirth.value + " Date of birth incorrect");
    } else if (!validatePhone()) {
      alert(phone.value + " Number phone incorrect");
    } else if (!validateaddress()) {
      alert(address.value + " Address incorrect");
    } else if (!validateCity()) {
      alert(city.value + " City incorrect");
    } else if (!validatePostCode()) {
      alert(postalCode.value + " ZIP incorrect");
    } else if (!validateEmail()) {
      alert(email.value + " Email incorrect");
    } else if (!validatePassword(password.value)) {
      alert(password.value + " Password incorrect");
    } else if (!validatePassword(repeatPassword.value)) {
      alert(repeatPassword.value + " Repeat password incorrect");
    } else if (repeatPassword.value !== password.value) {
      alert(password.value + " Passwords not are the same");
    }
    else if (validateAll()) {
      fetch(url)
        .then(function (response) {
          return response.json()
        })
        .then(function (response) {
          if (response.success) {
            console.log("hola", response.msg);
            alert(`${response.msg}
              Employee ID: ${response.data.id}
              First Name: ${response.data.name}
              Last Name: ${response.data.lastName}
              Dni: ${response.data.dni}
              Date of Birth: ${response.data.dob}
              Phone Number: ${response.data.phone}
              Address: ${response.data.address}
              City: ${response.data.city}`)
          }
          else {
            console.log("medio", response.errors)
            alert(response.errors[0].msg)
          }
        })
        .catch(function (responseError) {
          console.log("chau");
          alert(responseError)
        })
    }
  }

}
