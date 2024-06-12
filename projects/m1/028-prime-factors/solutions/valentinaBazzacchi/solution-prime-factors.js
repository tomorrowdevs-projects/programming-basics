let n = prompt("Enter an integer (2 or greater) for prime factorization");
let factor = 2;
let primeNumbers = [];
let onlyNumbers = /^[0-9]+$/;
   
if (n < 2 || !onlyNumbers.test(n)) {
alert("Error! This is not factorizable!"); 
} else {
    while (factor <= n) {
        if (n % factor == 0) {
        n = Math.floor(n / factor);
        primeNumbers.push(factor);
        } else {
        factor += 1;
        }
    } // end while loop
alert(primeNumbers.join("\n"));
} // end first else