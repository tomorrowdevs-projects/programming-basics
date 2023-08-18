// # Word by Word Palindromes

// A string is a palindrome if it is identical forward and backward. For example “anna”, “civic”, “level” and “hannah” 
// are all examples of palindromic words.

// Such palindromes examined the characters in a string, possibly ignoring spacing and punctuation marks, 
// to see if the string was the same forwards and backwards. 
// While palindromes are most commonly considered character by character, 
// the notion of a palindrome can be extended to larger units.   
// For example, while the sentence 
// *“Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is?”* 
// isn’t a character by character palindrome, it is a palindrome when examined a word at a time 
// (and when capitalization and punctuation are ignored).  
// Other examples of word by word palindromes include 
// *“Herb the sage eats sage, the herb”* and *“Information school graduate seeks graduate school information”*.

// Create a program that reads a string from the user. 
// Your program should report whether or not the entered string is a word by word palindrome. 
// Ignore spacing and punctuation when determining the result.

// # Palindromi parola per parola

// Una stringa è palindromo se è identica avanti e indietro. Ad esempio "anna", "civic", "level" e "hannah"
// sono tutti esempi di parole palindromiche.

// Tali palindromi esaminavano i caratteri in una stringa, possibilmente ignorando la spaziatura e i segni di punteggiatura,
// per vedere se la stringa era la stessa avanti e indietro.
// Mentre i palindromi sono più comunemente considerati carattere per carattere,
// la nozione di palindromo può essere estesa a unità più grandi.
// Ad esempio, mentre la frase
// *"È pazzesco come dire frasi al contrario crei frasi al contrario che dicono quanto è pazzesco?"*
// non è un palindromo carattere per carattere, è un palindromo se esaminato una parola alla volta
// (e quando maiuscole e punteggiatura vengono ignorate).
// Altri esempi di palindromi parola per parola includono
// *"La salvia erba mangia la salvia, l'erba"* e *"Il laureato della scuola di informazione cerca informazioni sulla scuola di specializzazione"*.

// Crea un programma che legge una stringa dall'utente.
// Il tuo programma dovrebbe segnalare se la stringa inserita è o meno un palindromo parola per parola.
// Ignora la spaziatura e la punteggiatura quando determini il risultato.

let userStringInput = prompt("Please enter the phrase and verify if your sentence is palindrome", 'Example: "anna", "civic", "level" e "hannah"').toUpperCase()
let regExpNumber = /[0-9]/;
let regExpPuntctuationMarks =  /[^\p{L}'\s]+/gu
function listWords(phrase){
  let arrayWords = phrase.replace(regExpPuntctuationMarks, "").split(" ")
  return arrayWords;
}

if(regExpNumber.test(userStringInput) == true){
    alert("phrase is not valid")
}else{
    listWords(userStringInput);
}

function wordPalindromes(){
    let output = "";
    let phrase = listWords(userStringInput)
    console.log(phrase)
    let reversePhraseArray = [...phrase].reverse();
    if( reversePhraseArray.length  < 2 ){
        alert("you must enter at least two words in a sentence to check if it is a palindrome sentence")
    }else {
        if(reversePhraseArray.toString() == phrase.toString()){
        console.log(reversePhraseArray.toString())
         output = alert(`${phrase.join(" ")} is a palindrome`)
        }else{
         output =alert(`${phrase.join(" ")} is a not palindrome`)
        }
    }
}


wordPalindromes()