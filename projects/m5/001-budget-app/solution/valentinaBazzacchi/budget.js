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
// Help functions for the display() method
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

// ------------------------------------------------------------------ //
// Function that takes a list of categories(obj) as an argument
// It should return a string that is a bar chart
// The chart should show the percentage spent in each category
function createSpendChart(categories) {
    // Writes the title at the top
    let output = "Percentage spent by category\n";

    // The percentage spent should be calculated only with withdrawals
    // Creates a new object -> key: category name, value: sum of withdrawals
    const categoryExpenses = {};
    for (let category of categories) {
        for (let item of category.ledger) {
            if (item["amount"] < 0 && !item["description"].includes("Transfer")) {
                // For each category, gets the sum of the withdrawals 
                // and sets it as the value of the "expenses" property of the class "Category"
                category.expenses += Math.abs(item["amount"]);
                categoryExpenses[category.name] = category.expenses;
            }
        }
    }

    // Gets the sum of all the expenses from the values of the obj "categoryExpenses"
    const totalExpenses = Object.values(categoryExpenses).reduce((prev, curr) => prev + curr);
    
    // Creates a new obj to map the percentage spent in each category 
    const expPercentages = {};
    for (let key in categoryExpenses) {
        expPercentages[key] = Math.floor((categoryExpenses[key] / totalExpenses) * 100);
    }

    const labels = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

    for (let label of labels) {

        // Writes and aligns on the right the labels 0 - 100 
        output += label === 100 ? label + "| "
            : label === 0 ? "  " + label + "| "
                : " " + label + "| ";

        // Creates the "bars" that should be made out of the "o" character
        // The height of each bar should be rounded down to the nearest 10
        for (let key in expPercentages) {
            if (label <= expPercentages[key]) output += "o  ";
        }

        output += "\n";
    } // end for...of

    // Creates the horizontal line below the bars (should go two spaces past the final bar)
    output += "    ";

    for (let i = 0; i < categories.length; i++) {
        output += "---"
    }

    output += "-\n";

    // Writes each category name vertically below the bar
    // Finds the maximum length among category names
    const maxLength = Math.max(...categories.map(item => item["name"].length));

    for (let i = 0; i < maxLength; i++) {
        output += "     ";

        for (let name in expPercentages) {
            output += (name.length > i) ? name[i] + "  " : "   ";
        } // end for...in

        output += "\n";

    } // end for loop

    return output;
} // end function

module.export = createSpendChart;
module.export = Category;
module.export = centerTitle;
module.export = sliceDescription;
