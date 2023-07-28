// # Center a String in the Terminal Window

// Write a function that takes a string, *s*, as its first parameter, and the width of the window in characters, *w*, as its second parameter. 
// Your function will return a new string that includes whatever leading spaces are needed so that s will be centered in the window when the new string is printed. 
// The new string should be constructed in the following manner:

// - If the length of s is greater than or equal to the width of the window then s should be returned.
// - If the length of s is less than the width of the window then a string containing *(len(s) - w)* // 2 spaces followed by s should be returned.

// Write a main program that demonstrates your function by displaying multiple strings centered in the window.

// # Centra una stringa nella finestra del terminale

// Scrivere una funzione che prenda una stringa, *s*, come primo parametro, e la larghezza della finestra in caratteri, *w*, come secondo parametro.
// La tua funzione restituirà una nuova stringa che include tutti gli spazi iniziali necessari in modo che s sia centrato nella finestra quando viene stampata la nuova stringa.
// La nuova stringa dovrebbe essere costruita nel modo seguente:

// - Se la lunghezza di s è maggiore o uguale alla larghezza della finestra, deve essere restituito s.
// - Se la lunghezza di s è inferiore alla larghezza della finestra, allora deve essere restituita una stringa contenente *(len(s) - w)* // 2 spazi seguiti da s.

// Scrivi un programma principale che dimostri la tua funzione visualizzando più stringhe centrate nella finestra.

let width = +prompt(`Choose the length:`);
let messageUser = String(prompt(`enter the phrase`));
let spacesMessageBefore = [];
let spacesMessageAfter = [];


function centerMessage (messageUser, width){
    if (messageUser >= width) {
        return messageUser;
    }else{
        let spaces = (width - messageUser.length) / 2;

        for (i = 0; i < spaces; i++) {
            spacesMessageBefore.push(" ");
            spacesMessageAfter.push(" ");
        }

        console.log(`${spacesMessageBefore.join('')}${messageUser}${spacesMessageAfter.join('')}`);

    } 
}

centerMessage(messageUser, width)

