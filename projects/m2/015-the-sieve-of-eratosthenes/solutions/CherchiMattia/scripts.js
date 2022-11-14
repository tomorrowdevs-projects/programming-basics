
const userLimit = prompt('calculator of prime numbers between 0 and a limit number. Enter limit number ')

const isPrime = (limit) => {
    const number = [];
    let p = 2;

    for (let i = 0; i <= limit; i++) {
        number.push(i);
    }
    number[1] = 0;


    while (number[p] < limit) {
        if (number[p]) {
            for (let i = p * p; i <= limit; i += p) {
                number[i] = 0;
            }
        }

        p++
    }

    return number.filter(item => item !== 0);
}


console.log(isPrime(userLimit));