// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// different characters
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numerical = '012345678'
var special = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';



// create prompts for after button press
var generatePassword = function(){
  var passwordCharacters =""
//user input character length
var passwordLength =window.prompt("Please input character length (8-128).")
  if (passwordLength <= 7||passwordLength >= 129)  {
    alert ("Please input an integer from 8-128.")
    generatePassword();
  }
  //user confirms all that apply 

var lowercasePrompt =  window.confirm("Do you want to include lowercase letters? ");
    //alerts to show user their input
    if(lowercasePrompt === true){   
        window.alert("You have selected to include lowercase letters");
        //add string to characters
        passwordCharacters= passwordCharacters + lowercase;
        //if they dont select
      }else{
        window.alert("Your password will not include lowercase letters");
      }

var UPPERCASEPrompt = window.confirm("Do you want to include UPPERCASE letters? ");
  //alerts to show user their input  
    if(UPPERCASEPrompt=== true){  
        window.alert("You have selected to include UPPERCASE letters");
        passwordCharacters= passwordCharacters + UPPERCASE;
      }else{
        window.alert("Your password will not include UPPERCASE letters");
      }

var numericalPrompt =  window.confirm("Do you want to include numerical characters? ");
    //alerts to show user their input 
    if(numericalPrompt === true){  
        window.alert("You have selected to include numerical character");
        passwordCharacters = passwordCharacters + numerical;
      }else{
        window.alert("Your password will not include numerical character");
      }

var specialPrompt =  window.confirm("Do you want to include special characters? ");
      //alerts to show user their input
      if(specialPrompt=== true){  
        window.alert("You have selected to include special letters");
        passwordCharacters= passwordCharacters + special;
      }else{
        window.alert("Your password will not include special letters");
      }
    
console.log(passwordLength, lowercasePrompt, UPPERCASEPrompt,numericalPrompt,specialPrompt);
console.log( lowercase, UPPERCASE, numerical, special);
console.log(passwordCharacters);
// check if atleast one set of characters were selected
  if (passwordCharacters ===""|| passwordCharacters===null){
        window.alert("You need to select atleast one character set to include in the password.");
        generatePassword();
      }
//if not then create password 
    else{
        var password = ''
          for (var i = 0; i<= passwordLength; i++){
          var characters = Math.floor(Math.random()* passwordCharacters.length);
          password += passwordCharacters.substring(characters, characters +1 );
          }
          return password;
      }
      
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

