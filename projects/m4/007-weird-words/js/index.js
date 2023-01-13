const fs  = require('fs').promises;
const getLists = require('./functions').getLists;
const prompt = require('prompt-sync')();
const dataset = prompt('Enter file name: ');


    fs.readFile(dataset, 'utf-8')
        .then((data) =>{
           console.log(getLists(data));
        }).catch((err) => console.log(err))
    


