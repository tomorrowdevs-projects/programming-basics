const dictonary = {};
const phrase = "The cat is on the table.";
const phraseArr = phrase.toLowerCase().split("");
let uniqueChar = 0;

phraseArr.forEach(e => {
    let tempKeys = Object.keys(dictonary);
    if(tempKeys.includes(e)){
        for(let tempKey of tempKeys){
            if(tempKey === e){
                dictonary[tempKey]++;
            }
        }
    } else {
        dictonary[e] = 1;
        uniqueChar++;
    }
})

console.log(dictonary);
console.log(uniqueChar);