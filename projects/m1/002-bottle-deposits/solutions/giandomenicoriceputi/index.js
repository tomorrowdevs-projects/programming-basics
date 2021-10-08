const price1 = 0.10;
const price2 = 0.25;
let temp1;
let temp2;


const firstQuestion = prompt("Is your bottles one liter or less answer just with 'true' or 'false' ?")

if(firstQuestion === "true") {

  temp1 = parseInt(prompt("how many bottles do you have ?"), 10)

  calculateTotal(temp1, price1)

} else if(firstQuestion === "false") {

  temp2 = parseInt(prompt("how many bottles do you have ?"), 10)

  calculateTotal(temp2, price2)
}

function calculateTotal (value, price) {
  let temp;
  value = parseInt(prompt("how many bottles do you have ?"), 10)

  typeof(value) !== "number" || value === Number.isNaN ? alert("Very bad Baby") : temp = value

 return alert(`This is your guaranteed cash back baby $${(temp * price).toFixed(2)}`)
}
