const fs = require('fs');
const file = process.argv.slice(2)[0];
const isLetter = (character) => {
    return character && character.length === 1 && character.toLowerCase() !== character.toUpperCase();
};

let charList = [];
let proportionList = [];
let minValues = [];

let count = 0;



if (arguments.length == 0){
    throw "You have to specify a file!";
}

function checkForProportion(charList) {
    
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    let alphabet = {};

    alpha.forEach(character => {
        alphabet[String.fromCharCode(character).toLowerCase()] = 0;
    });

    charList.forEach(character => {
        alphabet[character]++;
    });

    let values = [];
    let minValue = [];

    for (const key in alphabet){
        values.push(Math.round((alphabet[key]/count * 100) * 100) / 100);
        alphabet[key] = Math.round((alphabet[key]/count * 100) * 100) / 100;
    }
    
    for (const key in alphabet){
        if (alphabet[key] == Math.min(... values)){
            minValue.push(key);
            minValue.push(Math.min(... values));
        }

        alphabet[key] = alphabet[key].toString() + " %";
    }

    return [alphabet, minValue];
}

fs.promises.readFile(file, "utf-8")
.then((content) => {

    for(let i = 0; i < content.length; i++){
        if (isLetter(content[i])){
            charList.push(content[i].toLowerCase());        
            count++;
        }
    }

    proportionList = JSON.stringify(checkForProportion(charList)[0]);
    minValues = JSON.stringify(checkForProportion(charList)[1]);

    console.log(proportionList + "\nMin values: " + minValues);
})
.catch((err) => {
    console.log(err);
});