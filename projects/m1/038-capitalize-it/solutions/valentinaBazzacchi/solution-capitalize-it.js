function capitalizeIt(string) {
    // Initialize the variables
    let capString;
    let nextCapString;
    let checkNonSpace = /\S/; // RegExp to find a non-whitespace character

    // Capitalize the first non-space character in the string
    let i = 0;
    while (true) {
        if (checkNonSpace.test(string[i])) break;
        i++;
        } // End while
    capString = string.replace(string[i], string[i].toUpperCase());

    // Capitalize the first non-space character after a period, exclamation mark or question mark 
    for (let i = 0; i < string.length; i++ ) {
        if (string[i] == "?" || string[i] == "." || string[i] == "!") {
            while (i < string.length) {
                if (checkNonSpace.test(string[i+1])) break;
            i++;
            } // end while
        // Used string.charAt(i+n) instead of string[i+n] because if the string ends with a "!"" or "." or "!" the second returns "undefined" and an error occurs
        nextCapString = string.charAt(i+1).toUpperCase() + string.slice(i+2); 
        capString = capString.slice(0, i+1) + nextCapString;
        } // end first if
    } // end for

    // Capitalize a lowercase “i” if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe
    // Invoked a function to create the new substring to be used to replace the matches to the given RegExp.
    capString = capString.replace(/\si\s|\si\?|\si\.|\si!|\si'|\si’/g, capString => capString.toUpperCase());

    return capString;
} // end function

// Main program
let userString = prompt("Write here what you want!");
alert(capitalizeIt(userString));

// -------> The following solution works better for capitalizing the lowercase "i" than using replace() with RegExp <-------

// Capitalize the first non-space character after a period, exclamation mark or question mark 
for (let i = 0; i < string.length; i++ ) {
    if (string[i] == "?" || string[i] == "." || string[i] == "!") {
        
        while (i < string.length) {
            if (checkNonSpace.test(string[i+1])) break;
        i++;
        } // end while
    
    nextCapString = string.charAt(i+1).toUpperCase() + string.slice(i+2); 
    capString = capString.slice(0, i+1) + nextCapString;
    
    // Capitalize a lowercase “i” if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe
    } else if (string[i] == "i" && string[i-1] == " " 
    && (string[i+1] == " " || string[i+1] == "." || string[i+1] == "!" || string[i+1] == "?" || string[i+1] == "'"|| string[i+1] == "’")) {
    
    nextCapString = string.charAt(i).toUpperCase() + string.slice(i+1);
    capString = capString.slice(0, i) + nextCapString;
    } // end else-if
} // end for