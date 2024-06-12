let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newAlphabet = "";

let message = prompt("Please enter the message to encode:").toLowerCase();
let shift = parseInt(prompt("Please enter the the shift amount:"));

function shiftLetters(n) {
	for (let i = 0; i < alphabet.length; i++) {
		let offset = (i + n) % alphabet.length;
		newAlphabet += alphabet[offset];
	}
}
shiftLetters(shift);

function encode(text) {
	let result = "";

	for (let i = 0; i < text.length; i++) {
		let index = alphabet.indexOf(text[i]);
		result += newAlphabet[index];
	}
	alert(result);
}

encode(message);
