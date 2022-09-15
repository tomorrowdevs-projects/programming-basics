
const prompt = require("prompt-sync")();

function sum(){
    var input = prompt("Enter a digit: ");
    return input === "" && isNaN(parseFloat(input)) ? 0.0 : parseFloat(input) + sum();
}

console.log(sum());