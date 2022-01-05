function ordinalDate(day, month, year) {
	let isLeapYear;
	if (year % 400 == 0) {
		isLeapYear = true;
	} else if (year % 400 != 0 && year % 100 == 0) {
		isLeapYear = false;
	} else if (year % 400 != 0 && year % 100 != 0 && year % 4 == 0) {
		isLeapYear = true;
	} else {
		isLeapYear = false;
	}

	let numOfDays = 0;
	for (let i = 1; i < month; i++) {
		if (i == 2) {
			if (isLeapYear) {
				numOfDays += 29;
			} else {
				numOfDays += 28;
			}
		} else if (i == 4 || i == 6 || i == 9 || i == 11) {
			numOfDays += 30;
		} else {
			numOfDays += 31;
		}
	}
	let ordinalDay = numOfDays + day;
	alert(`The date you entered is:\n${day}-${month}-${year}\nThe corresponding ordinal date is:\nDay   ${ordinalDay}\nYear  ${year}`);
}

let enteredYear = parseInt(prompt("Please enter a year:"));
let enteredMonth = parseInt(prompt("Please enter a month (as number from 1 to 12):"));
let enteredDay = parseInt(prompt("Please enter a day (as number from 1 to 31):"));

ordinalDate(enteredDay, enteredMonth, enteredYear);

// Soluzione alternativa:

// function ordinalDate(day, month, year) {
// 	let isLeapYear;
// 	if (year % 400 == 0) {
// 		isLeapYear = true;
// 	} else if (year % 400 != 0 && year % 100 == 0) {
// 		isLeapYear = false;
// 	} else if (year % 400 != 0 && year % 100 != 0 && year % 4 == 0) {
// 		isLeapYear = true;
// 	} else {
// 		isLeapYear = false;
// 	}

// 	let ordinalDay;
// 	if (month == 1) {
// 		ordinalDay = day;
// 	} else if (month == 2) {
// 		ordinalDay = 31 + day;
// 	} else if (month == 3) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + day;
// 		}
// 	} else if (month == 4) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + day;
// 		}
// 	} else if (month == 5) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + day;
// 		}
// 	} else if (month == 6) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + 31 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + 31 + day;
// 		}
// 	} else if (month == 7) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + 31 + 30 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + 31 + 30 + day;
// 		}
// 	} else if (month == 8) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + 31 + 30 + 31 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + 31 + 30 + 31 + day;
// 		}
// 	} else if (month == 9) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + day;
// 		}
// 	} else if (month == 10) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day;
// 		}
// 	} else if (month == 11) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day;
// 		}
// 	} else if (month == 12) {
// 		if (isLeapYear) {
// 			ordinalDay = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day;
// 		} else if (!isLeapYear) {
// 			ordinalDay = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day;
// 		}
// 	}
// 	alert(`The date you entered is:\n${day}-${month}-${year}\nThe corresponding ordinal date is:\nDay   ${ordinalDay}\nYear  ${year}`);
// }

// let enteredYear = parseInt(prompt("Please enter a year:"));
// let enteredMonth = parseInt(prompt("Please enter a month (as number from 1 to 12):"));
// let enteredDay = parseInt(prompt("Please enter a day (as number from 1 to 31):"));

// ordinalDate(enteredDay, enteredMonth, enteredYear);
