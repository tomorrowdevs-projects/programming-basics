function computeEditDistance(s, t) {
	let d1, d2, d3, cost;

	if (s.length === 0) {
		return t.length;
	} else if (t.length === 0) {
		return s.length;
	} else {
		cost = 0;

		if (s[s.length - 1] !== t[t.length - 1]) {
			cost = 1;
		}

		d1 = computeEditDistance(s.slice(0, -1), t) + 1;
		d2 = computeEditDistance(s, t.slice(0, -1)) + 1;
		d3 = computeEditDistance(s.slice(0, -1), t.slice(0, -1)) + cost;

		return Math.min(d1, d2, d3);
	}

} // end function

// Main program
let str1 = prompt("Enter a string");
let str2 = prompt("Enter a second string");
let distance = (computeEditDistance(str1, str2));
alert(`The edit distance between ${str1} and ${str2} is ${distance}`);