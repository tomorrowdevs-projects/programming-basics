function addTime(start, duration, day = "") {
  console.log(start, duration, day);
  // split parameters in hh, mm, PM or AM
  // start
  const splitStart = start.split(" ");
  const splitStartTime = splitStart[0].split(":");
  const startHour = parseInt(splitStartTime[0]);
  const startMinutes = parseInt(splitStartTime[1]);
  let format = splitStart[1];
  // duration
  const splitDuration = duration.split(":");
  const durationHours = parseInt(splitDuration[0]);
  const durationMinutes = parseInt(splitDuration[1]);
  // calc hours and minutes
  let hours = startHour + durationHours;
  let minutes = startMinutes + durationMinutes;
  let dayStart = 0;

  if (hours >= 24) {
    while (hours >= 24) {
      hours -= 24;
      dayStart += 1;
    }
  }
  if (hours > 12) {
    hours -= 12;
    if (format === "PM") {
      dayStart += 1;
      format = "AM";
    } else {
      format = "PM";
    }
  }

  if (minutes > 60) {
    hours += 1;
    minutes -= 60;
  }

  if (hours >= 12 && format === "PM") {
    dayStart += 1;
  }

  const formatTime = hours + ":" + formatMinute(minutes);
  const formatDay = day !== "" ? dayOfWeek(day.toLowerCase(), dayStart) : "";
  let formatNextDay = "";

  if (dayStart > 1) {
    formatNextDay += `(${dayStart.toFixed(0)} days later)`;
  } else if (dayStart === 1) {
    formatNextDay += "(next day)";
  } else {
    formatNextDay = "";
  }

  let message = formatTime + " " + format + " " + formatDay + " " + formatNextDay;
  return message
}

function formatMinute(minute) {
  let format = "";
  if (minute < 10) {
    format = "0" + minute;
  } else {
    format = minute;
  }
  return format;
}

function dayOfWeek(day, sumDay) {
  const dayOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const indexOfDay = dayOfWeek.indexOf(day);
  const sumNewDay = indexOfDay + sumDay;
  const newDay = dayOfWeek[sumNewDay];
  return newDay;
}

console.log(`Result: ${addTime("3:00 PM", "3:10")}`);
console.log(`Result: ${addTime("11:30 AM", "2:32", "Monday")}`);
console.log(`Result: ${addTime("10:10 PM", "3:30")}`);
console.log(`Result: ${addTime("11:43 PM", "24:20", "tueSday")}`);
console.log(`Result: ${addTime("6:30 PM", "205:12")}`);
