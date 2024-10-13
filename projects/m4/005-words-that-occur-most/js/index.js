const { readFile } = require('fs/promises');

let filePath = './exercise1.txt';

// console.log(filePath);
readFile(filePath)
    .then((data) => {
        let arrData = data
            .toString()
            .toLowerCase()
            .replace(/[\/#!?$%\^&\*,.;:{}=\-_`~(), \r\n, ' ']/g, ' ') // Remove all the leading or trailing punctuation marks from each word
            .split(' ')
            .filter((element) => element !== ''); // Remove all the blank spaces
        // console.log(arrData.length);

        const mostOccurredWords = {};

        arrData.forEach((value) => {
            const occurredWords = mostOccurredWords[value] ?? 0;
            mostOccurredWords[value] = occurredWords + 1;
        });
        console.log(mostOccurredWords);
    })
    .catch((error) => {
        console.log('The program is unable to open the file you indicated');
    });
