/*A string is a palindrome if it is identical forward and backward. 
For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words.
Write a program that reads a string from the user and uses a loop to determine whether or not it is a palindrome. 
Display the result, including a meaningful output message.
Aibohphobia is the extreme or irrational fear of palindromes. 
This word was constructed by prepending the -phobia suffix with it’s reverse, resulting in a palindrome. 
Ailihphilia is the fondness for or love of palindromes. 
It was constructed in the same manner from the -philia suffix.*/

const userWordsInput = prompt(`Type a word and see if it is palindromic`).toLowerCase();
// Transform the input into an array for comparison with reverseWords
const arrayWords = userWordsInput.split("")
const reverseWords = arrayWords.reverse();
let check = 0;

for (i = 0; i < userWordsInput.length; i++) {
  if (userWordsInput[i] === reverseWords[i]) {
    check += 1;
  } 
}
// If check equals the length of userWordsInput then the word is palindrome
(check === userWordsInput.length) ? alert("Your word is palindrome") : alert("Sorry your word is not palindrome");
