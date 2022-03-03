const romanNumeralDecoder = function (romanNumeral, prevNumber) {

    //base case
    if (!romanNumeral) {
        return 0;
    };

    // get last letter from roman numeral
    const lastLetter = romanNumeral[romanNumeral.length - 1];

    let convertedRomanNumeral;
    switch (lastLetter) {
        case "M":
            convertedRomanNumeral = 1000;
            break;
        case "D":
            convertedRomanNumeral = 500;
            break;
        case "C":
            convertedRomanNumeral = 100;
            break;
        case "L":
            convertedRomanNumeral = 50;
            break;
        case "X":
            convertedRomanNumeral = 10;
            break;
        case "V":
            convertedRomanNumeral = 5;
            break;
        case "I":
            convertedRomanNumeral = 1;
            break;
    }
    // if the previous number had a value greater than the current number,
    // its value will be negative
    // ES => IV  V = 5  I = -1  => 4 
    if (prevNumber > convertedRomanNumeral) {
        convertedRomanNumeral = convertedRomanNumeral * -1;
    }
    return convertedRomanNumeral + romanNumeralDecoder(romanNumeral.slice(0, -1), convertedRomanNumeral);
}
const value = prompt("enter an Roman numeral : ").toUpperCase();
const result = romanNumeralDecoder(value);
alert(`decoded Roman numeral ${result}`);
