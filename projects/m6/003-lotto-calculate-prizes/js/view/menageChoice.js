const { Bill } = require('../model/Bill');
const print = require('./print');
const check = require('./check');
const terminal = require('./terminal');
const { genTickets } = require('../controller/utils');

///////////////////////////////////////////////////
//////////////// Menage choices ///////////////////
///////////////////////////////////////////////////

//input request to define how many tickets want to play
// @ check.arrayNumber to generate an array with possible accepted inputs
// # return = the number of tickets the user wants to generate 
function howManyTicket () {
    terminal.show('clear', 'howMany');
    return check.inputAndCheck(check.arrayNumber(1,5), '> ');
};

//ask for user input from 1 to 10
// # return how many numbers the user wants to play in the ticket
function chooseNumber () {
    terminal.show('', 'numbers');
    return Number(check.inputAndCheck(check.arrayNumber(1,10), '> ')); 
};

//manages the choice of wheels: if a city is chosen, it adds it to the selected array and deletes it from cities 
//so it will no longer be presented in the next cycle, if Tutte is chosen it returns the result directly, 
//if it chooses next and there is at least one wheel choice returns the result otherwise invokes itself recursively
// - numbersPlayed = how many numbers are played in the ticket
// - num = the sequential number of the ticket
// - selected = array with user choices
// - cities = array with all wheels
// # return = selected array
function menageWheel (numbersPlayed, num, selected = [], cities = [...Bill.cities]) {
    terminal.show('clear', print.ticketTitle(num), print.printInline(selected), 'wheels');
    [accepted, list] = print.printList(cities);
    accepted.push('n');
    terminal.show('', list, 'next');

    const input = check.inputAndCheck(accepted, '> ');

    switch (true) {
        case input > 0 && input < 11:   //in case choose a city
            selected.push(cities[input-1]);
            cities = cities.filter((_, index) => {
                if (index === input-1) return false;
                else if (index === 10) return false;
                else return true;
            })
            return menageWheel(numbersPlayed, num, selected, cities);

        case input === '11':    //in case choose Tutte
            return ['Tutte'];

        case input === 'n' && selected.length > 0:  //in case choose next
            return selected;

        default:
            return menageWheel(numbersPlayed, num, selected, cities);
    }
};

//manages the choice of the type of bet, if there is only one number played, it returns directly 'Estratto',
//if less than 5 numbers are played, it lets you choose only the types of bets you can play
// - numbersPlayed = how many numbers are played in the ticket
// - num = the sequential number of the ticket
// - selected = array with user choices
// - type = array with all type of bet
// # return = selected array or cb
function menageType (numbersPlayed, num, selected = [], type = [...Bill.types]) {
    terminal.show('clear', print.ticketTitle(num), print.printInline(selected));

    if (numbersPlayed === 1) return ['Estratto'];
    if (numbersPlayed > 1 && numbersPlayed < 5 && selected.length === 0) type.length = numbersPlayed;
    [accepted, list] = print.printList(type);
    accepted.push('n');
    terminal.show('', 'types', list, 'next');

    const input = check.inputAndCheck(accepted, '> ');

    if (input > 0 && input < 6) {
        selected.push(type[input-1]);
        type = type.filter((_, index) => index !== input-1);
        return menageType(numbersPlayed, num, selected, type);

    } else if (input === 'n' && selected.length === 0) return menageType(numbersPlayed, num, selected, type);

    else return Bill.types.map(el => {if (selected.includes(el)) return el}).filter(el => el !== undefined)
};

//shows the menu to enter how much you want to play for each type of bet chosen
// - type = the types of bet chosen by the user
// - num = the sequential number of the ticket
// # return = an array with all amounts win
function prices (type, num) {
    terminal.show('clear', print.ticketTitle(num), print.printInline(type), 'amount');
    
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

//prompts the user for all data to fill out all tickets
// @ chooseNumber - for the request of how many numbers to play each card, 
// @ menageWheel - requesting the wheels, 
// @ menageType - requesting the type of bet, 
// @ prices - requesting the amount for each type of bet,
// @ genticket - controller - generates all ticket instances by providing it with data collected from the user
// - ticketNumber = the number of tickets to create
// # return = an array with all instances of generated tickets
function fillTickets (ticketNumber) {
    const tickets = [];   //array with all Bill instances created

    for (let i=0; i < ticketNumber; i++) {

        terminal.show('clear', print.showCompletedTicket(tickets), print.ticketTitle(i+1));

        const number = module.exports.chooseNumber();
        const wheel = module.exports.menageWheel(number, i+1);
        const type = module.exports.menageType(number, i+1);
        const price = module.exports.prices(type, i+1);

        tickets.push([number, wheel, type, price]);
    };
    return genTickets(tickets)
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
                    prices,
                    chooseNumber,
                    repeat,
                    howManyTicket,
                    fillTickets
                }