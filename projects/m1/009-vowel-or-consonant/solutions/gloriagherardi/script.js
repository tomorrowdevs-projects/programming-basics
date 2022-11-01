const vowelArr = ["A", "E", "I", "O", "U"];

const letterUser = prompt("Inserisci una lettera").toUpperCase();

if (vowelArr.includes(letterUser))
    alert("La lettera inserita è una vocale");
else if (letterUser == "Y")
    alert("La lettera Y può essere sia vocale che consonante");
else
    alert("La lettera inserita è una consonante");

    
