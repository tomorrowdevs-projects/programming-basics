
const originalPrices =  [4.95, 9.95, 14.95, 19.95, 24.95];
const discountedPrices = [];


for (let element of originalPrices) {
    let discount = ((element / 100) * 60).toFixed(2);
    discountedPrices.push(discount);

}

alert("Hi! \nWelcome to the shop! \nIt's sale season and most items are 60% off! \nHere's a list of the current prices: \n$ " + originalPrices[0] + " --- $ " + discountedPrices[0] + "\n$ " + originalPrices[1] + " --- $ " + discountedPrices[1] + "\n$ " + originalPrices[2] + " --- $ " + discountedPrices[2] + "\n$ " + originalPrices[3] + " --- $ " + discountedPrices[3] + "\n$ "+ originalPrices[4] + " --- $ " + discountedPrices[4] + "\n");

