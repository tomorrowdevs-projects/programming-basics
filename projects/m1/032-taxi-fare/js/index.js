function taxiFare(distanceKm) {
    const basicFare = 4;
    const distanceMeters = distanceKm * 1000;
    const myDistance = (distanceMeters / 140) * 0.25;
    const globalFare = myDistance + basicFare;
    return globalFare;
}
function calculateAndShowFare() {

    const distance = prompt("Inserisci la distanza da percorrere in chilometri");
    const fare = taxiFare(distance).toFixed(2);

    document.getElementById("result").innerHTML = `La tariffa della tua corsa è Euro ${fare}`;
}