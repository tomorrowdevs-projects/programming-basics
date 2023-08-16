// function that reads a string
const userString = prompt('Please enter the text', 'Hannah, civic, level').toLowerCase();

function divideWords(text){
  // split text and remove punctuation mark
  const divideWords= text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ")
  return divideWords
}

function checkPalindromesWord(text){
    const words = divideWords(text)
   // create a new array with reverse words and check if the word is a palindrome
    let palindromesWord = new Array()
    for(item in words){
        let reverseWords = words[item].split("").reverse().join("")
        if(words[item] === reverseWords){
            palindromesWord.push(words[item])
        }
    }
    return palindromesWord
}

console.log('Palindromes word: ' + checkPalindromesWord(userString))