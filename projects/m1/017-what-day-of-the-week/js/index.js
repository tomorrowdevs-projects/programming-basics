// *******Costant prompt Syn *******************/
//const prompt = require("prompt-sync")();
// *******Costant prompt Syn *******************/

let year = parseInt(prompt("Please insert the date --> "));

//variable declaration with formula
let day_of_the_week = ((year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7);

switch (day_of_the_week) {
    case 0: { console.log("01-01-" + year + " is a Sunday" + " -->  Formula result: -->  " + day_of_the_week); }
        break;
    case 1: { console.log("01-01-" + year + " is a Monday" + " -->  Formula result: -->  " + day_of_the_week); }
        break;
    case 2: { console.log("01-01-" + year + " is a Tuesday" + " -->  Formula result: -->  " + day_of_the_week); }
        break;
    case 3: { console.log("01-01-" + year + " is a Wednesday" + " -->  Formula result: -->  " + day_of_the_week); }
        break;
    case 4: { console.log("01-01-" + year + " is a Thursday" + " -->  Formula result: -->  " + day_of_the_week); }
        break;
    case 5: { console.log("01-01-" + year + " is a Friday" + " -->  Formula result: -->  " + day_of_the_week); }
        break;
    case 6: { console.log("01-01-" + year + " is a Saturday" + " -->  Formula result: -->  " + day_of_the_week); }
        break;
    default: console.log(`ERROR`);
}