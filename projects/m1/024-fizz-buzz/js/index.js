let player = 0;
const number3 = 3;
const number5 = 5;

for (player=1; player<=100; player++) {
    if (player % number3 === 0 && player % number5 === 0) {
        console.log("Fizz Buzz");
        continue;
    } else if (player % number3 === 0) {
        console.log("Fizz")
    } else if (player % number5 === 0) {
        console.log("Buzz")
    } else {
        console.log(player)
    }
}

