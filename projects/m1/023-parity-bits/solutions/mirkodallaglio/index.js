//Non ho trovato il metodo count a meno che non fosse da importare una libreria...forse era riferito a py?
let inputStr = '';

do{
    inputStr = prompt('Enter a 8 bit binary string');
    if(inputStr === null || inputStr.match(/\b[01]{8}\b/) === null && inputStr !== '') {
        alert('you were wrong, you have to write 8 characters 0 or 1');
    }else if(inputStr === ''){
        break;
    }else{
        if((inputStr.match(/1/g)||[]).length % 2 === 0) alert(`For this string ${inputStr} the parity bit is even`);
        else alert(`For this string ${inputStr} the parity bit is odd`);
    }
}while(inputStr !== '')
