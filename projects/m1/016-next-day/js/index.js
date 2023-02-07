// *******Costant prompt Syn *******************/
const prompt = require("prompt-sync")();//*****/
// *********************************************/

let deyUserIn, monthUserIn, yearUserIn;

deyUserIn = parseInt(prompt("Insert the Day   --> "));
monthUserIn = parseInt(prompt("Insert the Month --> "));
yearUserIn = parseInt(prompt("Insert the Year  --> "));

// funzione calcolo data fine mese e inizio nuovo mese
function deyManthYearNew(deyOneNew, monthOneNew, yearNew) {

    deyOneNew = 1;
    monthOneNew = 1;
    yearNew = yearNew + 1;

    printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
    yearLeap(yearUserIn);

    return deyManthYearNew;
}

// funzione calcolo  giorni di un mese
function deyNextMonthYearCurrent(deyNext, monthCurrent, yearCurrent) {

    deyNext = deyNext + 1;
    monthCurrent = monthCurrent;
    yearCurrent = yearCurrent;

    printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
    yearLeap(yearUserIn);

    return deyNextMonthYearCurrent;
}

// funzione calcolo  data messe prossimo con giorno 1
function deyOneMonthNextTeYearCurrent(deyOne, monthNext, theYearCurrent) {

    deyOne = 1;
    monthNext = monthNext + 1;
    theYearCurrent = theYearCurrent;

    printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
    yearLeap(yearUserIn);

    return deyOneMonthNextTeYearCurrent;
}

// funzione stampa data
function printDateNextDay(dey, month, year) {
    if ((dey >= 10 && month >= 10)) {
        console.log("\nThe next date is the one entered and: " + dey + "-" + month + "-" + year + "\n");
    } else if (dey < 10 && month < 10) {
        console.log("\nThe  next date is the one entered and: " + "0" + dey + "-0" + month + "-" + year + "\n");
    } else if (dey < 10 && month >= 10) {
        console.log("\nThe  next date is the one entered and: " + "0" + dey + "-" + month + "-" + year + "\n");
    } else if (dey >= 10 && month < 10) {
        console.log("\nThe  next date is the one entered and: " + dey + "-0" + month + "-" + year + "\n");
    }
    return printDateNextDay;
}

// function to determine if this year is a leap year
function yearLeap(yearLeap) {
    // if the inserted year is divided by 400 or by 4 and has a rest of 0 --> leap year
    if (yearLeap % 400 === Number()) {
        console.log("The inserted year is leap year :", yearLeap, "\n");
    } else if ((yearLeap % 100) === Number()) {
        console.log("The inserted year is not a leap year :", yearLeap, "\n");
    } else if (yearLeap % 4 === Number()) {
        console.log("The inserted year is leap year :", yearLeap, "\n");
    } else {
        console.log("The inserted year is not a leap year :", yearLeap, "\n");
    }
    return yearLeap;
}

if ((monthUserIn === 1) || (monthUserIn === 3) || (monthUserIn === 5) || (monthUserIn === 7) || (monthUserIn === 8) || (monthUserIn === 10) || (monthUserIn === 12)) {

    if (monthUserIn === 12) {

        if (deyUserIn === 31) {
            deyUserIn = 1;
            monthUserIn = 1;
            yearUserIn = yearUserIn + 1;

            printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
            yearLeap(deyUserIn, monthUserIn, yearUserIn);

         }
    } else if (deyUserIn === 31) {

        deyUserIn = 1;
        monthUserIn = monthUserIn + 1;
        yearUserIn = yearUserIn;

        printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
        yearLeap(deyUserIn, monthUserIn, yearUserIn);

      }

    if (deyUserIn <= 30) {

        deyUserIn = deyUserIn + 1;
        monthUserIn = monthUserIn;
        yearUserIn = yearUserIn;

        printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
        yearLeap(deyUserIn, monthUserIn, yearUserIn);

    }
    else {
        console.log("ERROR! --> The Day is Not valid.")
    }

} else if ((monthUserIn === 4) || (monthUserIn === 6) || (monthUserIn === 9) || (monthUserIn === 11) || (monthUserIn === 2)) {
    {

        if (deyUserIn === 30) {

            deyUserIn = 1;
            monthUserIn = monthUserIn + 1;
            yearUserIn = yearUserIn;

            printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
            yearLeap(deyUserIn, monthUserIn, yearUserIn);

        }
        if (deyUserIn <= 29) {
            deyUserIn = deyUserIn + 1;
            monthUserIn = monthUserIn;
            yearUserIn = yearUserIn;

            printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
            yearLeap(deyUserIn, monthUserIn, yearUserIn);

        } else if (deyUserIn > 30) {
            console.log("ERROR! --> The Day is Not valid.")
        }
        else if (deyUserIn === 28 && monthUserIn === 2) {

            deyUserIn = 1;
            monthUserIn = monthUserIn + 1;
            yearUserIn = yearUserIn;

            printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
            yearLeap(deyUserIn, monthUserIn, yearUserIn);

        } else if (deyUserIn <= 27) {

            deyUserIn = deyUserIn + 1;
            monthUserIn = monthUserIn;
            yearUserIn = yearUserIn;

            printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
            yearLeap(deyUserIn, monthUserIn, yearUserIn);

        } else if (deyUserIn > 28) {
            console.log("ERROR! --> The Day is Not valid.")
        }
    }
}