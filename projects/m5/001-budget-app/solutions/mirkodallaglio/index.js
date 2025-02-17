const prompt = require('prompt-sync')({sigint: true});
const utils = require('./utils');

let categoryChoose = '';    //save the value of the categories chosen from the menu
let tmpAmount = 0;  //saves the value of the single operations

//if the JSON file exists it will start from the main menu, otherwise it will initialize the currency, 
//the categories and the initial balance
utils.load(principalMenu, moneyChooseMenu);

///////////////////////////////////////////////////
///////////////////// MENU ////////////////////////
///////////////////////////////////////////////////

//////////// IF BUDGET.JSON NOT EXIST /////////////

//Choice of currency
function moneyChooseMenu () {
    utils.title();
    console.log(`Choose your currency (example: $, €, ¥, £, etc ...)\n\n`);
    utils.global.moneyInput(utils.inputAndCheck('currency', 'Currency > '));
    modifyCategoryMenu();
};

//Show preset categories and allow editing (rename, delete, add)
function modifyCategoryMenu () {
    utils.title();
    console.log(`Current categories are:\n`)
    console.log(utils.printCategoryInline());
    console.log(`Do you want to change or add them?\n`);
    console.log(`1) Rename category\n2) Add more categories\n3) Delete category\n4) That's okay\n`);
    const input = utils.inputAndCheck(['1','2','3','4'], '> ');
    switch (input) {
        case '1':   //Rename
            console.log(`\nWhich one do you want to rename?\n`);
            const categoryIndex = utils.inputAndCheck(utils.printCategoryList(), 'Rename > ') -1 ;
            const newName = utils.inputAndCheck('text', 'New name > ');
            utils.renOrDelCategory('ren', categoryIndex, newName); modifyCategoryMenu(); break;

        case '2':   //Add
            console.log(`\nWrite the name of the category you want to add\n`);
            const nameNewCategory = utils.inputAndCheck('text', 'Add > ');
            const cat = utils.addCategory(nameNewCategory);
            if (cat) {
                console.log(`${cat} category already exists !`);
                utils.messageTimeout(modifyCategoryMenu);
            } else modifyCategoryMenu(); break;

        case '3':   //Delete
            console.log(`\nWhich one do you want to delete?\n`);
            const catDel = utils.inputAndCheck(utils.printCategoryList(global.allCategoryName), 'Delete > ') - 1;
            if (utils.renOrDelCategory('del', catDel)) {
                console.log('\nYou have only one category, you cannot delete it');
                utils.messageTimeout(modifyCategoryMenu);
            } else modifyCategoryMenu(); 
            break;

        case '4':   //Ok continue
            utils.title(); setInitAmountMenu(); break;
    }
};

//set an initial amount for each category, the same for everything or chosen separately
function setInitAmountMenu () {
    console.log(`\nAll categories start with ${utils.global.money}0, do you want to set an initial value?\n`);
    console.log(`1) Yes, I set an equal value for all\n2) I want to choose the value for each one\n3) no, they are all good for ${utils.global.money}0\n`);
    const input = utils.inputAndCheck(['1','2','3'], '> ');

    if (input === '1') {            //Equal value for all
        console.log('\nSet the starting value for all categories\n');
        utils.createInstances(utils.inputAndCheck('number', utils.global.money));
        utils.save(); utils.title(); principalMenu() 

    } else if (input === '2') {     //Choose them separatly
        utils.title() 
        console.log('\nSet the starting value for single categories\n');
        
        const valueAllCategory = utils.global.allCategoryName.map(cat => {
            console.log(`\n${cat}\n`);
            return utils.inputAndCheck('number', utils.global.money);
        });
        utils.createInstances(valueAllCategory);
        utils.save(); utils.title(); principalMenu() 

    } else if (input === '3') {     //All initialized to 0
        utils.createInstances(0); 
        utils.save(); utils.title(); principalMenu()
    }
};

///////////////////////////////////////////////
/////////// IF BUDGET.JSON EXIST //////////////
///////////////////////////////////////////////

//main menu, choose category,search operation, show graph, print all categorys or show total balance
function principalMenu () {
    console.log('1) Choose category\n2) Search operation\n3) Shows the graph of percentage spent\n4) Print movements of all categories\n5) Show total balance\n\nreset) Delete all and Reset\n\nx) Exit\n');
    const input = utils.inputAndCheck(['1','2','3','4','5','reset','x'], '> ');
    switch (input) {
        case '1':       //choose category
            utils.title(); chooseCategoryMenu(); break;

        case '2':       //search operation
            console.log('\nWrite a keyword to search for in the operations you performed\n');
            const keyWord = utils.inputAndCheck('text', 'SEARCH > ');
            utils.title(); console.log(utils.searchOperation(keyWord)); 
            principalMenu(); break;

        case '3':       //show graph
            console.log(utils.create_spend_chart()); principalMenu(); break;

        case '4':       //print all
            utils.title(); console.log(utils.printAll()); principalMenu(); break;

        case '5':       //show total balance
            console.log(utils.showTotalBalance()); utils.messageTimeout(principalMenu); break;

        case 'reset':   //Delete json file and reset
            console.log('\n! budget.json file will be deleted,\n! all settings and data will be lost.\n\nAre you sure?\n');
            const confirm = utils.inputAndCheck(['yes', 'no'], 'yes or no > ');
            if (confirm === 'yes') utils.deleteFile() ? utils.messageTimeout(principalMenu) :  utils.messageTimeout(moneyChooseMenu);
            else { utils.title(); principalMenu() }
            break;

        case 'x':       //Exit program
            process.exit; break;
    }
};

//categories menu, show all categories and save the choice in categoryChoose
//exclusion is optional, index of the category to be skipped and not shown
function chooseCategoryMenu (exclusion) {
    const num = utils.printCategoryList(exclusion);

    let input = '';
    if (exclusion === undefined) {
        console.log('\nb) Go to main menu\n');
        num.push('b');
        input = utils.inputAndCheck(num, '> ');

        if(input === 'b') {utils.title(); principalMenu()}
        else {
            categoryChoose = input;
            utils.title();
            categoryMenu();
        }
    } else {
        console.log('');
        input = utils.inputAndCheck(num, `Transfer from ${utils.global.allCategoryName[exclusion].toUpperCase()} to > `);
        utils.global.allCategory[exclusion].transfer(tmpAmount, utils.global.allCategory[input-1]);
        utils.save();
        utils.messageTimeout(categoryMenu);
    }
};

//menu of the single category, allows you to carry out the operations of deposit, withdrawal, etc.
function categoryMenu () {
    const thisCategory = utils.global.allCategory[categoryChoose-1];
    const catName = thisCategory.categoryName;
    console.log('1) Deposit\n2) Withdraw\n3) Transfer\n4) Print\n5) Show Balance\n\ndel) Delete last operation\n\nb)Choose other category\n');
    const input = utils.inputAndCheck(['1','2','3','4','5','del','b'], `${catName.toUpperCase()} > `);
    const [catString, amount, description] = utils.objToString(thisCategory.ledger.at(-1));

    switch (input) {
        case '1':       //Deposit
            operationMenu('Deposit'); break;

        case '2':       //Withdraw
            operationMenu('Withdraw'); break;

        case '3':       //Transfer
            operationMenu('Transfer'); break;

        case '4':       //Print
            utils.title(); console.log(thisCategory.print()); categoryMenu(); break;

        case '5':       //Show balance
            console.log(`\n${catName.toUpperCase()} Balance is ${utils.global.money}${thisCategory.balance.toFixed(2)}`);
            utils.messageTimeout(categoryMenu); break;

        case 'del':     //Delete last operation
            console.log(`The last operation will be canceled:\n\n${catString}\nAre you sure ?\n`);
            const confirm = utils.inputAndCheck(['yes', 'no'], 'yes or no > ');
            if (confirm === 'yes') { 
                utils.deleteOperation(amount, description, catName, thisCategory); 
                utils.save(); utils.messageTimeout(categoryMenu); 
            } else { utils.title(); categoryMenu() }
            break;

        case 'b':       //go back
            utils.title(); chooseCategoryMenu(); break;
    }
};

//menu for the single operation, asks for inputs and performs operations through the methods of the class
function operationMenu (type) {
    tmpAmount = utils.inputAndCheck('number', `${type} amount ${utils.global.money}`);

    if (type === 'Transfer') {
        console.log('');
        chooseCategoryMenu(categoryChoose-1);

    } else {
        const description = utils.inputAndCheck('text', type + ' description > ');

        if (type === 'Deposit') {
            utils.global.allCategory[categoryChoose-1].deposit(tmpAmount, description);
            utils.save();
            utils.messageTimeout(categoryMenu);
        }
        
        else {
            utils.global.allCategory[categoryChoose-1].withdraw(tmpAmount, description);
            utils.save();
            utils.messageTimeout(categoryMenu);
        }
    }
};
