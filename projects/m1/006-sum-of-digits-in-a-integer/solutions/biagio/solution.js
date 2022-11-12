const prompt = require("prompt-sync")();


let digit = prompt('Write a four digit integer:');


let array = digit.split('').map(Number);
let total = array.reduce((total, amount) => total + amount);

console.log(`The sum is: ${total}`);