let keys = {
    "1": [".",",","?","!",":"],
    "2": ["A","B","C"],
    "3": ["D","E","F"],
    "4": ["G","H","I"],
    "5": ["J","K","L"],
    "6": ["M","N","O"],
    "7": ["P","Q","R","S"],
    "8": ["T","U","V"],
    "9": ["W","X","Y","Z"],
    "0": [" "],
  }
  
  let keysPressed = "";
  let message = prompt("message?").toUpperCase();
  let messageLetters = message.split("");
  for (let letter of messageLetters) {
    for (let key in keys) {
      if (keys[key].includes(letter)) {
        for (let i = 0; i <= keys[key].indexOf(letter); i++) {
          keysPressed += key
        }
      }
    }
  }
  
  alert(keysPressed)