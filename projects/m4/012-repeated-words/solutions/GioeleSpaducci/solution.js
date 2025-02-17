async function loadFile(url) {  //load a file
    let response = await fetch(url);
    let text = await response.text();
    return text
  }
  
  
  function checkInLine(lines, i) {   //check if consecutive words are equal
    for (let word of lines[i]) {   
      if (word === lines[i][lines[i].indexOf(word,)+1]) {
        alert (`found repeated ${word} at line ${i+1}`);  //display line and repeted words
        return
      }
    }
  }
  
  function checkLastWord (lines, i) {  //for last word of a line check equality with first word of next line
    if (lines[i][lines[i].length-1] === lines[i+1][0]) {
      alert (`found repeated ${lines[i+1][0]} at lines ${i+1},${i+2}`);  //display line and repeted words
      return
    }  
  }
  
  
  
  async function repeatedWords(url) {  
    let text = await loadFile(url);
    let lines = text
    .split("\n")    //read file line by line
    .map((line)=> line.split(" ")    //split every line word by word
    );
    for (let i = 0; i < lines.length; i++) {
      checkInLine(lines,i)
      checkLastWord(lines,i)
    }
  }