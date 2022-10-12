let listOfNums = [];

while (!listOfNums.includes(0)) {
	let enteredNum = parseInt(prompt("Please enter your values:\n(enter at least 4 values, as numbers, one by one. Enter 0 to stop adding values)"));
	listOfNums.push(enteredNum);
}
listOfNums.pop();
listOfNums.sort((a, b) => a - b);

if (listOfNums.length < 4) {
	alert("Please reload the page and enter at least 4 values!");
} else {
	let numOfOutliers = parseInt(prompt("Please enter how many outliers you want to remove:\n(as a positive integer)"));

	function getNewList(list, num) {
		let newList = list.slice(num, -num);
		return newList;
	}
	let result = getNewList(listOfNums, numOfOutliers);
	alert(`The list you entered is:  ${listOfNums}\nThe new list is:  ${result}`);
}
