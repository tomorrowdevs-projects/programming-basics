const { readFile } = require('fs/promises');

let filePath1 = './example1.txt';
let filePath2 = './example2.txt';

readFile(filePath1).then((data1) => {
    console.log(data1.toString().split('\r\n').slice(-11).join('\r\n'));
    console.log(data1.toString().split('\r\n').slice(-6).join('\r\n'));
    console.log(data1.toString().split('\r\n').slice(-6, -3).join('\r\n'));
});

Promise.all([readFile(filePath1), readFile(filePath2)])
    .then(([data1, data2]) => {
        console.log(data1.toString().split('\r\n').slice(-2).join('\r\n'));
        console.log(data2.toString().split('\r\n').slice(-2).join('\r\n'));
    })
    .catch((error) => {
        console.log(error);
    });
