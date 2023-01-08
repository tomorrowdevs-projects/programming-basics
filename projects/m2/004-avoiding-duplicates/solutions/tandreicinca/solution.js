// 1.creare un input che si ripete fino a una condizione (blank line) 2. Mostrare in output ciascuna parola inserita dall'utente solo una volta e nell'ordine di inserimento

const arrayy = [];
let len = arrayy.length;
for (let i = 1; i++;) {
    const res = prompt ('Write something');
    arrayy.push(res);
    if (res == '') {
        break
    }
}
const uniqueSet = new Set(arrayy);
const backToArray = [...uniqueSet];
alert (backToArray);
