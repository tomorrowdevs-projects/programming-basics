
let numberInput = parseInt(prompt("Please, enter a number:"));
let i = 0;
let sum = 0;

if (numberInput === 0) {
    alert("Please enter a valid input!");
    location.reload();
}

else {
    while (numberInput != 0) {
        sum += numberInput;
        i++;
        numberInput = parseInt(prompt("Please, enter a number:"));
    }

}

let average = (sum / i).toFixed(2);

alert("The average is " + average + "!"); 