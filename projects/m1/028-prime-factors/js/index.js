// # Prime Factors

// The prime factorization of an integer, n, can be determined using the following steps:

// Initialize factor to 2
// **While** factor is less than or equal to n do
//     **If** n is evenly divisible by factor **then** 
//         Conclude that factor is a factor of n 
//         Divide n by factor using floor division
//     **Else**
//         Increase factor by 1

// Write a program that reads an integer from the user. If the value entered by the user is less than 2 then your program should display an appropriate error message. Otherwise your program should display the prime numbers that can be multiplied together to compute n, with one factor appearing on each line. For example:

// ```
// Enter an integer (2 or greater): 72 The prime factors of 72 are:
// 2
// 2
// 2 
// 3 
// 3
// ```

// # Fattori primari

// La scomposizione in fattori primi di un numero intero, n, può essere determinata utilizzando i seguenti passaggi:

// Inizializza il fattore a 2
// **While** factor è minore o uguale a n do
// **Se** n è divisibile uniformemente per fattore **allora**
// Concludo che factor è un fattore di n
// Dividi n per fattore usando la divisione floor
//     **Altro**
// Aumenta il fattore di 1

// Scrive un programma che legge un numero intero dall'utente. Se il valore immesso dall'utente è inferiore a 2, il programma dovrebbe visualizzare un messaggio di errore appropriato. Altrimenti il ​​tuo programma dovrebbe visualizzare i numeri primi che possono essere moltiplicati insieme per calcolare n, con un fattore che appare su ogni riga. Per esempio:

// ```
// Inserisci un numero intero (2 o maggiore): 72 I fattori primi di 72 sono:
// 2
// 2
// 2
// 3
// 3
// ```

let userInput = +prompt("Enter the number:");
while (isNaN(userInput) || userInput < 2) {
  userInput = +prompt("Invalid entry. Enter a number greater than or equal to 2");
}

let factor = 2;

while (userInput >= 2) {
  if (userInput % factor === 0) {
    console.log(factor);
    userInput = userInput / factor;
  } else {
    factor++;
  }
}