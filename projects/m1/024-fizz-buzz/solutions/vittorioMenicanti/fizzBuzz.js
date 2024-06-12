//fizz buzz

/* Fizz-Buzz is a game that is sometimes played by children to help them learn about division. The players are commonly arranged in a circle so that the game can progress from player to player continually. The starting player begins by saying one, and then play passes to the player to the left. Each subsequent player is responsible for the next integer in sequence before play passes to the following player.

On a player’s turn they must either say their number or one of following substitutions:

If the player’s number is divisible by 3 then the player says fizz instead of their number.
If the player’s number is divisible by 5 then the player says buzz instead of their number.
A player must say both fizz and buzz for numbers that are divisible by both 3 and 5. Any player that fails to perform the correct substitution or hesitates before answering is eliminated from the game. The last player remaining is the winner. Write a program that displays the answers for the first 100 numbers in the Fizz- Buzz game. Each answer should be displayed on its own line. */


for (let i = 1; i < 101; i++) {

  if (i % 15 == 0){// numbers that are divisible by 3 and 5 are also divided by 15

    console.log("FizzBuzz");

  }else if (i % 3 == 0){

    console.log("Fizz");

  } else if(i % 5 == 0) {

      console.log("Buzz");

  } 
  else console.log(i);
}

