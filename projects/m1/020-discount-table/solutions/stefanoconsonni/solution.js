const purchases = [4.95, 9.95, 14.95, 19.95, 24.95];

for (let purchase of purchases) {
	let discount = ((purchase * 60) / 100).toFixed(2);
	let finalPrice = (purchase - discount).toFixed(2);
	alert(`Original price: $ ${purchase}\nDiscount amount: $ ${discount}\nFinal price: $ ${finalPrice}`);
}
