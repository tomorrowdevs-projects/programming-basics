const prompt = require('prompt-sync')();

let year = parseInt(prompt("Insert year: "));

//day_of_the_week = (year + floor((year - 1) / 4) - floor((year - 1) / 100) + floor((year - 1) / 400)) % 7

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function dayOfTheWeek(year) {

    day_of_the_week = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7
    console.log(`The January 1 ${year} is: ${days[day_of_the_week]}`)
}


dayOfTheWeek(year)