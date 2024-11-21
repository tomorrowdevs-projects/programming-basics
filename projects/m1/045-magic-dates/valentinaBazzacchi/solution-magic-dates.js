// Main Program
let day, month, year;

for (year = 1901; year < 2000; year++) {
    for (month = 1; month < 13; month++) {
        for (day = 1; day < (daysInMonth(month, year) + 1); day++) { // <-- Called the function for the number of days (+1 to include the last day).
            
            if(magicYear(day, month, year)) {
            console.log(`${day} / ${month} / ${year}`);
            } // end condition
        
        } // end for "day"
    } // end for "month"
} // end for "year"

// Function to calculate the exact number of days for each month
function daysInMonth(month, year) {

    let days;
    // Condition for February (leap year or not)
    if (month == 2)  {

        if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
        days = 29;
        } else {
        days = 28;
        } // end condition for February

    // Condition for months having 30 days
    } else if ((month >= 4 && month <= 6 && month % 2 == 0) 
    || (month >= 9 && month <= 11 && month % 2 != 0)) {
    days = 30;
    // Condition for months having 31 days
    } else {
    days = 31;
    }  

    return days;  
} // end function

// Function to determine whether or not a date is a magic date
function magicYear(day, month, year) {
    // Extract the last two digits of the year
    year = String(year).slice(2,4);
        
        if (month * day == year) {
        return true; 
        } 

} //end function


 