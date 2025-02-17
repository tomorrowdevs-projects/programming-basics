/*
LOGIC
- Create an array of vowels
- Create an input that gets a word from the user -> prompt()
- Create an array that contains all the letters from the entered word
- Create an if statement: 
- if the first element of the array is a consonant
    -> loop through the letters
        -> if the letter is a consonant, remove it from the current position and add it to the end of the array
        -> if the letter is a vowel, exit from the loop
    -> push "ay" to the array
- if the first element of the array is a vowel
    -> push "way" to the array
- Return the array joined as a string
- Run the function for all the entered word of the sentence
*/

const vowels = ["a", "e", "i", "o", "u"];

const enteredWords = prompt(
  "Enter a word or sentence to translate it to pig latin."
);
const enteredWordsArray = enteredWords.toLocaleLowerCase().split(" "); // split the input into different words
const enteredWordsArraySplitted = []; // this array will store arrays of words splitted into letters

enteredWordsArray.forEach((word) => {
  enteredWordsArraySplitted.push([...word]);
});

function translateToPigLatin(arrayOfLetters) {
  if (vowels.includes(arrayOfLetters[0])) {
    // If this is true, that means that the first letter of the word is a vowel
    arrayOfLetters.push("way");
    arrayOfLetters.toString();
  } else {
    // This is the case that the first letter is a consonant
    while (!vowels.includes(arrayOfLetters[0])) {
      const consonant = arrayOfLetters.shift();
      arrayOfLetters.push(consonant);
    }
    arrayOfLetters.push("ay");
  }
  console.log(arrayOfLetters.join(""));
}

enteredWordsArraySplitted.forEach((splittedWord) => {
  translateToPigLatin(splittedWord);
});
