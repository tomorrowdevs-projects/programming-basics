/*In this exercise you will simulate 1,000 rolls of two dice. 
Begin by writing a function that simulates rolling a pair of six-sided dice. 
Your function will not take any parameters. 
It will return the total that was rolled on two dice as its only result. 
Write a main program that uses your function to simulate rolling two six-sided dice 1,000 times. 
As your program runs, it should count the number of times that each total occurs. 
Then it should display a table that summarizes this data. Express the frequency for each total as a percentage of the number of rolls performed. 
Your program should also display the percentage expected by probability theory for each total.*/
// lancio dadi

function getThrowingDice() {
    const minValueDice = 1;
    const maxValueDice = 6;
  
    const diceA = Math.round((Math.random()*(maxValueDice -minValueDice + 1)+ minValueDice));
    const diceB = Math.round((Math.random()*(maxValueDice -minValueDice + 1)+ minValueDice));
  
    return diceA + diceB;
  
  } 
  
  // Create an array with the number of launches (userInput) 
  function getValueSPins(num) {
    
    const valueSpins = [];
    for (i = 0; i < num; i++) {
      let tmp = getThrowingDice();
      valueSpins.push(tmp);
    }
    
    return valueSpins;
  }
  // Check and sum repeat results dice roll (f getValueSPins)
  // push tmp.length because of single array dice roll
  function getTotalSpins(array) {
    
    const result = [];
    for (i = 2; i < 13; i++) {
      
      let tmpResult = array.filter(x => x === i)
      result.push(tmpResult.length);
    }
  
    return result // reference [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
  }
  
  function getFrequencyValue(arrayValue, totSpins) {
    const frequency = arrayValue.map(element => (element / totSpins * 100).toFixed(2) + "%")
  
    return frequency;
  }
  
  // reference for probability calculation: https://www.valcon.it/math/dadi-2/
  function getProbability(possibilities) {
      const probability = [];
  
      for (i = 1; i < 12; i++ ) {
          if (i < 7){ 
          probability.push(((i / possibilities) * 100).toFixed(2) + "%");
          } else {
              probability.push((((12 - i) / possibilities) * 100).toFixed(2) + "%")
          }
      }
  
      return probability;
  }
  
  // Main program
  
  const totSpinsUser = prompt("Enter how many throws you have made: ");
  const totalValueSpins = getValueSPins(totSpinsUser);
  const totalSpins = getTotalSpins(totalValueSpins);
  const frequency = getFrequencyValue(totalSpins, totSpinsUser);
  const probability = getProbability(36);
  
  let index = 0;
  for (i = 2; i <= 12; i++) {
    
    alert(`\nThe number of times the number came out ${i} is: ${totalSpins[index]}.\nThe frequency with which it came out is ${frequency[index]}.\nThe probility of the number ${i} coming out in the roll of two dice is ${probability[index]}`);
  
    index++;
  } 