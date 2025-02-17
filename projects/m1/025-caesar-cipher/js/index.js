// caretters string
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
// string length using the " .length " method
const length_String = alphabet.length;
// declaration of string-type variables
let message_Crypt = "";
let message_Decrypt = "";
let message_Result = "";
// variable declarations of type number
let position_Character = 0;
// message insert encrypt or depicrypt
let message = prompt("Insered the message  --> ").toUpperCase();
// shift key insertion
let key_Shift = parseInt(prompt("Insered the shit key --> "));
// For loop reading character by character the string " alphabet ".
for (let i = 0; i < message.length; i++) {
    // 'indexOf()' method to determine the position of the character within the string
    position_Character = alphabet.indexOf(message[i]);
    // IF condition to determine whether the entered key is positive
    if (key_Shift > 0) {
        // modular mathematical formula " % " of caesar's cryptography "y = (x + k) mod 26"
        // 26 is the number of characters in the international alphabet
        message_Crypt = message_Crypt + alphabet[(position_Character + key_Shift) % length_String];
        // variable in which the encrypted message is stored
        message_Result = `The crypted message is --> ${message_Crypt}`;
    } else {
        // adds 26 characters to have the message decrypted, for Key negative.
        position_Character = position_Character + length_String;
        // modular mathematical formula " % " of caesar's cryptography "y = (x + k) mod 26" which adds
        // 26 characters to the position key number to calculate the deprecation
        message_Decrypt = message_Decrypt + alphabet[(position_Character + key_Shift) % length_String];
        // variable in which the decrypted message is stored
        message_Result = `The decrypted message is --> ${message_Decrypt}`;
    }
}
// display of encrypted/decrypted message
console.log(message_Result);