const fs = require('fs');
const async = require('async');
const prompt = require('prompt-sync')({sigint: true});

const dirPath = './names/';
const elementForYear = 100; //how many elements are taken into consideration for each year
const seeTheFirst = 3;      //how many classified you want to see

console.log('\nthe most used male and female names will be shown in a range of years chosen by you from 1880 to 2021\n\n');

fs.readdir(dirPath, (err, filesPath) => {

    if (err) throw err;

    const input = enterCheckInput(); //Take the checked input

    filesPath = [];
    for (let i = input[0]; i <= input[1]; i++) { //I generate the array with the file paths that have been chosen by the user
        const fileName = 'yob' + i + '.txt';
        filesPath.push(dirPath + fileName);
    };
    
    async.map(filesPath, (filePath, cb) => { //Reading files chosen
        fs.readFile(filePath, 'utf8', cb);
    }, (err, results) => {
        if (err) throw err;

        const result = sortByFreq(sumName(fileToArr(results)))

        console.log(seeResult(result, seeTheFirst));
    });
});

//check if the user input is correct in the format yyyy-yyyy where the second is always greater than the first
//start is the minimum number and end the maximum accepted
function checkInput (inputString, start, end) {
    let startingYear = Number(inputString.split('-')[0]);
    let endYear = Number(inputString.split('-')[1]);

    try {
        if (isNaN(endYear) || isNaN(startingYear)) throw `\n${inputString} is not valid!\n`;
        else if (startingYear < start || endYear < start) throw `\nInput is not valid! Minimum 1880\n`;
        else if (startingYear > end || endYear > end) throw `\nInput is not valid! Maximum 2021\n`;
        else if (startingYear === endYear) throw `\nyou wrote the same year, choose a range\n`;
        else {
            if(startingYear > endYear) [startingYear, endYear] = [endYear, startingYear];
            return [startingYear, endYear];
        }
    }
    catch(err) { console.log(err) };

    return false;
};

//Enter input and check
function enterCheckInput () {
    let check = false;
    console.clear()
    while (!check) {
        const year = prompt('write the range of years you want to see (example: 1992-2000) : ');
        check = checkInput(year, 1880, 2021);
    }
    return check
};

//from each file I create an array with the individual names
function fileToArr (files) {
    return files.reduce((result ,singleFile) => {

        const fileToArr = singleFile.split('\r\n');
        let indexMan = 0;

        fileToArr.forEach((el, index) => {
            const split = el.split(',');
            if (split[1] === 'F' && index < elementForYear) result[0].push(split);
            if (split[1] === 'M' && indexMan < elementForYear) {result[1].push(split); indexMan++}
        })

        return result
    }, [[],[]])
};

//add up the numbers of repeated names
function sumName (arr) {

    return arr.map(sex => {

        return sex.reduce((res, el) => {

            const exist = res.some(single => {
                if (single[0] === el[0]) single[2] = Number(single[2]) + Number(el[2])
                return single[0] === el[0]
            })

            if(!exist) res.push(el)

            return res
        }, [])
    })
    
}

//put all male and female names in order of frequency
function sortByFreq (arr) {

    arr.forEach(sex => {  

        sex.sort((a ,b) => {
            a = a[2];
            b = b[2];
            return b-a
        })
    })

    return arr
};

//shows the first elements of the array of males and females, seeNum is how many positions you want to see
function seeResult (arr, seeNum) {

    let string = '';

    for (let i=0; i<seeNum; i++) {
        string += `\nPLACE NUMBER ${i+1}:\n\n`;
        string += `WOMAN: ${arr[0][i][0]} assigned ${arr[0][i][2].toLocaleString('en-US')} times\nMAN: ${arr[1][i][0]} assigned ${arr[1][i][2].toLocaleString('en-US')} times\n\n`;
        string += '-------------------------------------------------------------\n'
    }
    return string
}