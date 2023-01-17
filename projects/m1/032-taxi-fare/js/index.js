let distance = parseInt(prompt("Enter the distance (in kilometers) you intend to travel to calculate the price."));

calculatePrice(distance);

function calculatePrice(distanceUser){

  let sumTotalPrice = 0;
  const priceTaxi = 4.00;
  const priceAdditional = 0.25;

  const sumPriceAdditional = (distanceUser / 140) * priceAdditional;
  sumTotalPrice = priceTaxi + sumPriceAdditional;

  alert("The cost of the service according to the data provided, corresponds to: " + sumTotalPrice.toFixed(2) + "€");

}