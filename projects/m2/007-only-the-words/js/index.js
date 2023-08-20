// # Only the Words

// In this exercise you will write a function called "only words" that identifies all the words in a string entered by the user. 
// Begin by writing a function that takes a string as its only parameter. 
// Your function should return a list of the words in the string with the punctuation marks at the edges of the words removed. 
// The punctuation marks that you must consider include commas, periods, question marks, hyphens, apostrophes, 
// exclamation points, colons, and semicolons. Do not remove punctuation marks that appear in the middle of a word, 
// such as the apostrophes used to form a contraction.   
// For example, if your function is provided with the string 
// *"Contractions include: don’t, isn’t, and would’t."* 
//  then your function should return the list *["Contractions", "include", "don’t", "isn’t", "and", "wouldn’t"]*.  
// Write a main program that demonstrates your function. 
// It should read a string from the user and then display all the words in the string with the punctuation marks removed.

// # Solo le parole

// In questo esercizio scriverai una funzione chiamata "solo parole" che identifica tutte le parole in una stringa inserita dall'utente.
// Inizia scrivendo una funzione che accetta una stringa come unico parametro.
// La tua funzione dovrebbe restituire un elenco delle parole nella stringa con i segni di punteggiatura ai bordi delle parole rimossi.
// I segni di punteggiatura da considerare includono virgole, punti, punti interrogativi, trattini, apostrofi,
// punti esclamativi, due punti e punto e virgola. Non rimuovere i segni di punteggiatura che appaiono nel mezzo di una parola,
// come gli apostrofi usati per formare una contrazione.
// Ad esempio, se la funzione viene fornita con la stringa
// *"Le contrazioni includono: non fare, non lo è e non lo farei."*
// allora la tua funzione dovrebbe restituire l'elenco *["Contrazioni", "include", "non", "non è", "e", "non sarebbe"]*.
// Scrivi un programma principale che dimostri la tua funzione.
// Dovrebbe leggere una stringa dall'utente e quindi visualizzare tutte le parole nella stringa con i segni di punteggiatura rimossi.

let userStringInput = prompt("Please enter the phrase", "Contractions include: don't, isn't, and wouldn't.")
let regExpNumber = /[0-9]/;
let regExpPuntctuationMarks =  /[^\p{L}'\s]+/gu
function listWords(phrase){
  let listWords = phrase.replace(regExpPuntctuationMarks, "").split(" ")
  return console.log(listWords.join(" "));
}

if(regExpNumber.test(userStringInput) == true){
    alert("phrase is not valid")
}else{
    listWords(userStringInput);
}

