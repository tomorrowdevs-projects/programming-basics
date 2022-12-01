
// i declare my two global  variables, the  main string and the array where we'll work.
let string = prompt("Please, enter a phrase to check if it is palindrome: ");
let words = [];


// i create a function "cleanString" to delete all punctuation in the phrase.
    function cleanString (string) {
        let punctuationRegex = /[~`’!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/;
        let letterRegex = /[a-z]/;

        let chars = string.toUpperCase().split("");

        for (i = 0; i <= chars.length; i++){

            if ( (punctuationRegex.test(chars[i])) ) {
                    if ((letterRegex.test(chars[i + 1]) === true) && (letterRegex.test(chars[i - 1]) === true)) {
                        chars[i] = chars[i];
            } else {
                chars[i] = "";
            }
        }}

        chars = chars.join("");
        words = chars.split(" ");


    }

    // here i test if the reversed version of the array to string is equal so the original.
    function testPalindromes (array){

        let result = " ";
        let reversedArray = [...array].reverse();

        if (reversedArray.toString() == array.toString()) {
            result = "Your phrase is palindrome!";
        }  else {
            result = "Your phrase isn't palindrome!"
        }

        return result;

    }


cleanString(string);
alert(testPalindromes(words));