// Main program

let inputValue = prompt("Enter a number/value to convert");
let fromBase = prompt("Enter the starting base");

    // Test the correct range of the bases
    if (fromBase < 2 || fromBase > 16) {
    alert ("The accepted bases for conversion are between 2 and 16!");
    } else {  
    let toBase = prompt("Enter the ending base");

        if (toBase < 2 || toBase > 16) {
        alert ("The accepted bases for conversion are between 2 and 16!");
        } else {
        baseConverter(inputValue, fromBase, toBase);
        } // end second condition

} //end first condition

// This function works for all base conversions, icluding the conversion from an arbitrary base to base 10 and vice-versa
function baseConverter(value, fromBase, toBase) {

    // First converts the input value from starting base to decimal base with parseInt
    let decimalNum = parseInt(value, fromBase);
    
    // Verify if the input value is valid for the starting base
    if ( isNaN(decimalNum) ) {
    alert(`The conversion cannot be performed, the entered value is not included in base ${fromBase}!`);
    } else {
    // After converts decimal number into the corresponding value in ending base 
    let convValue = decimalNum.toString(toBase);
    return alert(`The convertion result from base ${fromBase} to base ${toBase} is ${convValue} `);
    }

} // end function