//m5-001-budget-app

// Class that create a budjet category with the desired name
class Category {
    constructor(name) {

        //arguments
        this.name = name;
        this.ledger = [];
        
        //methods
        /**
         * deposit allows to add an obj to the ledger with the form of {'amount': quantity, 'description':description} 
         * @param {number} quantity the max digit of the number is 7 
         * @param {string} description it can also be omitted
         * @returns add an obj to the ledger list
         */
        this.deposit = function(quantity, description){
            if (quantity > 99999.99){
                    throw new Error(`Deposit amount can not contain more than 7 digits.
                    The following deposit has blocked the process: amount = ${quantity}, descritpion = ${description}`)
            }else{
                description = description || ''; // same as: if(description===undefined){description=''}
                return this.ledger.push({'amount': quantity, 'description':description})
            }
        };
        /**
         * same concept as deposit but the obj is added only if the balance as enough quantity
         * @param {number} quantity the max digit of the number is 7 and is added as a negative n. to ledger
         * @param {string} description it can also be omitted
         * @returns {boolean} true o false
         */
        this.withdraw = function(quantity, description) {

            if (quantity > 99999.99){
                console.error(`Withdraw amount can not contain more than 7 digits`)
                console.error(`The following withdraw has not been proceed: amount = ${quantity}, descritpion = ${description}`)
                return false
            }else{
                description = description || '';
                quantity = -quantity
                if (this.getBalance() >= -quantity){
                    this.ledger.push({'amount': quantity, 'description':description})
                    return true
                } else return false
            }
        }; 
        /**
         * take all the obj of leger list and calculate the total quantity
         * @returns {number} with 2 decimals
         */
        this.getBalance = function(){
            let balance = 0.00
            this.ledger.forEach(element => {
            balance += element['amount']
            })
            return balance.toFixed(2)
        };
        /**
         * similar to withdraw, but the destination ledger is the one of the selected category
         * @param {number} quantity is widraw from origin and depoist to destination category with secific description
         * @param {variable} category the category has to be initilized before the call of this function
         * @returns {boolean} true or false
         */
        this.transfer = function(quantity, category){
            if (this.getBalance() >= quantity){
                this.withdraw(quantity, `Transfer to ${category.name}`)
                category.deposit(quantity, `Transfer from ${this.name}`)
                return true
            } else return false
        };
    }
    /**
     * this is a method that print the results in the desired formatted view
     */
    printResult() {        
   
        const maxCharNumber = 30 //max number of char in a printed line
        const halfTitle = Math.floor((maxCharNumber-(this.name.length))/2) //number of where to start write the category name on the first line
        let titleLine =  '' //****category name*****/
        let ledgerString = []

        //wirte the first line of "*"
        for (let i = 1; i <= (maxCharNumber-this.name.length);i++){
            titleLine += '*'
        }
        //concatenation of string (* until where to start category name + category name + * other half)
        titleLine = titleLine.substring(0,halfTitle) + this.name + titleLine.substring(halfTitle)

        //cicle in the ledger list
        this.ledger.forEach(element => {
            /* print the first 23 char of the description, add the quantity that is written starting after the 23 char
             * in this way is going alway to be align on the rigth
             */
            ledgerString.push((element['description'].substring(0,23) + 
            (element['amount'].toFixed(2).toString().padStart((maxCharNumber-element['description'].slice(0,23).length)))))
        })
        return console.log(`\n${titleLine}\n${ledgerString.join('\n')}\nTotal: ${this.getBalance()}`)
    }
}

/**
 * Function to create a spend chart
 * @param {string} listOfCategory string of category that have been already initialized
 */
const createSpendChart = (listOfCategory) => {
    
    listOfCategory.length = 4 // initilized the max number of the argument that the function can accept in the list
    let categoryNames = [] //list of the argument .name of the choosen category
    let elementPercentage = [] // list of total withdraws for every category {number}
    let totalElementPercentage = [] // list of withdraw for every category transformed in % {number}
    let totalCategoryWithdraw = 0 // total ammount of withdraw for every category (change everytime the category change in the loop)
    let totalWithdraw = 0 // total amount of all widhdraw of all category together

    /**
     * foreach to go in each category choosen
     */
    listOfCategory.forEach(category => {

        categoryNames.push(category.name)

        //if the category choosen are less than 4, but the length is initialized at 4, then there will be some undefined element in the array
        if(category != undefined){
            category.ledger.forEach(singleAmount =>{
                if (singleAmount['amount'] < 0) { //to consider only withdraw because are negtive number
                    totalWithdraw = (+(totalWithdraw - (-singleAmount['amount'])).toFixed(2)) 
                    totalCategoryWithdraw = (+(totalCategoryWithdraw - (-singleAmount['amount'])).toFixed(2))
                }
            })  
        }
        elementPercentage.push(Math.abs(totalCategoryWithdraw))
        totalCategoryWithdraw = 0 //next category start from 0
    })
    
    totalWithdraw = Math.abs(totalWithdraw)
    totalElementPercentage = elementPercentage.map(x => parseInt(((x/totalWithdraw)*100)/10,10)*10) //list rounded at the 10 smaller

    /**variable for chart, printed as groups of Strings*/
    /** group1: line ---- before the category names at the end */
    let stringLine = '-'
    for(let i=1;i<=categoryNames.length * 3;i++){
        stringLine += ('-')
    }
    stringLine = stringLine.padStart((categoryNames.length*3)+5,' ')//padStart give the rigth white space in front of every line

    /** group2: categories names at the end of the print */
    let stringVerticalCategory = '    '//7 space to have the desired print result
    let letters = [] //a list of every letters of every categories choosen
    let longestCategoryLength = 0 // number to have the longest name of the choosen categories
     
    categoryNames.forEach(category=> {
        letters.push(category.split('')) //add letters
        if(category.split('').length>longestCategoryLength){
            longestCategoryLength = category.split('').length //save the longest name of the categories
        }
    })
    // cicle to go trough each letters and of the categories, considering the longest one
    // if a category does not have letters anymore, the letter is considered empty
    for(let i = 0;i<longestCategoryLength;i++){
        letters.forEach(lett => {
            lett[i] = lett[i] || ' '; 
            stringVerticalCategory = stringVerticalCategory + ' ' + lett[i] + ' '
        })
        if(i!=longestCategoryLength-1){
        stringVerticalCategory += '\n' + '    '
        }
    }
  
    /** group3: 'o' for the percentage in the chart with % value on the left */
    let stringO = ''
    let charO = ''
  
    //cicle to print the chart with the percentage values
    for(let p=100;p>=0;p-=10){
        stringO = stringO + (p.toString().padStart(3,' ')) +'|' //padStar to have always the same char number

        //loop trough the percentage calculated earlier
        totalElementPercentage.forEach(singleCategoryPercentage => {
            if (p<=singleCategoryPercentage){
                charO = ' o '
            }else{
                charO = '   '
            }
            stringO = stringO + charO 
        })
        if(p!=0){stringO += '\n'}//in every line I want to add to the composed string a newline, exept the lastone
    }

    //write chart
    return console.log(`\nPercentage spent by category${stringO}\n${stringLine}\n${stringVerticalCategory}`) 
}

/*----------------------------------------------------------------------------

/** Initialization of Objects with Category */
const categoryFood =  new Category('Food');
const categoryClothing =  new Category('Clothing');
const categoryEntertainment =  new Category('Entertainment');
const categoryAuto =  new Category('Auto');
const categoryBusiness = new Category('Business')

/*
// Tests 
categoryFood.deposit(1000, 'initial deposit')
categoryFood.withdraw(10.15, 'groceries')
categoryFood.withdraw(15.89, 'restaurant and more food for dessert')
categoryFood.transfer(50.00, categoryClothing)
categoryClothing.withdraw(25.55)
categoryClothing.withdraw(100)
categoryAuto.deposit(1000, 'initial deposit')
categoryAuto.withdraw(15)
*/

//test 2
categoryFood.deposit(900,'deposit')
categoryEntertainment.deposit(900,'deposit')
categoryBusiness.deposit(900,'deposit')
categoryFood.withdraw(105.55)
categoryEntertainment.withdraw(33.40)
categoryBusiness.withdraw(10.99)



categoryFood.printResult()
//categoryClothing.printResult()
//categoryAuto.printResult()

createSpendChart([categoryBusiness,categoryFood,categoryEntertainment])