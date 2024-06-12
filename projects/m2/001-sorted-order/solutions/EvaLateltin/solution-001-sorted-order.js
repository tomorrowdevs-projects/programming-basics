/* LOGIC
Create an array
Create a function that gets a value from the user -> parsInt
Create a loop that keeps asking the value until the user input 0 ---  Do not add 0 to the array!
Break the loop when the user inputs 0
Push the value to the array
Sort the array
Alert the array
*/

const unorderedNumbers = [];
const standardText = "Enter a number. Enter 0 to finish.";
const errorText = "The input must be a NUMBER. Enter 0 to finish.";

function getInput(text) {
  const number = parseInt(prompt(text));
  if (number === 0) {
    // Condition to end the function
    return;
  } else if (Object.is(number, NaN)) {
    // Handle invalid input
    getInput(errorText); // Change the prompt text to help the user to use the function correctly
  } else if (number !== 0) {
    unorderedNumbers.push(number);
    getInput(standardText);
  }
}

getInput(standardText); // Initialize our function
const orderedNumbers = unorderedNumbers.sort((a, b) => a - b); // Sort the list of numbers
alert(orderedNumbers.join("\r\n")); // Alert the ordered numbers, each in a separate line
