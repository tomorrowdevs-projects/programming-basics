const fs = require(`fs`);
const readFile = require(`./file_read`);

readFile(`text1.txt`)
.then((data) => getWords(getArray(data)))
.catch((err) => console.log(err));

const getArray = text => {

    const stringArray = text.toLowerCase().match(/\b(\w+)\b/g);
    const filtered = [];

    stringArray.forEach(element => {if ((element.includes(`ie`) || element.includes(`ei`)) && !filtered.includes(element)) filtered.push(element)});

    return filtered;
};

const getWords = array => {

    const ruleFollowerWords = [];
    const ruleBreakerWords = [];

    array.forEach(e => {
        if (e.includes(`ei`) || e.includes(`cie`)) ruleBreakerWords.push(e);
        if (e.includes(`ie`) && !e.includes(`cie`)) ruleFollowerWords.push(e);
    });

    console.log(`The  words that follow the rule are “I before E except after C” are: ${ruleFollowerWords.join(`, `)}.\nWhile the ones that break it are: ${ruleBreakerWords.join(`, `)}!`);
};