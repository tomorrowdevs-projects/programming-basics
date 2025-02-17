// const prompt = require("prompt-sync")({ sigint: true}) ;

function getWordsLowercase(phrase){
    const words = [''];

    if(typeof phrase === "string" && phrase.length > 0){
        const punctuation = [',','.','?','‐','\'','!',':',';'];
        let j = 0;

        for (let i = 0; i < phrase.trim().length; i++) {
            const letter = phrase.charAt(i);

            if( letter !== ' ' ){
                if( ! punctuation.includes(letter) ){
                    words[j] += letter.toLowerCase();
                }
            } else {
                j++;
                words[j] = '';
            }
        }
    }

    return words;
}

function isPalindrome(phrase){
    let isPalindrome = false;

    const words = getWordsLowercase(phrase);

    for (let i = 0; i < Math.ceil(words.length/2); i++) {
        if( words[i] === words[words.length -i -1] ){
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

function init(){
    const askedPhrase = prompt( 'Enter a string to check if it is a word-for-word palindrome.' );
    console.log( isPalindrome(askedPhrase) );

    return;
} 
init();