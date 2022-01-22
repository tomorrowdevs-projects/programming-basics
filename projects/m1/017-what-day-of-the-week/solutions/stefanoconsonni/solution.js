const enteredYear = parseInt(prompt("Please enter a year:"));

const dayOfTheWeek = (enteredYear + Math.floor((enteredYear - 1) / 4) - Math.floor((enteredYear - 1) / 100) + Math.floor((enteredYear - 1) / 400)) % 7;
const listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (let i = 0; i <= 6; i++) {
	if (dayOfTheWeek === i) {
		alert(`The first day of the year was a ${listOfDays[i]}`);
	}
}

// Alternative solution:

// const enteredYear = parseInt(prompt("Please enter a year:"));

// const dayOfTheWeek = (enteredYear + Math.floor((enteredYear - 1) / 4) - Math.floor((enteredYear - 1) / 100) + Math.floor((enteredYear - 1) / 400)) % 7;

// if (dayOfTheWeek === 0) {
// 	alert("The first day of the year was a Sunday");
// } else if (dayOfTheWeek === 1) {
// 	alert("The first day of the year was a Monday");
// } else if (dayOfTheWeek === 2) {
// 	alert("The first day of the year was a Tuesday");
// } else if (dayOfTheWeek === 3) {
// 	alert("The first day of the year was a Wednesday");
// } else if (dayOfTheWeek === 4) {
// 	alert("The first day of the year was a Thursday");
// } else if (dayOfTheWeek === 5) {
// 	alert("The first day of the year was a Friday");
// } else if (dayOfTheWeek === 6) {
// 	alert("The first day of the year was a Saturday");
// } else {
// 	alert("Please reload the page and enter a valid year");
// }
