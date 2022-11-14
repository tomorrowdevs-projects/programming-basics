const Category = require("./budget")

/**
 * Used to create the spend chart 
 * @param {List<Category>} categories List of categories
 * @returns string contained the chart
 */

function createSpendChart(categories){

    //Error checking
    if (!(categories instanceof Array)){
        throw "The type of cateogries must be: Array<Category>!";
    }

    /** List to store withdraws
     * @type {Array<int/float>}
     */
    const withDrawList = [];

    categories.forEach(category => {
        let sum = 0;

        //Error checking
        if (!(category instanceof Category)){
            throw "The type of cateogries must be: Category!";
        }

        category.get_ladger().forEach(e => {
            if (e.amount < 0){
                sum += Math.abs(e.amount);
            }           
        });
        withDrawList.push({"Category": category.get_type(), "WithDraws": sum})
        sum = 0;
    })  

    /** List to store the sum of all withdraws for each category
     * @type {float}
     */
    let total = 0;

    withDrawList.forEach(e => {
        total += e.WithDraws;
    })


    /** List to store the percentages for each category based on own withdraws
     * @type {List<int>}
     */
    const percList = [];

    withDrawList.forEach(e => {
        percList.push(Math.floor((e.WithDraws*100)/total));
    })
 
    /** Creating the first part of the chart */
    let lines = 100;
    let chart = "Percentage spent by category\n";
    for(let i = 0; i < 11; i++){
        chart += ((lines - i*10) + "| ").padStart(5)
        for(let j = 0; j < categories.length; j++){            
            if (percList[j] > lines - i*10){
                chart += "o  ";
            }else{
                chart += "   "
            }            
        }
        chart += "\n";       
    }

    /** Creating middle line */
    chart += " ".repeat(4) + "---".repeat(categories.length) + "-" +"\n";

    /** Memorizing the longest category (in terms of name)  */
    maxLength = 0;
    withDrawList.forEach(e => {
        if (maxLength < e.Category.length){
            maxLength = e.Category.length;
        }
    });

    // Creating vertical words (cateogries name) under chart in their own coloumn
    for (let i = 0; i < maxLength; i++){
        chart += " ".repeat(5);
        for (let j = 0; j < categories.length; j++){
            if (withDrawList[j].Category.length < i+1){
                chart += "   ";
            } else{
                chart += withDrawList[j].Category[i] + "  ";
            }            
        }
        chart += "\n";
    }

    return chart;

}

module.exports = createSpendChart;