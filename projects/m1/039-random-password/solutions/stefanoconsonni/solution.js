function getPassword() {
	let asciiArray = [];
	for (let i = 33; i <= 126; i++) {
		let asciiChar = String.fromCharCode(i);
		asciiArray.push(asciiChar);
	}

	let password = [];
	let randomLength = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
	for (let i = 1; i <= randomLength; i++) {
		let randomChar = asciiArray[Math.floor(Math.random() * asciiArray.length)];
		password.push(randomChar);
	}
	return password.join("");
}

alert(getPassword());
