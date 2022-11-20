// generate alphabet
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
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
  if (positionCharacter === -1) {
    message += character;
  } else {
    if (calcNewPosition > alphabet.length) {
      while (calcNewPosition >= alphabet.length) {
        calcNewPosition -= alphabet.length;
      }
    } else if (calcNewPosition < alphabet.length) {
      while (calcNewPosition <= 0) {
        calcNewPosition += alphabet.length;
      }
    }
    message += alphabet[calcNewPosition];
    // console.log(character, calcNewPosition, alphabet[calcNewPosition]);
  }
}
alert(message);
