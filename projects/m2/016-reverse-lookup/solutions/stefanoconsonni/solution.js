function reverseLookup(object, value) {
	let listOfMatches = [];

	for (let key in object) {
		if (object[key] === value) {
			listOfMatches.push(key);
		}
	}
	return listOfMatches;
}

//Main program
const studentsAge = {
	john: 18,
	carlos: 21,
	alice: 19,
	richard: 18,
	marta: 18,
	anna: 19,
	lucas: 21,
	pedro: 22,
	andrew: 18,
};

console.log(reverseLookup(studentsAge, 18));
console.log(reverseLookup(studentsAge, 22));
console.log(reverseLookup(studentsAge, 24));
