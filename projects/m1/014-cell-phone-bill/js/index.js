let minute = prompt("How many minutes of call did you use? ")
let message = prompt("How many messages did you use?")
let callcentertax= 0.44
let phoneplan = 15.00   
let salestax;
let tot;
let extraminute;
let extramessage;

minute = minute * 60

if (minute > 3000) {extraminute = ((minute - 3000) / 60) * 0.25}
else {extraminute = 0}
if (message > 50) {extramessage = (message - 50) * 0.15}
else {extramessage = 0}

tot = phoneplan + extraminute + extramessage + callcentertax
salestax = (tot * 5) / 100
tot = tot + salestax

console.log(`Phone plan: ${phoneplan.toFixed(2)}€`)
if (extraminute > 0){ console.log(`Extra minutes: ${extraminute.toFixed(2)}€`)}
if (extramessage > 0){ console.log(`Extra messages: ${extramessage.toFixed(2)}€`)}
console.log(`911 tax: ${callcentertax.toFixed(2)}€`)
console.log(`Sales tax(5%): ${salestax.toFixed(2)}€`)
console.log(`Total: ${tot.toFixed(2)}€`)







