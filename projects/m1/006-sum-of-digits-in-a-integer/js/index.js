let numero = prompt("Scegli un numero di 4 cifre")

let migliaia = (Math.trunc(numero / 1000))
numero = numero % 1000
let centinaia = (Math.trunc(numero / 100))
numero = numero % 100
let decina = (Math.trunc(numero / 10))
numero = numero % 10
let totale = (migliaia + centinaia + decina + numero)

console.log(`${migliaia} + ${centinaia} + ${decina} + ${numero} = ${totale}`)