const distance = prompt("Insert the distance travelled to calculate the fare in kilometers")

function totalFee() {
    const additionalFee = (distance * 1000) / 140 * 0.25
    const totalFee = 4 + additionalFee
    alert(totalFee.toFixed(2)+ " $")
}

totalFee()