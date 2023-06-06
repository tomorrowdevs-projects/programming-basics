function taxiFare(distance) {
    const basicFare = 4;
    let myDistance = (distance / 140) * 0.25;
    let globalFare = myDistance + basicFare;
    return globalFare;
}

function calculateAndShowFare() {
    const distance = prompt("Inserisci la distanza da percorrere in metri");
    const fare = taxiFare(distance).toFixed(2);
    document.getElementById("result").innerHTML = `La tariffa della tua corsa è Euro ${fare}`;
}