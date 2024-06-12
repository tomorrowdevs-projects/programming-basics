function stringToPigLatin (string){
    const mark = ['.',',','?','!','-','_',"'",':',';','"']
    const word = string.split(' ');

    word.forEach((element, index) => {
        let i = element.length;
        let punc = '';
        let puncBefore = '';

        while(i--){
            if(mark.some(el => element[i] === el)) punc = element[i] + punc;
            else break;
        };

        for(x=0; x < element.length; x++){
            if(mark.some(el => element[x] === el)) puncBefore = element[x] + puncBefore;
            else break;
        }

        if(element.length !== punc.length) 
            word[index] = puncBefore + toPigLatin(element.slice(puncBefore.length, element.length-punc.length)) + punc;
    });
    return word.join(' ');
};

function toPigLatin (word) {
    let firstChar = '';

    if(/[aeiou]/i.test(word[0])) return word + 'way';
    else{
        for(i=0; i < word.length; i++){
            if(!(/[aeiou]/i.test(word[i]))) firstChar += word[i];
            else break;
        };
        return word.substr(firstChar.length) + firstChar + 'ay';
    };
};


let phrase = prompt('Enter a phrase');

if(/^[a-zA-Z\s\W]+$/.test(phrase)) alert(`Your String:\n${phrase}\n\nTranslated into Pig Latin:\n${stringToPigLatin(phrase)}`);
else alert("You didn't enter the phrase correctly, try again");
