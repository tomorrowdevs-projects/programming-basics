//Next Day:

/*
Write a program that reads a date from the user and computes its immediate successor. For example, if the user enters values that represent 2019-11-18 then your program should display a message indicating that the day immediately after 2019-11-18 is 2019-11-19. If the user enters values that represent 2019-11-30 then the program should indicate that the next day is 2019-12-01. If the user enters values that represent 2019-12-31 then the program should indicate that the next day is 2020-01-01. The date will be entered in numeric form with three separate input statements; one for the year, one for the month, and one for the day. Ensure that your program works correctly for leap years.
*/

//input user:

const year = prompt("Please type any Year in number format");

const month = prompt("Please type any Month in number format"); 

const day = prompt("Please type any Day in number format"); 


// Breaking down Months equal to or made of 30 days 

let monthOf30Days;

if (month == 4 || month == 6 || month == 9 || month == 11) {

    monthOf30Days = true;

} else {

    monthOf30Days = false;

}


//  Breaking down Months equal to or made of 31 days 
// month === 2 (Febraury)

let monthOf31Days;

if (!monthOf30Days && month != 2) {

    monthOf31Days = true;

} else {

    monthOf31Days = false; 

}

// Next year condition:
// month === 12 (December)

let nextYear;

if (month == 12 && day == 31) {

nextYear = true; 

} else {

nextYear = false;  

}

// Leap Year conditions:

let leapYear;

if ((year % 400 == 0) || year % 100 != 0 && year % 4 == 0) {

leapYear = true;

} else {

leapYear = false; 

}

// Condition for the next:

let nextMonth;

if (month == 2 && ((day == 28 && !leapYear) || (day == 29 && leapYear))) {

nextMonth = true;

} else if ((day == 31 && monthOf31Days) || (day == 30 && monthOf30Days)) {

nextMonth = true;

} else {

nextMonth = false;   

} 

// Combination of the data above/input user for the final results:

if (!leapYear && month == 2 && day > 28) {

    alert(year + " It is not a leap year");

    } else if (monthOf30Days && day > 30){

    alert("This month has 30 days"); 

    } else if (!nextYear && !nextMonth) {

    alert(year + " - " + ("00" + month).slice(-2) + " - " + ("00" + (+day + 1)).slice(-2));

    } else if (!nextYear && nextMonth) {

    alert(year + " - " + ("00" + (+month + 1)).slice(-2) + " - 01");

    } else if (nextYear) {

    alert((+year + 1) + " - 01 - 01");

    } 