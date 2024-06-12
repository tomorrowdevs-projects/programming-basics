// 1. create a function that represents a deck of cards (a. create two arrays, one with the value of the card and the other one with the suit of the card b. multiply the first array with the second one) 2. create a function that shuffles that deck (a. 3. create a program that demonstrates those functions

function createDeck() {
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']          //first array with values
    suits = ['s', 'h', 'd', 'c']                                                        //second array with suits
    deck = []                                                                           //third array in which I put the merge between the prior arrays' values
    values.map(myFunction)
    function myFunction(value) {
        for (i = 0; i < suits.length; i++) {
            card = value + suits[i]
            deck.push(card)
        }
    }
    console.log(deck)
    return deck;
}
// trying to figure the shuffle function out [work in progress...]
function shuffle(deck) {
    len = deck.length
    randomDeck = []
    ranLen = randomDeck.length
    for (i = 0; i < 10000; i++) {
        random = Math.floor(Math.random() * (len - 1))        // I find a way to put into a new array named randomDeck a random value from the original deck
        randomCard = deck[random]
        if (randomDeck.includes(randomCard) != true)  {       // I even find a way to don't put duplicates within
            randomDeck.push(randomCard) 
        }
        if (randomDeck.length == deck.length) {               // Until the length reach the original length
            break
        } 
    }                                           // I don't know why, but the prior code populate the randomDeck until 51 elements instead of 52

    console.log(randomDeck)
    return randomDeck;
}

alert(shuffle(createDeck()))