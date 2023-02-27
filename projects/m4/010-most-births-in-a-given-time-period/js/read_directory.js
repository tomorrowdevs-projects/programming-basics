const fs = require('fs');

const readDir = () => {

        return new Promise ((resolve, reject) => {
            fs.readdir (`./dataset`, 'utf-8', (err, files) => {
                if (err) reject (`ERROR: The requested directory does not exist!`);
                resolve (files);
            });
        }); 
};

module.exports = readDir;