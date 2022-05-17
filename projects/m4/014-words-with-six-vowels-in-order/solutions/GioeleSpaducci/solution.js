
let letters = ["a", "e", "i", "o", "u"]

//read file

async function loadFile(url) {
  let response = await fetch(url);
  if(response.ok) {
    let text = await response.text();
    return text
  } else alert("err!")
}



// check if word is containing every letter in list
function checkLetters(word, letters) {
  for (let i = 0; i < letters.length; i++) {
    if (word.includes(letters[i])) continue
    else return false
  }
  return true
}


async function containsLetters(letters) {  //main function
  let text = await loadFile(prompt("url?"));
  let words = text.split(" ");  // separate words
  let matchingWords = [];
  for (let word of words) {
    if (checkLetters(word, letters)) matchingWords.push(word)
  }
  alert(matchingWords);  // output words
}


const letters = ["a", "e", "i", "o", "u"];

const text = fetch(prompt("url?"))  //read file
.then((result)=>result.text());

function checkLetters(word, letters) {  // check if word is containing every letter in list 
  for (let i = 0; i < letters.length; i++) {
    if (word.includes(letters[i])) continue
    else return false
  }
  return true
}

function matchingWords(text) {  //main function
  const words = text.split(" ");  // separate words
  let matchingWords = [];
  for (let word of words) {
    if (checkLetters(word, letters)) matchingWords.push(word)
  }
  alert(matchingWords);  // output words
}

text.then(result => matchingWords(result));