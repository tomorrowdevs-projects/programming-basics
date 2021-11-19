// Dichiaro la variabile associata al numero di quattro cifre che digiterà l'utente attraverso il prompt

let userInt;
    
userInt = prompt("Digit a four-digit number");

// Dichiaro una variabile per ognuna delle quattro cifre e assegno come valore il carattere della stringa corrispondente all'indice scritto tra []

let firstDigit = userInt[0];
let secondDigit = userInt[1];
let thirdDigit = userInt[2];
let fourthDigit = userInt[3];

// Nel messaggio di alert includo la somma delle variabili stringa convertite in numeri anteponendo '+' al nome della variabile

alert( `The sum of your number digits is: ${+firstDigit + +secondDigit + +thirdDigit + +fourthDigit}` );