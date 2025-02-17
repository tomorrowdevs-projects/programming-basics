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
            output += expPercentages[key] >= label ? "o  " : "   ";
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
            output += name.length > i ? name[i] + "  " : "   ";
        } // end for...in

        output += "\n";

    } // end for loop

    return output;
} // end function

module.exports = createSpendChart;
