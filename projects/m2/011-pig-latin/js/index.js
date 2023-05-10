/* 

Pig Latin is a language constructed by transforming English words. While the ori- gins of the language are unknown, it is mentioned in at least two documents from the nineteenth century, suggesting that it has existed for more than 100 years. The
following rules are used to translate English into Pig Latin:

- If the word begins with a consonant (includingy), then all letters at the beginning of the word, up to the first vowel (excluding y), are removed and then added to the end of the word, followed by ay. For example, *computer* becomes *omputercay* and *think* becomes *inkthay*.

- If the word begins with a vowel (not including y), then way is added to the end of the word. For example, algorithm becomes *algorithmway* and office becomes *officeway*.

Write a program that reads a line of text from the user. 
Then your program should translate the line into Pig Latin and display the result. 
You may assume that the string entered by the user only contains lowercase letters and spaces.

*/

const word = prompt("Enter a word");
const result = transformsWord(word);
alert(result);

function transformsWord(wordUser){

  const vowel = ["a", "e", "i", "o", "u"];
  let indexvowel = 0;
  let findvowel = false;

  if(vowel.includes(wordUser[0])){
    return wordUser + "way";
  }

  for(let i=0; i < wordUser.length; i++){

    if(vowel.includes(wordUser[i]) && !findvowel){
      indexvowel = i;
      const beginning = wordUser.slice(0, indexvowel);
      const ending = wordUser.slice(indexvowel);
      return ending + beginning + "ay";
    } 

  }

}