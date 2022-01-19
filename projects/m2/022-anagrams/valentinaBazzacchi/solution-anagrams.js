// MAIN PROGRAM
let word1 = prompt("Enter the first word");
let word2 = prompt("Enter the second word");

if (areAnagrams(word1, word2)) {
    alert("These two words are anagrams");
} else {
    alert("These two words are not anagrams");
}

// FUNCTIONS
// Divide a word into letters, order them and rejoin them
function sortWord(str) {
    return str.toLowerCase().split('').sort().join('');
} 

// Compare two ordered words
function areAnagrams(str1, str2) {
    return (sortWord(str1) === sortWord(str2)) ? true : false;
}

