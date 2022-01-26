function getProperDivisors(num) {
	let divisors = [];
	if (num > 0) {
		for (let i = 1; i < num; i++) {
			if (num % i === 0) {
				divisors.push(i);
			}
		}
		return divisors;
	}
}

let inputNum = parseInt(prompt("Please enter a positive number:"));
alert(`The proper divisors for the number you entered are:\n${getProperDivisors(inputNum)}`);
