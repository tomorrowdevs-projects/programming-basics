let letter = prompt("Choose a square")
let number = (letter.slice(1))
letter = (letter.slice(0, 1))

 
if (letter === "B" || letter === "D" || letter === "F" || letter === "H") { number = number - 1 }
else if (letter === "A" || letter === "C" || letter === "E" || letter === "G") 
{ number = number - 0 }

if (number === 0 || number === 2 || number === 4 || number === 6 || number === 8)
 { console.log("white") }
else { console.log("black") }
