function tokenizeString(str) {
	let listOfTokens = str.match(/[-+/*^()]|\d+/g);
	return listOfTokens;
}

const inputString = prompt("Please enter a mathematical expression:\n(It can contain numbers, math operators and parentheses)");
alert(tokenizeString(inputString));
