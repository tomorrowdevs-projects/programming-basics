const askUser = require("./ask-user");
const Print = require("./print");

class Bet {

  static types = { ambata: 1, ambo: 2, terno: 3, quaterna: 4, cinquina: 5 };

  /** 
   * Checks an input entered by user and handles the errors.
   * If the input is wrong throws an error message, otherwise returns it.
   * @param {string} input - A bet choosen by user.
   * @returns {string} The bet passed as argument if it is a valid value.
   */

  static getInput(input) {
    try {

      if (!this.checkInput(input, Object.keys(this.types))) {
        throw new Error("+----------------+\n| Invalid Input! |\n+----------------+");
      }

      return input;

    } catch (err) {
      Print.printMessage(`${err.message}`);
    }
  }

  /** 
   * Checks if the input entered by user is included in a list.
   * @param {string} input - A bet choosen by user.
   * @param {string[]} list - An array of keys from the object "types".
   * @returns {boolean} Returns true if "input" is included otherwise false.
   */

  static checkInput(input, list) {
    return list.includes(input) ? true : false;
  }

  /**
   * Loops until it gets a valid "bet" from user.
   * @returns {string} Any bet entered by user that is a key of the object "types".
   */
  
  static inputBet() {

    let bet = "";

    while (!bet) {

      bet = this.getInput(askUser.askBet());

    }

    return bet;
  }

  /** 
   * Checks if the quantity of numbers on a ticket is greater than or equal to the bet value defined in the "types" object.
   * @param {number[]} numbers - The list of a ticket numbers.
   * @param {string} bet - A valid bet choosen by the user. 
   * @returns {boolean} Returns true otherwise throws an error message.
   */

  static betAgaistNum(bet, numbers) {

    try {

      if (numbers.length < this.types[bet]) {
        throw new Error("\nPlease enter a valid bet for the played numbers!\n------------------------------------------------\n");
      }

      return true;

    } catch (err) {
      Print.printMessage(`${err.message}`);
    }
  }

  /** 
   * Loops until the value of the bet is valid and consistent with the quantity of the ticket numbers.
   * @param {number[]} num - The list of a ticket numbers.
   * @returns {string} A valid bet entered by user.
   */

  static getBet(num) {

    while (true) {

      const bet = this.inputBet();

      if (this.betAgaistNum(bet, num)) return bet;
    }
  }

}

module.exports = Bet;
