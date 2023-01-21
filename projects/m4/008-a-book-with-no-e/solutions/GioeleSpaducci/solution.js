async function loadFile() {  
    const substrings = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const url = prompt("url?"); 
    const response = await fetch(url);  //read a file with words
    if (response.ok) {
      const text = await response.text();
      containsSub(text, substrings)
    } else {
      alert("err!")
    }
    
  }
  
  function containsSub(text, substrings) {
    const words = text  //split text word by word
      .toLowerCase()
      .replace(/[^\w\s]|\n/g," ")
      .replace(/\s+/g, " ")
      .split(" ");
  
    const letters = {};
    const countedWords = []
    for (let sub of substrings) {
    letters[sub] = [];           // create lists
    checkWord(words, sub, letters[sub])  //add matching words to lists
    }
    for (let letter in letters) {   //display lists with relative lengths
      let key = letter + " " + letters[letter].length
      countedWords.push(key)
    }
    countedWords.sort((a,b) => b.slice(2) - a.slice(2) )
    alert(countedWords)
  }
  
  //check every word in the text for it containing substring
  function checkWord(text, sub, arr) {
    for (let word of text) {
      if (word.indexOf(sub) >= 0) {
        arr.push(word);
      }
    }
  }
  
  
  loadFile()