/*
LOGIC
Create a prompt function that gets an input from the user and store it in a variable
Create an array that will store the tokens
Create a function that: 
- get a string as a parameter
- create a temporary string of numbers
- loop through all characters of the string:
- if a character is a number, add it to the temporary string and keep the loop going. 
In the following iterations, if the following characters are numbers, they will be added to this temporary string as well.
When the number will end, the temporary number will be pushed to the array. 
- if a character is not an empty space, it will be an operator or a parenthesis and it will be pushed to the array.  
Once the loop is concluded, alert the array of tokens.
*/

const enteredString = prompt(
  "Enter a mathematical expression to be tokenized."
);
const tokenArray = [];

function tokenizeString(string) {
  let temporaryString = "";

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string.charAt(i)))) {
      // if the character is a number
      while (!isNaN(parseInt(string.charAt(i)))) {
        temporaryString += string.charAt(i);
        i++;
      }
      tokenArray.push(temporaryString);
      temporaryString = ""; // Reset the temporaryString
      i--; // When the while loop ends, I want to take a step back, otherwise the character right after the last number will not be considered.
    } else if (string.charAt(i) !== " ") {
      // Push the other characters if they are not a blank space
      tokenArray.push(string.charAt(i));
    }
  }
  console.log(tokenArray);
}

tokenizeString(enteredString);
