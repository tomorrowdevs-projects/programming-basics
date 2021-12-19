let age;
let totalToPay = 0;

while (age !== "") {
	age = prompt("Please enter the age of the visitor:");
	if (age < 2) {
		totalToPay += 0;
	} else if (age >= 3 && age <= 12) {
		totalToPay += 14;
	} else if (age >= 65) {
		totalToPay += 18;
	} else {
		totalToPay += 23;
	}
}

alert(`The total amount to pay for the tickets is: $ ${totalToPay.toFixed(2)}`);
