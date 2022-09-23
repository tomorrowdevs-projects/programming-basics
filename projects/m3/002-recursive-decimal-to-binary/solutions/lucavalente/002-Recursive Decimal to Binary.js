let prompt = require("prompt-sync")();
let digit; 

function decimalToBinary(digit) {
    return digit === 0 || digit === 1 ? digit.toString() : decimalToBinary(Math.floor(digit/2)) + ((digit)%2).toString();
}

while(true){
    digit = parseInt(prompt("Enter a digit: "));
    if (digit < 0) {
        console.log("Digit must be positive!")
    } else{
        break;
    }
}

console.log(decimalToBinary(digit));