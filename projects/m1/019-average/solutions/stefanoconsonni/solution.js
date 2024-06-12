let listOfNums = [];

do {
	let enteredNumber = parseInt(prompt("Please enter a number:"));
	listOfNums.push(enteredNumber);

	if (listOfNums[0] === 0) {
		alert("The first value cannot be zero. Please reload the page and enter a valid value.");
	}
} while (listOfNums[0] !== 0 && !listOfNums.includes(0));

listOfNums.pop();
const averageValue = (list) => list.reduce((a, b) => a + b) / list.length;

alert(`The average value is: ${averageValue(listOfNums)}`);
