"use strict";

const {promises: {readFile}} = require("fs");
const fs = require("fs");
const stringOfWords = require("./utils")
const file_1 = process.argv[2];
const file_2 = process.argv[3];

/** list of words of a text 
     * @type {Array<string>}
    */
let wordsToCheck = [];

/** text to write into a new file
     * @type {string}
    */
let text = "";

Promise.all([
  readFile(file_1),
  readFile(file_2),
]).then(([content_1, content_2]) => {

    wordsToCheck = stringOfWords(content_1);

    /** looping on words into a text to create a new one substituting sensitive ones with '*' sequence */
    let lineList_2 = content_2.toString().split("\n");  
    lineList_2.forEach(line => {
        line.split(" ").forEach(word => {
            word = word.word.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim, "");
            if (wordsToCheck.includes(word)){
                let newWord = word.split("").map(x => "*").join("");
                text += newWord + " ";
            }else{
              text += word + " ";
            }
        });
        text += "\n";
        /** creating a new file with changed text */
        fs.writeFile("./result.txt", text, err => {
            if (err) {
              console.error(err);
            }
            /** file written successfully */
          });
    });           
    console.log(text);

}).catch(error => {
  console.error(error.message);
  process.exit(1);
});

