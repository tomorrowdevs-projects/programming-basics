// Create the object "keypad" --> key = number : value = array of chars
const keypad = {
    1: [".", ",", "?", "!", ":"],
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"],
    0: [" "],
};
// Function to convert a text-string to a string of numbers to press
function keysToPress(str, obj) {
    // Initialize an empty string that will contain all the numbers/keys to press
    let keysPressed = "";
    // Loop trougth each string's char
    for (let i = 0; i < str.length; i++) {
        // Assign to a new variable the current char visited
        let currentChar = str[i].toUpperCase(); // --> Change the char to uppercase
        // Loop trougth the properties of the obj
        for (let num in obj) {
            // Loop trougth the array corresponding to the visited property
            obj[num].forEach(function(char, index) {
                // If the current char of the message is equal to the visited char of the array in obj...
                if (currentChar === char) {
                    // Repeat for a number of times equal to the char's index + 1
                    for (let y = 0; y < index + 1; y++) {
                        // Add the current key's num (property of obj) to the string "keyPressed" 
                        keysPressed += num;
                    } // end second for loop
                } // end if
            }) // end forEach
        } // end for..in
    } // end first for loop
    return keysPressed;
} // end function

// MAIN PROGRAM 
let message = prompt("Enter your message");

alert(`The keys you need to press to write this message are:
${keysToPress(message, keypad)}`);