const userString = prompt('Enter a message to convert in morse code').toUpperCase();


const getMorseCode = (string) => {
    let result = [];
    const morseCode = {

        'A': '.-'   ,  'B': '-...',
        'C': '-.-.' ,  'D': '-..' ,
        'E': '.'    ,  'F': '..-.',
        'G': '--.'  ,  'H': '....',
        'I': '..'   ,  'J': '.---',
        'K': '-.-'  ,  'L': '.-..',
        'M': '--'   ,  'N': '-.'  ,
        'O': '---'  ,  'P': '.--.',
        'Q': '--.-' ,  'R': '.-.' ,
        'S': '...'  ,  'T': '-'   ,
        'U': '..-'  ,  'V': '...-',
        'W': '.--'  ,  'X': '-..-',
        'Y': '-.--' ,  'Z': '--..',
        'Á': '.--.-',  'É': '..-..',
        'Ö': '---.' ,  'Ä': '.-.-',
        'Ñ': '--.--',  'Ü': '..--',
         1: '.----' ,   2: '..---',
         3: '...--' ,   4: '....-',
         5: '.....' ,   6: '-....',
         7: '--...' ,   8: '---..',
         9: '----.' ,   0: '-----'
    }

    for (let i = 0; i < string.length; i++) {
        for (let key in morseCode) {
            if (key === string[i]) {
                result.push(morseCode[key]);
            }
        }
    }

    return result.join(' ');

}

alert(getMorseCode(userString));
