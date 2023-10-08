let letter = prompt("Enter a letter");

if (letter == "a" || "e" || "i" || "o" || "u" ) {
    console.log ("The entered letter is a vowel");
} else if ( letter == "y") {
    console.log ("sometimes y is a vowel, and sometimes y is a consonant");
} else {
    console.log (`The letter ${letter} is a consonant`);
}