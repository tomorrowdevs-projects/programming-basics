const fs = require('fs');
const file = process.argv[2];
const path = require("path");

let wordList = [];
let line = [];
   
fs.promises.readFile(path.join(".",file), "utf-8")
.then((content) =>{
    wordList = content.split("\n");  
    for (let i = 0; i < wordList.length; i++){
        line = wordList[i].split(" ");
        for (let j = 0; j < line.length-1; j++){
            if (line[j] == line[j+1]){
                console.log("\n", "Repeat word at line ", i+1, ": ", line[j], "\n");
            }
        }
    }         
})  
.catch((err) => {
    console.log(err);
});                          
 