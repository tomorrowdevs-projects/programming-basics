let pieces = (Math.floor(prompt("Insert the number of loaves of bread you buy ")));
let totalBefore = (3.49 * pieces).toFixed(2);
let discount = ((3.49*0.6) *pieces).toFixed(2);
let totalAfter = (totalBefore-discount).toFixed(2);

alert(" Regular price: € " +totalBefore+ "\n Discount: € " +discount+ "\n New Total: € " +totalAfter);
