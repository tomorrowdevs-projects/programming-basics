/*In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled. 
Write a function that takes the distance travelled (in kilometers) as its only parameter and returns the total fare as its only result. 
Write a main program that demonstrates the function.*/

function calcTaxiFares(kilometers) {
    const baseFee = 4;
    const addKmFee = 0.25;
    const conversionAddMeters = 140 / 1000;
  
    const totalTicket = (kilometers / conversionAddMeters) * addKmFee + baseFee;
  
    return totalTicket
  }
  
  const  kmTraveled = Number(prompt("Type in the kilometers traveled"));
  
  alert(`The total fee payable is: ${calcTaxiFares(kmTraveled).toFixed(2)} €`);