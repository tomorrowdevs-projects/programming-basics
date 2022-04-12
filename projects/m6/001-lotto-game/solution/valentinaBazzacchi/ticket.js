/* 

example:
+--------------------------------+
|            Ticket 1            |
+--------------------------------+
| Wheel: Milano                  |
| 22 55 66 45 34 23 67 34 56 45  |
+--------------------------------+

*/

class Ticket {
    
    /**
     * A function that constructs Ticket instances.
     * @property {number} id - The progressive number of the ticket.
     * @param {string} wheel - The wheel choosen by user.
     * @param {number[]} numbers - A list of numbers played by the user.
     * @param {string} bet - The bet choosen by the user.
     */
    
    constructor(wheel, numbers, bet) {
        
        this.id = 0;
        this.wheel = wheel;
        this.numbers = numbers;
        this.bet = bet;  
    } 

    /** 
     * Gets the string for rapresenting a ticket with a nice ascii art table decoration. 
     * @returns {string} The graphic rapresentation of the ticket.
     */

    designTicket() {

        const numStr = this.numbers.join(" ");

        const header = `+--------------------------------+\n|            Ticket ${this.id}            |\n+--------------------------------+\n`;
        const wheelRow = `| Wheel: ${this.wheel}${this.calculateSpace(34, 10, this.wheel.length)}|\n`;
        const numRow = `| ${numStr}${this.calculateSpace(34, 3, numStr.length)}|\n`;
        const footer = "+--------------------------------+\n\n";
        return header + wheelRow + numRow + footer;
    }

    /** 
     * Calculates the number of blank characters to add in a line (string) for a nice graphic rapresentation of a ticket.
     * @param {number} totalWidth - The width of the ticket.
     * @param {number} fixedCharsLength - The number of fixed characters in a line (string).
     * @param {number} stringLength - The number of variable characters in a line (depends on the string length for wheel and for numbers).
     * @returns {string} A string of blank characters. 
     */

    calculateSpace(totalWidth, fixedCharsLength, stringLength) {

        const blankWidth = totalWidth - fixedCharsLength - stringLength;

        let blankStr = "";

        for (let i = 0; i < blankWidth; i++) {

            blankStr += " ";
        }
        return blankStr;
    }
}

module.exports = Ticket;