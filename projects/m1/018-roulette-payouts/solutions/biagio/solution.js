let allNumber = ["00", 0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
let redNumber = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
let greenNumber = [0, "00"]

/*
, Single number (1 to 36, 0, or 00)
, Red versus Black
, Odd versus Even (Note that 0 and 00 do not pay out for even) 
, 1 to 18 versus 19 to 36

Output example
The spin resulted in 13...
Pay 13
Pay Black
Pay Odd
Pay 1 to 18

*/

function spinRoulette(max) {
    let number = Math.floor(Math.random() * max + 1)
    let randomNumber = allNumber[number]
    if (randomNumber % 2 === 0) {
        //red even
        if ((redNumber.includes(randomNumber) === true) && (randomNumber <= 18) && (greenNumber.includes(randomNumber) === false)) {
            console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Red\nPay Even\nPay 1 to 18`)
        } else if ((redNumber.includes(randomNumber) === true) && (randomNumber > 18) && (greenNumber.includes(randomNumber) === false)) {
            console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Red\nPay Even\nPay 19 to 36`)
        } //green
        else if (greenNumber.includes(randomNumber) === true) {
            console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}`)
        }
        //black even
        else if ((redNumber.includes(randomNumber) === false) && (randomNumber <= 18) && (greenNumber.includes(randomNumber) === false)) {
            console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Black\nPay Even\nPay 1 to 18`)
        } else if ((redNumber.includes(randomNumber) === false) && (randomNumber > 18) && (greenNumber.includes(randomNumber) === false)) {
            console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Black\nPay Even\nPay 19 to 36`)
        }
    } //red
    else if ((redNumber.includes(randomNumber) === true) && (randomNumber <= 18) && (greenNumber.includes(randomNumber) === false)) {
        console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Red\nPay Odd\nPay 1 to 18`)
    } else if ((redNumber.includes(randomNumber) === true) && (randomNumber > 18) && (greenNumber.includes(randomNumber) === false)) {
        console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Red\nPay Odd\nPay 19 to 36`)
    } //green
    else if (greenNumber.includes(randomNumber) === true) {
        console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}`)
    }
    //black even
    else if ((redNumber.includes(randomNumber) === false) && (randomNumber <= 18) && (greenNumber.includes(randomNumber) === false)) {
        console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Black\nPay Odd\nPay 1 to 18`)
    } else if ((redNumber.includes(randomNumber) === false) && (randomNumber > 18) && (greenNumber.includes(randomNumber) === false)) {
        console.log(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay Black\nPay Odd\nPay 19 to 36`)
    }

}
spinRoulette(36)