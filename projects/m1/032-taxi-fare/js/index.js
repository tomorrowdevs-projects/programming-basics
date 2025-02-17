function myTaxiFare (distance) {
    const baseFare = 4;
    const distanceInMeters = (distance * 1000) / 140;
    const totalFare = Math.floor(distanceInMeters * 0.25) + baseFare;
    return totalFare;
  }
  
  let distance =  prompt('Insert the distance in kilometers');
  const fare = myTaxiFare (distance);
  console.log(`Total fare: ${fare} $`);