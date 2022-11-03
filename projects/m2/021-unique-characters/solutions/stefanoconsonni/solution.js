function getUniqueChars(str) {
	let uniqueChars = "";
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (!uniqueChars.includes(str[i])) {
			uniqueChars += str[i];
			count++;
		}
	}
	return count;
}

const userString = prompt("Please enter a string:");
alert(`The string you entered has ${getUniqueChars(userString)} unique characters`);
