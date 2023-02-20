const { Bill } = require('../model/Bill');

///////////////////////////////////////////////////
////////////////// Check the win //////////////////
///////////////////////////////////////////////////

//calculates all possible combinations for each type of play
// - numberWin = how many winning numbers are in the ticket
// - type = the type of play e.g.: 2 for Ambo, 3 for Terno, etc..
// # return = the number of possible combinations
function combinations (numberWin, type) {
    function productRange(a,b) {
        let [prd, i] = [a, a];
       
        while (i++ < b) {
          prd *= i;
        }
        return prd;
    }
      
    if (numberWin == type || type == 0) return 1;
    else {
        type = (type < numberWin-type) ? numberWin-type : type;
        return productRange(type+1, numberWin) / productRange(1, numberWin-type);
    }
};

//check if a ticket has won compared to fake extraction
// @ combination - all possible combinations for each type of play, es.:in a quaterna there are 4 terni, 6 ambi and 4 estratti
// - ticket = object, single instances of ticket
// - extraction = object, single instances of extraction
// # return = array of array, if there are wins, it returns an array of 4 elements:
// the type, the wheel, the ticket id and the winning number, example: [ [ 2, 'Estratto', 'Bari', 105, [ 49, 45 ] ], [ 1, 'Ambo', 'Bari', 105, [ 49, 45 ] ], ]
function checkWin (ticket, extraction) {
    const result = [];
    
    const indexType = ticket.type.map(el => Bill.types.indexOf(el));

    const check = wheel => {
        const numberWin = ticket.generateNumber.filter(num => extraction[wheel].includes(num));
        indexType.forEach(el => {
            if (numberWin.length >= el+1) result.push([combinations(numberWin.length, el+1), Bill.types[el], wheel, ticket.id, numberWin])
        })
    };

    if (ticket.city[0] !== 'Tutte') ticket.city.forEach(wheel => check(wheel))
    else for (const prop in extraction) check(prop)

    if(result.every(el => el[1] === 'Estratto') && result.length > 0) {  //if they are all estratti, the one with the most winning numbers returns
        const index = result.reduce((acc, cur, index) => cur[0] > result[acc][0] ? index : acc, 0);
        return [ result[index] ]
    } else return result
};

//check the winnings for each ticket played
// @ checkWin -> check the winnings for each single ticket
// - tickets = array, All ticket instance object
// - extraction = the extraction instances object
// # return = result for all tickets
function checkAllWin (tickets, extraction) {
    const result = [];

    tickets.forEach(ticket => {
        result.push( checkWin(ticket, extraction.getAll) );
    })

    return result;
};

//Check the winnings against all the matches obtained and calculate the winning ones and the total amount won
// @ combination to calculate the dividend and establish the amount won
// - winnerTicket = array of all matches between tickets and fake extractions
// - tickets = array of all ticket instances
// # return = an array of array with all the total win amounts for each ticket,the winning combination, the wheel, the ticket id and the winning numbers
// if there are no wins the result will be an array with 0
//eg.: [ [ 4.82, '2 Estratto 1 Ambo ', 'Venezia', 103, [ 78, 24 ] ], [ 0.62, '1 Estratto ', 'Cagliari', 104, [ 68 ] ], [0] ]

function moneyWon (winnerTickets, tickets) {
    const moltiplier = [11.23, 250, 4500, 120000, 6000000];
    const result = [];

    winnerTickets.forEach((ticket, index) => {
        let totalTicket = 0;
        const numberPlayed = tickets[index].numbers;
        const numberWheel = tickets[index].city[0] === 'Tutte' ? 10 : tickets[index].city.length;
        const typePrice = tickets[index].prices.reverse();
        let win = [];

        for (const type of tickets[index].type.reverse()) {
            for (const matched of ticket) {
                if (matched[1] === type) { 
                    ticket.forEach(elem => { if (elem[2] === matched[2]) win.push(elem) });
                    break;
                }
            };
            if (win.length !== 0) break 
        };

        let stringWin = '';
        win.forEach(wheelWon => {   //win is equal to the filtered checkWin return of non-paying melds
            stringWin += `${wheelWon[0]} ${wheelWon[1]} `;
            const priceValue = typePrice[tickets[index].type.indexOf(wheelWon[1])];
            const indexType = Bill.types.indexOf(wheelWon[1]);
            const divider = combinations(numberPlayed, indexType+1);
            totalTicket += Math.floor(wheelWon[0] * moltiplier[indexType] * priceValue / divider *100) /100;
        });

        const price = totalTicket/numberWheel;
        
        if(stringWin === '') result.push([0])
        else result.push([ Number((price - price * 8 / 100).toFixed(2)), stringWin, win[0][2], win[0][3], win[0][4]]);
    });

    return result;
};

//calculates the amount won between all tickets and the total spent
//insertion of any winnings in the ticket instances
// @ moneyWon -> calculates the winnings of all tickets
// - winnerTicket = array of all matches between tickets and fake extractions
// - tickets = array of all ticket instances
// # return = the total invested on all tickets and the total win
function cashWin (winnerTickets, tickets) {

    let totalInvested = 0;
    let totalWon = 0;
    
    moneyWon(winnerTickets, tickets).forEach((money, index) => {
        totalInvested += tickets[index].total;
        totalWon += money[0];
        tickets[index].winning = money;
    });

    return [ totalInvested, totalWon.toFixed(2) ]
};

module.exports = {  combinations,
                    checkWin,
                    checkAllWin,
                    moneyWon,
                    cashWin
                 }