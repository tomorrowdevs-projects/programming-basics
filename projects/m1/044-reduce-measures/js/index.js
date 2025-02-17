const prompt = require("prompt-sync")();


const number = parseInt(prompt("Insert number: ")); //75
const unit = prompt("Insert unit: "); //cup, tablespoon, teaspoon 



function convert(){
let teaspoonToConvert = 0
let cup = 0;
let tablespoon = 0;
let teaspoon = 0;
let rest = 0;

    if (unit.toLowerCase() === "tablespoon"){
        teaspoonToConvert += number;
        cup += Math.floor(teaspoonToConvert/16);
        rest = teaspoonToConvert%16;
        tablespoon += Math.floor(rest/3);
        rest = rest % 3;
        teaspoon += rest;
    } else if (unit.toLowerCase() === "cup"){
        cup += number
    } else if (unit.toLowerCase() === "teaspoon" ){
        teaspoonToConvert += number;
        cup += Math.floor(teaspoonToConvert/48);
        rest = teaspoonToConvert%48;
        tablespoon += Math.floor(rest/3);
        teaspoon += rest%3;
    }else{
        return `insert a valid unit of measure`;
    }
    

    return `${cup} cup, ${tablespoon} tablespoon, ${teaspoon} teaspoon`;
}

console.log(convert());