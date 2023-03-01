const distance = prompt("Insert the distance travelled in kilometers to calculate the fare")

function totalFee() {
    const additionalFee = (distance * 1000) / 140 * 0.25
    const totalFee = 4 + additionalFee
    alert(totalFee.toFixed(2)+ " $")
}

totalFee()