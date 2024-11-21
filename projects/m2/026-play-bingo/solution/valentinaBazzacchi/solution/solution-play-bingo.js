// Function to randomize the order of the elements of a list 
function shuffle(list) {
	for (let i = 0; i < list.length; i++) {
		let randomIndex = Math.floor(Math.random() * (75 - i)) + i;
		let currentItem = list[i];
		list[i] = list[randomIndex];
		list[randomIndex] = currentItem;
	} // end For loop
	return list;
}// end function

// Function to generate a list of all of the valid Bingo calls (B1 through O75)
function createCallsList() {
let list = [];
for (i = 1; i <= 75; i++) {
	if (i >= 1 && i <= 15) {
		list.push("B" + i);
	} else if (i > 15 && i <= 30) {
		list.push("I" + i);
	} else if (i > 30 && i <= 45) {
		list.push("N" + i);
	} else if (i > 45 && i <= 60) {
		list.push("G" + i);
	} else if (i > 60 && i <= 75) {
		list.push("O" + i);
	}	// end condition
	} // end for loop
return list;
}

// Function to simulate calling numbers and replacing them with a 0 in a Bingo Card
function calculateCalls(obj, list) {
	for (let i = 0; i < list.length; i++) {
		let num = list[i].slice(1);
		for (let y = 0; y < 5; y++) {
			for (let key in obj) {
				if (+num === obj[key][y]) {
					obj[key][y] = 0;
				}
			} // end for...in
		} // end second for loop
		if (checkHorizontalWinning(obj)) return i + 1;
		else if (checkVerticalWinning(obj)) return i + 1;
		else if (checkDiagonalWinning(obj)) return i + 1;
	} // end first for loop 			
} // end function

// MAIN PROGRAM --- ! Need to import functions from ex. 024 e ex. 025: 
// createRandomNum() - createBingoCard() - checkHorizontalWinning() - checkVerticalWinning() - checkDiagonalWinning()

// Generate a list of all of the valid Bingo calls
let callsList = createCallsList();

// Inizialize the variables for calls counts
let totalWinCallsList = [];
let totalWinCalls = 0;

// let cloneBingoCard = Object.assign({}, bingoCard);

// Simulate 1,000 games
for (i = 0; i < 1000; i++) {
	// Generate a Bingo Card
	let bingoCard = createBingoCard();
	// Generate a random list of all the valid Bingo calls 
	let shuffleCallsList = shuffle(callsList);
	// Calculate the number of calls required for a card to be a winner
	let oneWinCalls = calculateCalls(bingoCard, shuffleCallsList);
	// Collect the number of calls for each single game in a list
	totalWinCallsList.push(oneWinCalls);
	// Add up the number of calls of all 1000 games
	totalWinCalls += oneWinCalls;
} // end for loop

// Sort the number of calls of each single game in ascending order
totalWinCallsList.sort(function (a, b) { return a - b; });

// Report the minimum, maximum and average number of calls 
// that must be made before the card wins... 
let minNumCalls = totalWinCallsList[0];
let maxNumCalls = totalWinCallsList[totalWinCallsList.length - 1];
let average = (totalWinCalls / totalWinCallsList.length).toFixed(1);

// Display the results
console.log("Total calls for 1000 games: " + totalWinCalls);
console.log("Minimum numbers of Calls: " + minNumCalls);
console.log("Maximum numbers of Calls: " + maxNumCalls);
console.log("Average numbers of Calls: " + average);