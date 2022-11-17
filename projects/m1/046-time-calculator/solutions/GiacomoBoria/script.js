/*Write a function named add_time that takes in two required parameters and one optional parameter:

a start time in the 12-hour clock format (ending in AM or PM)
a duration time that indicates the number of hours and minutes
(optional) a starting day of the week, case insensitive
The function should add the duration time to the start time and return the result.

If the result will be the next day, it should show (next day) after the time. If the result will be more than one day later, it should show (n days later) after the time, where "n" is the number of days later.

If the function is given the optional starting day of the week parameter, then the output should display the day of the week of the result. The day of the week in the output should appear after the time and before the number of days later.

Below are some examples of different cases the function should handle. Pay close attention to the spacing and punctuation of the results.*/


function add_Time(startTime, endTime, dayStart) {
  
    const arrayStarTime = startTime.split(/:|[ ]/);
    const arrayEndTime = endTime.split(/:/);
  
    const startHours = +arrayStarTime[0]
    const startMinutes = +arrayStarTime[1]
    const startAmPm = arrayStarTime[2].toUpperCase()
    const weekDay = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
     
    const endHours = +arrayEndTime[0]
    const endMinutes = +arrayEndTime[1]
  
    let finishHours = startHours + endHours;
    let FinishMinutes = startMinutes + endMinutes;
    let finishAmPm 
    let nextDay;
    let dayWeek;
  
  
  // condition min
    if (startMinutes + endMinutes > 59) {
      
      FinishMinutes -= 60;
      finishHours += 1;
    }
  
    // condition day week
    if (finishHours < 24 && dayStart != "" && dayStart != undefined) {
      
      dayWeek = weekDay[weekDay.indexOf(dayStart)];
      
    } else if (dayStart != "" && dayStart != undefined && finishHours > 24){
      
      let dayPlusIndex = Math.ceil(finishHours/24);
      let weekIndexDay = weekDay.indexOf(dayStart);
      dayWeek =  weekDay[weekIndexDay + dayPlusIndex % 7];
      
    } else {
      dayWeek = ""
    }
  
  // condition daynext;
    if (finishHours < 24) {
      nextDay = ""
    } else if (finishHours >= 24 && finishHours < 36) {
      
      finishHours = finishHours % 24; 
      nextDay = "(next day)";
      
    } else if (finishHours >= 36) {
      
      nextDay = Math.ceil(finishHours/24) + " Days later"; //giorni
      finishHours = finishHours % 24; //orario
      
    } 
    
  // condition am or pm 
    if (finishHours <= 12) {
      
      finishAmPm = startAmPm;
    
    } else if (finishHours > 12 && startAmPm === "AM") {
      
      finishHours -= 12;
      finishAmPm = "PM";
      
    } else if (finishHours > 12 && startAmPm === "PM") {
      
      finishHours -= 12;
      finishAmPm = "AM";
      
    }  
  
    return finishHours + ":" + FinishMinutes.toString().padStart(2, "0") + " " + finishAmPm + " " + dayWeek + " " + nextDay;
  }
  
  
  const startTime = prompt("Type in the start time in 12H format(AM or PM)")
  const dayStart = prompt("Type the day you started the activity.\nP.S. If you do not remember the day, leave a blank space").toLowerCase()
  const endTime = prompt("Type the elapsed time to finish the task")
  
   
  alert(add_Time(startTime, endTime, dayStart)) 