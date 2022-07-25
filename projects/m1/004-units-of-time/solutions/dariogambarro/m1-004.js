const days = +prompt('How many days?');         //conversione numerica con operatore unario +
const hours = +prompt('How many hours?');
const minutes = +prompt('How many minutes?');
const seconds = +prompt('How many seconds?');

const totSeconds = (seconds+(minutes*60)+(hours*60*60)+(days*24*60*60));

console.log(`The durations is ${totSeconds} seconds`);