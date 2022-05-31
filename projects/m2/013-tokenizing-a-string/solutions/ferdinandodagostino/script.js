const input = prompt('Inserisci un espressione matematica');

//regex per rimuovere i caratteri speciali, e li sostituisco con lo spazio
const str = input.replace(/[^a-z0-9]/g, ' ');
//splitto ciò che rimane usando lo spazio come delimitatore, avendo come risultato un array
const splitInput = str.split(' ');

console.log(splitInput);

//uso la funzione filter per rimuovere gli elelemnti che sono costituitit da solo spazio, e ritorno un nuovo array coi valori filtrati
const filtered = splitInput.filter(function (value, index, arr) {
  return value !== '';
});

console.log(filtered);
