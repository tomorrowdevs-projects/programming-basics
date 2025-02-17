function rollDice() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}

function calculatePercentage(counts, totalRolls) {
    let percentages = {};

    for (let result in counts) {
        percentages[result] = ((counts[result] / totalRolls) * 100).toFixed(2);
    }

    return percentages;
}

let theoreticalProbabilities = {
    2: 2.78,
    3: 5.56,
    4: 8.33,
    5: 11.11,
    6: 13.89,
    7: 16.67,
    8: 13.89,
    9: 11.11,
    10: 8.33,
    11: 5.56,
    12: 2.78
};

let resultCounts = {};
let numberOfRolls = 1000;

for (let i = 0; i < numberOfRolls; i++) {
    let result = rollDice();
    
    if (!resultCounts[result]) {
        resultCounts[result] = 1;
    } else {
        resultCounts[result]++;
    }
}

let resultPercentages = calculatePercentage(resultCounts, numberOfRolls);

console.log('Result | Obtained Percentage | Theoretical Percentage');
console.log('----------------------------------------------------');
for(let result = 2; result <= 12; result++) {
    let resultFormat = result.toString().padStart(2, '0');
    let obtainedPercentage = (resultPercentages[result] || '0.00').toString().padStart(5, '0');
    let theoreticalPercentage = theoreticalProbabilities[result].toFixed(2).toString().padStart(5, '0');
    console.log(`${resultFormat}         | ${obtainedPercentage}                 | ${theoreticalPercentage}`);
}