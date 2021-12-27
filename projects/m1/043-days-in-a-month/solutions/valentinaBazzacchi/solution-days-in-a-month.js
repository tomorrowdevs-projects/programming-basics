// RegExp for testing user inputs
let testMonth = /^\d{1,2}$/;
let testYear = /^[0-9]{4}$/;

// Main Program
let userMonth = prompt("Enter a month");
// Verify the number entered by user for month
if (!testMonth.test(userMonth) || userMonth < 1 || userMonth > 12) {
alert("Invalid Month!"); // if it isn't correct, an error message is displayed and exits
} else { // If it is correct, reads the next value
let userYear = prompt("Enter a year");
    // Verify the number entered by user for year
    if (!testYear.test(userYear)) { // if it isn't correct, an error message is displayed and exits
    alert("Invalid Year!");
    } else { // If it is correct, calls the function and displays the result!
    alert(`The number of days are ${daysInMonth(userMonth, userYear)}`);
    } // end second condition

} // end first condition

// Function for calculating the number of days in a month
function daysInMonth(month, year) {

    let days;
    // Condition for February (leap year or not)
    if ( month == 2)  {
        
        if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
        days = 29;
        
        } else {
        days = 28;
        } // end condition for February
    
    // Condition for months having 30 days
    } else if ((month >= 4 && month <= 6 && month % 2 == 0) || (month >= 9 && month <= 11 && month % 2 != 0)) {
    days = 30;
    
    // Condition for months having 31 days
    } else {
    days = 31;
    }  
    
    return days;    

} // end function 