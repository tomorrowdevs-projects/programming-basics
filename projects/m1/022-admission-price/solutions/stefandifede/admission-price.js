let totalAmount = 0;
let costsPerAge = []

/*if age is 2 ore less, cost is 0
if age is from 3 to 12, cost is 14
if age is 65 or more, cost is 18
normal cost is 23*/

function checkGuestAge() {
    let userInput = prompt("insert the age of the guest");
    if (userInput != "") {
     if (userInput <= 2) {
            costsPerAge.push(0)
            checkGuestAge()
        } else if (userInput >= 3 && userInput <= 12) {
            costsPerAge.push(14)
            checkGuestAge()
        } else if (userInput >= 65) {
            costsPerAge.push(18)
            checkGuestAge()
        } else (costsPerAge.push(23), checkGuestAge())
    } else (calculatingTotalAmount())
}


function calculatingTotalAmount () {
    for (let i = 0; i < costsPerAge.length; i++) {
        totalAmount = totalAmount + costsPerAge[i];
     }
    alert("The amount for the entire group is: " + totalAmount.toFixed(2) + " $")
 }   


checkGuestAge() 