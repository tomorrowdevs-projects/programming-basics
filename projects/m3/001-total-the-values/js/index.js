

function totalTheValues() {
    const userInput = prompt("Enter the number");
    let regExp =/[a-z]/gi
  
    if (userInput === "") {
      return 0.0;
    }
  
    const inputValue = parseFloat(userInput);
  
    if (regExp.test(inputValue) == true) {
      alert("The value is not valid repeat.");
      return totalTheValues();
    }
  
    const sumRemainderValue = totalTheValues();
  
    return inputValue + sumRemainderValue;
  }
  
  
  console.log(`The total sum is: ${totalTheValues()}`);