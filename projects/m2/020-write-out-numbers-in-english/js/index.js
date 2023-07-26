// const prompt = require("prompt-sync")({ sigint: true}) ;

function generate0to99Dictionary(from0to9, from10to19){
    const tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    const dictionary = {...from0to9, ...from10to19};

    for (let i = 20; i < 100; i++) {
        const numberInLetters = i.toString();

        dictionary[i] = tens[numberInLetters.charAt(0)];

        if( numberInLetters.charAt(1) !== '0' ){
            dictionary[i] += ' ' + from0to9[numberInLetters.charAt(1)];
        } 
    }

    return dictionary;
}

function convertNumberToWords(number){
    const from0to9 = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    
    const from10to19 = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    const dictionary0to99 = generate0to99Dictionary(from0to9, from10to19);

    let numberToWords = '';

    if(number.length < 3){
        if(number === '0'){
            numberToWords = 'zero';
        } else {
            numberToWords = dictionary0to99[number];
        }
    } else {
        const index0To99 = number.charAt(1) === '0' ? number.charAt(2) : number.charAt(1)+number.charAt(2);
        numberToWords = from0to9[number.charAt(0)] + ' hundred ' + dictionary0to99[index0To99];
    }

    return numberToWords;
}


function init(){
    const askedNumber = prompt('Enter a positive integer value between 0 and 999');
    const askedNumberToWords = convertNumberToWords(askedNumber);

    console.log(askedNumberToWords);

    return;
} 
init();