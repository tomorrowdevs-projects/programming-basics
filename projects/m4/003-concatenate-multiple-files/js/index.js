const { readFile } = require('fs/promises');

let filePath1 = './example1.txt';
let filePath2 = './example2.txt';
let filePath3 = './example3.txt';
let filePath4 = './example4.txt';

Promise.all([
    readFile(filePath1),
    readFile(filePath2),
    readFile(filePath3),
    readFile(filePath4),
])
    .then((data1, data2, data3, data4) => {
        console.log(
            data1
                .toString()
                .split('\r\n')
                .concat(data2, data3, data4)
                .join('\r\n')
        );
    })
    .catch((error) => {
        console.log(`Il file non può essere visualizzato`);
        console.error(error);
    });
