function pswValidation(password) {
    let testLowerCase, testUpperCase, testNumbers, testLength;
    
    // The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
    // If no match is found it returns "null".
    
    if (password.match(/[A-Z]/) !== null) {
    testLowerCase = true;
    } else {
    testLowerCase = false; 
    }
    
    if (password.match(/[a-z]/) !== null) {
    testUpperCase = true;  
    } else {
    testUpperCase = false;  
    }
    
    if (password.match(/[0-9]/) !== null) {
    testNumbers = true;
    } else {
    testNumbers = false; 
    }
    
    if (password.length >= 8) {
    testLength = true; 
    } else {
    testLength = false;  
    }
    
    if (testLowerCase && testUpperCase && testNumbers && testLength) {
    return true;
    } else {
    return false;
    }

} // end function

// Main program

let userPassword = prompt("Write here your password");

if (pswValidation(userPassword)) {
alert("Valid Password!");
} else {
alert("Invalid Password!");
}