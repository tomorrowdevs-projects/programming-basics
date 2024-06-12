const fs = require(`fs`);
const readFile = require(`./file_read`);

readFile(`text.txt`)
.then((data) => {
    const alphabet = createAlphabetObject();
    getPercentage(alphabet, getArray(data));
    return alphabet;
})
.then((alphabet) => showResult(alphabet))
.catch((err) => console.log(err));

const showResult = obj => {

    const minValue = `${Object.keys(obj).find(key => obj[key] === Math.min(...Object.values(obj))).toUpperCase()} => ${Math.min(...Object.values(obj))}%`;

    let outputString = ``;
    Object.keys(obj).forEach((key) => outputString += `${key.toUpperCase()} => ${obj[key]}%\n`)

    console.log(`The percentage of words that uses each letter of the alphabet is ${outputString}While the least used letter is: ${minValue}`);
};

const getArray = text => {
    return text.toLowerCase().match(/\b(\w+)\b/g);
};

const createAlphabetObject = () => {

    const alphabet = {};

    for (i = 97; i < 123; i++) {
        let letter = String.fromCharCode(i);
        alphabet[letter] = 0;
    };

    return alphabet;
};

const getPercentage = (obj, arr) => {

    Object.keys(obj).forEach((key) => {
            
        for (word of arr) {
            if (word.includes(key)){
            obj[key]++;
            }
        };
    });

    Object.keys(obj).forEach((key) => { obj[key] = +((100 / arr.length) * obj[key]).toFixed(2); });
};




