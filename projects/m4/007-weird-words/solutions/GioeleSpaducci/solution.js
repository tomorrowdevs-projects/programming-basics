async function loadFile() {  
    const substrings = ["ie", "ei"];
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
  
    const sets = {};
    for (let sub of substrings) {
    sets[sub] = new Set();           // create lists
    checkWord(words, sub, sets[sub])  //add matching words to lists
    }
    for (let key in sets) {   //display lists with relative lengths
      let arr = Array.from(sets[key]);
      alert(arr, arr.length)
    }
  }
  
  //check every word in the text for it containing substring
  function checkWord(text, sub, set) {
    for (let word of text) {
      if (word.indexOf(sub) >= 0) {
        set.add(word);
      }
    }
  }
  
  
  loadFile()