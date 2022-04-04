function NewBingoCard() {
    function randomNumbers(arr,min,max) {
      let n = Math.floor(Math.random() * (max - min + 1) + min);
      while (arr.length < 5) {
        if (!arr.includes(n)) {
        arr.push(n);
        }
        n = Math.floor(Math.random() * (max - min + 1) + min)
      }
      return arr
    }
    let 
      b = [],
      i = [],
      n = [],
      g = [],
      o = [];
    this.b = randomNumbers(b,1,15);
    this.i = randomNumbers(i,16,30); 
    this.n = randomNumbers(n,31,45);
    this.g = randomNumbers(g,46,60);
    this.o = randomNumbers(o,61,75);
  }
  
  let card = new NewBingoCard();
  alert(`B: ${card.b}, I: ${card.i}, N: ${card.n}, G: ${card.g}, O: ${card.o}`)
  