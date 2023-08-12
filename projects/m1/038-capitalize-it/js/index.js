// # Capitalize It

// Many people do not use capital letters correctly, especially when typing on small devices like smart phones. 
// To help address this situation, you will create a function that takes a string as its only parameter and returns a new copy of the string that has been correctly capitalized. 

// In particular, your function must:
// • Capitalize the first non-space character in the string,
// • Capitalize the firstnon-space character after a period, exclamation mark or question mark, and
// • Capitalize a lowercase “i” if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe.

// Implementing these transformations will correct most capitalization errors. 

// For example, if the function is provided with the string “what time do i have to be there? what’s the address? this time i’ll try to be on time!” 
// then it should return the string 

// “What time do I have to be there? What’s the address? This time I’ll try to be on time!”. 

// Include a main program that reads a string from the user, capitalizes it using your function, and displays the result.

// # Mettilo in maiuscolo

// Molte persone non usano correttamente le lettere maiuscole, specialmente quando digitano su piccoli dispositivi come gli smartphone.
// Per aiutare a risolvere questa situazione, creerai una funzione che prende una stringa come unico parametro e restituisce una nuova copia della stringa che è stata correttamente capitalizzata.

// In particolare, la tua funzione deve:
// • Rende maiuscolo il primo carattere diverso dallo spazio nella stringa,
// • Rende maiuscolo il primo carattere diverso dallo spazio dopo un punto, un punto esclamativo o un punto interrogativo e
// • Scrivi in ​​maiuscolo la “i” minuscola se è preceduta da uno spazio e seguita da uno spazio, un punto, un punto esclamativo, un punto interrogativo o un apostrofo.

// L'implementazione di queste trasformazioni correggerà la maggior parte degli errori di capitalizzazione.

// Ad esempio, se alla funzione viene fornita la stringa “a che ora devo essere lì? qual'è l'indirizzo? questa volta cercherò di essere puntuale!”
// quindi dovrebbe restituire la stringa

// “A che ora devo essere lì? Qual'è l'indirizzo? Questa volta cercherò di essere puntuale!”.

// Include un programma principale che legge una stringa dall'utente, la rende maiuscola utilizzando la funzione e visualizza il risultato.

let string = String(prompt(`enter the pharse`))

function stringUpperCase(string){
  let capitalizeText = "";
  let capitalizeLetter = ""
  for(let i = 0; i < string.length; i++){
    if(i === 0){
      capitalizeLetter = string[i].toUpperCase();
      capitalizeText += capitalizeLetter;
    } else if(string[i - 2] === '?' || string[i -2] === '!'|| string[i -2] === '.'){
      capitalizeLetter = string[i].toUpperCase();
      capitalizeText += capitalizeLetter;
    } else if(string[i] === 'i' && string[i - 1] === '' && string[i + 1] === '' || string[i] === 'i' && string[i + 1] === "'"){
      capitalizeLetter = string[i].toUpperCase();
      capitalizeText += capitalizeLetter;
    }
    else {
      capitalizeText += string[i]
    }
  }
  
   return console.log(capitalizeText);
   
}

stringUpperCase(string)



