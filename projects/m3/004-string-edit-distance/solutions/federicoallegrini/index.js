function recursiveComputingEditDistance(s = "", t = "") {
	// Check for empty string
	s = s === null ? "" : s;
	t = t === null ? "" : t;
	let sLength = s.length;
	let tLength = t.length;
	// If one of the string is empty then the edit distance will be equal to the length of the other
	if (sLength === 0) {
		return tLength;
	}
	if (tLength === 0) {
		return sLength;
	}
	const sTrunc = s.slice(0, -1);
	const tTrunc = t.slice(0, -1);
	// If last letter isn't the same then we have to perform one of the three operations: insertion, deletion or replacing letter
	if (s[sLength - 1] !== t[tLength - 1]) {
		// Deletion
		const d1 = recursiveComputingEditDistance(sTrunc, t);
		// Insertion
		const d2 = recursiveComputingEditDistance(s, tTrunc);
		// Replacing letter
		const d3 = recursiveComputingEditDistance(sTrunc, tTrunc);
		return Math.min(d1, d2, d3) + 1;
	}
	// The edit distance of two string with the same last alphabet will be the same the distance of the two strings without the last alphabet
	return recursiveComputingEditDistance(sTrunc, tTrunc);
}

const s = prompt("Insert first string:");
const t = prompt("Insert second string:");
alert(recursiveComputingEditDistance(s, t));