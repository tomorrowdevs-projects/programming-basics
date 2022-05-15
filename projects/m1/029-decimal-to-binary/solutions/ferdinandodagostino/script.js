// Write a program that converts a decimal (base 10) number to binary (base 2). Read the decimal number from the user as an integer and then use the division algorithm shown below to perform the conversion. When the algorithm completes, result contains the binary representation of the number. Display the result, along with an appropriate message.

// Let result be an empty string Let q represent the number to convert repeat Set r equal to the remainder when q is divided by 2 Convert r to a string and add it to the beginning of result Divide q by 2, discarding any remainder, and store the result back into q until q is 0

let result = '';
let q = prompt('Inserisci numero');

while (q > 0) {
  r = q % 2;
  result += r;
  q = q / 2;
  console.log(q);
}

console.log(q, result);
