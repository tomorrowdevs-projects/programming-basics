const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');
const Bill = require('./lotto-game/model/Bill');
const utils = require('./lotto-game/controller/utils');
const menage = require('./lotto-game/controller/menageChoice');
const print = require('./lotto-game/print/print');

const tickets = [];       //array with all Bill instances created
howManyTicket();

//recursively requests input using a prompt until a correct one is entered
// @ use the utils.check() function to verify the input
// - possibleInput = an array with all inputs accepted
// - inputString = string that is displayed in the prompt
// # return = correctly input
function inputAndCheck (possibleInput, inputString) {
    const input = print.check(possibleInput, prompt(inputString));

    if (input || input === 0) return input;
    else {
        console.log('Input error, try again !\n');
        return inputAndCheck(possibleInput, inputString)
    }
};

//input request to define how many tickets want to play
// @ uses fllTickets function to which it passes the result of the choice
// @ utils.arrayNumber to generate an array with possible accepted inputs
function howManyTicket () {
    console.clear();
    console.log('\n                      Lotto Game!\n\nHow many tickets do you want to generate? ( from 1 to 5 )\n');
    const ticketNumber = inputAndCheck(utils.arrayNumber(1,5), '> ');
    fillTickets(ticketNumber);
};

//prompts the user for all data to fill out all tickets and create instances and finally prints them
// @ usa chooseNumber function for the request of how many numbers to play each card, 
// @ choosefor requesting the type of bet and the wheels, 
// @ utils.showCompletedTicket to show tickets that have already been created
// @ utils.ticketTitle to generate the numbered title
// @ utils.arrayNumber to generate an array with possible accepted inputs
// - ticketNumber = the number of tickets to create
function fillTickets (ticketNumber) {
    for (let i=0; i < ticketNumber; i++) {
        console.clear();
        console.log(print.showCompletedTicket(tickets));
        console.log(print.ticketTitle(i+1));
        const number = chooseNumber();
        const wheel = choose(number, 'whell', i+1);
        const type = choose(number, 'type', i+1);
        const price = prices(type, i+1);
        tickets.push(new Bill.Bill(number, wheel, type, price))
    };

    console.clear();
    let allWin = [];
    let totalInvested = 0;
    let ticketString = '';
    tickets.forEach((ticket, index) => {
        ticketString += ticket.print(index+1);
        allWin.push(utils.checkWin(ticket.generateNumber, ticket.city, ticket.type).concat(index+1));
        totalInvested += ticket.prices.reduce((acc, el) => acc + el);
    });
    console.log(ticketString);
    console.log(print.printFakeExtraction(allWin));
    console.log('Total winnings already detaxed by 8%:\n');
    const totalMoneyWon = utils.moneyWon(allWin, tickets);

    totalMoneyWon.forEach((money, index) => {
        console.log(`TICKET #${index+1} WIN € ${money[0]}${money[1] ? ' - Paid for : '+ money[1]+ 'on ' + money[2]: ''}`);
    });
    console.log(`\nTotal winnings: € ${totalMoneyWon.reduce((acc, el) => acc + el[0], 0).toFixed(2)}`);
    const invested = `Total invested: € ${totalInvested}`;
    console.log(invested);
    fs.writeFileSync('ticket.txt', ticketString + invested);
};

//ask for user input from 1 to 10
// # return number
function chooseNumber () {
    console.log('How many numbers do you want to play? ( form 1 to 10 )\n');
    return Number(inputAndCheck(utils.arrayNumber(1,10), '> ')); 
};

//manages the choice of wheels or types of bet
// @ use utils.printInline to print the user choices, utils.printList to print the possible choices that the user can make
// @ utils.ticketTitle to generate the numbered title, utils.inputAndCheck for prompting and input verification
// @ utils.menageWheel to manage conditions on wheel choice
// @ utils.menageType to manage conditions on type of bet choice
// - numbersPlayed = number, the amount of numbers played in this ticket
// - wheelOrType = string, 'wheel'for choosing the wheel or 'type' for choosing the type
// - num = number, the ticket number to be printed in the title
// - selected = array of user choices
// - cities = array with all wheels available
// - type = array with all type available
// # return = array selected
function choose (numbersPlayed, whellOrType, num, selected = [], cities = [...Bill.cities], type = [...Bill.types]) {
    console.clear();
    console.log(print.ticketTitle(num));
    console.log(print.printInline(selected));
    let [accepted, list] = [[],''];

    if (whellOrType === 'whell') {
        console.log('Which wheel do you want to play?\n');
        [accepted, list] = print.printList(cities);
        
    } else if (whellOrType === 'type') {
        if (numbersPlayed === 1) return ['Estratto'];
        console.log('What type of bet do you want to place?\n');
        if (numbersPlayed > 1 && numbersPlayed < 5 && selected.length === 0) type.length = numbersPlayed;
        [accepted, list] = print.printList(type);
    };

    accepted.push('n');
    console.log(list, '\nn) Next\n\n');
    const input = inputAndCheck(accepted, '> ');

    if (whellOrType === 'whell') return menage.menageWheel(input, numbersPlayed, whellOrType, num, selected, cities, choose);
    else if (whellOrType === 'type') return menage.menageType(input, numbersPlayed, whellOrType, num, selected, cities, type, choose);
};

//
function prices (type, num) {
    console.clear();
    console.log(print.ticketTitle(num));
    console.log(print.printInline(type));
    console.log('Indicates the amount for each type of bet\n');
    const result = [];

    type.forEach(el => {
        const input = inputAndCheck(utils.arrayNumber(1,200), el + ' € ');
        result.push(Number(input))
    })
    return result;
}

