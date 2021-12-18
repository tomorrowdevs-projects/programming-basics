let arrayOfNumbers = [];

let firstNumber = parseInt(prompt("Please enter a number:"));
arrayOfNumbers.push(firstNumber);

if (arrayOfNumbers[0] == 0) {
	alert("The first value cannot be zero. Please reload the page and enter a valid value.");
}

while (arrayOfNumbers[0] != 0 && !arrayOfNumbers.includes(0)) {
	let enteredNumber = parseInt(prompt("Please enter a number:"));
	arrayOfNumbers.push(enteredNumber);
}

arrayOfNumbers.pop();
const averageValue = (list) => list.reduce((a, b) => a + b) / list.length;
let list = arrayOfNumbers;

alert(`The average value is: ${averageValue(list)}`);
