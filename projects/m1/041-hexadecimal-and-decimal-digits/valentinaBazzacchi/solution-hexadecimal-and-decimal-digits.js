// Main Program
let inputIntValue = +prompt("Entry one integer between 0 and 15");
int2hex(inputIntValue);

let inputHexValue = prompt("Entry one hexadecimal digits");
hex2int(inputHexValue);

// Functions
function int2hex(value) {
    
    let convValue; 
    
    if ( value >= 0 && value <= 15 ) {
    convValue = ( value.toString(16) );
    return alert( `The corrisponding exadecimal value is: ${convValue}` );

    } else {
    return alert("The value must be one integer between 0 and 15!");
    } 

} // end function

function hex2int(value) {
    
    let convValue;
    let testHex = /^[0-9a-f]{1}$/i;
    
    if ( testHex.test(value) ) {
    convValue = ( parseInt(value, 16) );
    return alert( `The corrisponding decimal value is: ${convValue}` );
    
    } else {
    return alert("The value must be one hexadecimal digits!"); 
    } 

} // end function
