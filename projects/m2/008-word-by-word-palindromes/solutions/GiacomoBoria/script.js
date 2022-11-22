/*A string is a palindrome if it is identical forward and backward. 
For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words.

Such palindromes examined the characters in a string, possibly ignoring spacing and punctuation marks, to see if the string was the same forwards and backwards. 
While palindromes are most commonly considered character by character, the notion of a palindrome can be extended to larger units. 
For example, while the sentence “Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is?” isn’t a character by character palindrome, it is a palindrome when examined a word at a time (and when capitalization and punctuation are ignored). 
Other examples of word by word palindromes include “Herb the sage eats sage, the herb” and “Information school graduate seeks graduate school information”.

Create a program that reads a string from the user. 
Your program should report whether or not the entered string is a word by word palindrome. 
Ignore spacing and punctuation when determining the result.*/

// function to clean the string from punctuation
function getWordsInString(string) {

    // Declare a regular expression with options ch I want to match "'" and "-" that are not at the end of the sentence
    const letterInString = /-\b|’\b|[a-z ]|[A-Z]/g;
  
    // ".match" returns an array with all the matches of the regex
    const tmpString = string.match(letterInString);
    let newString = ""
    
    // for loop to rebuild a string
    for(i = 0; i < tmpString.length; i++) {
      newString += tmpString[i];
    }
    // array words
    return newString.split(" ");
    
  }
// Function check reverse array if equals string(array)
function checkStringPalindrome(string) {

  // trasfrom string in clean array(function)
  const stringToArray = getWordsInString(string)
  // reverse array
  const reverseString = getWordsInString(string).reverse();
  
  return (stringToArray.toString().toLowerCase() === reverseString.toString().toLowerCase()) ? alert("Your word is palindrome") : alert("Sorry your word is not palindrome");

}

alert(checkStringPalindrome("Information school graduate seeks graduate school information"))