let randomNumber;
let listRandomNumber = [];
let maximumNumber = 0;
let count = 0;

while(listRandomNumber.length < 100){

  // As long as the length of the array is less than 100, it generates a random number that is pushed into the array.
  randomNumber = Math.round(Math.random() * 100);
  listRandomNumber.push(randomNumber);

  // If the length of the array is not 100 do not execute the condition
  if(listRandomNumber.length == 100){

    for(let i = 0; i < listRandomNumber.length; i++){
      /* 
        Compares the value of the variable maximumNumber (initialized to 0) with the value of the array at index i.
        If the value of maximumNumber is less then save the value of the array at index i in the variable maximumNumber and increment the variable count.
      */
      if(maximumNumber < listRandomNumber[i]){
        maximumNumber = listRandomNumber[i];
        count++;
      }
    }
    
  }

}

alert("The maximum value found was " + maximumNumber + "\nThe maximum value was updated " + count + " times");