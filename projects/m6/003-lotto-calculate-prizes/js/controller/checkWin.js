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
// - wheelNumber = array, the played numbers of the ticket
// - wheels = array, the played wheels of the ticket
// - type = array, the type of play of the ticket
// - fakeExtractNumber = array, number of extractions
// # return = array of array, if there are wins, it returns an array of 2 elements:
// the type and the index of the wheel, example: [ ['Estratto', 4], ['Ambo', 6] ]
function checkWin (wheelNumber, wheels, type, fakeExtractNumber) {
    let result = [];
    const indexType = type.map(el => Bill.types.indexOf(el));

    if (wheels[0] !== 'Tutte') {
        const indexWheel = wheels.map(el => Bill.cities.indexOf(el));

        indexWheel.forEach(el => {
            const numberWin = wheelNumber
                                .map(num => fakeExtractNumber[el].includes(num))
                                .reduce((acc, elem) => (elem) ? ++acc : acc, 0);

            indexType.forEach(ele => {
                if (numberWin >= ele+1)
                    result.push([combinations(numberWin, ele+1), Bill.types[ele], el])
            })
        })

    } else {
        fakeExtractNumber.forEach((wheel, indx) => {
            const numberWin = wheelNumber
                                .map(num => wheel.includes(num))
                                .reduce((acc, elem) => (elem) ? ++acc : acc, 0);

            indexType.forEach(ele => {
                if (numberWin >= ele+1) result.push([combinations(numberWin, ele+1), Bill.types[ele], indx])
            })
        })
    };

    return result
};

//check the winnings for each ticket played
// @ extraction.numberExtraction -> Generate draw numbers to match tickets
// @ checkWin -> check the winnings for each single ticket
// # return = result is the result of the match and fakeExtractNumber are the numbers of the extraction fake
function checkAllWin (tickets, extraction) {
    const result = [];
    const fakeExtractNumber = [];
    
    for (const prop in extraction.getAll) {
        fakeExtractNumber.push(extraction.getAll[prop])
    }

    tickets.forEach(ticket => {
        result.push(checkWin(ticket.generateNumber, ticket.city, ticket.type, fakeExtractNumber).concat(ticket.id));
    })
    return result;
};

//Calculates the total won for each ticket played
// @ combination to calculate the dividend and establish the amount won
// - allWin = array of all matches between tickets and fake extractions
// - tickets = array of all ticket instances
// # return = an array of array with all the total win amounts for each ticket
function moneyWon (allWin, tickets) {
    const moltiplier = [11.23, 250, 4500, 120000, 6000000];
    const result = [];

    allWin.forEach((ticket, index) => {
        let totalTicket = 0;
        const numberPlayed = tickets[index].numbers;
        const numberWheel = tickets[index].city[0] === 'Tutte' ? 10 : tickets[index].city.length;
        const typePrice = tickets[index].prices.reverse();
        let win =[];

        for (const type of tickets[index].type.reverse()) {
            for (const matched of ticket) {
                if (matched[1] === type) { 
                    ticket.forEach(elem => { if (elem[2] === matched[2]) win.push(elem)});
                    break;
                }
            };
            if (win.length !== 0) break 
        };

        let stringWin = '';
        win.forEach(wheelWon => {
            stringWin += `${wheelWon[0]} ${wheelWon[1]} `;
            const priceValue = typePrice[tickets[index].type.indexOf(wheelWon[1])];
            const indexType = Bill.types.indexOf(wheelWon[1]);
            const divider = combinations(numberPlayed, indexType+1);
            totalTicket += Number((Math.floor(wheelWon[0] * moltiplier[indexType] * priceValue / divider *100) /100).toFixed(2));
        });
        const price = totalTicket/numberWheel;
        const cityWin = stringWin === '' ? '' : Bill.cities[win[0][2]];
        result.push([ Number((price - price * 8 / 100).toFixed(2)), stringWin, cityWin ]);
    });

    return result;
};

//shows the amount won for each ticket also specifying which wheel and type of win , the total won among all and the total spent
// @ checkWins.moneyWon -> calculates the winnings of all tickets
function cashWin (allWin, tickets) {

    const totalMoneyWon = moneyWon(allWin, tickets);

    let moneyWonString = '';
    let totalInvested = 0;
    let totalWon = 0;

    totalMoneyWon.forEach((money, index) => {
        moneyWonString += `TICKET #${tickets[index].id} WIN € ${money[0]}${money[1] ? ' - Paid for : ' + money[1] + 'on ' + money[2]: ''}\n`;
        totalInvested += tickets[index].total;
        totalWon += money[0];
        tickets[index].winning = money;
    });

    return [ moneyWonString, totalInvested, totalWon.toFixed(2) ]
};

module.exports = {  combinations,
                    checkWin,
                    checkAllWin,
                    moneyWon,
                    cashWin
                 }