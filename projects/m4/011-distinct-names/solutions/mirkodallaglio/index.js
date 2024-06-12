const fs = require('fs');
const async = require('async');

const dirPath = './names/';

fs.readdir(dirPath, (err, filesPath) => {

    if (err) throw err;

    filesPath = filesPath.map((filePath) => { //generating paths to file
        return dirPath + filePath;
    });

    async.map(filesPath, (filePath, cb) => { //reading files or dir
        fs.readFile(filePath, 'utf8', cb);
    }, (err, results) => {
        if (err) throw err;

        const result = removeDuplicate(fileToArr(results));
        console.log(seeResult(result));
    });
});

//from each file I create an array with the individual names. return: [ [all female name] , [all male names] ]
function fileToArr (files) {
    return files.reduce((result ,singleFile) => {

        const fileToArr = singleFile.split('\r\n');

        fileToArr.forEach(el => {
            const split = el.split(',');
            if (split[1] === 'F') result[0].push(split[0]);
            if (split[1] === 'M') result[1].push(split[0]);
        })

        return result
    }, [[],[]])
};

//I remove all duplicates from the male and female arrays and put them in alphabetical order
function removeDuplicate (arr) {
    const female = [...new Set(arr[0])].sort();
    const male = [...new Set(arr[1])].sort();

    return [female, male];
}

//I show the result as a string
function seeResult (arr) {
    const string = `ALL FEMALE NAMES:\n\n${arr[0].join('-')}\n\nALL MALE NAMES${arr[1].join('-')}`
    return string
}

