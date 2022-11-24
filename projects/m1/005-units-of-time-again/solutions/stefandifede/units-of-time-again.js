//user's input in seconds
const seconds = prompt("Insert here the amount of seconds to convert:")
//convert input in minutes, hour and days
/*
1 minute = 60 seconds
1 hour = 3600 seconds
1 day = 86400 seconds*/

const unitsOfTime = [86400, 3600, 60, 1];
const convertedTime = [];
function change() {
    //calculate amount of days
    const days = Math.floor(seconds / unitsOfTime[0]);
    let remainder = seconds % unitsOfTime[0];
    convertedTime.push(days)
    //check if the ramainder is > 0, if so: loop trough the array to calculate the amount of each unit
        if (remainder > 0) {
            for (i = 1; i<=(unitsOfTime.length - 1);) {
                let nextUnit =  Math.floor(remainder / unitsOfTime[i]);
                remainder = remainder % unitsOfTime[i]; 
                convertedTime.push(nextUnit);
                i++
                }
            }
    //format the result in D:HH:MM:SS https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers
        alert("Converted time formatted in DD:HH:MM:SS: " + ("00" + convertedTime[0]).slice(-2) + ":"  + ("00" + convertedTime[1]).slice(-2) + ":" + ("00" + convertedTime[2]).slice(-2) + ":" + ("00" + convertedTime[3]).slice(-2))
        }
change()

const unitsOfTime = [86400, 3600, 60, 1];
const convertedTime = [];
function change() {
    //calculate amount of days
    const days = Math.floor(seconds / unitsOfTime[0]);
    let remainder = seconds % unitsOfTime[0];
    convertedTime.push(days)
    //check if the ramainder is > 0, if so: loop trough the array to calculate the amount of each unit
        if (remainder > 0) {
            for (i = 1; i<=(unitsOfTime.length - 1);) {
                let nextUnit =  Math.floor(remainder / unitsOfTime[i]);
                remainder = remainder % unitsOfTime[i]; 
                convertedTime.push(nextUnit);
                i++
                }
            }
    //format the result in D:HH:MM:SS https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers
        alert("Converted time formatted in DD:HH:MM:SS: " + ("00" + convertedTime[0]).slice(-2) + ":"  + ("00" + convertedTime[1]).slice(-2) + ":" + ("00" + convertedTime[2]).slice(-2) + ":" + ("00" + convertedTime[3]).slice(-2))
        }
change()