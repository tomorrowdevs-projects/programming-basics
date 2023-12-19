const prompt = require("prompt-sync")({ sigint: true}) ;
/**
 * Converts a Roman numeral to an integer
 * @param {string} romanNumeral The number to convert 
 * @returns {number} The result of the conversion
 */
function romanNumeralToInteger(romanNumeral){
    romanNumeral = romanNumeral.trim();
    const romanNumeralsTable = {
        'M': 1000,
        'D': 500, 
        'C': 100, 
        'L': 50, 
        'X': 10, 
        'V': 5,
        'I': 1
    };

    if (romanNumeral.length === 0){
        return 0;
    } else if (romanNumeral.length > 1){
        const firstNumber = romanNumeralsTable[romanNumeral.charAt(0)];
        const secondNumber = romanNumeralsTable[romanNumeral.charAt(1)];

        if( firstNumber < secondNumber ) {
            return (secondNumber - firstNumber) + romanNumeralToInteger(romanNumeral.slice(2));
        }
    }

    return romanNumeralsTable[romanNumeral.charAt(0)] + romanNumeralToInteger(romanNumeral.slice(1));
}

function init(){
    const askedRoman = prompt('Please enter the Roman numeral you want to convert to an integer.');
    console.log( romanNumeralToInteger(askedRoman) ); 

    return;
} 
init();