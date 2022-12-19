/*Two words are anagrams if they contain all of the same letters, but in a different order.

For example, “evil” and “live” are anagrams because each contains one “e”, one “i”, one “l”, and one “v”.

Create a program that reads two strings from the user, determines whether or not they are anagrams, and reports the result.*/

function getAnagrams(wordOne, wordTwo) {
  
    const tmpWordOne = wordOne.toLowerCase().split("").sort().join("");
    const tmpWordTwo = wordTwo.toLowerCase().split("").sort().join("");
  
    if (tmpWordOne === tmpWordTwo) {
    return "Your words are anagrams!"
  } else {
    return "Your words aren't anagrams!"
  }
    
  }
  
  const userInputOne = prompt("Enter the first word");
  const userInputTwo = prompt("Enter the second word");
  
  alert(getAnagrams(userInputOne, userInputTwo))