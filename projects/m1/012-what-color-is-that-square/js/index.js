//asking user the cell position
let cellPos = prompt("Digit a cell position. Ex: A1.");

//divide letter and number. And convert letter in uppercase to exclude case sensitiveness errors.
const cellLetter = cellPos.slice(0, 1).toUpperCase();
const cellNumber = cellPos.slice(1, 2);

//defining messages for each case
alertWhite = "The cell's color is white";
alertBlack = "The cell's color is black";

//checking cell position and display the result for each case
if(isNaN(cellNumber)){
    alert("The value is not valid. Please reload page and digit a cell position. Ex: A1.");
}else if(cellLetter == "A" || cellLetter == "C" || cellLetter == "E" || cellLetter == "G"){
  if(cellNumber % 2 == 0){
    alert(alertWhite);
  }else {
    alert(alertBlack);
  }
}else if (cellLetter == "B" || cellLetter == "D" || cellLetter == "F" || cellLetter == "H"){
  if(cellNumber % 2 == 0){
    alert(alertBlack);
  }else {
    alert(alertWhite);
  }
}else {
  alert("Value isn't valid. Please reload page and digit a cell position. Ex: A1.");
}