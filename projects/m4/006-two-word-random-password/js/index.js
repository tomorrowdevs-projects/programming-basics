const fs = require("fs")


function capitalize(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return newArray
}

function randomPass(file) {
    return fs.promises.readFile(file, 'utf-8')
        .then(data => {
            data = data.split('\n');
           
            while (true) {
                const words = [];
                while (words.length < 2) {
                    const randomNumber = Math.floor(Math.random() * data.length);
                    words.push(data[randomNumber]);
                }
                
                const pass = capitalize(words).join('');
                
                if (pass.length >= 8 && pass.length <= 10) {
                    return pass;
                }
            }
        })
        .catch(error => {
            throw error;
        });
}

const file1 = 'file.txt';
randomPass(file1)
    .then(password => {
        console.log(`La password generata è: ${password}`);
    })
    .catch(error => {
        console.log(error);
    });