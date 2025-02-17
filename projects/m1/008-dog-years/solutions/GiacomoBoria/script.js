/*It is commonly said that one human year is equivalent to 7 dog years. 
However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 
As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog years. 
Write a program that implements the conversion from human years to dog years described in the previous paragraph. 
Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years. 
Your program should display an appropriate error message if the user enters a negative number.*/

// Inizialization variables: First years old, Third+ Years old and unit change years
const firstYearsOldDog = 10.5;
const threePlusYearsOldDogs = 4;
const changeAgeConvertion = 2;

alert(`Wow, you have beutifull dog!\nDo you know that a dog year is different from a human year?\nDogs become adults in about two years, in fact the first two years are equivalent to 10.5 human years and from the third year to 4.`);
// Input User 
const dogOldInHumanAge = parseInt(prompt("Type in your dog's age and I will tell you the equivalent canine age"), 0);

// Condition: If only first two years old
if (dogOldInHumanAge > 0 && dogOldInHumanAge <= changeAgeConvertion) {
    alert(`The age of your dog is ${dogOldInHumanAge * firstYearsOldDog}`);
 
    // Condition: If three plus years old
} else if (dogOldInHumanAge > changeAgeConvertion) {
    alert(`The age of your dog is ${firstYearsOldDog * changeAgeConvertion + threePlusYearsOldDogs * (dogOldInHumanAge - changeAgeConvertion)}`);
 
    // Condition: Controll if string or negative number
} else if (dogOldInHumanAge <= 0 || String) {
    alert("Sorry, it is not possible to type negative numbers or letters");
}

