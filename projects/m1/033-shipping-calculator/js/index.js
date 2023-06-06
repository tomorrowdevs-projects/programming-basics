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
    let basicCost = 10.99;
    let otherCost = 2.99;
    let totalCost = basicCost + (otherCost * totalOrders);
    return totalCost;
}

function calculateAndShow() {
    startInput(); 
    const totalOrders = ordersArray.length; 
    let totalshipping = definitiveCost(totalOrders); 
    let ordersList = ordersArray.join(", "); 
    document.getElementById('output').innerHTML = `Il costo totale della spedizione per gli articoli ${ordersList} è ${totalshipping.toFixed(2)}`;
}