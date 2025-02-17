/* # MAKING CHANGE

Consider the software that runs on a self-checkout machine. 
One task that it must be able to perform is to determine how much change to provide when the shopper pays for a purchase with cash.
Write a program that begins by reading a number of cents from the user as an integer. 
Then your program should compute and display the denominations of the coins that should be used to give that amount of change to the shopper. 
The change should be given using as few coins as possible. Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Strings

# Deadline

This project requires to be completed in a maximum of **2 hours** */

const pennyValue = 1;
const dimeValue = 10;
const nickelValue = 20;
const quarterValue = 25;
const loonieValue = 100;
const toonieValue = 200;

let money = prompt("how many money?");

 let toonies = Math.floor(money / toonieValue);
 money = money % toonieValue;
 console.log("toonies: " + toonies);


 let loonies = Math.floor(money / loonieValue);
 money = money % loonieValue;
 console.log("loonies: " + loonies);


 let quarter = Math.floor(money / quarterValue);
 money = money % quarterValue;
 console.log("quarter: " + quarter);


 let nickel = Math.floor(money / nickelValue);
 money = money % nickelValue;
console.log("nickel: " + nickel);


 let dime = Math.floor(money / dimeValue);
 money = money % dimeValue;
 console.log("dime: " + dime);


 let penny = Math.floor(money / pennyValue);
 money = money % pennyValue;
 console.log("penny: " + penny);



