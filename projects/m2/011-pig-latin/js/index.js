
// i start declaring my global variables, the phrase we will translate and two array with some methods on to clean the phrase.

let inputPhrase = prompt("Please, enter a phrase: ");

let cleanedPhrase = inputPhrase.replaceAll(/[^\w\s\’]/g, " ");

let words = cleanedPhrase.toLowerCase().split(" ");



// here i create a function to clean up even more the array from empty elements.

    function cleanArray (array) {

        for (i = 0; i < array.length; i ++) {
            if (array[i] === ""){
            array.splice(i, 1);
            }
        }

    return array;
    }

let cleanedArray = cleanArray(words);



// here there is the function that translate the cleaned phrase in pig latin. i iterate on every element of the "cleanedArray" an if statement, where if the word begins with a vowel the it simply adds  "way" to the  end of the word. while if it begins with a consonat split the word in two with  the use of a RegExp and the match method, the sums up the splitted subStrings to create the final word.

    function pigLatin (array) {

    let latinPhrase = [];
    let vowelRegex = /[aeiou]+/;

        for (element of array) {

            let word = element;

            if (vowelRegex.test(word[0])) {
                word = word + "way";

            } else {

                let firstMatch = word.match(vowelRegex) || 0;
                let vowel = word.indexOf(firstMatch[0]);
                word = word.substring(vowel) + word.substring(0,  vowel) + "ay";

            }


        latinPhrase.push(word);
        }


    return latinPhrase.join(" ");
    }


alert(pigLatin(cleanedArray));
