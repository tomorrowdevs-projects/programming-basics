let year = prompt("Insert a year");

let dayOfWeek;    
dayOfWeek = (+year + (Math.floor((year - 1) / 4)) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;
    
switch (dayOfWeek) {
    case 0:
    dayOfWeek = "Sunday";
    break;
    case 1:
    dayOfWeek = "Monday";
    break;
    case 2:
    dayOfWeek = "Tuesday";
    break;
    case 3:
    dayOfWeek = "Wednesday";
    break;
    case 4:
    dayOfWeek = "Thursday";
    break;
    case 5:
    dayOfWeek = "Friday";
    break;
    case 6:
    dayOfWeek = "Saturday";
    }
    
    alert("The day of the week for January 1 of the year " + year + " is " + dayOfWeek);


