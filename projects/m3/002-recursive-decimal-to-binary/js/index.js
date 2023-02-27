
// Requiring `prompt-sync` to use prompt in terminal mode.
const prompt = require("prompt-sync")();

const number = Number(prompt("Please, enter a positive integer to convert it into binary form:"));

    function getBinary (number, string = "") {

//get string or error based on number value; add the remainder of number to string if number > 0.
        if (number === 0) {
            return string;
        } else if (Number.isInteger(number) === false || number < 0) {
            return "Please, enter a valid input!"
        } else {
            string = (number % 2).toString() + string;
            return getBinary(Math.floor(number / 2), string);
        };

    };

console.log(getBinary(number));



