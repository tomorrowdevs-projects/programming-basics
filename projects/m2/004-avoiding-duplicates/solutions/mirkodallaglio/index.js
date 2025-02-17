let word = '';
const wordArr = [];

do{

    word = prompt('Enter a word:');
    if(/^[a-zA-Z]+$/.test(word)) {
        wordArr.push(word);
    }else if(word === ' ') {
        console.log(wordArr);
        alert(removeIdentical(wordArr).join('\n'));
    }else alert('You have entered the wrong value');

}while(word !== ' ');

function removeIdentical (arr){
    const result = [];
    arr.forEach(element => {
        if(!result.includes(element)) result.push(element);
    });
    return result;
};
