let listOfNums = [];

while (!listOfNums.includes(0)) {
	let enteredNum = parseInt(prompt("Please enter a number:"));
	listOfNums.push(enteredNum);
}
listOfNums.pop();
listOfNums.sort((a, b) => a - b);

alert(listOfNums.join("\n"));
