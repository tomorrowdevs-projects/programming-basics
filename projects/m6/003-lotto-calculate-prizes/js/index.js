const Bill = require('./model/Bill');
const checkWins = require('./controller/checkWin');
const print = require('./view/print');
const terminal = require('./view/terminal');
const check = require('./view/check');
const menage = require('./view/menageChoice');

const tickets = [];   //array with all Bill instances created
howManyTicket();

//input request to define how many tickets want to play
// @ uses fllTickets function to which it passes the result of the choice
// @ utils.arrayNumber to generate an array with possible accepted inputs
function howManyTicket () {
    terminal.show('clear', 'howMany');
    const ticketNumber = check.inputAndCheck(check.arrayNumber(1,5), '> ');
    fillTickets(ticketNumber);
};

//prompts the user for all data to fill out all tickets and create instances and finally prints them
// @ usa chooseNumber function for the request of how many numbers to play each card, 
// @ choose requesting the type of bet and the wheels, 
// @ prices requesting the amount for each type of bet,
// @ show show the result
// - ticketNumber = the number of tickets to create
function fillTickets (ticketNumber) {
    for (let i=0; i < ticketNumber; i++) {

        terminal.show('clear', print.showCompletedTicket(tickets));
        terminal.show('', print.ticketTitle(i+1));

        const number = menage.chooseNumber();
        const wheel = menage.choose(number, 'whell', i+1);
        const type = menage.choose(number, 'type', i+1);
        const price = menage.prices(type, i+1);
        tickets.push(new Bill.Bill(number, wheel, type, price));
    };
    show();
};

//Check the winnings and show the tickets, the extraction and any winnings to the console
// @ terminal.show show the result on the console
// @ checkAllWin  check if the tickets are winners
// @ printTicket print the ticket
// @ printFakeExtraction print the extraction
// @ cashWin print all the amounts of any winnings
// @ createTicketFile Create the txt file with the tickets
// @ menage.repeat Ask if he wants to play again
function show () {
    const [ allWin, fakeExtractNumber ] = checkWins.checkAllWin(tickets);

    const ticketString = print.printTicket(tickets);
    terminal.show('clear', ticketString);

    terminal.show('', print.printFakeExtraction(fakeExtractNumber, allWin));

    print.cashWin(allWin, tickets);

    print.createTicketFile(ticketString);

    menage.repeat(howManyTicket, tickets);
};
