/*
toonie= 200;
loonie= 100;
quarter= 25;
dime= 10;
nickel= 5;
penny= 1;
*/

let changeAmount; 
let toonie;
let loonie;
let quarter;
let dime;
let nickel;
let penny;
let remainder;


changeAmount= +prompt("How many cents do you have to give to the shopper?")*100;

toonie= Math.floor(changeAmount/200);
remainder= changeAmount % 200;

loonie= Math.floor(remainder/100);
remainder= remainder % 100;

quarter= Math.floor(remainder/25);
remainder= remainder % 25;

dime= Math.floor(remainder/10);
remainder= remainder % 10;

nickel= Math.floor(remainder/5);
remainder= remainder % 5;

penny= Math.floor(remainder/1);
remainder= remainder % 1;

alert( `You should give to the shopper these coins: 
${toonie+ (" toonies")}, ${loonie+ (" loonies")}, ${quarter+ (" quarters" )}, ${dime+ (" dimes" )}, ${nickel+ (" nickels" )}, ${penny+ (" pennies.")}` );