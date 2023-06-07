/*
LOGIC
Create a prompt to get a string from the user 
Create a set with with the characters from the entered string
Return the size of the set
*/

const enteredString = prompt("Enter a string.");
const uniqueCharacters = new Set(enteredString);

console.log(uniqueCharacters.size);
