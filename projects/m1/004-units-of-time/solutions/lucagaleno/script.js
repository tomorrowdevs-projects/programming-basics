

// Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
// Compute and display the total number of seconds represented by this duration.



let daysInput =  parseFloat(prompt("Please enter the days to be converted:", 0)); 
let hoursInput = parseFloat(prompt("Please enter the hours to be converted:", 0));
let minutesInput = parseFloat(prompt("Please enter the minutes to be converted:", 0));
let secondsInput = parseFloat(prompt("Please enter the seconds to be converted:", 0));

// let time = [daysInput,hoursInput,minutesInput,secondsInput];

/*
function convertNull(nullElement) {
    if (nullElement=null){
        alert("trovato");
        nullElement =  0;
    };
};

alert (time)

time.forEach(function(element,index,array) {
        //convertNull(element);
        if(element = 'NaN') {
       // element = 0;
        array[index] = 0;
}});   
*/

// alert (time)

let totalSeconds = secondsInput + (minutesInput*60) + (hoursInput*60*60) + (daysInput*24*60*60);

alert ('This is the total seconds: ' + totalSeconds)