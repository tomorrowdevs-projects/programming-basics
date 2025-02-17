const sumProperDivisors = (n) => {

    let sum = 0;

    for (let i = 0; i < n; i++) {

        if (n % i === 0) {
            sum += i
        }
    }

    return sum;
}

const checkPerfectNumber = (n) => {

    if (n === sumProperDivisors(n)) {
        return true;
    }
}

for (let i = 1; i < 10000; i++) {
    if (checkPerfectNumber(i)) {
        console.log(`${i} => is a perfect number`)
    }
}