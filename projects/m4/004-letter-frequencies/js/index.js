const { error } = require('console');
const { readFile } = require('fs/promises');

let filePath = './exercise1.txt';

readFile(filePath)
    .then((data) => {
        // Convert the string to an array replacing all characters that are not letters
        let data1 = data
            .toString()
            .replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~(),' ', \r\n]/g, '')
            .split('');

        const count = {}; // It allows us to calculate the number of times a character in the file repeats or appears

        data1.forEach((value) => {
            const arr = count[value] ?? 0; // Nulling coalescing operator to start with 0 if count[value] is undefined or null
            count[value] = arr + 1;
        });

        console.log(count);
    })
    .catch((error) => {
        console.error('The program is unable to open the file you indicated');
    });
