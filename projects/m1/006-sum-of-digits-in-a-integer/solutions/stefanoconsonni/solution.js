let integer = prompt("Please enter an integer composed by four digits:");

function getSumOfDigits() {
	if (integer.length !== 4) {
		alert("Please reload the page and enter an integer composed by four digits");
	} else {
		let arrayOfInteger = integer.split("").map(parseFloat);
		let reducer = (previousValue, currentValue) => previousValue + currentValue;
		let total = arrayOfInteger.reduce(reducer);

		alert(`The sum of the digits you entered is: ${total}`);
	}
}

getSumOfDigits();
