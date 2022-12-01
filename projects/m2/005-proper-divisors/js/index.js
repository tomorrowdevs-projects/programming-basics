
let n = parseInt(prompt("--- List of Proper Divisors --- \nPlease, enter a number too see the list of its proper divisors: "));
let divisors = [];


    function getDivisors (n) {

        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                divisors.push(i);
            }
        }
    }


getDivisors(n);
alert("Here are all the proper divisors of " + n + ":\n" + divisors.join(", ") + "\nThe number of proper divisors: \n" + divisors.length);