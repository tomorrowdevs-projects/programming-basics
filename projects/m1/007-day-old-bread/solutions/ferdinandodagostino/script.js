// A bakery sells loaves of bread for €3.49 each. Day old bread is discounted by 60 percent. Write a program that begins by reading the number of loaves of day old bread being purchased from the user. Then your program should display the regular price for the bread, the discount because it is a day old, and the total price. Each of these amounts should be displayed on its own line with an appropriate label. All of the values should be displayed using two decimal places, and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.

const bread = parseFloat(prompt('Quante pagnotte vuoi acquistare?'));

const breadPrice = 3.49;

const discount = 0.6;

if (!isNaN(bread)) {
  const fullPrice = bread * breadPrice;

  const discountedPrice = fullPrice * discount;

  const discountedFinalPrice = fullPrice - discountedPrice;

  const discountedFinalPriceRounded = discountedFinalPrice.toFixed(2);

  alert(
    `Il prezzo del pane fresco è €${fullPrice}.\n Lo sconto del pane vecchio di un giorno è del ${
      discount * 100
    }%\n Il prezzo totale del pane vecchio è €${discountedFinalPriceRounded}`
  );
} else {
  alert('Numero non valido');
}
