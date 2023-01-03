const lettersOfAlphabet = [
  "A", 
  "B", 
  "C", 
  "D", 
  "E", 
  "F", 
  "G", 
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V", 
  "W", 
  "X", 
  "Y", 
  "Z"
]

const word = prompt("Enter the message").toUpperCase().split("");
const amountOfDisplacement = parseInt(prompt("Enter the amount of displacement"));
let newWord = "";

for(let i = 0; i < word.length; i++){

  // I find the position corresponding to the letter
  const pos = lettersOfAlphabet.indexOf(word[i]);

  // To the position I add the value to be scaled entered by the user
  let indexArray = pos + amountOfDisplacement;

  if(indexArray > lettersOfAlphabet.length - 1){
    /*
      If the calculated index is greater than the index of the last element of the lettersOfAlphabet array.
      I calculate the position with the following operation:
      (current position - array length) - 1 
    */
    indexArray = (indexArray - (lettersOfAlphabet.length - 1)) - 1;
  } else if (indexArray < 0){
    /*
      otherwise
      (current position - (- array length)) + 1
    */
    indexArray = (indexArray - (-(lettersOfAlphabet.length - 1))) + 1;
  }

  // Saves for each iteration the result in the variable
  newWord += lettersOfAlphabet[indexArray];

}

alert(newWord);