// *******Costant prompt Syn *******************/
const prompt = require("prompt-sync")();
// *******Costant prompt Syn *******************/

let year = parseInt(prompt("Please insert the Date --> "));

let nameDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//function that calculates the January promo of a year
function dayOfTheWeekFormul(yearDayOfweek) {
    yearDayOfweek = ((yearDayOfweek + Math.floor((yearDayOfweek - 1) / 4) - Math.floor((yearDayOfweek - 1) / 100) + Math.floor((yearDayOfweek - 1) / 400)) % 7);
    return yearDayOfweek;
}

// Date print function
function printDayOfTheWeek(year_Print, nameDayPrint, dayOfTheWeek_print) {
    printDateWeek = console.log("01-01-" + year_Print + " is " + nameDayPrint + " -->  Formula result: -->  " + dayOfTheWeek_print);
    return printDateWeek;
}

day_of_the_week = dayOfTheWeekFormul(year);

switch (day_of_the_week) {
    case 0: { printDayOfTheWeek(year, nameDay[0], day_of_the_week); }
        break;
    case 1: { printDayOfTheWeek(year, nameDay[1], day_of_the_week); }
        break;
    case 2: { printDayOfTheWeek(year, nameDay[2], day_of_the_week); }
        break;
    case 3: { printDayOfTheWeek(year, nameDay[3], day_of_the_week); }
        break;
    case 4: { printDayOfTheWeek(year, nameDay[4], day_of_the_week); }
        break;
    case 5: { printDayOfTheWeek(year, nameDay[5], day_of_the_week); }
        break;
    case 6: { printDayOfTheWeek(year, nameDay[6], day_of_the_week); }
        break;
    default: console.log(`ERROR`);
}