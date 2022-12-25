const listDaysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const yearUser = parseInt(prompt("Insert year"));

const dayOfTheWeek = (yearUser + Math.floor((yearUser - 1) / 4) - Math.floor((yearUser - 1) / 100) + Math.floor((yearUser - 1) / 400)) % 7;

alert("January 1 " + yearUser + ", fells on a " +  listDaysWeek[dayOfTheWeek] + ".");









