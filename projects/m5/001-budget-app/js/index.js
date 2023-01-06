//m5-001-budget-app

// Creation of Class Category
class Category {
    constructor(name) {

        //arguments
        this.name = name;
        this.ledger = [];

        //methods
        this.deposit = function(quantity, description){
            
            if (((quantity.toFixed(2).toString()).match((/\d+/g))[0].length + 
                quantity.toFixed(2).toString().match((/\d+/g))[1].length) > 7){

                console.error(`Deposit amount can not contain more than 7 digits`)
                console.log(`The following deposit has not been proceed: amount = ${quantity}, descritpion = ${description}`)
                return   
            }else{
                description = description || ''; // same as: if(description===undefined){description=''}
                return this.ledger.push({'amount': quantity, 'description':description})
            }
        };

        this.withdraw = function(quantity, description) {

            if (((quantity.toFixed(2).toString()).match((/\d+/g))[0].length + 
                quantity.toFixed(2).toString().match((/\d+/g))[1].length) > 7){

                console.error(`Withdraw amount can not contain more than 7 digits`)
                console.log(`The following withdraw has not been proceed: amount = ${quantity}, descritpion = ${description}`)
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

        this.getBalance = function(){
            let balance = 0.00
            this.ledger.forEach(element => {
            balance += element['amount']
            })
            return balance.toFixed(2)
        };

        this.transfer = function(quantity, category){
            if (this.getBalance() >= quantity){
                this.withdraw(quantity, `Transfer to ${category.name}`)
                category.deposit(quantity, `Transfer from ${this.name}`)
                return true
            } else return false
        };
    }

    printResult() {
        /** personale notes
        //only  console.log(this.ledger) print array.toString method is not able to produce a meaningful string representation for each element of the array.
        //The JSON.stringify function is often used to convert data structures to a string representation that can be stored or transmitted, 
        //or to produce a human-readable string representation of the data
         //console.log(`this is the ledger of ${this.name}: ${JSON.stringify(this.ledger)}`)
        */        
        
         const maxCharNumber = 30
        const halfTitle = Math.floor((maxCharNumber-(this.name.length))/2)
        let titleLine =  ''

        for (let i = 1; i <= (maxCharNumber-this.name.length);i++){
            titleLine += '*'
        }
        titleLine = titleLine.substring(0,halfTitle) + this.name + titleLine.substring(halfTitle)
        console.log(`\n${titleLine}`)

        this.ledger.forEach(element => {
            /**Comment here!
             */
            console.log(element['description'].substring(0,23) + 
            (element['amount'].toFixed(2).toString().padStart((maxCharNumber-element['description'].slice(0,23).length))))
        })
        console.log(`Total: ${this.getBalance()}`)
    }
}

// Function to create a spend chart
const createSpendChart = (listOfCategory) => {
    
    listOfCategory.length = 4
    let categoryNames = []
    let elementPercentage = []
    let totalElementPercentage = []
    let totalCategoryWithdraw = 0
    let totalWithdraw = 0

    listOfCategory.forEach(element => {

        categoryNames.push(element.name)

        if(element != undefined){
            element.ledger.forEach(singleAmount =>{
                if (singleAmount['amount'] < 0) {
                    totalWithdraw = (+(totalWithdraw - (-singleAmount['amount'])).toFixed(2))
                    totalCategoryWithdraw = (+(totalCategoryWithdraw - (-singleAmount['amount'])).toFixed(2))
                }
            })  
        }
        elementPercentage.push(Math.abs(totalCategoryWithdraw))
        totalCategoryWithdraw = 0
    })
    
    totalWithdraw = Math.abs(totalWithdraw)
    totalElementPercentage = elementPercentage.map(x => parseInt(((x/totalWithdraw)*100)/10,10)*10) //list rounded at the 10 smaller

    /**perdonal test 
    console.log('total withdraw: ', totalWithdraw)
    console.log('total withdraw cat: ', elementPercentage)
    console.log('category %: ', totalElementPercentage)
    console.log('list of cat: ', categoryNames)
    */
    
    //variable for chart, al printed as Strings
    // line ---- before the category names at the end
    let stringLine = '-'
    for(let i=1;i<=categoryNames.length * 3;i++){
        stringLine += ('-')
    }
    stringLine = stringLine.padStart((categoryNames.length*3)+5,' ')

    //category names at the end of the print
    let stringVerticalCategory = '    ' //7 space to have the desired print result
    let letters = []
    let longestCategoryLength = 0
     
    categoryNames.forEach(cat=> {
        letters.push(cat.split(''))
        if(cat.split('').length>longestCategoryLength){
            longestCategoryLength = cat.split('').length
        }
    })

    for(let i = 0;i<longestCategoryLength;i++){
        letters.forEach(lett => {
            lett[i] = lett[i] || ' ';
            stringVerticalCategory = stringVerticalCategory + ' ' + lett[i] + ' '
        })
        stringVerticalCategory += '\n' + '    '
    }
  
    // o for the percentage in the chart
    let stringO = ''
    let charO = ''
  
    for(let p=100;p>=0;p-=10){

        stringO = stringO + (p.toString().padStart(3,' ')) +'|'

        totalElementPercentage.forEach(singleCategoryPercentage => {
            if (p<=singleCategoryPercentage){
                charO = ' o '
            }else{
                charO = ''
            }
            stringO = stringO + charO 
        })
        if(p!=0){stringO += '\n'}
    }

    //write chart
    console.log(`\nPercentage spent by category`)
    console.log(`${stringO}`)
    console.log(`${stringLine}`)
    console.log(`${stringVerticalCategory}`)
}

/** Initialization of one Object Category
 */
const categoryFood =  new Category('Food');
const categoryClothing =  new Category('Clothing');
const categoryEntertainmentd =  new Category('Entertainment');
const categoryAuto =  new Category('Auto');

/** Test */
categoryFood.deposit(1000.00, 'initial deposit')
categoryFood.withdraw(10.15, 'groceries')
categoryFood.withdraw(15.89, 'restaurant and more food for dessert')
categoryFood.transfer(50.00, categoryClothing)
categoryClothing.withdraw(25.55)
categoryClothing.withdraw(100)
categoryAuto.deposit(1000, 'initial deposit')
categoryAuto.withdraw(15)

categoryFood.printResult()
categoryClothing.printResult()
categoryAuto.printResult()

createSpendChart([categoryFood,categoryClothing,categoryAuto,categoryEntertainmentd])