
let kids = 0;
let teens = 0;
let adults = 0;
let seniors = 0;
let inputAge = 0;
let regex =  /[0-9]/;

alert("Hi, and welcome to the zoo! Here are the ticket prices! \nToddlers: Free entry! \nChildren between 3 and 12 years of age: $14.00! \nSeniors aged 65 years and over: $18.00! \nAdmission for all other guests is $23.00!")

while (regex.test(inputAge) === true) {

    inputAge = parseInt(prompt("Please, enter your age"));

    if (inputAge >= 3 && inputAge <= 12) {
        teens += 14

    } else if (inputAge >= 13 && inputAge <= 64)  {
        adults += 23

    } else if  (inputAge >= 65)
        seniors += 18

    }

    let totalPrice = teens + adults + seniors;

alert("The total is $" + totalPrice.toFixed(2) + "!");