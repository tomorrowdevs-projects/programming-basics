let randomNum = Math.floor(Math.random() * 100) + 1;
let maxValue = randomNum;
let updates = 0;

function generateNums() {
	for (let i = 1; i <= 99; i++) {
		let newRandomNum = Math.floor(Math.random() * 100) + 1;
		console.log(newRandomNum);
		if (newRandomNum > maxValue) {
			maxValue = newRandomNum;
			updates++;
			console.log("Update!");
		}
	}
	console.log(`The maximum value encountered is ${maxValue}\nThe maximum value was updated ${updates} times`);
}

generateNums();
