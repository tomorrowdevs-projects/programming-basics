let panecliente = prompt("Quanti panini vecchi vuoi acquistare ?")

let costopane = 3.49
let totpanefresco = ((panecliente * costopane).toFixed(2))
let sconto = (((panecliente * 60) / 100).toFixed(2))
let totpanevecchio = ((totpanefresco - sconto).toFixed(2))


console.log(`Prezzo del pane:   ${totpanefresco}€`)
console.log(`Sconto applicato:   ${sconto}€`)
console.log(`Totale:            ${totpanevecchio}€`)