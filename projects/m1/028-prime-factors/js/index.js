
let factor = 2;
let n = prompt('enter a number');
  while (factor <= n) {
    if (n % factor === 0) {
      console.log(factor);
      n = n / factor;
    } else {
      factor++;
    }
  }
