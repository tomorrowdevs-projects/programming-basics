const askUser = require("./ask-user");
const Print = require("./print");

class Numbers {

    /** 
     * Checks if the input is an integer in the range (1-10) and handles the errors.
     * If the input is wrong throws an error message, otherwise returns it.
     * @param {number} input - The quantity of numbers the user wants to play.
     */

    static getInput(input) {

        try {

            if (!this.checkNumber(input)) {
                throw new Error("+-----------------+\n| Invalid Amount! |\n+-----------------+");
            }

            return input;

        } catch (err) {
            Print.printMessage(`${err.message}`);
        }

    }
    
    /**
     * Loops until it gets a valid "amount" from user (quantity of numbers to generate).
     * @returns {number[]} An array of random numbers from the method "generateRandomNum"
     */

    static getNumbers() {

        let amount = 0;

        while (!amount) {

            amount = this.getInput(askUser.askNumbers());
        }
        return this.generateRandomNum(amount);
    }
    
    /**
     * Gets a list of unique random numbers of the length passed as argument.
     * @param {number} amount - Quantity of number to generate from 1 to 10 (inclusive)
     * @returns {number[]} An array of random numbers from 1 to 90 (inclusive)
     */

    static generateRandomNum(amount) {
        
        const ticketNumbers = [];

        while (ticketNumbers.length < amount) {

            const randomNumber = Math.floor(Math.random() * 90) + 1;

            if (!ticketNumbers.includes(randomNumber)) {
                ticketNumbers.push(randomNumber);
            }
        }
        return ticketNumbers;
    }
    
    /** 
     * Checks if the value passed as argument is an integer between 1 and 10 (inclusive).
     * @param {number} num - Quantity of numbers the user wants to play.
     * @returns {boolean} Returns true if "num" is valid otherwise false.
     */
 
    static checkNumber(num) {
        return (!isNaN(num) && num >= 1 && num <= 10 && Number.isInteger(num)) ? true : false;
    }
}

module.exports = Numbers;
