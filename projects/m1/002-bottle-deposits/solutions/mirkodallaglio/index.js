let smallContainer = 0;
let bigContainer = 0;
let yourMoney = 0;
const smallValue = 0.1;
const bigValue = 0.25;

function isNumber (i){
    let parInt = parseInt(i);

    if(isNaN(parInt) || parInt === '' || parInt === null){
        return false;
    }

    if(i.length > parInt.length){
        return false;
    }

    return parInt;
};

do{
    smallContainer = isNumber(prompt('how many containers do you have of one liter or less?', 'write here the number of containers'));
    bigContainer = isNumber(prompt('how many containers do you have larger than a liter?', 'write here the number of containers'));

    if (smallContainer && bigContainer){
        yourMoney =smallContainer * smallValue + bigContainer * bigValue;
        alert(`the total you must have is $ ${yourMoney.toFixed(2)}`);
    }else{
        alert('Something went wrong, you entered one or more numbers incorrectly ... try again');
    };
}
while(yourMoney === 0);