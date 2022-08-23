/*
LOGIC
Create an array of all punctuation marks
-> commas, periods, question marks, hyphens, apostrophes, exclamation points, colons, and semicolons.
Create a prompt function that gets an input from the user. 
Split the string into an array - the words will be divided by the blank space. 
if a word starts or ends with a punctuation mark, remove it.
Check if the first or last digit of a String is a punctuation mark and remove it.
Return the cleaned array
*/

const punctuationMarks = [",", ".", "?", "-", "'", "!", ":", ";"];

const userInput = prompt("Enter your sentence.");

const userInputArray = userInput.split(" ");

const userInputCleanedArray = [];

userInputArray.forEach((word) => {
  for (punctuationMark of punctuationMarks) {
    if (word.startsWith(punctuationMark)) {
      word = word.substring(1, word.length);
    }
    if (word.endsWith(punctuationMark)) {
      word = word.substring(0, word.length - 1);
    }
  }
  userInputCleanedArray.push(word);
});

alert(userInputCleanedArray);
