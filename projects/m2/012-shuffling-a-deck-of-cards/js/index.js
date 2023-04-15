function createDesk(){
    // 52 card: values 2 through 9 and characters T, J, Q, K, A. Suit card: s, h, d, c
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suitCard = ['s', 'h', 'd', 'c']
    const card = []
    // Use loop for creating list of cards
    for(let suit of suitCard){
        for(let item of values){
        card.push(item + suit)
        }
    }
    return card
}

// function shuffle order random the desk
function shuffle(){
    const desk = createDesk();
    const newDesk = []
    while(newDesk.length <= 52){
        let randomDesk = Math.floor(Math.random() * desk.length)
        newDesk.push(desk[randomDesk])
    }
    return newDesk
}

console.log('desk: ' + createDesk())
console.log('shuffle desk: ' + shuffle())