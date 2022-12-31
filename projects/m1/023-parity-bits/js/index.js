let userInput = prompt("Plese type a group of 8 bits");
let userIpuntArray = userInput.split("");
let count = 0;

while(userInput != ""){

  if(userInput.length != 8){
    alert("Error!!! The group entered has more than 8 digits");
    break;
  }

  for(let i = 0; i < userIpuntArray.length; i++){
    if(userIpuntArray[i] == "1"){
      count++;
    }
  }

  if(count % 2 == 0){
    alert("The parity bit of the inserted group is 0");
  } else {
    alert("The parity bit of the inserted group is 1");
  }

  userInput = prompt("Plese type a group of 8 bits");
  userIpuntArray = userInput.split("");
  
}