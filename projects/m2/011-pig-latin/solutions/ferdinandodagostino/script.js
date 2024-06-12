// Pig Latin is a language constructed by transforming English words. While the ori- gins of the language are unknown, it is mentioned in at least two documents from the nineteenth century, suggesting that it has existed for more than 100 years. The following rules are used to translate English into Pig Latin:

// If the word begins with a consonant (includingy), then all letters at the beginning of the word, up to the first vowel (excluding y), are removed and then added to the end of the word, followed by ay. For example, computer becomes omputercay and think becomes inkthay.

// If the word begins with a vowel (not including y), then way is added to the end of the word. For example, algorithm becomes algorithmway and office becomes officeway.

// Write a program that reads a line of text from the user. Then your program should translate the line into Pig Latin and display the result. You may assume that the string entered by the user only contains lowercase letters and spaces.

const userString = prompt('Inserisci una o più stringhe');

const stringArray = userString.split(' ');

let vowels = /[aeiou]/gi;

const consonants = [
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'w',
  'x',
  'y',
];

const pigLatinList = [];

console.log(stringArray);

for (let index = 0; index < stringArray.length; index++) {
  const element = stringArray[index];
  const firstChar = element.charAt(0);

  // se la parola inizia con una consonante, trovo la prima occorrenza della vocale, estraggo la stringa, e la aggiungo alla fine della stringa
  if (consonants.includes(firstChar)) {
    const vowelPosition = element.search(vowels);

    const stringExtractToVowel = element.substring(0, vowelPosition);
    const stringExtractFromVowelToEnd = element.substring(vowelPosition);
    const pigLatinString =
      stringExtractFromVowelToEnd + stringExtractToVowel + 'ay';
    console.log(pigLatinString);
  } else {
    const secondPigLatinString = element + 'way';
    console.log(secondPigLatinString);
  }
}
