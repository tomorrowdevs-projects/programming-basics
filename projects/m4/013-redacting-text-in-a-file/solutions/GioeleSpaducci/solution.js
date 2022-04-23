async function loadText(url) {
  let response = await fetch(url);
  let text = await response.text();
  return text;
}

function checkWords(text, words) { 
  let newText = text;
  for (let word of words) {
   let re = new RegExp(word, 'g');
   newText = newText.replace(re, "***")  //replace word
  }
  return newText
}


async function removeWords(textUrl, wordsUrl) {
  let text = await loadText(textUrl);  //load text file
  let words = await loadText(wordsUrl);  //load sensitive words
  words = words.split(" ");
  let newText = checkWords(text, words)   //check for presence of sensitive word in text 
}