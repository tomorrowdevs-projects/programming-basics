
// i declare all my global variables.
alert(" --- Perfect Numbers --- \nAn integer, *n*, is said to be perfect when the sum of all of the proper divisors of *n* is equal to *n*.")
let n = parseInt(prompt("Please, enter a number to check if it's 'perfect': "))
let divisors = [];


// here i create a function to get the proper divisors from the entered number.
    function getDivisors (n) {

        for (i = 1; i < n; i++) {
            if (n % i === 0 ) divisors.push(i);
        }
    }  



// this function check if the sum of the created array is equal to the entered number, then output a different alert  based on the check. 
    function checkSum (array) {

        let sum = 0;

        for (let number of array) {
            sum += number;
        }

       if (sum === n) {
        return alert("The number is perfect!")

       } else {
        return alert("The number is not perfect!")
       }

    }


getDivisors(n);
checkSum(divisors);