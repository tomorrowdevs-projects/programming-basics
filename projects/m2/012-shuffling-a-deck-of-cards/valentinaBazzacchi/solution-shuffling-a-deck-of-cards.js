// MAIN PROGRAM
let deck = []; 
console.log(createDeck());

let shuffleDeck;
console.log(shuffle(deck));

// FUNCTIONS
function createDeck() {
    let suits = ["s", "h", "d", "c"];
    let values = ["T", "J", "Q", "K", "A"];
    
    suits.forEach(function(suit){
        for (let i = 2, y = 0; i < 15; i++) {
            
            if (i <= 9) {
                deck.push(i + suit);
            } else {
                deck.push(values[y] + suit);
                y++;
            } // end condition
        
        } // end For loop
    }) // end forEach   
    return deck;
} // end function 

function shuffle(list) {
    shuffleDeck = list;
    
    for (let i = 0; i < shuffleDeck.length; i++) {
        
        let randomIndex = Math.floor(Math.random() * (52 - i)) + i;    
        let currentCard = shuffleDeck[i];
        shuffleDeck[i] = shuffleDeck[randomIndex];
        shuffleDeck[randomIndex] = currentCard;
        
    } // end For loop
    return shuffleDeck;
}// end function