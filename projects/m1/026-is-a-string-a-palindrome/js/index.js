// string type variable declaration
let messageResult = "";
// input of the word to be checked
const string_Palindrome = prompt(`Insered the word of check --> `).toUpperCase();
// conversion of the word to an array si individual elements.
const string_Array = string_Palindrome.split('');
// loop for leser hvert element i array
for (let i = 0; i < string_Array.length; i++) {
    // if condition is used to check whether the first and last matching characters are equal
    if (string_Array[i] !== string_Array[string_Array.length - 1 - i]) {
        // message " Not a Polydromic Word " + ouput
        messageResult = `It is not a palindrome word -->  ${string_Array.join('')}`;
    } else {
        // message " Polydromic Word " + ouput
        messageResult = `It is a palindrome word     -->  ${string_Array.join('')}`;
    }
}
// Result display.
console.log(messageResult);