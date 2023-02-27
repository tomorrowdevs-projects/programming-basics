// Requiring prompt-sync to use prompt in terminal mode.
const prompt = require('prompt-sync')();

function totalInput() {

    let value = prompt("Please, enter a sequence of values to see their sum (enter a blank line to stop): ");
    let result = Number(value);

// Using a ternary operator to check whenever the value isn't a valid number or is empty.
    return (value === "" || isNaN(value)) ? result : (result + totalInput());

};

console.log(totalInput());