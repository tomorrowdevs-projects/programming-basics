/** @type {string}*/
const string = prompt("Insert a word");

/**
 * @type {string}
 * declare an empty array where to split the word in single characters
 */
let stringArr = [];
stringArr = string.split('');

/**
* @type {number} 
initializing index for loops
*/
let i = 0;

function isPalindrome() {
    if (stringArr[i] == stringArr[stringArr.length-1]){  /**1st if/else: if the first letter of the word is equal to last one*/
    while(stringArr[i] == stringArr[stringArr.length-1] && stringArr.length != 0) {  /**start a loop that remove the first and the last element of the word array. Then repeat the process until the 2 elements are different or until the array is empty*/
        stringArr.pop()
        stringArr.shift()
        if (stringArr.length != 0) {  /**2nd if/else: if the array is not empty repeat the process*/
            isPalindrome()
        } else (alert("Inserted word is Palindrome")) /**2nd if/else:  the array is empty it means that the word is palindrome*/
    }} else (alert("Inserted word is Not Palindrome"))/**1s if/else: the 2 compared letters are not equal, it means that the word is not palindrome.*/
}
isPalindrome()
