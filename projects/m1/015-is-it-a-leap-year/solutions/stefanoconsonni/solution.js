const enteredYear = prompt("Please enter a year:");

if (enteredYear % 400 == 0) {
	alert("The year you entered is a leap year");
} else if (enteredYear % 400 != 0 && enteredYear % 100 == 0) {
	alert("The year you entered is NOT a leap year");
} else if (enteredYear % 400 != 0 && enteredYear % 100 != 0 && enteredYear % 4 == 0) {
	alert("The year you entered is a leap year");
} else {
	alert("The year you entered is NOT a leap year");
}
