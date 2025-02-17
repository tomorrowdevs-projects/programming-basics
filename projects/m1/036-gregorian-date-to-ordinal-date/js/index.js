const prompt = require ("prompt-sync")();

const day = parseInt(prompt("Insert day: "));
const month = parseInt(prompt("Insert month: "));
const year = parseInt(prompt("Insert year: "));

function ordinalDate(){
    const dayToSum = [];
    //28 02 2023
    const dayInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    const monthToArray = month-1;
    let sum = 0;
    if ((year%4 === 0) || (year%100 === 0 && year%400 === 0)){
        dayInMonth[1] = 29;
        for (i=0;i<monthToArray;i++){
            dayToSum.push(dayInMonth[i])
            // console.log(i);  
        }
        for(i=0;i<dayToSum.length;i++){
            sum += dayToSum[i];
        }
        console.log(`Ordinal date ${year}-${parseInt(sum) + day}`);
    } else{
        for (i=0;i<monthToArray;i++){
            dayToSum.push(dayInMonth[i])
            // console.log(i);  
        }
        for(i=0;i<dayToSum.length;i++){
            sum += dayToSum[i];
        }
        console.log(`Ordinal date ${year}-${parseInt(sum) + day}`);
    }
    
}
ordinalDate()