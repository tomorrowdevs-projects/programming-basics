

let numberInput = parseInt(prompt('Please, enter an integer (2 or greater):'));
let newNumber = numberInput;
let factorStart = 2;
let factorNew = factorStart;
let factorArray = [];

if (numberInput > 1 ) {

    while (factorNew <= newNumber) {

        if (newNumber % factorNew === 0) {
            let fraction = newNumber / factorNew;
            factorArray.push(factorNew);
            newNumber = fraction;

        } else {
            factorNew = factorNew + 1;

        }
    }

} else {
    alert('Please, enter an integer greater or equal than "2"!');
    location.reload();

}

alert("The prime factors of " + numberInput + " are:\n" + factorArray.join("\n"));