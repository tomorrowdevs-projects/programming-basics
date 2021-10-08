const oneLiterBottlePrice = 0.10;
const moreThanOneLiterBottlePrice = 0.25;


const firstQuestion = prompt("Is your bottles one liter or less answer just with 'true' or 'false' ?")

if(firstQuestion === "true") {

  let numberOfBottles = parseInt(prompt("how many bottles do you have ?"), 10);
  calculateTotal(numberOfBottles, oneLiterBottlePrice)

} else if(firstQuestion === "false") {

  let numberOfBottles = parseInt(prompt("how many bottles do you have ?"), 10)

  calculateTotal(numberOfBottles, moreThanOneLiterBottlePrice)
}

function calculateTotal (value, price) {
  let temp;
  value = parseInt(prompt("how many bottles do you have ?"), 10)

  typeof(value) !== "number" || value === Number.isNaN ? alert("Very bad Baby") : temp = value

 return alert(`This is your guaranteed cash back baby $${(temp * price).toFixed(2)}`)
}
