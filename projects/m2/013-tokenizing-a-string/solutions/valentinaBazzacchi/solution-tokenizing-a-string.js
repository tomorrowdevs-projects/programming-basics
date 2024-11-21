// MAIN PROGRAM
let expression = prompt("Enter a mathematical expression");

alert(tokenizing(expression).join("\n"));
console.log(expression, tokenizing(expression));

// FUNCTION
function tokenizing(expression) {
    let isNumber = /\d/; // --> Matches a digit (equivalent to [0-9])
    // Split a string into a list of every single character 
    let tokens = expression.split("").filter(function(elem){
    return elem != " "; // --> filter returns only elements other than an empty string
    })
    // Visit each elementes of the list with a loop
    for (let i = 0; i < tokens.length; i++) {
        // If the current element is a number, save its value in a new variable    
        if (isNumber.test(tokens[i])) {
            let currentNum = tokens[i];
            // Visit the following elements of the list until the first not-number
            let y = i + 1; // The loop starts from the element following the first number found 
            while (isNumber.test(tokens[y])) {
                // Add the following number to the string "currentNum"
                currentNum += tokens[y];
                y++; // Increment the iterator variable
            } // end While loop
            // The value of the current element (the first finded num) became the string of all consecutive numbers
            tokens[i] = currentNum;
            // Delete from the list all the elements with single number that follow the current element
            tokens.splice(i+1, tokens[i].length-1);
        } // end condition
    
    } // end For loop 
    return tokens; 
} // end function