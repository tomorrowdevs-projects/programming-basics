let inputUser = prompt("Insert cell position");
inputUser = inputUser.toUpperCase();

const letterInput = inputUser.slice(0, 1);
const numberInput = inputUser.slice(1, 2);

if(letterInput == "A" || letterInput == "C" || letterInput == "E" || letterInput == "G"){
  if(numberInput % 2 == 0){
    alert("The cell is white");
  }else {
    alert("The cell is black");
  }
} else if (letterInput == "B" || letterInput == "D" || letterInput == "F" || letterInput == "H"){
  if(numberInput % 2 == 0){
    alert("The cell is black");
  }else {
    alert("The cell is white");
  }
} else {
  alert("The value is not valid");
}