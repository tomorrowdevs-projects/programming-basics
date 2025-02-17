const fs = require('fs');

function readFirst10Lines(filename) {
    fs.promises.readFile(filename, 'utf-8')
        .then(function (data) {
            const lines = data.split('\n')
            const first10Lines = lines.slice(0, 10);

            console.log(first10Lines.join('\n'));
        })
        .catch(function (error) {
            console.log(error);
        });
}

const file = 'file.txt'
readFirst10Lines(file)