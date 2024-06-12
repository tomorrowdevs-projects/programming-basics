// Function to remove outliers
function removeOutliers(list, n) {
    let newList;
    // Function to sort numbers in ascending order
    list.sort(function(a, b) { return a - b });
    newList = list.slice(n, -n);
    return newList;
} // end function --> Returns a new array without the first and last n numbers

// Function to verify if the user input is a number
function verifyNum(num) {
    // If the user does not enter a number --> Error Message!
    if (isNaN(num)) { 
        alert("This is not a number!"); 
        return false;
    } else {
        return true;
    }
} //end function

// MAIN PROGRAM
let num;
let list = [];
let n = 2; 

while (num !== 0) { 

    num = +prompt("Enter at least four number, enter 0 to stop");
    // Call the function to verify the user input
    if (verifyNum(num)) {
        // If the condition is true, add the numbers to the array from the bottom
        list.push(num); 
    }   

} // end While loop

// Delete the last item of the Array (that will be zero)
list.pop();
// Save the list of numbers entered by the user in a new variable as a string 
let originalList = list.join(" - ");

if (list.length < 4) {
alert("The list must contain at least four numbers!");
} else {
alert(`List with the outliers removed: \n${removeOutliers(list, n).join(" - ")} \n\nOriginal List: \n${originalList}`);
}