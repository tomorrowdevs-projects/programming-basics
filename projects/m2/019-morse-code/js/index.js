const morseTranslate = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "0":"-----" 
}
 	 	 	 			 

const string = "Hello, World!";

function encodeMorse(d,s) {
    const arrayToRemove = ["!","?",",",";",":"," "];
    const array = [];
    for (i = 0; i < s.length; i++) {
        if (!arrayToRemove.includes(s[i])){
        const upper = s[i].toUpperCase();
        array.push(d[upper]);
        }
    }
    for (n=0; n< array.length; n)
    return array.join(" ")
}

console.log(encodeMorse(morseTranslate,string));