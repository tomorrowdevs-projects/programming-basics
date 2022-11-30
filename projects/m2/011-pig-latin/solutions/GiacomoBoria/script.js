/*Pig Latin is a language constructed by transforming English words. 
While the ori- gins of the language are unknown, it is mentioned in at least two documents from the nineteenth century, suggesting that it has existed for more than 100 years. 
The following rules are used to translate English into Pig Latin:

If the word begins with a consonant (includingy), then all letters at the beginning of the word, up to the first vowel (excluding y), are removed and then added to the end of the word, followed by ay. 
For example, computer becomes omputercay and think becomes inkthay.

If the word begins with a vowel (not including y), then way is added to the end of the word. For example, algorithm becomes algorithmway and office becomes officeway.

Write a program that reads a line of text from the user. 
Then your program should translate the line into Pig Latin and display the result. 
You may assume that the string entered by the user only contains lowercase letters and spaces.*/

// function for traslate single words in Pig Latin
function getPigLatinWords(words) {
    
    let newWords;
    const regexVowel = /[aeio]/i; // rule to search for vowels (y excluded)
    
    if (regexVowel.test(words[0])) {
      
      newWords = words += "way";
      
    } else {
      
      let count = 0; // for start slice newWords;
      let deleteLetter = "";
      
      for (let i = 0; regexVowel.test(words[i]) === false; i++) {

        count += 1; 
        deleteLetter += words[i];
        
    }
      
      newWords = words.slice(count) + deleteLetter + "ay";
      
    } 
    return newWords.toLowerCase();
  }
  
  // function for traslate Phrase in Pig Latin;
  function getPhrase(string) {
    
    const arrayString = string.split(" ");
    const pigLatinWords = [];
    
  for (let i = 0; i < arrayString.length; i++) {
    
     pigLatinWords.push(getPigLatinWords(arrayString[i])); 
    
    }
    return pigLatinWords.join(" ");
  }
  
  // main program
  const userInput = prompt("Please, enter a phrase: ");
  alert(`The phrase translated in "Pig Latin" is: ${getPhrase(userInput)}`);