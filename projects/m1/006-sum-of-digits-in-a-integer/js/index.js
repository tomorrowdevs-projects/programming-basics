let integer = prompt("Please, enter a four-digit integer:");

integer = integer.toString();

let integerOne = Number(integer.slice(0, 1));
let integerTwo = Number(integer.slice(1, 2));
let integerThree = Number(integer.slice(2, 3));
let integerFour = Number(integer.slice(3, 4));

let sum = integerOne + integerTwo + integerThree + integerFour;


alert("The sum of " + integerOne + " + " + integerTwo + " + " + integerThree + " + " + integerFour + " is equal to " + sum + ".");