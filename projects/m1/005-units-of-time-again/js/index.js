let S = prompt("Quanti secondi ?")

Divisore = 86400 //calcolo giorni
let D = S / Divisore
D = Math.trunc(D)
console.log(`D: ${D}`)
if (D >= 1) {
  S = S % Divisore
}
Divisore = 3600 //calcolo ore
let HH = S / Divisore
HH = Math.trunc(HH)
console.log(`HH:${HH}`)
if (HH >= 1) {
  S = S % Divisore
}
Divisore = 60 //calcolo minuti
let MM = S / Divisore
MM = Math.trunc(MM)
console.log(`MM:${MM}`)
if (MM >= 1) {
  S = S % Divisore
}
Divisore = 1 //calcolo secondi
let SS = S / Divisore
SS = Math.trunc(SS)
console.log(`SS:${SS}`)
if (SS >= 1) {
  S = S % Divisore
}
/// Non sono riuscito a trovare un modo per allineare i numeri con javascript.