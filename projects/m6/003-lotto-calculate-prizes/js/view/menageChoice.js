const { Bill } = require('../model/Bill');
const print = require('./print');
const check = require('./check');
const terminal = require('./terminal');
const { genTickets } = require('../controller/utils');

///////////////////////////////////////////////////
//////////////// Menage choices ///////////////////
///////////////////////////////////////////////////

//input request to define how many tickets want to play
// @ uses fllTickets function to which it passes the result of the choice
// @ utils.arrayNumber to generate an array with possible accepted inputs
function howManyTicket () {
    terminal.show('clear', 'howMany');
    return check.inputAndCheck(check.arrayNumber(1,5), '> ');
};

//prompts the user for all data to fill out all tickets and create instances and finally prints them
// @ usa chooseNumber function for the request of how many numbers to play each card, 
// @ choose requesting the type of bet and the wheels, 
// @ prices requesting the amount for each type of bet,
// @ show show the result
// - ticketNumber = the number of tickets to create
function fillTickets (ticketNumber) {
    const tickets = [];   //array with all Bill instances created

    for (let i=0; i < ticketNumber; i++) {

        terminal.show('clear', print.showCompletedTicket(tickets));
        terminal.show('', print.ticketTitle(i+1));

        const number = chooseNumber();
        const wheel = choose(number, 'whell', i+1);
        const type = choose(number, 'type', i+1);
        const price = prices(type, i+1);
        tickets.push([number, wheel, type, price]);
    };
    return genTickets(tickets)
};

//ask for user input from 1 to 10
// # return number
function chooseNumber () {
    terminal.show('', 'numbers');
    return Number(check.inputAndCheck(check.arrayNumber(1,10), '> ')); 
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
    terminal.show('clear', print.ticketTitle(num));
    terminal.show('', print.printInline(selected));

    let [accepted, list] = [[],''];

    if (whellOrType === 'whell') {
        terminal.show('', 'wheels');
        [accepted, list] = print.printList(cities);
        
    } else if (whellOrType === 'type') {
        if (numbersPlayed === 1) return ['Estratto'];
        terminal.show('', 'types');
        if (numbersPlayed > 1 && numbersPlayed < 5 && selected.length === 0) type.length = numbersPlayed;
        [accepted, list] = print.printList(type);
    };

    accepted.push('n');
    terminal.show('', list);
    terminal.show('', 'next');
    const input = check.inputAndCheck(accepted, '> ');

    if (whellOrType === 'whell') return menageWheel(input, numbersPlayed, whellOrType, num, selected, cities, choose);
    else if (whellOrType === 'type') return menageType(input, numbersPlayed, whellOrType, num, selected, cities, type, choose);
};

//manages the choice of wheels: if a city is chosen, it adds it to the selected array and deletes it from cities 
//so it will no longer be presented in the next cycle, if Tutte is chosen, it returns the result directly, 
//if it chooses next and there is at least one wheel choice returns the result otherwise invokes the callback 
// - input = string number, user input
// - numbersPlayed, wheelOrType, num = parameters passed to the callback
// - selected = array with user choices
// - cities = array with all wheels
// - cb = function that is called to carry out the recursion in case of choice of several wheels
// # return = selected array or cb
function menageWheel (input, numbersPlayed, whellOrType, num, selected, cities, cb) {
    switch (true) {
        case input > 0 && input < 11:   //in case choose a city
            selected.push(cities[input-1]);
            cities = cities.filter((_, index) => {
                if (index === input-1) return false;
                else if (index === 10) return false;
                else return true;
            })
            return cb(numbersPlayed, whellOrType, num, selected, cities);

        case input === '11':    //in case choose Tutte
            selected.push(cities[input-1]);
            return selected;

        case input === 'n' && selected.length > 0:  //in case choose next
            return selected;

        default:
            return cb(numbersPlayed, whellOrType, num, selected, cities);
    }
};

//manages the choice of the type of bet: 
// - input = string number, user input
// - numbersPlayed, wheelOrType, num, cities = parameters passed to the callback
// - selected = array with user choices
// - type = array with all type of bet
// - cb = function that is called to carry out the recursion in case of choice of several wheels
// # return = selected array or cb
function menageType (input, numbersPlayed, whellOrType, num, selected, cities, type, cb) {
    if (input > 0 && input < 6) {
        selected.push(type[input-1]);
        type = type.filter((_, index) => index !== input-1);
        return cb(numbersPlayed, whellOrType, num, selected, cities, type);

    } else if (input === 'n' && selected.length === 0) return cb(numbersPlayed, whellOrType, num, selected, cities, type);

    else return Bill.types.map(el => {if (selected.includes(el)) return el}).filter(el => el !== undefined)
};

//shows the menu to enter how much you want to play for each type of bet chosen
// # return = an array with all amounts
function prices (type, num) {
    terminal.show('clear', print.ticketTitle(num));
    terminal.show('', print.printInline(type));
    terminal.show('', 'amount');
    
    const result = [];
    let total = 0;

    type.forEach((el, index) => {
        const exclude = (type.length - (index + 1)) * 0.5; //it excludes amounts higher than the maximum amount that can be spent, leaving a minimum of 0.5 to play for the other types of bet
        let min = type.length === 1 ? 0.5 : 0; //if you play only one type of bet the minimum bet is €1
        const max = (200 - total - min - exclude) * 2;  //calculates the total elements to create in the array given to inputAndCheck to generate all the values allowed for input

        const input = Number(check.inputAndCheck([...Array(max)].map(_ => `${min+= 0.5}`), `max €${type.length === 1 ? max/2+0.5 : max/2} - ${el} € `));
        total += input;
        result.push(input)
    });

    return result;
};

//when the game is finished and the tickets and extractions are displayed, 
//it asks the user if he wants to start playing again by restarting the cycle, or he exits the program
function repeat (cb) {
    terminal.show('', 'repeat');
    const input = check.inputAndCheck(['y', 'n'], 'y or n > ');

    if(input === 'y') return cb()
    else { terminal.show('clear'); return }
};

module.exports = {  menageWheel,
                    menageType,
                    choose,
                    prices,
                    chooseNumber,
                    repeat,
                    howManyTicket,
                    fillTickets
                }