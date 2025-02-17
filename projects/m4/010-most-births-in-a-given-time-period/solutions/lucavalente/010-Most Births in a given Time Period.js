const fs = require('fs');
const prompt = require("prompt-sync")();

const namesFolder = './names/';

let startingYear = Number(prompt("Digit the starting year: "));
let endYear = Number(prompt("Digit the end year: "));
let checkedFile;

let femaleList = [];
let maleList = [];
let mostUsedMale = {};
let mostUsedFemale = {};

let mostUsedMaleName;
let mostUsedFemaleName;

function getMostUsedNames(dictMale, dictFemale){
    maxValue = 0;
    for (let [key, value] of Object.entries(dictMale)){
        if (value > maxValue){
            maxValue = value;
        }
    }
    for (let [key, value] of Object.entries(dictMale)){
        if (value == maxValue){
            mostUsedMaleName = key;
        }
    }

    maxValue = 0;
    for (let [key, value] of Object.entries(dictFemale)){
        if (value > maxValue){
            maxValue = value;
        }
    }
    for (let [key, value] of Object.entries(dictFemale)){
        if (value == maxValue){
            mostUsedFemaleName = key;
        }
    } 
}

//se i nomi non sono già presenti nei rispettivi dizionari li inserisco
function addMostUsedNames(maleName, femaleName){
    
    if (!(maleName in mostUsedMale)){
        mostUsedMale[maleName] = 0;
    }else{
        mostUsedMale[maleName]++;
    }

    if (!(femaleName in mostUsedFemale)){
        mostUsedFemale[femaleName] = 0;
    }else{
        mostUsedFemale[femaleName]++;
    }    

    getMostUsedNames(mostUsedMale, mostUsedFemale);
}

fs.readdir(namesFolder, (err, files) => {

    if (err != null){
        throw err;
    }

    files.forEach(file => {    
        // leggo tutti i file tranne "NationalReadMe.pdf"
        if (file != "NationalReadMe.pdf")
        checkedFile = Number(file.slice(3, file.length-4));
        if (checkedFile >= startingYear && checkedFile <= endYear){
            fs.promises.readFile(namesFolder + file, "utf-8")
            .then((content) =>{

                wordList = content.split("\n");
                
                // creo la lista (di liste) di nomi maschili e femminili presenti nel file, con genere e numero di utilizzi: es. [Mary, F, 7065]
                wordList.forEach(word => {
                    word = word.split(",");
                    if (word[1] == "F"){
                        femaleList.push(word);
                    }else{
                        maleList.push(word);
                    }
                });

                // siccome i nomi risultano già ordinati dal più usato inserisco nei due dizionari il primo elemento nelle liste, quindi il nome più usato nell'anno analizzato
                addMostUsedNames(maleList[0][0], femaleList[0][0], file);                    

                // svuoto le liste, così da inserire nel turno successivo i nomi maschili e femminili del nuovo anno analizzato
                maleList = [];
                femaleList = [];     
            })  
            .catch((err) => {
                console.log(err);
            });   
        }                  
    })      
})

setTimeout(print ,1000)
function print(){
    console.log("\nPeriod: " + startingYear + " <--> " + endYear + "\n" +
        "The most used male name is: " + mostUsedMaleName + "\n" + 
        "The most used female name is: " + mostUsedFemaleName);
}







