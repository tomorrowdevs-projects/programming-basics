// 1. create a program that establishes if a string is a palindrome

let text = prompt('Write something curious');

// isolating the words of the string into array

const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;
const result = text.replace(regex, '');         // removing all the punctuation marks
let lowText = result.toLowerCase();               // equalizing all the characters
const wordsText = lowText.split(' ');
console.log(wordsText);

// trying to establish if the string is a palindrome

const half = Math.ceil(wordsText.length / 2)  ;  //spliting in two halves the text
const firstHalf = wordsText.slice(0, half);      
let strH1 = firstHalf.join(" ");                 //sorting and convert to string to recognize palindromes
const secondHalf = wordsText.slice(-half);
let sortH2 = secondHalf.reverse();
let strH2 = sortH2.join(" ");
if (strH1 == strH2) {
    alert('Amazing, you wrote a palindrome!')
} else {
    alert('Oh, come on! You can do better')
}