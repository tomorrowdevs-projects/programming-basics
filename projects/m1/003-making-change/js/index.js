// Data type request
const prompt = require('prompt-sync')();
let totalAmount = parseInt(prompt("Enter the total amount in cents: "), 10);

let startingCoin = 200; //toonies
let obtainedCoin = 0;
let remainingCoin = 0;

console.log("You have inserted into the machine " + totalAmount + " cents " + "which are equivalent to");

if (totalAmount >= startingCoin) {
    obtainedCoin = totalAmount / startingCoin;
    console.log(Math.trunc(obtainedCoin) + " toonies");
    totalAmount = (totalAmount % startingCoin);
}

startingCoin = 100; //loonies

if (totalAmount >= startingCoin) {
    obtainedCoin = totalAmount / startingCoin;
    console.log(Math.trunc(obtainedCoin) + " loonies");
    totalAmount = (totalAmount % startingCoin);
}

startingCoin = 25; //quarters

if (totalAmount >= startingCoin) {
    obtainedCoin = totalAmount / startingCoin;
    console.log(Math.trunc(obtainedCoin) + " quarters");
    totalAmount = (totalAmount % startingCoin);
}

startingCoin = 10; //dimes

if (totalAmount >= startingCoin) {
    obtainedCoin = totalAmount / startingCoin;
    console.log(Math.trunc(obtainedCoin) + " dimes");
    totalAmount = (totalAmount % startingCoin);
}

startingCoin = 5; //nickels

if (totalAmount >= startingCoin) {
    obtainedCoin = totalAmount / startingCoin;
    console.log(Math.trunc(obtainedCoin) + " nickels");
    totalAmount = (totalAmount % startingCoin);
}

startingCoin = 1; //pennies

if (totalAmount >= startingCoin) {
    obtainedCoin = totalAmount / startingCoin;
    console.log(Math.trunc(obtainedCoin) + " pennies");
    totalAmount = (totalAmount % startingCoin);
}
