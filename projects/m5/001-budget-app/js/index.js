const prompt = require("prompt-sync")()

class Category {

    constructor(name) {
        this.name = name
        this.ledger = []
    }

    deposit(amount, description = "") {
        this.ledger.push({ amount: amount, description: description })
    }

    getBalance() {
        return this.ledger.reduce((acc, curr) => acc + curr.amount, 0)
    }

    withdraw(amount, description = "") {
        if (this.checkFunds()) {
            this.ledger.push({ amount: -amount, description: description })
            return true
        }
        return false
    }

    getTitle(len, char) {
        const numberOfChar = len - this.name.length
        const before = Math.floor(numberOfChar / 2)
        const after = numberOfChar - before
        return char.repeat(before) + this.name + char.repeat(after)
    }

    displayBalance() {
        let result = this.getTitle(30, "*") + "\n"
        for (const item of this.ledger) {
            const amount = item.amount.toFixed(2);
            const space = 30 - item.description.length - amount.length;
            result += `${item.description}${" ".repeat(space > 0 ? space : 0)}${amount}\n`;
        }
        result += `Total: ${this.getBalance().toFixed(2)}`;
        return result;
    }

    transfer(amount, categoryObj) {
        if (this.checkFunds()) {
            this.withdraw(amount, `Transfer to ${categoryObj.name}`)
            categoryObj.deposit(amount, `Transfer from ${this.name}`)
            return true
        }
        return false
    }

    checkFunds(amount) {
        if (amount >= this.getBalance()) {
            return false
        } else {
            return true
        }
    }

}


const categories = []


const createNewCategory = () => {
    let insertCategoryName = prompt("Insert name of new Category: ")
    let category = new Category(insertCategoryName)
    categories.push(category)
    console.log(`The category ${insertCategoryName} was created`)
    mainMenu()
}

const getBalance = () => {
    if (categories.length > 0) {
        let nameCategory = prompt("Insert name of category to get Balance: ")
        let category = categories.find(c => c.name === nameCategory);
        if (category) {
            console.log(category.displayBalance())
            mainMenu()
        } else {
            console.log(`Category not available`)
            mainMenu()
        }
    }

}

const deposit = () => {
    let nameCategory = prompt("Insert name of category to deposit: ")
    let category = categories.find(c => c.name === nameCategory);
    if (category) {
        let amount = parseInt(prompt("How much you want to deposit: "))
        let description = prompt("Insert description: ")
        category.deposit(amount, description);
    } else {
        console.log(`Category not available`)
    }
    mainMenu()
}

const withdraw = () => {
    let nameCategory = prompt("Insert name of category to withdraw: ")
    let category = categories.find(c => c.name === nameCategory);
    if (category) {
        let amount = parseInt(prompt("How much you want to withdraw: "))
        let description = prompt("Insert description: ")
        category.withdraw(amount, description);
    } else {
        console.log(`Category not available`)
    }
    mainMenu()
}




const createSpendChart = (categories) => {
    const takePercentage = () => {
        let countWithdraw = 0
        let countdeposit = 0
        let percentage = 0
        const obj = {}
        for (let category of categories) {
            for (let ledgerLine of category.ledger) {
                if (ledgerLine.amount < 0) {
                    countWithdraw += ledgerLine.amount
                } else {
                    countdeposit += ledgerLine.amount
                }
            }
            if (countdeposit < Math.abs(countWithdraw)) {
                percentage = 100
                obj[category.name] = Math.floor(percentage)
            } else {
                percentage = 100 + ((Math.abs(countWithdraw) / countdeposit - 1) * 100)
                obj[category.name] = Math.floor(percentage)
            }
    
            countWithdraw = 0
            countdeposit = 0
            percentage = 0
    
        }
        return (obj)
    
    }

    const maxValue = 100
    let obj = takePercentage()
    let chart = ""
    let keys = Object.keys(obj);
    if (Object.keys(obj).length > 0) {



        for (let i = maxValue; i >= 0; i -= 10) {
            line = i.toString().padStart(3, " ") + "|"
            for (let j = 0; j < keys.length; j++) {
                if (obj[keys[j]] >= i) {
                    line += " o "
                } else {
                    line += "   "
                }
            }
            chart += line + "\n"
        }

        chart += "    -";
        for (let k = 0; k < keys.length; k++) {
            chart += "---"
        }
        chart += "\n"

        let maxLength = Math.max(...keys.map(key => key.length));
        for (let i = 0; i < maxLength; i++) {
            chart += "     "
            for (let k = 0; k < keys.length; k++) {
                if (i < keys[k].length) {
                    chart += keys[k][i] + "  "
                } else {
                    chart += "   "
                }
            }
            chart += "\n"
        }
        return (chart)
        // mainMenu()
    } else {
        return ("You need to insert a category, initial deposit and withdraw")
        // mainMenu()
    }
}
// const food = new Category("food")
// food.deposit(1000, "deposit")
// food.withdraw(100, "test")
// categories.push(food)
// createSpendChart(categories)
// const mainMenu = () => {
//     console.log("1. Create New Category");
//     console.log("2. Get Balance");
//     console.log("3. Deposit Category");
//     console.log("4. Withdraw Category");
//     console.log("5. Get Spend Chart");
//     const menu = prompt("Inserisci il numero: ")
//     switch (menu) {
//         case "1":
//             createNewCategory()
//             break
//         case "2":
//             console.log(getBalance())
//             break
//         case "3":
//             deposit()
//             break
//         case "4":
//             withdraw()
//             break
//         case "5":
//             createSpendChart()
//             break
//         default:
//             console.log("Number not valid")
//     }
// }


// mainMenu()

module.exports = {
    Category,
    createSpendChart
};