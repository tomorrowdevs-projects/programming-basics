/**
 * @file Create a spend_chart.
 * @module spend_chart
 * @author Salvatore Quagliariello
 */

/**
 * Creates a graphic chart containing a visual representation of the of the percentage spent 
 * in every Category object passed into the function. The percentage spent is calculated only 
 * with withdrawals, from 0 to 100. The bars in the chart are made out of the `o` character.
 * Uses loops to iterate over objects properties.
 * The string it returns is logically divided between two section, the upper part and the lower
 * part. 
 * @param  {...Object} categories Accepts as arguments an undefined number of Category Objects.
 * @returns {string} Returns a visual representation of the successfuls withdrawals of every Category
 * object passed into the function.
 */
function create_spend_chart(...categories) {
    const totalWithdraws = categories.reduce(function (acc, obj) { return acc + obj.get_withdraws(); }, 0);
    const middleLine = `    -${Array(categories.length).fill(`---`).join(``)}`;
    const milestones = {
        "  0| ": [], 
        " 10| ": [], 
        " 20| ": [], 
        " 30| ": [], 
        " 40| ": [], 
        " 50| ": [], 
        " 60| ": [], 
        " 70| ": [], 
        " 80| ": [], 
        " 90| ": [], 
        "100| ": []
    };

    for (category of categories.sort()) {
        const withdraws = category.get_withdraws();
        const percent = Math.round((withdraws / totalWithdraws) * 100);
        let tempPercent = 0;

        for (line in milestones) {
            if (percent >= tempPercent) {
                milestones[line].push(`o  `);
            } else {               
                milestones[line].push(`   `);
            };

            tempPercent += 10;
        };
    };
    
    const upperPartArray = [];
    const upperPartString = `Percentage spent by category\n${upperPartArray.reverse().join(``)}`;
    
    for (line in milestones) {
        upperPartArray.push(`${line}${milestones[line].join(``)}\n`); 
    };

    const lowerPart = [];
    const maxCategoryNameLength = Math.max(...(categories.map(obj => obj.name.length)));
    let letterIndex = 0;

    for (i = 0; i < maxCategoryNameLength; i ++ ) {
        const tempString = []; 

            for (category of categories) {
                if (typeof category.name[letterIndex] === 'undefined') {
                    tempString.push(`   `);
                } else {
                    tempString.push(`${category.name[letterIndex]}  `);
                };
            };
            
        letterIndex += 1;
        lowerPart.push(`\n     ${tempString.join(``)}`);
    };

    const lowerPartString = lowerPart.join(``);
    const outputChart = `${upperPartString}${middleLine}${lowerPartString}`;

    return outputChart;
};

module.exports = create_spend_chart;