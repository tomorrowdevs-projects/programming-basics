// const prompt = require("prompt-sync")({ sigint: true}) ;

function convertNumberToWords(number){
    let numberToWords = '';
    const numberToInteger = parseInt(number);

    if( Number.isInteger(numberToInteger) && numberToInteger < 1000 ){

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

        if(numberToInteger > 99 && number.charAt(0) !== '0'){
            numberToWords += `${from0to9[number.charAt(0)]} hundred `;
        }

        if(numberToInteger % 100 > 19){
            numberToWords += `${tens[number.charAt(number.length - 2)]} ${from0to9[number.charAt(number.length - 1)]}`;
        } else {
            numberToWords += {...from0to9, ...from10to19}[numberToInteger % 100];
        }
        
        if(numberToInteger === 0){
            numberToWords = 'zero';
        }

    } else {
        numberToWords = 'Please enter an integer number between 0 and 999';
    }

    return numberToWords.trim();
}


function init(){
    const askedNumber = prompt('Enter a positive integer value between 0 and 999');
    const askedNumberToWords = convertNumberToWords(askedNumber);

    console.log(askedNumberToWords);

    return;
} 
init();