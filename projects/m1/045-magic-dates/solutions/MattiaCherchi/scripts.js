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



function daysInMonth(year, month) {

    let days;

    if (month == '2' && checkLeapYear(year)) {
        days = 29

    } else if (month == '2' && !checkLeapYear(year)) {
        days = 28

    } else if (month_31.includes(month)) {
        days = 31

    } else {
        days = 30
    }

    return days;
}

function magicDates(days, month, year) {
    let year2String = String(year).slice(-2);
    if ((days * month) == year2String) {
        return true;
    }
}

for (let y = 1900; y < 2000; y++) {
    for (let m = 1; m <= 12; m++) {
        for (d = 1; d <= daysInMonth(y, m); d++) {
            if (magicDates(d, m, y)) {
                console.log(`the date ${d}/${m}/${y} is a magic-date`)
            }
        }
    }
}