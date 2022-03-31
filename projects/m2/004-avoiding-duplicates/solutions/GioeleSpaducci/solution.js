let word = prompt('word?');
let words = []
while (word != '') {
  if (!words.find((element) => element == word)) {
    words.push(word)
  }
  word = prompt('word?')
}
alert(words)