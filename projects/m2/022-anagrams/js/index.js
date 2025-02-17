// const prompt = require("prompt-sync")({ sigint: true}) ;

function isAnagram(originalText, potentialAnagram){
    if(originalText.length === potentialAnagram.length){
        for (let i = 0; i < potentialAnagram.length; i++) {
            if( ! originalText.includes( potentialAnagram.charAt(i) )){
                return false;
            }

            originalText = originalText.replace(potentialAnagram.charAt(i), '');
        }

        return true;
    }

    return false;
}

function init(){
    const askedOriginalText = prompt('Enter the original text.');
    const askedPotentialAnagram = prompt('Enter its anagram to verify.');

    console.log( isAnagram(askedOriginalText, askedPotentialAnagram) );

    return;
} 
init();