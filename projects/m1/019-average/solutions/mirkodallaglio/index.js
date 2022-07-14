let collectionValue =[];
let number = 0;
let sum = 0;
let avarage = 0;

do{
    number = prompt('Computes the avarage, insert a value. Enter 0 to calculate');

    if(number === null || isNaN(number) || number === '') alert('Something went wrong, you entered a number incorrectly ... try again');
    else if(number !== '0') collectionValue.push(Number(number));
}
while(number != 0);

collectionValue.forEach(number => sum += number);
avarage = sum / collectionValue.length;    
alert(`The avarage is ${avarage}`);
