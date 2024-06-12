const prompt = require('prompt-sync')();

let year = prompt("Insert a year and check if is leap or not: ");



if (year % 400 === 0) {
    console.log(`The ${year} is leap`)
} else if (year % 100 === 0) {
    console.log(`The ${year} is not leap`)
} else if (year % 4 === 0) {
    console.log(`The ${year} is leap`)
} else {
    console.log(`The ${year} is not leap`)
}