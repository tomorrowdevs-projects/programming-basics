function hexToInt(input) {
	let regex = /[0-9A-Fa-f]{1}/g;
	let hasHexDigit = regex.test(input);

	if (hasHexDigit && input.length == 1) {
		return parseInt(input, 16);
	} else {
		alert("Please reload the page and enter a valid input");
	}
}

function intToHex(input) {
	if (input >= 0 && input <= 15) {
		return input.toString(16).toUpperCase();
	} else {
		alert("Please reload the page and enter a valid input");
	}
}

let hexInput = prompt("Please enter a single hexadecimal digit:\n(a number from 0 to 9, or a letter from A to F)");
hexToInt(hexInput);

let intInput = parseInt(prompt("Please enter a number between 0 and 15:"));
intToHex(intInput);
