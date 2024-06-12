function sum() {
	let num = prompt("Please enter a number:\n(enter a blank line to stop)");
	return num === "" ? 0.0 : parseInt(num) + sum();
}
alert(`The sum of all the values is: ${sum()}`);
