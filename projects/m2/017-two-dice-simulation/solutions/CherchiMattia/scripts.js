const throwDice = () => {
    const dice_1 = (Math.floor(Math.random() * 6) + 1);
    const dice_2 = (Math.floor(Math.random() * 6) + 1);

    return (dice_1 + dice_2);
}

function NumbObj(n) {
    this.number = n;
    this.frequency = 0;
    this.percFreq = 0;
}



let table = [];

for (let i = 2; i <= 12; i++) {

    const numObj = new NumbObj(i);

    table.push(numObj);
}

for (let i = 1; i <= 1000; i++) {

    const result = throwDice();

    const index = table.map(Object => Object['number']).indexOf(result);

    table[index]['frequency'] = table[index]['frequency'] + 1;
}

for (let i = 0; i <= 10; i++) {
    table[i]['percFreq'] = (table[i]['frequency'] * 100 / 1000) + ' %';
}

console.table(table);






