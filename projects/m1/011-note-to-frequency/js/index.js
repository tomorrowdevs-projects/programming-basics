
const NOTEINPUT = prompt('Please, enter a note using the right format (e.g.: "A2"):');
const REGEX = /^[A-G][0-8]{1}/i;

let noteLetter = (NOTEINPUT.slice(0, 1)).toUpperCase();
let octaveNumber = NOTEINPUT.slice(1);

let octavePow = (Math.pow(2, 4-octaveNumber).toFixed(2));


if (REGEX.test(NOTEINPUT)) { 

        if (noteLetter == "C") {
            let cfrequency = (261.63 / octavePow).toFixed(2);
            alert("The frequency of " + NOTEINPUT.toUpperCase() + " is " +  cfrequency + "!")

        } else if (noteLetter == "D"){
            let dfrequency = (293.66 / octavePow).toFixed(2);
            alert("The frequency of " + NOTEINPUT.toUpperCase() + " is " +  dfrequency + "!")

        } else if (noteLetter == "E"){
            let efrequency = (329.63 / octavePow).toFixed(2);
            alert("The frequency of " + NOTEINPUT.toUpperCase() + " is " +  efrequency + "!")

        } else if (noteLetter == "F"){
            let ffrequency = (349.23 / octavePow).toFixed(2);
            alert("The frequency of " + NOTEINPUT.toUpperCase() + " is " +  ffrequency + "!")

        } else if (noteLetter == "G"){
            let gfrequency = (392.00 / octavePow).toFixed(2);
            alert("The frequency of " + NOTEINPUT.toUpperCase() + " is " +  gfrequency + "!")

        } else if (noteLetter == "A"){
            let afrequency = (440.00 / octavePow).toFixed(2);
            alert("The frequency of " + NOTEINPUT.toUpperCase() + " is " +  afrequency + "!")

        } else if (noteLetter == "B"){
            let bfrequency = (493.88 / octavePow).toFixed(2);
            alert("The frequency of " + NOTEINPUT.toUpperCase() + " is " +  bfrequency + "!")

        }

     } else {

        alert('Your input is invalid, please try again!');
        location.reload();

}
