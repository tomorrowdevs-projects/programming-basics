///////////////////////////////////////////////////
//////////////// Class utilities //////////////////
///////////////////////////////////////////////////

//checks if the input is an array and if it contains at least one element
// # return = true or an exception is raised
function checkInputArray (input) {
    if (Array.isArray(input) && input.length > 0) return true
    else return false
};

//compare 2 arrays
// - arr1, arr2 = the 2 arrays to compare
// # return = true or false
function compareArray (arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};

//private function to generate random numbers between 1 and 90 that are never the same
// - num = number, how many numbers you want to generate
// # return = an array of numbers
function genNumber (num) {
    const result = [];

    while (result.length < num) {
        const rndNum = Math.floor(Math.random() * 90) + 1;
        if (!result.includes(rndNum)) result.push(rndNum)
    };
    return result;
};

module.exports = { checkInputArray, compareArray, genNumber }