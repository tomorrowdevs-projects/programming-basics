

function create_spend_chart(...categories) {

// Upper and middle part of the chart.

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
    
    for (line in milestones) {
        upperPartArray.push(`${line}${milestones[line].join(``)}\n`); 
    };

    const upperPartString = `Percentage spent by category\n${upperPartArray.reverse().join(``)}`;

// Lower part of the chart.

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