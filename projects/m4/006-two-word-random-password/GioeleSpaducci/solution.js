async function loadFile() {  
  let url = prompt("url?"); 
  let response = await fetch(url);  //read a file with words
  if (response.ok) {
    text = await response.text();
    newPassword(text, 10)
  } else {
    alert("err!")
  }
}

function newPassword(text, maxLength) {
  const words = text  //split text word by word
    .toLowerCase()
    .replace(/[^\w\s]|\n/g," ")
    .replace(/\s+/g, " ")
    .split(" ");
  let firstWord =  pickAWord(words, 7, 3);
  let secondWord = pickAWord(words, 7, 3);
  while (firstWord === secondWord) {
   secondWord = pickAWord(words, 7, 3);
  }
  //put the words together capitalizing first letter of each word
  let password = firstWord[0].toUpperCase() + firstWord.slice(1) + secondWord[0].toUpperCase() + secondWord.slice(1) 
  if (password.length <= maxLength) alert(password) //show password of valid length
  else newPassword(text,maxLength)
}

function pickAWord(arr, maxLength, minLength) {  //select a random word, of valid length
  let word = arr[Math.floor(Math.random() * arr.length)];
  if ( word.length <= maxLength && word.length >= minLength) {
    return word
  } else {
    pickAWord(arr, maxLength, minLength)
  }
}


loadFile()