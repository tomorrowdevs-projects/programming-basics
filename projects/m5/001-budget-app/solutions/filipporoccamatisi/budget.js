const util = require("util");

class Category {
    constructor(name) {
        this.name = name;
        this.ledger = [];
    }
    // formats the object when it is printed
    [util.inspect.custom]() {
        // title :
        // *************title*************
        let title = this.name;
        // number of * initials and endings
        const initialPadding = Math.floor((30 - title.length) / 2);
        const finalPadding = Math.round((30 - title.length) / 2);
        // add ** to title
        title = title.padStart(title.length + initialPadding, "*");
        title = title.padEnd(title.length + finalPadding, "*");

        // body
        let body = "";
        for (let mov of this.ledger) {
            let formattedDescription = mov.description;
            // the amount must have two decimal places
            let formattedAmount = mov.amount.toFixed(2);
            // the description must be less than 23 characters
            if (mov.description.length > 23) {
                formattedDescription = mov.description.slice(0, 23)
            }
            // the number of digits must be less than 7
            if (String(mov.amount).length > 7) {
                formattedAmount = Number(mov.amount.toFixed(0).slice(0, 5)).toFixed(2);
            }
            // create and format row : 
            // description       amount
            // description       amount
            let row = formattedDescription;
            row = row.padEnd(30 - formattedAmount.length, " ");
            row = row + formattedAmount;
            body += row + '\n';
        }
        // total
        const total = `Total: ${this.get_balance().toFixed(2)}`;
        // create the complete chart
        return title + '\n' + body + total;
    }
    deposit(amount, description = "") {
        this.ledger.push({
            amount,
            description
        });
    }
    withdraw(amount, description = "") {
        // if there are not enough funds, return false
        if (!this.check_funds(amount)) return false;
        const formattedAmount = amount * -1;
        this.ledger.push({
            amount: formattedAmount,
            description
        });
        return true;
    }
    // returns the current balance of the budget category based 
    // on the deposits and withdrawals that have occurred.
    get_balance() {
        const balance = this.ledger.reduce((reducer, movement) => reducer + movement.amount, 0);
        return balance;
    }
    // transfers funds between two categories
    transfer(amount, category) {
        if (!this.check_funds(amount)) return false;
        this.withdraw(amount, `Transfer to ${category.name}`);
        category.deposit(amount, `Transfer from ${this.name}`);
        return true;
    }
    //checks that there are sufficient
    // funds to withdraw the amount
    check_funds(amount) {
        return this.get_balance() >= amount
    }
}


const roundDownToNearest10 = function (num) {
    return Math.floor(num / 10) * 10;
}

const create_spend_chart = function (listOfCategories) {
    const expenses = [];
    const listOfPercentageSpent = [];
    // sum of all expenses
    let sumOfwithdrawals = 0

    for (let category of listOfCategories) {
        // sum of the expenses of the category
        let categoryExpensesSum = 0
        for (let mov of category.ledger) {
            // if the move is less than 0 then it is an expense
            if (mov.amount < 0) {
                categoryExpensesSum += mov.amount;
            }
        }
        sumOfwithdrawals += categoryExpensesSum;
        expenses.push({ amount: categoryExpensesSum, category: category.name });
    };

    for (let categoryExpenses of expenses) {
        // calculate the percentage spent
        const percentageSpent = ((categoryExpenses.amount / sumOfwithdrawals) * 100)
        // round down to the nearest 10.
        const formattedPercentageSpent = roundDownToNearest10(percentageSpent) || 0;
        // add to list
        listOfPercentageSpent.push({ percentageSpent: formattedPercentageSpent, category: categoryExpenses.category });
    }

    // create chart 
    let chart = "";
    // add 100 - 90 - 80 ecc to the chart
    for (let percentage = 100; percentage >= 0; percentage -= 10) {
        if (percentage === 100) {
            chart += percentage + "|";
        }
        else if (percentage > 0) {
            chart += " " + percentage + "|";
        }
        else {
            chart += "  " + percentage + "|";
        }
        // add O to chart 
        for (let i = 0; i < listOfPercentageSpent.length; i++) {
            if (percentage <= listOfPercentageSpent[i].percentageSpent) {
                chart += " O"
            } else {
                chart += "  "
            }
        }
        chart += '\n';
    }
    // add ----- to the chart
    let horizontalLine = "    ";
    chart += horizontalLine.padEnd((3 * listOfCategories.length) + 4, "-");
    chart += '\n     ';

    // add the category names to the chart
    let maxLength = 0;
    for (let { category } of listOfPercentageSpent) {
        if (category.length > maxLength) maxLength = category.length;
    }
    for (let i = 0; i < maxLength; i++) {
        for (let { category } of listOfPercentageSpent) {
            if (category[i]) {
                chart += category[i] + " ";
            } else {
                chart += "  "
            }
        };
        chart += '\n     ';
    }
    return chart;
}

const food = new Category("Food")
food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")
console.log(food.get_balance())

const clothing = new Category("Clothing")
food.transfer(50, clothing)
clothing.withdraw(25.55)
clothing.withdraw(100)

const auto = new Category("Auto")
auto.deposit(1000, "initial deposit")
auto.withdraw(15)

console.log(food)
console.log(clothing)
console.log(food.ledger);
console.log(clothing.ledger);
console.log(auto.ledger);


console.log(create_spend_chart([food, clothing, auto]))