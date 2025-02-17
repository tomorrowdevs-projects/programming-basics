let bits = [];

let x = prompt("Inserisci un gruppo di 8 bit:");

while (!/^[01]{8}$/.test(x)) {
  x = prompt("Inserisci un gruppo di 8 bit valido:");
}

bits.push(x);

do {
  x = prompt("Inserisci un nuovo gruppo (lascia vuoto per uscire):");
  if (x !== '') {
    while (!/^[01]{8}$/.test(x)) {
      x = prompt("Inserisci un gruppo di 8 bit valido:");
    }
    bits.push(x);
  }
} while (x !== '');


for (let i = 0; i < bits.length; i++) {
  let verChar = bits[i][bits[i].length - 1]
  if (verChar === "0") {
    console.log("Il bit di parità deve essere 0");
  } else {
    console.log("Il bit di parità deve essere 1");
  }
}

