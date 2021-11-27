let price = 4.95;
    
while (price >= 4.95 && price <= 24.95) {
let discount = ((price * 60) / 100).toFixed(2);
let newPrice = (price - discount).toFixed(2);
alert("Original Price: $ " + price + "\nDiscount: $ " + discount + "\nNew price: $ " + newPrice)
price += 5;
}

/* 
Conoscendo i prezzi di partenza che vanno da $ 4.95 a $ 24.95 con un incremento di $ 5
posso calcolare l'importo dello sconto e il prezzo scontato di ognuno attraverso un CICLO WHILE:
- Dichiaro il prezzo di partenza = al prezzo più basso.
- Pongo la condizione del ciclo While in modo tale che il prezzo di partenza rimanga nel range stabilito.
- All'interno del ciclo calcolo le 2 variabili "discount" e newPrice arrotondando il risultato a 2 cifre decimali.
- Stampo a video la tabella con i tre importi ottenuti.
- A fine ciclo incremento il prezzo di partenza di 5 in modo che ripeta il calcolo con il prezzo successivo.
- Il ciclo si ferma quando il prezzo di partenza diventa = $ 24.95.
*/