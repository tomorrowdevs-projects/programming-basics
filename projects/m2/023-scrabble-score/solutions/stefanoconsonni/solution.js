function getScore(str, obj) {
	let score = 0;

	for (let i = 0; i < str.length; i++) {
		for (const key in obj) {
			obj[key].forEach((char) => {
				if (char === str[i]) {
					score += parseInt(key);
				}
			});
		}
	}
	return score;
}

const lettersToPoints = {
	1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
	2: ["D", "G"],
	3: ["B", "C", "M", "P"],
	4: ["F", "H", "V", "W", "Y"],
	5: ["K"],
	8: ["J", "X"],
	10: ["Q", "Z"],
};

const wordInput = prompt("Please enter a word:").toUpperCase();
alert(`The Scrabble score for the word you entered is:  ${getScore(wordInput, lettersToPoints)}`);
