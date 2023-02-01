const print = require('./view/print');
const menage = require('./view/menageChoice');

game();

function game () {

    //Ask how many tickets to generate
    const numTickets = menage.howManyTicket();

    //Ask for all the data to generate it
    const tickets = menage.fillTickets(numTickets);
    
    //Print the tickets and the extraction
    print.show(tickets);

    //Ask if he wants to repeat the game and starts over
    menage.repeat(game);
};


