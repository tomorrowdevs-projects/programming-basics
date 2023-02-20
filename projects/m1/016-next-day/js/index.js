let dayIn = parseInt(prompt("Insert the Day   --> "));
let monthIn = parseInt(prompt("Insert the Month --> "));
let yearIn = parseInt(prompt("Insert the Year  --> "));

// function case febbrary
function caseFebbrary(day, month, year) {
    if (day < 1 || day > 28) {
        console.log("\nERROR \n")
    } else {
        if (day === 28) {
            day = 1
            month = month + 1;
            printDate(day, month, year);
        } else {
            day = day + 1;
            printDate(day, month, year);
        }
    }
}
// function case December
function caseNewYearDecember(day, month, year) {
    if (day < 1 || day > 31) {
        console.log("\nERROR\n");
    } else {
        if (day === 31) {
            day = 1;
            month = 1;
            year = year + 1;
            printDate(day, month, year);
            printYearLeapDate(year);
        }
    }
}
// function year leeap
function yearLeapDate(year) {
    if (year % 400 === Number()) {
        return true;
    } else if ((year % 100) === Number()) {
        return false;
    } else if (year % 4 === Number()) {
        return true;
    } else {
        return false;
    }
}
// function print date year leeap
function printYearLeapDate(year) {
    let yearleap = yearLeapDate(year);
    if (yearleap === true) {
        console.log("\nThe " + year + " is a Year Leapp");
    }
}
// function print date
function printDate(day, month, year) {
    if ((day >= 10 && month >= 10)) {
        console.log("\nThe next date is the one insered and: " + day + "-" + month + "-" + year + "\n");
    } else if (day < 10 && month < 10) {
        console.log("\nThe  next date is the one insered and: " + "0" + day + "-0" + month + "-" + year + "\n");
    } else if (day < 10 && month >= 10) {
        console.log("\nThe  next date is the one insered and: " + "0" + day + "-" + month + "-" + year + "\n");
    } else if (day >= 10 && month < 10) {
        console.log("\nThe  next date is the one insered and: " + day + "-0" + month + "-" + year + "\n");
    }
}

if ((yearIn >= 1000 && yearIn <= 9999) && (monthIn >= 01 && monthIn <= 12)) {
    if (monthIn === 2 || monthIn === 4 || monthIn === 6 || monthIn === 9 || monthIn === 11) {
        if (monthIn === 2 && dayIn === 28) {
            caseFebbrary(dayIn, monthIn, yearIn);
        }
        else {
            if (dayIn === 30) {
                dayIn = 1;
                monthIn = monthIn + 1;
                printDate(dayIn, monthIn, yearIn);
            } else if (dayIn < 30) {
                dayIn = dayIn + 1;
                printDate(dayIn, monthIn, yearIn);
            } else if (dayIn > 30) {
                console.log("\nERROR\n")
            }
        }
    } else {
        if (monthIn === 12 && dayIn === 31) {
            caseNewYearDecember(dayIn, monthIn, yearIn);
        }
        else {
            if (dayIn === 31) {
                dayIn = 1;
                monthIn = monthIn + 1;
                printDate(dayIn, monthIn, yearIn);
            } else if (dayIn < 31) {
                dayIn = dayIn + 1;
                printDate(dayIn, monthIn, yearIn);
            } else if (dayIn > 31) {
                console.log("\nERROR\n");
            }
        }
    }
} else {
    console.log("\nERROR\n");
}