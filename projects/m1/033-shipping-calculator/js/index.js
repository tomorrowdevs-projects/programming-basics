let ordersArray = [];
function startInput() {
    let newOrder = "";

    while (newOrder !== "n") {
        newOrder = prompt("Inserisci un articolo nel carrello (inserisci n per terminare):");
        if (newOrder !== "n") {
            ordersArray.push(newOrder);
        }
    }
}

function definitiveCost(totalOrders) {
    const basicCost = 10.99;
    const otherCost = 2.99;
    const totalCost = (totalOrders > 1) ? (basicCost + (otherCost * (totalOrders - 1))) : basicCost;
    return totalCost;
}

function calculateAndShow() {
    startInput(); 
    const totalOrders = ordersArray.length; 
    const totalshipping = definitiveCost(totalOrders); 
    const ordersList = ordersArray.join(", "); 
    document.getElementById('output').innerHTML = `Il costo totale della spedizione per gli articoli ${ordersList} è ${totalshipping.toFixed(2)}`;
}