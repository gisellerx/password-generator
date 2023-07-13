// Assignment code here
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+-={}[]:";
var minlength = 8;
var maxlength = 128;

function generatePassword() {
  var savedPassword = "";
  var passwordSize = window.prompt("Please provide the length of your password (8-128 characters)");

  if (passwordSize >= 8 && passwordSize <= 128) {
    var isLowerCase = window.confirm("Include Lowercase Letters?");
    var isUpperCase = window.confirm("Include Uppercase Letters?");
    var isNumeric = window.confirm("Include Numbers?");
    var isSpecial = window.confirm("Include Special Characters?");

    if (isLowerCase === true) {
      var randomIndex = Math.floor(Math.random() * lowerCase.length);
      savedPassword += lowerCase.charAt(randomIndex);
    }

    if (isUpperCase === true) {
       var randomIndex = Math.floor(Math.random() * upperCase.length);
      savedPassword += upperCase.charAt(randomIndex);
    }

    if (isNumeric === true) {
      var randomIndex = Math.floor(Math.random() * numeric.length);
      savedPassword += numeric.charAt(randomIndex);
    }

    if (isSpecial === true) {
      var randomIndex = Math.floor(Math.random() * special.length);
      savedPassword += special.charAt(randomIndex);
    }

    if (isLowerCase === false && isUpperCase === false && isNumeric === false && isSpecial === false) {
      window.alert("You must choose at least one character type");
      return "";
    }

  } else {
    window.alert("Password must be between 8 and 128 characters");
  }

  while (savedPassword.length < passwordSize) {
    var randomIndex = Math.floor(Math.random() * savedPassword.length);
    savedPassword += savedPassword.charAt(randomIndex);
  }
  
  return savedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // return the final password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
