
const EARLYYEARS = 10.5;
const LATEYEARS = 7;

let inputYears = prompt("Please, enter the number of years you want to convert in dog years:");
let youngDogAge;
let oldDogAge;


if (inputYears < 0) { 
    inputYears = alert("You can't enter a negative number!");
    location.reload();


} else { if (inputYears <= 2) {
            youngDogAge = (inputYears * EARLYYEARS);
            alert("Your dog is " + youngDogAge + " years old!");

        } else {
            oldDogAge = (((inputYears - 2) * LATEYEARS) + (2 * EARLYYEARS))
            alert("Your dog is " + oldDogAge + " years old!");
        }   
} 