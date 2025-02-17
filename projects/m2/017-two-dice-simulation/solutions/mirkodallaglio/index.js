//simulates the roll of two 6-sided dice, output a number
function rollsTwoDice (){
    return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
};

//simulates the rolling N times of two 6-sided dice, input n times, output array with all result
function rollsALotOfDice (times){
    const result = [];
    for(i=0; i < times; i++) result.push(rollsTwoDice());
    return result;
};
const resultRolls = rollsALotOfDice(1000);

//I create an object with all the results and how many times they came out
const totalOccurs = resultRolls.reduce((result, val) => {
    result[val] ? ++result[val] : result[val] = 1;          //if the value exists then I increase it by 1, otherwise I create it and set it to 1
    return result; 
}, {});

//I cycle the object, calculate the percentage and probability for each number
for(const prop in totalOccurs){
    totalOccurs[prop] /= 10;
    let probability = (prop <= 7) ? (prop-1)/36 * 100 : (13-prop)/36 *100;
    console.log(`${prop}: ${totalOccurs[prop].toFixed(1)}%  - probability: ${probability.toFixed(2)}`);
};