const prompt = require("prompt-sync")({ sigint: true}) ;

const dictionary = [
    ' ',
    '.,?!:',
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MNO',
    'PQRS',
    'TUV',
    'WXYZ',
];

function createDictionaryByKey(dictionary){
    const dictionaryByKey = {};

    for (let i = 0; i < dictionary.length; i++) {
        const keys = dictionary[i];

        for (let j = 0; j < keys.length; j++) {
            if( dictionaryByKey[keys[j-1]] !== undefined ){
                dictionaryByKey[keys[j]] = dictionaryByKey[keys[j-1]] + i.toString();
            } else {
                dictionaryByKey[keys[j]] = i.toString();
            }
        }

    }

    return dictionaryByKey;
}

function convertToKeyPresses(message, dictionary){
    message = message.toUpperCase();
    convertedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const letter = message[i];

        if(Object.keys(dictionary).includes(letter)){
            convertedMessage += dictionary[letter];
        }
    }

    return convertedMessage;
}

function init(){
    const dictionaryByKey = createDictionaryByKey(dictionary);
    const message = prompt('Enter a message');
    const convertedMessage = convertToKeyPresses(message, dictionaryByKey);

    console.log(convertedMessage);

    return;
} 
init();