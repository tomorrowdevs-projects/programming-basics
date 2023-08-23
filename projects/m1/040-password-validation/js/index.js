// # Password Validation

// In this exercise you will write a function that determines whether a password is good. 
// We will define a good password to be a one that is at least 8 characters long and contains 
// at least one uppercase letter, at least one lowercase letter, and at least one number. 

// Your function should return True if the password passed to it as its only parameter is good. 
// Otherwise it should return False. Include a main program that reads a password from the user 
// and reports whether it is good. Ensure that your main program only runs when your solution 
// has not been imported into another file.

// # Convalida password

// In questo esercizio scriverai una funzione che determina se una password è valida.
// Definiremo una buona password che sia lunga almeno 8 caratteri e contenga
// almeno una lettera maiuscola, almeno una lettera minuscola e almeno un numero.

// La tua funzione dovrebbe restituire True se la password che le è stata passata come unico parametro è valida.
// Altrimenti dovrebbe restituire False. Includere un programma principale che legge una password dall'utente
// e segnala se è buono. Assicurati che il tuo programma principale venga eseguito solo quando la tua soluzione
// non è stato importato in un altro file.

let password = prompt(`Enter the password and check the validation:`)
function passValidation(pass) {

    if (pass.length >= 8 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass)) { 
      return true;  
    } else {
      return false; 
    }
  }


  passValidation(password)

  if(passValidation(password) == true){
    alert(password)
  } else {
    alert(`The password is not valid`);
    location.reload()
  }