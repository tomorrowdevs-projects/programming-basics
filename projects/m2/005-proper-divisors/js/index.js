// # List of Proper Divisors

// A proper divisor of a positive integer, *n*, is a positive integer less than *n* which divides evenly into *n*. 
// Write a function called "proper divisors" that computes all the proper divisors of a positive integer. 
// The integer will be passed to the function as its only parameter. 
// The function will return a list containing all the proper divisors as its only result. 
// Complete this exercise by writing a main program that demonstrates the function by reading 
// a value from the user and displaying the list of its proper divisors. 
// Ensure that your main program only runs when your solution has not been imported into another file.


// # Elenco dei divisori propri

// Un divisore proprio di un numero intero positivo, *n*, è un numero intero positivo minore di *n* che si divide uniformemente in *n*.
// Scrivi una funzione chiamata "divisori propri" che calcola tutti i divisori propri di un numero intero positivo.
// Il numero intero verrà passato alla funzione come unico parametro.
// La funzione restituirà un elenco contenente tutti i divisori propri come unico risultato.
// Completa questo esercizio scrivendo un programma principale che dimostri la funzione mediante la lettura
// un valore dall'utente e visualizza l'elenco dei suoi divisori appropriati.
// Assicurati che il tuo programma principale venga eseguito solo quando la tua soluzione non è stata importata in un altro file.

let userInputNumber = +prompt(`enter the number and you will know its perfect divisors: `);
let divisorsNumberList = [];

function properDivisor(number){
    for(let i = 0; i <= number ; i++){
        if(number % i === 0){
            divisorsNumberList.push(i)
        }
    }
}

if(isNaN(userInputNumber) ||  !Number.isInteger(userInputNumber)){
    alert(`the number you entered is not valid`);
} else{
    properDivisor(userInputNumber);
    console.log(`The perfect divisors of the number ${userInputNumber} are: ${divisorsNumberList.join("\n")} \nand the total sum of proper divisors are: ${divisorsNumberList.length}`);
}

