const prompt = require("prompt-sync")();

let number= prompt("insert a base10 number: ");

const array = [];

while (number/2 !== 0){
    array.push(number%2);
    number = Math.floor(number / 2);
}
console.log(array.reverse().join(""));