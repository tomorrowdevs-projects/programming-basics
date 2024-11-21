// MAIN PROGRAM
// Ask a string from user and turn all the letters into lowercase
let string = prompt("Enter a string!").toLowerCase();

// Call the function to determine if the string is or not a word by word palindrome
if (isPalindrome(string)) {
    alert("The entered string is a word by word palindrome!");
} else {
    alert("The entered string is not a word by word palindrome!"); 
}


function isPalindrome(string) {
    // Find any non-word character and replace with an empty string
    string = string.replace(/[^a-zA-Z0-9]/mg, " "); // Modifier: g = global (don't return after first match), m = multi line (match the begin/end of each line)
    
    // Split the string into a words list by the spaces  
    string = string.split(" "); // String --> Array
    
    // Remove empty strings from list with filter() method --> creates a new array with array elements that passes a test
    let cleanList = string.filter(function(value) { // The callbackFn tests each element of the array
    return value != ""; 
    })
    
    // Assign the value of the list (turning it into a string) to a new variable, with the punctuation marks removed
    let originalString = cleanList.join(" "); // Array --> String
    // Reverse the items of the list of words and assign its value (turning it into a string) to a new variable 
    let reverseString = cleanList.reverse().join(" "); // Reversed Array --> String
    
    // Compare the original string with the reversed one
    if (originalString == reverseString) {
        return true;
    } else {
        return false;
    }

} // end function 

/////////////////////  Optimized Function  //////////////////////

function isPalindrome(string) {

    // Remove the punctuation marks from the string entered by user, turn it into an array and removed che empty strings with filter()
    let cleanList = string.replace(/[^a-zA-Z0-9]/mg, " ").split(" ").filter(function(value) { 
    return value != ""; 
    })
    
    // Assign the value of the cleaned list (turning it into a string) to a new variable
    let originalString = cleanList.join(" "); // Array --> String
    
    // Create a new array (using concat) with reversed items and assign its value (turning it into a string) to a new variable 
    let reverseString = [].concat(cleanList).reverse().join(" "); // Reversed Array --> String
    
    // Compare the original string with the reversed one
    if (originalString === reverseString) {
        return true;
    } else {
        return false;
    }

} // end function 