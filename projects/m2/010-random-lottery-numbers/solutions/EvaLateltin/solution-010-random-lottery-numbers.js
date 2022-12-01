/*
LOGIC
Create an array that will store the drawn numbers. 
Create a function that generates a random number:
- Use the method: Math.random() to get a random number
- Use the method: Math.floor() so that the random number is integer
- Multiply the random number * the maximum value (49), then add 1
- If the array doesn't inlcude this random number, store it in the array
- Go through the function until the length of the array is equal to 6
- Alert the array, sorted in ascendent order
*/

const randomIntDrawn = [];

function getRandomInt() {
  const randomInt = Math.floor(Math.random() * 49 + 1);
  if (!randomIntDrawn.includes(randomInt)) {
    randomIntDrawn.push(randomInt);
  }
}

while (randomIntDrawn.length < 6) {
  getRandomInt();
}

alert(randomIntDrawn.sort((a, b) => a - b));
