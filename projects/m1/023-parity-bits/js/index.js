
let bitsInput;
let regexp = /[0-1]{8}/;

while (bitsInput !== "") {

    bitsInput = prompt('Please, enter a series of bits:');

    if (regexp.test(bitsInput) === true) {

        let sum = 0;
        let bitsArray = bitsInput.split("");
        let bitsArrayNum = bitsArray.map(Number);

        for (let value of bitsArrayNum) {
            sum += value;
        }

        if (sum % 2 === 0) {
            alert("The parity bit your string needs is: 0!");

        } else {
            alert("The parity bit your string needs is: 1!");

        }


    } else {
        alert('Please enter a valid input!');
        break;

    }



}