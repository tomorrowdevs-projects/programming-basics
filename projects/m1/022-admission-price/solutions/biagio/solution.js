const prompt = require('prompt-sync')();

const guestsAge = [];
let count312 = 0;
let count65 = 0;
let count2 = 0;
let countOther = 0;

let age = prompt("Insert age of your guest: ")
guestsAge.push(age)
while (age != "") {
    age = prompt("Insert age of your guest: ")
    guestsAge.push(age)
}

for (i = 0; i < guestsAge.length; i++) {
    if (guestsAge[i] <= 12 && guestsAge[i] >= 3) {
        count312 += 1;
    } else if (guestsAge[i] >= 65) {
        count65 += 1;
    } else if (guestsAge[i] <= 2) {
        count2 += 1;
    } else {
        countOther += 1;
    }

}
const total312 = count312 * 14
const total65 = count65 * 18
const total2 = count2 * 0
const totalOther = countOther * 23
const total = total312 + total65 + total2 + totalOther



console.log(`Guest under 2 year ${total2.toFixed(2)}$\nGuest between 3 and 12 year ${total312.toFixed(2)}$\nGuest between 13 and 64 year ${totalOther.toFixed(2)}$\nGuest over 65 year ${total65.toFixed(2)}$\nThe total price to pay is ${total.toFixed(2)}$`)