function getShippingCharge(numOfItems) {
	const baseCharge = 10.99;
	let finalCharge;
	if (numOfItems < 1) {
		alert("You didn't purchase any item.");
	} else if (numOfItems === 1) {
		finalCharge = baseCharge;
		alert(`The shipping charge for your order is: € ${baseCharge}`);
	} else {
		finalCharge = baseCharge + (numOfItems - 1) * 2.99;
		alert(`The shipping charge for your order is: € ${finalCharge.toFixed(2)}`);
	}
}

const userInput = parseInt(prompt("Please enter the number of items purchased:"));

getShippingCharge(userInput);
