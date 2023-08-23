// # Text Messaging

// On some basic cell phones, text messages can be sent using the numeric keypad. 
// Because each key has multiple letters associated with it, multiple key presses are needed for most letters.  
// Pressing the number once generates the first character listed for that key.  
// Pressing the number 2, 3, 4 or 5 times generates the second, third, fourth or fifth character.

// |Key| Symbols|
// |------|-----------|
// |1| .,?!:|
// |2| ABC|
// |3| DEF|
// |4 |GHI|
// |5 |JKL|
// |6| MNO|
// |7| PQRS|
// |8| TUV|
// |9| WXYZ|
// |0| space|

// Write a program that displays the key presses needed for a message entered by the user.  
// Construct a dictionary that maps from each letter or symbol to the key presses needed to generate it.
// Then use the dictionary to create and display the presses needed for the user’s message. 
// For example, if the user enters *Hello, World!* then your program should output *4433555555666110966677755531111*. 
// Ensure that your program handles both uppercase and lowercase letters. 
// Ignore any characters that aren’t listed in the table above such as semicolons and parentheses.

// # Messaggistica testuale

// Su alcuni telefoni cellulari di base, i messaggi di testo possono essere inviati utilizzando il tastierino numerico.
// Poiché a ogni tasto sono associate più lettere, per la maggior parte delle lettere sono necessarie più pressioni di tasti.
// Premendo il numero una volta si genera il primo carattere elencato per quel tasto.
// Premendo il numero 2, 3, 4 o 5 volte si genera il secondo, terzo, quarto o quinto carattere.

// |Chiave| Simboli|
// |------|-----------|
// |1| .,?!:|
// |2| ABC|
// |3| DEF|
// |4 |GHI|
// |5 |JKL|
// |6| MNO|
// |7| PQRS|
// |8| TÜV|
// |9| WXYZ|
// |0| spazio|

// Scrivere un programma che visualizzi i tasti da premere necessari per un messaggio inserito dall'utente.
// Costruisce un dizionario che associa ogni lettera o simbolo ai tasti da premere necessari per generarlo.
// Quindi utilizza il dizionario per creare e visualizzare i caratteri necessari per il messaggio dell'utente.
// Ad esempio, se l'utente inserisce *Hello, World!*, il programma dovrebbe restituire *4433555555666110966677755531111*.
// Assicurati che il tuo programma gestisca sia le lettere maiuscole che quelle minuscole.
// Ignora tutti i caratteri non elencati nella tabella sopra come punto e virgola e parentesi.

let message = prompt('Enter the text message and return 10 years ago', 'Hello, World!').toLowerCase()

let keysPad = {
  1: [ '.', ',', '?', '!', ':' ],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [' '],
}


function textMessaging(phrase, keys){
  let phraseArray = phrase.split('')
  let checkNumber = '';
  
  const messageT9 = phraseArray.map((singleLetter) => { 
    for (let item in keys) {
      if(keys[item].includes(singleLetter)) {
        checkNumber += item.repeat(keys[item].indexOf(singleLetter) + 1)
    }
}
})

return checkNumber
}

console.log(textMessaging(message, keysPad)) 

