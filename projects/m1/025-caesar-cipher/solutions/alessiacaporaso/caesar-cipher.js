// generate alphabet
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
// enter user message
const userMessage = prompt("Enter the message to encode / decode:").toUpperCase();
const encodes = parseInt(prompt("Enter the message encodes"));
// divide message in character
const splitMessage = userMessage.split("");
//console.log(splitMessage)
// declared variable for loop
let characterPosition;
let punctuationPosition;
let newPosition;
let changePosition;
let newMessage = "";
// find the position character in the alphabet, support negative,positive character and punctuation marks
for (let i = 0; i < splitMessage.length; i++) {
  characterPosition = alphabet.indexOf(splitMessage[i]);
  //console.log('character position: ' + characterPosition)
  newPosition = characterPosition + encodes;
  //console.log('new position: ' + newPosition)
  if (characterPosition == -1) {
    newMessage += splitMessage[i];
  } else if (newPosition > 25) {
    changePosition = alphabet[newPosition - alphabet.length];
    newMessage += changePosition;
  } else if (newPosition < 0) {
    changePosition = alphabet[alphabet.length + newPosition];
    newMessage += changePosition;
  } else {
    changePosition = alphabet[newPosition];
    newMessage += changePosition;
  }
  //console.log('change position '+ changePosition)
}
alert(newMessage);
