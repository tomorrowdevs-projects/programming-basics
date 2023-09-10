const fs = require('fs').promises;
const {getLines , getRepeatdWord} = require('./functions');

const file = 'dataset.txt';

const main = ()=>{
    fs.readFile(file, 'utf-8')
    .then((data) =>{
        const lines = getLines(data);  
        console.log(getRepeatdWord(lines));
    }).catch((err) => console.log(err));  
}
main();