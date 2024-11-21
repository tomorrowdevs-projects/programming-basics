let enteredYear = prompt("Please enter a year (you must enter four digits):");
let enteredMonth = prompt("Please enter a month:\n(from 1 to 12)");
let enteredDay = prompt("Please enter a day:\n(from 1 to 31, depending on the month)");

let isLeapYear = false;
if (enteredYear % 400 == 0 || (enteredYear % 100 != 0 && enteredYear % 4 == 0)) {
	isLeapYear = true;
}

let monthOf30Days = false;
if (enteredMonth == 4 || enteredMonth == 6 || enteredMonth == 9 || enteredMonth == 11) {
	monthOf30Days = true;
}

let monthOf31Days = false;
if (enteredMonth == 1 || enteredMonth == 3 || enteredMonth == 5 || enteredMonth == 7 || enteredMonth == 8 || enteredMonth == 10 || enteredMonth == 12) {
	monthOf31Days = true;
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
