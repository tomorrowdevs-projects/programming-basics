const print = require('./view/print');
const menage = require('./view/menageChoice');
const { Extraction } = require('./model/extraction');
const { cashWin, checkAllWin } = require('./controller/checkWin');
const { Bill } = require('./model/Bill');

game();

function game () {

    //Ask how many tickets to generate
    const numTickets = menage.howManyTicket();
     
    //Ask for all the data to generate it
    const tickets = menage.fillTickets(numTickets);

    //generate extraction
    const fakeExtraction = new Extraction(Bill.cities.slice(0, -1), 5);

    //check win
    const winnerTickets = checkAllWin(tickets, fakeExtraction);

    //cash winnings
    const cashWon = cashWin(winnerTickets, tickets);
 
    //Print the tickets, the extraction and cash winnigs
    print.showAll(tickets, fakeExtraction, cashWon);

    //Ask if he wants to repeat the game and starts over
    menage.repeat(game);
};


