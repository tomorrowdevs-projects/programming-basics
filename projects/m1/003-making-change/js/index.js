let userCents = prompt( "Please, insert the amount of cents you'd like to insert as an integer (e.g. ''50'' for $0.50, ''500'' for $5.00),");

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


alert("Your change is: " + toonies + " toonies, " + loonies + " loonies, " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + pennies + " pennies!");
