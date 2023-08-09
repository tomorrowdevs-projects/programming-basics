// const prompt = require("prompt-sync")({ sigint: true}) ;

function convertToMorseCode(message){
    message = message.toUpperCase();
    message = message.replaceAll(' ', '');

    let convertedMessage = '';
    const morseCodeDictionary = {
        A: '.-',
        B: '-...',
        C: '-.-.',
        D: '-..',
        E: '.',
        F: '..-.',
        G: '--.',
        H: '....',
        I: '..',
        J: '.---',
        K: '-.-',
        L: '.-..',
        M: '--',
        N: '-.',
        O: '---',
        P: '.--.',
        Q: '--.-',
        R: '.-.',
        S: '...',
        T: '-',
        U: '..-',
        V: '...-',
        W: '.--',
        X: '-..-',
        Y: '-.--',
        Z: '--..',
        1: '.----',
        2: '..---',
        3: '...--',
        4: '....-',
        5: '.....',
        6: '-....', 
        7: '--...', 
        8: '---..', 
        9: '----.', 
        0: '-----',
        Á: '.--.-',
        É: '..-..',
        Ö: '---.',
        Ä: '.-.-',
        Ñ: '--.--',
        Ü: '..--',
    };

    for (let i = 0; i < message.length; i++) {
        const letter = message[i];

        if(letter in morseCodeDictionary){
            convertedMessage += morseCodeDictionary[letter] + ' ';
        }
    }

    if( convertedMessage.charAt(convertedMessage.lenght-1) === ' ' ){
        convertedMessage.slice(0,-1);
    }

    return convertedMessage;
}

function init(){
    const message = prompt('Enter a message');
    const convertedMessage = convertToMorseCode(message);

    console.log(convertedMessage);

    return;
} 
init();