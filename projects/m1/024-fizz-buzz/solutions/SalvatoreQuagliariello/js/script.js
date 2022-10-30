let counter = [];

for (let i = 1; i < 101; i ++) {
    if ((i % 3 !== 0) && (i % 5 !== 0)) {
        counter.push(i);
            
    } else if ((i % 3 === 0) && (i % 5 !== 0)) {
        counter.push("Fizz!");

    } else if ((i % 3 !== 0) && (i % 5 === 0)) {
        counter.push("Buzz!");

    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        counter.push("Fizz-Buzz!");

    }
}
alert(counter.join('\n'));