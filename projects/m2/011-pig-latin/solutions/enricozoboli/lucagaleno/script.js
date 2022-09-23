// 011-pig-latin m2

/*
Pig Latin is a language constructed by transforming English words. While the ori- gins of the language are unknown, 
it is mentioned in at least two documents from the nineteenth century, suggesting that it has existed for more than 100 years. 
The following rules are used to translate English into Pig Latin:
If the word begins with a consonant (includingy), then all letters at the beginning of the word, up to the first vowel (excluding y), 
are removed and then added to the end of the word, followed by ay. For example, computer becomes omputercay and think becomes inkthay.
If the word begins with a vowel (not including y), then way is added to the end of the word. For example, algorithm becomes algorithmway 
and office becomes officeway.
Write a program that reads a line of text from the user. Then your program should translate the line into Pig Latin and display the result. 
You may assume that the string entered by the user only contains lowercase letters and spaces.
*/

let sentence = prompt('Please enter the words to be converted: ','').toLowerCase();

function sentenceToPigLatin(notPigSentence){

let words = notPigSentence; 
words = words.split(' ');

words.forEach((element, index) => {
    
        if ((/\b[aeoiu]/i).test(element) === true) {

            element = element + 'way';
            words[index] = element; //to update the array

        }else {
            //check the position of the firse vowels
            let lengthElement = element.length;
            let firstPositionVowel = element.match(/\w[aeoiuy]/i).index + 1
            let extractedLetters = element.substr(0,firstPositionVowel);

            element = element.substr(firstPositionVowel, lengthElement);
            element = element.concat(extractedLetters,'way');

            words[index] = element; //to update the array
        };
    });

let newSentece = words.join(' ');
return newSentece;
}

console.log('Initial words:' + sentence)
console.log('Converted solution (pig latin): ' + sentenceToPigLatin(sentence))