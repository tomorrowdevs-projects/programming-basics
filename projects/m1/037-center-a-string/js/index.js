function calculateString(s,w) {
    let distance = s.length;
    if (distance >= w) {
      return s;
    } else {
      let space = Math.floor((w - s.length) / 2);
      let newS = " ".repeat(space) + s + " ".repeat(space + ((w - s.length) % 2));
      return newS;
    }
  }
  
  function program() {
    let s = prompt("Inserisci una stringa di caratteri");
    let w = parseInt(prompt("Inserisci la larghezza della finestra"));
    document.getElementById('output').innerText = calculateString(s, w);
  }