function reduceMeasures(num, unit) {
	const teaspPerTbsp = 3;
	const teaspPerCup = 48;
	let numOfTeasp;
	let numOfTbsp;
	let numOfCups;

	if (num < 0) {
		alert("The input you entered is NOT valid. Please reload the page.");
	} else if (unit == "teaspoon" || unit == "teaspoons") {
		numOfTeasp = num;
	} else if (unit == "tablespoon" || unit == "tablespoons") {
		numOfTeasp = num * teaspPerTbsp;
	} else if (unit == "cup" || unit == "cups") {
		numOfTeasp = num * teaspPerCup;
	}

	numOfCups = Math.floor(numOfTeasp / teaspPerCup);
	numOfTeasp = numOfTeasp - numOfCups * teaspPerCup;
	numOfTbsp = Math.floor(numOfTeasp / teaspPerTbsp);
	numOfTeasp = numOfTeasp - numOfTbsp * teaspPerTbsp;

	let result = "";
	if (numOfCups > 0) {
		result = result + numOfCups + " cups ";
	}
	if (numOfTbsp > 0) {
		result = result + numOfTbsp + " tablespoons ";
	}
	if (numOfTeasp > 0) {
		result = result + numOfTeasp + " teaspoons";
	}
	if (result == "") {
		result = "0 teaspoons";
	}
	return result;
}

const numInput = parseInt(prompt("Please enter the quantity:\n(as a number)"));
const unitInput = prompt("Please enter the chosen unit:\n(cup, tablespoon or teaspoon)").toLowerCase();

alert(reduceMeasures(numInput, unitInput));
