let  time = prompt('Enter a start time in 12h format (Es. 4:00 am))');
let  durationTime = prompt('Enter a duration time to add a start time (Es.: 2:10');
let  dayOfWeek = prompt('Enter a day of the week (optional)');
let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

function addTime (time, durationTime, dayOfWeek){
    let timeToMs = (new Date("1/1/2000 " + time)).getTime();
    durationTime = durationTime.split(':').map(Number);
    let durationMs = durationTime[0] * 3600000 + durationTime[1] * 60000;
    let resultDate = new Date(timeToMs+durationMs);
    let resultTime = resultDate.toLocaleTimeString('en-US', {hour12: true});
    let result = resultTime.slice(0, -6) + resultTime.slice(-3, resultTime.length);
    let dayof = resultDate.getDate();

    if(dayOfWeek !== ''){
        let dayArrPos = dayName.indexOf(dayOfWeek);
        let deltaDay = dayArrPos + (dayof - 1);
        if (deltaDay <= 6) result += `, ${dayName[deltaDay]}`;
        else result += `, ${dayName[deltaDay % 7]}`;
    };

    if (dayof === 2) result += ' (next day)';
    else if (dayof > 2) result += ` (${dayof - 1} days later)`;

    return result;
};

if(/^(1[0-2]|0?[1-9]):([0-5]?[0-9]) ([AaPp][Mm])$/.test(time) && /(([0-9]+):([0-5][0-9]))/.test(durationTime)){

    if(dayOfWeek !== '' && dayName.includes(dayOfWeek)) alert(addTime(time,durationTime,dayOfWeek));
    else if (dayOfWeek === '') alert(addTime(time,durationTime,dayOfWeek));
    else alert('You misspelled the day');
    
}else alert('You wrote the wrong time or duration time');
