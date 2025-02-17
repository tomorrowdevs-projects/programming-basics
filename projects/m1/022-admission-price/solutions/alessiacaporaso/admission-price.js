// reads the age of the group
let userAge;
let price;
let convertAge;
let groupAge = [];
let listTicketPrice = [];
let message;
/* determines the price of admission based on the age of the guest, 
stopping the loop when the user enters a blank line */
while(userAge != " "){
  userAge = prompt('Please, enter the age');
  convertAge = parseInt(userAge)
  if(convertAge <= 2) {
      price = 0;
      message = "The price of the ticket is $0"
  } else if (convertAge >= 3 && convertAge <= 12){
      price = 14;
      message = "The price of the ticket is $14,00"
  } else if (convertAge >= 65){
      price = 18;
      message = "The price of the ticket is $18,00"
  } else if(userAge === " "){
      price = 0;
      message = "Thank you for enter the age"
  }else {
      price = 23
      message = "The price of the ticket is $23,00"
  }
  alert(message)
  groupAge.push(convertAge);
  listTicketPrice.push(price)
}
// remove the last element
groupAge.pop();
listTicketPrice.pop();
// calc total amount for tickets
let tot = 0
for (let item of listTicketPrice) {
    tot += item
}
//alert(`Group age:\n${groupAge}\nPrice tickets for people is:\n${listTicketPrice}\nTotal amount for tickets is\n${tot.toFixed(2)}`)
alert(`Total amount for tickets is\n$${tot.toFixed(2)}`)