let ageUser = parseInt(prompt("Enter the age of the visitor (leave blank if there are no other visitors): "));
let price = 0;

while(!isNaN(ageUser)){

  if(ageUser >= 3 && ageUser <= 12){
    price += 14;
  }else if(ageUser > 12 && ageUser < 65){
    price += 23;
  }else if(ageUser >= 65){
    price += 18;
  }

  ageUser = parseInt(prompt("Enter the age of the visitor (leave blank if there are no other visitors): "));

}

alert("The entrance fee is equal to: $" + price.toFixed(2));