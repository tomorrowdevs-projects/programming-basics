class Print {

    /** 
     * Prints on the console a list of tickets.  
     * @param {Object[]} tickets - An array of tickets generates by the program.
     */

    static printTickets(tickets) {
        tickets.forEach((ticket) => {
            console.log(ticket.designTicket());
        })
    }

    /** 
    * Prints on the console the message passed as argument. 
    * @param {string} message - Any text message to print on the console.
    */

    static printMessage(message) {
        return console.log(message);
    }
}

module.exports = Print;