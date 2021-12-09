// Main function for converting a Gregorian date to an Ordinal date
function ordinalDate(day, month, year) {
    let daysCounter = 0;

    for (i = 1; i < month; i++) {
        if (i == 2) {
            if ((year % 400 == 0) || year % 100 != 0 && year % 4 == 0) {
            daysCounter += 29;
            } else {
            daysCounter += 28;    
            } // end else leap year
        } else if (i == 4 || i == 6 || i == 9 || i == 11) {
        daysCounter += 30;
        } else {
        daysCounter += 31;
        }
    }// end for loop
return daysCounter + day;
}// end function

// Function for checking if user inputs are correct
function checkDate(day, month, year) {
    let correctDays;
    if (month == 2) {
        if ((year % 400 == 0) || year % 100 != 0 && year % 4 == 0) {
        correctDays = 29;
        } else {
        correctDays = 28;    
        } // end if-else leap year
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    correctDays = 30;
    } else {
    correctDays = 31;
    }

    if ((day > 0 && day <= correctDays) && (month > 0 && month <= 12) && (year > 0 && year <= 9999) ) {
    return true;
    } else {
    return false;
    }  
}// end function 

// Main program
let userDay = +prompt("Enter a day");
let userMonth = +prompt("Enter a month");
let userYear = +prompt("Enter a year");
let dayInYear;

if (!checkDate(userDay, userMonth, userYear)) {
alert("Invalid Date!");
} else {
dayInYear = ordinalDate(userDay, userMonth, userYear);
alert("The day within the year for this date is: " + dayInYear);
}