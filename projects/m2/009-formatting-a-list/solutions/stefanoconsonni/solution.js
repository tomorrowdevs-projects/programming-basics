function getFinalString(wordsList) {
	let arrOfWords = wordsList.split(" ");

	if (arrOfWords.length > 1) {
		let lastWord = arrOfWords.slice(-1);
		let firstPart = arrOfWords.slice(0, -1);
		let secondPart = ` and ${lastWord}`;
		let finalString = `${firstPart.join(", ")}${secondPart}`;
		return finalString;
	} else {
		return arrOfWords.toString();
	}
}

const userWords = prompt("Please enter a few words:\n(each word must be separeted by a blank space)").toLowerCase();
alert(getFinalString(userWords));
