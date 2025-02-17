class Bill {
  constructor(type, amount, city, bet) {
    this.type = type;
    this.amount = amount;
    this.city = city;
    this.bet = bet; 
    this.numbers = [];
  }

  generateNumbers() {
    for (let i = 0; i < this.amount; i++) {
      let number = Math.floor(Math.random() * 90) + 1;
      while (this.numbers.includes(number)) {
        number = Math.floor(Math.random() * 90) + 1;
      }
      this.numbers.push(number);
    }
  }

  printTicket() {
    console.log(`|----------- ${this.city} ------------|`);
    console.log(`| Tipo: ${this.type}  Quantità: ${this.amount} |`);
    console.log(`| Puntata: €${this.bet.toFixed(2)} |`); 
    console.log(`| Numeri: ${this.numbers.join(', ')}  |`);
    console.log(`|--------------------------------|`);
  }  
}

function askQuestion(rl, query) {
  return new Promise((resolve, reject) => {
    try {
      rl.question(query, answer => {
        resolve(answer);
      });
    } catch (err) {
      reject(err);
    }
  });
}

const WIN_PRIZES = {
  ambata: [10.33, 5.16, 3.44, 2.57, 2.06, 1.72, 1.47, 1.28, 1.14, 1.03],
  "estr. det.": [50.60, 25.30, 16.86, 12.65, 10.12, 8.42, 7.22, 6.32, 5.62, 5.06],
  ambo: [null, 230, 76.66, 38.32, 23, 15.32, 10.94, 8.20, 6.38, 5.10],
  terno: [null, null, 4140, 1035, 414, 207, 118.28, 73.92, 49.28, 34.50],
  quaterna: [null, null, null, 110400, 22080, 7360, 3154.28, 1577.13, 876.18, 525.70],
  cinquina: [null, null, null, null, 5520000, 920000, 262857.13, 98771.42, 43809.51, 21904.75]
};

function calculateWinnings(schedina, matchingNumbers) {
  const type = schedina.type;
  const count = matchingNumbers.length;

  if (count < 2 || !WIN_PRIZES[type]) {
    return 0;  
  }

  const combinations = (n, r) => {
    let num = 1;
    for (let i = r + 1; i <= n; i++) {
      num *= i;
    }
    let den = 1;
    for (let i = 1; i <= n - r; i++) {
      den *= i;
    }
    return num / den;
  };

  const winningCombos = combinations(count, type === 'ambata' ? 1 : (type === 'ambo' ? 2 : (type === 'terno' ? 3 : (type === 'quaterna' ? 4 : 5))));

  const baseWinning = WIN_PRIZES[type][schedina.amount - 1] || 0;

  let totalWinning = baseWinning * winningCombos * schedina.bet;

  if (totalWinning > 500) {
    totalWinning -= 0.08 * totalWinning;  
  }

  return totalWinning;
}

function generateDraw() {
  const cities = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale'];
  const draw = {};

  cities.forEach(city => {
    draw[city] = [];
    for (let i = 0; i < 5; i++) {
      let number = Math.floor(Math.random() * 90) + 1;
      while (draw[city].includes(number)) {
        number = Math.floor(Math.random() * 90) + 1;
      }
      draw[city].push(number);
    }
  });

  return draw;
}

module.exports = {
  Bill,
  askQuestion,
  generateDraw,
  calculateWinnings  
};
