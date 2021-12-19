//Per la risoluzione dell'esercizio posso procedere sia con un "if statement" che con uno "switch statement"
//Procedo alla risoluzione del problema utilizzando la prima opzione (if statement)

const chosenLetter = prompt("Please enter a letter of the alphabet:").toLowerCase();

if (chosenLetter == "") {
	alert("Please reload the page and enter a letter of the alphabet.");
} else if (chosenLetter == "a") {
	alert("The entered letter is a vowel.");
} else if (chosenLetter == "e") {
	alert("The entered letter is a vowel.");
} else if (chosenLetter == "i") {
	alert("The entered letter is a vowel.");
} else if (chosenLetter == "o") {
	alert("The entered letter is a vowel.");
} else if (chosenLetter == "u") {
	alert("The entered letter is a vowel.");
} else if (chosenLetter == "y") {
	alert("The letter y is sometimes a vowel, sometimes a consonant.");
} else {
	alert("The entered letter is a consonant.");
}
