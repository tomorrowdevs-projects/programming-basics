// # Hexadecimal and Decimal Digits

// Write two functions, *hex2int* and *int2hex*, that convert between hexadecimal digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F) and decimal (base 10) integers.
// The *hex2int* function is responsible for converting a string containing a single hexadecimal digit to a base 10 integer, while the *int2hex* function is responsible for
// converting an integer between 0 and 15 to a single hexadecimal digit. Each function will take the value to convert as its only parameter and return the converted value
//   as its only result. Ensure that the *hex2int* function works correctly for both uppercase and lowercase letters. Your functions should display a meaningful error 
//  message and end the program if the parameter’s value is outside of the expected range.


// # Cifre esadecimali e decimali

// Scrivi due funzioni, *hex2int* e *int2hex*, che convertono tra cifre esadecimali (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E e F) e interi decimali (base 10).
// La funzione *hex2int* è responsabile della conversione di una stringa contenente una singola cifra esadecimale in un numero intero in base 10, mentre la funzione *int2hex* è responsabile di
// converte un numero intero compreso tra 0 e 15 in una singola cifra esadecimale. Ogni funzione prenderà il valore da convertire come unico parametro e restituirà il valore convertito
// come unico risultato. Assicurati che la funzione *hex2int* funzioni correttamente sia per le lettere maiuscole che per quelle minuscole. Le tue funzioni dovrebbero mostrare un errore significativo
// messaggio e termina il programma se il valore del parametro è al di fuori dell'intervallo previsto.



let hexadecimal = prompt(`Digit a letter between A and F`).toUpperCase();
let integer = parseInt(prompt(`Digit a number between 0 and 15`));


if(/[a-f A-F]/.test(hexadecimal)){
function hex2int(hexadecimal){
    let numberInteger = parseInt(hexadecimal,16);
    return console.log(`the hexadecimal: ${hexadecimal} number has been converted to integer: ${numberInteger}`) 
}
} else {
    alert(`you have not entered a valid value`)
}


if( integer >= 0 && integer <= 15){
function int2hex(integer){
     let convertInteger = integer.toString(16);
     return console.log(`the integer: ${integer} number has been converted to hexadecimal: ${convertInteger.toUpperCase()}`)
    }  
} else {
    alert(`Your entered number is invalid`)
}

hex2int(hexadecimal);
int2hex(integer);
