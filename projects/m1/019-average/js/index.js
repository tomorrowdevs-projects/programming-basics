const listNumberUser = [];
let numberUser; 
let i = 0;
let total = 0;

do{
  
  numberUser = parseInt(prompt("Enter a number"));
  
  if (numberUser == 0 && i == 0){
    console.log("Invalid number");
  } else {
    listNumberUser.push(numberUser);
    i++;
  }
  
}while(!listNumberUser.includes(0))

let singleNumber = 0;

for(i = 0; i < listNumberUser.length - 1; i++){
    singleNumber += listNumberUser[i];
}

total = singleNumber / (listNumberUser.length - 1);

console.log("The total average is" + total);