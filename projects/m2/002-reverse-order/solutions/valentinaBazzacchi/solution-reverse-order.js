// Function to verify if the user input is an integer
function verifyInteger(num) {
    // If the user enters a character other than a number --> Error Message!
    if (isNaN(num)) { 
        alert("This is not a number!"); 
        return false;
    // If the user enters a float other than an integer --> Error Message!    
    } else if (!Number.isInteger(num)) {
        alert("This is not an integer!"); 
        return false;
    } else {
        return true;
    }
} //end function

// MAIN PROGRAM
let num;
let numList = [];

// Loops until the user enters a zero
while (num !== 0) { 

    num = +prompt("Enter an integer, enter 0 to stop");
    // Call the function to verify the user input
    if (verifyInteger(num)) {
        // If the condition is true, add the numbers to the array from the bottom
        numList.push(num); 
    }   

} // end While loop

// Delete the last item of the Array (that will be zero)
numList.pop(); 
// Reverse the order of the values in the array
numList.reverse(); 
// Turn the Array into a String with one value appearing on each line
alert(numList.join("\n"));  