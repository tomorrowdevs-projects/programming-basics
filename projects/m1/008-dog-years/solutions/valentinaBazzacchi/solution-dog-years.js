// Dichiaro le variabili

let humanYears;
let adultYears;
let puppyYears;
let adultAge;
let puppyAge;

// Ricevo input dall'utente 

humanYears = prompt("How many human years do you want to convert in dog years?");

// Controllo che il valore inserito non sia negativo, nel caso lo fosse riporto un messaggio d'errore

if (humanYears < 0) {
alert("Error: This value is not valid!");

} else {

// Ottengo il numero di anni da adulto e nel caso gli anni umani inseriti fossero < 2 riporto il valore = 0  

adultYears = (humanYears - 2);
adultYears = Math.max(0, adultYears);

// Converto gli anni umani da adulto in anni canini

adultAge = (adultYears * 4);
    
// Ottengo il numero di anni umani da cucciolo e li converto in anni canini

puppyYears = (humanYears - adultYears);
puppyAge = (puppyYears * 10.5);
    
// Riporto l'età del cane sommando il valore degli anni canini da cucciolo e degli anni canini da adulto

alert( `The dog is ${+(adultAge + puppyAge).toFixed(1)} years old.` );

}