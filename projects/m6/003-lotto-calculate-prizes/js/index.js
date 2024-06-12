const print = require('./view/print');
const menage = require('./view/menageChoice');
const { cashWin, checkAllWin } = require('./controller/checkWin');
const { fakeExtraction } = require('./controller/utils');

game();

function game () {

    //Ask how many tickets to generate
    const numTickets = menage.howManyTicket();
     
    //Ask for all the data to generate it
    const tickets = menage.fillTickets(numTickets);

    //generate extraction
    const extraction = fakeExtraction();

    //check win
    const winnerTickets = checkAllWin(tickets, extraction);

    //cash winnings
    const cashWon = cashWin(winnerTickets, tickets);
 
    //Print the tickets, the extraction and cash winnigs
    print.showAll(tickets, extraction, cashWon);

    //Ask if he wants to repeat the game and starts over
    menage.repeat(game);
};


