// # Avoiding Duplicates

// In this exercise, you will write a function called "remove duplicates" that reads words from the user until the user enters a blank line. 
// After the user enters a blank line your program should display each word entered by the user exactly once. 
// The words should be displayed in the same order that they were first entered.   
// Write a main function that demonstrates your function.   
// For example, if the user enters:
// *first*
// *second*
// *first*
// *third*
// *second*

// then your program should display:
// *first*
// *second*
// *third*

// # Evitare duplicati

// In questo esercizio, scriverai una funzione chiamata "rimuovi duplicati" che legge le parole dall'utente finché l'utente non inserisce una riga vuota.
// Dopo che l'utente inserisce una riga vuota, il programma dovrebbe visualizzare ogni parola inserita dall'utente esattamente una volta.
// Le parole devono essere visualizzate nello stesso ordine in cui sono state inserite per la prima volta.
// Scrivi una funzione principale che dimostri la tua funzione.
// Ad esempio, se l'utente inserisce:
// *Primo*
// *secondo*
// *Primo*
// *terzo*
// *secondo*

// quindi il tuo programma dovrebbe visualizzare:
// *Primo*
// *secondo*
// *terzo*


let wordList = [];

let wordInput = String(prompt(`Insert the word`));

function pushWord (word){
    if(word === ""){
        location.reload()
    }else{
    wordList.push(word)
    }

    while(word !== ""){
        wordList.push(word);
        word = String(prompt(`Insert the word`));
    }
    // console.log(wordList)
    for(let i = 0 ; i < wordList.length; i++){
       console.log(`index ${i} : ${wordList[i]}`)
    }


}


function avoidingDuplicates (array){
    let removeDuplicatesArray = [...new Set(array)];
    for(let i = 0 ; i < removeDuplicatesArray.length; i++){
        console.log(`index ${i} : ${removeDuplicatesArray[i]}`)
    }
    // console.log(removeDuplicatesArray)
};

pushWord(wordInput);
console.log('\n\n')
avoidingDuplicates(wordList);