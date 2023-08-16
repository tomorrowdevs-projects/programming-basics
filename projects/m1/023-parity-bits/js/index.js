// # Parity Bits

// AA parity bit is a simple mechanism for detecting errors in data transmitted over an unreliable connection such as a telephone line. 
// The basic idea is that an additional bit is transmitted after each group of 8 bits so that a single bit error in the transmission can be detected.
// Parity bits can be computed for either even parity or odd parity. 
// If even parity is selected then the parity bit that is transmitted is chosen so that the total number of one bits transmitted (8 bits of data plus the parity bit) is even. 
// When odd parity is selected the parity bit is chosen so that the total number of one bits transmitted is odd.
// Write a program that computes the parity bit for groups of 8 bits entered by the user using even parity. 
// Your program should read strings containing 8 bits until the user enters a blank line. 
// After each string is entered by the user your program should display a clear message indicating whether the parity bit should be 0 or 1. 
// Display an appropriate error message if the user enters something other than 8 bits.

// Hint: You should read the input from the user as a string. Then you can use the count method to help you determine the number of zeros and ones in the string. 
// Information about the count method is available online.

// # bit di parità

// Il bit di parità AA è un semplice meccanismo per rilevare errori nei dati trasmessi su una connessione inaffidabile come una linea telefonica.
// L'idea di base è che un bit aggiuntivo venga trasmesso dopo ogni gruppo di 8 bit in modo da poter rilevare un singolo errore di bit nella trasmissione.
// I bit di parità possono essere calcolati per parità pari o dispari.
// Se viene selezionata la parità pari, il bit di parità trasmesso viene scelto in modo che il numero totale di bit trasmessi (8 bit di dati più il bit di parità) sia pari.
// Quando viene selezionata la parità dispari, il bit di parità viene scelto in modo che il numero totale di bit trasmessi sia dispari.
// Scrivere un programma che calcoli il bit di parità per gruppi di 8 bit immessi dall'utente utilizzando la parità pari.
// Il tuo programma dovrebbe leggere stringhe contenenti 8 bit finché l'utente non inserisce una riga vuota.
// Dopo che ogni stringa è stata inserita dall'utente, il tuo programma dovrebbe visualizzare un messaggio chiaro che indica se il bit di parità deve essere 0 o 1.
// Visualizza un messaggio di errore appropriato se l'utente immette qualcosa di diverso da 8 bit.

// Suggerimento: dovresti leggere l'input dell'utente come una stringa. Quindi puoi utilizzare il metodo count per aiutarti a determinare il numero di zeri e uno nella stringa.
// Le informazioni sul metodo count sono disponibili online.

let bitsInput = prompt('Enter the bit numbers, then values ​​from 0 to 1')
const bit = bitsInput.split("")
let messOutput = "";
let calculateBit = 0;
if(bit.length != "8"){
  messOutput = "Error!"
} else {
  for (const singleBit of bit) { 
    calculateBit += parseInt(singleBit)
  }
  if(calculateBit % 2 == 0) {
    messOutput = "the parity bit must be 0"
  } else {
    messOutput = "the parity bit must be 1"
  }
}
alert(messOutput)