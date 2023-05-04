function myTaxiFare (distance) {
    const baseFare = 4;
    let distanceInMeters = (distance * 1000) / 140;
    let totalFare = Math.floor(distanceInMeters * 0.25) + baseFare;
    return totalFare;
  }
  
  let distance = prompt('Insert the distance in kilometers');
  let fare = myTaxiFare (distance);
  console.log(`Total fare: ${fare} $`);