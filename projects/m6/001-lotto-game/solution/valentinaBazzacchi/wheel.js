const askUser = require("./ask-user");
const Print = require("./print");

class Wheel {

  static cities = ["bari", "cagliari", "firenze", "genova", "milano", "napoli", "palermo", "roma", "torino", "venezia", "tutte"];
  
  /** 
   * Checks an input entered by user and handles the errors.
   * If the input is wrong throws an error message, otherwise returns it.
   * @param {string} input - A wheel choosen by user.
   * @returns {string} The wheel passed as argument if it is a valid value.
   */
  
  static getInput(input) {
    try {
          
      if (!this.checkInput(input, this.cities)) {
        throw new Error("+----------------+\n| Invalid Input! |\n+----------------+");
      }    
          
      return input;
          
    } catch(err) {
      Print.printMessage(`${err.message}`);
    }
  }
  
  /**
   * Loops until it gets a valid "wheel" from user.
   * @returns {string} Any wheel entered by user among those contained in the array "cities".
   */
  
  static getWheel() {

    let wheel = "";
      
    while (!wheel) {
      
      wheel = this.getInput(askUser.askWheel());
    } 
      
    return this.capitalizeFirstLetter(wheel);       
  }
  
  /** 
   * Checks if the input entered by user is included in a list. 
   * @param {string} input - A wheel choosen by user.
   * @param {string[]} list - An array of cities.
   * @returns {boolean} Returns true if "input" is included otherwise false.
   */
  
  static checkInput(input, list) {
    return list.includes(input) ? true : false;
  }

  /** 
   * Capitalizes the first letter of a string. 
   * @param {string} word - Any lowercase word.
   * @returns {string} The word passed as argument with the first letter capitalized.
   */

  static capitalizeFirstLetter(word) {
    const firstLetter = word.slice(0, 1).toUpperCase(); 
    return firstLetter + word.slice(1); 
  }
}

module.exports = Wheel;