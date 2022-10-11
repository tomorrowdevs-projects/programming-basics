const year = prompt('Enter a year');
const month = parseInt(prompt('Enter a month'));
const month_31 = [1, 3, 5, 7, 8, 10, 12];



function checkLeapYear(year) {
    let leapYear;
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        leapYear = true;
    } else {
        leapYear = false;
    }
    return leapYear
}

let resultLeap = checkLeapYear(year)

function daysInMonth(year, month) {

    let message = '';

    if (month == '2' && checkLeapYear(year)) {
        message = `The month ${month}/${year} has 29 days`;

    } else if (month == '2' && !checkLeapYear(year)) {
        message = `The month ${month}/${year} has 28 days`;

    } else if (month_31.includes(month)) {
        message = `The month ${month}/${year} has 31 days`;

    } else {
        message = `The month ${month}/${year} has 30 days`;
    }

    return alert(message)
}


if (/^[1-9]|1[0-2]+$/.test(month) && /^[0-9]{4}$/.test(year)) {
    daysInMonth(year, month)
} else {
    alert('The month or year is wrong')
}