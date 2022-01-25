function findPerfectNumbers(int) {
    let sum = 0;
    // Divide int for all the numbers between 1 and int/2 --> an integer will never be divisible by an integer greater than its half!
    for (let n = 1; n <= int/2; n++) { 
        // If n is a proper divisor of int, add it to the variable sum
        if (int % n == 0) {
            sum += n;
        } 
    }// end For loop
    // If sum is equal to int, int is a perfect number!
    if (sum == int) {
        return true;
    } else {
        return false;
    }
} // end function

// MAIN PROGRAM
let int;
let perfectNumbers = [];
// Search the perfect number between 1 and 10,000 
for (int = 1; int <= 10000; int++) {
    // If int is a perfect number add it into a list
    if (findPerfectNumbers(int)) {
        perfectNumbers.push(int); 
    } 

} // end for loop
// Display the list of perfect numbers as a string with one number for each line
alert(`The perfect numbers between 1 and 10,000 are:\n${perfectNumbers.join("\n")}`);