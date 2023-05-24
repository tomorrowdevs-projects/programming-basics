const prompt = require("prompt-sync")();

const month = parseInt(prompt("insert a month: "));
const year = parseInt(prompt("insert a year: "));

const daysForMonth = [
  31,28,31,30,31,30,31,31,30,31,30,31
];


function days(){

 if ((year%400===0) || (year%100!=0 && year%4===0)){
  if (month===2){
  return `The day in the month are: 29 (Leap year)`;
  }else{
  return `The day in the month are: ${daysForMonth[month-1]}`;
    }
 } else  {
return `The day in the month are: ${daysForMonth[month-1]}`;
   }
}

console.log(days());