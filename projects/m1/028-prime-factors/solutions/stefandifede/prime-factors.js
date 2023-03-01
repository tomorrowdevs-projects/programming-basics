/** 
* @type {number} @inner
* user inserts a number
 */
let userInput = prompt("Insert a number to divide in prime factors");
let userInputDivided = userInput;
/**
 * @type {number} @inner
 * initializing the first prime factor 
 */
let n = 2;

/**
 * @type {number}
 * initializing an array to storage all prime factors
 */
let primeFactorsArr = [];

function primeFactors() {
while(n <= userInputDivided) {
    if (userInputDivided % n == 0) {
        userInputDivided = userInputDivided / n;
        primeFactorsArr.push(n);
        primeFactors();
    } else (n = n + 1, primeFactors())
}
}

primeFactors()

alert("The prime factors for " + userInput + " are: " + "\n" + primeFactorsArr.join('\r\n'))
