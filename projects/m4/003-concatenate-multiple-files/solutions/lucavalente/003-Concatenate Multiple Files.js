const fs = require('fs');
const arguments = process.argv.slice(2);

if (arguments.length < 2){
    throw "You have to specify 2 files to concatenate!";
}

arguments.forEach(file => {

fs.promises.readFile(file, "utf-8")
.then((content) => {
    content = content.split("\n");
    console.log(content.join("\n"));

})
.catch((err) => {
    console.log(err);
});

});

