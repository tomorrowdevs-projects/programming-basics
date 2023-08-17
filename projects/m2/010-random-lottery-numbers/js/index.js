// Generate 6 random numbers between 1 and 49
// Check that the numbers do not contain duplicate
// Format the list in ascending order
const generateNumbers = () => {
    let randomNumber = 0;
    const numbersTicket = [];

    while(numbersTicket.length < 6){
        randomNumber = Math.floor(Math.random() * (49 - 1) + 1)
        if(!numbersTicket.includes(randomNumber)){
            numbersTicket.push(randomNumber)
        }
    }
    return numbersTicket 
}

const randomLottery = () => {
 const listNumbers = generateNumbers()
 return listNumbers.sort((a, b) => a - b)
}

console.log(randomLottery())