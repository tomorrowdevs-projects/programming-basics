// 1. creare funzione che dato un numero restituisca true in caso di numbero perfetto (a. creare un ciclo che calcoli i divisori di un numero b. sommare i divisori e confrontarli con il numero c. se la somma è uguale al numero allora True altrimenti False)2. scrivere un codice che mostri tutti i numeri perfetti da 1 a 10000

function perfNumComputer(a) {
    const numberList = [];
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        a / i
        if (a % i == 0) {                   //calcolo e raggruppamento dei divisori di un numero
            numberList.push(i)
        }
    }
    for (let x = 0; x < numberList.length - 1; x ++){
        sum += numberList[x]                        //somma dei divisori
    }
    if (sum == a) {
        return true;
    } else {
        return false;
    }                                  //verifica se numero e somma dei suoi divisori sono uguali
}
const perfList = []
for (let num = 1; num <= 10000; num++) {
    if (perfNumComputer(num) == true) {
        perfList.push(num)
    }
}
 document.getElementById('demo').innerHTML = perfList;