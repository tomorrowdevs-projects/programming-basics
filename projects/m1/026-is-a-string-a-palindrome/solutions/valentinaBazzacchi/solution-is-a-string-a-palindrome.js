let word = prompt("Enter a string to check if it is a palindrome").toLowerCase();
let palindrome = 0;
console.log(word);

// For each letter equal to the specular, the "palindrome" variable increases by 1.  
for (let i=0; i < word.length; i++) {
    if (word[i] == word[word.length-1-i]){
    palindrome += 1; 
    } else {
    palindrome += 0;
    }
}    
// If the value of "palindrome" is equal to "word.length" then all the checked letters are equal to each other
if (palindrome == word.length) {
alert ("This is a palindrome!");
} else {
alert ("This isn't a palindrome!");
}

// -------------- SOLUTION WITH ARRAY.REVERSE() METHOD ---------------- //

let word = prompt("Enter a string to check if it is a palindrome").toLowerCase();

let wordArray = word.split("");
let reverseWord = wordArray.reverse();

let palindrome = 0;

for (let i=0; i < word.length; i++) {
    if (word[i] == reverseWord[i]){
    palindrome += 1; 
    } else {
    palindrome += 0;
    }
}  
  
if (palindrome == word.length) {
alert ("This is a palindrome!");
} else {
alert ("This isn't a palindrome!");
}