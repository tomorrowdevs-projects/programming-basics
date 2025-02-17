let humanAge = +prompt("Enter the number of human years to convert:");
let dogYears;

if (humanAge <= 0) {
	alert("The age you entered is not valid. Please enter a valid age.");
} else if (humanAge <= 2) {
	dogYears = humanAge * 10.5;
	alert(`The age you entered corresponds to ${dogYears} dog years`);
} else {
	dogYears = 21 + ((humanAge - 2)*4);
	alert(`The age you entered corresponds to ${dogYears} dog years`);
}