const prompt = require("prompt-sync")();

    function getBinary (number, string = "") {

        if (number === 0) {
            return string;
        } else if (Number.isInteger(number) === false || number < 0) {
            return "Please, enter a valid input!"
        } else {
            string = (number % 2).toString() + string;
            return getBinary(Math.floor(number / 2), string);
        };

    };

module.exports = getBinary;