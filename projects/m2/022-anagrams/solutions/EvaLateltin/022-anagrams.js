/*
LOGIC
Create two prompts
For each prompt, make the string lowercase, then split it into an array, then sort it, then join it again. 
Compare the two strings: if they are equal, then they are anagrams
*/

const firstString = prompt("Enter the first string.")
  .toLowerCase()
  .split("")
  .sort()
  .join("");
const secondString = prompt("Enter the secont string.")
  .toLowerCase()
  .split("")
  .sort()
  .join("");

console.log(firstString === secondString);
