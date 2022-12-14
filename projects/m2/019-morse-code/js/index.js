/*Morse code is an encoding scheme that uses dashes and dots to represent digits and letters. In this exercise, you will write a program that uses a dictionary to store the mapping from these symbols to Morse code.
Use a period to represent a dot, and a hyphen to represent a dash. The mapping from characters to dashes and dots is shown in Table 6.1.
Your program should read a message from the user. Then it should translate all of the letters and digits in the message to Morse code, leaving a space between each sequence of dashes and dots. Your program should ignore any characters that are not listed in the previous table.
The Morse code for Hello, World! is shown below:

.... . .-.. .-.. --- .-- --- .-. .-.. -..*/

function getComeMorse(objects, text) {
  
    const arrayText = text.toUpperCase().split("");
    const arrayCodeMorse = [];
  
    arrayText.forEach((element) => {
      
      for (key in objects) {
        
        if (key === element) {
          arrayCodeMorse.push(objects[key]);
          arrayCodeMorse.push(" ");
        
        } 
      }
    })
  return arrayCodeMorse.join("");
  }
  // I preferred to make a single object in order not to do too many redundant if loops in the function
  const objCodeMorse = {
    A: "._",
    B: "_...",
    C: "_._.",
    D: "_..",
    E: ".",
    F: ".._.",
    G: "__.",
    H: "....",
    I: "..",
    J: ".___",
    K: "_._",
    L: "._..",
    M: "__",
    N: "_.",
    O: "___",
    P: ".__.",
    Q: "__._",
    R: "._.",
    S: "...",
    T: "_",
    U: ".._",
    V: "..._",
    W: ".__",
    X: "_.._",
    Y: "_.__",
    Z: "__..",
    1: "__..",
    2: "..___",
    3: "...__",
    4: "...._",
    5: ".....",
    6: "_....",
    7: "__...",
    8: "___..",
    9: "____.",
    0: "_____",
    Á: ".__._",
    Ä: "._._",
    É: ".._..",
    Ñ: "__.__",
    Ö: "___.",
    Ü: "..__"
  }
  
  const inputTextUser = prompt ("Write the message you want to translate into morse code: ")
  alert(`Your message translated into morse code is: 
   ${getComeMorse(objCodeMorse, inputTextUser)}`)