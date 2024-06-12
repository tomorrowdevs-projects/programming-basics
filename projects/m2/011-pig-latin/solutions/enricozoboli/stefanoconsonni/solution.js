function translate(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	let vowelIndex = 0;

	if (vowels.includes(str[0])) {
		return str + "way";
	} else {
		for (let char of str) {
			if (vowels.includes(char)) {
				vowelIndex = str.indexOf(char);
				break;
			}
		}
		return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
	}
}

let userText = prompt("Please enter the text you would like to translate:").toLowerCase();
alert(translate(userText));
