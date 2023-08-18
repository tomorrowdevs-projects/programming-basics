class Bill {
  constructor(){
    this.bills = [];
    this.newBill()
  }
  
  //create bills
  newBill(numberOfBills = -1) {
    if (numberOfBills < 0) numberOfBills = +prompt("how many bills?");
    if (numberOfBills > 0) {
      const numbers = prompt("how many numbers compose the bill? (10 max)");  
      const typeOfPlay = prompt("what kind of play?");
      const ruota = prompt("which ruota do you want to play?");
      const amount = +prompt("how much money to play?");
      const extractedNumbers = this.extraction(numbers, 1)[0];
      const billName = `bill${numberOfBills}`;
      
      this[billName] = {
        numbers : extractedNumbers,
        typeOfPlay: typeOfPlay,
        ruota: ruota,
        amount: amount,
      }
      this.bills.push(this[billName]);
      this.newBill(numberOfBills - 1)
    } else return
  }

  printBill(bill) {    
    // create upper line
    const firstLine = "+-----------------------+------------------------+" ;  
    // create middle line
    const ruota = "| Ruota:" + " ".repeat(16 - bill.ruota.length - (8 - (Math.floor(bill.ruota.length/2)))) + bill.ruota + " ".repeat(16 - bill.ruota.length -  (8 - (Math.ceil(bill.ruota.length/2))));
    const giocata = "| Giocata:" + " ".repeat(14 - bill.typeOfPlay.length - (7 - (Math.floor(bill.typeOfPlay.length/2)))) + bill.typeOfPlay + " ".repeat(14 - bill.typeOfPlay.length - (7 - (Math.ceil(bill.typeOfPlay.length/2)))) + " |";
    let numeri = bill.numbers.reduce((a, number) => a + number + "  ", "")
    // create numbers line
    numeri = "| Numeri:" + " ".repeat( 20 - Math.floor(numeri.length / 2)) + numeri + " ".repeat( 20 - Math.ceil(numeri.length / 2)) + "|";
    const amount = `|               importo: ${bill.amount}.00 euro` + " ".repeat(16 - bill.amount.toString().length) + "|"
    return firstLine + `\n` + ruota + giocata + `\n` + firstLine + `\n` + numeri +`\n` + firstLine + `\n` + amount + `\n` + firstLine
   
    // add lines repeating upper line

    //   +-----------------------+------------------------+
    //   | ruota:   cagliari     | giocata:   cinquina    |  
    //   +-----------------------+------------------------+
    //   | numeri: 1   2   3   4   5   6   7   8   9   10 |
    //   +-----------------------+------------------------+
    //   |               importo: 1.00 euro               |
    //   +-----------------------+------------------------+
  }

  extraction(numbers, wheels) {
    let allWheels = []
    const extractedNumbers = []
    while (extractedNumbers.length < numbers) {  //generate numbers
      let num = Math.floor(Math.random() * 90 + 1 )
      if (!extractedNumbers.includes(num)) extractedNumbers.push(num)
    }
    allWheels.push(extractedNumbers);
    if (wheels > 1) allWheels = allWheels.concat(this.extraction(numbers, wheels - 1))
    return allWheels
  }

  isWinning(bills = this.bills) {
    const extractedNumbers = this.extraction(5,11);
    const typeOfPlay = {
      ambata: 1,
      ambo: 2,
      terno: 3,
      quaterna: 4,
      cinquina: 5
    }
    const ruote = {
      Bari: 0,
      Cagliari: 1,
      Firenze: 2,
      Genova: 3,
      Milano: 4,
      Napoli: 5,
      Palermo: 6,
      Roma: 7,
      Torino: 8,
      Venezia: 9,
      tutte: 10
    }

    function possibleCombinations(numbers, combinationLength, partialComb = []) {
      let combinations = [];
      if (combinationLength === 1) {
        const arr = numbers.map(x => [x])
        return arr
      }
      else if (partialComb.length === 0) {
        for (let i = 0; i < numbers.length; i++) {
          combinations = combinations.concat(possibleCombinations(numbers, combinationLength, partialComb.concat([numbers[i]])))
        }
      } else if (partialComb.length < combinationLength-1) {
        for (let i = numbers.indexOf(partialComb[partialComb.length - 1 ]) + 1; i < numbers.length; i++) {
          combinations = combinations.concat(possibleCombinations(numbers, combinationLength, partialComb.concat([numbers[i]])))
        }
      } else {
        const remainingNumbers = numbers.slice(numbers.indexOf(partialComb[partialComb.length - 1 ]) + 1);
        remainingNumbers.forEach(number => {
        combinations.push(partialComb.concat([number]));
        })
      }
      return combinations
    }

    bills.forEach(bill => {
      bill.winningCombinations = 0;
      bill.combinations = possibleCombinations(bill.numbers, typeOfPlay[bill.typeOfPlay]);
      if(bill.ruota === "tutte") bill.extractedNumbers = extractedNumbers
      else bill.extractedNumbers = [extractedNumbers[ruote[bill.ruota]]]
      bill.extractedNumbers.forEach(ruota => {
        bill.combinations.forEach(combination => {
          if (combination.every(element => {return ruota.includes(element)})) {
            bill.winningCombinations++
          }
        })
      })
    });
  }

  calculatePrizes(bills = this.bills) {
    const standardPrizes = {
      ambata: 11.23,
      ambo: 250,
      terno: 4500,
      quaterna: 120000,
      cinquina: 6000000
    }
    bills.forEach( bill => {
      bill.prize = bill.amount * standardPrizes[bill.typeOfPlay] / bill.combinations.length * bill.winningCombinations / bill.extractedNumbers.length
    })
  }
}
