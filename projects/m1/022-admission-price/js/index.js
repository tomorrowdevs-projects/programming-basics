// Variable declaration
let ages_Guests = 0;
let price_Ticket = 0;
let sum_Tickets_Zoo = 0;
// Variable declaration of type String
let total_Price_Admission_Group = ";"
// Creation of an empty Array, which will be populated with the ticket prices of the individual guests in the Zoo
const price_Tickets_Single_Guest = [];
// Requesting the total number of guests 
let numbers_Guest = +prompt("Insert number of Zoo guests --> ")
// variable to initialise the " while " loop
let i = 0;
// Do - while cycle for price entry of each individual guest
do {
    ages_Guests = +prompt("Insert the age of each guest --> ");
    // Condition if to determine the Zoo admission price according to the age of the guest
    if (ages_Guests <= 2) {
        price_Ticket = 0;
    } else if (ages_Guests >= 3 && ages_Guests <= 12) {
        price_Ticket = 14;
    } else if (ages_Guests >= 65) {
        price_Ticket = 18;
    } else {
        price_Ticket = 23;
    }
    // Population array --> "price_Tickets_Single_Guest" with individual Zoo admission prices per age group.
    price_Tickets_Single_Guest.push(price_Ticket);
    // Increase variable 'i' by 1 to move on to the next guest entry.
    i++;
} while (i < numbers_Guest);
// For loop for scrolling single element array --> "price_Tickets_Single_Guest".
for (let i = 0; i < price_Tickets_Single_Guest.length; i++) {
    // Sum of all Array elements to derive the total of the sum of the individual tickets.
    sum_Tickets_Zoo = (sum_Tickets_Zoo + price_Tickets_Single_Guest[i]);
}
// Variable containing the result of the sum of the tickets of the guest group.
total_Price_Admission_Group = `The admission cost for the group is --> $ ${sum_Tickets_Zoo.toFixed(2)}`;
// Display of sum message.
console.log("\n" + total_Price_Admission_Group + "\n");