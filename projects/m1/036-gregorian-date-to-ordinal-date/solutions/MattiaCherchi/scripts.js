const userDay = parseInt(prompt('Enter a day'));
const userMonth = parseInt(prompt('Enter a month'));
const userYear = parseInt(prompt('Enter a year'));
const month_30 = [4, 6, 9, 11];

function checkLeapYear(year) {
    let leapYear
    if (
        (year % 400 == 0) ||
        (year % 4 == 0 && year % 100 != 0)
    ) {
        leapYear = true;
    } else {
        leapYear = false;
    }
    return leapYear
}

let resultLeap = checkLeapYear(userYear);



function ordinalDate(day, month, year) {

    let countDay = 0;

    for (let i = 1; i < month; i++) {

        if (i == 2) {
            if (resultLeap) {
                countDay += 29;
            } else {
                countDay += 28;
            }
        } else if (month_30.includes(i)) {
            countDay += 30;
        } else
            countDay += 31;
    }
    let ordinalDay = countDay + day
    return alert(`the entered date :${day}-${month}-${year}\n corresponds to the day number: ${ordinalDay} of the year`);

}

ordinalDate(userDay, userMonth, userYear);

