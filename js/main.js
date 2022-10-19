let inputBox = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
const passwordField = document.querySelector("#password")
const showPassword = document.querySelector("#show-Password") 

inputBox.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

inputBox.onblur = function() {
  document.getElementById("message").style.display = "none";
}

inputBox.onkeyup = function() {
  let lowerCaseLetters = /[a-z]/g;
  if(inputBox.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  let upperCaseLetters = /[A-Z]/g;
  if(inputBox.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  let numbers = /[0-9]/g;
  if(inputBox.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if(inputBox.value.length >= 10) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

showPassword.addEventListener("click", function() {
  const type = passwordField.getAttribute === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
})
