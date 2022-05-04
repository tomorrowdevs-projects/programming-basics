// A particular zoo determines the price of admission based on the age of the guest. Guests 2 years of age and less are admitted without charge. Children between 3 and 12 years of age cost $14.00. Seniors aged 65 years and over cost $18.00. Admission for all other guests is $23.00. Create a program that begins by reading the ages of all of the guests in a group from the user, with one age entered on each line. The user will enter a blank line to indicate that there are no more guests in the group. Then your program should display the admission cost for the group with an appropriate message. The cost should be displayed using two decimal places.

let guestAge;
const guests = [];
const guestBelowTwo = [];
const childrenGuests = [];
const seniorGuests = [];
const otherGuests = [];

const childrenGuestsPrice = 14;
const seniorGuestsPrice = 18;
const otherGuestsPrice = 23;

do {
  guestAge = parseInt(prompt('Inserisci la tua età'));
  if (!isNaN(guestAge)) {
    guests.push(guestAge);
  }
} while (!isNaN(guestAge));

for (let index = 0; index < guests.length; index++) {
  const guestAge = guests[index];

  if (guestAge <= 2) {
    guestBelowTwo.push(guestAge);
  } else if (guestAge >= 3 && guestAge <= 12) {
    childrenGuests.push(guestAge);
  } else if (guestAge >= 65) {
    seniorGuests.push(guestAge);
  } else {
    otherGuests.push(guestAge);
  }
}

const total =
  childrenGuests.length * childrenGuestsPrice +
  seniorGuests.length * seniorGuestsPrice +
  otherGuests.length * otherGuestsPrice;

alert(
  `I bambini entrano gratis, il costo totale per l'ingresso del gruppo è ${total.toFixed(
    2
  )}`
);
