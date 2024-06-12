function getOrdinalNumber(num) {
	if (num < 1 || num > 12) {
		alert("Please reload the page and enter a number from 1 to 12");
	} else if (num === 1) {
		alert("The corresponding ordinal number is: FIRST");
	} else if (num === 2) {
		alert("The corresponding ordinal number is: SECOND");
	} else if (num === 3) {
		alert("The corresponding ordinal number is: THIRD");
	} else if (num === 4) {
		alert("The corresponding ordinal number is: FOURTH");
	} else if (num === 5) {
		alert("The corresponding ordinal number is: FIFTH");
	} else if (num === 6) {
		alert("The corresponding ordinal number is: SIXTH");
	} else if (num === 7) {
		alert("The corresponding ordinal number is: SEVENTH");
	} else if (num === 8) {
		alert("The corresponding ordinal number is: EIGHTH");
	} else if (num === 9) {
		alert("The corresponding ordinal number is: NINTH");
	} else if (num === 10) {
		alert("The corresponding ordinal number is: TENTH");
	} else if (num === 11) {
		alert("The corresponding ordinal number is: ELEVENTH");
	} else if (num === 12) {
		alert("The corresponding ordinal number is: TWELFTH");
	}
}

const userInput = parseInt(prompt("Please enter a number from 1 to 12:"));
getOrdinalNumber(userInput);
