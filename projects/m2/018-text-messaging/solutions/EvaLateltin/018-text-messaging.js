/*
LOGIC
Use the prompt function to get a sentence from the user.
Transform the sentence to Upper Case.

Create an object that: 
- As the key, it stores the number value
- As the value, it stores an array with the corresponding letters

Use a modified version of the reverseLookup function: find in the object the value that includes the letter and return the corresponding key.

For each letter of the entered sentence, repeat the reverseLookup function n+1 times, where n is the index of the letter in the array.
*/

const sentence = prompt("Enter a sentence").toUpperCase().split("");

const translator = {
  1: [".", ",", "?", "!", ":"],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
  0: [" "],
};

function reverseLookup(object, value) {
  return Object.keys(object).find((key) => object[key].includes(value));
}

const translatedInNumbers = sentence
  .map((letter) => {
    const position = reverseLookup(translator, letter);
    return position.repeat(translator[position].indexOf(letter) + 1);
  })
  .join("");

console.log(translatedInNumbers);
