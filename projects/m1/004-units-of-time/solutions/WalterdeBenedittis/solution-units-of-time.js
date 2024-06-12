    let insDays = prompt("Insert the days of your date")*86400;
    let insHours = prompt("Insert the hours of your date")*3600;
    let insMinutes = prompt("Insert the minutes of your date")*60;
    let insSeconds = prompt("Insert the seconds of your date");

    let totalSec = insDays + insHours + insMinutes + insSeconds
    alert("This is your date in Seconds: " + totalSec); 
