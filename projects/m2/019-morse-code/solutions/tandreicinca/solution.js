// I have to write a program that convert a text into morse code 1. I have to write a function in which put the object of the keys that have to be converted (a. other keys will be removed from the text b. after any key convertion must be a space) 2. then I'll ask an input from the user and I put on work my function

function morseCode(input) {
    const objCode = {           // here the object
        A: '.-',	
        N: '-.',
        B: '-...',	
        O: '---',
        C: '-.-.',	
        P: '.--.',
        D: '-..',
        Q: '--.-',
        E: '.',
        R: '.-.',
        F: '..-.',
        S: '...',
        G: '--.',
        T: '-',
        H: '....',
        U: '..-',
        I: '..',
        V: '...-',
        J: '.---',
        W: '.--',
        K: '-.-', 
        X: '-..-',
        L: '.-..', 
        Y: '-.--',
        M: '--', 
        Z: '--..',
        '1': '.----',	
        '6': '-....',
        '2': '.---',
        '7': '--...',
        '3': '...--',
        '8': '---..',
        '4': '....-',
        '9': '----.',
        '5': '.....', 
        '0': '-----',
        'Á': '.--.-',	
        'Ä': '.-.-',
        'É': '..-..',
        'Ñ': '--.--',
        'Ö': '---.',
        'Ü': '..--'
    }
    const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;         // I remove the punctuation mark that are not in my object and I formatize the string to upper case
    const result = input.replace(regex, '');
    let upText = result.toUpperCase();
    console.log(upText);
    const output = [];
    for (x of upText) {                                         // here the for loop to convert each key in its value
        for (i = 0; i < Object.keys(objCode).length; i++)
            if (x == Object.keys(objCode)[i]) {
                output.push(Object.values(objCode)[i])
            }
    }
    console.log(output)
    return output.join(' ')
}

let text = prompt('Write something and I\'m gonna convert it in morse code')

alert(morseCode(text))