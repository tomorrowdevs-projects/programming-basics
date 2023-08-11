// # Roulette Payouts

// A roulette wheel has **38 spaces** on it.   
// Of these spaces:
// - 18 are red, numbered 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 and 36.
// - 18 are black, the remaining integers between 1 and 36 are used to number the black spaces.
// - 2 are green, numbered 0 and 00   

// Many different bets can be placed in roulette. 
// We will only consider the following subset of them in this exercise:
// - Single number (1 to 36, 0, or 00)
// - Red versus Black
// - Odd versus Even (Note that 0 and 00 do not pay out for even) 
// - 1 to 18 versus 19 to 36

// Write a program that simulates a spin of a roulette wheel **by using a random number generator**.   
// Display **the number that was selected and all the bets that must be paid**. 

// For example, if 13 is selected then your program should display:

// ```
// The spin resulted in 13...
// Pay 13
// Pay Black
// Pay Odd
// Pay 1 to 18
// ```

// If the simulation results in 0 or 00 then your program should display `Pay 0` or `Pay 00` without any further output.

// # Vincite alla roulette

// Una ruota della roulette ha **38 spazi**.
// Di questi spazi:
// - 18 sono rossi, numerati 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 e 36.
// - 18 sono neri, i numeri interi rimanenti tra 1 e 36 sono usati per numerare gli spazi neri.
// - 2 sono verdi, numerati 0 e 00

// Alla roulette possono essere piazzate molte puntate diverse.
// In questo esercizio considereremo solo il seguente sottoinsieme:
// - Numero singolo (da 1 a 36, ​​0 o 00)
// - Rosso contro Nero
// - Dispari contro Pari (Nota che 0 e 00 non pagano per pari)
// - da 1 a 18 contro da 19 a 36

// Scrivi un programma che simuli il giro di una ruota della roulette **utilizzando un generatore di numeri casuali**.
// Visualizza **il numero che è stato selezionato e tutte le scommesse che devono essere pagate**.

// Ad esempio, se viene selezionato 13, il programma dovrebbe visualizzare:

// ```
// Lo spin ha prodotto 13...
// Paga 13
// PayBlack
// Paga dispari
// Paga da 1 a 18
// ```

// Se la simulazione restituisce 0 o 00, il programma dovrebbe visualizzare `Pay 0` o `Pay 00` senza ulteriori output.

const BLACKSQUARE = String([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]);
const REDSQUARE= String([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
const GREENSQUARE = String([37,38])


let spinResult = Math.floor(Math.random() * 38) + 1;
console.log(spinResult);
let squareColor; 
let pay;
let numberSplit;



confirm(`    
     press the confirm button if you want to play roulette 
     and you will find out if you have won`)


if (REDSQUARE.includes(spinResult) == true) {
    squareColor = "Red";
    pay = "Even";

} else if (BLACKSQUARE.includes(spinResult) == true) {
    squareColor = "Black";
    pay = "Odd";
}else if (GREENSQUARE.includes(spinResult) == true) {
    console.log("right")
}

if (spinResult >= 1 && spinResult <= 18) {
    numberSplit = "1 to 18";

} else if (spinResult >= 19 && spinResult <= 36) {
    numberSplit = "19 to 36";
}


if (spinResult >= 1 && spinResult <= 36) {
    alert(`The spin resulted in ${spinResult};
           Pay ${spinResult};
           Pay ${squareColor};
           Pay ${pay};
           Pay ${numberSplit};`);

} else if (spinResult == 37) {
    spinResult = "0"
    alert(` The spin resulted 0;
            Pay ${spinResult};`);

} else if (spinResult == 38) {
    spinResult = "00"
    alert(` The spin resulted in 00;
            Pay ${spinResult};`);
}