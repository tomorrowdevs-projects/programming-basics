// @ts-check
/**
 * @file Create a Category class.
 * @module budget
 * @author Salvatore Quagliariello
 */


/** 
 * A Class to create new categories for a Budget App.
 */
class Category {
    /**
     * Category details.
     * @param {string} name
     */
    constructor(name) {
        /**
         * @property {string} name The name of the Category Object.
         */
        this.name = name;
        /**
         * @property {Array<Object>} ledger An Array containing every transaction made.
         */
        this.ledger = [];
    }

    /**
     * Create an object containing details about a deposit transaction and push it to the `ledger` property.
     * @param {number} amount The amount deposited.
     * @param {string} description The description for the transaction.
     */
    deposit(amount, description = ``) {
        this.ledger.push({description, amount});
    }
    
    /**
     * Create an Object containing details about a withdraw transaction and push it to the `ledger` property.
     * @param {number} amount The amount withdrawed.
     * @param {string} description The description for the transaction.
     * @returns {boolean} Returns `true` if the withdraw has been successful, otherwise return `false`.
     */
    withdraw(amount, description = ``) {
        if (!this.check_funds(amount)) return false;

        this.ledger.push({description, amount: -amount})
        return true;
    }

    /**
     * Return the total balance, given by the sum of every transaction made.
     * @returns {number}
     */
    get_balance() {
        const balance = this.ledger.reduce((n, {amount}) => n + amount, 0);
        return balance;
    }

    /**
     * Return the total sum of every withdraw succesfully made.
     * @returns {number}
     */
    get_withdraws() {
        const withdraws = this.ledger.filter(obj => obj.amount < 0);
        const sumOfWithdraws = withdraws.reduce((n, {amount}) => n + +amount, 0);
        return sumOfWithdraws;
    }

    /** 
     * Uses `this.check_funds` to check if the amount parameter is greater than the balance of 
     * the Object this method is applied. If so it uses the `withdraw` method on the applied Object
     * and the `deposit` method on the parameter Object to create a transfer transaction.
     * @param {number} amount The amount to transfer.
     * @param {Object} category The Category Object to transfer the given amount.
     * @returns {boolean} Return `true` is the transfer transaction has been succesfully completed.
     */
    transfer(amount, category) {
        if (!this.check_funds(amount)) return false;

        this.withdraw(amount, `Transfer to ${category.name}`);
        category.deposit(amount, `Transfer from ${this.name}`);
        return true;
    }

    /**
     * Check if the balance of the Object is greater than the given amount.
     * @param {number} amount 
     * @returns {boolean} Returns `true` if `balance` is greater than `amount`, otherwise return `false`.
     */
    check_funds(amount) {
        if (amount <= this.get_balance()){
            return true;
        } else {
            return false;
        }
    }

    /**
     * Create a graphic representation of the successfull transaction made on the Category. 
     * @returns {string}
     */
    print() {
        const asteriskNumber = 30 - this.name.length;
        const asterisks = Array(asteriskNumber / 2).fill(`*`).join(``);
        const title = `${asterisks}${this.name}${asterisks}`;
        let list = ``;
        
        for ( let obj of this.ledger) {
            const amountString = obj.amount.toFixed(2).toString().substring(0, 7);
            const descriptionString = obj.description.substring(0, 23);        
            const objectLength = descriptionString.length + amountString.length;
            const spaces = Array(30 - objectLength).fill(` `).join(``);
            const string = `${descriptionString}${spaces}${amountString}\n`;
            list += string;
        };
        
        const finalBalanceString = `Total: ${this.get_balance().toFixed(2)}`;
        const outputString = `${title}\n${list}${finalBalanceString}`;
        
        return outputString;
    }
}

module.exports = Category;