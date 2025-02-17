function createDesk(){

    // 52 card: values 2 through 9 and characters T, J, Q, K, A. Suit card: s, h, d, c
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suitCard = ['s', 'h', 'd', 'c']

    // Use loop for creating list of cards
    const newDesk = [];
    values.forEach(item => {
        suitCard.forEach(card => newDesk.push(item + card))
    })

    return newDesk
}

// function shuffle order random the desk
function shuffle(desk){
    const deskClone =[...desk]
    const newDesk = []

    while(newDesk.length < 52){
        const randomDesk = Math.floor(Math.random() * deskClone.length)
        newDesk.push(deskClone[randomDesk])
        deskClone.splice(randomDesk,1)
    }

    return newDesk
}

console.log('shuffle desk: ' + shuffle(createDesk()))