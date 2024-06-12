function romanToInt(str, obj) {
	const curr = str.charAt(0);
	const next = str.charAt(1);
	counter = 0;

	if (str === "") {
		return counter;
	} else {
		romanToInt(str.slice(1), obj);
	}
	if (obj[curr] < obj[next]) {
		return (counter -= obj[curr]);
	} else {
		return (counter += obj[curr]);
	}
}

const numerals = {
	M: 1000,
	D: 500,
	C: 100,
	L: 50,
	X: 10,
	V: 5,
	I: 1,
};

let counter;
const userInput = prompt("Please enter a number expressed using roman numerals:\n(please use capital letters)");
alert(romanToInt(userInput, numerals));
