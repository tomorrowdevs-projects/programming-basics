"use strict";

const {promises: {readFile}} = require("fs");
const fs = require("fs");
const file_1 = process.argv[2];
const file_2 = process.argv[3];

let wordList_1 = [];
let wordList_2 = [];
let wordsToCheck = [];
let text = " ";

function newText(word){
    text += word + " ";
}

Promise.all([
  readFile(file_1),
  readFile(file_2),
]).then(([content_1, content_2]) => {

    wordList_1 = content_1.toString().split("\n"); 
    for(let i = 0; i < wordList_1.length; i++){
        let line = wordList_1[i].split(" ");
        for(let j = 0; j < line.length; j++){
            let word = line[j].replace("\r", "");
            wordsToCheck.push(word);
        }
    }

    wordList_2 = content_2.toString().split("\n");  
    for (let i = 0; i < wordList_2.length; i++){
        let line = wordList_2[i].split(" ");      
        for (let j = 0; j < line.length; j++){  
            let word = line[j].replace("\r", "");      
            if (wordsToCheck.includes(word)){
                let newWord = "";
                for (let char of word){
                    newWord += "*";
                }
                newText(newWord);
            }else{
                newText(word);
            }
        }
        newText("\n");
        fs.writeFile("./result.txt", text, err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    }         

    console.log(text);

}).catch(error => {
  console.error(error.message);
  process.exit(1);
});

