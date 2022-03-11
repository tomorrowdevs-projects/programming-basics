let letters;
// Declare the variable that will contain all the alphabet letters with initial value = empty string
let alphabet =""; 
// Create the string of alphabet letters with For loop using the .fromCharCode() method
for (i = 65; i < 91; i++) {
  letters = String.fromCharCode(i);
  alphabet += letters;
}
// Ask the user to enter the message and turn the letters in uppercase (like in alphabet strings)
let message = prompt("Write here your message to be encrypted").toUpperCase();
// Ask the user the shift amount and turn type into number
let shift = +prompt("Tell me the encryption key (shift amount)");

let originalChar;
let shiftedLetter;
// Declared the variable that will contain the encrypted message with initial value = empty string
let shiftedMessage = ""; 
let index;

// Create a For loop to go throught all the characters of the message (the counter must be inside originalChar = message [i])

for (let i = 0; i < message.length; i++) {

  // Point to each character of the original message by incrementing the index (corresponding to its position in the string) by 1  
  originalChar = message[i];

  // For each character of the original message, find its index within the alphabet string with indexOf()
  index = alphabet.indexOf(originalChar);

    // Conditions to find the shifted letter and implement shiftedMessage:
    if (index == -1) { // If the character is not a letter indexOf returns -1
    shiftedMessage += originalChar;
    } else if ((index + shift) > 25) { // If the shift goes beyond the letter Z
    shiftedLetter = alphabet[(index + shift)-alphabet.length];
    shiftedMessage += shiftedLetter;
    } else if ((index + shift) < 0) { // If the shift amount is negative and goes before the letter A
    shiftedLetter = alphabet[alphabet.length + (index + shift)];
    shiftedMessage += shiftedLetter;
    } else { // For the other cases where the shift remains within the indexes of the alphabet string
    shiftedLetter = alphabet[index + shift];
    shiftedMessage += shiftedLetter;
    }
} 
alert(shiftedMessage);


