//019-morse-code

const inputText = prompt('Enter the text to be converted in morse code: ','').toUpperCase()

//creo i tasi del telefono
const morseCode = {
    'A': '._',
    'B': '_...',
    'C': '_._.',
    'D': '_..',
    'E': '.',
    'F': '.._.',
    'G': '__.',
    'H': '....',
    'I': '..',
    'J': '.___',
    'K': '_._',
    'L': '._..',
    'M': '__',
    'N': '_.',
    'O': '___',
    'P': '.__.',
    'Q': '__._',
    'R': '._.',
    'S': '...',
    'T': '_',
    'U': '.._',
    'V': '..._',
    'W': '.__',
    'X': '_.._',
    'Y': '_.__',
    'Z': '__..',
    1: '.____',
    2: '..___',
    3: '...__',
    4: '...._',
    5: '.....',
    6: '_....',
    7: '__...',
    8: '___..',
    9: '____.',
    0: '_____',
    'Á': '.__._',
    'É': '.._..',
    'Ö': '___.',
    'Ä': '._._',
    'Ñ': '__.__',
    'Ü': '..__'
};

//assegno ad un arrey ogni carattere di input
function tokenizeString(string){
    let tokenization = [];
    tokenization = string.split(/(.)/).filter(e => e != ''); 
    return tokenization;
}
//traduco il testo in codice morse
function morseTranslate() {
    let morseMessage = [];
    tokenizeString(inputText).forEach(element => {
        morseMessage.push(morseCode[element]);
    });
    morseMessage = morseMessage.filter(element => element != undefined);
    morseMessage = ((morseMessage.toString()).replaceAll(',',' ')).replaceAll('_','-');
    return morseMessage;
}
console.log(morseTranslate());