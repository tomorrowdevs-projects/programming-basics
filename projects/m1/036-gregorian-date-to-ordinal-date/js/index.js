// function named ordinalDate that will take three integers as parameters and return as the only result the day within the year for that date
// parameters will be day, month and year respectively.
function ordinalDate(day, month, year) {

    let sumDays = 0;
    let leapYear = false;

    // leap year calculation
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        leapYear = true;
    }

    /* loop for calculating the number of days there are for each month
        - case month February
        - leap year case
        - case months with 31 days
        - case months with 30 days
    */
    for (let counterMonth = 1; counterMonth < month; counterMonth++) {
        if (counterMonth === 2) {
            sumDays = sumDays + 28;
        } else if (leapYear === true) {
            sumDays = sumDays + 29;
        } else if (counterMonth === 1 || counterMonth === 3 || counterMonth === 5 || counterMonth === 7 || counterMonth === 8 || counterMonth === 10 || counterMonth === 12) {
            sumDays = sumDays + 31;
        } else {
            sumDays = sumDays + 30;
        }
    }
    // sum of the number of days + those entered by the user to find the total number of days in the same year  
    sumDays = sumDays + day;
    // storing the total number of days
    resultSumDay = sumDays;
    // return single value --> total days of the date entered by the user
    return resultSumDay;
}
/* User input:
    - Day
    - month
    - year */
const day_User = parseInt(prompt("Enter a day   --> "));
const month_User = parseInt(prompt("Enter a month --> "));
const year_User = parseInt(prompt("Enter a year  --> "));
// call to function {ordinalDate}
let functionOrdinalDate = ordinalDate(day_User, month_User, year_User);
// Storage of the date entered by the user and its calculation in number of days
let message_Display = `\nThe data ${day_User}/${month_User}/${year_User} corresponds to the number of days --> ${resultSumDay}\n`;
// variable {message_Display}  display 
console.log(message_Display);