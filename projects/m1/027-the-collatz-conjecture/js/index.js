let numberUser = parseInt(prompt("Enter a number"));

while(numberUser > 0){

  const arrayCollatzConjecture = [];
  arrayCollatzConjecture.push(numberUser);

  while(numberUser != 1){

    if(numberUser % 2 == 0){
      numberUser = numberUser / 2;
      arrayCollatzConjecture.push(numberUser);
    } else{
      numberUser = (numberUser * 3) + 1
      arrayCollatzConjecture.push(numberUser);
    }

  }

  alert(arrayCollatzConjecture);
  numberUser = parseInt(prompt("Enter a number.\n(If you want to terminate the program enter a minor number equal to 0.)"));

}