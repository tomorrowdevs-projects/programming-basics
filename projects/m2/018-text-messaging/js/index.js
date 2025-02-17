/*Write a program that displays the key presses needed for a message entered by the user. 
Construct a dictionary that maps from each letter or symbol to the key presses needed to generate it. 
Then use the dictionary to create and display the presses needed for the user’s message. 
For example, if the user enters Hello, World! then your program should output 4433555555666110966677755531111. 
Ensure that your program handles both uppercase and lowercase letters. 
Ignore any characters that aren’t listed in the table above such as semicolons and parentheses.*/

function getNumKeyPadText(object, text) {
    const arrayText = text.toUpperCase().split("")
    const numKeypadMex = [];
    
    arrayText.forEach((element) => {
  
      for (let key in object) {
        // For Each value of key i create a array
        const tmpArrayKey = object[key].split("");
        // If tmp include element i use index array for push number of times key
        if(tmpArrayKey.includes(element)) {
          for (let i = 0; i <= tmpArrayKey.indexOf(element); i++) {
            numKeypadMex.push(key);
           
          }
        } 
      } 
    }) 
  return numKeypadMex.join("")
  }
  
  const objMessageSymbol = {
    0: " 0",
    1: ".,?!:1",
    2: "ABC2",
    3: "DEF3",
    4: "GHI4",
    5: "JKL5",
    6: "MNO6",
    7: "PQRS7",
    8: "TUV8",
    9: "WXYZ9",
  }
  
  const userMessage = prompt("Enter your message and I will tell you how many times and which keys to type on your keyboard")
  
  alert(`If we were still in the 1990s to write your message you would have had to push all these buttons: ${getNumKeyPadText(objMessageSymbol, userMessage)}`)