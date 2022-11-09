/*In this exercise you will write a function that determines whether or not a password is good. We will define a good password to be a one that is at least 8 characters long and contains at least one uppercase letter, at least one lowercase letter, and at least one number. Your function should return True if the password passed to it as its only parameter is good. Otherwise it should return False. Include a main program that reads a password from the user and reports whether or not it is good. Ensure that your main program only runs when your solution has not been imported into another file.*/

function validationPassword(password) {
    let check;
  // use regex
    if (password.match(/[A-Z]/) != null && password.match(/[a-z]/) != null && password.match(/[0-9]/) != null && password.length >= 8) {
      check = true;
    } else {
      check = false;
    }
    return check
  }
  
  const userPass = prompt("type in your password.\nThe password must contain at least:\n1 lowercase character\n1 uppercase character\n1 number")
  
  if (validationPassword(userPass)) {
    alert("Your password is valid. ;)")
  } else {
    alert("Your password is invalid");
    location.reload();
  }