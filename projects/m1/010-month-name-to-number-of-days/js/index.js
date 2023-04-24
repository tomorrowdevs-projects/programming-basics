const prompt = require('prompt-sync')();
const month = prompt('Inserisci il nome di un mese: ').toLowerCase();
const monthChoice = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
let found = false;

for (let i = 0; i < monthChoice.length; i++) {
  if (month === monthChoice[i]) {
    found = true;
    break;
  }
}

if (!found) {
  console.log("Non hai inserito il nome corretto del mese!");
} else {
  switch (month) {
    case "gennaio":
      console.log("il tuo mese ha 31 giorni");
      break;
    case "febbraio":
      console.log("il tuo mese ha 29 giorni o 28 giorni nel caso si tratti di un anno bisestile");
      break;
    case "marzo":
      console.log("il tuo mese ha 31 giorni");
      break;
    case "aprile":
      console.log("il tuo mese ha 30 giorni");
      break;
    case "maggio":
      console.log("il tuo mese ha 31 giorni");
      break;
    case "giugno":
      console.log("il tuo mese ha 30 giorni");
      break;
    case "luglio":
      console.log("il tuo mese ha 31 giorni");
      break;
    case "agosto":
      console.log("il tuo mese ha 31 giorni");
      break;
    case "settembre":
      console.log("il tuo mese ha 30 giorni");
      break;
    case "ottobre":
      console.log("il tuo mese ha 31 giorni");
      break;
    case "novembre":
      console.log("il tuo mese ha 30 giorni");
      break;
    case "dicembre":
      console.log("il tuo mese ha 31 giorni");
      break;
  }
}
