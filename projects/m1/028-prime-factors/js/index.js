const prompt = require("prompt-sync")();

let number = parseFloat(prompt("Enter an integer (2 or greater): "));
//5,
const array = [];

//10
if (number >= 2 ){
    //10
    while (number > 1){
        //10
        if (number%2 === 0){
            number = number / 2;
            array.push(2);
        }else if (number%3 === 0){
            number = number / 3;
            array.push(3);
        }else{
            break
        }
    }
}else{
    console.log("Number not valid");
}

console.log(array);
