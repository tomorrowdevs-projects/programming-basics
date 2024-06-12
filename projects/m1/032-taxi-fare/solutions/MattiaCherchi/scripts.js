let userKm = parseFloat(prompt('Enter how many kilometers you have traveled'));
let baseFare = 4.00;
let addFee = 0.25;

function taxiFare(userKm) {
    let totFare = ((userKm / 0.14 * addFee) + baseFare).toFixed(2);
    return totFare;
}

let result = taxiFare(userKm);

alert(`The total fare is €: ${result}`);