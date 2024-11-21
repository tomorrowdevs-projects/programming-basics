// Function to delete duplicates in a word list
function deleteDoubles(list) {
    
    for (let i = 0; i < list.length; i++) {
    let currentWord = list[i];
        // Starting with the word after the current word, check if the current word equals one of the words following it
        for (let y = i+1; y < list.length; y++) {
            // if "current word" equals another word in the list, delete that word from the list
            if (currentWord == list[y]) {
                list.splice(y, 1); //--> Delete 1 item from index y 
                y--; //--> When a word is deleted, the next one takes the index of that one. Therefore the counter must restart from that position
            } // end if condition  
        
        } // end second For Loop
    
    } // end first For Loop
    // The function returns a new list without the doubles and the original position of each first occurrence is preserved
    return list;
} // end function

// MAIN PROGRAM
let word;
let list = [];

while (word != " ") {
    // Ask the user the words and push them into a list until a blank line is entered
    word = prompt("Enter a word, blank line to stop!");
    list.push(word);
} // End while loop   

list.pop(); //--> Delete the blank line

// Call the function and display the new list without double words
alert(`The new word list without the doubles is:\n${deleteDoubles(list).join("\n")}`);