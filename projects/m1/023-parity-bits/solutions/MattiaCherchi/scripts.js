
let userBits = prompt('Enter 8 bits');
let correctBits = /^[0-1]{8}$/.test(userBits);
let bit;

if(correctBits){ 
    bit = userBits.split('').map(Number);

}else{

alert('Error: enter a correct number of bits.');

}

let count = 0;

for(let i = 0; i < bit.length; i++){
    count += bit[i];
}


if(count % 2 == 0){
    alert('The parity bit is 0')
}else{
    alert('The parity bit is 1')
}
    