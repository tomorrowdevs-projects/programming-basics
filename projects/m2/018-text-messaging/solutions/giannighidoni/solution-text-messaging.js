const phrase = "The cat is on the table.";

const phoneKey = {
    '1' : ['.', ',', '?', '!', ':'],
    '2' : ['a', 'b', 'c'],
    '3' : ['d', 'e', 'f'],
    '4' : ['g', 'h', 'i'],
    '5' : ['j', 'k', 'l'],
    '6' : ['m', 'n', 'o'],
    '7' : ['p', 'q', 'r', 's'],
    '8' : ['t', 'u', 'v'],
    '9' : ['w', 'x', 'y', 'z'],
    '0' : [' ']
};

const phraseArr = phrase.toLocaleLowerCase().split("");
const outputArr = [];

phraseArr.forEach( e => {
    for(let key in phoneKey){
        if(phoneKey[key].includes(e)){
            let countDigit = phoneKey[key].indexOf(e) + 1;
            while(countDigit > 0){
                outputArr.push(key);
                --countDigit;
            }
        }
    }
})

let out = outputArr.join('');

console.log(out);