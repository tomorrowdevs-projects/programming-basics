let a = prompt("Quanti contenitori da 1litro o meno hai ?")
let b = prompt("Quanti contenitori da  più di 1litro hai ?")

let menolitro = (a * 0.10)
let piulitro = (b * 0.25)

let rimborso = (menolitro + piulitro)

alert(`il tuo rimborso è di ${rimborso.toFixed(2)} $`)