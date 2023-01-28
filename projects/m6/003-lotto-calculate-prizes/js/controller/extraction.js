const Bill = require('../model/Bill');

///////////////////////////////////////////////////
//////////////// Fake Extraction //////////////////
///////////////////////////////////////////////////

//generate random numbers between 1 and 90 that are never the same
// - number = number, how many numbers you want to generate
// # return = an array of numbers
function genNumber (howMany) {
    const result = [];

    while (result.length < howMany) {
        const rndNum = Math.floor(Math.random() * 90) + 1;
        if (!result.includes(rndNum)) result.push(rndNum)
    };
    return result;
};

//creates an array of 10 arrays with all numbers drawn for each wheel
// # return = array of array
function numberExtraction () {
    return [...Array(Bill.cities.length - 1)].map(_ => genNumber(5))
};

module.exports = {  genNumber,
                    numberExtraction,
                 }