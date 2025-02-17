const prompt = require('prompt-sync')({sigint: true});
const terminal = require('./terminal');

///////////////////////////////////////////////////
////////////////// Check Input ////////////////////
///////////////////////////////////////////////////

//check if an element is included in an array
// - possibleInput = an array with all inputs accepted
// - input = string number, the item to check
// # return = input if element is in array or false
function check (possibleInput, input) {
    if (possibleInput.includes(input)) return input;
    else return false
};

//recursively requests input using a prompt until a correct one is entered
// @ use the utils.check() function to verify the input
// - possibleInput = an array with all inputs accepted
// - inputString = string that is displayed in the prompt
// # return = correctly input
function inputAndCheck (possibleInput, inputString) {
    const input = check(possibleInput, module.exports.prompt(inputString));

    if (input || input === 0) return input;
    else {
        terminal.show('', 'error');
        return inputAndCheck(possibleInput, inputString)
    }
};

//creates an array consisting of numbers from min to max in string format
// - min, max = number, from => to
// # return = array
function arrayNumber (min, max) {
    return [...Array(max-min+1)].map(_ => `${min++}`)
};

module.exports = {  check, inputAndCheck, arrayNumber, prompt }