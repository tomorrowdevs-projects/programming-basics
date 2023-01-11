const Bill = require('./Bill');

//array with 10 arrays, each with 5 random numbers for fake extraction
const fakeExtractNumber = numberExtraction();

///////////////////////////////////////////////////
////////////////// Check Input ////////////////////
///////////////////////////////////////////////////



//check if an element is included in an array
// - possibleInput = an array with all inputs accepted
// - input = string number, the item to check
// # return = input if element is in array or false
function check (possibleInput, input) {
    if (possibleInput.includes(input)) return input;
    else return false
};

///////////////////////////////////////////////////
///////////////////// Print ///////////////////////
///////////////////////////////////////////////////

//prints a numbered vertical list from an array to the console
// - arr = The array to print
// # return = an array with all the numbers in the list
function printList (arr) {
    const num = [];
    let string = '';
    
    arr.forEach((el, index) => {
        string += `${index+1}) ${el}\n`;
        num.push(''+ (index+1));
    });
    return [num, string]
};

//generates a line of the desired length formed by -
// - num = number, the length of the line
// # return = string
const separator = (num) => ''.padStart(num, '=');

//generates the title for tickets with numbering
// - ticketNumber = number, the number to show
// # return = string
const ticketTitle = ticketNumber => `\n                      TICKET #${ticketNumber}\n`;

//generates a string with an inline list from an array ,
//adding a separator between each element and a line above and below it
// - arr = the array to print
// # return = string
function printInline (arr) {
    const listCategory = arr.join(' <> ');
    return `${separator(listCategory.length)}\n${listCategory}\n${separator(listCategory.length)}\n`
};

//creates a formatted string with all tickets created
// - ticketArr = array with all Bill instances
// # return = string
function showCompletedTicket (ticketArr) {
    return ticketArr.reduce((res, ticket, index) => {
        const typeAndMoney = ticket.type.map((el, index) => el + ' € ' + ticket.prices[index]).join(' ,')
        return res += `Ticket #${index+1} : ${ticket.numbers} numbers played on the ${ticket.city} wheel with ${typeAndMoney}\n`
    }, '');
};

//Center a word in a space by adding spaces before and after
// - lineWidth = number, how many characters is the space
// - word = string, the word to write
// # return = string
function centerWord (lineWidth, word) {
    const wordLength = word.length;
    const space = (lineWidth - wordLength) /2;
    return word.padStart(wordLength+space, ' ').padEnd(lineWidth, ' ');
};

//print the extraction table for each wheel
// @ use the centerWord(), separator() and allWinToString() to center the words in the cell, make the rows of the table and print the winnings
// - allWin = array of array with all winnings (Example: [ [ 'Ambo', 'Genova' ], [ 'Ambo', 'Napoli' ] ])
// # return = string
function printFakeExtraction (allWin) {
    let result = `\n            ${centerWord(26, 'FAKE EXTRACTIONS')} ${centerWord(50, 'TICKET WIN')}\n`;

    for (let i=0; i<Bill.cities.length-1; i++) {
        result += `+${separator(10)}+${separator(26)}+${separator(50)}+\n`;
        result += `| ${centerWord(8, Bill.cities[i])} | ${centerWord(24, fakeExtractNumber[i].join(' - '))} | ${centerWord(48, allWinToString(allWin)[i])} |\n`
    }
    result += `+${separator(10)}+${separator(26)}+${separator(50)}+\n`;

    return result
};

///////////////////////////////////////////////////
//////////////// Menage choices ///////////////////
///////////////////////////////////////////////////

//creates an array consisting of numbers from min to max in string format
// - min, max = number, from => to
// # return = array
function arrayNumber (min, max) {
    return [...Array(max-min+1)].map(_ => `${min++}`)
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

module.exports = {  fakeExtractNumber,
                    check,
                    printList,
                    printInline,
                    ticketTitle,
                    menageWheel,
                    menageType,
                    separator,
                    showCompletedTicket,
                    arrayNumber,
                    genNumber,
                    numberExtraction,
                    printFakeExtraction,
                    centerWord,
                    combinations,
                    checkWin,
                    allWinToString,
                    moneyWon
                 }