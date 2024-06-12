/*pennie = 0.01;
nickel = 0.05;
dime = 0.10;
quarter = 0.25;
loonie = 1;
toonie = 2;*/

//solution 1

/*const amountToChange = prompt("Insert the amount to change")*100

// calculate amount of toonies
const toonies = Math.floor(amountToChange / 200);
let remainder = amountToChange % 200;

// if remainder > 0 calculate loonies
const loonies = Math.floor(remainder / 100);
remainder = remainder % 100;

// if remainder > 0 calculate quarters
const quarters = Math.floor(remainder / 25);
remainder = remainder % 25;

// if remainder > 0 calculate dimes
const dimes = Math.floor(remainder / 10);
remainder = remainder % 10;

// if remainder > 0 calculate nickels
const nickels = Math.floor(remainder / 5);
remainder = remainder % 5;

// if remainder > 0 calculate pennies
const pennies = Math.floor(remainder / 1);
remainder = remainder % 1;

alert("Toonies: " + toonies + "; " + "Loonies: " + loonies + "; " + "Quarters: " + quarters + "; " + "Dimes: " + dimes + "; " + "Nickels: " + nickels + "; " + "Pennies: " + pennies)*/

//solution 2

const coinsValue = [200, 100, 25, 10, 5, 1]
const coinsName = ["Toonies", "Loonies", "Quarters", "Dimes", "Nickels", "Pennies"]
const amountToChange = prompt("Insert the amount to change")*100

function change() {
    //calculate amount of toonies
    const toonies = Math.floor(amountToChange / coinsValue[0]);
    let remainder = amountToChange % coinsValue[0];
    alert(coinsName[0] + ": " + toonies)
    //check if the ramainder is 0, if so: loop trough the array to calculate the amount of each coin
        if (remainder > 0) {
            for (i = 1; i<=coinsValue.length-1;) {
                const nextCoin =  Math.floor(remainder / coinsValue[i]);
                remainder = remainder % coinsValue[i]; 
                alert(coinsName[i] + ": " + nextCoin)
                i++
                }
            }
        }


change()