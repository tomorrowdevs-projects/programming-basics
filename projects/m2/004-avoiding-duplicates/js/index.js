
// to begin i declare my only global variable,  an array where i'll store all the input words.
let wordsArray = [];


// then i create a function to store the words in the array while the input isn't an empty string with the push method and the trim    method for the strings;
    function getWords () {

        let word = "empty string";

        while (word.trim() !== "") {
            word = prompt("Please, enter a word: ")
            wordsArray.push(word.trim());
        }
    }


// this funtion use the set method to create another array without all the duplicated values. 
    function deleteDuplicate (array) {
        let cleanWordsArray = [...new Set(array)];
        cleanWordsArray.pop();
        return cleanWordsArray.join(", ");

    }

alert("--- Avoiding Duplicates --- \nEnter words, don't worry about duplicates, we'll take care of 'em!")
getWords ();
alert("Here is your list of words: \n\n" + wordsArray.join(", ") + "\n\n\nAnd here we deleted all of the duplicates!\n\n" + deleteDuplicate(wordsArray));