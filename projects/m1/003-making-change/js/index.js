///INSERIMENTO DENARO NELLA MACCHINETTA
let A = prompt("Quanti $ costa il prodotto che vuoi comprare ?")
let B = prompt("Quanti $ hai inserito ?")
let ric = (B - A) * 100
if (A > B) {
  alert("I soldi inseriti non sono sufficienti!", ric = 0);
}
///CALCOLO RESTO
monetacorrente = 200 //Moneta da 2$
let Toonies = ric / monetacorrente
Toonies = Math.trunc(Toonies)
console.log("Toonies", Toonies)
if (Toonies >= 1) {
  ric = ric % monetacorrente
}
monetacorrente = 100 //Moneta da 1$
let Loonies = ric / monetacorrente
Loonies = Math.trunc(Loonies)
console.log("Loonies", Loonies)
if (Loonies >= 1) {
  ric = ric % monetacorrente
}
monetacorrente = 25 //Moneta da 0.25$
let Quarter = ric / monetacorrente
Quarter = Math.trunc(Quarter)
console.log("Quarter", Quarter)
if (Quarter >= 1) {
  ric = ric % monetacorrente
}
monetacorrente = 10 //Moneta da 0.10$
let Dime = ric / monetacorrente
Dime = Math.trunc(Dime)
console.log("Dime", Dime)
if (Dime >= 1) {
  ric = ric % monetacorrente
}
monetacorrente = 5 //Moneta da 0.05$
let Nickel = ric / monetacorrente
Nickel = Math.trunc(Nickel)
console.log("Nickel", Nickel)
if (Nickel >= 1) {
  ric = ric % monetacorrente
}
monetacorrente = 1 //Moneta da 0.01$
let Penny = ric / monetacorrente
Penny = Math.round(Penny)
console.log("Penny", Penny)
