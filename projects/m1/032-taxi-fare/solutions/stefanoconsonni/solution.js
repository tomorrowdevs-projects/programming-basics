function getTotalFare(kilometers) {
	const baseFare = 4.0;
	let extraFare = ((kilometers * 1000) / 140) * 0.25;
	let totalFare = baseFare + extraFare;
	alert(`The total fare to pay for the ride is: € ${totalFare.toFixed(2)}`);
}

const userInput = prompt("Please enter the distance covered by the taxi ride:");
getTotalFare(userInput);
