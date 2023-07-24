
alert("-- GREGORIAN DATE TO ORDINAL DATE --\nThe following software will help you transform Gregorian dates into ordinal dates, please, follow the instructions. Press enter to continue!")
let dayInput = parseInt(prompt("Please, enter a day: "));
let monthInput = parseInt(prompt("Please, enter a month: "));
let yearInput = parseInt(prompt("Please, enter a year: "));

let daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

if ( (yearInput % 4 === 0) && (yearInput % 100 !== 0) || (yearInput % 400 !== 0) ) {
    daysMonth[1] = 29;

} else {
    daysMonth[1] = 28;   
}

let result = 0;

for (let i = 0; i < monthInput; i++) {
    result += daysMonth[i];
}

function ordinalDate(dayInput, monthInput, yearInput) {

    let day = (result - daysMonth[monthInput - 1]) + dayInput;
    alert("Your ordinal date is " + day + " - " + yearInput + ".");

}

ordinalDate(dayInput, monthInput, yearInput);
