// Assignment Code
// GIVEN I need a new, secure password

var generateBtn = document.querySelector("#generate");
var passwordLength;
var userChoices;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//  THEN I am presented with a series of prompts for password criteria
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Step1: WHEN I click the button to generate a password
function generatePassword() {
//the first thing we should do is prompt the length of the password

var passwordLength = prompt ("How long should the password be?");
console.log (passwordLength);
//password length must be at least 8 characters and no more than 128 characters
if (passwordLength <8 || passwordLength > 128) { 
 userChoices = alert ("bad choice");
  return "";
}
//password confirm whether or not to include lowercase
var includeLowercase = confirm("Should the password contain lowercase characters?");
console.log(includeLowercase);
//password confirm whether or not to include uppercase
var includeUppercase = confirm ("Should the password contain uppercase characters?");
console.log(includeUppercase);
//password confirm whether or not to include numeric
var includeNumeric = confirm ("Should the password contain numeric characters?");
console.log(includeNumeric);
//password confirm whether or not to include special characters
var includeSpecialCharacters = confirm ("Should the password contain special characters?");
console.log(includeSpecialCharacters);
//password input should be chosen one of the character types

 if (includeLowercase == false && includeUppercase==false && includeNumeric ==false && includeSpecialCharacters==false) {
  userChoices = alert("Please choose at least one of the criteria");

//create 4 different type of strings in this case lowercase, uppercase, numeric and special characters 
var lowerCase = "abcdefghijklmnopqesrvxyz";
var upperCase = "ABCDEFGHIJKLMNOPQERVXYZ";
var numeric = "0123456789";
var specialChar = "!@#$%^&*()";
//create the structure for the possible passwords
var possiblePassword = "";

//create the statements for the users to choose or not to choose from the types of pw
//user just choose one option out of 4
if (includeLowercase) {
  possiblePassword= lowerCase;
  console.log(userChoices);
}
  else if (includeNumeric) {
    possiblePassword = upperCase;
    console.log (userChoices);
  }
  else if (includeUppercase) {
    possiblePassword = upperCase;
    console.log (userChoices);
  }
  else if (includeSpecialCharacters) {
      possiblePassword= specialChar;
      console.log(userChoices);    
    }
  // user just choose 2 options out of 4 
  //lowercase and upper case
  else if (includeLowercase && includeUppercase) {
    possiblePassword = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  //lowercase and numeric
  else if (includeLowercase && includeNumeric) {
    possiblePassword = lowerCase.concat(numeric);
    console.log(userChoices);
  }
  //lowercase and special characters
  else if (includeLowercase && includeSpecialCharacters) {
    possiblePassword = lowerCase.concat(specialChar);
    console.log(userChoices);
  }
  //uppercase and numeric
  else if (includeUppercase && includeNumeric) {
      possiblePassword = upperCase.concat(numeric);
      console.log(userChoices);
  }
  //uppercase and special characters
  else if (includeUppercase && includeSpecialCharacters) {
        possiblePassword = upperCase.concat(specialChar);
        console.log(userChoices);
  }
  //numeric and special characters
  else if (includeNumeric && includeSpecialCharacters) {
          possiblePassword = numeric.concat(specialChar);
          console.log(userChoices);
  }
  //user choose 3 options out of 4
  //lowercase, uppercase and special
if (includeLowercase && includeUppercase && includeSpecialCharacters) {
    possiblePassword = lowerCase.concat(upperCase,specialChar);
    console.log(userChoices);
  }
  //lowercase, uppercase and numeric 
  else if (includeLowercase && includeUppercase && includeNumeric) {
      possiblePassword = lowerCase.concat(upperCase, numeric);
      console.log(userChoices);
  }
  //lowercase, special and numeric 
  else if (includeLowercase && includeSpecialCharacters && includeNumeric) {
    possiblePassword = lowerCase.concat(specialChar, numeric);
    console.log(userChoices);
  }
  //uppercase, special and numeric
  else if (includeUppercase && includeSpecialCharacters && includeNumeric) {
    possiblePassword = upperCase.concat(specialChar, numeric);
    console.log(userChoices);
  }
  //user choose all 4 
 else if (includeLowercase && includeUppercase && includeNumeric && includeSpecialCharacters) {
    possiblePassword = lowerCase.concat(upperCase, numeric, specialChar);
    console.log(userChoices);
  }
  };

  //use for loop for making the random passwords based on the conditions of users
  for (var i = 0; i < passwordLength; i++) {
  var choices = userChoices[Math.floor(Math.random()* userChoices.length)];
  possiblePassword.push(choices);
  console.log(choices);
  }
  var password = possiblePassword.join("");
  console.log ("your password is: " + password);
  return password;
}
document.getElementById("password").value = password;

