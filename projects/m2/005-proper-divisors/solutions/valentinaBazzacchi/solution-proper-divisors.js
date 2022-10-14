// Function to verify if the user input is a positive integer
function verifyInteger(num) {
    
    // If the user enters a value other than a number --> Error Message!
    if (isNaN(num)) { 
        alert("This is not a number!"); 
        return false;
    
    // If the user enters a float --> Error Message!    
    } else if (!Number.isInteger(num)) {
        alert("This is not an integer!"); 
        return false;
    
    // If the user enters a negative number or zero --> Error Message! 
    } else if (num <= 0) {
        alert("This is not a positive number!"); 
        return false;
    
    } else {
        return true;
    }

} //end function

// Main function to find the proper divisors of a number 
function findProperDivisors(int) {
    let properDivisors = [];
    
    // Cycle n from 1 to the integer entered by the user (not included)
    for (let n = 1; n < int; n++) {
    
        if (int % n == 0) {
            properDivisors.unshift(n);
        } // end condition
    
    }// end For loop
    
    return properDivisors;

} // end function

//MAIN PROGRAM
let int = +prompt("Enter a positive integer");

if (verifyInteger(int)) {
    alert(`The list of proper divisors for this number is:\n${findProperDivisors(int).join("\n")} `);
}


