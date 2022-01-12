function getNumOfDays(month, year) {
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

	if (month == "" || month < 1 || month > 12 || month.length < 1 || month.length > 2) {
		alert("The input you entered is NOT valid");
	} else if (year == "" || year.length != 4) {
		alert("The input you entered is NOT valid");
	} else {
		alert(`The month you entered is: ${month}/${year}`);
		if (month == 2) {
			if (isLeapYear) {
				alert(`This month has 29 days`);
			} else {
				alert(`This month has 28 days`);
			}
		} else if (month == 4 || month == 6 || month == 9 || month == 11) {
			alert(`This month has 30 days`);
		} else {
			alert(`This month has 31 days`);
		}
	}
}

let enteredMonth = prompt("Please enter a month:\n(as number from 1 to 12)");
let enteredYear = prompt("Please enter a year:\n(as a 4-digits number)");

getNumOfDays(enteredMonth, enteredYear);
