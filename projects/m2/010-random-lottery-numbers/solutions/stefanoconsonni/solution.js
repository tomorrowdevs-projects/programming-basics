let ticketNums = [];
while (ticketNums.length < 6) {
	let randomNum = Math.floor(Math.random() * 49) + 1;
	if (ticketNums.indexOf(randomNum) === -1) {
		ticketNums.push(randomNum);
		const removeDuplicates = (list) => [...new Set(list)];
		removeDuplicates(ticketNums);
	}
	ticketNums.sort((a, b) => a - b);
}

alert(`The six numbers on the lottery ticket are:\n${ticketNums}`);
