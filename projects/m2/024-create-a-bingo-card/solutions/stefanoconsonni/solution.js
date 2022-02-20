function generateArrOfNums(arr) {
	// Shuffle the elements in the array
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	// Return the first five numbers of the shuffled array
	return arr.slice(0, 5);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arr2 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const arr3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const arr4 = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const arr5 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

const card = {
	B: generateArrOfNums(arr1),
	I: generateArrOfNums(arr2),
	N: generateArrOfNums(arr3),
	G: generateArrOfNums(arr4),
	O: generateArrOfNums(arr5),
};

// Main program
let string = "";
for (let key in card) {
	string += key + "           ";
}
string += "\n\n";

for (let i = 0; i < 5; i++) {
	for (let key in card) {
		string += card[key][i] + "         ";
	}
	string += "\n";
}
alert(string);
