let lettera = prompt("Scegli una lettera")

 if (lettera == "y") {lettera = Math.round(Math.random())}
else if (lettera == "a") { lettera = 0 }
else if (lettera == "e") { lettera = 0 }
else if (lettera == "i") { lettera = 0 }
else if (lettera == "o") { lettera = 0 }
else if (lettera == "u") { lettera = 0 }
 else { lettera = 1 }

if (lettera == 0) {
  (console.log("é una vocale!"))
}
else if (lettera == 1) {
  (console.log("è una consonante!"))
}