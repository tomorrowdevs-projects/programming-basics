function format(arr) {
    if (arr.length == 1) {
    return arr[0]
    }
    else if (arr.length == 2) {
    return (arr[0] + " and " + arr[1] )
    }
    else {
    let formattedWords = "";
    let i = 0
      for (; i < arr.length-1; i++) {
      formattedWords += arr[i] + ", "
      }
      formattedWords += " and " + arr[i];
      return formattedWords
    }
  }
  
  let words = [];
  let word = prompt("word?");
  while (word != null) {
    words.push(word);
    word = prompt("word?")
  }
  alert(format(words))