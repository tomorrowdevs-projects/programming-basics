// Rules to Convert Decimal to Binary

// Divide the number by 2 and note the remainder.
// Divide the quotient obtained by 2 and note the remainder.
// Repeat the same process till we get 0 as the quotient.
// Write the values of all the remainders starting from the bottom to the top.

const convertDecimalToBinary = function (number) {
    // base case
    if (number === 0 || number === 1) {
        return String(number);
    }

    const binaryDigit = String(number % 2);
    return convertDecimalToBinary((number - Number(binaryDigit)) / 2) + binaryDigit;

}

const value = Number(prompt("enter an integer to convert to binary : "));
alert(convertDecimalToBinary(value)); 