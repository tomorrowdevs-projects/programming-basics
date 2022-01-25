/////////////////////////////// FIRST SOLUTION ///////////////////////////////////////////

// MAIN PROGRAM: read a string from the user and display all the words in the string with the punctuation marks removed
let marks = [",", ".", "?", "-", "_", " ’ ", " ' ", "!", ":", ";"];
let string = prompt("Enter a string with punctuation marks");
console.log(removePunctuationMarks(string));
alert(removePunctuationMarks(string).join("\n"));

// Function to remove punctuation marks in a string except those that appear in the middle of a word
function removePunctuationMarks(string) {
    // For each item of the "marks" list, assign its value to a new variable
    for(let i = 0; i < marks.length; i++) {
    let currentMark = marks[i];
        
        for(let y = 0; y < string.length; y++) {
            // Match the current mark with all the characters of the string --> Remove if is equal
            if(currentMark == string.charAt(y)) {
                let newString = string.slice(0, y) + string.slice(y + 1);
                string = newString;
            }

        }// end second for loop
    } // end first for loop

    // Turn string into a list of words
    string = string.split(" ");
    // Delete empty strings from the list 
    string.forEach(function(word) {

        if (word == "") {
        string.splice(string.indexOf(word), 1);
        }
    
    }) // end forEach loop
    return string;
} // end function

/////////////////////////////// SECOND SOLUTION ///////////////////////////////////////////

// MAIN PROGRAM: read a string from the user and display all the words in the string with the punctuation marks removed
let marks = [",", ".", "?", "-", "_", " ’ ", " ' ", "!", ":", ";"];
let string = prompt("Enter a string with punctuation marks?");

console.log(removePunctuationMarks(string));
alert(removePunctuationMarks(string).join("\n"));

// Function to remove punctuation marks in a string except those that appear in the middle of a word 
function removePunctuationMarks(string) {
        // For each item of the "marks" list assign its value to a new variable
        marks.forEach(function(item) { 
        let currentMark = item;            
        
            for(let i = 0; i < string.length; i++) {
            
                if(currentMark == string.charAt(i)) {
                    let newString = string.slice(0, i) + string.slice(i + 1);
                    string = newString;
                }
            
            }// end for loop
        }) // end forEach loop
    
    // Turn string into a list of words
    string = string.split(" ");
    // Delete empty strings from the list  
    string.forEach(function(word) { 
    
        if (word == "") {
        string.splice(string.indexOf(word), 1);
        }
    
    }) // end forEach loop
    
    return string;

}// end function

/////////////////////////////// THIRD SOLUTION ///////////////////////////////////////////

// MAIN PROGRAM
let marks = [",", ".", "?", "-", "_", " ’ ", " ' ", "!", ":", ";"];
let str = prompt("Enter a string");

// For each item in the "marks" list ... remove it from the string by running the function "removeItem"
marks.forEach(removeItem); // --> Callback function

// Split the string with the punctuation marks removed into a list of words
let wordsList = str.split(" ");
// Delete the empty strings from the list  
wordsList.forEach(function(word) {
    // For each item in the "words" list...if item equals an empty string, delete it (from its index for 1 item)
    if (word == "") {
        wordsList.splice(wordsList.indexOf(word), 1);
    }
}) // end forEach loop

alert(wordsList.join("\n"));
console.log(wordsList);

// Function to remove an item from a string
function removeItem(item) {
    
    let newString = "";
    let index = -1;

    while ((index = str.indexOf(item, index + 1)) != -1) {
        
        if (index >= 0) {
            newString = str.slice(0, index) + str.slice(index + 1);
            str = newString;
        } // end condition
    } // end while loop
}// end function