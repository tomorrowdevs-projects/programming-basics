const utils = require('./utils');

const date = new Date().toLocaleDateString();
const money = utils.global.money;


///////////////////////////////////////////////////
///////////// Create category class ///////////////
///////////////////////////////////////////////////

describe('class Category', () => {
    const food = new utils.Category('food', 1000);
    const clothing = new utils.Category('clothing', 500);


    it('balance and ledger are initialized well whithout initial balance', () => {
        const cat2 = new utils.Category('food');
        expect(cat2.balance).toEqual(0);
        expect(cat2.ledger).toEqual([{'amount': 0, "date": date, 'description': 'initial balance'}]);
    });

    it('deposit whith an amount equal to a number', () => {
        food.deposit(1000, 'salary')
        expect(food.balance).toEqual(2000);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}]);
    });

    it('deposit whith an amount equal to a string', () => {
        food.deposit('hello', 'salary')
        expect(food.balance).toEqual(2000);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}]);
    });

    it('deposit whith a description empty', () => {
        food.deposit(100)
        expect(food.balance).toEqual(2100);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}]);
    });

    it('withdraw with an amount lower than the balance', () => {
        expect(food.withdraw(1230, 'dinner five stars')).toBeTruthy();
        expect(food.balance).toEqual(870);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}]);
    });

    it('withdraw with an amount higher than the balance', () => {
        expect(food.withdraw(900, 'a crate of caviar')).toBeFalsy();
        expect(food.balance).toEqual(870);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}]);
    });

    it('withdraw with a description empty', () => {
        expect(food.withdraw(50)).toBeTruthy();
        expect(food.balance).toEqual(820);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}, {'amount': -50, "date": date, 'description': ''}]);
    });
    
    it('transfer with an amount lower than the balance', () => {
        expect(food.transfer(300, clothing)).toBeTruthy();
        expect(clothing.balance).toEqual(800);
        expect(food.balance).toEqual(520);
        expect(clothing.ledger).toEqual([{'amount': 500, "date": date, 'description': 'initial balance'}, {'amount': 300, "date": date, 'description': 'Transfer from food'}]);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}, {'amount': -50, "date": date, 'description': ''}, {'amount': -300, "date": date, 'description': 'Transfer to clothing'}]);
    });
    it('transfer with an amount higher than the balance', () => {
        expect(food.transfer(600, clothing)).toBeFalsy();
        expect(clothing.balance).toEqual(800);
        expect(food.balance).toEqual(520);
        expect(clothing.ledger).toEqual([{'amount': 500, "date": date, 'description': 'initial balance'}, {'amount': 300, "date": date, 'description': 'Transfer from food'}]);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}, {'amount': -50, "date": date, 'description': ''}, {'amount': -300, "date": date, 'description': 'Transfer to clothing'}]);
    });

    it('delete last operations', () => {
        food.deleteLast();
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}, {'amount': -50, "date": date, 'description': ''}]);
        expect(food.balance).toEqual(820);
    });

    it('delete operations at index with no found', () => {
        food.deleteLast(1);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': 100, "date": date, 'description': ''}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}, {'amount': -50, "date": date, 'description': ''}]);
        expect(food.balance).toEqual(820);
    });

    it('delete operations at index with found', () => {
        food.deleteLast(2);
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}, {'amount': 1000, "date": date, 'description': 'salary'}, {'amount': -1230, "date": date, 'description': 'dinner five stars'}, {'amount': -50, "date": date, 'description': ''}]);
        expect(food.balance).toEqual(720);
    });

    it('print method', () => {
        const result = `\n***************** CLOTHING ******************
${date} initial balance          ${money}  500.00
${date} Transfer from food       ${money}  300.00

                          TOTAL :  ${money}  800.00\n`;
        expect(clothing.print()).toEqual(result)
    });

    it('set balance', () => {
        food.balance = 1000;
        expect(food.balance).toBe(1720);
    });

    it('set ledger', () => {
        food.ledger = [{'amount': 1000, "date": date, 'description': 'initial balance'}];
        expect(food.ledger).toEqual([{'amount': 1000, "date": date, 'description': 'initial balance'}]);
    });

    it('set categoryname', () => {
        food.categoryName = 'children';
        expect(food.categoryName).toBe('children');
    });
});

///////////////////////////////////////////////////
//////////////////// global ///////////////////////
///////////////////////////////////////////////////

describe('global', () => {
    it('global.reset()', () => {
        utils.global.reset()
        expect(utils.global.allCategoryName).toEqual(['Food', 'Clothing', 'Entertainment', 'Home', 'Car'])
        expect(utils.global.money).toBe('$ ')
        expect(utils.global.allCategory).toEqual([])
    });

    it('global.moneyInput()', () => {
        utils.global.moneyInput('€')
        expect(utils.global.money).toBe('€ ')
    });

    it('separator', () => {
        const sep = utils.separator(10);
        expect(sep).toBe('----------')
    });
})

///////////////////////////////////////////////////
/////// Load, Save and Delete the JSON File ///////
///////////////////////////////////////////////////


///////////////////////////////////////////////////
/// Creating instances and set initial balance ////
///////////////////////////////////////////////////

describe('create Instances and set initial balance', () => {
    it('createInstances with parameter as number', () => {
        utils.createInstances(100);
        const allName = ['Food', 'Clothing', 'Entertainment', 'Home', 'Car'];

        allName.forEach((name, index) => {
            expect(utils.global.allCategory[index].balance).toBe(100)
            expect(utils.global.allCategory[index].categoryName).toBe(name)
            expect(utils.global.allCategory[index].ledger).toEqual([{"amount": 100, "date": date,"description": "initial balance"}]);
            expect(index).toBeLessThanOrEqual(4)
        })

    });

    it('createInstances with parameter as array', () => {
        utils.global.reset()
        const value = [200,300,1000,0,334.23];
        utils.createInstances(value);

        value.forEach((el, index) => {
            expect(utils.global.allCategory[index].balance).toBe(el)
            expect(utils.global.allCategory[index].ledger).toEqual([{"amount": el, "date": date,"description": "initial balance"}])
            expect(index).toBeLessThanOrEqual(4)
        })
    });
});

///////////////////////////////////////////////////
/////////////// Input and Check ///////////////////
///////////////////////////////////////////////////

describe('Input and check', () => {

    it('check number', () => {
        const input = utils.check('number', '9999.99')
        expect(input).toBe(9999.99)
        const input2 = utils.check('number', '10000')
        expect(input2).toBeFalsy()
        const input3 = utils.check('number', 'ciao')
        expect(input3).toBeFalsy()
    });

    it('check text', () => {
        const input = utils.check('text', 'ciao ciao')
        expect(input).toBe('ciao ciao')
        const input2 = utils.check('text', 'ci')
        expect(input2).toBeFalsy()
    });

    it('check currency', () => {
        const input = utils.check('currency', '€')
        expect(input).toBe('€')
        const input2 = utils.check('currency', 'ciao')
        expect(input2).toBeFalsy()
        const input3 = utils.check('currency', '9')
        expect(input3).toBeFalsy()
    });

    it('check array', () => {
        const input = utils.check(['1','2'], '2')
        expect(input).toBe('2')
        const input2 = utils.check(['1','2'], '9')
        expect(input2).toBeFalsy()
    });

})

///////////////////////////////////////////////////
///////// Rename, Add or Delete Category //////////
///////////////////////////////////////////////////

describe('Rename, Add or delete Category', () => {
    it('Rename', () => {
        utils.renOrDelCategory('ren', 4, 'children');
        expect(utils.global.allCategoryName).toEqual(['Food', 'Clothing', 'Entertainment', 'Home', 'children'])
    })

    it('Delete', () => {
        utils.renOrDelCategory('del', 4);
        expect(utils.global.allCategoryName).toEqual(['Food', 'Clothing', 'Entertainment', 'Home'])
    })

    it('delete when there is only one category', () => {
        utils.renOrDelCategory('del', 3);
        utils.renOrDelCategory('del', 2);
        utils.renOrDelCategory('del', 1);
        utils.renOrDelCategory('del', 0);
        expect(utils.global.allCategoryName).toEqual(['Food'])
    })

    it('add', () => {
        utils.addCategory('dog');
        expect(utils.global.allCategoryName).toEqual(['Food', 'dog'])
    })

    it('add if name exist', () => {
        utils.addCategory('dog');
        expect(utils.global.allCategoryName).toEqual(['Food', 'dog'])
    })

    it('add if name exist case insensitive', () => {
        utils.addCategory('DOG');
        expect(utils.global.allCategoryName).toEqual(['Food', 'dog'])
        
        //reset
        utils.renOrDelCategory('ren', 1, 'Clothing'); utils.addCategory('Entertainment'); utils.addCategory('Home'); utils.addCategory('Car');
    })
})

///////////////////////////////////////////////////
//////////////////// Print ////////////////////////
///////////////////////////////////////////////////

describe('Print', () => {
    

    it('printCategoryInline', () => {
        const catinline = utils.printCategoryInline();
        expect(catinline).toEqual('------------------------------------------------\nFood <> Clothing <> Entertainment <> Home <> Car\n------------------------------------------------\n')
    })

    it('printCategoryList without exclusion', () => {
        const catlist = utils.printCategoryList();
        expect(catlist).toEqual(["1", "2", "3", "4", "5"])
    })

    it('printCategoryList with exclusion', () => {
        const catlist = utils.printCategoryList(3);
        expect(catlist).toEqual(["1", "2", "3", "5"])
    })

    it('printAll', () => {
        const printAll = utils.printAll();
        expect(printAll).toEqual(`\n******************* FOOD ********************
${date} initial balance          $   200.00

                          TOTAL :  $   200.00

***************** CLOTHING ******************
${date} initial balance          $   300.00

                          TOTAL :  $   300.00

*************** ENTERTAINMENT ***************
${date} initial balance          $  1000.00

                          TOTAL :  $  1000.00

******************* HOME ********************
${date} initial balance          $     0.00

                          TOTAL :  $     0.00

******************** CAR ********************
${date} initial balance          $   334.23

                          TOTAL :  $   334.23

------------------------
TOTAL BALANCE $ 1834.23
------------------------
`)
    })

    it('showTotalBalance', () => {
        const balance = utils.showTotalBalance();
        expect(balance).toEqual('\nTOTAL BALANCE $ 1834.23')
    })
})

///////////////////////////////////////////////////
/////////// Search and Delete operation ///////////
///////////////////////////////////////////////////

describe('Search and delete operation', () => {
    it('objToString', () => {
        const objToString = utils.objToString({"amount": 100, "date": date,"description": "initial balance"})
        expect(objToString).toEqual([`amount : $ 100.00\ndate : ${date}\ndescription : initial balance\n`, 100,"initial balance",])
    })

    it('deleteOperation deposit or withdraw', () => {
        utils.global.reset();
        utils.createInstances(100);
        utils.deleteOperation(100, "initial balance", "Food", utils.global.allCategory[0])
    
        expect(utils.global.allCategory[0].ledger).toEqual([])
    })

    it('deleteOperation transfer to', () => {
        utils.global.allCategory[1].transfer(100, utils.global.allCategory[3])
        utils.deleteOperation(100, "Transfer to Home", "Clothing", utils.global.allCategory[1])
        expect(utils.global.allCategory[1].ledger).toEqual([{"amount": 100, "date": date,"description": "initial balance"}])
        expect(utils.global.allCategory[3].ledger).toEqual([{"amount": 100, "date": date,"description": "initial balance"}])
    })

    it('deleteOperation transfer from', () => {
        utils.global.allCategory[1].transfer(100, utils.global.allCategory[3])
        utils.deleteOperation(100, "Transfer from Clothing", "Home", utils.global.allCategory[3])
        expect(utils.global.allCategory[1].ledger).toEqual([{"amount": 100, "date": date,"description": "initial balance"}])
        expect(utils.global.allCategory[3].ledger).toEqual([{"amount": 100, "date": date,"description": "initial balance"}])
    })

    it('deleteOperation transfer with no found', () => {
        utils.global.allCategory[1].transfer(50, utils.global.allCategory[3])
        utils.global.allCategory[3].withdraw(150, '')
        utils.deleteOperation(50, "Transfer to Home", "Clothing", utils.global.allCategory[1])
        expect(utils.global.allCategory[1].ledger).toEqual([{"amount": 100, "date": date,"description": "initial balance"},{"amount": -50, "date": date,"description": "Transfer to Home"}])
        expect(utils.global.allCategory[3].ledger).toEqual([{"amount": 100, "date": date,"description": "initial balance"},{"amount": 50, "date": date,"description": "Transfer from Clothing"},{"amount": -150, "date": date,"description": ""}])
    })

    it('searchOperation with result', () => {
        const search = utils.searchOperation('Home')
        expect(search).toEqual(`All search results with the word "HOME"


-----Clothing-----

date : ${date}
amount : $ -50.00
description : Transfer to Home

`)
    })

    it('searchOperation with result case insensitive', () => {
        const search = utils.searchOperation('HOME')
        expect(search).toEqual(`All search results with the word "HOME"


-----Clothing-----

date : ${date}
amount : $ -50.00
description : Transfer to Home

`)
    })

    it('searchOperation without result', () => {
        const search = utils.searchOperation('ciao')
        expect(search).toEqual(`All search results with the word "CIAO"\n\n! No matches !\n\n`)
    })

    it('showResult with result', () => {
        const arr = [[{"amount": 200, "date": date,"description": "pippo pluto"}],[{"amount": 100, "date": date,"description": "paperino"}]]
        const result = utils.showResult(arr, 'micky')
        expect(result).toEqual(`All search results with the word "MICKY"


-----Food-----

amount : $ 200.00
date : ${date}
description : pippo pluto


-----Clothing-----

amount : $ 100.00
date : ${date}
description : paperino

`)
    })

    it('showResult without result', () => {
        const arr = [[]]
        const result = utils.showResult(arr, 'micky')
        expect(result).toEqual(`All search results with the word "MICKY"\n\n! No matches !\n\n`)
    })
}) 

///////////////////////////////////////////////////
////////////////// Spend Chart ////////////////////
///////////////////////////////////////////////////

describe('Spent Chart', () => {
    it('calculateSpentPercent', () => {
        const calc = utils.calculateSpentPercent()
        expect(calc).toEqual([["   0   ","  50.00","   0   "," 150.00","   0   "],[0,20,0,70,0],200])
    })

    it('createGraphRow', () => {
        const calc = utils.createGraphRow(20,[0,20,0,70,0])
        expect(calc).toEqual('            o               o           ')
        const calc2 = utils.createGraphRow(60,[0,20,0,70,0])
        expect(calc2).toEqual('                            o           ')
        const calc3 = utils.createGraphRow(80,[0,20,0,70,0])
        expect(calc3).toEqual('                                        ')
    })

    it('verticalName', () => {
        const verticalName = utils.verticalName()
        expect(verticalName).toEqual(`        F       C       E       H       C   
        o       l       n       o       a   
        o       o       t       m       r   
        d       t       e       e           
                h       r                   
                i       t                   
                n       a                   
                g       i                   
                        n                   
                        m                   
                        e                   
                        n                   
                        t                   \n`)
    })

    it('create_Spend_Chart', () => {
        const graph = utils.create_spend_chart()
        expect(graph).toEqual(`Percentage spent by category out of a total of $ 200.00

100|                                        |100
 90|                                        |90
 80|                                        |80
 70|                            o           |70
 60|                            o           |60
 50|                            o           |50
 40|                            o           |40
 30|                            o           |30
 20|            o               o           |20
 10|            o               o           |10
  0|    o       o       o       o       o   |0
    ----------------------------------------
  $     0      50.00    0     150.00    0   
    ----------------------------------------
        F       C       E       H       C   
        o       l       n       o       a   
        o       o       t       m       r   
        d       t       e       e           
                h       r                   
                i       t                   
                n       a                   
                g       i                   
                        n                   
                        m                   
                        e                   
                        n                   
                        t                   

`)
    })
})