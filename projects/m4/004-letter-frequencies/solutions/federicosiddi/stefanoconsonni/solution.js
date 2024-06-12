// One technique that can be used to help break some simple forms of encryption is frequency analysis.

// This analysis examines the encrypted text to determine which characters are most common.

// Then it tries to map the most common letters in English,
// such as E and T, to the most commonly occurring characters in the encrypted text.

// Write a program that initiates this process by determining and displaying the frequencies of all of the letters in a file.

// Ignore spaces, punctuation marks, and digits as you perform this analysis.

// Your program should be case insensitive, treating a and A as equivalent.

// The user will provide the name of the file to analyze as a command line argument.

// Your program should display a meaningful error message if the user provides the wrong number of command line arguments, or if the program is unable
// to open the file indicated by the user.

const fileInput = document.querySelector("#file-selector");

fileInput.addEventListener("input", () => {
	const file = fileInput.files[0];

	console.log(file.name);
	const reader = new FileReader();
	reader.readAsText(file);
	reader.onload = () => {
		const regex = /[A-Z]/g;
		// The match() method retrieves the result of matching a string against a regular expression. It returns an array that contains the matches.
		const letters = reader.result.toUpperCase().match(regex);
		console.log(letters);

		const lettersFreq = {};
		letters.forEach((key) => {
			lettersFreq[key] = lettersFreq[key] ? lettersFreq[key] + 1 : 1;
		});
		// Displays the frequencies of the found letters
		for (const key in lettersFreq) {
			console.log(`The letter ${key} appears ${lettersFreq[key]} times`);
		}
	};
	reader.onerror = () => console.log(reader.error);
});
