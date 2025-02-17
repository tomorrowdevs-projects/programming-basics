// const prompt = require("prompt-sync")({ sigint: true}) ;

function getPhrases(){
    const phrases = [];
    
    let phrase = prompt('Enter the items, leave a blank line when you want to stop the program.');

    while ( phrase.length > 0 && phrase.trim() !== '') {
        phrases.push(phrase);
        phrase = prompt('Enter the items, leave a blank line when you want to stop the program.');
    }
    return phrases;
}

function getWords(phrase){

    const words = [''];

    if(typeof phrase === 'string' && phrase.length > 0){
        const punctuation = [',','.','?','‐','\'','!',':',';'];
        let j = 0;

        for (let i = 0; i < phrase.trim().length; i++) {
            const letter = phrase.charAt(i);

            if( letter !== ' ' ){
                if( ! punctuation.includes(letter) ){
                    words[j] += letter;
                }
            } else {
                j++;
                words[j] = '';
            }
        }
    }

    return words;
}

function generateItemsList(words){
    let items = '';
    
    if (words.length > 1){
        for (let i = 0; i < words.length-1; i++) {
            items += words[i] + ', ';
        }

        items = items.slice(0,-2);
        items += ' and ' + words[words.length-1];
    } else {
        items += words[0];
    }

    return items;
}

function init(){
    const askedPhrases = getPhrases();

    let words = [];
    if( askedPhrases.length > 0 ){
        for (let i = 0; i < askedPhrases.length; i++) {
            words = words.concat( getWords(askedPhrases[i]) );
        }
    }

    if( words.length > 0 ){
        console.log(generateItemsList(words));
    }

    return;
} 
init();