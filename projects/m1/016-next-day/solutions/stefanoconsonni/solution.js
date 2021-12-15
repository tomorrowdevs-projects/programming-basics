let enteredYear = prompt("Please enter a year (you must enter four digits):");
let enteredMonth = prompt("Please enter a month (you must enter one or two digits):");
let enteredDay = prompt("Please enter a day (you must enter one or two digits):");

let enteredDate = `${enteredYear}-${enteredMonth}-${enteredDay}`;

let isLeapYear;
if (enteredYear % 400 == 0) {
	isLeapYear = true;
} else if (enteredYear % 400 != 0 && enteredYear % 100 == 0) {
	isLeapYear = false;
} else if (enteredYear % 400 != 0 && enteredYear % 100 != 0 && enteredYear % 4 == 0) {
	isLeapYear = true;
} else {
	isLeapYear = false;
}

let monthOf30Days;
if (enteredMonth == 4 || enteredMonth == 6 || enteredMonth == 9 || enteredMonth == 11) {
	monthOf30Days = true;
} else {
	monthOf30Days = false;
}

let monthOf31Days;
if (enteredMonth == 1 || enteredMonth == 3 || enteredMonth == 5 || enteredMonth == 7 || enteredMonth == 8 || enteredMonth == 10 || enteredMonth == 12) {
	monthOf31Days = true;
} else {
	monthOf31Days = false;
}

if (enteredMonth == 12 && enteredDay == 31) {
	alert(`The next day is: ${parseInt(enteredYear) + 1}-01-01`);
} else if (!isLeapYear && enteredMonth == 2 && enteredDay == 28) {
	alert(`The next day is: ${enteredYear}-03-01`);
} else if (isLeapYear && enteredMonth == 2 && enteredDay == 29) {
	alert(`The next day is: ${enteredYear}-03-01`);
} else if (monthOf30Days && enteredDay == 30) {
	alert(`The next day is: ${enteredYear}-${("00" + (parseInt(enteredMonth) + 1)).slice(-2)}-01`);
} else if (monthOf31Days && enteredDay == 31) {
	alert(`The next day is: ${enteredYear}-${("00" + (parseInt(enteredMonth) + 1)).slice(-2)}-01`);
} else {
	alert(`The next day is: ${enteredYear}-${enteredMonth}-${("00" + (parseInt(enteredDay) + 1)).slice(-2)}`);
}
