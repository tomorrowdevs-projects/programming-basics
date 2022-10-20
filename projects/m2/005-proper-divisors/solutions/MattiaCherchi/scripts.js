const userInteger = parseInt(prompt('Enter a positive integer'));

const getProperDivisors = (n) => {

    const propDivisors = [];

    for (let i = 0; i < n; i++) {

        if (n % i == 0) {
            propDivisors.push(i);
        }
    }

    return propDivisors;
}

const result = getProperDivisors(userInteger);

if (/^[0-9]+$/.test(userInteger)) {
    alert(`The proper divisors of ${userInteger} are:\n${result.join('\n')}`)
} else {
    alert('Error! Enter a positive integer');
}