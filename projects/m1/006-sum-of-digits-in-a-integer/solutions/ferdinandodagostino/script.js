//Develop a program that reads a four-digit integer from the user and displays the sum of its digits. For example, if the user enters 3141 then your program should display 3+1+4+1=9.

const num = parseInt(prompt('Digita un numero di quattro cifre'));

const newString = num.toString();

const firstDigit = newString.slice(0, 1);
const secondDigit = newString.slice(1, 2);
const thirdDigit = newString.slice(2, 3);
const fourthDigit = newString.slice(3, 4);

alert(`${firstDigit}+${secondDigit}+${thirdDigit}+${fourthDigit}`);
