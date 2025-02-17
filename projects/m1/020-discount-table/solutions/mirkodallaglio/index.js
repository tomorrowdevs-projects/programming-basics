let price = [4.95 , 9.95 , 14.95 , 19.95 , 24.95];
let discount = 0;
let discountPrice = 0;
let table = '';

price.forEach(number => {
    discount = (number * 0.6).toFixed(2);
    discountPrice = (number * 0.4).toFixed(2);
    table += `  ${number}        ${discount}             ${discountPrice}\n`;
});
alert(`Price    Discount    Discount Price\n${table}`);