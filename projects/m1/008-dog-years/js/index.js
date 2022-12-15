//asking dog years

let dogYears = prompt("How old is your dog?");
let dogYearsEqual0 = "";
dogYears = parseInt(dogYears);

//conditions & calc

while(isNaN(dogYears) || dogYears < 0){
  if(isNaN(dogYears)){
    dogYears = prompt("Error: value not accepted. Insert a number.");
  } else{
    dogYears = prompt("Error, please enter a positive value");
  }
}

if(dogYears == 1){
  dogYears = 10.5;
  message(dogYears);
} else if(dogYears == 2){
  dogYears = 21;
  message(dogYears);
} else if(dogYears > 2){
  dogYears = 21 + ((dogYears - 2) * 7);
  message(dogYears);
} else {
  dogYears = 0;
  message(dogYears);
}

//alert

function message(year){
  if(year == 0){
    alert("Your dog hasn't been born yet");
  } else {
    alert("Your dog has " + year + " human's Years");
  }
}