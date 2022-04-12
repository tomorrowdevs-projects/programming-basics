const prompt = require('prompt-sync')({ sigint: true });

class AskUser {

    /**
     * Asks the user to choose a bet from a list.
     */

    static askBet() {
        return prompt("Select a type of bill between *ambata*, *ambo*, *terno*, *quaterna* and *cinquina* ").toLowerCase();
    }
    
    /**
     * Asks the user to choose a wheel from a list.
     */
    
    static askWheel() {
        return prompt("Select a city name between *Bari*, *Cagliari*, *Firenze*, *Genova*, *Milano*, *Napoli*, *Palermo*, *Roma*, *Torino*, *Venezia* and *Tutte* ").toLowerCase();
    }

    /**
     * Asks the user how many tickets wants to play (min 1, max 5).
     */
    
    static askTicketsAmount() {
        return +prompt("How many tickets do you want to generate? (min 1, max 5, 0 to quit) ");
    }
    
    /**
     * Asks the user how many numbers wants to play (min 1, max 10).
     */
    
    static askNumbers() {
        return +prompt("Insert the amount of numbers to generate (min 1 max 10) ");
    }
}

module.exports = AskUser;