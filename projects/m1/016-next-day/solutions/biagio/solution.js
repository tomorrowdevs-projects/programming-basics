const prompt = require('prompt-sync')();

let year = parseInt(prompt("Insert year: "));
let month = parseInt(prompt("Insert month: "));
let day = parseInt(prompt("Insert day: "));

let maxDay = {
    month30Day: {
        month: [4, 6, 9, 11],
        day: 30,
    },
    month31Day: {
        month: [1, 3, 5, 7, 8, 10, 12],
        day: 31,
    },

};

function nextDay(year, month, day) {
    if (month == 12 && day == 31) {
        console.log(`The next day is ${year+1}/01/01`);
    } else if (maxDay.month30Day.month.includes(month) === true && day == 30) {
        console.log(`The next day is ${year}/${month+1}/01`)
    } else if (maxDay.month31Day.month.includes(month) === true && day == 31) {
        console.log(`The next day is ${year}/${month+1}/01`)
    } else if (month === 2 && day == 28) {
        if ((year % 400 === 0) || (year % 4 === 0)) {
            console.log(`The next day is ${year}/${month}/29`)
        } else if ((year % 100 === 0)) {
            console.log(`The next day is ${year}/${month+1}/01`)
        } else {
            console.log(`The next day is ${year}/${month+1}/01`)
        }
    } else {
        console.log(`The next day is ${year}/${month}/${day+1}`)
    }
}

nextDay(year, month, day);