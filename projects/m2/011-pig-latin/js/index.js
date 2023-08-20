
// Pig Latin is a language constructed by transforming English words. 
// While the origins of the language are unknown, it is mentioned in at least two documents from the nineteenth century,
// suggesting that it has existed for more than 100 years.   

// The following rules are used to translate English into Pig Latin:
// - If the word begins with a consonant (including y), then all letters at the beginning of the word, 
//   up to the first vowel (excluding y), are removed and then added to the end of the word, followed by ay.   
//   For example, *computer* becomes *omputercay* and *think* becomes *inkthay*.

// - If the word begins with a vowel (not including y), then way is added to the end of the word.    
//   For example, *algorithm* becomes *algorithmway* and *office* becomes *officeway*.

// Write a program that reads a line of text from the user. 
// Then your program should translate the line into Pig Latin and display the result. 
// You may assume that the string entered by the user only contains lowercase letters and spaces.


// Pig Latin è una lingua costruita trasformando parole inglesi.
// Mentre le origini della lingua sono sconosciute, è menzionata in almeno due documenti del XIX secolo,
// suggerendo che esiste da più di 100 anni.

// Le seguenti regole vengono utilizzate per tradurre l'inglese in Pig Latin:
// - Se la parola inizia con una consonante (compresa la y), allora tutte le lettere all'inizio della parola,
// fino alla prima vocale (esclusa la y), vengono tolte e poi aggiunte alla fine della parola, seguite da ay.
// Ad esempio, *computer* diventa *omputercay* e *think* diventa *inkthay*.

// - Se la parola inizia con una vocale (esclusa la y), allora way viene aggiunta alla fine della parola.
// Ad esempio, *algorithm* diventa *algorithmway* e *office* diventa *officeway*.

// Scrivi un programma che legga una riga di testo dall'utente.
// Quindi il tuo programma dovrebbe tradurre la riga in Pig Latin e visualizzare il risultato.
// Si può presumere che la stringa immessa dall'utente contenga solo lettere minuscole e spazi.

const userString = prompt('Please enter the word to translate in Pig Latin', "example: computer, office").toLowerCase().split(' ')



function pigLatin(item) {
  const vowel = ['a','e','i','o','u']
  const newString = []
  for (let word of item) {
    if(vowel.indexOf(word.charAt(0)) !== -1){
      newString.push(word + 'way')
    } else {
      let matchVowel = word.match(/[aeiou]/g) || 0;
      console.log(matchVowel)
      let newStart = word.indexOf(matchVowel[0]);
      console.log(newStart)
      newString.push(word.substring(newStart) + word.substring(0, newStart) + "ay")
      console.log(word.substring(newStart) )
      console.log(word.substring(0, newStart))
      console.log( newString.push(word.substring(newStart) + word.substring(0, newStart) + "ay"))
    }
  }
  const newText = newString.join(' ')
  return newText
}

console.log(pigLatin(userString))