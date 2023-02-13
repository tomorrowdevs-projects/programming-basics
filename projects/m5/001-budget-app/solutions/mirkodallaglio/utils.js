const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');

///////////////////////////////////////////////////
///////////// Create category class ///////////////
///////////////////////////////////////////////////

class Category {
    #ledger = [];       //transactions list
    #balance = 0;       //total balance
    #categoryName = ''; //the name of this category
    #date = new Date().toLocaleDateString();

    constructor (categoryName, initial = 0) {
        this.#balance = initial;
        this.#ledger = [{'date': this.#date, 'amount': initial, 'description': 'initial balance'}];
        this.#categoryName = categoryName;
    };

    //Check that the expense to be subtracted is not greater than the total available
    #check_funds (amount) {
        if (amount > this.#balance) return false;
        else return true
    };

    //check that the input is a number and that it has a maximum of 7 characters (9999.99)
    #check_input (amount) {
        if (!isNaN(amount) && amount < 10000) return true
        else return false
    };

    //Inserts a deposit in the budget, add the movement in the ledger and adds the amount to the total
    deposit (amount, description = '') {
        if (this.#check_input(amount)) {
            this.#ledger.push({'date': this.#date, 'amount': amount, 'description': description});
            this.#balance += amount;
            console.log(`\nDeposit in ${this.#categoryName.toUpperCase()} was successful`)
        }
    };

    //Inserts a withdraw in the budget, add the movement in the ledger and subtracts the amount to the total
    withdraw (amount, description = '') {
        if (this.#check_input(amount) && this.#check_funds(amount)) {
            this.#balance -= amount;
            this.#ledger.push({'date': this.#date, 'amount': -amount, 'description': description});
            console.log(`\nWithdraw in ${this.#categoryName.toUpperCase()} was successful`)
            return true;

        } else { console.log(`\nError, you only have ${global.money}${this.#balance}, you cannot withdraw`); return false }
    };

    //Puts a transfer to another category in the budget, uses withdraw and deposit
    transfer (amount, categoryTo) {
        if (this.withdraw(amount, 'Transfer to ' + categoryTo.categoryName)) {
            eval(categoryTo).deposit(amount, 'Transfer from ' + this.#categoryName);
            console.log('\nTransfer was successful')
            return true;

        } else {console.log("\nError, Transfer did NOT take place!"); return false}
    };
    
    //print the legder, the balance and the name of the category framed by *
    print () {
        const catName = ' ' + this.categoryName + ' ';
        const length = catName.length;
        const start = (45 - length)/2;
        const title = '\n' + (catName.toUpperCase().padStart(length+start, '*')).padEnd(45, '*') + '\n';
        let transact = '';

        this.#ledger.forEach(transaction => 
            transact += `${transaction.date} ${transaction.description.slice(0,23).padEnd(23, ' ')}  ${global.money}${Number(transaction.amount).toFixed(2).padStart(8,' ')}\n`)

        const total = `\n${'TOTAL :'.padStart(33, ' ')}  ${global.money}${Number(this.#balance).toFixed(2).padStart(8,' ')}\n`;
        return title + transact + total
    };

    //if index is not passed, it deletes the last movement, otherwise it looks for the movement in the ledger 
    //and deletes it, checking that the amount is not greater than the balance
    deleteLast (index = -1) {
        if (this.#ledger.at(index).amount > this.#balance) console.log(`! Operation NOT deleted, amount exceeding availability on ${this.#categoryName}`)
        else {
            this.#balance -= this.#ledger.at(index).amount;

            if (index === -1) this.#ledger.pop();
            else this.#ledger.splice(index, 1)
            console.log(`Operation deleted on ${this.#categoryName}`);
        }
    };

    //getter and setter for private var
    get balance () {
        return this.#balance
    };

    get ledger () {
        return this.#ledger
    };

    get categoryName () {
        return this.#categoryName
    };
    set balance (amount) {
        this.#balance += amount;
    }
    set ledger (arr) {
        this.#ledger = [...arr];
    };
    set categoryName (name) {
        this.#categoryName = name;
    };
};

///////////////////////////////////////////////////
//////////////////// global ///////////////////////
///////////////////////////////////////////////////

const global = {
    allCategory : [],   //container of category instances
    allCategoryName : ['Food', 'Clothing', 'Entertainment', 'Home', 'Car'], //initial preset category
    money : '$ ',   //initial preset for money
    moneyInput (input) { this.money = input + ' ' }, //setter for money
    reset () { this.allCategory = []; this.allCategoryName = ['Food', 'Clothing', 'Entertainment', 'Home', 'Car'], this.money = '$ ' }
};

//clears the console and inserts the title
const title = () => {
    console.clear();
    console.log('\n------------------- BUDGET APP -------------------\n');
};

const separator = (num) => '-'.padStart(num, '-');

//reset the console and launch a menu after 3 seconds
const messageTimeout = (menu) => setTimeout(() => {title(); menu()}, 3000);

//percentages from 100 to 0 to be printed in the spent chart
const percent = [100,90,80,70,60,50,40,30,20,10,0];

///////////////////////////////////////////////////
/////// Load, Save and Delete the JSON File ///////
///////////////////////////////////////////////////

//If the budget.json file exists, it reads it, passes all data to the globals and calls funct1, 
//otherwise it launches funct2
function load (funct1, funct2) {
    if (fs.existsSync('budget.json')) {
        const rawdata = fs.readFileSync('budget.json');
        const budget = JSON.parse(rawdata);
        global.money = budget[0].currency;
        global.allCategoryName = [...budget[0].categoryName];
        createInstances(0);

        budget[1].forEach((cat, index) => {
            global.allCategory[index].ledger = cat[0];
            global.allCategory[index].balance = cat[1];
            global.allCategory[index].categoryName = global.allCategoryName[index];
        });

        title();
        return funct1()

    } else title(); return funct2();
};

//Writes all globals to busget.json file
function save () {
    const ledger = global.allCategory.map(cat => [cat.ledger,cat.balance]);
    const data = JSON.stringify([{'currency': global.money, 'categoryName': global.allCategoryName},ledger,],null,2);
    fs.writeFileSync('budget.json', data);
};

//Delete budget.json file, return true if file deleted, false if not
function deleteFile () {
    fs.unlink('budget.json', (err) => {
        if (err) { console.log(err); return false }
        else { 
            console.log('JSON file was deleted');
            global.reset();
            return true 
        }
    });   
};

///////////////////////////////////////////////////
/// Creating instances and set initial balance ////
///////////////////////////////////////////////////

//Create instances, if value is an array it sets a value for each instance, 
//if it is a number it sets the same for all
function createInstances (value) {
    if (Array.isArray(value)) {
        global.allCategoryName.forEach((el, index) => {
            global.allCategory.push(new Category(el, value[index]))
        })

    } else {
        global.allCategoryName.forEach(el => {
            global.allCategory.push(new Category(el, value))
        })
    }
};

///////////////////////////////////////////////////
/////////////// Input and Check ///////////////////
///////////////////////////////////////////////////

//takes the input from the prompt and checks.
//if the input is different from possibleInput it displays an error message and repeats recursively to a correct input
function inputAndCheck (possibleInput, inputString) {
    const input = check(possibleInput, prompt(inputString));

    if (input || input === 0) return input;
    else {
        console.log('Input error, try again !\n');
        return inputAndCheck(possibleInput, inputString);
    }
};

//check an input, if the input does not match, it returns false
//possibleInput can be an array with the only input possibilities or 'number' if you want to insert any number 
//or 'text' for free text (min 3 char) or 'currency' through regex accepts only currency symbols.
function check (possibleInput, input) {
    if (possibleInput === 'number' && !isNaN(input) && input < 10000) { 
        const num = Number(input); return Number(num.toFixed(2))
    
    } else if (possibleInput === 'text') {
        if (input.length > 2) return input;
        else {
            console.log('Input error, minimum 3 characters !\n');
            return false;
        }

    } else if (possibleInput === 'currency' && /\p{Sc}/gu.test(input)) return input;

    else if (Array.isArray(possibleInput) && possibleInput.includes(input)) return input;

    else return false;
};

///////////////////////////////////////////////////
///////// Rename, Add or Delete Category //////////
///////////////////////////////////////////////////

//Rename or delete a category name from the allCategoryName array
//input renameOrDelete : if 'ren' asks which category index and the new name and rename it
//if 'del' asks which category index and delete the category only if there are more than 1,
//if there is only one category return true
function renOrDelCategory (renameOrDelete, categoryIndex, newName) {
    if (renameOrDelete === 'ren') global.allCategoryName[categoryIndex] = newName;

    if (renameOrDelete === 'del') {
        if (global.allCategoryName.length > 1) {
            global.allCategoryName.splice(categoryIndex, 1);
        } else return true
    }
};

//adds a category only if it doesn't already exist also recognizes with case insensitive, return name of category
function addCategory (newName) {
    const nameLowerCase = global.allCategoryName.map(name => name.toLowerCase())
    if (!nameLowerCase.includes(newName.toLowerCase())) global.allCategoryName.push(newName);
    else return newName
};

///////////////////////////////////////////////////
//////////////////// Print ////////////////////////
///////////////////////////////////////////////////

//returns a string with the list of categories separated by ' <> ' and a separator above and below
function printCategoryInline () {
    const listCategory = global.allCategoryName.join(' <> ');
    return `${separator(listCategory.length)}\n${listCategory}\n${separator(listCategory.length)}\n`
};

//print the list of categories, exclusion is the index of the category not to be printed
//in case of transfer, the current category is not displayed
function printCategoryList (exclusion) {
    const num = [];
    
    global.allCategoryName.forEach((cat, index) => {
        if (index !== exclusion){
            console.log(`${index+1}) ${cat}`);
            num.push(''+ (index+1))
        }
    });
    return num
};

//print all categories using the class method and add the total of all to the end
function printAll () {
    let string = '';
    global.allCategory.forEach(cat => string += cat.print());
    const totalBalance = showTotalBalance();
    string += `\n${separator(totalBalance.length)}${totalBalance}\n${separator(totalBalance.length)}\n`;
    return string
};

//Show total balance for all categories
function showTotalBalance () {
    const totalBalance = global.allCategory.reduce((tot, cat) => tot += cat.balance,0);
    return `\nTOTAL BALANCE ${global.money}${totalBalance.toFixed(2)}`;
};

///////////////////////////////////////////////////
/////////// Search and Delete operation ///////////
///////////////////////////////////////////////////

//returns an array with [0]a string consisting of the object (input obj) key / value , 
//[1]the value of amount in number and [2] the description as string.
function objToString (obj) {
    let string = '';

    for (key in obj) {
        string += `${key} : ${key === 'amount' ? `${global.money}${obj[key].toFixed(2)}` : obj[key]}\n`;
    };
    return [string, obj.amount, obj.description]
};

//it cancels the last operation, in case of transfer it also cancels the operation in the target class but 
//only if there are the necessary funds otherwise it eliminates nothing.
//amount and description are the amount and description of the operation to be canceled
//thisCanName and thisCategory are the name of the category performing the operation and its instance object
function deleteOperation (amount, description, thisCatName, thisCategory) {
    let nameCat = '';
    let prefix = '';
    let searchAmount = 0;

    if (description.slice(0,12) === 'Transfer to ') {
        nameCat = description.slice(12);
        prefix = 'Transfer from ';
        searchAmount = Math.abs(amount);

    } else if (description.slice(0,14) === 'Transfer from ') {
        nameCat = description.slice(14);
        prefix = 'Transfer to ';
        searchAmount = -amount;

    } else return thisCategory.deleteLast();

    const tranferIndex = global.allCategory.findIndex(cat => cat.categoryName === nameCat);
    const searchDescription = prefix + thisCatName;
    const index = global.allCategory[tranferIndex].ledger.findIndex(operation => 
        operation.amount === searchAmount && operation.description === searchDescription);
    
    if (global.allCategory[tranferIndex].balance < searchAmount) 
        console.log(`! Operation NOT deleted, amount exceeding availability on ${global.allCategory[tranferIndex].categoryName}`)
    
    else {
        global.allCategory[tranferIndex].deleteLast(index);
        thisCategory.deleteLast();
        save();
    }
};

//return a string with key/value pairs of an object inside an array of arrays
function showResult (result, word) {
    let string = '';
    const title = `All search results with the word "${word.toUpperCase()}"\n\n`;

    result.forEach((cat, index) => {
        if (cat.length > 0) string += `\n-----${global.allCategoryName[index]}-----\n\n`;

        cat.forEach(operation => {
            string += objToString(operation)[0] + '\n';
        })
    })
    return string.length !== 0 ? title + string : title + '! No matches !\n\n'
};

//search for a keyword (input) in all descriptions of each operation in ledger
//return a string formatted
function searchOperation (input) {
    const result = global.allCategory.map(cat => {

        return cat.ledger.filter(operation => {
            if (operation.description.search(new RegExp(input, 'i')) !== -1) return true
            else return false
        })
    })
    return showResult(result, input);
};

///////////////////////////////////////////////////
////////////////// Spend Chart ////////////////////
///////////////////////////////////////////////////

//calculates the sum of expenses for each category, transforms it into a percentage rounded to the nearest ten
//return array : [0]array of strings with total expenses formatted for the chart
//[1]the rounded percentages array and [2] the sum of the expenditure of all categories
function calculateSpentPercent () {
    let totalSpent = 0;

    const spentSum = global.allCategory.map(category => {

        return category.ledger.reduce((sum, mov) => {
            if(mov.amount < 0) { 
                totalSpent += Math.abs(mov.amount);
                return (sum + Math.abs(mov.amount));
            } else return sum + 0
        }, 0)
    });

    arrOfPercentage = spentSum.map(spent => (Math.floor((spent / totalSpent * 100) / 10)) * 10);

    formattedSpentSum = spentSum.map(spent => 
        spent === 0 ? spent.toString().padStart(4, ' ').padEnd(7, ' ') : spent.toFixed(2).toString().padStart(7, ' '));

    return [formattedSpentSum, arrOfPercentage, totalSpent]
};

//return a string with the single line of the graph and drawing an 'o' 
//comparing the element of the percentage array with the percentage of the graph
//input value: from 0 to 100 ten by ten, input arrspentPercent: array of spending percentages for each category
//return string
function createGraphRow (value, arrSpentPercent) {
    return  arrSpentPercent.reduce((string, catPercent) => {
        if (catPercent >= value) return string + '    o   ';
        else return string + '        ';
    }, '');
};

//print all names vertically with spaces between, return string
function verticalName () {
    const nameMaxLength = Math.max(...global.allCategoryName.map(cat => cat.length))
    let string = '';

    for (let i= 0; i < nameMaxLength; i++) {
        string += '    ';
        global.allCategoryName.forEach(name => {
            string += name.length > i ? `    ${name[i]}   ` : '        ';
        });
        string += '\n'
    }
    return string
};

//create the chart
function create_spend_chart () {
    title();
    let string = '';
    const spentPercent = calculateSpentPercent();
    string += `Percentage spent by category out of a total of ${global.money}${spentPercent[2].toFixed(2)}\n\n`;

    percent.forEach(el => {
        string += `${el.toString().padStart(3,' ')}|${createGraphRow(el,spentPercent[1])}|${el.toString()}\n`;
    });
    
    const sep = separator(8 * global.allCategory.length);
    string += `    ${sep}\n  ${global.money} ${spentPercent[0].join(' ')}\n    ${sep}\n`;
    string += verticalName() +'\n';
    return string
};

///////////////////////////////////////////////////
////////////////// Module Export //////////////////
///////////////////////////////////////////////////

module.exports = {  Category,
                    global,
                    printAll,
                    printCategoryInline,
                    showResult,
                    showTotalBalance,
                    inputAndCheck,
                    check,
                    title,
                    deleteFile,
                    messageTimeout,
                    printCategoryList,
                    renOrDelCategory,
                    addCategory,
                    searchOperation,
                    separator,
                    create_spend_chart,
                    objToString,
                    createInstances,
                    deleteOperation,
                    calculateSpentPercent,
                    createGraphRow,
                    verticalName,
                    save,
                    load
                 };



