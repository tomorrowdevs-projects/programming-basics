let itemArray = [4.95, 9.95, 14.95, 19.95, 24.95];

let itemArrayDisc = [4.95, 9.95, 14.95, 19.95, 24.95];

for (let i=0; i<itemArrayDisc.length; i++) {
    itemArrayDisc[i] = itemArrayDisc[i]*0.40;
}
const official = "Prize";
const discount = "New";

console.log(`${official} | ${discount.padStart(5, ' ')} |
`) 

console.log(`${itemArray[0].toString().padStart(5, '0')} | ${itemArrayDisc[0].toFixed(2).toString().padStart(5, '0')} |`);
console.log(`${itemArray[1].toString().padStart(5, '0')} | ${itemArrayDisc[1].toFixed(2).toString().padStart(5, '0')} |`);
console.log(`${itemArray[2].toString().padStart(5, '0')} | ${itemArrayDisc[2].toFixed(2).toString().padStart(5, '0')} |`);
console.log(`${itemArray[3].toString().padStart(5, '0')} | ${itemArrayDisc[3].toFixed(2).toString().padStart(5, '0')} |`);
console.log(`${itemArray[4].toString().padStart(5, '0')} | ${itemArrayDisc[4].toFixed(2).toString().padStart(5, '0')} |`);