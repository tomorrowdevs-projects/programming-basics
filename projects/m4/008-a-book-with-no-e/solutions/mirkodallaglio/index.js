// Include fs module
const fs = require('fs').promises;

//I read the contents of the file asynchronously
const readText = async (file, cod='utf-8') => {
    const data = await fs.readFile(file, cod);
    return data;
}

//creates an object with key: the single letter of word and value: the percentage of times repeated in the word
function letterPercentWord (word) {
    const wordLength = word.length;
    const wordToArr = word.split('');

    const countLetter = wordToArr.reduce((obj, letter) => ({...obj, [letter]: ((obj[letter] || 0) + 1),}), {});

    //I transform the number of times into a percentage of the total number of letters of the word
    for (const key in countLetter) { countLetter[key] = [Number(countLetter[key] / wordLength *100)] };

    return countLetter;
};

//creates an object with key: the letter and value: all the percentages in which the letter is repeated within each word
function totalPercentage (wordArr) {
    const addLetterPercent = wordArr.reduce((total, word) => {
        const letPercent = letterPercentWord(word);

        for (const letter in letPercent) {
            if (/[a-z]/.test(letter))
                total = {...total, [letter]: ((total[letter]) ? total[letter].concat(letPercent[letter]) : letPercent[letter]),};
        }

        return total;
    }, {});

    return addLetterPercent;
};

//averages objects with array values of numbers
function calcAvarage (obj) {
    for (const letter in obj) {

        obj[letter] = (obj[letter].reduce((tot, num) => tot + num, 0) / obj[letter].length).toFixed(1);
    }
    return obj
};

//when I get the result of the promise, calculate all the percentages,
//make the average and sort them from the most used letter to the least used one
readText('Hello.txt').then(content => {
    const wordArr = content.replace(/[^\w\s\']|_/g, '').toLowerCase().split(/\s+/);
    const totalWordPercent = totalPercentage(wordArr);
    const avarage = calcAvarage(totalWordPercent);
    const resultSorted = Object.fromEntries(Object.entries(avarage).sort(([, a], [, b]) => b - a))
    console.log('average percentage of the presence of letters within single words, calculated on all words in a text file')
    console.log(resultSorted)
})

