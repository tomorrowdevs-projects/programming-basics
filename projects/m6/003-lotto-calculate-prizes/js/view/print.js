const fs = require('fs');
const Bill = require('../model/Bill');
const terminal = require('./terminal');
const checkWins = require('../controller/checkWin');

let totalInvested = 0; //Total cost of all coupons

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
const ticketTitle = ticketNumber => `\n                      TICKET ${ticketNumber}\n`;

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
        return res += `Ticket ${index+1} : ${ticket.numbers} numbers played on the ${ticket.city} wheel with ${typeAndMoney}\n`
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


//transforms the result of the winnings of all tickets into an array of 10 strings where each is the
//result of each wheel to be printed in the fake extraction table
// - allWin = array, all wins from all tables
// # return = array, examble ['','','','#2 1 Estratto','','','','','#1 1 Estratto #2 2 Estratto-1 Ambo','']
function allWinToString (allWin) {
    let result = [...Array(10)].fill('');

    allWin.forEach(wheel => {
       if (wheel.length !== 1) {
            let tmp = '';
            wheel.forEach(el => {
                if (Array.isArray(el)) {
                    result[el[2]] += `${(tmp !== el[2]) ? ' #' + wheel.at(-1) : ''}${(tmp === el[2]) ? '-' + el[0] + ' ' +el[1] : ' '+ el[0] + ' ' + el[1]}`
                    tmp = el[2];
                }
            })
        }
    })
    return result
};

//print the extraction table for each wheel
// @ use the centerWord(), separator() and allWinToString() to center the words in the cell, make the rows of the table and print the winnings
// - allWin = array of array with all winnings (Example: [ [ 'Ambo', 'Genova' ], [ 'Ambo', 'Napoli' ] ])
// # return = string
function printFakeExtraction (fakeExtractNumber, allWin) {
    let result = `\n            ${centerWord(26, 'FAKE EXTRACTIONS')} ${centerWord(50, 'TICKET WIN')}\n`;

    for (let i=0; i<Bill.cities.length-1; i++) {
        result += `+${separator(10)}+${separator(26)}+${separator(50)}+\n`;
        result += `| ${centerWord(8, Bill.cities[i])} | ${centerWord(24, fakeExtractNumber[i].join(' - '))} | ${centerWord(48, allWinToString(allWin)[i])} |\n`
    }
    result += `+${separator(10)}+${separator(26)}+${separator(50)}+\n`; 

    return result
};

//print all ticket, during the cycle it also calculates the total spent across all tickets
// # return = string of all ticket
function printTicket (tickets) {
    let ticketString = '';
    tickets.forEach(ticket => {
        ticketString += ticket.print();
        totalInvested += ticket.prices.reduce((acc, el) => acc + el);
    });
    return ticketString
};

//shows the amount won for each ticket also specifying which wheel and type of win , the total won among all and the total spent
// @ checkWins.moneyWon -> calculates the winnings of all tickets
function cashWin (allWin, tickets) {
    terminal.show('', 'tax');

    const totalMoneyWon = checkWins.moneyWon(allWin, tickets);
    let moneyWonString = '';

    totalMoneyWon.forEach((money, index) => {
        moneyWonString += `TICKET #${tickets[index].id} WIN € ${money[0]}${money[1] ? ' - Paid for : '+ money[1]+ 'on ' + money[2]: ''}\n`;
    });

    terminal.show('', moneyWonString);
    terminal.show('', `\nTotal winnings: € ${totalMoneyWon.reduce((acc, el) => acc + el[0], 0).toFixed(2)}`);
    terminal.show('', `Total invested: € ${totalInvested}`);
};

//create the txt file with the tickets
function createTicketFile (ticketString) {
    fs.writeFileSync('ticket.txt', ticketString + 'The total spent on all tickets is € ' + totalInvested);
    totalInvested = 0;
};

module.exports = {  printList,
                    printInline,
                    ticketTitle,
                    separator,
                    allWinToString,
                    showCompletedTicket,
                    printFakeExtraction,
                    centerWord,
                    cashWin,
                    createTicketFile,
                    printTicket,
 }