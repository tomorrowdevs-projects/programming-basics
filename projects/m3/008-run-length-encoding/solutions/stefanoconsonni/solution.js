// Write a recursive function that implements the run-length compression technique described in Run-Lenght Decoding Exercise.
// Your function will take a list or a string as its only argument. It should return the run-length compressed list as its only result.

function compress(arr) {
	// Base case
	if (arr.length === 0) {
		return arr;
	} else {
		// Recursive case
		let counter = 1;
		for (const el of arr) {
			if (counter < arr.length && el === arr[counter]) {
				counter += 1;
			} else {
				return [].concat(el, counter, compress(arr.slice(counter)));
			}
		}
	}
}

const inputArr = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "A", "A", "A", "A", "A", "A", "B"];
console.log(compress(inputArr));
