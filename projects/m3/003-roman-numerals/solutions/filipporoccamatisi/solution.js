const romanNumeralDecoder = function (romanNumeral, prevNumber) {

    //base case
    if (!romanNumeral) {
        return 0;
    };

    // get last letter from roman numeral
    const lastLetter = romanNumeral[romanNumeral.length - 1];

    let convertedNumber;
    switch (lastLetter) {
        case "M":
            convertedNumber = 1000;
            break;
        case "D":
            convertedNumber = 500;
            break;
        case "C":
            convertedNumber = 100;
            break;
        case "L":
            convertedNumber = 50;
            break;
        case "X":
            convertedNumber = 10;
            break;
        case "V":
            convertedNumber = 5;
            break;
        case "I":
            convertedNumber = 1;
            break;
    }
    // if the previous number had a value greater than the current number,
    // its value will be negative
    // ES => IV  V = 5  I = -1  => 4 
    if (prevNumber > convertedNumber) {
        convertedNumber = convertedNumber * -1;
    }
    return convertedNumber + romanNumeralDecoder(romanNumeral.slice(0, -1), convertedNumber);
}
const value = prompt("enter an Roman numeral : ").toUpperCase();
const result = romanNumeralDecoder(value);
alert(`decoded Roman numeral ${result}`);
