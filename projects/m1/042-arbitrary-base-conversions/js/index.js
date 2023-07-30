function convertBase(number, sourceBase, targetBase) {
    if (sourceBase < 2 || sourceBase > 16) {
        throw new RangeError('La base del numero di origine deve essere un numero tra 2 e 16.');
    }
    if (targetBase < 2 || targetBase > 16) {
        throw new RangeError('La base del numero di destinazione deve essere un numero tra 2 e 16.');
    }
    var numberInBase10 = parseInt(number, sourceBase);
    if (isNaN(numberInBase10)) {
        throw new TypeError('Il numero da convertire deve essere un numero valido nella base di origine.');
    }
    return numberInBase10.toString(targetBase);
  }
  
  function convertFromArbitraryBaseToBase10(str, base) {
    if (base < 2 || base > 16) {
        throw new RangeError('La base del numero da convertire deve essere un numero tra 2 e 16.');
    }
    return parseInt(str, base);
  }
  
  function convertFromBase10ToArbitraryBase(num, base) {
    if (base < 2 || base > 16) {
        throw new RangeError('La base di conversione deve essere un numero tra 2 e 16.');
    }
    if (isNaN(num)) {
        throw new TypeError('Il numero da convertire deve essere un numero valido.');
    }
    return num.toString(base);
  }
  
  function convertTotal() {
    try {
      let sourceBase = parseInt(prompt("Inserisci la base del tuo numero tra 2 a 16"));
      let targetBase = parseInt(prompt("Inserisci la base in cui vuoi convertire il tuo numero tra 2 a 16"));
      let number = prompt("Inserisci il numero da convertire");
      const convNumber = convertBase(number, sourceBase, targetBase);
      document.getElementById('output').innerText = `${convNumber}`;
    } catch (e) {
      document.getElementById('output').innerText = `Errore: ${e.message}`;
    }
  }
  
  function convertToBase10() {
    try {
      let base = parseInt(prompt("Inserisci la base del numero da convertire"));
      let str = prompt("Inserisci il numero da convertire");
      const convNumber = convertFromArbitraryBaseToBase10(str, base);
      document.getElementById('output').innerText = `${convNumber}`;
    } catch (e) {
      document.getElementById('output').innerText = `Errore: ${e.message}`;
    }
  }
  
  function convertToArbitraryBase() {
    try {
      let base = parseInt(prompt("Inserisci la base di conversione tra 2 a 16"));
      let num = parseInt(prompt("Inserisci il numero da convertire"));
      const convNumber = convertFromBase10ToArbitraryBase(num, base);
      document.getElementById('output').innerText = `${convNumber}`;
    } catch (e) {
      document.getElementById('output').innerText = `Errore: ${e.message}`;
    }
  }
  