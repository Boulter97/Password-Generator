var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword(passwordLength, includeLowercase,
  includeUppercase, includeNumbers, includeSpecialCharacters) {
  let possibleCharacters = "";
  let password = "";

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
  if (possibleCharacters.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  for(let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters.charAt(randomIndex);
  }
  passwordText.innerHTML = password;
}

generateBtn.addEventListener("click", function() {
  let passwordLength = parseInt(prompt('Enter the desired password length:'));

  if (isNaN(passwordLength) || passwordLength < 1 || passwordLength > 128) {
    alert("Please enter a valid password length between 1 and 128.");
    return;
  }

  let includeLowercase = confirm("Include lowercase characters?");
  let includeUppercase = confirm("Include uppercase charcters?");
  let includeNumbers = confirm("Include numbers?");
  let includeSpecialCharacters = confirm ("Include special characters?"); 

  generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters);
});