function addTime(startTime, duration, startDay = null) {
	let startHrs, startMin;
	let arrOfHrsMin = duration.split(":");
	let durationHrs = parseInt(arrOfHrsMin[0].toString());
	let durationMin = parseInt(arrOfHrsMin[1].toString());

	if (startTime.length == 8) {
		startHrs = parseInt(startTime.slice(0, 2));
		startMin = parseInt(startTime.slice(3, 5));
	} else if (startTime.length == 7) {
		startHrs = parseInt(startTime.slice(0, 1));
		startMin = parseInt(startTime.slice(2, 4));
	}
	if (startHrs == 12) {
		startHrs = 0;
	}
	if (startTime.slice(-2) == "PM") {
		startHrs += 12;
	}

	let minute = startMin + durationMin;
	if (minute >= 60) {
		minute -= 60;
		durationHrs += 1;
	}
	let hour = startHrs + durationHrs;
	let days = Math.floor(hour / 24);
	let listOfDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
	if (startDay) {
		let index = listOfDays.indexOf(startDay);
		index = (index + days) % 7;
		startDay = listOfDays[index];
	}
	hour = hour % 24;

	let newTime;
	if (hour >= 12) {
		hour -= 12;
		if (hour == 0) {
			hour = 12;
		}
		newTime = `${hour}:${("00" + minute).slice(-2)} PM`;
	} else {
		if (hour == 0) {
			hour = 12;
		}
		newTime = `${hour}:${("00" + minute).slice(-2)} AM`;
	}

	if (startDay) {
		newTime = `${newTime}, ${startDay.charAt(0).toUpperCase() + startDay.slice(1)}`;
	}
	if (days > 0) {
		newTime += " ";
		if (days == 1) {
			newTime += "(next day)";
		} else {
			newTime += `(${days} days later)`;
		}
	}
	return newTime;
}

const InputStartTime = prompt("Please enter a start time:\n(for example 2:20 AM, 15:00 PM, 11:45 AM...)");
const inputDuration = prompt("Please enter a duration:\n(for example 00:30, 2:15...)");
const inputStartDay = prompt("Please enter a starting day of the week").toLowerCase();

alert(addTime(InputStartTime, inputDuration, inputStartDay));
