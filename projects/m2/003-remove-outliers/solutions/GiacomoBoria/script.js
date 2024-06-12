/*When analysing data collected as part of a science experiment it may be desirable to remove the most extreme values before performing other calculations. 
Write a function that takes a list of values and an non-negative integer, n, as its parameters. 
The function should create a new copy of the list with the n largest elements and the n smallest elements removed. 
Then it should return the new copy of the list as the function’s only result. 
The order of the elements in the returned list does not have to match the order of the elements in the original list. 
Write a main program that demonstrates your function. 
It should read a list of numbers from the user and remove the two largest and two smallest values from it by calling the function described previously. 
Display the list with the outliers removed, followed by the original list. 
Your program should generate an appropriate error message if the user enters less than 4 values.*/

// Min-max volumetric search
function getOutliers(array, n) {

    array.sort()
  
    const outliersMin = array.slice(0, n);
    const outliersMax = array.slice(-n);
    const outliers = outliersMin.concat(outliersMax);
    
    return outliers;
  }
  
  // Input utente in un array
  function getValuesInArray() {
    let userInput;
    const array = [];
  
  while (userInput != " ") {
    
    userInput = Number(prompt("Type in the value (Min 4) you want to enter.\nTo exit the program leave a blank space "));
  
    if (isNaN(userInput)) { 
      
      alert("This is not a number!")  
      
    } else {
      array.push(userInput)
    }
    
  } 
    
    array.pop(userInput); // Use the pop method to exclude "" which in this case returns as the value 0
  
    return array;
   
  }
  
  const arrayValues = getValuesInArray();
  
  // Check the length of an array
  if (arrayValues.length < 4) {
      alert("Please, enter more than 3 values!\n Try again.")
    
  } else {
    const numberOutliers = Number(prompt("Type the amount of outliers (min-max) you want to remove:"));
  
    alert(`All the values you entered are: ${arrayValues}`);
  
    alert(`The outliers (min-max) removed are: ${getOutliers(arrayValues, numberOutliers)}`);
  
  }