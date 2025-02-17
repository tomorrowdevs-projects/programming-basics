const fs = require('fs');

const readFile = file => {

        return new Promise ((resolve, reject) => {
            fs.readFile (`./files/${file}`, 'utf-8', (err, data) => {

                if (err) reject (`ERROR: The requested file does not exist!`);
                resolve (data);
                
            });
        });
}; 

module.exports = readFile;


