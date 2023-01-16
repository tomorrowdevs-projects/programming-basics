const fs = require('fs').promises;
const getLines = require('./functions').getLines;
const getRepeatdWord = require('./functions').getRepeatdWord
const file = 'dataset.txt';

fs.readFile(file, 'utf-8')
    .then((data) =>{
        const lines = getLines(data);  
        console.log(getRepeatdWord(lines));
    }).catch((err) => console.log(err))