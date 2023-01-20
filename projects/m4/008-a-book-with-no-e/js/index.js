const fs = require('fs').promises;
const getProportion = require('./functions');
const dataset = 'dataset.txt';


const main = ()=>{
    fs.readFile(dataset, "utf-8")
    .then((data) => {
      getProportion(data);
    }) .catch((err) => console.log(err));
}

main();