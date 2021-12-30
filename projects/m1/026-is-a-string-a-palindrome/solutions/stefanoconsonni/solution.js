function checkPalindrome(str) {
	const strLenght = str.length;

	for (let i = 0; i < strLenght / 2; i++) {
		if (str[i] != str[strLenght - 1 - i]) {
			return "It is NOT a palindrome";
		}
	}
	return "It is a palindrome";
}

const string = prompt("Enter a string:").toLowerCase();

const value = checkPalindrome(string);

alert(value);
