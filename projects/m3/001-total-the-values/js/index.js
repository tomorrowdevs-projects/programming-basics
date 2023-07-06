const prompt = require("prompt-sync")();


const toSum = [];
let count = 0;

function sum(){
    const number = prompt("write a number: ");
    if (number !== ""){
        count += parseInt(number)
        return sum()
    }
    return `The Sum is: ${count.toFixed(1)}`
}

console.log(sum())