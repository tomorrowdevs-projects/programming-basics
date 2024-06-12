let number ;

for (let i = 1; i <= 100; i++) {
number = +prompt('what number do you say?');
  
  if (number % 3 === 0 && number % 5 === 0) {
    alert('Fizz Buzz!');
  } else if (number % 3 === 0) {
    alert('Fizz!');
  } else if (number % 5 === 0) {
    alert('Buzz!');
  } else {
    alert(number);
  }
}