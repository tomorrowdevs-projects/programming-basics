class Bill {
    constructor(){
      this.pool = [];
      this.bills = [];
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
        const extractedNumbers = this.extraction(numbers);
        const billName = `bill${numberOfBills}`
        this[billName] = {
          numbers : extractedNumbers,
          typeOfPlay: typeOfPlay,
          ruota: ruota
        }
        this.bills.push(this[billName])
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
      return firstLine + `\n` + ruota + giocata + `\n` + firstLine + `\n` + numeri +`\n` + firstLine
     
      // add lines repeating upper line
  
      //   +-----------------------+------------------------+
      //   | ruota:   cagliari     | giocata:   cinquina    |  
      //   +-----------------------+------------------------+
      //   | numeri: 1   2   3   4   5   6   7   8   9   10 |
      //   +-----------------------+------------------------+
    }
  
    extraction(numbers) {
      const extractedNumbers = []
      while (extractedNumbers.length < numbers) {  //generate numbers
        let num = Math.floor(Math.random() * 90 + 1 )
        if (!extractedNumbers.includes(num)) extractedNumbers.push(num)
      }
      return extractedNumbers
    }
  
    isWinning(bills = this.bills) {
      const extractedNumbers = this.extraction(5);
      const typeOfPlay = {
        ambata: 1,
        ambo: 2,
        terno: 3,
        quaterna: 4,
        cinquina: 5
      }

      //create combinations for numbers in bills based on type of play
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
      
      //check if excracted numbers include combination
      bills.forEach(bill => {
        bill.isWinning = false;
        bill.combinations = possibleCombinations(bill.numbers, typeOfPlay[bill.typeOfPlay]);
        bill.combinations.forEach(combination => {
          if (bill.isWinning === false) {
            bill.isWinning = combination.every(element => {
              return extractedNumbers.includes(element);
            });
          }
        });
        bill.extractedNumbers = extractedNumbers
      });
    }
  }