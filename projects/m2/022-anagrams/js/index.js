
let wordOne = prompt("--- Anagrams ---\n\nEnter two words or two string to see if thei are anagrams.\n\nPlease, enter the first word/string: ");
let wordTwo = prompt("Please, enter the second word/string: ")

//the first function i create after declaring my global variables, is "cleanString" that takes a string as its only parameter and remove from it every char that isn't a letter.
    function cleanString (string) {
        let word = string.toLowerCase().replace(/\W+/g, "");
        return word;
    }


wordOne = cleanString(wordOne);
wordTwo = cleanString(wordTwo);

//then i declare the function "checkAnagrams" that takes two strings as its parameters and make two arrays from them with the split method. the two array are then passed through an if statement that check if both have the same char in the same position thanks to the "sort" method. 
    function checkAnagrams (stringOne, stringTwo) {

        stringOne = stringOne.split("");
        stringTwo = stringTwo.split("");
        
        if (stringOne.sort().toString() === stringTwo.sort().toString()){
            result = "Your words are anagrams!"
        } else {
            result = "Your words aren't anagrams!"
        }

        return result;
    }

alert(checkAnagrams(wordOne, wordTwo));

