const error = document.getElementById('error');
const content = document.getElementById('content');
const passwordDiv = document.getElementById('password');
const allWordDiv = document.getElementById('allWords');
const word1Span = document.getElementById('word1');
const word2Span = document.getElementById('word2');
const regen = document.getElementById('regen');
const input = document.getElementById('input');

//given 2 values, returns a random number between 2
function randomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//called in the onchange in the html inputs, reads a text file, counts how often word are repeated, shows them in order of frequency
function readFiles (input) {
 
    const file = input.files[0];
    const typeFile = file.type;
    error.innerHTML = '';
    
    if (typeFile === 'text/plain' || typeFile === 'text/markdown') {
        
        const reader = new FileReader();

        reader.onload = event => {

            //transform the text into an array of the single word without punctuation at the beginning and end of words
            const textToArrayWord = event.target.result.replace(/[^\w\s\']|_/g, '').split(/\s+/);

            //take all words between 7 and 10 characters and without apostrophes or punctuation
            const longerWord = textToArrayWord.filter(word => word.length > 7 && word.length < 10 && /^[a-zA-Z]+$/.test(word))

            //if the inserted file does not have at least 10 useful words, I send an error message
            if (longerWord.length < 10) 
                error.innerText = `ERROR : the file you entered does not have enough words to calculate the password`;
            else {
                function calculatePswd () {
                    //take a word from the first half of the array and the second from the other half
                    const halfArr = (longerWord.length -1) /2;
                    const indexW1 = randomNum(0, halfArr);
                    const word1 = longerWord[indexW1];
                    const word1Upper = word1.toUpperCase();
                    const indexW2 = randomNum(halfArr, longerWord.length -1)
                    const word2 = longerWord[indexW2];

                    //define the length of the password and the length of the 2 cut words that will make up the password
                    const finalWord1Lenght = randomNum(3,7);
                    const passwordLenght = randomNum(finalWord1Lenght+3 <= 8 ? 8 : finalWord1Lenght+3, 10);
                    const finalWord2Lenght = passwordLenght- finalWord1Lenght;

                    //cut the 2 words by randomly choosing the piece within the word
                    const index1 = randomNum(0,word1.length - finalWord1Lenght);
                    const index2 = randomNum(0,word2.length - finalWord2Lenght);
                    const finalWord1 = word1Upper.slice(index1, index1+finalWord1Lenght);
                    const finalWord2 = word2.slice(index2, index2+finalWord2Lenght);

                    //randomly decide whether to put word1 or 2 first
                    let password = '';
                    Math.random() > 0.5 ? password = finalWord1+finalWord2 : password = finalWord2+finalWord1;

                    //show the result
                    content.classList.remove("hidden");

                    //insert all the words as span giving the chosen class to the selected words and insert them in its div
                    const allWordString = longerWord.reduce( (result, el, index) => {
                        if (el === word1 && index === indexW1) result += `- <span class="chosen">${word1}</span> -`;
                        else if (el === word2 && index === indexW2) result += `- <span class="chosen">${word2}</span> -`;
                        else result += `- <span>${el}</span> -`;
                        return result
                    }, '');
                    allWordDiv.innerHTML = allWordString;

                    //insert the 2 chosen words giving the class w1Part or w2Part in the characters corresponding to those chosen for the password
                    word1Span.innerHTML = `${word1Upper.slice(0, index1)}<span class='w1Part'>${finalWord1}</span>${word1Upper.slice(index1+finalWord1Lenght, word1.length)}`;
                    word2Span.innerHTML = `${word2.slice(0, index2)}<span class='w2Part'>${finalWord2}</span>${word2.slice(index2+finalWord2Lenght, word2.length)}`;

                    //enter the password
                    passwordDiv.innerHTML = `PASSWORD : ${password}<br><br> Password Lenght : ${passwordLenght}`;

                    //remove input file and show the regeneration button
                    input.classList.add('hidden');
                    regen.classList.remove('hidden');
                };

            calculatePswd();

            regen.addEventListener( 'click', () => calculatePswd());
            };
        };

        //I show the error occurred during loading
        reader.onerror = event => 
            error.innerText = event.target.error.name;

        reader.readAsText(file);

    //error message for file type other than text
    } else error.innerText = `ERROR : Insert only text file\n\nType of your file: ${typeFile ? typeFile : ' undefined...Sorry'}`;
};