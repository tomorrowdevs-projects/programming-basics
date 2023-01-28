///////////////////////////////////////////////////
//////////////// Bill utilities ///////////////////
///////////////////////////////////////////////////

//private function that checks if the input is an array and if it contains at least one element
// # return = true or an exception is raised
function checkInputArray (input) {
    if (Array.isArray(input) && input.length > 0) return true;
    else throw new Error (`Input "${input}" isn't an array or it is empty, Bill instance not created`);
};

//private function compare 2 arrays
// - arr1, arr2 = the 2 arrays to compare
// # return = true or false
function compareArray (arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};

module.exports = { checkInputArray, compareArray }