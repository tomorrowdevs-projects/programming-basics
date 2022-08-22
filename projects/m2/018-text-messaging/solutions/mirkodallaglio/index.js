const numericKeypad = {
    1: ['.',',','?','!',':'],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
    0: ' ',
};
let userInput = prompt('Write a phrase').toLocaleLowerCase();
let result = '';

// looks for a value contained in an array inside an object. Input object obj and the value you want to look for.
// returns an array with the key of the object and the index of the location [key, index]
function searchArrIndxInObj (obj, value){
    for (let prop in obj){
        const index = obj[prop].indexOf(value);
        if(index !== -1) return [prop, index];
    };
};

if(/^[a-zA-Z\s\W]+$/.test(userInput)) {
    for (let char of userInput){
        const key = searchArrIndxInObj(numericKeypad, char);
        result += key[0].repeat(key[1]+1);
    };
    alert(`Key presses : ${result}`);
}else alert('you can write words or phrases (no number) and use. ,! ? :')
