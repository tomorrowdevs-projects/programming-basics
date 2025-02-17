const prompt = require ("prompt-sync")();


let string = prompt("Insert a word: ");

function removeDuplicate(string){
    
    const array = [];
    array.push(string);
    while (string!=""){
        string = prompt("Insert a word: ");
        array.push(string);
    }
    array.pop();
    const newArray = array.filter((value, index) => array.indexOf(value) === index);
    for (i=0;i<newArray.length;i++){
        return newArray[i];
    }
    
}

console.log(removeDuplicate(string));