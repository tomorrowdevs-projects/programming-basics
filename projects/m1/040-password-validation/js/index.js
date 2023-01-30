const passwordUser = prompt("Enter a minimum 8-character password");
const passwordValidate = validatePassword(passwordUser);
alert(passwordValidate ? "Valid password" : "Invalid password");

function validatePassword(password){

    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;

    if(password.length < 8){
      return false;
    }

    for(let i = 0; i < password.length; i++){
      
      if(!isNaN(password[i])){
        hasNumber = true;
      }else if(!hasUpper && password[i] == password[i].toUpperCase()){
        hasUpper = true;
      }else if(!hasLower && password[i] == password[i].toLowerCase()){
        hasLower = true;
      }

      if(hasLower && hasUpper && hasNumber){
        break;
      }

    }

    return hasLower && hasUpper && hasNumber;

}