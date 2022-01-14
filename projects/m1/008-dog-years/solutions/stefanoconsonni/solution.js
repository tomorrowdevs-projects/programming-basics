let humanAge = prompt("Please enter the number of human years to convert:");

if (humanAge < 0) {
	alert("The age you entered is not valid. Please enter a valid age.");
} else if (humanAge < 2) {
	humanAge *= 10.5;
	alert(`The age you entered corresponds to ${humanAge} dog years`);
} else {
	let earlyDogYears = 2;
	earlyDogYears *= 10.5;

	let laterDogYears = humanAge - 2;
	laterDogYears *= 4;

	let humanToDogYears = earlyDogYears + laterDogYears;

	alert(`The age you entered corresponds to ${humanToDogYears} dog years`);
}
