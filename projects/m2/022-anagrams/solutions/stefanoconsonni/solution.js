function isAnagram(str1, str2) {
	const len1 = str1.length;
	const len2 = str2.length;

	if (len1 !== len2) {
		return false;
	} else {
		const newStr1 = str1.split("").sort().join("");
		const newStr2 = str2.split("").sort().join("");
		if (newStr1 === newStr2) {
			return true;
		} else {
			return false;
		}
	}
}

const firstStr = prompt("This program requires the user to enter two strings.\nPlease enter the first string:").toLowerCase();
const secondStr = prompt("Please enter the second string:").toLowerCase();

//Main program
if (isAnagram(firstStr, secondStr)) {
	alert("The strings you entered are anagrams");
} else {
	alert("The strings you entered are NOT anagrams");
}
