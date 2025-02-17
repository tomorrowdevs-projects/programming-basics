const wordArray = [];
let word = '';

do{
    word = prompt('Enter a word');

    if (/^[a-zA-Z]+$/.test(word)){
        if(word !== '') wordArray.push(word);
    }else if (word !== '') alert('Enter a single word!');

}while(word !== '');

function formatListElement (arr){
    let i = arr.length;
    if(i === 1) return arr.toString();
    else if (i === 2) return arr.join(' and ');
    else {
        let lastElem = arr.pop();
        return `${arr.join(', ')} and ${lastElem}`;
    };
};

alert(formatListElement(wordArray))