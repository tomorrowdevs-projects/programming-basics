// return a list of the words in the string with the punctuation marks at the edges of the words removed
// Contractions include: don’t, isn’t, and wouldn’t. = ["Contractions", "include", "don’t", "isn’t", "and", "wouldn’t"]
// read a string from the user and then display all of the words in the string with the punctuation marks removed

const userString = prompt('Please enter the phrase', "Contractions include: don’t, isn’t, and wouldn’t.")

function listWords(word){
  const list = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ")
  return list
}

console.log(listWords(userString))