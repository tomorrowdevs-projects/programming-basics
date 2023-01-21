
// 008
//package
const fs = require('fs').promises;
const file = 'input.txt'

// function promise to open the file
const letterFrequencies = file => {
    return data = fs.readFile(file, {encoding:'utf-8'})
        .then((data) => {
            data = data.toLocaleLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g,'')//replace all special charachters    
            data = data.split(' ')
            calculatedProportion = proportion(data)[0]
            minLetterProportion = proportion(data)[1]
            return calculatedProportion})

        .catch (() => {console.error(`this file does not exixt`) & reject()});
}

letterFrequencies(file)
    .then((calculatedProportion) => {console.dir(calculatedProportion), console.log(`The less used letter: ${minLetterProportion}`)})
    .catch(() => console.error(`an error occured`))

//function to calculate the proportion (input Array)
const proportion = words => {

    const wordsLength = words.length
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
    let objProportion = {}
    let minLetter = ''
    
    let arrayOfWords = [] 
    for(let letters of alphabet){
        for (let word of words) {
        
            if(word.includes(letters)){
                arrayOfWords.push(word)
            }
        }
        objProportion[letters +' (%)']= Math.round((arrayOfWords.length/wordsLength)*100)
        arrayOfWords = []

    }

    minLetter = Math.min(...Object.values(objProportion))

    function getObjKeys(obj, value) {
        return Object.keys(obj).filter(key => obj[key] === value);
      }
    objKeyMinLetter = getObjKeys(objProportion, minLetter)  
    return [objProportion, objKeyMinLetter]
}

