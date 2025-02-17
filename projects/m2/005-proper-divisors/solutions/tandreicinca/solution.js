// 1. Creare una funzione che calcoli tutti i divisori di un numero e li metta in un array (a. prendere in considerazione un numero b. creare un ciclo che divida il numero per tutti i numeri <= al numero c. restituire solamente i valori che hanno resto 0) 2. Chiedere in input un numero 3. Mostrare in output i divisori di quel numero.

function divisorComputer(a) {
    const divisorList = [];
    for (let i = 1; i <= a; i++) {
        a / i;
        if (a % i == 0) {
            divisorList.push(i)
        };
    };
    return divisorList;
}

let number = prompt ('Insert a number and I am gonna show you its divisors');
alert ('The divisors of ' + number + ' are ' + divisorComputer(number));