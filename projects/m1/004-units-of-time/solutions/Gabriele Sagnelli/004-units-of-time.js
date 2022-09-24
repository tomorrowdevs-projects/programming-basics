//units of time 

const sec_in_a_min=minutes=60;


let userDays=+prompt('insert number of days:');

let userHours=+prompt('insert number of hours:');

let userMinutes=+prompt('insert number of minutess:');

const tot_Seconds=+prompt('insert number of seconds:');

const tot_day_sec=userDays * 24 * 60 * sec_in_a_min;

const tot_hour_sec=userHours * 60 * sec_in_a_min;

const tot_min_sec=userMinutes * sec_in_a_min;

alert(`the duration is ${tot_Seconds + tot_day_sec + tot_hour_sec + tot_min_sec } seconds`);
//okay