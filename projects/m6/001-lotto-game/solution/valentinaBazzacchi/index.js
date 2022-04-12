const askUser = require("./ask-user");
const Bet = require("./bet");
const Wheel = require("./wheel");
const Numbers = require("./numbers");
const Ticket = require("./ticket");
const Print = require("./print");


class Lotto {

    static allTickets = [];

    /** 
     * Creates a single ticket as instance of the class "Ticket".
     * @return {Object}  
     */

    static createTicket() {

        const wheel = Wheel.getWheel();
        const numbers = Numbers.getNumbers();
        const bet = Bet.getBet(numbers);

        return new Ticket(wheel, numbers, bet);
    }

    /** 
     * Checks if the input entered by user is an integer between 0 and 5 and handles the errors.
     * If the input is wrong throws an error message, otherwise returns it.
     * @param {number} input - The number of tickets to generate, 0 to quit.
     * @returns {number} A valid amount.
     */
    
    static getInput(input) {
        try {

            if (isNaN(input) || !Number.isInteger(input) || input < 0 || input > 5) {
                throw new Error("+-----------------+\n| Invalid number! |\n+-----------------+");
            }

            return input;

        } catch (err) {
            Print.printMessage(`${err.message}`);
        }
    }
    
    /** 
     * Loops until the input entered by user is a valid amount (integer from 0 to 5).
     * @returns {number} The number of tickets to generate.
     */

    static getTicketsAmount() {

        let amount = 0;

        while (!amount) {

            amount = this.getInput(askUser.askTicketsAmount());

            if (amount === 0) {
                Print.printMessage("+--------------------+\n| You QUIT the GAME! |\n+--------------------+");
                break;
            }

        }

        return amount;
    }

    /** 
     * Populates the array "allTickets". Increases the "id" property by 1 for each generated ticket.
     * @param {number} amount - The number of tickets the user wants to create. 
     * @returns {Object[]} The array with all the genearted tickets (objects).
     */
    
    static generateTickets(amount) {

        if (amount !== 0) {
            
            for (let i = 0; i < amount; i++) {

                Print.printMessage(`\nENTER THE VALUES FOR THE TICKET n. ${i + 1}\n------------------------------------\n`);
                const ticket = this.createTicket();
                ticket.id = i + 1;
                this.allTickets.push(ticket);

            }
        }
        return this.allTickets;
        
    }

     /** 
     * Starts the Lotto Game!
     */
    
     static startLotto() {

        Print.printMessage("+------------------+\n| PLAY LOTTO GAME! |\n+------------------+\n");

        const ticketsAmount = this.getTicketsAmount();

        const tickets = this.generateTickets(ticketsAmount);

        Print.printTickets(tickets);
    }




}

Lotto.startLotto();

module.exports = Lotto;


