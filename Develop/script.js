var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword(passwordLength, includeLowercase,
  includeUppercase, includeNumbers, includeSpecialCharacters) {
  let possibleCharacters = "";
  if (includeLowercase) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    possibleCharacters += "0123456789"; 
  }
  if (includeSpecialCharacters) {
    possibleCharacters += "@!#$%^&*()_-=+[]{}<>.,/?|"
  }

  let password = "";
  for(let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters.charAt(randomIndex);
  }
  passwordText.innerHTML = password;
}

generateBtn.addEventListener("click", function() {
  generatePassword(12, true, true, true, true, true);
});