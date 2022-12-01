
let itemsNumber = parseInt(prompt("- SHIPPING CALCULATOR - \nPlese, enter the number od items you've ordered to calculate your shipping cost:"));

function shippingCalculator() {
    if (itemsNumber > 1) {
        totalCost = ((itemsNumber - 1) * 2.99) + 10.99;

    } else {
        totalCost = 10.99;

    }

    alert("The total cost is of your shipment is: $" + totalCost + ".");
}

shippingCalculator();
