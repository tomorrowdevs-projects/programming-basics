const lettersAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "z"];
const lettersVocals = ["a", "e", "i", "o", "u"];
const lettersConsonants = ["b", "c", "d", "f", "g", "h", "l", "m", "n", "p", "q", "r", "s", "t", "y", "v", "z"];
var i;

let letteraUser = prompt(`Please insert a letter of the alphabet`)
//lettersAlphabet.length --> Returns the length of the string, which in this case is the number of elements in the array, which is 22.
for (i = 0; i < lettersAlphabet.length; i++) {
  if (letteraUser == lettersVocals[i]) {
    console.log(`The letter the user inserted is " ${letteraUser} "`);
    console.log(`The inserted letter is a Vocal " ${lettersVocals[i]} "`);
  } else if (letteraUser == lettersConsonants[i]) {
    console.log(`The letter the user inserted is " ${letteraUser} "`);
    console.log(`The inserted letter is a Consonant " ${lettersConsonants[i]} "`);
    if (letteraUser == "y") {
      console.log( `Sometimes " y " is a Vowel and sometimes " y " is a Consonant.`);
    }
  }
}
