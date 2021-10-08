const oneLiterBottlePrice = 0.10;
const moreThanOneLiterBottlePrice = 0.25;


const firstQuestion = prompt("Is your bottles one liter or less answer just with 'true' or 'false' ?")

calculateTotal(firstQuestion)

function calculateTotal ( firstQuestion) {
  let temp;
 let value = parseInt(prompt("how many bottles do you have ?"), 10)
  isNaN(value) ? alert("no baby no way !") : temp = value

  console.log(temp)

firstQuestion === "true" ?
   alert(`This is your guaranteed cash back baby $${(temp * oneLiterBottlePrice).toFixed(2)}`)
  :
   alert(`This is your guaranteed cash back baby $${(temp * moreThanOneLiterBottlePrice).toFixed(2)}`)

}
