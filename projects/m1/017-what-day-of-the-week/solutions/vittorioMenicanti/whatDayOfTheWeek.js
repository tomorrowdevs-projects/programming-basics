// What Day Of The Week:

/* The following formula can be used to determine the day of the week for January 1 in a given year:

day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

The result calculated by this formula is an integer that represents the day of the week. Sunday is represented by 0. The remaining days of the week following in sequence through to Saturday, which is represented by 6.

Use the formula above to write a program that reads a year from the user and reports the day of the week for January 1 of that year. The output from your program should include the full name of the day of the week, not just the integer returned by the formula. */

//January 1 

//sides notes: Sunday    === 0
//             Monday    === 1
//             Tuesday   === 2
//             Wednesday === 3
//             Thursday  === 4
//             Friday    === 5
//             Saturday  === 6


const year = prompt(`Please enter a year: `);

let dayOfTheWeek = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;


switch(dayOfTheWeek){

    case 0:
    dayOfTheWeek = 'Sunday'
    break;

    case 1:
    dayOfTheWeek ='Monday'
    break;

    case 2:
    dayOfTheWeek ='Tuesday'
    break;

    case 3:
    dayOfTheWeek ='Wednesday'
    break;

    case 4:
    dayOfTheWeek ='Thursday'
    break;

    case 5:
    dayOfTheWeek ='Friday'
    break;
    
    case 6: 
    dayOfTheWeek ='Saturday'
    break; 
}

alert(`The day of the week for January 1 of the year ${year} is ${dayOfTheWeek}`);