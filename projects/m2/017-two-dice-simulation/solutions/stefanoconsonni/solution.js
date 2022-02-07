function rollTwoDice() {
	const resultDice1 = Math.floor(Math.random() * 6) + 1;
	const resultDice2 = Math.floor(Math.random() * 6) + 1;
	return resultDice1 + resultDice2;
}

const expectedPercent = {
	2: 2.78,
	3: 5.56,
	4: 8.33,
	5: 11.11,
	6: 13.89,
	7: 16.67,
	8: 13.89,
	9: 11.11,
	10: 8.33,
	11: 5.56,
	12: 2.78,
};

const countResults = {
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	11: 0,
	12: 0,
};

for (let i = 1; i <= 1000; i++) {
	const result = rollTwoDice();
	countResults[result] = countResults[result] + 1;
}

const simulatedPercent = {
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	11: 0,
	12: 0,
};

for (let key in countResults) {
	let freq = (countResults[key] * 100) / 1000;
	simulatedPercent[key] = freq;
}

const resultForTotal = JSON.stringify(countResults, null, 4);
const resultForSimPercent = JSON.stringify(simulatedPercent, null, 4);
const resultForExpPercent = JSON.stringify(expectedPercent, null, 4);
console.log(`Total:\n${resultForTotal}\n\nSimulated percent %:\n${resultForSimPercent}\n\nExpected percent %:\n${resultForExpPercent}`);
