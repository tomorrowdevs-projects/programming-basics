let num;
let numList = [];

while (num != 0) { // Loops until the user enters a zero

    num = +prompt("Enter an integer, enter 0 to stop");

        if (isNaN(num)) { 
            alert("This is not a number!") // If the user enters a character other than a number --> Error Message! 
        } else {
            numList.push(num); // Adds the numbers to the array from the bottom
        }

} // end While loop

numList.pop(); // Delete the last item of the Array (that will be zero)

numList.sort(function(a, b) { return a - b }); // Function to sort numbers in ascending order

// numList.sort( (a, b) => a - b ); ---> Shorter version with Arrow Function

alert(numList.join("\n")); // Turn the Array into a String with one value appearing on each line 