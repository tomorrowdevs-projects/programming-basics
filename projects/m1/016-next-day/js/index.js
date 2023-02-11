// *******Costant prompt Syn *******************/
const prompt = require("prompt-sync")();//*****/
// *********************************************/

let dayUserIn, monthUserIn, yearUserIn;

dayUserIn = parseInt(prompt("Insert the Day   --> "));
monthUserIn = parseInt(prompt("Insert the Month --> "));
//yearUserIn = parseInt(prompt("Insert the Year  --> "));
yearUserIn = parseInt(2013);

//**************************************************************************************************************
// function to message ERROR
function messageError() {
    console.log("\nERROR!\n");
}
// function calculation  day one and month one + year next new
function dayNextOne_MonthNextOne_YearNextNew(dayNextOne, monthNextOne, yearNextNew) {
    // calculation  day one and next month + year current
    dayNextOne = 1;
    monthNextOne = 1;
    yearNextNew = ++yearNextNew;
    // date printing function
    printDateNextDay(dayNextOne, monthNextOne, yearNextNew);

    return dayNextOne_MonthNextOne_YearNextNew;
}

// function calculation  day one and next month + year current
function dayOneMonthNextTeYearCurrent(dayOne, monthNext, theYearCurrent) {
    // calculation  day one and next month + year current
    dayOne = 1;
    monthNext = ++monthNext;
    // date printing function
    printDateNextDay(dayOne, monthNext, theYearCurrent);

    return dayOneMonthNextTeYearCurrent;
}

// function to calculate the successive days of the current month
function dayNextMonthYearCurrent(dayNext, monthCurrent, yearCurrent) {
    // calculate the successive days of the current month
    dayNext = ++dayNext;
    // date printing function
    printDateNextDay(dayNext, monthCurrent, yearCurrent);

    return dayNextMonthYearCurrent;
}

// function to calculate the date of December and the start of the new year + year leep
function dayManthYearNew(dayOneNew, monthOneNew, yearNew) {
    if (dayOneNew === 31) {
        // function calculation  day one and month one + year next new
        dayNextOne_MonthNextOne_YearNextNew(dayOneNew, monthOneNew, yearNew);
        // function print date year leeap
        printYearLeapDate(yearNew);
    } else if (dayOneNew < 30) {
        // function to calculate the successive days of the current month
        dayNextMonthYearCurrent(dayOneNew, monthOneNew, yearNew);
    } else if (dayOneNew > 31) {
        // function to message ERROR
        messageError();
    }
    return dayManthYearNew;
}

// function to calculate the date the Febbrary
function dayMonthFebbrary(dayOneFebbrary, monthFebbrary, yearMonthFebbrary) {

    if (dayOneFebbrary === 28) {
        // function calculation  day one and next month + year current
        dayOneMonthNextTeYearCurrent(dayOneFebbrary, monthFebbrary, yearMonthFebbrary);

    } else if (dayOneFebbrary < 27) {
        // function to calculate the successive days of the current month
        dayNextMonthYearCurrent(dayOneFebbrary, monthFebbrary, yearMonthFebbrary);
    } else if (dayOneFebbrary > 28) {
        // function to message ERROR
        messageError();
    }
    return dayMonthFebbrary;
}

// function to determine if this year is a leap year
function yearLeapDate(yearLeap) {
    // if the inserted year is divided by 400 or by 4 and has a rest of 0 --> leap year
    if (yearLeap % 400 === Number()) {
        return true;
    } else if ((yearLeap % 100) === Number()) {
        return false;
    } else if (yearLeap % 4 === Number()) {
        return true;
    } else {
        return false;
    }
}

// function print date year leeap
function printYearLeapDate(printYearLeep) {
    if (printYearLeep === true) {
        console.log("The ", printYearLeep, " is a Year Leapp");
    } else {
        console.log("The ", printYearLeep, " is a not Year Leapp");
    }
    return printYearLeapDate;
}

// date printing function
function printDateNextDay(day, month, year) {
    if ((day >= 10 && month >= 10)) {
        console.log("\nThe next date is the one entered and: " + day + "-" + month + "-" + year + "\n");
    } else if (day < 10 && month < 10) {
        console.log("\nThe  next date is the one entered and: " + "0" + day + "-0" + month + "-" + year + "\n");
    } else if (day < 10 && month >= 10) {
        console.log("\nThe  next date is the one entered and: " + "0" + day + "-" + month + "-" + year + "\n");
    } else if (day >= 10 && month < 10) {
        console.log("\nThe  next date is the one entered and: " + day + "-0" + month + "-" + year + "\n");
    }
    return printDateNextDay;
}

// check years and months
if ((yearUserIn >= 1584 && yearUserIn >= 3999) || (monthUserIn >= 01 && monthUserIn <= 12)) {
    // I determine months with 31 days
    if ((monthUserIn === 1) || (monthUserIn === 3) || (monthUserIn === 5) || (monthUserIn === 7) || (monthUserIn === 8) || (monthUserIn === 10) || (monthUserIn === 12)) {
        // CASE MONTH WITH 31 DAY + NEW YEAR
        if (monthUserIn === 12) {
            // function to calculate the date of December and the start of the new year + year leep
            dayManthYearNew(dayUserIn, monthUserIn, yearUserIn);
            // CASE MONTH WITH 31 DAY
        } else if (dayUserIn === 31) {
            // function calculation  day one and next month + year current
            dayOneMonthNextTeYearCurrent(dayUserIn, monthUserIn, yearUserIn);
        } else if (dayUserIn <= 30) {
            // function to calculate the successive days of the current month
            dayNextMonthYearCurrent(dayUserIn, monthUserIn, yearUserIn);
        } else if (dayUserIn > 31) {
            // function to message ERROR
            messageError();
        }
        // CASE MONTH WITH 30 DAY 
    } else if (dayUserIn === 30) {
        // function calculation  day one and next month + year current
        dayOneMonthNextTeYearCurrent(dayUserIn, monthUserIn, yearUserIn);
    } else if (dayUserIn <= 29) {
        // function to calculate the successive days of the current month
        dayNextMonthYearCurrent(dayUserIn, monthUserIn, yearUserIn);
    } else if (dayUserIn > 30) {
        messageError();
        // CASE MONTH WITH 28 DAY --> MONTH FEBBRARY 
    } else if (monthUserIn === 2) {
        // function to calculate the date of Febbrary  whit 28 days
        dayMonthFebbrary(dayUserIn, monthUserIn, yearUserIn);
    }
} else {
    // function to message ERROR
    messageError();
}