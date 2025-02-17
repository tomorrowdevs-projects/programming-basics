const userString = prompt('Please enter the word to translate in Pig Latin', 'lorem ipsum').toLowerCase().split(' ')

// If the word begins with a consonant, remove the letters up to the first vowel and insert them at the end of the word + ay
// If the word begins with a vowel add way at the end of the word
function pigLatin(item) {
  const vowel = ['a','e','i','o','u']
  const newString = []
  for (let word of item) {
    if(vowel.indexOf(word.charAt(0)) !== -1){
      newString.push(word + 'way')
    } else {
      let matchVowel = word.match(/[aeiou]/g) || 0;
      let newStart = word.indexOf(matchVowel[0]);
      newString.push(word.substring(newStart) + word.substring(0, newStart) + "ay")
    }
  }
  const newText = newString.join(' ')
  return newText
}

console.log(pigLatin(userString))