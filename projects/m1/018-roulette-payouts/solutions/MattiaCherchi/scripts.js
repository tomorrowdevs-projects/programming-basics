let rouletteNumbers =[ '00',0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
    20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];

let randNum = rouletteNumbers[Math.floor(Math.random() * rouletteNumbers.length)];

let redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let blackNumbers = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];



let color;
let evenOrOdd;
let rangeNumbers;


if(redNumbers.includes(randNum)){
    color = 'Red';
}else if (blackNumbers.includes(randNum)){
    color = 'Black';
}

if(randNum > 0 && randNum % 2 == 0){
    evenOrOdd = 'Even'
}else if (randNum > 0 && randNum % 2 !=0){
    evenOrOdd = 'odd';
}

if(randNum > 0 && randNum <= 18){
    rangeNumbers = '1 to 18'
}else if (randNum > 18 && randNum <= 36){
    rangeNumbers = '19 to 36'
}


if(randNum == rouletteNumbers[0]){
    alert(`The spin resulted in ${randNum} \nPay ${randNum}`);
}else if(randNum == rouletteNumbers[1]){
    alert(`The spin resulted in ${randNum} \nPay ${randNum}`);
}else{
    alert(`The spin resulted in ${randNum} \nPay ${randNum} \nPay ${color} \nPay ${evenOrOdd} \nPay ${rangeNumbers}`);
}