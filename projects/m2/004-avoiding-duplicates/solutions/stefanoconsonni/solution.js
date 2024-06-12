let wordsList = [];

while (!wordsList.includes("")) {
	let enteredWord = prompt("Please enter a word:\n(Enter a blank line to stop adding words to the list)");
	wordsList.push(enteredWord);
}
wordsList.pop();

let getNewList = (list) => [...new Set(list)];
alert(getNewList(wordsList));
