let q = prompt('Decimal/Binary number converter, Enter a integer number:');
let result = '';
let r = 0;
let number = q;

if(/^[0-9]+$/.test(q)){

    while (q > 0){
        r = q % 2;
        result = r.toString() + result;
        q = Math.floor(q/2);
    }
    alert(`The number ${number} in binary is: ${result}`)

}else alert('You have to write an integer number !');