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


let penny = "1 cent";
let nichel = "5 cent";
let dime = "10 cent";
let quarto = "25 cent";
let loonie = "100 cent";
let toonie = "200 cent";
let or = " or "

let purchase = prompt("your purchase is from?");
let payment = prompt("you pay with which banknote?");

let remainder = payment - purchase;

console.log(remainder);

if(remainder == 0){
    alert("you don't have to receive change")
}else if(remainder >0 && remainder <10){
    alert("you receive the sum the " + nichel + or + penny);
}else if(remainder >= 10 && remainder <24){
    alert("you receive the sum the " + dime + or + nichel + or + penny)
}else if(remainder >= 25 && remainder <100){
    alert("you receive the sum the "+ quarto + or + dime + or + nichel + or + penny)
}else if(remainder >= 100 && remainder <200 ){
    alert("you receive the sum the "+ loonie + or + quarto + or + dime + or + nichel + or + penny)
}else if(remainder >= 200 && remainder <=741){
    alert("you receive the sum the "+ toonie + or + loonie + or + quarto + or + dime + or + nichel + or + penny)
}else if(remainder == 742) {
    alert("you receive " + " 3 " + toonie + " 1 " + loonie + " 1 " + quarto + " 1 " + dime + " 1 " + nichel + " 1 " + " 2 " + penny)
}else if(remainder >= 743){
    alert("you receive the sum the "+ toonie + or + loonie + or + quarto + or + dime + or + nichel + or + penny)
}



