// Write a program that displays the word (or words) that occur most frequently in a file.
// Your program should begin by reading the name of the file from the user.
// Then it should process every line in the file.
// Each line will need to be split into words, and any leading or trailing punctuation marks will need to be removed from each word.
// Your program should also ignore capitalization when counting how many times each word occurs.

const fileInput = document.querySelector("#file-selector");

fileInput.addEventListener("input", () => {
	const file = fileInput.files[0];

	console.log(file.name);
	const reader = new FileReader();
	reader.readAsText(file);

	reader.onload = () => {
		// This regular expression matches any single character that isn't included in the a-z range
		const regex = /[^a-z]+/gi;
		const list = reader.result.toUpperCase().split(" ");
		console.log(list);
		const cleanList = list.map((el) => el.replace(regex, " ").split(" "));
		const words = cleanList.flat().filter((el) => el != "");
		console.log(words);

		const wordsFreq = {};
		words.forEach((key) => (wordsFreq[key] = wordsFreq[key] ? wordsFreq[key] + 1 : 1));
		// Get the property with the max value in the object wordsFreq
		const valuesArr = Object.values(wordsFreq); // Returns an array of values
		const max = Math.max(...valuesArr); // Returns the highest value found in the array
		const finalResult = Object.keys(wordsFreq).filter((key) => wordsFreq[key] === max); // Get the word associated with the max value
		console.log(`The word/words that occur most frequently in the file is/are: ${finalResult}`);
	};
	reader.onerror = () => console.log(reader.error);
});
