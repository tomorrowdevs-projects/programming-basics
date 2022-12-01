
// i create a function called  "createDeck" where i loop every element of values on every element of suit, to create my deck of 52 cards;
function createDeck () {    

    let array = [];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    let suits = ["S", "C", "D", "H"];


    for (suit of suits) {

        for (value of values) {
            let card = suit + value;
            array.push(card);
        }
    }

    return array;

}

let deck = createDeck();


// here i used a modified version of the Durstenfeld algorithm, where every element, once picked, it's excluded from the next draw, perfect for this type of exercise as it swaps the picked element with the current one, then picks the next random element from the remainder.
function suffleDeck (deck) {

    for (i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

suffleDeck(deck);

alert(deck.join(" - "));
