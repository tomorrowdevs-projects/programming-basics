let num = +prompt('Digit a four-digit number');
let d1;
let d2;
let d3;
let d4;
let sum;
let mod;

mod = num % 1000;
d1 = (num - mod) / 1000;

num = num - (d1 * 1000);
mod = num % 100;
d2 = (num - mod) / 100;

num = num - (d2 * 100);
mod = num % 10;
d3 = (num - mod) / 10;

d4 = num - (d3 * 10);

sum = d1 + d2 + d3 + d4;

console.log(`the sum of digits is ${sum}`);