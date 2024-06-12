let userStartTime = prompt('Enter the start time in the following format\n [hh]:[mm][AM-PM] (for ex: 01:15 PM)');
let userAddTime = prompt('Enter the duration time in the following format\n [hh]:[mm] (for ex: 03:15 ...)');
let userDay = prompt('Enter the day of the week').toLowerCase();

function add_Time(startTime, addTime, day) {
    const startHrs = parseInt(startTime.slice(0, 2));
    const startMin = parseInt(startTime.slice(3, 5));
    const startAM_PM = startTime.slice(-2).toUpperCase();

    const arrAddTime = addTime.split(':')

    let addHrs = parseInt(arrAddTime[0]);
    let addMin = parseInt(arrAddTime[1]);

    let endAM_PM;

    let totMin = startMin + addMin;

    if (totMin == 60) {
        totMin -= 60;
        addHrs += 1;
    } else if (totMin > 60) {
        totMin -= 60;
        addHrs += 1;
    }



    let totHrs = startHrs + addHrs;

    let daysLater;
    let dayLaterDisplay;


    if (startAM_PM == 'PM') {
        daysLater = Math.floor((totHrs + 12) / 24);
    } else {
        daysLater = Math.floor(totHrs / 24);
    }

    if (daysLater > 1) {
        dayLaterDisplay = `(${daysLater} Days Later)`;
    } else if (daysLater == 1) {
        dayLaterDisplay = '(Next Day)'
    } else {
        dayLaterDisplay = '(same day)';
    }


    const dayWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let dayWeekDisplay;

    if (day) {
        let position = dayWeek.indexOf(day);
        position = (position + daysLater) % dayWeek.length;
        dayWeekDisplay = dayWeek[position];

    } else {
        dayWeekDisplay = '';
    }




    totHrs = totHrs % 24;

    if (startAM_PM === 'AM' && totHrs == 12) {
        endAM_PM = 'PM'

    } else if (startAM_PM === 'PM' && totHrs == 12) {
        endAM_PM = 'AM'

    } else if (startAM_PM === 'AM' && totHrs > 12) {
        totHrs -= 12;
        endAM_PM = 'PM'

    } else if (startAM_PM === 'PM' && totHrs > 12) {
        totHrs -= 12;
        endAM_PM = 'AM'

    } else {
        endAM_PM = startAM_PM
    }

    


    newTime = `${totHrs} : ${('00' + totMin).slice(-2)} ${endAM_PM} ${dayWeekDisplay} ${dayLaterDisplay}`


    return newTime;


}

alert(add_Time(userStartTime, userAddTime, userDay));

