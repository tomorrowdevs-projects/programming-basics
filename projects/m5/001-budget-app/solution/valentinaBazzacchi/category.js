class Category {

    constructor(name) {
        this.name = name;
        this.ledger = [];
        this.expenses = 0;
    }

    deposit(amount, description = "") {
        this.ledger.push({ "amount": amount, "description": description });
        return this.ledger;
    }

    withdraw(amount, description = "") {
        if (this.checkFunds(amount)) {
            this.ledger.push({ "amount": 0 - amount, "description": description });
            return true;
        }
        return false;
    }

    getBalance() {
        let balance = 0;
        for (const item of this.ledger) {
            balance += item["amount"];
        }
        return balance;
    }

    transfer(amount, category) {
        if (this.checkFunds(amount)) {
            this.withdraw(amount, `Transfer to ${category.name}`);
            category.deposit(amount, `Transfer from ${this.name}`);
            return true;
        }
        return false;
    }

    checkFunds(amount) {
        return amount > this.getBalance() ? false : true;
    }


    display() {

        // Creates a title line of 30 characters where the name of the category is centered in a line of `*` characters
        let output = centerTitle("*", this.name, 30) + "\n";

        // Creates a list of descriptions with a maximum length of 23 characters
        let descriptions = sliceDescription(this.ledger, "description", 23)

        // Creates a list with the amounts set to 2 decimal places
        let amounts = [];
        for (const item of this.ledger) {
            amounts.push(item["amount"].toFixed(2).slice(0, 7));
        }

        // Create a string of whitespace to separate the description from the amount for each line
        let spaceStr = "";

        for (let i = 0; i < this.ledger.length; i++) {
            let spaceLength = 30 - descriptions[i].length - amounts[i].length;

            while (spaceStr.length !== spaceLength) {
                spaceStr += " ";
            }

            output += descriptions[i] + spaceStr + amounts[i] + "\n";
            spaceStr = "";
        } // end for loop

        // Returns the final output string with the last line displaying the category total
        return output + "Total: " + this.getBalance().toFixed(2);
    } // end display() method

} // end class "Category"

// ----------------------------------------------------------------------- //
// Utility functions for the display() method
function centerTitle(char, name, maxLength) {
    let charStr = "";

    if (name.length >= maxLength) {
        return name.slice(0, maxLength);

    } else {
        const numOfChar = Math.floor((maxLength - name.length) / 2);

        for (let i = 0; i < numOfChar; i++) {
            charStr += char;
        } // end for loop

        if (name.length % 2 !== 0) {
            return char + charStr + name + charStr;
        } else {
            return charStr + name + charStr;
        }
    } // end first condition
} // end centerTitle() function

function sliceDescription(list, key, maxLength) {
    let sliced = [];

    for (const item of list) {

        if (item[key].length > maxLength) {
            sliced.push(item[key].slice(0, maxLength));
        } else {
            sliced.push(item[key]);
        }
    } // end for...of loop
    return sliced;
}

module.exports = Category;