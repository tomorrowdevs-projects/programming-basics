function isPerfectNum(num) {
	let divisors = [];
	if (num > 0) {
		for (let i = 1; i < num; i++) {
			if (num % i === 0) {
				divisors.push(i);
			}
		}
	}
	const sumOfDivisors = divisors.reduce((prevValue, currValue) => prevValue + currValue, 0);

	if (sumOfDivisors === num) {
		return true;
	} else {
		return false;
	}
}

// Main Program
for (let i = 1; i <= 10000; i++) {
	if (isPerfectNum(i)) {
		console.log(i);
	}
}
