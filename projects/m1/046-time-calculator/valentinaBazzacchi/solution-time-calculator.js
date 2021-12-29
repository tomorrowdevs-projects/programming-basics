function add_time(startTime, durationTime, startDay) {
    
    let startHrs, startMin, startAM_PM;
    let addHrs, addMin;
    
    //---------------------------> Extract Value from string <------------------------------------

    // Divide hours from minutes --> Result: Array["hrs", "min AM/PM"]
    startTime = startTime.split(":");
    
    // Assign the value of the array index 0 to the variable "startHrs" --> return string with hrs (+String => number);
    startHrs = +startTime[0];
    
    // Divide the substring of the array index 1 --> Result: Array["min, AM/PM"]; 
    startTime = startTime[1].split(" ");
    
    // Assign the value of the new substrings to the corresponding variables
    startMin = +startTime[0];
    startAM_PM = startTime[1]
    
    // Divide hrs from min also for "durationTime" and assign the values to the corresponding variables
    durationTime = durationTime.split(":");
    addHrs = +durationTime[0];
    addMin = +durationTime[1];
    
    // 12:00 -  1:00 -  2:00 -  3:00 -  4:00 -  5.00 -  6:00 -  7:00 -  8:00 -  9:00 - 10:00 - 11:00 AM/PM
    //  0:00 -  1:00 -  2:00 -  3:00 -  4:00 -  5.00 -  6:00 -  7:00 -  8:00 -  9:00 - 10:00 - 11:00 "AM"
    // 12:00 - 13:00 - 14:00 - 15:00 - 16:00 - 17.00 - 18:00 - 19:00 - 20:00 - 21:00 - 22:00 - 23:00 "PM"

    // ---------------------------------> Time Calculator <--------------------------------
   
    let endMin, endHrs, endAM_PM;

    // Turn 12 o'clock into hour "0"
    if (startHrs == 12) {
    startHrs = 0; 
    } 
    
    // Add Minutes 
    endMin = startMin + addMin;
     
    // Conditions for the minutes sum      
    if (endMin == 60) {
        endMin = 0;
        addHrs += 1;
    } else if (endMin > 60) {
        endMin -= 60;
        addHrs += 1;
    }

    // Add Hours
    endHrs = startHrs + addHrs;
    
    // Conditions for the hours sum 
    if (startAM_PM == "PM") {
        endHrs = endHrs + 12; // ---> for "PM time" add 12
        endHrs = endHrs % 24;
    } else if (startAM_PM == "AM") {
        endHrs = endHrs % 24;
    }
    // Conditions for the "end time": is AM or PM?
    if (endHrs > 12) {
        endHrs = endHrs - 12;
        endAM_PM = "PM";
    } else if (endHrs == 12) {
        endAM_PM = "PM";
    } else if (endHrs == 0) {
        endHrs = 12;
        endAM_PM = "AM";
    } else {
        endAM_PM = "AM";
    }
    
    // ----------------------------> Number of Days Later Calculator <---------------------------
    
    let numDaysLater = 0;
    let displayDaysLater;
 
    if (startAM_PM == "AM") {
        
        if (endAM_PM == "AM" && addHrs > 12 && addHrs < 36) {
        numDaysLater += 1;
        
        } else if (endAM_PM == "AM" && addHrs >= 36){
        numDaysLater = Math.floor(addHrs / 24);
        }  

        if (endAM_PM == "PM" && addHrs > 24 && addHrs < 48) {
        numDaysLater += 1;
        
        } else if (endAM_PM == "PM" && addHrs >= 48) {
        numDaysLater = Math.floor(addHrs / 24);
        } 
    
    } // end condition for startAM_PM = "AM"

    if (startAM_PM == "PM") {
        
        if (endAM_PM == "AM" && addHrs < 24) {
        numDaysLater += 1;
        
        } else if (endAM_PM == "AM" && addHrs >= 24) {
        numDaysLater = 1 + Math.floor(addHrs / 24);
        } 

        if (endAM_PM == "PM" && addHrs > 12 && addHrs < 36) {
        numDaysLater += 1;
        
        } else if (endAM_PM == "PM" && addHrs >= 36) {
        numDaysLater = Math.floor(addHrs / 24);
        }
    
    } // end condition for startAM_PM == "PM"

    // Conditions for displaying the "days later"
    if (numDaysLater == 1) {
    displayDaysLater = "Next Day";
    } else if (numDaysLater > 1) {
    displayDaysLater = `(${numDaysLater} days later)` 
    } else if (numDaysLater == 0) {
    displayDaysLater = "";
    }  

    // ---------------------------------> Day of the Week Calculator <--------------------------------
    
    let dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]; 
    let endDay;
      
    if (startDay != "" && startDay != undefined) {
        endDay = dayOfWeek[dayOfWeek.indexOf(startDay.toLowerCase()) + numDaysLater];
        endDay = endDay[0].toUpperCase() + endDay.slice(1); // ----> Displays the day of the week with the first capital letter
    
    } else {
        endDay = ""; // ----> If the day of the week is not specified, returns an empty string
    }

    return (`${endHrs}:${("00" + endMin).slice(-2)} ${endAM_PM} ${endDay} ${displayDaysLater}`);
  
} // end function
  
// Main Program
let startTime = "11:43 PM";
let durationTime = "24:20";
let startDay = "tueSday"
console.log(add_time(startTime, durationTime, startDay)); 