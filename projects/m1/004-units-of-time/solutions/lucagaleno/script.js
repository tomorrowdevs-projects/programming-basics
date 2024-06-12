

// Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
// Compute and display the total number of seconds represented by this duration.

let time = [
    parseFloat(prompt("Please enter the days to be converted:", 0)), 
    parseFloat(prompt("Please enter the hours to be converted:", 0)),
    parseFloat(prompt("Please enter the minutes to be converted:", 0)),
    parseFloat(prompt("Please enter the seconds to be converted:", 0))
];


time.forEach((element, index) => { 
    if( isNaN(element) )  {
        console.log("input: ",element);
        time[index]=0;
        }            
});
 
console.log(time);

let totalSeconds = time[3] + (time[2]*60) + (time[1]*60*60) + (time[0]*24*60*60);

console.log('This is the total seconds: ', totalSeconds);