// A string is a palindrome if it is identical forward and backward. For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words.

// Write a program that reads a string from the user and uses a loop to determine whether or not it is a palindrome. Display the result, including a meaningful output message.

// Aibohphobia is the extreme or irrational fear of palindromes. This word was constructed by prepending the -phobia suffix with it’s reverse, resulting in a palindrome. Ailihphilia is the fondness for or love of palindromes. It was constructed in the same manner from the -philia suffix.

const string = prompt('Inserisci la stringa');

//converto stringa in array
const stringToArray = string.split('');

//inverto l'ordine del nuovo array
const reverseArray = stringToArray.reverse();

//converto l'array in stringa
const reverseString = reverseArray.join('');

if (string == reverseString) {
  alert(`${string} è un palindromo`);
} else {
  alert(`${string} non è un palindromo`);
}
