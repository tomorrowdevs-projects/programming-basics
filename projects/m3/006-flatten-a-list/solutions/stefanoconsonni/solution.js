// The following recursive algorithm can be used to flatten a list named data:

//     If data is empty then Return the empty list
//     If the first element in data is a list then
//         Set l1 to the result of flattening the first element in data
//         Set l2 to the result of flattening all of the elements in data, except the first
//         Return the concatenation of l1 and l2
//     If the first element in data is not a list then
//         Set l1 to a list containing only the first element in data
//         Set l2 to the result of flattening all of the elements in data, except the first Return the concatenation of l1 and l2

// Write a function that implements the recursive flattening algorithm described previously.

// Your function will take one argument, which is the list to flatten, and it will return one result, which is the flattened list.

// Include a main program that demonstrates that your function successfully flattens the list shown earlier in this problem, as well as several others.

function flattenList(arr) {
	let l1, l2;
	// Base case
	if (arr.length === 0) {
		return arr;
	}
	// Recursive case 1
	if (Array.isArray(arr[0])) {
		l1 = flattenList(arr[0]);
		l2 = flattenList(arr.slice(1));
		return l1.concat(l2);
	}
	// Recursive case 2
	if (!Array.isArray(arr[0])) {
		l1 = [].concat(arr[0]);
		l2 = flattenList(arr.slice(1));
		return l1.concat(l2);
	}
}
// test 1
const inputArr1 = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];
console.log(flattenList(inputArr1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// test 2
const inputArr2 = ["a", ["b", "c"], ["d", ["e", ["f", "g"]]], [[["h"], "i"], ["l"]]];
console.log(flattenList(inputArr2)); // [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "l" ]
// test 3
const inputArr3 = ["Monday", ["Tuesday", ["Wednesday", "Thursday", "Friday"], "Saturday", "Sunday"]];
console.log(flattenList(inputArr3)); // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// test 4
const inputArr4 = [];
console.log(flattenList(inputArr4)); // []
