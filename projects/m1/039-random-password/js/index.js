// # Random Password

// Write a function that generates a random password. 
// The password should have a random length of between 7 and 10 characters. 
// Each character should be randomly selected from positions 33 to 126 in the ASCII table. 
// Your function will not take any parameters. 
// It will return the randomly generated password as its only result. 
// Display the randomly generated password in your file’s main program. 

// # Password casuale

// Scrive una funzione che genera una password casuale.
// La password deve avere una lunghezza casuale compresa tra 7 e 10 caratteri.
// Ogni carattere deve essere selezionato casualmente dalle posizioni da 33 a 126 nella tabella ASCII.
// La tua funzione non prenderà alcun parametro.
// Restituirà la password generata casualmente come unico risultato.
// Visualizza la password generata casualmente nel programma principale del tuo file.


function randomPass(){
    let min = 7;
    let max = 10;

    let passLength = Math.floor(Math.random() * (max - min)) + min;
    let yourPass = "";
    for(let i = 0; i < passLength; i++){
        let passRandom = Math.floor(Math.random() * (126 - 33)) + 33;
        let randomLetterPass = String.fromCharCode(passRandom)
        yourPass += randomLetterPass;
    }

    return console.log(yourPass);
}

randomPass()