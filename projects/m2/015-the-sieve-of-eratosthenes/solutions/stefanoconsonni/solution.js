function getPrimeNumbers(n) {
	const upperLimit = Math.sqrt(n);
	let array = [];
	let output = [];

	// Create an array with the numbers from 2 to (n - 1)
	for (let i = 0; i < n; i++) {
		array.push(true);
	}

	// Remove multiples of primes starting from 2, 3, 5,...
	for (let i = 2; i <= upperLimit; i++) {
		if (array[i]) {
			for (let j = i * i; j < n; j += i) {
				array[j] = false;
			}
		}
	}

	// All array[i] set to true are primes
	for (let i = 2; i < n; i++) {
		if (array[i]) {
			output.push(i);
		}
	}
	return output;
}

const limitInput = prompt("Please enter a limit number:\n(It must be a number between 2 and 1000000");
console.log(getPrimeNumbers(limitInput));
