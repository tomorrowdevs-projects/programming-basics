let userInput = prompt("Enter the word and find out your score in the scrabble score").toUpperCase();
// let userInputArray = userInput.split("")
console.log(userInput)

let scoresPoint = {
    1: ["A","E", "I", "L", "N", "O", "R", "S", "T", "U"],
    2: ["D", "G"],
    3: ["B", "C","M", "P"],
    4: ["F"," H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  }


function scrabbleScore(word,obj){
 let countPoint = 0;
 let array = word.split("")
 console.log(array)
 for(let char of array){
    for(let point in obj){
        if(obj[point].find((value) => value === char)){
            countPoint += Number(point)
        } else{
            countPoint += 0;
        }
    }
 }
return alert(`the your word ${word.toLowerCase()} has produced ${countPoint} points`)
}

scrabbleScore(userInput,scoresPoint);