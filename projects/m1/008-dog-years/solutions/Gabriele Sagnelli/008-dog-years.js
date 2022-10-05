//dog years-m1-008


let dog_Adult_Age=21;
let yourDigit;
let conversion;

yourDigit=+prompt('digit the years who must be converted') , '';

conversion=((yourDigit - 2) * 4 + dog_Adult_Age);


if (yourDigit==1) {
  alert('the dog age is 10.5 years old');
} else if (yourDigit>2) {
  alert(`the dog is ${conversion} years old`);
} else if (yourDigit==2)  {
   alert('the dog is 21 years old');
} else {
   alert('it does not exist yet');
}

