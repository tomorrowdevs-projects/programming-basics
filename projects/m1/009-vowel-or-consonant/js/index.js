const vowels = ["a", "e", "i", "o", "u"];
const randomNumber =  Math.round(Math.random());

let wordUser = prompt("Inserisci una lettera dell'alfabeto.");

while(wordUser.lenght > 1 || !isNaN(wordUser)){
  wordUser = prompt("Sono state inserire più lettere oppure è stato inserito un numero. E' possibile inserire solo una lettera. \nInserisci una lettera");
}

if(vowels.includes(wordUser) || wordUser == "y" && randomNumber == 0){
  alert("La lettera inserità è una vocale");
} else {
  alert("La lettera inserità è una consonante");
}