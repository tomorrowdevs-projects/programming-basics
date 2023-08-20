
// i set the global variables, p = 2, and limit to set the max value.
let p = 2;
let limit = prompt("Please, enter a max value to find all the prime numbers between 2 and that number: ");


//then i create a function that iterates over an array created from the min and max values to find all prime numbers and mark them as "true". if the number is prime will be pushed into the final array, otherwise will be pushed "0", to mark it down.
function getPrimeNumbers (start, limit) {

let isPrime = [];


	for (let i = start; i < limit; i += 1) {
		if (i != 0 && i != 1) {
			isPrime.push(true);
		}
		else {
			isPrime.push(false);
		}
	}


        for (let i = start; i < limit; i += 1) {
            if (isPrime[i]) {
                for (let j = i + i; j < limit; j += i) {
                    isPrime[j] = false;
                }
            }
        }

let primes = [];


        for (let i = start; i <= limit; i += 1) {
            if (isPrime[i]) {
                primes.push(i);
            } else {
        primes.push(0);
        }
        }

return primes.join(", ");
}


alert(getPrimeNumbers(p, limit));