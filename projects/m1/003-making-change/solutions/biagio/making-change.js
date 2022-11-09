const prompt = require("prompt-sync")();

var money = prompt("How many cents do you have? ");

/*
1 penny = 1 cent $
1 nickel = 5 cent $
1 dime = 10 cent $
1 quarter = 25 cent $
1 loonie = 1$
1 toonie = 2$
*/

var toonie = Math.floor(money / 200);
var money = money % 200;
var loonie = Math.floor(money / 100);
var money = money % 100;
var quarter = Math.floor(money / 25);
var money = money % 25;
var dime = Math.floor(money / 10);
var money = money % 10;
var nickel = Math.floor(money / 5);
var money = money % 5;
var penny = Math.floor(money / 1);



console.log(toonie + " toonie, " + loonie + " loonie, " + quarter + " quarter, " + dime + " dime, " + nickel + " nickel, " + penny + " penny.")