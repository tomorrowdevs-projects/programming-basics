function createDeck() {
    const semi = ["s", "h", "d", "c"];
    const valori = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    
    let fullDeck = [];
    
    for (let seme of semi) {
        for (let valore of valori) {
            fullDeck.push(valore + seme);
        }
    }
    
    return fullDeck;
  }
  
  function shuffleArray(myDeck) {
    let indice = myDeck.length, valoreTemporaneo, indiceRandom;
  
 
    while (0 !== indice) {
  
       
        indiceRandom = Math.floor(Math.random() * indice);
        indice -= 1;
  
        
        valoreTemporaneo = myDeck[indice];
        myDeck[indice] = myDeck[indiceRandom];
        myDeck[indiceRandom] = valoreTemporaneo;
    }
  
    return myDeck;
  }
  
  const fullDeck = createDeck();
  const myDeck = fullDeck.slice();  
  const myShuffle = shuffleArray(myDeck);
  
  console.log("Il mazzo non mescolato");
  for (let i = 0; i < fullDeck.length; i++) {
    let card = fullDeck[i];
    console.log(card);
  }
  console.log("Il mazzo mescolato");
  for (let i = 0; i < myShuffle.length; i++) {
    let card = myShuffle[i];
    console.log(card);
  }
  