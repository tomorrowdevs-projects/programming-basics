const secInMinuts = 60;
const secInHours = 60 * secInMinuts;
const secInDay = 24 * secInHours;


let daysUserStay = +prompt('Insert how many days of stay');
let hrsUserStay = +prompt('Insert how many hours of stay');
let minUserStay = +prompt('Insert how many minuts of stay');
let secUserStay = +prompt('Insert how many seconds of stay');


let totSecUserStay = ((daysUserStay * secInDay) + (hrsUserStay * secInHours) + (minUserStay * secInMinuts) + secUserStay);

alert(`The total time of stay is: ${totSecUserStay} seconds`);