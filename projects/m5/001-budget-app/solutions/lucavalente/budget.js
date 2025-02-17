
/** A class to create cateogories and tracking monetary movements */

class Category {

    /**
   * @param {string} category Category to create.
   */

    constructor(category) {

      if (typeof category != "string"){
        throw "The cateogory attribute must be specified as string!"
      }

      this.ladger = [];
      this.category = category;
      this.balance = 0;
    }

    /** Getters returns specific attributes*/

    get_balance() {
        return this.balance;
    }

    get_type() {
        return this.category;
    }

    get_ladger() {
        return this.ladger;
    }

    /**
     * Let user deposit a certain amount descripting it
     * @param {int/float} amount 
     * @param {string} description 
     */

    deposit(amount, description = ""){

        if (typeof amount != "number" || amount < 0 || typeof description != "string"){
            throw "Amount must be a number greater than 0 and description must be a string!"
        }

        if (description == ""){
            description = "no description"
        }
        this.ladger.push({"amount": amount, "description": description});
        this.balance += amount;
    }
    
    /**
     * Let user withdraw a certain amount descripting it
     * @param {int/float} amount 
     * @param {string} description 
     * @returns bool, to know if the withdrawal was successful
     */

    withdraw(amount, description = ""){

        if (typeof amount != "number" || amount < 0 || typeof description != "string"){
            throw "Amount must be a number greater than 0 and description must be a string!"
        }

        if (description == ""){
            description = "no description"
        }
        
        if (this.check_funds(amount)){
            this.ladger.push({"amount": -amount, "description": description});
            this.balance -= amount;
            return true;
        }
        return false;
    }

    /**
     * Let the user transfer a certain amount to a Category specified
     * @param {int/float} amount 
     * @param {Category} category Category to transfer certain amount
     * @returns bool, to know if the transfer was successful
     */
    transfer(amount, category){

        if (typeof amount != "number" || amount < 0 || !(category instanceof Category)){
            throw "Amount must be a number greater than 0 and category must be an object of type 'Category' !"
        }

        if (this.check_funds(amount)){
            category.deposit(amount, "Transfer from " + this.category);
            this.withdraw(amount, "Transfer to " + category.get_type());
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {int/float} amount 
     * @returns bool, to know if balance is less than a certain amount
     */
    check_funds(amount){
        if (this.balance < amount){
            return false;
        }
        return true;
    }

    /**
     * Used to print the cateogry with specific formatting
     * @returns string, the text with the formatted printing
     */
    toString(){

        let text = "";
        const catLength = this.category.length;

        /** First line */
        if (catLength % 2 == 0){
            text += "*".repeat(15 - catLength/2) + this.category + "*".repeat(15 - catLength/2) + "\n";
        }else{
            text += "*".repeat(15 - Math.floor(catLength/2)-1) + this.category + "*".repeat(15 - Math.floor(catLength/2)) + "\n";
        }

        /** List of balance sheet movements */
        this.ladger.forEach(e => {
            if (e.description.length > 23){
                text += e.description.slice(0, 23).padEnd(23) + (Math.round(e.amount * 100) / 100).toFixed(2).toString().padStart(7) + "\n";
            }else{
                text += e.description.padEnd(23) + (Math.round(e.amount * 100) / 100).toFixed(2).toString().padStart(7) + "\n";
            }          
        })     
        
        /**Last line: balance */
        text += "Total: " + this.balance;
        return text;
    }
  }

  module.exports = Category;
  
  