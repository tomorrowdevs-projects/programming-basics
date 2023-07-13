// generate alphabet
const alpha = Array.from(Array(26)).map((e, i) => i +  65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
// enter user message
const userMessage = prompt("Enter the message to encode / decode:").toUpperCase();
const encodes = parseInt(prompt("Enter the message encodes"));
// divide message in character
const splitMessage = userMessage.split("");
let message = "";
// find the position in the alphabet
for (const character of splitMessage) {
  const positionCharacter = alphabet.indexOf(character);
  let calcNewPosition = positionCharacter + encodes;
  const alphabetLength = alphabet.length - 1;
  //console.log(positionCharacter, calcNewPosition)
  if (positionCharacter === -1) {
    message += character;
  } else if(positionCharacter !== -1) {
    if (calcNewPosition >= alphabetLength) {
      while (calcNewPosition > alphabetLength) {
        calcNewPosition -= alphabetLength;
      }
    } else if (calcNewPosition < 0) {
      while (calcNewPosition < 0) {
        calcNewPosition += alphabetLength;
      }
        // console.log(calcNewPosition)
    }
    message += alphabet[calcNewPosition];
    // console.log(character, calcNewPosition, alphabet[calcNewPosition]);
  }
}
alert(message);
