alert("Hi, welcome to the bottle deposit, here you can leave your used bottles to be recycled. You'll earn a refund for every drink container you will recycle.");
alert("You'll geat $0.10 of deposit for every drink container that can contain 1 liter or less, and $0.25 of deposit for every drink container that can contain more than 1 liter!")

let lilBott = prompt("Please, insert the number of drink containers that can hold up to 1 liter:");
let bigBott = prompt("Please, insert the number of drink containers that can hold more than 1 liter:");

let lilBottDep = lilBott * 0.10;
let bigBottDep = bigBott * 0.25;

let result =  (lilBottDep + bigBottDep);

alert("Your total deposit is: $" + result.toFixed(2));