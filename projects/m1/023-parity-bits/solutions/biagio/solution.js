const prompt = require('prompt-sync')();

let bit = prompt("Insert bit: ")

if ((bit.length != 8) && (bit != "")) {
    console.log(`Insert valid bit`)
} else if (bit % 2 === 0 && bit != "") {
    console.log(`Parity bit should be 0`)
} else if (bit % 2 !== 0 && bit != "") {
    console.log(`Parity bit should be 1`)
} else {

}

while (bit != "") {
    bit = prompt("Insert bit: ")
    if (bit.length != 8 && bit != "") {
        console.log(`Insert valid bit`)
    } else if (bit % 2 === 0 && bit != "") {
        console.log(`Parity bit should be 0`)
    } else if (bit % 2 !== 0 && bit != "") {
        console.log(`Parity bit should be 1`)
    } else if (bit == "") {
        break
    }

}