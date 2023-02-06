const fs = require('fs');
const terminal = require('./terminal');

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

//Generates a horizontal line for the table
// - lineWidth = number, how many characters the line should be long
// - symbol = string, the character to use to form the line
// # return = string
function separator (lineWidth, symbol) {
    return `${symbol.padStart(lineWidth, symbol)}`
};

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
    return `${separator(listCategory.length, '=')}\n${listCategory}\n${separator(listCategory.length, '=')}\n`
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

//print the extraction table for each wheel
// @ use the centerWord() and separator() to center the words in the cell and make the rows of the table
// - extraction = the extraction instances object
// # return = string
function printFakeExtraction (extraction) {
    let result = `\n${centerWord(39, `FAKE EXTRACTIONS n° ${extraction.numExtraction} del ${extraction.date}`)}\n`;

    for (const prop in extraction.getAll) {
        result += `+${separator(10, '=')}+${separator(26, '=')}+\n`;
        result += `| ${centerWord(8, prop)} | ${centerWord(24, extraction.getAll[prop].join(' - '))} |\n`
    }
    result += `+${separator(10, '=')}+${separator(26, '=')}+\n`; 

    return result
};

//print a ticket table with the numbers, wheels, type of bet, prices and if the ticket won
// @ use separator and centerWord function
// - ticket = single ticket instances object
// # return = string
function printTicket (ticket) {
    const title = `LOTTO GAME TICKET #${ticket.id} **€ ${ticket.total}**`;
    const wheel = ticket.city.join('  ');
    const types = ticket.type.join('  ');
    const prices = ticket.prices.reduce((string, el, index) => string + centerWord(ticket.type[index].length+2, `€${el}`), '');
    const num = ticket.generateNumber.join(' - ');
    const win = ticket.winning ? 'Winning:' + ticket.winning : 'Winning : NO !';
    const lineWidth = Math.max(title.length, wheel.length, types.length, num.length, win.length) + 2;

    return `+${separator(lineWidth,'=')}+\n` + [title, wheel, types, prices, num, win].map(el => {
        return `|${centerWord(lineWidth, el)}|\n|${separator(lineWidth,' ')}|`;

    }).join('\n') + '\n+' + separator(lineWidth,'=') + '+\n\n'
};

//print all ticket
// # return = string of all ticket
function printAllTicket (tickets) {
    let ticketString = '';
    tickets.forEach(ticket => ticketString += printTicket(ticket));
    return ticketString
};

//shows the total won among all and the total spent
function printCashWin (cashWin) {
    terminal.show('', 'tax');
    terminal.show('', `Total winnings: € ${cashWin[1]}\nTotal invested: € ${cashWin[0]}`);
};

//create the txt file with the tickets
function createTicketFile (ticketString, cashWin) {
    fs.writeFileSync('tickets.txt', ticketString + 'The total spent on all tickets is € ' + cashWin[0]);
};

//Show the tickets, the extraction, the amount winning to the console and save the file tickets.txt
// @ terminal.show show the result on the console
// @ printAllTicket print the ticket
// @ printFakeExtraction print the extraction
// @ printCashWin print all the amounts of any winnings and the total spent
// @ createTicketFile Create the txt file with the tickets
function showAll (tickets, extraction, cashWin) {

    terminal.show('clear', printFakeExtraction(extraction));

    const ticketString = printAllTicket(tickets);
    terminal.show('', ticketString);

    printCashWin(cashWin);

    createTicketFile(ticketString, cashWin);
};


module.exports = {  printList,
                    printInline,
                    ticketTitle,
                    separator,
                    showCompletedTicket,
                    printFakeExtraction,
                    centerWord,
                    printCashWin,
                    createTicketFile,
                    printAllTicket,
                    showAll
 }