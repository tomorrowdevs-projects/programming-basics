const possibleResults = [
	00, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

let greenSpaces = [00, 0];
let redSpaces = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let blackSpaces = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

let result = possibleResults[Math.floor(Math.random() * possibleResults.length)];

let isGreen;
if (greenSpaces.includes(result)) {
	isGreen = true;
} else {
	isGreen = false;
}

let isRed;
if (redSpaces.includes(result)) {
	isRed = "Pay Red";
} else if (!isGreen && blackSpaces.includes(result)) {
	isRed = "Pay Black";
}

let isEven;
if (result % 2 == 0) {
	isEven = "Pay Even";
} else {
	isEven = "Pay Odd";
}

let isFirstHalf;
if (result >= 1 && result <= 18) {
	isFirstHalf = "Pay 1 to 18";
} else if (!isGreen && result > 18) {
	isFirstHalf = "Pay 19 to 36";
}

alert(`The spin result is: ${result}\nPay: ${result}`);
alert(`${isRed}\n${isEven}\n${isFirstHalf}`);
