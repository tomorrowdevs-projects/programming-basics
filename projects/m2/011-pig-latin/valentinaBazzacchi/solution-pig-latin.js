// MAIN PROGRAM
// Initialize a global variable for checking the vowels
let isVowel = /[a|e|i|o|u]/;
// Ask the user a string to translate in Pig Latin
let string = prompt("Enter a string to translate in Pig Latin");
// Display the translated string
alert(translateInPigLatin(string));

// MAIN FUNCTION ------------------------------------------------------------------
function translateInPigLatin(string) {
    // Split string in a list of words
    let words = string.split(" ");
    
    // For each word of the list...
    for (let i = 0; i < words.length; i++) {
        // Split the word in a list of letters
        let letters = words[i].split("");
        
        // If the "current" word begins with a VOWEL...
        if(isVowel.test(letters[0])) { 
            //..."way" is added to the end of the word
            words[i] += "way";
        // If it begins with a CONSONANT...
        } else {
            //...Translate it trought the function
            words[i] = translateConsonant(words[i], letters)
        } // end conditions
    } // end For Loop 
    return words.join(" ");
} // END FUNCTION 

// FUNCTION to translate the word begins with a consonant ------------------------------
function translateConsonant(word, letters) {
    let removedConsonants = [];
    // For each letters of the word...
    for (let i = 0; i < letters.length; i++) {
        // If the "current" letter is a vowel...
        if (isVowel.test(letters[i])) {
            // Slice the word starting from the index of vowel and break the loop
            word = word.slice(i);
            break;
        // If it is a consonant add it to the list of removed consonants    
        } else {
            removedConsonants.push(letters[i]);  
        }// end condition
    
    }// end For loop
    return word + removedConsonants.join("") + "ay";  
}// end function