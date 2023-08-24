// # Morse Code

// Morse code is an encoding scheme that uses dashes and dots to represent digits and letters. 
// In this exercise, you will write a program that uses a dictionary to store the mapping from these symbols to Morse code. 

// Use a period to represent a dot, and a hyphen to represent a dash. The mapping from characters to dashes and dots is shown in Table 6.1.

// Your program should read a message from the user. Then it should translate all of
// the letters and digits in the message to Morse code, leaving a space between each sequence of dashes and dots. 
// Your program should ignore any characters that are not listed in the previous table. 

// The Morse code for Hello, World! is shown below:


// .... . .-.. .-.. --- .-- --- .-. .-.. -..

// |Characted|Code|Character|Code|
// |---------|----|---------|----|
// |A|	. _|N|	_ .	| 
// |B|	_ . . .|O|	_ _ _|	 
// |C|_ . _ .|P|. _ _ .| 
// |D|_ . .|Q|_ _ . _| 
// |E|.|R|. _ .| 
// |F|. . _ .|S|. . .| 
// |G|_ _ .|T|_| 
// |H|. . . .|U|. . _| 
// |I|. .|V|. . . _| 
// |J|. _ _ _|W|. _ _| 
// |K|_ . _|X|_ . . _| 
// |L|. _ . .|Y|_ . _ _| 
// |M|_ _|Z|_ _ . .| 
 	 	 	 			 
// Numbers

// |Characted|Code|Character|Code|
// |---------|----|---------|----|
// |1|. _ _ _ _|6|_ . . . .| 
// |2|. . _ _ _|7|_ _ . . .| 
// |3|. . . _ _|8|_ _ _ . .| 
// |4|. . . . _|9|_ _ _ _ .| 
// |5|. . . . .|0|_ _ _ _ _| 
 	 	 	 			 
// Acented characters

// |Characted|Code|Character|Code|
// |---------|----|---------|----|
// |Á|. _ _ . _|Ä|. _ . _| 
// |É|. . _ . .|Ñ|_ _ . _ _| 
// |Ö|_ _ _ .|Ü|. . _ _| 


// # Codice Morse

// Il codice Morse è uno schema di codifica che utilizza trattini e punti per rappresentare cifre e lettere.
// In questo esercizio scriverai un programma che utilizza un dizionario per memorizzare la mappatura da questi simboli al codice Morse.

// Utilizza un punto per rappresentare un punto e un trattino per rappresentare un trattino. La mappatura dai caratteri ai trattini e ai punti è mostrata nella Tabella 6.1.

// Il tuo programma dovrebbe leggere un messaggio dall'utente. Quindi dovrebbe tradurre tutto
// trasforma le lettere e le cifre nel messaggio in codice Morse, lasciando uno spazio tra ciascuna sequenza di trattini e punti.
// Il programma dovrebbe ignorare tutti i caratteri non elencati nella tabella precedente.

// Il codice Morse per Hello, World! è mostrato di seguito:


// .... . .-.. .-.. --- .-- --- .-. .-.. -..

// |Carattere|Codice|Carattere|Codice|
// |---------|----|---------|----|
// |A| . _|N| _ . |
// |B| _ . . .|O| _ _ _|
// |C|_ . _ .|P|. _ _ .|
// |D|_ . .|Q|_ _ . _|
// |E|.|R|. _ .|
// |F|. . _ .|S|. . .|
// |G|_ _ .|T|_|
// |H|. . . .|U|. . _|
// |Io|. .|V|. . . _|
// |J|. _ _ _|W|. _ _|
// |K|_ . _|X|_ . . _|
// |L|. _ . .|Y|_ . _ _|
// |M|_ _|Z|_ _ . .|
 
// Numeri

// |Carattere|Codice|Carattere|Codice|
// |---------|----|---------|----|
// |1|. _ _ _ _|6|_ . . . .|
// |2|. . _ _ _|7|_ _ . . .|
// |3|. . . _ _|8|_ _ _ . .|
// |4|. . . . _|9|_ _ _ _ .|
// |5|. . . . .|0|_ _ _ _ _|
 
// Caratteri accentati

// |Carattere|Codice|Carattere|Codice|
// |---------|----|---------|----|
// |Á|. _ _ . _|Ä|. _ . _|
// |É|. . _ . .|Ñ|_ _ . _ _|
// |Ö|_ _ _ .|Ü|. . _ _|

const morseCoding = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2:"..---",
    3:"...--",
    4:"....-",
    5:".....",
    6:"-....",
    7:"--...",
    8:"---..",
    9:"----.",
    0:"-----",
    Á: ".__._",
    Ä: "._._",
    É: ".._..",
    Ñ: "__.__",
    Ö: "___.",
    Ü: "..__"
} 

let string = "Hello World";
let stringUppercase = string.toUpperCase();

function transormTextInMorseCode(text, obj){
    let morseCodeText = [];

    let textArray = text.split('');
    console.log(textArray)

     morseCodeText = textArray.map((singleLetter)=>{
        if(singleLetter in obj){
           return obj[singleLetter] 
        }
    })
    
    return `the text ${text} is translated into the bite code: ${morseCodeText.join(" ").trim()}`
}




console.log(transormTextInMorseCode(stringUppercase ,morseCoding));