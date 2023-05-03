const prompt = require('prompt-sync')();
const dataUserString = prompt('Inserisci una data nel seguente formato yyyy-mm-dd: ');
const dataUser = new Date(dataUserString);

const msInADay = 24 * 60 * 60 * 1000;
let nextDay = new Date(dataUser.getTime() + msInADay);
let month = nextDay.getUTCMonth() + 1;
let day = nextDay.getUTCDate();
let years = nextDay.getUTCFullYear();
let dataNext = "Il giorno seguente a quello che hai inserito è il " + years.toString() + "-" + month.toString() + "-" + day.toString();
console.log(dataNext);