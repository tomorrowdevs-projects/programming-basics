
function program() {
    const userPass = prompt("Inserisci la password da validare");
  
    let verifiedPass = passValidation(userPass);   
  
    if (verifiedPass == true) {  
      document.getElementById('output').innerText = "La password è valida"; 
    } else {
      document.getElementById('output').innerText = "La password non è valida";
    }
  }
  
  function passValidation(userPass) {
   
    if (userPass.length >= 8 && /[A-Z]/.test(userPass) && /[a-z]/.test(userPass) && /[0-9]/.test(userPass)) { 
      return true;  
    } else {
      return false; 
    }
  }
  