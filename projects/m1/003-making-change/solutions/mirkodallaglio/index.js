let inputCent = isNumber(prompt('how many cents must he have change?', 'write here the number of cents'));
let rest = inputCent;
let str = '';
let money = {
    name: ['Toonies', 'Loonies', 'Quarters', 'Dimes', 'Nickel', 'Pennies'],
    value: [200,100,25,10,5,1],
    number: []
};

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

    for (i=0; i < 6; i++){
        money.number[i] = Math.trunc(rest / money.value[i]);
        rest = rest - money.number[i] * money.value[i];

        if (money.number[i] !== 0){
            str = str + ' ' + money.number[i] + ' ' +  money.name[i];
        };
    };

if (!inputCent || rest !== 0){
    alert('Something went wrong, you entered one or more numbers incorrectly ... try again');
}else{
    alert(`for ${inputCent} you will have ${str} in change`);
}