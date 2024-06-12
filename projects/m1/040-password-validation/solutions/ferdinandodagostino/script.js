// In this exercise you will write a function that determines whether or not a password is good. We will define a good password to be a one that is at least 8 characters long and contains at least one uppercase letter, at least one lowercase letter, and at least one number. Your function should return True if the password passed to it as its only parameter is good. Otherwise it should return False. Include a main program that reads a password from the user and reports whether or not it is good. Ensure that your main program only runs when your solution has not been imported into another file.

const passwordToValidate = prompt('Inserisci la password da validare');

let isGoodPassword = false;
let isUpperCase = false;
let isLowerCase = false;
let isNumber = false;

function checkPassword(password) {
  for (let index = 0; index < password.length; index++) {
    const letter = password[index];
    const asciiLetter = letter.charCodeAt(0);
    if (password.length >= 8) {
      if (asciiLetter >= 65 && asciiLetter <= 90) {
        isUpperCase = true;
      }
      if (asciiLetter >= 97 && asciiLetter <= 122) {
        isLowerCase = true;
      }
      if (asciiLetter >= 48 && asciiLetter <= 57) {
        isNumber = true;
      }
    } else {
      console.log('La password deve essere lunga almeno 8 caratteri');
    }
  }
  if (isUpperCase && isLowerCase && isNumber) {
    console.log('La password è buona');
    isGoodPassword = true;
  } else {
    console.log('La password non è buona');
    isGoodPassword = false;
  }
}

checkPassword(passwordToValidate);

console.log(isGoodPassword);
