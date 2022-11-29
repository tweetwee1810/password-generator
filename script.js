// Assignment Code


var generateBtn = document.querySelector("#generate");

//create the new variables for the length of password and user's choices
var passwordLength;
var userChoices;
//create 4 different type of strings in this case lowercase, uppercase, numeric and special characters 
var lowerCase = "abcdefghijklmnopqesrvxyz";
var upperCase = "ABCDEFGHIJKLMNOPQERVXYZ";
var numeric = "0123456789";
var specialChar = "!@#$%^&*()";
//create the structure for the possible passwords
var possiblePassword = [];

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
alert ("bad choice, you must choose between 8 and 128");
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
  alert("Please choose at least one of the criteria");
 }
//create the statements for the users to choose or not to choose from the types of pw
//user just choose one option out of 4
if (includeLowercase) {
  userChoices= lowerCase;
  console.log(userChoices);
}
  else if (includeNumeric) {
    userChoices = numeric;
    console.log (userChoices);
  }
  else if (includeUppercase) {
    userChoices = upperCase;
    console.log (userChoices);
  }
  else if (includeSpecialCharacters) {
    userChoices = specialChar;
      console.log(userChoices);    
    }
  // user just choose 2 options out of 4 
  //lowercase and upper case
  else if (includeLowercase && includeUppercase) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  //lowercase and numeric
  else if (includeLowercase && includeNumeric) {
    userChoices = lowerCase.concat(numeric);
    console.log(userChoices);
  }
  //lowercase and special characters
  else if (includeLowercase && includeSpecialCharacters) {
    userChoices = lowerCase.concat(specialChar);
    console.log(userChoices);
  }
  //uppercase and numeric
  else if (includeUppercase && includeNumeric) {
    userChoices = upperCase.concat(numeric);
      console.log(userChoices);
  }
  //uppercase and special characters
  else if (includeUppercase && includeSpecialCharacters) {
    userChoices = upperCase.concat(specialChar);
        console.log(userChoices);
  }
  //numeric and special characters
  else if (includeNumeric && includeSpecialCharacters) {
    userChoices = numeric.concat(specialChar);
          console.log(userChoices);
  }
  //user choose 3 options out of 4
  //lowercase, uppercase and special
if (includeLowercase && includeUppercase && includeSpecialCharacters) {
   userChoices= lowerCase.concat(upperCase,specialChar);
    console.log(userChoices);
  }
  //lowercase, uppercase and numeric 
  else if (includeLowercase && includeUppercase && includeNumeric) {
    userChoices = lowerCase.concat(upperCase, numeric);
      console.log(userChoices);
  }
  //lowercase, special and numeric 
  else if (includeLowercase && includeSpecialCharacters && includeNumeric) {
    userChoices = lowerCase.concat(specialChar, numeric);
    console.log(userChoices);
  }
  //uppercase, special and numeric
  else if (includeUppercase && includeSpecialCharacters && includeNumeric) {
    userChoices = upperCase.concat(specialChar, numeric);
    console.log(userChoices);
  }
  //user choose all 4 
 else if (includeLowercase && includeUppercase && includeNumeric && includeSpecialCharacters) {
  userChoices = lowerCase.concat(upperCase, numeric, specialChar);
    console.log(userChoices);
  }
  //create a new variable since the possiblePassword is array
var choicesArray = userChoices.split("");
  //use for loop for making the random passwords based on the conditions of users
  for (var i = 0; i < passwordLength; i++) {
    //use the random method so it will choose randomly base on userchoices
    var choices = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    console.log(possiblePassword);
    possiblePassword.push(choices);
    console.log(possiblePassword);
  }
  //join and return for the password
  var password = possiblePassword.join("");
  console.log ("your password is: " + password);
  return password;
}


