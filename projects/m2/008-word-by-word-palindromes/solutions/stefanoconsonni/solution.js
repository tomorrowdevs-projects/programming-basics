// Regex that selects the special characters --> /[^\w\s]/gi

function isPalindromePhrase(string) {
	let wordsList = string.replace(/[^\w\s]/gi, "").split(" ");

	if (wordsList.join(" ") === wordsList.reverse().join(" ")) {
		return true;
	} else {
		return false;
	}
}

const userString = prompt("Please enter a phrase:").toLowerCase();

// Main program
if (isPalindromePhrase(userString)) {
	alert("The phrase you entered is a word by word palindrome!");
} else {
	alert("The phrase you entered is NOT a word by word palindrome!");
}
