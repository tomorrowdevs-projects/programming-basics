// declaration of integer variables
let lengthStringBit8;
let i;
let count_8_Bit;
let check_Bit_parity;
// declaration of string-type variables
let parityBitString;
let parityBitInteger;
let result_message = "";
// function that determines whether a number is even or odd
function functionEvenOdd(number) {
    if (number % 2) { return false; }
    else { return true; }
}
// do-while loop to repeat the string entry to determine the Parity Bit.
do {
    parityBitString = prompt(`Insert string of 8 bits --> `);
    // string length 
    lengthStringBit8 = parityBitString.length;
    // string length check
    if (lengthStringBit8 < 8 || lengthStringBit8 > 8) {
        // Message the error
        console.log(`\nError! --> Value not valid!\n`);
        // exit when inserting an empty line
        if (isNaN(parityBitInteger)) { break; }
    }
    // " split('') " method to convert a string into an array
    parity_Split_Bit = parityBitString.split('');
    // initialises the " count_8_Bit " counter to " 0 ".
    count_8_Bit = 0;
    // loop for searching the number of strings ' 1 ' in the Array
    for (i = 0; i < parity_Split_Bit.length; ++i) {
        // condition for searching for elements (integers) of the Array with value " 1 ".
        if (parity_Split_Bit[i] == 1) {
            count_8_Bit++;
        }
    }
    // call to even or odd function
    check_Bit_parity = functionEvenOdd(count_8_Bit);
    // condition which checks by the function " functionEvenOdd " the number of " 1 "
    // present in the 8-bit string to determine whether the parity bit is " 0 " or " 1 ".
    if (check_Bit_parity === false) {
        // inserts the parity bit '1' as a string in the 'parity_Split_Bit' array
        parity_Split_Bit.push('1');
        // variable containing the message Bit Parity " 1 "
        result_message = `Bits transmitted --> ${parityBitString} - the parity bit is --> ${parity_Split_Bit[8]}`;
    }
    else {
        // inserts the parity bit '0' as a string in the 'parity_Split_Bit' array
        parity_Split_Bit.push('0');
        // variable containing the message Bit Parity " 1 "
        result_message = `Bits transmitted --> ${parityBitString} - the parity bit is --> ${parity_Split_Bit[8]}`;
    }
    // displaying the result on the screen
    console.log(`\n ${result_message} \n`);
} while (isNaN());