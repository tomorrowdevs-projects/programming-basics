const prompt = require("prompt-sync")();
let wordsArray = [];

const onlyWords = inputString => {
  if (inputString && typeof inputString === "string") {
    const regex = /[^\p{L}'\s]+/gu; 
    const cleanedString = inputString.toLowerCase().replace(regex, '');
    return cleanedString.split(" ");
  } else {
    return [];
  }
};

const toPigLatin = word => {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    return word.slice(1) + word[0] + "ay";
  }
};

const newString = prompt("Inserisci una stringa di più parole");
if (newString) {
  wordsArray = onlyWords(newString);
  wordsArray = wordsArray.map(word => toPigLatin(word));
  
  let finalSentence = wordsArray.join(" ");
  finalSentence = finalSentence.charAt(0).toUpperCase() + finalSentence.slice(1) + ".";
  
  console.log(finalSentence);
} else {
  console.log("Stringa di input non valida");
}