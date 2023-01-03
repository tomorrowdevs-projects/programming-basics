const fs = require('fs');
const async = require('async');

const dirPath = './names/';
const elementForYear = 100; //how many elements are taken into consideration for each year
const seeTheFirst = 5;      //how many classified you want to see

fs.readdir(dirPath, (err, filesPath) => {

    if (err) throw err;

    filesPath = filesPath.map((filePath) => { //generating paths to file
        return dirPath + filePath;
    });

    async.map(filesPath, (filePath, cb) => { //reading files or dir
        fs.readFile(filePath, 'utf8', cb);
    }, (err, results) => {
        if (err) throw err;
        const result = sortByFreq(sumName(fileToArr(results)))

        console.log('\nTaking the top 100 males and 100 females ranked each year from 1880 to 2021\n\n');
        console.log(seeResult(result, seeTheFirst));
    });
});

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
        string += `PLACE NUMBER ${i+1}:\n\n`;
        string += `WOMAN: ${arr[0][i][0]} assigned ${arr[0][i][2].toLocaleString('en-US')} times\nMAN: ${arr[1][i][0]} assigned ${arr[1][i][2].toLocaleString('en-US')} times\n\n`;
        string += '-------------------------------------------------------------\n'
    }
    return string
}