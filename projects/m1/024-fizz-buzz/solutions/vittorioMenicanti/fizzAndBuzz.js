

//Fizz and Buzz game
//M1-024

/* If the player’s number is divisible by 3 then the player says fizz instead of their number.
If the player’s number is divisible by 5 then the player says buzz instead of their number.
A player must say both fizz and buzz for numbers that are divisible by both 3 and 5. */

/* Write a program that displays the answers for the first 100 numbers in the Fizz- Buzz game. Each answer should be displayed on its own line. */


/*Numbers that are disible  by 3 from 1 to 100: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96  99.  */


/* Numbers that are divisible by 5 from 1 to 100: 5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95 */


/* Numbers that are divisible by 3 and 5  up to 100: 15,30,45,60,75,90*/


const userInput = parseFloat(prompt('Please type a number'));


if(userInput > 100){

  alert('Error: type a number less than 100');

}
if(userInput%3===0){

  alert('Fizz!');

}if(userInput%5==0){

  alert('Buzz!');

}if(userInput%3===0 && userInput%5===0){

  alert('Fizz and Buzz!');
}



