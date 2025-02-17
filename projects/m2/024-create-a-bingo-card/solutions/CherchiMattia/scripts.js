const randomNumber = (min, max) => {
    let numberCard = new Set();
    while (numberCard.size < 5) {
        numberCard.add(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return numberCard = [...numberCard].sort((a, b) => a - b)


}

const createCarde = () => {

    const bingoCard = {
        '1-B': randomNumber(1, 15),
        '2-I': randomNumber(16, 30),
        '3-N': randomNumber(31, 45),
        '4-G': randomNumber(46, 60),
        '5-O': randomNumber(61, 75)
    }

    return bingoCard
}

let bingoCard = createCarde()

console.log(bingoCard);