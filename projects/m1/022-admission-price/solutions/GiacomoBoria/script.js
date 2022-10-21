/*A particular zoo determines the price of admission based on the age of the guest. 
Guests 2 years of age and less are admitted without charge. Children between 3 and 12 years of age cost $14.00. 
Seniors aged 65 years and over cost $18.00. Admission for all other guests is $23.00. 
Create a program that begins by reading the ages of all of the guests in a group from the user, with one age entered on each line. 
The user will enter a blank line to indicate that there are no more guests in the group. 
Then your program should display the admission cost for the group with an appropriate message. 
The cost should be displayed using two decimal places.*/

let ageGuests;
let totalPrice = 0;
const juniorTicketsPrice = 14.00;
const normalTicketsPrice = 23.00;
const seniorTicketsPrice = 18.00;

console.log(ageGuests)

while (ageGuests != " ") {
  ageGuests = prompt("Type, one at a time, your age and any companions who will accompany you to the Zoo:\n(Type blank-line for quit)")

  if (ageGuests <= 2) {
    continue;
  } else if (ageGuests >= 3 && ageGuests <= 12){
    totalPrice += juniorTicketsPrice;
  } else if (ageGuests > 12 && ageGuests < 65){
    totalPrice += normalTicketsPrice;
  } else if (ageGuests >=65){
    totalPrice += seniorTicketsPrice;
  } 
} 
alert(`The total cost of the tickets is: ${totalPrice.toFixed(2)}$`)