const scrabblePoint = {
    1: ['a','e','i','l','n','o','r','s','t','u'],
    2: ['d','g'],
    3: ['b','c','m','p'],
    4: ['f','h','v','w','y'],
    5: ['k'],
    8: ['j','x'],
    10: ['q','z'],
};
let word = prompt('Enter a word');

//the function looks for a value in the arrays of an object and returns the respective key 
function searchArrIndxInObj (obj, value){
    for (prop in obj){
        let index = obj[prop].indexOf(value);
        if(index !== -1) return prop;
    };
};

if(/^[a-zA-Z]+$/.test(word)){   //only word without spaces,number or puncuation
    let result = 0;
    for(char of word){
        result += Number(searchArrIndxInObj(scrabblePoint, char));
    };
    alert(`The word "${word}" has ${result} point.`)
}else alert('Enter a single word without number or punctuation');