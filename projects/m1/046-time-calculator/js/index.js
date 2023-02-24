function add_time(startTime, duration, dayOfWeek = ""){


    const listDaysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    dayOfWeek = dayOfWeek.toLowerCase()
    const daysOfWeekIndex = listDaysOfWeek.indexOf(dayOfWeek);
    

    // Split startTime
    let startTimeSplit = startTime.split(" ");
    startTimeSplit = startTimeSplit[0].split(":");

    let hoursStartTime = parseInt(startTimeSplit[0]);
    let minutesStartTime = parseInt(startTimeSplit[1]);
    let periodStartTime = startTime.slice(-2);

    // Split Duration
    let durationSplit = duration.split(":");

    let hoursDuration = parseInt(durationSplit[0]);
    let minutesDuration = parseInt(durationSplit[1]);

    // Sum Hour Duration + Hour Start Time
    let sumHours = 0;
    let days = 0;

    sumHours = hoursStartTime + hoursDuration;

    if (periodStartTime === "PM" && hoursStartTime !== 12) {
        hoursStartTime += 12;
    }

    const date = new Date(2023, 1, 1, hoursStartTime, minutesStartTime);

    date.setHours(date.getHours(hoursStartTime) + hoursDuration);
    date.setMinutes(date.getMinutes(minutesStartTime) + minutesDuration);

    days = date.getDate() - 1;

    let message = "";

    if(days === 1){
        message = "(next day)";
    } else if(days > 1) {
        message = "( " + days + " days later" + ")";
    } else {
        message = "";
    }

    let fullMessage = `${date.toLocaleTimeString('en-US')} ${days > 0 ? message : " "}`;

    while (days >= 7) {
        days = days % 7;
    }

    if(dayOfWeek){
        fullMessage += ` ${listDaysOfWeek[daysOfWeekIndex + days]}`;
    }

    return fullMessage;

}


console.log(add_time("3:00 PM", "3:10")); 
console.log(add_time("11:30 AM", "2:32", "Monday"));
console.log(add_time("11:43 AM", "00:20"));
console.log(add_time("10:10 PM", "3:30"));
console.log(add_time("11:43 PM", "24:20", "tueSday"));
console.log(add_time("6:30 PM", "205:12"));