const prompt = require ("prompt-sync")();



function insertToArray(){
    const array = [];
    let number = parseInt(prompt("Insert number: "));
    array.push(number);
    while (number != 0 ){
        number = parseInt(prompt("Insert number: "));
        array.push(number);
    }

    array.pop();
    array.reverse();
    for(i=0; i<array.length;i++){
        console.log(array[i]);
    }
}

insertToArray();