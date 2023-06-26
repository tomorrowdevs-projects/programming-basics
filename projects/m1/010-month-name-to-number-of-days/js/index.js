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
  let days = 0;
  switch (month) {
    case "gennaio": days = 31;
      break;
    case "marzo": days = 31;
      break;
    case "aprile": days = 30;
      break;
    case "maggio": days = 31;
      break;
    case "giugno": days = 30;
      break;
    case "luglio": days = 31;
      break;
    case "agosto": days = 31;
      break;
    case "settembre": days = 30;
      break;
    case "ottobre": days = 31;
      break;
    case "novembre": days = 30;
      break;
    case "dicembre": days = 31;
      break;
  }
}
if (month !== "febbraio") {
console.log("Il tuo mese ha ${days} giorni");
} else {
  console.log("Il tuo mese ha 29 giorni o 28 giorni nel caso si tratti di un anno bisestile");
}