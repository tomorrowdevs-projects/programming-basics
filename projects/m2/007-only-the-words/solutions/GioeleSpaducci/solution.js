function separate(str) {
    words = str.split(' ');
    for (word of words) {
      if (word[word.length-1] == '!' || word[word.length-1] == ',' || word[word.length-1] == '?' || word[word.length-1] == "'") {
        let newWord = word.slice(0,word.length-1)
        words.splice(words.indexOf(word), 1, newWord)
      }
    }
  }
  separate("bello questo maglione! L'hanno fatto a mano, vero?")
  alert (words)