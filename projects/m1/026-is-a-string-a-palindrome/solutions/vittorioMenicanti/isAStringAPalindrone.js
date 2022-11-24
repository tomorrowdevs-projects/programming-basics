
//Is a string a Palindrone?

/*A string is a palindrome if it is identical forward and backward. For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words.

Write a program that reads a string from the user and uses a loop to determine whether or not it is a palindrome. Display the result, including a meaningful output message.

Aibohphobia is the extreme or irrational fear of palindromes. This word was constructed by prepending the -phobia suffix with it’s reverse, resulting in a palindrome. Ailihphilia is the fondness for or love of palindromes. It was constructed in the same manner from the -philia suffix. */


const userString = prompt("Type a string to check if it is a palindrome").toLowerCase();

const wordArray = userString.split("");
//split each character of the array of string
// E.g : hello ---> ['h', 'e', 'l', 'l', 'o'];

const reverseWord = wordArray.reverse();
//reverse the character of the splitted strings
//E.g hello ---> ['o', 'l', 'l', 'e', 'h'];

let palindrome = 0;

for (let i=0; i < userString.length; i++) {

    if (userString[i] == reverseWord[i]){

    palindrome += 1; 

    } else {

    palindrome += 0;

    }
}  
  
if (palindrome == userString.length) {

alert ("Yes, it is a palindrome!");

} else {

alert ("Sorry, it is not a palindrome");

}