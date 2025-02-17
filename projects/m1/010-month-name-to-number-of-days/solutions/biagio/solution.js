const prompt = require('prompt-sync')();

let month = prompt("Check month: ")

month = month.toLowerCase();

let month30 = ['september', 'april', 'june', 'november'];
let month31 = ['january', 'march', 'may', 'july', 'august', 'october', 'december']

if (month30.includes(month) == true) {
    console.log(`${month} has 30 days`);
} else if (month31.includes(month) == true) {
    console.log(`${month} has 31 days`);
} else if (month == 'february') {
    console.log(`${month} has 28 or 29 days`);
} else {
    console.log('Insert a correct month');
}