/*
LOGIC
Input a string from the user and store it in a value.
Use a function to clean the entered string from punctuation marks and that returns an array. 
Write a loop that compares the first and last element of the array
-> if an iteration is true, continue the loop
-> if an iteration is false, break the loop
Return true or false
*/

// Use the function from the previous exercise to clean the entered sentence from punctuation marks

function cleanInput(userInput) {
  const punctuationMarks = [",", ".", "?", "-", "'", "!", ":", ";"];
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
    userInputCleanedArray.push(word.toLowerCase()); // the word pushed to the array must the lowercase, in order to allow the comparaison.
  });
  return userInputCleanedArray;
}

function checkPalindrome() {
  const userInputCleanedArray = cleanInput(prompt("Enter your sentence.")); // Call the previous function
  for (let i = 0; i < userInputCleanedArray.length / 2; i++) {
    // Loop through the words; we compare the first half of the array to the second half (that's the reason for this condition: "i < userInputCleanedArray.length / 2" )
    if (
      userInputCleanedArray[i] ===
      userInputCleanedArray[userInputCleanedArray.length - 1 - i]
    ) {
      continue; // If the comparaison is true, continue the loop
    } else {
      return false; // If a comparaison is false, exit from the loop since this sentence is not palindrome
    }
  }
  return true;
}

alert(checkPalindrome()); // alert the result
