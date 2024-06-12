const fs = require('fs');
const arguments = process.argv.slice(2);

fs.promises.readFile(arguments[0], "utf-8")
.then((content) => {
    content = content.split("\n");
    content = content.slice(content.length-10)
    console.log(content.join("\n"));

})
.catch((err) => {
    console.log(err.message);
});
