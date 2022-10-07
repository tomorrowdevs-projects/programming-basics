const fs = require('fs');
const prompt = require("prompt-sync")();

const namesFolder = './names/';

let femaleList = [];
let maleList = [];
let femaleListUnique = [];
let maleListUnique = [];


fs.readdir(namesFolder, (err, files) => {

    if (err != null){
        throw err;
    }

    files.forEach(file => {    
        // leggo tutti i file tranne "NationalReadMe.pdf"
        if (file != "NationalReadMe.pdf")
            fs.promises.readFile(namesFolder + file, "utf-8")
            .then((content) =>{
                wordList = content.split("\n");            
                wordList.forEach(word => {
                    word = word.split(",");
                    if (word[1] == "F"){
                        femaleList.push(word[0]);                     
                    }else{
                        maleList.push(word[0]);
                    }
                });  
            })  
            .catch((err) => {
                console.log(err);
            });                          
    })      
})

setTimeout(print ,2000)
function print(){
    maleListUnique = [...new Set(maleList)];
    femaleListUnique = [...new Set(femaleList)];

    console.log("\Lists of all different names used for male and female between 1800 and 2020: " + "\n");
    prompt("Press enter to continue...");
    console.log("\n" + "MALE LIST: " + "\n" +  maleListUnique + "\n");
    prompt("Press enter to continue...");
    console.log("\n" + "FEMALE LIST " + "\n" + femaleListUnique + "\n");

}

