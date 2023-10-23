const readline = require('readline');
const { Bill, askQuestion, generateDraw, calculateWinnings } = require('./lottoLib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


async function main() {
  const schedine = [];
  let numeroSchedine;

  try {
    numeroSchedine = await askQuestion(rl, "Quante schedine vuoi generare? (min: 1, max: 5, 0: esci) ");
  } catch (err) {
    console.error("Errore durante l'acquisizione del numero di schedine:", err);
    rl.close();
    return;
  }

  if (parseInt(numeroSchedine) === 0) {
    rl.close();
    return;
  }

  for (let i = 0; i < parseInt(numeroSchedine); i++) {
    let tipo, quantita, citta, bet;
    
    try {
      tipo = await askQuestion(rl, "Inserisci il tipo di schedina (ambata, ambo, terno, quaterna, cinquina): ");
      quantita = await askQuestion(rl, "Inserisci la quantità di numeri da generare (max 10 per schedina): ");
      citta = await askQuestion(rl, "Inserisci la città (Bari, Cagliari, Firenze, Genova, Milano, Napoli, Palermo, Roma, Torino, Venezia, Nazionale): ");
      bet = await askQuestion(rl, "Quanto vuoi scommettere su questa combinazione? (es. 2.50) ");
    } catch (err) {
      console.error("Errore durante l'acquisizione dei dettagli della schedina:", err);
      rl.close();
      return;
    }

    const schedina = new Bill(tipo, parseInt(quantita), citta, parseFloat(bet));
    schedina.generateNumbers();
    schedine.push(schedina);
  }

  const draw = generateDraw();
  console.log("Estrazione:");
  for (const [city, numbers] of Object.entries(draw)) {
    console.log(`Città: ${city}, Numeri: ${numbers.join(', ')}`);
  }

  schedine.forEach(schedina => {
    schedina.printTicket(); // Questa riga stampa le schedine
    const drawnNumbers = draw[schedina.city];
    if (drawnNumbers) {
      const matchingNumbers = schedina.numbers.filter(num => drawnNumbers.includes(num));
      const winnings = calculateWinnings(schedina, matchingNumbers);
      if (winnings > 0) {
        console.log(`La schedina per la città ${schedina.city} ha vinto €${winnings.toFixed(2)} con i seguenti numeri: ${matchingNumbers.join(', ')}`);
      } else {
        console.log(`La schedina per la città ${schedina.city} non ha vinto.`);
      }
    }
  });

  rl.close();
}

main();
