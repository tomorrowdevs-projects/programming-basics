function getNeededPresses(string, object) {
	let neededPresses = "";

	for (let i = 0; i < string.length; i++) {
		for (const key in object) {
			object[key].forEach((char, index) => {
				if (char === string[i]) {
					for (let j = 0; j <= index; j++) {
						neededPresses += key;
					}
				}
			});
		}
	}
	return neededPresses;
}

const keypad = {
	1: [".", ",", "?", "!", ":"],
	2: ["A", "B", "C"],
	3: ["D", "E", "F"],
	4: ["G", "H", "I"],
	5: ["J", "K", "L"],
	6: ["M", "N", "O"],
	7: ["P", "Q", "R", "S"],
	8: ["T", "U", "V"],
	9: ["W", "X", "Y", "Z"],
	0: [" "],
};

const inputString = prompt("Please enter a text:").toUpperCase();
alert(getNeededPresses(inputString, keypad));
