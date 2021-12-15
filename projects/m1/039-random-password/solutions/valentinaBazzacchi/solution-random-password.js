function generateRandomPsw() {

    let charsFromAscii = "";
    let randomPassword = "";

    // Generate a string with chars from positions 33 to 126 of the ASCII table
    for (let i = 33; i < 127; i++) {
        charsFromAscii += String.fromCharCode(i); 
    }
    
    // Generate the random password length from 7 to 10 characters --> Math.floor(Math.random() * (max - min + 1) + min
    let randomPswLength = Math.floor(Math.random() * 4) + 7;

    // Create a loop that inserts a random character from "charsFromAscii" into a new string. The action is repeated for 7 or 8 or 9 or 10 times.
    for (i = 0; i < randomPswLength; i++) {
        randomPassword += charsFromAscii.charAt(Math.floor(Math.random() * charsFromAscii.length));
    } // end for

    return randomPassword;

} // end function

// Main program 
console.log(generateRandomPsw());