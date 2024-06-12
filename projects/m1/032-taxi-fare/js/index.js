
let km = parseInt(prompt("Hi! In this jurisdictiontaxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled, how many km you'd like totravel?"));

function taxiFare () {
    let fareCounter = ((km / 0.140) * 0.25) + 4;
    alert("Your total fare is $" + fareCounter.toFixed(2) + "!");

}

taxiFare();