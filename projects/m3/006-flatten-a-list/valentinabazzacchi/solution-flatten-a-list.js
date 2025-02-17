/* 
Flatten a list Algorithm (data = list that may contain nested lists)
function flattenList(data) --> return flattened list
Base Case:
if (data.length === 0)
	return [];
Recursive Case:
if (Array.isArray(data[0]))
	let l1 = result of flattening the first elem in data
	let l2 = result of flattening all of the elem in data except the first
	return l1 + l2
if (!Array.isArray(data[0])) 
	l1 = a list containing only the first elem in data
	l2 = result of flattening all the elem in data except the first
	return l1 + l2
*/

function flattenList(data) {
	let l1, l2;
	if (data.length === 0) {
		return [];
	}
	if (Array.isArray(data[0])) {
		l1 = flattenList(data[0]);
		l2 = flattenList(data.splice(1));
		return l1.concat(l2);
	}
	if (!Array.isArray(data[0])) {
		l1 = [].concat(data[0]);
		l2 = flattenList(data.splice(1));
		return l1.concat(l2);
	}
} // end function

const numbers = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];
console.log(flattenList(numbers)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const fruits = [["apple", "banana"], ["grape", ["melon", ["kiwi"]]], [[["pear"], "lemon"], ["orange"]]];
console.log(flattenList(fruits)); // [ 'apple', 'banana', 'grape', 'melon', 'kiwi', 'pear', 'lemon' 'orange' ]

const empty = [];
console.log(flattenList(empty)); // []

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(flattenList(days)); // [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]