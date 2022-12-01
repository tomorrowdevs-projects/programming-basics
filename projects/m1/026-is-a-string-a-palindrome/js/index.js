
let wordInput = prompt('Please, enter a word:').toUpperCase();
let wordInputArray = wordInput.split('');
let wordReversedArray =  wordInputArray.reverse().join('');
if (wordInput === wordReversedArray.toString()) {
    alert("The word you enterd is a palindrome!");

} else {
    alert("The word you enterd is not a palindrome!");

}