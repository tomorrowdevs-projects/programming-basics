const prompt = require('prompt-sync')({sigint: true});

///////////////////////////////////////////////////
////////////////// Check Input ////////////////////
///////////////////////////////////////////////////

//recursively requests input using a prompt until a correct one is entered
// @ use the check() function to verify the input
// - possibleInput = an array with all inputs accepted
// - inputString = string that is displayed in the prompt
// # return = correctly input
function inputAndCheck (possibleInput, inputString) {
    const input = check(possibleInput, prompt(inputString));

    if (input || input === 0) return input;
    else {
        console.log('Input error, try again !\n');
        return inputAndCheck(possibleInput, inputString)
    }
};

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
        return res += `Ticket #${index+1} : ${ticket.numbers} numbers played on the ${ticket.city} wheel with ${ticket.type}\n`
    }, '');
}

///////////////////////////////////////////////////
//////////////// Menage choices ///////////////////
///////////////////////////////////////////////////

//creates an array consisting of numbers from min to max in string format
// - min, max = number, from => to
// # return = array
function arrayNumber (min, max) {
    return [...Array(max-min+1)].map(_ => `${min++}`)
}

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
    if (input > 0 && input < 7) {
        selected.push(type[input-1]);
        type = type.filter((_, index) => index !== input-1);
        return cb(numbersPlayed, whellOrType, num, selected, cities, type);

    } else if (input === 'n' && selected.length === 0) return cb(numbersPlayed, whellOrType, num, selected, cities, type);

    else return selected
}

module.exports = {  inputAndCheck,
                    check,
                    printList,
                    printInline,
                    ticketTitle,
                    menageWheel,
                    menageType,
                    separator,
                    showCompletedTicket,
                    arrayNumber,
                 }