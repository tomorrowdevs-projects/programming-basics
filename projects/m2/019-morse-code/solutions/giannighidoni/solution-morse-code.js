const morseCode = {
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
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "Á": ".--.-",
    "É": "..-..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
};

const phrase = "The cat is on the table.";
const phraseArr = phrase.split("");
const outputArr = [];

phraseArr.forEach(e => {
    for(let key in morseCode){
        if(key === e.toUpperCase()){
            outputArr.push(morseCode[key]);
        }
    }
})
const outResult = outputArr.join(" ");
console.log(outResult);