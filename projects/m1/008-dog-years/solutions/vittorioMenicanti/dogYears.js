// Dog Years

/* It is commonly said that one human year is equivalent to 7 dog years. However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog years. Write a program that implements the conversion from human years to dog years described in the previous paragraph. Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years. Your program should display an appropriate error message if the user enters a negative number. */



let humanAge = prompt("Please enter the number of human years to convert:");

if (humanAge < 0) {
	alert("The age you entered is not valid. Please enter a valid age.");
} else if (humanAge < 2) {
	humanAge = humanAge * 10.5;
	alert(`The age you entered corresponds to ${humanAge} dog years`);
} else {
	let youngDogYears = 2;
	youngDogYears = youngDogYears * 10.5;

	let adultDogYears = humanAge - 2;
	adultDogYears = adultDogYears * 4;
     
	let humanConvDogYears = youngDogYears + adultDogYears;

	alert(`The age corresponds to ${humanConvDogYears}  dog years`);
}