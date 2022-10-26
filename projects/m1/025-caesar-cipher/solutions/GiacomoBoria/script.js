/*One of the first known examples of encryption was used by Julius Caesar. Caesar needed to provide written instructions to his generals, but he didn’t want his enemies to learn his plans if the message slipped into their hands. As a result, he developed what later became known as the Caesar cipher. The idea behind this cipher is simple (and as such, it provides no protection against modern code breaking techniques). Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.

The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. Non-letter characters are not modified by the cipher. Write a program that implements a Caesar cipher. Allow the user to supply the message and the shift amount, and then display the shifted message. Ensure that your program encodes both uppercase and lowercase letters. Your program should also support negative shift values so that it can be used both to encode messages and decode messages.*/

const alphabet = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h","i","j" ,"k" ,"l","m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s", "t", "u" ,"v","w","x" ,"y", "z"]; 
const userInput = prompt("Type the sentence to be encoded or decode:").toLowerCase();
const shiftSpace = Number(prompt("Enter the number of post letters"))
const phraseEncoding = []

for (i = 0; i < userInput.length; i++) {
  // Variable = letter shift index
  let encodeLetter = alphabet.indexOf(userInput[i]) + shiftSpace;
  
   // Codition upper index to the alphabet
  if (encodeLetter > 25) {
    let position = encodeLetter - alphabet.length;
    phraseEncoding.push(alphabet[position])
    
    // Codition for NON-letter characters
  } else if (!alphabet.includes(userInput[i])) { 
    phraseEncoding.push(userInput[i])
    // Codition reverse upper index to the alphabet
  } else if (encodeLetter < 0) {
    let encodeLetter = alphabet.indexOf(userInput[i]) - -shiftSpace;
    let position = alphabet.length - -encodeLetter;
    phraseEncoding.push(alphabet[position])
    
    // Codition encoded letter in alphabet
  } else if (alphabet.includes(userInput[i])) {
    phraseEncoding.push(alphabet[encodeLetter]);
  } 
}
alert(`${phraseEncoding.join("")}`)
