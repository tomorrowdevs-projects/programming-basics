const Bill = require('../model/Bill');

///////////////////////////////////////////////////
//////////////// Menage choices ///////////////////
///////////////////////////////////////////////////

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

module.exports = {  menageWheel,
                    menageType,
                }