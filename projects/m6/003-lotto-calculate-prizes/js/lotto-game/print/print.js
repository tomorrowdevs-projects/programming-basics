const Bill = require('../model/Bill');
const utils = require('../controller/utils');

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

///////////////////////////////////////////////////
///////////////////// Print ///////////////////////
///////////////////////////////////////////////////

//prints a numbered vertical list from an array to the console
// - arr = The array to print
// # return = an array with all the numbers in the list
function printList (arr) {
    const num = [];
    let string = '';
    
    arr.forEach((el, index) => {
        string += `${index+1}) ${el}\n`;
        num.push(''+ (index+1));
    });
    return [num, string]
};

//generates a line of the desired length formed by -
// - num = number, the length of the line
// # return = string
const separator = (num) => ''.padStart(num, '=');

//generates the title for tickets with numbering
// - ticketNumber = number, the number to show
// # return = string
const ticketTitle = ticketNumber => `\n                      TICKET #${ticketNumber}\n`;

//generates a string with an inline list from an array ,
//adding a separator between each element and a line above and below it
// - arr = the array to print
// # return = string
function printInline (arr) {
    const listCategory = arr.join(' <> ');
    return `${separator(listCategory.length)}\n${listCategory}\n${separator(listCategory.length)}\n`
};

//creates a formatted string with all tickets created
// - ticketArr = array with all Bill instances
// # return = string
function showCompletedTicket (ticketArr) {
    return ticketArr.reduce((res, ticket, index) => {
        const typeAndMoney = ticket.type.map((el, index) => el + ' € ' + ticket.prices[index]).join(' ,')
        return res += `Ticket #${index+1} : ${ticket.numbers} numbers played on the ${ticket.city} wheel with ${typeAndMoney}\n`
    }, '');
};

//Center a word in a space by adding spaces before and after
// - lineWidth = number, how many characters is the space
// - word = string, the word to write
// # return = string
function centerWord (lineWidth, word) {
    const wordLength = word.length;
    const space = (lineWidth - wordLength) /2;
    return word.padStart(wordLength+space, ' ').padEnd(lineWidth, ' ');
};

//print the extraction table for each wheel
// @ use the centerWord(), separator() and allWinToString() to center the words in the cell, make the rows of the table and print the winnings
// - allWin = array of array with all winnings (Example: [ [ 'Ambo', 'Genova' ], [ 'Ambo', 'Napoli' ] ])
// # return = string
function printFakeExtraction (allWin) {
    let result = `\n            ${centerWord(26, 'FAKE EXTRACTIONS')} ${centerWord(50, 'TICKET WIN')}\n`;

    for (let i=0; i<Bill.cities.length-1; i++) {
        result += `+${separator(10)}+${separator(26)}+${separator(50)}+\n`;
        result += `| ${centerWord(8, Bill.cities[i])} | ${centerWord(24, utils.fakeExtractNumber[i].join(' - '))} | ${centerWord(48, utils.allWinToString(allWin)[i])} |\n`
    }
    result += `+${separator(10)}+${separator(26)}+${separator(50)}+\n`;

    return result
};

module.exports = {  check,
                    printList,
                    printInline,
                    ticketTitle,
                    separator,
                    showCompletedTicket,
                    printFakeExtraction,
                    centerWord
 }