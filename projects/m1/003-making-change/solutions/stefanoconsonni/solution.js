/*
toonie = 200;
loonie = 100;
quarter = 25;
dime = 10;
nickel = 5;
penny = 1;
*/

let changeInDollars = prompt("Please enter the amount of dollars to return to the customer:");
let changeInCents = changeInDollars * 100;
let coinsDenominations = [200, 100, 25, 10, 5, 1];

let makeChange = (changeInCents) => {
	if (changeInCents <= 0) {
		alert("The amount to return is too low. Do not return any change.");
	} else {
		let changeToReturn = [];
		let total = 0;
		coinsDenominations.forEach((coin) => {
			while (total + coin <= changeInCents) {
				changeToReturn.push(coin);
				total += coin;
			}
		});
		alert(`Please return the following coins as a change: ${changeToReturn}`);
	}
};

makeChange(changeInCents);
