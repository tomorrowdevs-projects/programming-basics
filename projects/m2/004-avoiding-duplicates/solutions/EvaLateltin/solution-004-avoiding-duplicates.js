/*
LOGIC
Create an array that stores the entered values
Create a loop that asks the user to input a values -> do while
Break when the user input a blank line
Push the entered values to the array
Check if the array already contains the word; if yes, do not push it -> Array.includes() method; returns true or false
Alert the array -- Display each word in a separate line
*/

let enteredWord;
const enteredWordsArray = [];

do {
  enteredWord = prompt("Enter a word. Enter a blank space to finish.");
  if (enteredWord === " ") {
    // Exit condition
    break;
  } else if (!enteredWordsArray.includes(enteredWord)) {
    // Check if the array already includes the value
    enteredWordsArray.push(enteredWord);
  }
} while (enteredWord);

alert(enteredWordsArray.join("\r\n"));
