const year = prompt("insert a year")
const dayOfTheWeek = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

alert(dayOfTheWeek)
alert(days[dayOfTheWeek]);
