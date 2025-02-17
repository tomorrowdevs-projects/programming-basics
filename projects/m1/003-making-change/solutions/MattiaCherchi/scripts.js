/*
toonie = 200;
loonie = 100;
quarter = 25;
dime = 10;
nickel = 5;
penny = 1;
*/

let remainder;

const changeInDollars = prompt('Enter the amount in dollars to be returned to the customer:'); //Inseriamo l'ammontare in dollari che deve essere restituito al cliente 
const changeInCents = changeInDollars * 100;  //Convertiamo il valore in centesimi 


//Calcoliamo il quantitativo di monete da restituire al cliente 
const toonie = Math.floor(changeInCents/200);
remainder = changeInCents % 200; 

const loonie = Math.floor(remainder/100);
remainder = remainder % 100;

const quarter = Math.floor(remainder/25);
remainder = remainder % 25;

const dime = Math.floor(remainder/10);
remainder = remainder % 10;

const nickel = Math.floor(remainder/5);
remainder = remainder % 5;

const penny = Math.floor(remainder/1);
remainder = remainder % 1;

//Inseriamo in una finstra modale un messaggio che indica il quantitativo di monete che deve essere restituito 
alert(`Return the following coins as change: ${toonie + (' Toonie')}, ${loonie + (' Loonie')}, ${quarter + (' Quarter')}, ${dime +(' Dime')}, ${nickel + (' Nickel')}, ${penny + (' Penny')}`);