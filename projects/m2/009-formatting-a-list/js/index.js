// #  Formatting a List

// When writing out a list of items in English, one normally separates the items with commas.  
// In addition, the word “and” is normally included before the last item, unless
// the list only contains one item. 

// Consider the following four lists:
// *apples*
// *apples and oranges*
// *apples, oranges and bananas*
// *apples, oranges, bananas and lemons*

// Write a function that takes a list of strings as its only parameter.   
// Your function should return a string that contains all  the items in the list, formatted in the manner described previously, 
// as its only result. While the examples shown previously only include lists containing four elements or fewer, 
// your function should behave correctly for lists of any length.   
// Include a main program that reads several items from the user, formats them by calling your function, 
// and then displays the result returned by the function.


// # Formattazione di una lista

// Quando si scrive un elenco di elementi in inglese, normalmente si separano gli elementi con virgole.
// Inoltre, la parola "e" è normalmente inclusa prima dell'ultimo elemento, a meno che
// l'elenco contiene solo un elemento.

// Considera le seguenti quattro liste:
// *mele*
// *mele e arance*
// *mele, arance e banane*
// *mele, arance, banane e limoni*

// Scrivi una funzione che accetta un elenco di stringhe come unico parametro.
// La tua funzione dovrebbe restituire una stringa che contiene tutti gli elementi nell'elenco, formattati nel modo descritto in precedenza,
// come unico risultato. Sebbene gli esempi mostrati in precedenza includano solo elenchi contenenti quattro elementi o meno,
// la tua funzione dovrebbe comportarsi correttamente per elenchi di qualsiasi lunghezza.
// Includi un programma principale che legge diversi elementi dall'utente, li formatta chiamando la tua funzione,
// e quindi visualizza il risultato restituito dalla funzione.

let userInput;
let wordList = []
while(userInput != ""){
    userInput = prompt(`Add the words you want and finish by pressing enter without adding anything`);
    if(userInput != ""){
    wordList.push(userInput);    
    }
};

if(wordList.length === 1){
    lastWord = wordList[0];
}else if(wordList.length === 2){
    lastWord = wordList[1]
}else{
    lastWord = wordList.pop()
}


function formattingList(wordsArray, lastword){
    let copyArray = [...wordsArray]
  if(copyArray.length === 1){
    console.log(`${copyArray.join(" ")}`)
    }else if(copyArray.length === 2){
    console.log(`${copyArray.join(" and ")}`);
    }else{
    console.log(`${copyArray.join(", ")} and ${lastword}`);
    }
}

formattingList(wordList,lastWord);


