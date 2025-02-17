const { TIMEOUT } = require('dns');
const fs = require('fs');

const namesFolder = './names/';

let wordList = [];
let maleList = [];
let femaleList = [];

let mostUsedMale = [];
let mostUsedFemale = [];

//se i nomi non sono già presenti nei rispettivi dizionari li inserisco
function addMostUsedNames(maleName, femaleName){

    if (!mostUsedMale.includes(maleName)){
        mostUsedMale.push(maleName)
    }
    if (!mostUsedFemale.includes(femaleName)){
        mostUsedFemale.push(femaleName);
    }
    //console.log(mostUsedMale, mostUsedFemale);
}

// process the async result
fs.readdir(namesFolder, (err, files) => {

    if (err != null){
        throw err;
    }

    files.forEach(file => {    
        // leggo tutti i file tranne "NationalReadMe.pdf"
        if (file != "NationalReadMe.pdf"){
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
});    

// non inserisco direttamente il console log perchè il primo argomento della func setTimeout deve essere una funzione
setTimeout(print, 1000);

function print(){
    console.log(mostUsedMale, mostUsedFemale)
}




