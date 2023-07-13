//Caesar cipher

/* Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.

The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. Non-letter characters are not modified by the cipher. Write a program that implements a Caesar cipher. Allow the user to supply the message and the shift amount, and then display the shifted message. Ensure that your program encodes both uppercase and lowercase letters. Your program should also support negative shift values so that it can be used both to encode messages and decode messages. */


// declaring the variable that rapresents each letter in the for loop

let allLetters;

let alphabet =""; 

// Declaring the variable that will contain all the alphabet letters from variable allLetters

// Create the string of alphabet letters with For loop using the .fromCharCode() method

//in unicode UTF16 bit alphabet is rapresented starting from number 65 up to 90

for (i = 65; i < 91; i++) {

  allLetters = String.fromCharCode(i);

  alphabet += allLetters;
}
// Ask the user to type the message.

const userMessage = prompt("Type your message to be encrypted").toUpperCase();

// Ask the user the shift amount in number,strings are converted in number using
// parseFloat() method

let shift = parseFloat(prompt("Type the encryption key (shift amount)"));

//rapresent each character in the for loop
let originalChar;

//each  shifted amount
let shiftedLetter;

// Declaring the variable that will contain the encrypted message with initial value = empty string to hold the shifted message as string format
let shiftedMessage = "";

let index;

// Create a For loop to go through all the characters of the message (the counter must be inside originalChar = message [i])

for (let i = 0; i < userMessage.length; i++) {

   
  originalChar = userMessage[i];

  // For each character of the original message, find its index within the alphabet string with indexOf()

  index = alphabet.indexOf(originalChar);

    // Conditions to find the shifted letter and implement shiftedMessage:

    if (index === -1) { // If the character is not a letter indexOf returns -1
    shiftedMessage += originalChar;

    } else if ((index + shift) > 25) { // If the shift goes beyond the letter Z
    shiftedLetter = alphabet[(index + shift)-alphabet.length];
    shiftedMessage += shiftedLetter;

    } else if ((index + shift) < 0) { // If the shift amount is negative and goes before the letter A
    shiftedLetter = alphabet[alphabet.length + (index + shift)];

    shiftedMessage += shiftedLetter;

    } else { // For other cases where the shift remains within the indexes of the alphabet string

    shiftedLetter = alphabet[index + shift];

    shiftedMessage += shiftedLetter;
    }
} 
alert(shiftedMessage);
