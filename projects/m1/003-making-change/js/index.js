// Consider the software that runs on a self-checkout machine.   
// One task that it must be able to perform is to determine how much change to provide when the shopper 
// pays for a purchase with cash.  
// Write a program that begins by reading a number of cents from the user as an integer.   
// Then your program should compute and display the denominations of the coins that should be used 
// to give that amount of change to the shopper.   
// **The change should be given using as few coins as possible.**   
// Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

// - Penny = 1 cent
// - Nickel = 5 cents
// - Dime = 10 cents
// - Quarter = 25 cents
// - Loonie = 100 cents
// - Toonie = 200 cents

// Example: 
// 742 cents = 3 toonies, 1 loonies, 1 quarters, 1 dimes, 1 nickels, 2 pennies.

// Considera il software che gira su una macchina per il pagamento automatico.
// Un compito che deve essere in grado di eseguire è determinare la quantità di resto da fornire quando l'acquirente
// paga un acquisto in contanti.
// Scrivete un programma che inizi leggendo un numero di centesimi dall'utente come numero intero.
// Quindi il tuo programma dovrebbe calcolare e visualizzare le denominazioni delle monete che dovrebbero essere utilizzate
// per dare quella quantità di resto all'acquirente.
// **Il resto va dato utilizzando il minor numero possibile di monete.**
// Supponiamo che la macchina sia caricata con penny, nickel, dimes, quarters, loonies e toonies.

// - Penny = 1 centesimo
// - Nichel = 5 centesimi
// - Dime = 10 centesimi
// - Quarto = 25 centesimi
// - Loonie = 100 centesimi
// -Toonie = 200 centesimi

// Esempio:
// 742 centesimi = 3 toonies, 1 loonies, 1 quarters, 1 dimes, 1 nickels, 2 pennys.


let userCents = prompt( "enter the amount of cents and then you will receive the change in cents: ");

let toonies = Math.floor(userCents / 200);
let remainder = userCents % 200;

let loonies = Math.floor(remainder / 100);
remainder =  remainder % 100;

let quarters = Math.floor(remainder / 25);
remainder =  remainder % 25;

let dimes = Math.floor(remainder / 10);
remainder = remainder % 10;

let nickels =  Math.floor(remainder / 5);
remainder = remainder % 5;

let pennies = Math.floor(remainder / 1);
remainder = remainder % 1;


alert(`Your change is: ${toonies} toonies, ${loonies} loonies, ${quarters} quarters,${dimes} dimes, ${nickels} nickels,${pennies} pennies!`);



