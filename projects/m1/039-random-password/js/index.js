function program() {
    document.getElementById('output').innerText = randomPass();
  }

  function randomPass() { 
    let min = 7;
    let max = 10;
    let random = Math.random() * (max - min + 1) + min;   
  
    let newPass = Math.floor(random);
    let myPass = "";   
  
   
    for (let i=0; i <newPass; i++) {
      let min = 33;
      let max = 126;
      let randomCharCode = Math.floor(Math.random() * (max - min + 1)) + min;  
      let randomChar = String.fromCharCode(randomCharCode); 
      myPass = randomChar + myPass; 
    } 
    
    return myPass; 
  }