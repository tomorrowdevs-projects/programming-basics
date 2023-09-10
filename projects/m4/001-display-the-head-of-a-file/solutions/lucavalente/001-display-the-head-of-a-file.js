const fs = require('fs');
const lineReader = require("line-reader");
const path = require("path");
const arguments = process.argv.slice(2);

let count = 0;

fs.promises.readFile(path.join(".","es.txt"), "utf-8")
.then((content) => {
    content = content.split("\n").slice(0,10);
    console.log(content.join("\n"));

})
.catch((err) => {
    console.log(err);
});


