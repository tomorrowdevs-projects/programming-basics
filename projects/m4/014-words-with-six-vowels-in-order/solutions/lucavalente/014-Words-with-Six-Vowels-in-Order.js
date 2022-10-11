"use strict";

const {promises: {readFile}} = require("fs");
const file = process.argv[2];

let vowelsAndY = ['a', 'e', 'i', 'o', 'u', 'y'];
let count = 0;
let textLines = [];
let wordList = [];

function checkWords(wordList){
    wordList.forEach(word => {
        for (let i = 0; i < word.length; i++){
            if (word[i] == vowelsAndY[count]){
                count++;
            }
        }
        if (count == 6){
            console.log(" -> " + word);
        }
        count = 0;
    });
}

readFile(file).then(content => {
  textLines = content.toString().split("\n");
  textLines.forEach(line => {
    wordList.push.apply(wordList, line.split(" "));
  });

  checkWords(wordList);

}).catch(error => {
  console.error(error.message);
  process.exit(1);
});