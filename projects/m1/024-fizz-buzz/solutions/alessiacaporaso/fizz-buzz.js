// print number from 1 to 100
for (let i = 1; i <= 100; i++) {
  // if the player’s number is divisible by 3 then the player says Fizz
  // if the player’s number is divisible by 5 then the player says Buzz
  // print Fizz- Buzz if numbers that are divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz-Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}