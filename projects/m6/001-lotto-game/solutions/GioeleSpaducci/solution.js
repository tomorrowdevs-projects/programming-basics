class Bill {
  constructor(){
    this.pool = [];
    for (let i = 1; i <= 90; i++) {  //create pool of numbers
      this.pool.push(i)
    }
    this.newBill()
  }
  newBill(numberOfBills = -1) {
    const localPool = this.pool;
    if (numberOfBills < 0) numberOfBills = +prompt("how many bills?");
    if (numberOfBills > 0) {
      const numbers = prompt("how many numbers compose the bill? (10 max)");  //numbers to generate, max 10
      const typeOfPlay = prompt("what kind of play?");
      const ruota = prompt("which ruota do you want to play?");
      const extractedNumbers = [];
      const billName = `bill${numberOfBills}`
      for (let i = 0; i< numbers; i++) {  //generate numbers
        extractedNumbers.push(this.pool.splice(Math.floor(Math.random() * this.pool.length), 1)[0])
      } 
      this[billName] = {
        numbers : extractedNumbers,
        typeOfPlay: typeOfPlay,
        ruota: ruota
      }
      this.newBill(numberOfBills - 1)
    } else return
  }
  printBill(bill) {    
    // create upper line
    const firstLine = "+-----------------------+------------------------+" ;  

    // create middle line
    const ruota = "| Ruota:" + " ".repeat(16 - bill.ruota.length - (8 - (Math.floor(bill.ruota.length/2)))) + bill.ruota + " ".repeat(16 - bill.ruota.length -  (8 - (Math.ceil(bill.ruota.length/2))));
    const giocata = "| Giocata:" + " ".repeat(14 - bill.typeOfPlay.length - (7 - (Math.floor(bill.typeOfPlay.length/2)))) + bill.typeOfPlay + " ".repeat(14 - bill.typeOfPlay.length - (7 - (Math.ceil(bill.typeOfPlay.length/2)))) + " |";

    // create numbers line
    let numeri = bill.numbers.reduce((a, number) => a + number + "  ", "")
    numeri = "| Numeri:" + " ".repeat( 20 - Math.floor(numeri.length / 2)) + numeri + " ".repeat( 20 - Math.ceil(numeri.length / 2)) + "|";

    // add lines repeating upper line
    return firstLine + `\n` + ruota + giocata + `\n` + firstLine + `\n` + numeri +`\n` + firstLine
    
    //   +-----------------------+------------------------+
    //   | ruota:   cagliari     | giocata:   cinquina    |  
    //   +-----------------------+------------------------+
    //   | numeri: 1   2   3   4   5   6   7   8   9   10 |
    //   +-----------------------+------------------------+
  }
}