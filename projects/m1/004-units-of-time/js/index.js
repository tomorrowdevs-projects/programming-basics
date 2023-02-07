let D = prompt("Quanti giorni ?")
let H = prompt("Quante ore ?")
let M = prompt("Quanti minuti ?")
let S = prompt("Quanti secondi ?")

D = D * 86400
H = H * 3600
M = M * 60
S = S * 1

let totsecondi = (D + H + M + S);

console.log("Tot secondi:", totsecondi)


