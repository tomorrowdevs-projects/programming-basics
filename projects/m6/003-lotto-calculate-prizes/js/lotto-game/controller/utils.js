const Bill = require('../model/Bill');

//array with 10 arrays, each with 5 random numbers for fake extraction
const fakeExtractNumber = numberExtraction();

//creates an array consisting of numbers from min to max in string format
// - min, max = number, from => to
// # return = array
function arrayNumber (min, max) {
    return [...Array(max-min+1)].map(_ => `${min++}`)
};

///////////////////////////////////////////////////
//////////////// Fake Extraction //////////////////
///////////////////////////////////////////////////

//generate random numbers between 1 and 90 that are never the same
// - number = number, how many numbers you want to generate
// # return = an array of numbers
function genNumber () {
    const result = [];

    while (result.length < 5) {
        const rndNum = Math.floor(Math.random() * 90) + 1;
        if (!result.includes(rndNum)) result.push(rndNum)
    };
    return result;
};

//creates an array of 10 arrays with all numbers drawn for each wheel
// # return = array of array
function numberExtraction () {
    return [...Array(Bill.cities.length - 1)].map(_ => genNumber(5))
};

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
// - wheelNumber = array, the played numbers of the ticket
// - wheels = array, the played reels of the ticket
// - type = array, the type of play of the ticket
// # return = array of array, if there are wins, it returns an array of 2 elements:
// the type and the index of the wheel, example: [ ['Estratto', 4], ['Ambo', 6] ]
function checkWin (wheelNumber, wheels, type, extractions = fakeExtractNumber) {
    let result = [];
    const indexType = type.map(el => Bill.types.indexOf(el));

    if (wheels[0] !== 'Tutte') {
        const indexWheel = wheels.map(el => Bill.cities.indexOf(el));

        indexWheel.forEach(el => {
            const numberWin = wheelNumber
                                .map(num => extractions[el].includes(num))
                                .reduce((acc, elem) => (elem) ? ++acc : acc, 0);

            indexType.forEach(ele => {
                if (numberWin >= ele+1)
                    result.push([combinations(numberWin, ele+1), Bill.types[ele], el])
            })
        })

    } else {
        extractions.forEach((wheel, indx) => {
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

//transforms the result of the winnings of all tickets into an array of 10 strings where each is the
//result of each wheel to be printed in the fake extraction table
// - allWin = array, all wins from all tables
// # return = array, examble ['','','','#2 1 Estratto','','','','','#1 1 Estratto #2 2 Estratto-1 Ambo','']
function allWinToString (allWin) {
    let result = [...Array(10)].fill('');

    allWin.forEach(wheel => {
       if (wheel.length !== 1) {
            let tmp = '';
            wheel.forEach(el => {
                if (Array.isArray(el)) {
                    result[el[2]] += `${(tmp !== el[2]) ? ' #' + wheel.at(-1) : ''}${(tmp === el[2]) ? '-' + el[0] + ' ' +el[1] : ' '+ el[0] + ' ' + el[1]}`
                    tmp = el[2];
                }
            })
        }
    })
    return result
};

//Calculates the total won for each ticket played
// - allWin = array of all matches between tickets and fake extractions
// - tickets = array of all ticket instances
// # return = an array with all the total win amounts for each ticket
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

module.exports = {  genNumber,
                    numberExtraction,
                    combinations,
                    checkWin,
                    allWinToString,
                    moneyWon,
                    arrayNumber,
                    fakeExtractNumber
                 }