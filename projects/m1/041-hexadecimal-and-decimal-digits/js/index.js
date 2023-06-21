function convertHex() {
    const hexInt = prompt("Inserisci un numero esadecimale");
  
    if (/^[0-9A-Fa-f]+$/.test(hexInt)) {
      const numberInt = hex2int(hexInt);
      document.getElementById('output').innerText = `${numberInt}`;
    } else {
      document.getElementById('output').innerText = `Hai inserito un valore non valido per il numero esadecimale.`;
    }
  }
  
  function convertInt() {
    const intHex = prompt("Inserisci un numero da 1 a 15");
    if (/^(1[0-5]|[1-9])$/.test(intHex)) {
      const numberHex = int2hex(intHex);
      document.getElementById('output').innerText = `${numberHex}`;
    } else {
      document.getElementById('output').innerText = `Hai inserito un valore non valido per il numero da 1 a 15.`;
    }
  }
  
  function hex2int(hexInt) {
    const numberInt = parseInt(hexInt, 16);
    return numberInt;
  }
  
  function int2hex(intHex) {
    const hexLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  

    if (intHex > 9) {
      const numberHex = hexLetters[intHex - 10];
      return numberHex;
    } else {
      const numberHex = intHex.toString();
      return numberHex;
    }
  }
  
  