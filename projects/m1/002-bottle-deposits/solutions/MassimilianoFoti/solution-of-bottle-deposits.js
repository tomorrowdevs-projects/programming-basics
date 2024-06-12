/* # BOTTLE DEPOSITS

In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. In one particular jurisdiction, 
drink containers holding one liter or less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit.
Write a program that reads the number of containers of each size from the user.
Your program should continue by computing and displaying the refund that will be received for returning those containers. 
Format the output so that it includes a dollar sign and two digits to the right of the decimal point.

# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Strings

# Deadline

This project requires to be completed in a maximum of **2 hours** */

const smallBottle = 0.10;
const bigBottle = 0.25;


let numberSmallBottle = prompt ("how many small containers do you have depositated?");
let numberBigBottle = prompt ("how many big containers do you have depositated?");

 console.log("You will receive " + smallBottle * numberSmallBottle + " $");
 console.log("You will receive " + bigBottle * numberBigBottle + " $");



