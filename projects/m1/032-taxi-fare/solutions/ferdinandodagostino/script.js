// In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled. Write a function that takes the distance travelled (in kilometers) as its only parameter and returns the total fare as its only result. Write a main program that demonstrates the function.

const km = prompt('Inserisci kilometri');

function taxi(km) {
  if (km < 0.14) {
    cost = 4;
    console.log(cost);
  } else {
    cost = 4 + 0.25 * (km / 0.14);
    console.log(cost);
  }
}

taxi(km);
