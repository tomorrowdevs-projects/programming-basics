// check password and return true or false.
/* Good password to be a one that is:
 - at least 8 characters long
 - at least one uppercase letter
 - at least one lowercase letter
 - at least one number
*/
function checkPassword(password) {
  let characterUpperCase = 0;
  let characterLowerCase = 0;
  let numberCase = 0;
  for (let i = 0; i < password.length; i++) {
    if (parseInt(password[i]) >= 0 && parseInt(password[i]) <= 9) {
      numberCase += 1;
    } else if (password[i] === password[i].toUpperCase()) {
      characterUpperCase += 1;
    } else if (password[i] === password[i].toLowerCase()) {
      characterLowerCase += 1;
    }
  }
  if (password.length >= 8 && characterUpperCase >= 1 && characterLowerCase >= 1 && numberCase >= 1) {
    return true;
  } else {
    return false;
  }
}
const userPassword = prompt('Please enter your password')

if(checkPassword(userPassword)){
    alert('Valid password')
} else {
    alert('Invalid password')
}
