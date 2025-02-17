function converter(quantity, unity) {
    let startingQuantity = quantity; 
    let string = []; 
  
    if (unity === 'teaspoon') {
        const cups = Math.floor(startingQuantity / 48);
        if (cups > 0) {
            string.push(cups + " cup" + (cups > 1 ? "s" : ""));
            startingQuantity -= cups * 48;
        }
        const tablespoons = Math.floor(startingQuantity / 3);
        if (tablespoons > 0) {
            string.push(tablespoons + " tablespoon" + (tablespoons > 1 ? "s" : ""));
            startingQuantity -= tablespoons * 3;
        }
        if (startingQuantity > 0) {
            string.push(startingQuantity + " teaspoon" + (startingQuantity > 1 ? "s" : ""));
        }
  
    } else if (unity === 'tablespoon') {
      const cups = Math.floor(startingQuantity / 16);
      if (cups > 0) {
          string.push(cups + " cup" + (cups > 1 ? "s" : ""));
          startingQuantity -= cups * 16;
      }
      if (startingQuantity > 0) {
          string.push(startingQuantity + " tablespoon" + (startingQuantity > 1 ? "s" : ""));
      }
    } 
    return string;
  }
  
  function program() {
    let quantity = parseInt(prompt("Enter the quantity to convert"));
    let unity = prompt("Enter whether tablespoon or teaspoon");
    const totalConverter = converter(quantity, unity);
    document.getElementById('output').innerText = `You used ${quantity} ${unity} which is equivalent to ${totalConverter.join(", ")}`;
  }
  