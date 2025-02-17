const prompt = require("prompt-sync")();




function removeOutliers (){
    const newArray = [];
    const removeNumbers = [];
    let number = prompt("insert at least 4 numbers: ");
    newArray.push(parseInt(number));
    while (parseInt(number) != 0){
        number = prompt("insert at least 4 numbers: ");
        newArray.push(parseInt(number));
    }

    
    if (newArray.length<4){
        return "Array not valid, insert more then 4 values";    
    }else{
        newArray.pop();
        console.log( `User: ${newArray}`);
        newArray.sort((a, b) => a - b);
        let arrayToPush = newArray.slice(-2)
        removeNumbers.push(arrayToPush);
        arrayToPush = newArray.slice(0, 2);
        removeNumbers.push(arrayToPush);
        
        return( `Without Outliers: ${newArray.slice(2, -2)} \nOutliers Removed: ${removeNumbers} \n`);
    }
    
    
    
    
}

console.log(removeOutliers());